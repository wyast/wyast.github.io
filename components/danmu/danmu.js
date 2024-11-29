const colors = {
    black: "#000",
    white: "#fff",
    nearBlack: "#1c1c1c",
    darkGray: "#454545",
    midGray: "#6e6e6e",
    moonGray: "#c4c4c4",
    lightGray: "#e2e2e2",
    nearWhite: "#f5f5f5",
    gray: "#929292",
    silver: "#e8e8e8",
    lightSilver: "#efefef",
    transparent: "transparent",
    black90: "#16191d",
    black80: "#2c313a",
    black70: "#434a56",
    black60: "#596373",
    black50: "#6f7c90",
    black40: "#8c96a6",
    black30: "#a9b0bc",
    black20: "#c5cad3",
    black10: "#e2e5e9",
    black05: "rgba(0, 0, 0, 0.05)",
    black025: "rgba(0, 0, 0, 0.025)",
    black0125: "rgba(0, 0, 0, 0.013)",
    white90: "hsla(0, 0%, 100%, 0.9)",
    white80: "hsla(0, 0%, 100%, 0.8)",
    white70: "hsla(0, 0%, 100%, 0.7)",
    white60: "hsla(0, 0%, 100%, 0.6)",
    white50: "hsla(0, 0%, 100%, 0.5)",
    white40: "hsla(0, 0%, 100%, 0.4)",
    white30: "hsla(0, 0%, 100%, 0.3)",
    white20: "hsla(0, 0%, 100%, 0.2)",
    white10: "hsla(0, 0%, 100%, 0.1)",
    white05: "hsla(0, 0%, 100%, 0.05)",
    white025: "hsla(0, 0%, 100%, 0.025)",
    white0125: "hsla(0, 0%, 100%, 0.013)",
    darkRed: "#d14040",
    red: "#e14747",
    lightRed: "#e84e4e",
    lightestRed: "#ffcece",
    washedRed: "#feefef",
    orange: "#ff6300",
    gold: "#d39817",
    yellow: "#eac13b",
    lightYellow: "#ebc855",
    lightestYellow: "#f6edcc",
    washedYellow: "#fbf9f1",
    purple: "#5e2ca5",
    lightPurple: "#a463f2",
    darkPink: "#d5008f",
    hotPink: "#ff41b4",
    pink: "#ff80cc",
    lightPink: "#ffa3d7",
    darkGreen: "#257d54",
    green: "#2f9666",
    lightGreen: "#38a070",
    lightestGreen: "#c5e4d6",
    washedGreen: "#ecfbf5",
    navy: "#001b44",
    darkBlue: "#2b50b0",
    blue: "#3b5fc0",
    lightBlue: "#4269d0",
    lightestBlue: "#6384dd",
    washedBlue: "#97bbf4",
    faintBlue: "#dae4ff",
};

function generateRandomBlueHues() {
    const hue = Math.floor(Math.random() * (240 - 210 + 1)) + 210;
    const saturation = Math.floor(Math.random() * 100);
    const lightness = Math.floor(Math.random() * 100);
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

const danmuTexts = [
    "欢迎来到未央科协！",
    "这是一个好弹幕！",
    "Hello World!",
    "这是一份像社团的社工，一个是社工的社团!",
    "加入科协，收获爱情！",
    "未央书院举起挑战杯",
    "未央科协被评为优秀科协！",
];

function createDanmu(text) {
    const container = document.getElementById("danmu__container");
    const danmu = document.createElement("div");
    danmu.textContent = text;
    danmu.className = "danmu__text";
    danmu.style.color = generateRandomBlueHues();
    var width = window.innerWidth;
    var width = Math.min(width, 120 * 8);
    danmu.style.animationDuration = (Math.random() + 1) * (width / 300) + "s";
    danmu.style.top = Math.random() * (container.offsetHeight - 20) + "px";
    container.appendChild(danmu);

    // 动画结束后删除
    danmu.addEventListener("animationend", function () {
        danmu.remove();
    });
}

function startDanmuStream(interval = 500) {
    setInterval(() => {
        const text = danmuTexts[Math.floor(Math.random() * danmuTexts.length)];
        createDanmu(text);
        console.log(text);
    }, interval);
}

startDanmuStream();
