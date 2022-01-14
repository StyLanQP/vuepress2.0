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
    "/en/": {
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
      "editLinkText": "Edit this page on GitHub"
    },
    "/zh/": {
      "navbar": [
        {
          "text": "指南",
          "link": "/zh/guide/"
        },
        {
          "text": "参考",
          "children": [
            {
              "text": "VuePress",
              "children": [
                "/zh/reference/cli.md",
                "/zh/reference/config.md",
                "/zh/reference/frontmatter.md",
                "/zh/reference/components.md",
                "/zh/reference/plugin-api.md",
                "/zh/reference/theme-api.md",
                "/zh/reference/client-api.md",
                "/zh/reference/node-api.md"
              ]
            },
            {
              "text": "打包工具",
              "children": [
                "/zh/reference/bundler/vite.md",
                "/zh/reference/bundler/webpack.md"
              ]
            },
            {
              "text": "默认主题",
              "children": [
                "/zh/reference/default-theme/config.md",
                "/zh/reference/default-theme/frontmatter.md",
                "/zh/reference/default-theme/components.md",
                "/zh/reference/default-theme/markdown.md",
                "/zh/reference/default-theme/styles.md"
              ]
            }
          ]
        },
        {
          "text": "插件",
          "children": [
            {
              "text": "常用功能",
              "children": [
                "/zh/reference/plugin/back-to-top.md",
                "/zh/reference/plugin/container.md",
                "/zh/reference/plugin/external-link-icon.md",
                "/zh/reference/plugin/google-analytics.md",
                "/zh/reference/plugin/medium-zoom.md",
                "/zh/reference/plugin/nprogress.md",
                "/zh/reference/plugin/register-components.md"
              ]
            },
            {
              "text": "内容搜索",
              "children": [
                "/zh/reference/plugin/docsearch.md",
                "/zh/reference/plugin/search.md"
              ]
            },
            {
              "text": "PWA",
              "children": [
                "/zh/reference/plugin/pwa.md",
                "/zh/reference/plugin/pwa-popup.md"
              ]
            },
            {
              "text": "语法高亮",
              "children": [
                "/zh/reference/plugin/prismjs.md",
                "/zh/reference/plugin/shiki.md"
              ]
            },
            {
              "text": "主题开发",
              "children": [
                "/zh/reference/plugin/active-header-links.md",
                "/zh/reference/plugin/debug.md",
                "/zh/reference/plugin/git.md",
                "/zh/reference/plugin/palette.md",
                "/zh/reference/plugin/theme-data.md",
                "/zh/reference/plugin/toc.md"
              ]
            }
          ]
        },
        {
          "text": "了解更多",
          "children": [
            {
              "text": "深入",
              "children": [
                "/zh/advanced/architecture.md",
                "/zh/advanced/plugin.md",
                "/zh/advanced/theme.md",
                {
                  "text": "Cookbook",
                  "link": "/zh/advanced/cookbook/"
                }
              ]
            },
            {
              "text": "其他资源",
              "children": [
                "/zh/contributing.md",
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
              "text": "更新日志",
              "link": "https://github.com/vuepress/vuepress-next/blob/main/CHANGELOG.md"
            },
            {
              "text": "v1.x",
              "link": "https://v1.vuepress.vuejs.org/zh/"
            },
            {
              "text": "v0.x",
              "link": "https://v0.vuepress.vuejs.org/zh/"
            }
          ]
        },
        {
          "text": "TMX-Access",
          "link": "/zh/access/00Overview"
        }
      ],
      "sidebarDepth": 1,
      "sidebar": {
        "/zh/": [
          {
            "text": "指南",
            "children": [
              "/zh/guide/README.md",
              "/zh/guide/getting-started.md",
              "/zh/guide/configuration.md",
              "/zh/guide/page.md",
              "/zh/guide/markdown.md",
              "/zh/guide/assets.md",
              "/zh/guide/i18n.md",
              "/zh/guide/deployment.md",
              "/zh/guide/theme.md",
              "/zh/guide/plugin.md",
              "/zh/guide/bundler.md",
              "/zh/guide/migration.md"
            ]
          }
        ],
        "/zh/guide/": [
          {
            "text": "指南",
            "children": [
              "/zh/guide/README.md",
              "/zh/guide/getting-started.md",
              "/zh/guide/configuration.md",
              "/zh/guide/page.md",
              "/zh/guide/markdown.md",
              "/zh/guide/assets.md",
              "/zh/guide/i18n.md",
              "/zh/guide/deployment.md",
              "/zh/guide/theme.md",
              "/zh/guide/plugin.md",
              "/zh/guide/bundler.md",
              "/zh/guide/migration.md"
            ]
          }
        ],
        "/zh/advanced/": [
          {
            "text": "深入",
            "children": [
              "/zh/advanced/architecture.md",
              "/zh/advanced/plugin.md",
              "/zh/advanced/theme.md"
            ]
          },
          {
            "text": "Cookbook",
            "children": [
              "/zh/advanced/cookbook/README.md",
              "/zh/advanced/cookbook/usage-of-client-app-enhance.md",
              "/zh/advanced/cookbook/adding-extra-pages.md",
              "/zh/advanced/cookbook/extending-a-theme.md",
              "/zh/advanced/cookbook/passing-data-to-client-code.md",
              "/zh/advanced/cookbook/markdown-and-vue-sfc.md"
            ]
          }
        ],
        "/zh/reference/": [
          {
            "text": "VuePress 参考",
            "collapsible": true,
            "children": [
              "/zh/reference/cli.md",
              "/zh/reference/config.md",
              "/zh/reference/frontmatter.md",
              "/zh/reference/components.md",
              "/zh/reference/plugin-api.md",
              "/zh/reference/theme-api.md",
              "/zh/reference/client-api.md",
              "/zh/reference/node-api.md"
            ]
          },
          {
            "text": "打包工具参考",
            "collapsible": true,
            "children": [
              "/zh/reference/bundler/vite.md",
              "/zh/reference/bundler/webpack.md"
            ]
          },
          {
            "text": "默认主题参考",
            "collapsible": true,
            "children": [
              "/zh/reference/default-theme/config.md",
              "/zh/reference/default-theme/frontmatter.md",
              "/zh/reference/default-theme/components.md",
              "/zh/reference/default-theme/markdown.md",
              "/zh/reference/default-theme/styles.md"
            ]
          },
          {
            "text": "官方插件参考",
            "collapsible": true,
            "children": [
              {
                "text": "常用功能",
                "children": [
                  "/zh/reference/plugin/back-to-top.md",
                  "/zh/reference/plugin/container.md",
                  "/zh/reference/plugin/external-link-icon.md",
                  "/zh/reference/plugin/google-analytics.md",
                  "/zh/reference/plugin/medium-zoom.md",
                  "/zh/reference/plugin/nprogress.md",
                  "/zh/reference/plugin/register-components.md"
                ]
              },
              {
                "text": "内容搜索",
                "children": [
                  "/zh/reference/plugin/docsearch.md",
                  "/zh/reference/plugin/search.md"
                ]
              },
              {
                "text": "PWA",
                "children": [
                  "/zh/reference/plugin/pwa.md",
                  "/zh/reference/plugin/pwa-popup.md"
                ]
              },
              {
                "text": "语法高亮",
                "children": [
                  "/zh/reference/plugin/prismjs.md",
                  "/zh/reference/plugin/shiki.md"
                ]
              },
              {
                "text": "主题开发",
                "children": [
                  "/zh/reference/plugin/active-header-links.md",
                  "/zh/reference/plugin/debug.md",
                  "/zh/reference/plugin/git.md",
                  "/zh/reference/plugin/palette.md",
                  "/zh/reference/plugin/theme-data.md",
                  "/zh/reference/plugin/toc.md"
                ]
              }
            ]
          }
        ],
        "/zh/access/": [
          {
            "text": "中文access",
            "collapsible": true,
            "level": 2,
            "children": [
              "/zh/access/00Overview.md",
              "/zh/access/01ConnectingDevices.md",
              "/zh/access/02ViewingDevices.md",
              "/zh/access/03GroupingDevices.md",
              "/zh/access/04DeviceDetails.md",
              "/zh/access/05ControllingDevices.md",
              "/zh/access/07LoggingMonitoring.md",
              "/zh/access/08ManagingDeviceData.md"
            ]
          }
        ]
      }
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
