
const {resolve} = require("path");
const isProd = process.env.NODE_ENV === 'production'
const { navbar, sidebar } = require('./configs/index')
console.log("ddd", navbar.zh)
module.exports ={
  port: 8081,
  // 站点配置
  lang: "en-US",
  title: "ThingsMatrix",
  dest: "dist",
  description: "Welcome to TMX Documentation",
  locales: {
    '/en/': {
      lang: 'en-US',
      title: 'ThingsMatrix',
      description: 'Welcome to TMX Documentation',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'ThingsMatrix',
      description: 'Welcome to TMX Documentation',
    },
  },
  // 主题和它的配置
  // theme: "@vuepress/theme-default",
  theme: resolve(__dirname, '../theme-default'), // 使用本地主题
  themeConfig: {
    darkMode: false,
    // selectLanguageText: "选择语言",
    sidebarRight: true, // 生成右边侧边栏（左边一级，剩下的放到右边）
    locales: {
      /**
       * English locale config
       *
       * As the default locale of @vuepress/theme-default is English,
       * we don't need to set all of the locale fields
       */
      '/': {
        // navbar
        navbar: navbar.en,
        sidebarDepth: 1,
        selectLanguageText: "Languages",
        // sidebar
        sidebar: sidebar.en,
        // page meta
        editLinkText: 'Edit this page on GitHub',
      },
      '/en/': {
        // navbar
        navbar: navbar.en,
        sidebarDepth: 1,
        // sidebar
        sidebar: sidebar.en,
        selectLanguageText: "Languages",
        // page meta
        editLinkText: 'Edit this page on GitHub',
      },

      /**
       * Chinese locale config
       */
      '/zh/': {
        // navbar
        navbar: navbar.zh,
        sidebarDepth: 1,
        selectLanguageText: "选择语言",
        // sidebar
        sidebar: sidebar.zh,
      },
    },
    themePlugins: {
      // only enable git plugin in production mode
      git: isProd,
    },
  },
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  markdown: {
    importCode: {
      handleImportPath: (str) =>
        str.replace(
          /^@vuepress/,
          resolve(__dirname, '../../theme-default')
        ),
    },
    extractHeaders: ['h3',"h4"]
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@media": resolve(__dirname, "media"),
      },
    },
  },
  plugins: [
    [
      "@vuepress/plugin-search",
      {
        locales: {
          "/": {
            placeholder: "Search",
          },
          "/zh/": {
            placeholder: "搜索",
          },
        },
      },
    ],
    [
      '@vuepress/plugin-register-components',
      {
        componentsDir: resolve(__dirname, './components'),
      },
    ],
    [
    '@vuepress/plugin-shiki',
    isProd
      ? {
          theme: 'dark-plus',
        }
      : false,
    ],
  ],
};
