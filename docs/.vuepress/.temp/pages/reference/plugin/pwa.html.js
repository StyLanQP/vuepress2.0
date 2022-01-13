export const data = {
  "key": "v-7ab4099e",
  "path": "/reference/plugin/pwa.html",
  "title": "pwa",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "安装",
      "slug": "安装",
      "children": []
    },
    {
      "level": 2,
      "title": "Web App Manifests",
      "slug": "web-app-manifests",
      "children": []
    },
    {
      "level": 2,
      "title": "配置项",
      "slug": "配置项",
      "children": [
        {
          "level": 3,
          "title": "serviceWorkerFilename",
          "slug": "serviceworkerfilename",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Composition API",
      "slug": "composition-api",
      "children": [
        {
          "level": 3,
          "title": "usePwaEvent",
          "slug": "usepwaevent",
          "children": []
        },
        {
          "level": 3,
          "title": "useSkipWaiting",
          "slug": "useskipwaiting",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "reference/plugin/pwa.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
