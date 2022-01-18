
module.exports = [
  {
    text: "首页",
    link: '/zh/home/',
  },
  {
    text: "Console文档",
    link: 'https://github.com/vuepress/awesome-vuepress',
  },
  {
    text: "API文档",
    link: 'https://github.com/vuepress/awesome-vuepress',
  },
  {
    text: '参考',
    children: [
      {
        text: 'VuePress',
        children: [
          '/zh/reference/cli.md',
          '/zh/reference/config.md',
          '/zh/reference/frontmatter.md',
          '/zh/reference/components.md',
          '/zh/reference/plugin-api.md',
          '/zh/reference/theme-api.md',
          '/zh/reference/client-api.md',
          '/zh/reference/node-api.md',
        ],
      },
      {
        text: '打包工具',
        children: [
          '/zh/reference/bundler/vite.md',
          '/zh/reference/bundler/webpack.md',
        ],
      },
      {
        text: '默认主题',
        children: [
          '/zh/reference/default-theme/config.md',
          '/zh/reference/default-theme/frontmatter.md',
          '/zh/reference/default-theme/components.md',
          '/zh/reference/default-theme/markdown.md',
          '/zh/reference/default-theme/styles.md',
        ],
      },
    ],
  },
  {
    text: `v${'version'}`,
    children: [
      {
        text: '更新日志',
        link: 'https://github.com/vuepress/vuepress-next/blob/main/CHANGELOG.md',
      },
      {
        text: 'v1.x',
        link: 'https://v1.vuepress.vuejs.org/zh/',
      },
      {
        text: 'v0.x',
        link: 'https://v0.vuepress.vuejs.org/zh/',
      },
    ],
  },
  {
    text: "TMX-Access",
    link: '/zh/access/00Overview'
  }
]
