import { defaultTheme } from "@vuepress/theme-default";

export default {
  lang: "zh-CN",
  title: "编程哥 | 编程进阶之路",
  description: "记录学习过程，总结学习经验",
  head: [["link", { rel: "icon", href: "/images/logo.jpg" }]],
  //打包目录地址，并且会在git提交中忽略上传
  dest: ".vuepress/dist",
  theme: defaultTheme({
    navbar: [
      // NavbarItem
      {
        text: "学习路线",
        link: "/md/study-map/study-map.md",
      },
      {
        text: "Java",
        link: "/md/java/java基础.md",
      },
      // NavbarGroup
      {
        text: "Spring",
        children: [
          {
            text: "Spring 手撸专栏",
            link: "/md/spring/develop-spring/001.md",
            // link: 'https://mp.weixin.qq.com/s/olrwapkSTQMyIGpR10ZDzA'
          },
        ],
      },
      {
        text: "部署",
        link: "/",
      },
      {
        text: "Github",
        link: "https://github.com/itdebug",
      },
    ],
    sidebar: {
      "/md/study-map/": getBarStudyMap(),
      "/md/java/": getBarJava(),
      "/md/spring/develop-spring/": getBarSpring(),
    },
  }),
};

function getBarStudyMap() {
  return [
    {
      text: "博客搭建",
      collapsible: false,
      children: [
        {
          text: "Vuepress",
          link: "/md/study-map/vuepress.md",
        },
      ],
    },
  ];
}

function getBarJava() {
  return [
    {
      text: "Java基础",
      collapsible: false,
      children: [
        {
          text: "基础语法",
          link: "/md/java/basic/java-basic.md",
        },
      ],
    },
  ];
}

function getBarSpring() {
  return [
    {
      text: "介绍",
      collapsible: false,
      children: [
        {
          text: "Spring 手撸专栏",
          link: "/md/spring/develop-spring/002.md",
        },
      ],
    },

    {
      text: "计划",
      collapsible: false,
      children: [
        {
          text: "2023计划",
          link: "/md/spring/develop-spring/003.md",
        },
      ],
    },
  ];
}
