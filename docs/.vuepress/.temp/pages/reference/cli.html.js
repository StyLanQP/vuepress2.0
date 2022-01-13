export const data = {
  "key": "v-a951be94",
  "path": "/reference/cli.html",
  "title": "命令行接口",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "dev",
      "slug": "dev",
      "children": []
    },
    {
      "level": 2,
      "title": "build",
      "slug": "build",
      "children": []
    },
    {
      "level": 2,
      "title": "info",
      "slug": "info",
      "children": []
    }
  ],
  "filePathRelative": "reference/cli.md"
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
