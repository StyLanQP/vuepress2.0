export const data = {
  "key": "v-cf5a290e",
  "path": "/reference/bundler/vite.html",
  "title": "Vite",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "配置项",
      "slug": "配置项",
      "children": [
        {
          "level": 3,
          "title": "viteOptions",
          "slug": "viteoptions",
          "children": []
        },
        {
          "level": 3,
          "title": "vuePluginOptions",
          "slug": "vuepluginoptions",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "reference/bundler/vite.md"
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
