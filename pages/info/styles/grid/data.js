document.addEventListener("alpine:init", () => {
  Alpine.data("MockArticles", () => {
    return {
      articles: [
        {
          title: "开小会",
          time: "2024-03-10",
          intro: "今天我们开了小会，讨论了一些事情。",
          link: "#",
        },
        {
          title: "庆祝闰日",
          time: "2024-02-29",
          intro: "今天是闰日，我们开了一个小party。大家都很开心🥳",
          link: "#",
        },
        {
          title: "看到一只大松鼠",
          time: "2024-02-15",
          intro: "今天在树林里看到一只大松鼠🐿️",
          link: "#",
        },
        {
          title: "我是一个非常长的标题。",
          time: "2024-02-03",
          intro:
            "很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长",
          link: "#",
        },
        // Add more articles as needed
        {
          title: "更多内容",
          time: "2024-02-01",
          link: "#",
        },
        {
          title: "更多内容",
          time: "2024-02-01",
          link: "#",
        },
        {
          title: "更多内容",
          time: "2024-02-01",
          link: "#",
        },
        {
          title: "更多内容",
          time: "2024-02-01",
          link: "#",
        },
        {
          title: "更多内容",
          time: "2024-02-01",
          link: "#",
        },
      ],
    };
  });
});
