const colors = [
    '#FF0000',
    '#00FF00',
    '#0000FF',
    '#FFFF00',
    '#00FFFF',
    '#FF00FF',
    '#FFA500',
    '#800080',
    '#008000',
    '#800000',
    '#000080',
    '#808000',
    '#008080',
    '#808080',
]

const danmuTexts = [
    "欢迎来到未央科协！",
    "这是一个测试弹幕！",
    "Hello World!",
    "这是一份像社团的社工，一个是社工的社团!",
    "加入科协，收获爱情！",
];

function createDanmu(text) {
    const container = document.getElementById('danmu__container');
    const danmu = document.createElement('div');
    danmu.textContent = text;
    danmu.className = 'danmu';
    danmu.style.color = colors[Math.floor(Math.random() * colors.length)];
    danmu.style.animationDuration = (Math.random() + 1) * 2 + 's';
    danmu.style.top = Math.random() * (container.offsetHeight - 20) + 'px';
    container.appendChild(danmu);

    // 动画结束后删除
    danmu.addEventListener('animationend', function () {
        danmu.remove();
    });
}

function startDanmuStream(interval = 300) {
    setInterval(() => {
        const text = danmuTexts[Math.floor(Math.random() * danmuTexts.length)];
        createDanmu(text);
    }, interval);
}

startDanmuStream();
