export const siteData = {
  "base": "/",
  "lang": "en-US",
  "title": "ThingsMatrix",
  "description": "Welcome to TMX Documentation",
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
    "/en/": {
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
