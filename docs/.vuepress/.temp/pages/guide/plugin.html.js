export const data = {
  "key": "v-1d14d5cc",
  "path": "/guide/plugin.html",
  "title": "Plugin",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Community Plugin",
      "slug": "community-plugin",
      "children": []
    },
    {
      "level": 2,
      "title": "Local Plugin",
      "slug": "local-plugin",
      "children": []
    }
  ],
  "filePathRelative": "guide/plugin.md"
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
