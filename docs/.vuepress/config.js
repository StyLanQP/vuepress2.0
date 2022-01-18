
const {resolve} = require("path");
const isProd = process.env.NODE_ENV === 'production'
const { navbar, sidebar } = require('./configs/index')
module.exports ={
  port: 8081,
  // 站点配置
  lang: "en-US",
  title: "",
  dest: "dist",
  description: "Welcome to TMX Documentation",
  home: "/en/home/",
  locales: {
    '/en/': {
      lang: 'en-US',
      title: '',
      description: 'Welcome to TMX Documentation',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: '',
      description: 'Welcome to TMX Documentation',
    },
  },
  // 主题和它的配置
  // theme: "@vuepress/theme-default",
  theme: resolve(__dirname, '../theme-default'), // 使用本地主题
  themeConfig: {
    darkMode: false, //是否启用切换夜间模式
    logo: '/images/tmxlogo.svg',
    home: "/en/home/",
    // selectLanguageText: "选择语言",
    sidebarRight: true, // 生成右边侧边栏（左边一级，剩下的放到右边）
    sidebarDepth: 1, //设置根据页面标题自动生成的侧边栏的最大深度。
    editLink: false, //是否启用 编辑此页 链接。
    lastUpdated: true,
    lastUpdatedText: '最后更新时间',
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
        selectLanguageText: "Languages",
        // sidebar
        sidebar: sidebar.en,
        // page meta
        // editLinkText: 'Edit this page on GitHub',
      },
      '/en/': {
        // navbar
        navbar: navbar.en,
        // sidebar
        sidebar: sidebar.en,
        selectLanguageText: "Languages",
        // page meta
        // editLinkText: 'Edit this page on GitHub',
      },

      /**
       * Chinese locale config
       */
      '/zh/': {
        // navbar
        navbar: navbar.zh,
        selectLanguageText: "选择语言",
        backToHome: '返回首页',
        // sidebar
        sidebar: sidebar.zh,
      },
    },
    themePlugins: {
      // only enable git plugin in production mode
      git: isProd,
    },
  },
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
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
          "/en/": {
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
