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

function createDanmu(text) {
    const container = document.getElementById('danmu__container');
    const danmu = document.createElement('div');
    danmu.textContent = text;
    danmu.className = 'danmu';
    danmu.style.color = colors[Math.floor(Math.random() * colors.length)];
    danmu.style.position = 'absolute';
    danmu.style.left = container.offsetWidth + 'px';
    danmu.style.top = Math.random() * (container.offsetHeight - 20) + 'px';
    danmu.style.whiteSpace = 'nowrap';
    danmu.style.fontWeight = 'bold';
    container.appendChild(danmu);

    // 设置弹幕移动
    const move = () => {
        const left = danmu.offsetLeft - 2;
        if (left < -danmu.offsetWidth) {
            danmu.remove();
        } else {
            danmu.style.left = left + 'px';
            requestAnimationFrame(move);
        }
    };
    move();
}

const danmuTexts = [
    "欢迎来到未央科协！",
    "这是一个测试弹幕！",
    "Hello World!",
    "这是一份像社团的社工，一个是社工的社团!",
    "加入科协，收获爱情！",
];

function startDanmuStream(interval = 800) {
    setInterval(() => {
        const text = danmuTexts[Math.floor(Math.random() * danmuTexts.length)];
        createDanmu(text);
    }, interval);
}

startDanmuStream();
