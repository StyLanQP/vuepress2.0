export const data = {
  "key": "v-aac50f78",
  "path": "/views/TMX%20Access%E2%84%A2%20Service/Controlling%20devices.html",
  "title": "Controlling devices",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Viewing tasks",
      "slug": "viewing-tasks",
      "children": []
    },
    {
      "level": 2,
      "title": "Adding tasks",
      "slug": "adding-tasks",
      "children": []
    },
    {
      "level": 2,
      "title": "Retrying tasks",
      "slug": "retrying-tasks",
      "children": [
        {
          "level": 3,
          "title": "Single retrying",
          "slug": "single-retrying",
          "children": []
        },
        {
          "level": 3,
          "title": "Batch retrying",
          "slug": "batch-retrying",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Canceling tasks",
      "slug": "canceling-tasks",
      "children": [
        {
          "level": 3,
          "title": "Single canceling",
          "slug": "single-canceling",
          "children": []
        },
        {
          "level": 3,
          "title": "Batch canceling",
          "slug": "batch-canceling",
          "children": []
        }
      ]
    }
  ]
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
