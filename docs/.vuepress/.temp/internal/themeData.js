export const themeData = {
  "darkMode": false,
  "selectLanguageText": "选择语言",
  "sidebarRight": true,
  "locales": {
    "/": {
      "navbar": [
        {
          "text": "Guide",
          "link": "/guide/"
        },
        {
          "text": "Reference",
          "children": [
            {
              "text": "VuePress",
              "children": [
                {
                  "text": "CLI",
                  "link": "/reference/cli.html"
                },
                "/reference/config.md",
                "/reference/frontmatter.md",
                "/reference/components.md",
                "/reference/plugin-api.md",
                "/reference/theme-api.md",
                "/reference/client-api.md",
                "/reference/node-api.md"
              ]
            },
            {
              "text": "Bundlers",
              "children": [
                "/reference/bundler/vite.md",
                "/reference/bundler/webpack.md"
              ]
            },
            {
              "text": "Default Theme",
              "children": [
                "/reference/default-theme/config.md",
                "/reference/default-theme/frontmatter.md",
                "/reference/default-theme/components.md",
                "/reference/default-theme/markdown.md",
                "/reference/default-theme/styles.md"
              ]
            }
          ]
        },
        {
          "text": "Plugins",
          "children": [
            {
              "text": "Common Features",
              "children": [
                "/reference/plugin/back-to-top.md",
                "/reference/plugin/container.md",
                "/reference/plugin/external-link-icon.md",
                "/reference/plugin/google-analytics.md",
                "/reference/plugin/medium-zoom.md",
                "/reference/plugin/nprogress.md",
                "/reference/plugin/register-components.md"
              ]
            },
            {
              "text": "Content Search",
              "children": [
                "/reference/plugin/docsearch.md",
                "/reference/plugin/search.md"
              ]
            },
            {
              "text": "PWA",
              "children": [
                "/reference/plugin/pwa.md",
                "/reference/plugin/pwa-popup.md"
              ]
            },
            {
              "text": "Syntax Highlighting",
              "children": [
                "/reference/plugin/prismjs.md",
                "/reference/plugin/shiki.md"
              ]
            },
            {
              "text": "Theme Development",
              "children": [
                "/reference/plugin/active-header-links.md",
                "/reference/plugin/debug.md",
                "/reference/plugin/git.md",
                "/reference/plugin/palette.md",
                "/reference/plugin/theme-data.md",
                "/reference/plugin/toc.md"
              ]
            }
          ]
        },
        {
          "text": "Learn More",
          "children": [
            {
              "text": "Advanced",
              "children": [
                "/advanced/architecture.md",
                "/advanced/plugin.md",
                "/advanced/theme.md",
                {
                  "text": "Cookbook",
                  "link": "/advanced/cookbook/"
                }
              ]
            },
            {
              "text": "Resources",
              "children": [
                "/contributing.md",
                {
                  "text": "Awesome VuePress",
                  "link": "https://github.com/vuepress/awesome-vuepress"
                }
              ]
            }
          ]
        },
        {
          "text": "vversion",
          "children": [
            {
              "text": "Changelog",
              "link": "https://github.com/vuepress/vuepress-next/blob/main/CHANGELOG.md"
            },
            {
              "text": "v1.x",
              "link": "https://v1.vuepress.vuejs.org"
            },
            {
              "text": "v0.x",
              "link": "https://v0.vuepress.vuejs.org"
            }
          ]
        },
        {
          "text": "TMX-Access",
          "link": "/access/00Overview"
        }
      ],
      "sidebarDepth": 1,
      "sidebar": {
        "/": [
          "README.md"
        ],
        "/guide/": [
          {
            "text": "Guide",
            "level": 2,
            "children": [
              "/guide/README.md",
              "/guide/getting-started.md",
              "/guide/configuration.md",
              "/guide/page.md",
              "/guide/markdown.md",
              "/guide/assets.md",
              "/guide/i18n.md",
              "/guide/deployment.md",
              "/guide/theme.md",
              "/guide/plugin.md",
              "/guide/bundler.md",
              "/guide/migration.md"
            ]
          }
        ],
        "/access/": [
          {
            "text": "TMX-Access",
            "collapsible": true,
            "level": 2,
            "children": [
              "/access/00Overview.md",
              "/access/01ConnectingDevices.md",
              "/access/02ViewingDevices.md",
              "/access/03GroupingDevices.md",
              "/access/04DeviceDetails.md",
              "/access/05ControllingDevices.md",
              "/access/07LoggingMonitoring.md",
              "/access/08ManagingDeviceData.md"
            ]
          }
        ],
        "/advanced/": [
          {
            "text": "Advanced",
            "children": [
              "/advanced/architecture.md",
              "/advanced/plugin.md",
              "/advanced/theme.md"
            ]
          },
          {
            "text": "Cookbook",
            "children": [
              "/advanced/cookbook/README.md",
              "/advanced/cookbook/usage-of-client-app-enhance.md",
              "/advanced/cookbook/adding-extra-pages.md",
              "/advanced/cookbook/extending-a-theme.md",
              "/advanced/cookbook/passing-data-to-client-code.md",
              "/advanced/cookbook/markdown-and-vue-sfc.md"
            ]
          }
        ],
        "/reference/": [
          {
            "text": "VuePress Reference",
            "collapsible": true,
            "children": [
              "/reference/cli.md",
              "/reference/config.md",
              "/reference/frontmatter.md",
              "/reference/components.md",
              "/reference/plugin-api.md",
              "/reference/theme-api.md",
              "/reference/client-api.md",
              "/reference/node-api.md"
            ]
          },
          {
            "text": "Bundlers Reference",
            "collapsible": true,
            "children": [
              "/reference/bundler/vite.md",
              "/reference/bundler/webpack.md"
            ]
          },
          {
            "text": "Default Theme Reference",
            "collapsible": true,
            "children": [
              "/reference/default-theme/config.md",
              "/reference/default-theme/frontmatter.md",
              "/reference/default-theme/components.md",
              "/reference/default-theme/markdown.md",
              "/reference/default-theme/styles.md"
            ]
          },
          {
            "text": "Official Plugins Reference",
            "collapsible": true,
            "children": [
              {
                "text": "Common Features",
                "children": [
                  "/reference/plugin/back-to-top.md",
                  "/reference/plugin/container.md",
                  "/reference/plugin/external-link-icon.md",
                  "/reference/plugin/google-analytics.md",
                  "/reference/plugin/medium-zoom.md",
                  "/reference/plugin/nprogress.md",
                  "/reference/plugin/register-components.md"
                ]
              },
              {
                "text": "Content Search",
                "children": [
                  "/reference/plugin/docsearch.md",
                  "/reference/plugin/search.md"
                ]
              },
              {
                "text": "PWA",
                "children": [
                  "/reference/plugin/pwa.md",
                  "/reference/plugin/pwa-popup.md"
                ]
              },
              {
                "text": "Syntax Highlighting",
                "children": [
                  "/reference/plugin/prismjs.md",
                  "/reference/plugin/shiki.md"
                ]
              },
              {
                "text": "Theme Development",
                "children": [
                  "/reference/plugin/active-header-links.md",
                  "/reference/plugin/debug.md",
                  "/reference/plugin/git.md",
                  "/reference/plugin/palette.md",
                  "/reference/plugin/theme-data.md",
                  "/reference/plugin/toc.md"
                ]
              }
            ]
          }
        ]
      },
      "editLinkText": "Edit this page on GitHub",
      "selectLanguageName": "English"
    },
    "/zh/": {
      "navbar": [
        {
          "text": "Guide",
          "link": "/guide/"
        },
        {
          "text": "Reference",
          "children": [
            {
              "text": "VuePress",
              "children": [
                {
                  "text": "CLI",
                  "link": "/reference/cli.html"
                },
                "/reference/config.md",
                "/reference/frontmatter.md",
                "/reference/components.md",
                "/reference/plugin-api.md",
                "/reference/theme-api.md",
                "/reference/client-api.md",
                "/reference/node-api.md"
              ]
            },
            {
              "text": "Bundlers",
              "children": [
                "/reference/bundler/vite.md",
                "/reference/bundler/webpack.md"
              ]
            },
            {
              "text": "Default Theme",
              "children": [
                "/reference/default-theme/config.md",
                "/reference/default-theme/frontmatter.md",
                "/reference/default-theme/components.md",
                "/reference/default-theme/markdown.md",
                "/reference/default-theme/styles.md"
              ]
            }
          ]
        },
        {
          "text": "Plugins",
          "children": [
            {
              "text": "Common Features",
              "children": [
                "/reference/plugin/back-to-top.md",
                "/reference/plugin/container.md",
                "/reference/plugin/external-link-icon.md",
                "/reference/plugin/google-analytics.md",
                "/reference/plugin/medium-zoom.md",
                "/reference/plugin/nprogress.md",
                "/reference/plugin/register-components.md"
              ]
            },
            {
              "text": "Content Search",
              "children": [
                "/reference/plugin/docsearch.md",
                "/reference/plugin/search.md"
              ]
            },
            {
              "text": "PWA",
              "children": [
                "/reference/plugin/pwa.md",
                "/reference/plugin/pwa-popup.md"
              ]
            },
            {
              "text": "Syntax Highlighting",
              "children": [
                "/reference/plugin/prismjs.md",
                "/reference/plugin/shiki.md"
              ]
            },
            {
              "text": "Theme Development",
              "children": [
                "/reference/plugin/active-header-links.md",
                "/reference/plugin/debug.md",
                "/reference/plugin/git.md",
                "/reference/plugin/palette.md",
                "/reference/plugin/theme-data.md",
                "/reference/plugin/toc.md"
              ]
            }
          ]
        },
        {
          "text": "Learn More",
          "children": [
            {
              "text": "Advanced",
              "children": [
                "/advanced/architecture.md",
                "/advanced/plugin.md",
                "/advanced/theme.md",
                {
                  "text": "Cookbook",
                  "link": "/advanced/cookbook/"
                }
              ]
            },
            {
              "text": "Resources",
              "children": [
                "/contributing.md",
                {
                  "text": "Awesome VuePress",
                  "link": "https://github.com/vuepress/awesome-vuepress"
                }
              ]
            }
          ]
        },
        {
          "text": "vversion",
          "children": [
            {
              "text": "Changelog",
              "link": "https://github.com/vuepress/vuepress-next/blob/main/CHANGELOG.md"
            },
            {
              "text": "v1.x",
              "link": "https://v1.vuepress.vuejs.org"
            },
            {
              "text": "v0.x",
              "link": "https://v0.vuepress.vuejs.org"
            }
          ]
        },
        {
          "text": "TMX-Access",
          "link": "/access/00Overview"
        }
      ],
      "selectLanguageName": "简体中文",
      "selectLanguageText": "选择语言",
      "selectLanguageAriaLabel": "选择语言",
      "sidebarDepth": 0,
      "sidebar": {
        "/": [
          "README.md"
        ],
        "/guide/": [
          {
            "text": "Guide",
            "level": 2,
            "children": [
              "/guide/README.md",
              "/guide/getting-started.md",
              "/guide/configuration.md",
              "/guide/page.md",
              "/guide/markdown.md",
              "/guide/assets.md",
              "/guide/i18n.md",
              "/guide/deployment.md",
              "/guide/theme.md",
              "/guide/plugin.md",
              "/guide/bundler.md",
              "/guide/migration.md"
            ]
          }
        ],
        "/access/": [
          {
            "text": "TMX-Access",
            "collapsible": true,
            "level": 2,
            "children": [
              "/access/00Overview.md",
              "/access/01ConnectingDevices.md",
              "/access/02ViewingDevices.md",
              "/access/03GroupingDevices.md",
              "/access/04DeviceDetails.md",
              "/access/05ControllingDevices.md",
              "/access/07LoggingMonitoring.md",
              "/access/08ManagingDeviceData.md"
            ]
          }
        ],
        "/advanced/": [
          {
            "text": "Advanced",
            "children": [
              "/advanced/architecture.md",
              "/advanced/plugin.md",
              "/advanced/theme.md"
            ]
          },
          {
            "text": "Cookbook",
            "children": [
              "/advanced/cookbook/README.md",
              "/advanced/cookbook/usage-of-client-app-enhance.md",
              "/advanced/cookbook/adding-extra-pages.md",
              "/advanced/cookbook/extending-a-theme.md",
              "/advanced/cookbook/passing-data-to-client-code.md",
              "/advanced/cookbook/markdown-and-vue-sfc.md"
            ]
          }
        ],
        "/reference/": [
          {
            "text": "VuePress Reference",
            "collapsible": true,
            "children": [
              "/reference/cli.md",
              "/reference/config.md",
              "/reference/frontmatter.md",
              "/reference/components.md",
              "/reference/plugin-api.md",
              "/reference/theme-api.md",
              "/reference/client-api.md",
              "/reference/node-api.md"
            ]
          },
          {
            "text": "Bundlers Reference",
            "collapsible": true,
            "children": [
              "/reference/bundler/vite.md",
              "/reference/bundler/webpack.md"
            ]
          },
          {
            "text": "Default Theme Reference",
            "collapsible": true,
            "children": [
              "/reference/default-theme/config.md",
              "/reference/default-theme/frontmatter.md",
              "/reference/default-theme/components.md",
              "/reference/default-theme/markdown.md",
              "/reference/default-theme/styles.md"
            ]
          },
          {
            "text": "Official Plugins Reference",
            "collapsible": true,
            "children": [
              {
                "text": "Common Features",
                "children": [
                  "/reference/plugin/back-to-top.md",
                  "/reference/plugin/container.md",
                  "/reference/plugin/external-link-icon.md",
                  "/reference/plugin/google-analytics.md",
                  "/reference/plugin/medium-zoom.md",
                  "/reference/plugin/nprogress.md",
                  "/reference/plugin/register-components.md"
                ]
              },
              {
                "text": "Content Search",
                "children": [
                  "/reference/plugin/docsearch.md",
                  "/reference/plugin/search.md"
                ]
              },
              {
                "text": "PWA",
                "children": [
                  "/reference/plugin/pwa.md",
                  "/reference/plugin/pwa-popup.md"
                ]
              },
              {
                "text": "Syntax Highlighting",
                "children": [
                  "/reference/plugin/prismjs.md",
                  "/reference/plugin/shiki.md"
                ]
              },
              {
                "text": "Theme Development",
                "children": [
                  "/reference/plugin/active-header-links.md",
                  "/reference/plugin/debug.md",
                  "/reference/plugin/git.md",
                  "/reference/plugin/palette.md",
                  "/reference/plugin/theme-data.md",
                  "/reference/plugin/toc.md"
                ]
              }
            ]
          }
        ]
      },
      "editLinkText": "在 GitHub 上编辑此页",
      "lastUpdatedText": "上次更新",
      "contributorsText": "贡献者",
      "tip": "提示",
      "warning": "注意",
      "danger": "警告",
      "notFound": [
        "这里什么都没有",
        "我们怎么到这来了？",
        "这是一个 404 页面",
        "看起来我们进入了错误的链接"
      ],
      "backToHome": "返回首页",
      "openInNewWindow": "在新窗口打开",
      "toggleDarkMode": "切换夜间模式",
      "toggleSidebar": "切换侧边栏"
    }
  },
  "navbar": [],
  "logo": null,
  "repo": null,
  "selectLanguageAriaLabel": "Select language",
  "sidebar": "auto",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
