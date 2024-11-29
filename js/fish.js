const view = document.getElementById("headpic-anim");
const ctx = view.getContext("2d", { willReadFrequently: true });
const bgYellow = new Color(241, 229, 205, 1);
// paper like yellow
const blue = new Color(0, 134, 169, 1);
const gray = new Color(37, 44, 44, 1);
const clear = new Color(255, 255, 255, 0);
const darkgreen = new Color(115, 124, 114, 1);
const params = {
  sep: 1.4,
  ali: 0.8,
  coh: 0.8,
  att: 0.4,
  inner: 100,
  outer: 200,
  force: 0.25,
  damp: 0.97,
  dampSide: 0.6,
};
function mkBg(width, height) {
  function generatePerlinNoise(width, height) {
    const noise = [];
    for (let y = 0; y < height; y++) {
      noise[y] = [];
      for (let x = 0; x < width; x++) {
        noise[y][x] = Math.random();
      }
    }
    // Simple smoothing
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        noise[y][x] =
          (noise[y][x] +
            noise[y][(x + 1) % width] +
            noise[(y + 1) % height][x] +
            noise[y][(x - 1 + width) % width] +
            noise[(y - 1 + height) % height][x]) /
          5;
      }
    }
    return noise;
  }
  const perlinNoise = generatePerlinNoise(width, height);
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = bgYellow.toString();
  ctx.fillRect(0, 0, width, height);
  // draw the leaves
  for (let i = 0; i < width * height * 0.0025; i++) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    const corner = 0.15 - ((1 - y / height) ** 2 + (x / width) ** 2);
    const diff = perlinNoise[Math.floor(y)][Math.floor(x)] - corner * 1.7;
    if (diff < 0) {
      i--;
      continue;
    }
    const color = darkgreen.lerp(clear, diff);
    const r = Math.random() * 5 + 10;
    const num = Math.random() * 5 + 7;
    for (let j = 0; j < num; j++) {
      const angle = ((Math.PI * 2) / num) * j;
      ctx.beginPath();
      ctx.ellipse(
        x + r * Math.cos(angle) * 0.7,
        y + r * Math.sin(angle) * 0.7,
        r,
        r * 0.2,
        angle + Math.random() * 0.5 - 0.25,
        0,
        Math.PI * 2
      );
      ctx.fillStyle = color.toString();
      ctx.fill();
    }
  }

  const imageData = ctx.getImageData(0, 0, width, height);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const index = (y * width + x) * 4;
      const value = perlinNoise[y][x] * 30;
      imageData.data[index] += value;
      imageData.data[index + 1] += value;
      imageData.data[index + 2] += value;
    }
  }
  return imageData;
}
let bgImg;
let rippleMap, lastMap;
let oldIdx, newIdx;
let texture, ripple;
let size;
function resize(width, height) {
  view.width = width;
  view.height = height;
  bgImg = mkBg(width, height);
  params.width = width;
  params.height = height;
  size = width * (height + 2) * 2;
  rippleMap = new Int16Array(size);
  lastMap = new Int16Array(size);
  oldIdx = width;
  newIdx = width * (height + 3);
}
let vw = window.innerWidth - 20;
let vh =
  vw < 960 ? window.innerHeight - 20 : Math.min(560, window.innerHeight - 20);
view.style.width = vw + "px";
view.style.height = vh + "px";
resize(2 * vw, 2 * vh);
window.addEventListener("resize", () => {
  vw = window.innerWidth - 20;
  vh =
    vw < 960 ? window.innerHeight - 20 : Math.min(560, window.innerHeight - 20);
  view.style.width = vw + "px";
  view.style.height = vh + "px";
  resize(2 * vw, 2 * vh);
});

const world = mkWorld({
  big: {
    head: [600, 600],
    lens: [15, 40, 40, 40, 40, 40, 40, 40, 80],
    r: [15, 20, 28, 32, 35, 30, 24, 18, 12, 6],
    c: blue,
    every: 1600,
    push: 0.1,
  },
  fishes: Array.from({ length: 12 }, () => ({
    head: [600, 600],
    lens: [6, 12, 12, 12, 12, 14, 16, 16, 32],
    r: [6, 8, 11.2, 12.8, 14, 12, 9.6, 7.2, 4.8, 2.4],
    c: gray.lerp(clear, 0.15),
    every: 200,
    push: 0.14,
  })),
});

function dropAt(dx, dy, r) {
  // Make certain dx and dy are integers
  // Shifting left 0 is slightly faster than parseInt and math.* (or used to be)
  dx <<= 0;
  dy <<= 0;
  r <<= 0;
  // Our ripple effect area is actually a square, not a circle
  for (let j = dy - r; j < dy + r; j++) {
    for (let k = dx - r; k < dx + r; k++) {
      rippleMap[oldIdx + j * params.width + k] += 512;
    }
  }
}

const clamp = (x, min, max) => Math.max(min, Math.min(max, x));
function mkRipple() {
  let mapIdx = newIdx;
  newIdx = oldIdx;
  oldIdx = mapIdx;

  let i = 0;
  for (let y = 0; y < params.height; y++) {
    for (let x = 0; x < params.width; x++) {
      let data =
        (rippleMap[mapIdx - params.width] +
          rippleMap[mapIdx + params.width] +
          rippleMap[mapIdx - 1] +
          rippleMap[mapIdx + 1]) >>
        1;
      data -= rippleMap[newIdx + i];
      data -= data >> 5; // damping
      rippleMap[newIdx + i] = data;
      data = 1024 - data;
      const oldData = lastMap[i];
      lastMap[i] = data;
      if (oldData !== data) {
        let a =
          ((((x - params.width / 2) * data) / 1024) << 0) + params.width / 2;
        let b =
          ((((y - params.height / 2) * data) / 1024) << 0) + params.height / 2;
        a = clamp(a, 0, params.width - 1);
        b = clamp(b, 0, params.height - 1);
        const newPixel = (a + b * params.width) * 4;
        const curPixel = i * 4;
        ripple.data[curPixel] = texture.data[newPixel];
        ripple.data[curPixel + 1] = texture.data[newPixel + 1];
        ripple.data[curPixel + 2] = texture.data[newPixel + 2];
      }
      mapIdx++;
      i++;
    }
  }
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const fps = 60;
async function loop(i) {
  const clk = new Date();
  world.step(params, i);
  ctx.putImageData(bgImg, 0, 0);
  world.draw(ctx, params);
  // draw ripples
  for (const head of world.heads) {
    dropAt(...head.fish.pos[0], 7 - head.depth * 7);
  }
  texture = ctx.getImageData(0, 0, params.width, params.height);
  ripple = ctx.getImageData(0, 0, params.width, params.height);
  mkRipple();
  ctx.putImageData(ripple, 0, 0);
  world.postDraw(ctx, params);
  const diff = new Date() - clk;
  await sleep(Math.max(0, 1000 / fps - diff));
  requestAnimationFrame(() => loop(i + 1));
}
loop(0);
