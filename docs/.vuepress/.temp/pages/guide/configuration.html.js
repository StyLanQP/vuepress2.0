export const data = {
  "key": "v-4f4ccb8f",
  "path": "/guide/configuration.html",
  "title": "Configuration",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Config File",
      "slug": "config-file",
      "children": []
    },
    {
      "level": 2,
      "title": "Config Scopes",
      "slug": "config-scopes",
      "children": [
        {
          "level": 3,
          "title": "Site Config",
          "slug": "site-config",
          "children": []
        },
        {
          "level": 3,
          "title": "Theme Config",
          "slug": "theme-config",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "guide/configuration.md"
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
