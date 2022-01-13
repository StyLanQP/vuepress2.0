export const data = {
  "key": "v-6b76c1c0",
  "path": "/reference/theme-api.html",
  "title": "主题 API",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "基础配置项",
      "slug": "基础配置项",
      "children": [
        {
          "level": 3,
          "title": "name",
          "slug": "name",
          "children": []
        },
        {
          "level": 3,
          "title": "multiple",
          "slug": "multiple",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "主题特定配置项",
      "slug": "主题特定配置项",
      "children": [
        {
          "level": 3,
          "title": "layouts",
          "slug": "layouts",
          "children": []
        },
        {
          "level": 3,
          "title": "plugins",
          "slug": "plugins",
          "children": []
        },
        {
          "level": 3,
          "title": "extends",
          "slug": "extends",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "reference/theme-api.md"
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
