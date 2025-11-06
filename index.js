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
  const saturation = Math.floor(Math.random() * 50) + 50;
  const lightness = Math.floor(Math.random() * 70) + 30;
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

/** javascript for danmu begin**/

//TODO: convert to custom html element

const danmuTexts = [
  "欢迎来到此网页！",
  "这是一个好弹幕！",
  "Hello World!",
  "这是一份像社团的社工，一个是社工的社团!",
  "加入我们，收获爱情！",
  "必将如闪电般归来",
  //"未央书院举起挑战杯",
  //"未央科协被评为优秀科协！",
];

function createDanmu(text) {
  const container = document.getElementById("danmu__container");
  const danmu = document.createElement("div");
  danmu.textContent = text;
  danmu.className = "danmu__text";
  danmu.style.color = generateRandomBlueHues();
  const width = Math.min(window.innerWidth, 120 * 8);
  const size = Math.random() + 1;
  danmu.style.animationDuration = size * (width / 300) + "s";
  danmu.style.fontSize = 30 / size + "px";
  danmu.style.zIndex = size * 100;
  danmu.style.top = Math.random() * (container.offsetHeight - 30) + 15 + "px";
  container.appendChild(danmu);

  danmu.addEventListener("animationend", function () {
    danmu.remove();
  });
}

function startDanmuStream(interval) {
  let start = 0;
  function loop(now) {
    const elapsed = now - start;
    if (elapsed > interval) {
      const text = danmuTexts[Math.floor(Math.random() * danmuTexts.length)];
      createDanmu(text);
      start = now;
    }
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
}

startDanmuStream(400);

/** javascript for danmu end**/

/** javascript for navbars begin**/
const toggleButton = document.querySelector(".navbar__toggle");
const navbarMenu = document.querySelector(".navbar__menu");

new CozeWebSDK.WebChatClient({
  /**
   * Agent or app settings
   * for agent
   * @param config.bot_id - Agent ID.
   * for app
   * @param config.type - To integrate a Coze app, you must set the value to app.
   * @param config.isIframe - Whether to use the iframe method to open the chat box
   * @param config.appInfo.appId - AI app ID.
   * @param config.appInfo.workflowId - Workflow or chatflow ID.
   */
  config: {
    type: "bot",
    bot_id: "7565081803653611529",
    isIframe: false,
  },
  /**
   * The auth property is used to configure the authentication method.
   * @param type - Authentication method, default type is 'unauth', which means no authentication is required; it is recommended to set it to 'token', which means authentication is done through PAT (Personal Access Token) or OAuth.
   * @param token - When the type is set to 'token', you need to configure the PAT (Personal Access Token) or OAuth access key.
   * @param onRefreshToken - When the access key expires, a new key can be set as needed.
   */
  auth: {
    type: "token",
    token:
      "pat_XUWht6ZdPku8awOtm4bRnodYBTTkf2VOM0oaAKLZFLicE0vD80J6VwbCKSQYpKLw",
    onRefreshToken: async () => "token",
  },
  /**
   * The userInfo parameter is used to set the display of agent user information in the chat box.
   * @param userInfo.id - ID of the agent user.
   * @param userInfo.url - URL address of the user's avatar.
   * @param userInfo.nickname - Nickname of the agent user.
   */
  userInfo: {
    id: "user",
    url: "https://lf-coze-web-cdn.coze.cn/obj/eden-cn/lm-lgvj/ljhwZthlaukjlkulzlp/coze/coze-logo.png",
    nickname: "User",
  },
  ui: {
    /**
     * The ui.base parameter is used to add the overall UI effect of the chat window.
     * @param base.icon - Application icon URL.
     * @param base.layout - Layout style of the agent chat box window, which can be set as 'pc' or'mobile'.
     * @param base.lang - System language of the agent, which can be set as 'en' or 'zh-CN'.
     * @param base.zIndex - The z-index of the chat box.
     */
    base: {
      icon: "https://lf-coze-web-cdn.coze.cn/obj/eden-cn/lm-lgvj/ljhwZthlaukjlkulzlp/coze/chatsdk-logo.png",
      layout: "pc",
      lang: "en",
      zIndex: 1000,
    },
    /**
     * Controls whether to display the top title bar and the close button
     * @param header.isShow - Whether to display the top title bar.
     * @param header.isNeedClose - Whether to display the close button.
     */
    header: {
      isShow: true,
      isNeedClose: true,
    },
    /**
     * Controls whether to display the floating ball at the bottom right corner of the page.
     */
    asstBtn: {
      isNeed: true,
    },
    /**
     * The ui.footer parameter is used to add the footer of the chat window.
     * @param footer.isShow - Whether to display the bottom copy module.
     * @param footer.expressionText - The text information displayed at the bottom.
     * @param footer.linkvars - The link copy and link address in the footer.
     */
    footer: {
      isShow: true,
      expressionText: "Powered by WYAST",
    },
    /**
     * Control the UI and basic capabilities of the chat box.
     * @param chatBot.title - The title of the chatbox
     * @param chatBot.uploadable - Whether file uploading is supported.
     * @param chatBot.width - The width of the agent window on PC is measured in px, default is 460.
     * @param chatBot.el - Container for setting the placement of the chat box (Element).
     */
    chatBot: {
      title: "未小羊",
      uploadable: true,
      width: 390,
    },
  },
});

toggleButton.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");
});
/** javascript for navbars end**/
