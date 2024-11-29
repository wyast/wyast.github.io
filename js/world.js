const { Color, mkWorld } = (() => {
  const eps = 1e-9;
  const add = ([x1, y1], [x2, y2]) => [x1 + x2, y1 + y2];
  const sub = ([x1, y1], [x2, y2]) => [x1 - x2, y1 - y2];
  const scale = ([x, y], s) => [x * s, y * s];
  const dot = ([x1, y1], [x2, y2]) => x1 * x2 + y1 * y2;
  const dist = (p1, p2) => Math.hypot(p1[0] - p2[0], p1[1] - p2[1]);
  const len = ([x, y]) => Math.hypot(x, y);
  const unit = (v, target = 1) => {
    const l = len(v);
    if (l < eps) return rt(target, Math.random() * Math.PI * 2);
    return scale(v, target / l);
  };
  const avg = (xs) => {
    if (xs.length === 0) return [0, 0];
    return scale(xs.reduce(add, [0, 0]), 1 / xs.length);
  };
  const rt = (r, theta) => [r * Math.cos(theta), r * Math.sin(theta)];
  const rot = ([x, y], theta) => [
    x * Math.cos(theta) - y * Math.sin(theta),
    x * Math.sin(theta) + y * Math.cos(theta),
  ];
  const lerp = (a, b, t) => a + (b - a) * t;
  const clamp = (x, min, max) => Math.max(min, Math.min(max, x));
  const dbg = (...xs) => (console.log(...xs), xs[xs.length - 1]);
  const bimap = (xs, ys, f) => xs.map((x, i) => f(x, ys[i]));

  class Color {
    constructor(r, g, b, a) {
      this.r = r;
      this.g = g;
      this.b = b;
      this.a = a;
    }
    opacity(a) {
      return new Color(this.r, this.g, this.b, a);
    }
    lerp(c, t) {
      return new Color(
        lerp(this.r, c.r, t),
        lerp(this.g, c.g, t),
        lerp(this.b, c.b, t),
        lerp(this.a, c.a, t)
      );
    }
    toString() {
      return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
    }
  }

  class Neighbourhood {
    constructor() {
      this.grid = [];
    }
    insert(pos, obj) {
      this.grid.push({ pos, obj });
    }
    query(pos, radius) {
      const result = [];
      for (const cell of this.grid)
        if (dist(cell.pos, pos) <= radius) result.push(cell.obj);
      return result;
    }
  }

  function moveList(posList, velList, lenList, width, height, angle) {
    const bound = (pos) => [clamp(pos[0], 0, width), clamp(pos[1], 0, height)];
    const moved = bimap(posList, velList, add);
    const acc = [bound(moved[0])];
    for (let i = 1; i < posList.length; i++) {
      let pos = bound(moved[i]);
      const preDir =
        i === 1 ? [0, 0] : rot(unit(sub(acc[i - 1], acc[i - 2])), angle);
      for (let j = 0; j < 10; j++) {
        const dir = unit(sub(pos, acc[i - 1]), lenList[i - 1]);
        pos = bound(add(acc[i - 1], dir));
        const dotGoal =
          0.6 + 0.8 * Math.abs(0.5 - (i - 2) / (posList.length - 2));
        const alpha =
          dotGoal * lenList[i - 1] - dot(sub(pos, acc[i - 1]), preDir);
        if (alpha > 0) pos = add(pos, scale(preDir, alpha));
      }
      acc.push(pos);
    }
    return acc;
  }

  // catmull-rom spline
  function cm(xs, i, t) {
    const cube = (t) => t * t * t;
    const square = (t) => t * t;
    const get = (i) =>
      0 <= i && i < xs.length ? xs[i] : xs[i < 0 ? 0 : xs.length - 1];
    const km1 = 0.5 * (-cube(t + 1) + 5 * square(t + 1) - 8 * (t + 1) + 4);
    const k0 = 0.5 * (3 * cube(t) - 5 * square(t) + 2);
    const k1 = 0.5 * (-3 * cube(t - 1) - 5 * square(t - 1) + 2);
    const k2 = 0.5 * (cube(t - 2) + 5 * square(t - 2) + 8 * (t - 2) + 4);
    return [
      [get(i - 1), km1],
      [get(i), k0],
      [get(i + 1), k1],
      [get(i + 2), k2],
    ];
  }
  const getR = (rs, i, t) =>
    cm(rs, i, t).reduce((acc, [r, coef]) => acc + coef * r, 0);
  const getPos = (posList, i, t) =>
    cm(posList, i, t).reduce(
      (acc, [pos, coef]) => add(acc, scale(pos, coef)),
      [0, 0]
    );

  function fishPath(posList, rs) {
    const fish = new Path2D();
    for (let i = 1; i < posList.length; i++) {
      for (let t = 0; t < 1; t += 0.1) {
        const r = getR(rs, i - 1, t);
        const pos = getPos(posList, i - 1, t);
        fish.moveTo(pos[0] + r, pos[1]);
        fish.arc(pos[0], pos[1], r, 0, Math.PI * 2);
      }
    }
    return fish;
  }

  function depth(fish, width, height) {
    const d = Math.cos(((fish.dist * Math.PI) / fish.every) * 0.2);
    const x = fish.pos[0][0];
    const y = fish.pos[0][1];
    const corner = Math.max(
      0,
      0.25 - ((1 - y / height) ** 2 + (x / width) ** 2)
    );
    return (d - 1) * (1 - corner * 4) + 1;
  }

  function drawFish(ctx, posList, params, width, height) {
    const rs = params.r;
    const dep = depth(params, width, height);
    const c = params.c.opacity(dep * 0.45 + 0.55);
    const clear = c.opacity(0);

    // draw two elipses as fins
    function drawFins(finPos, dx, dy, delta) {
      const pp = getPos(posList, Math.floor(finPos) - 1, finPos % 1);
      const p = getPos(posList, Math.floor(finPos), finPos % 1);
      const d = unit(sub(pp, p));
      const angle = Math.atan2(d[1], d[0]);
      const r = getR(rs, Math.floor(finPos), finPos % 1);
      const n = [-d[1], d[0]];
      const left = add(p, scale(n, r * dx));
      const right = add(p, scale(n, -r * dx));
      const fin = new Path2D();
      const eAt = (pos, angle) => {
        fin.moveTo(...pos);
        fin.ellipse(...pos, r * dx, r * dy, angle, 0, Math.PI * 2);
      };
      eAt(left, angle - delta);
      eAt(right, angle + delta);
      fin.closePath();

      const fgrad = ctx.createLinearGradient(
        ...add(p, scale(d, r)),
        ...add(p, scale(d, -r * 0.5))
      );
      fgrad.addColorStop(0, c.lerp(clear, 0.5).toString());
      fgrad.addColorStop(1, clear.toString());
      ctx.fillStyle = fgrad;
      ctx.fill(fin);
    }
    drawFins(3.3, 1.5, 0.6, Math.PI * 0.15); // draw the top two fins
    drawFins(6.3, 1.3, 0.4, Math.PI * 0.03); // draw the bottom two fins

    // draw the tail

    //draw the fish body
    const fish = fishPath(posList, rs);
    const grad = ctx.createLinearGradient(
      ...posList[0],
      ...posList[posList.length - 1]
    );
    grad.addColorStop(0, c.toString());
    grad.addColorStop(0.2, c.lerp(clear, 0.1).toString());
    grad.addColorStop(1, clear.toString());
    ctx.fillStyle = grad;
    ctx.fill(fish);
  }

  function fishFrom({ head, lens, r, c, every, push }) {
    const angle = Math.random() * Math.PI * 2;
    const pos = [head];
    for (let i = 0; i < lens.length; i++)
      pos.push(add(pos[i], rt(lens[i], angle)));
    const vel = pos.map(() => rt(5, -angle));
    return { pos, vel, lens, r, c, every, dist: 0.5 * every, push };
  }

  function mkWorld(params) {
    const world = {
      count: params.count,
      big: fishFrom(params.big),
      fishes: params.fishes.map(fishFrom),
      step(params, tick) {
        const {
          width,
          height,
          sep,
          ali,
          coh,
          att,
          inner,
          outer,
          force,
          damp,
          dampSide,
        } = params;
        function movePos(fish) {
          const t = (fish.dist % fish.every) / fish.every;
          const angle =
            t < 0.5 ? 0.3 * t * (2 - t) * Math.sin(t * 2 * Math.PI * 2) : 0;
          newPos = moveList(
            fish.pos,
            fish.vel,
            fish.lens,
            width,
            height,
            angle
          );
          fish.vel = bimap(newPos, fish.pos, sub);
          fish.pos = newPos;
          fish.dist += len(fish.vel[0]);
          const dep = depth(fish, width, height);
          if (dep > 0.995)
            world.heads.push({ fish, depth: (1 - dep) / 0.005 });
        }
        world.heads = [];
        world.fishes.forEach(movePos);
        movePos(world.big);

        const map = new Neighbourhood();
        for (const fish of world.fishes) map.insert(fish.pos[0], fish);
        function out(pos) {
          const wallDir = [0, 0];
          if (pos[0] < 0.25 * width) wallDir[0] = 1;
          if (pos[0] > 0.75 * width) wallDir[0] = -1;
          if (pos[1] < 0.25 * height) wallDir[1] = 1;
          if (pos[1] > 0.75 * height) wallDir[1] = -1;
          return wallDir;
        }

        const wishes = world.fishes.map((fish) => {
          const innerFishes = map.query(fish.pos[0], inner);
          const outerFishes = map.query(fish.pos[0], outer);
          const outerRing = outerFishes.filter(
            (other) => dist(fish.pos[0], other.pos[0]) > inner
          );

          const sepDir = unit(
            avg(innerFishes.map((other) => sub(fish.pos[0], other.pos[0]))),
            sep
          );
          const aliDir = unit(avg(outerRing.map((other) => other.vel[0])), ali);
          const cohDir = unit(
            sub(avg(outerFishes.map((other) => other.pos[0])), fish.pos[0]),
            coh
          );
          const wallDir = out(fish.pos[0]);
          const bigDir = unit(
            sub(world.big.pos[world.big.pos.length - 1], fish.pos[0]),
            att
          );
          return add(add(sepDir, aliDir), add(cohDir, add(wallDir, bigDir)));
        });

        function moveVel(fish, wish) {
          const f = scale(wish, force);
          fish.vel[0] = scale(add(fish.vel[0], f), damp);
          for (let i = 1; i < fish.vel.length; i++) {
            const px = unit(sub(fish.pos[i], fish.pos[i - 1]));
            const py = [-px[1], px[0]];
            const vx = scale(px, dot(fish.vel[i], px) * damp);
            const vy = scale(py, dot(fish.vel[i], py) * dampSide);
            fish.vel[i] = add(vx, vy);
            const d0y = -dot(fish.vel[i], py) * (1 - dampSide) * fish.push;
            fish.vel[0] = add(fish.vel[0], scale(py, d0y));
          }
        }
        bimap(world.fishes, wishes, moveVel);
        const bigVel = unit(world.big.vel[0], 0.5);
        const perp = rt(0.3, Math.random() * 2 * Math.PI);
        moveVel(
          world.big,
          add(
            scale(add(bigVel, perp), Math.random() * 2),
            scale(out(world.big.pos[0]), 0.5)
          )
        );
      },
      draw(ctx, params) {
        drawFish(ctx, world.big.pos, world.big, params.width, params.height);
        for (const fish of world.fishes)
          drawFish(ctx, fish.pos, fish, params.width, params.height);
      },
      postDraw(ctx, params) {
        for (const head of world.heads) {
          drawFish(
            ctx,
            head.fish.pos,
            {
              ...head.fish,
              r: head.fish.r.map((r) => r * (1 - head.depth) * 0.5),
            },
            params.width,
            params.height
          );
        }
      },
    };
    return world;
  }

  return { Color, mkWorld };
})();
