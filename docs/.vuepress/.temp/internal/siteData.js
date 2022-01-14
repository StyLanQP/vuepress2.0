export const siteData = {
  "base": "/",
  "lang": "en-US",
  "title": "你好， VuePress ！",
  "description": "这是我的第一个 VuePress 站点",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/logo.png"
      }
    ]
  ],
  "locales": {
    "/": {
      "lang": "en-US",
      "title": "ThingsMatrix",
      "description": "Welcome to TMX Documentation"
    },
    "/zh/": {
      "lang": "zh-CN",
      "title": "ThingsMatrix",
      "description": "Welcome to TMX Documentation"
    }
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
