const { version } = require('../meta')
module.exports = [
  {
    text: "Home",
    link: '/en/home/',
  },
  {
    text: "Console",
    link: 'https://github.com/vuepress/awesome-vuepress',
  },
  {
    text: "API",
    link: 'https://github.com/vuepress/awesome-vuepress',
  },
  {
    text: 'Reference',
    children: [
      {
        text: 'VuePress',
        children: [
          {
            text: 'CLI',
            link: '/en/reference/cli.html',
          },
          '/en/reference/config.md',
          '/en/reference/frontmatter.md',
          '/en/reference/components.md',
          '/en/reference/plugin-api.md',
          '/en/reference/theme-api.md',
          '/en/reference/client-api.md',
          '/en/reference/node-api.md',
        ],
      },
      {
        text: 'Bundlers',
        children: [
          '/en/reference/bundler/vite.md',
          '/en/reference/bundler/webpack.md',
        ],
      },
      {
        text: 'Default Theme',
        children: [
          '/en/reference/default-theme/config.md',
          '/en/reference/default-theme/frontmatter.md',
          '/en/reference/default-theme/components.md',
          '/en/reference/default-theme/markdown.md',
          '/en/reference/default-theme/styles.md',
        ],
      },
    ],
  },
  {
    text: `v${version}`,
    children: [
      {
        text: 'Changelog',
        link: 'https://github.com/vuepress/vuepress-next/blob/main/CHANGELOG.md',
      },
      {
        text: 'v1.x',
        link: 'https://v1.vuepress.vuejs.org',
      },
      {
        text: 'v0.x',
        link: 'https://v0.vuepress.vuejs.org',
      },
    ],
  },
  {
    text: "TMX-Access",
    link: '/en/access/00Overview'
  }
]
