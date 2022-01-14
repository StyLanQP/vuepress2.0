export const themeData = {
  "darkMode": false,
  "sidebarRight": true,
  "locales": {
    "/": {
      "navbar": [
        {
          "text": "Home",
          "link": "/en/home/"
        },
        {
          "text": "Console",
          "link": "https://github.com/vuepress/awesome-vuepress"
        },
        {
          "text": "API",
          "link": "https://github.com/vuepress/awesome-vuepress"
        },
        {
          "text": "Reference",
          "children": [
            {
              "text": "VuePress",
              "children": [
                {
                  "text": "CLI",
                  "link": "/en/reference/cli.html"
                },
                "/en/reference/config.md",
                "/en/reference/frontmatter.md",
                "/en/reference/components.md",
                "/en/reference/plugin-api.md",
                "/en/reference/theme-api.md",
                "/en/reference/client-api.md",
                "/en/reference/node-api.md"
              ]
            },
            {
              "text": "Bundlers",
              "children": [
                "/en/reference/bundler/vite.md",
                "/en/reference/bundler/webpack.md"
              ]
            },
            {
              "text": "Default Theme",
              "children": [
                "/en/reference/default-theme/config.md",
                "/en/reference/default-theme/frontmatter.md",
                "/en/reference/default-theme/components.md",
                "/en/reference/default-theme/markdown.md",
                "/en/reference/default-theme/styles.md"
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
          "link": "/en/access/00Overview"
        }
      ],
      "sidebarDepth": 1,
      "selectLanguageText": "Languages",
      "sidebar": {
        "/en/": [
          "README.md"
        ],
        "/en/guide/": [
          {
            "text": "Guide",
            "level": 2,
            "children": [
              "/en/guide/README.md",
              "/en/guide/getting-started.md",
              "/en/guide/configuration.md",
              "/en/guide/page.md",
              "/en/guide/markdown.md",
              "/en/guide/assets.md",
              "/en/guide/i18n.md",
              "/en/guide/deployment.md",
              "/en/guide/theme.md",
              "/en/guide/plugin.md",
              "/en/guide/bundler.md",
              "/en/guide/migration.md"
            ]
          }
        ],
        "/en/access/": [
          {
            "text": "TMX-Access",
            "collapsible": true,
            "level": 2,
            "children": [
              "/en/access/00Overview.md",
              "/en/access/01ConnectingDevices.md",
              "/en/access/02ViewingDevices.md",
              "/en/access/03GroupingDevices.md",
              "/en/access/04DeviceDetails.md",
              "/en/access/05ControllingDevices.md",
              "/en/access/07LoggingMonitoring.md",
              "/en/access/08ManagingDeviceData.md"
            ]
          }
        ],
        "/en/advanced/": [
          {
            "text": "Advanced",
            "children": [
              "/en/advanced/architecture.md",
              "/en/advanced/plugin.md",
              "/en/advanced/theme.md"
            ]
          },
          {
            "text": "Cookbook",
            "children": [
              "/en/advanced/cookbook/README.md",
              "/en/advanced/cookbook/usage-of-client-app-enhance.md",
              "/en/advanced/cookbook/adding-extra-pages.md",
              "/en/advanced/cookbook/extending-a-theme.md",
              "/en/advanced/cookbook/passing-data-to-client-code.md",
              "/en/advanced/cookbook/markdown-and-vue-sfc.md"
            ]
          }
        ],
        "/en/reference/": [
          {
            "text": "VuePress Reference",
            "collapsible": true,
            "children": [
              "/en/reference/cli.md",
              "/en/reference/config.md",
              "/en/reference/frontmatter.md",
              "/en/reference/components.md",
              "/en/reference/plugin-api.md",
              "/en/reference/theme-api.md",
              "/en/reference/client-api.md",
              "/en/reference/node-api.md"
            ]
          },
          {
            "text": "Bundlers Reference",
            "collapsible": true,
            "children": [
              "/en/reference/bundler/vite.md",
              "/en/reference/bundler/webpack.md"
            ]
          },
          {
            "text": "Default Theme Reference",
            "collapsible": true,
            "children": [
              "/en/reference/default-theme/config.md",
              "/en/reference/default-theme/frontmatter.md",
              "/en/reference/default-theme/components.md",
              "/en/reference/default-theme/markdown.md",
              "/en/reference/default-theme/styles.md"
            ]
          },
          {
            "text": "Official Plugins Reference",
            "collapsible": true,
            "children": [
              {
                "text": "Common Features",
                "children": [
                  "/en/reference/plugin/back-to-top.md",
                  "/en/reference/plugin/container.md",
                  "/en/reference/plugin/external-link-icon.md",
                  "/en/reference/plugin/google-analytics.md",
                  "/en/reference/plugin/medium-zoom.md",
                  "/en/reference/plugin/nprogress.md",
                  "/en/reference/plugin/register-components.md"
                ]
              },
              {
                "text": "Content Search",
                "children": [
                  "/en/reference/plugin/docsearch.md",
                  "/en/reference/plugin/search.md"
                ]
              },
              {
                "text": "PWA",
                "children": [
                  "/en/reference/plugin/pwa.md",
                  "/en/reference/plugin/pwa-popup.md"
                ]
              },
              {
                "text": "Syntax Highlighting",
                "children": [
                  "/en/reference/plugin/prismjs.md",
                  "/en/reference/plugin/shiki.md"
                ]
              },
              {
                "text": "Theme Development",
                "children": [
                  "/en/reference/plugin/active-header-links.md",
                  "/en/reference/plugin/debug.md",
                  "/en/reference/plugin/git.md",
                  "/en/reference/plugin/palette.md",
                  "/en/reference/plugin/theme-data.md",
                  "/en/reference/plugin/toc.md"
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
          "text": "Home",
          "link": "/en/home/"
        },
        {
          "text": "Console",
          "link": "https://github.com/vuepress/awesome-vuepress"
        },
        {
          "text": "API",
          "link": "https://github.com/vuepress/awesome-vuepress"
        },
        {
          "text": "Reference",
          "children": [
            {
              "text": "VuePress",
              "children": [
                {
                  "text": "CLI",
                  "link": "/en/reference/cli.html"
                },
                "/en/reference/config.md",
                "/en/reference/frontmatter.md",
                "/en/reference/components.md",
                "/en/reference/plugin-api.md",
                "/en/reference/theme-api.md",
                "/en/reference/client-api.md",
                "/en/reference/node-api.md"
              ]
            },
            {
              "text": "Bundlers",
              "children": [
                "/en/reference/bundler/vite.md",
                "/en/reference/bundler/webpack.md"
              ]
            },
            {
              "text": "Default Theme",
              "children": [
                "/en/reference/default-theme/config.md",
                "/en/reference/default-theme/frontmatter.md",
                "/en/reference/default-theme/components.md",
                "/en/reference/default-theme/markdown.md",
                "/en/reference/default-theme/styles.md"
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
          "link": "/en/access/00Overview"
        }
      ],
      "sidebarDepth": 1,
      "sidebar": {
        "/en/": [
          "README.md"
        ],
        "/en/guide/": [
          {
            "text": "Guide",
            "level": 2,
            "children": [
              "/en/guide/README.md",
              "/en/guide/getting-started.md",
              "/en/guide/configuration.md",
              "/en/guide/page.md",
              "/en/guide/markdown.md",
              "/en/guide/assets.md",
              "/en/guide/i18n.md",
              "/en/guide/deployment.md",
              "/en/guide/theme.md",
              "/en/guide/plugin.md",
              "/en/guide/bundler.md",
              "/en/guide/migration.md"
            ]
          }
        ],
        "/en/access/": [
          {
            "text": "TMX-Access",
            "collapsible": true,
            "level": 2,
            "children": [
              "/en/access/00Overview.md",
              "/en/access/01ConnectingDevices.md",
              "/en/access/02ViewingDevices.md",
              "/en/access/03GroupingDevices.md",
              "/en/access/04DeviceDetails.md",
              "/en/access/05ControllingDevices.md",
              "/en/access/07LoggingMonitoring.md",
              "/en/access/08ManagingDeviceData.md"
            ]
          }
        ],
        "/en/advanced/": [
          {
            "text": "Advanced",
            "children": [
              "/en/advanced/architecture.md",
              "/en/advanced/plugin.md",
              "/en/advanced/theme.md"
            ]
          },
          {
            "text": "Cookbook",
            "children": [
              "/en/advanced/cookbook/README.md",
              "/en/advanced/cookbook/usage-of-client-app-enhance.md",
              "/en/advanced/cookbook/adding-extra-pages.md",
              "/en/advanced/cookbook/extending-a-theme.md",
              "/en/advanced/cookbook/passing-data-to-client-code.md",
              "/en/advanced/cookbook/markdown-and-vue-sfc.md"
            ]
          }
        ],
        "/en/reference/": [
          {
            "text": "VuePress Reference",
            "collapsible": true,
            "children": [
              "/en/reference/cli.md",
              "/en/reference/config.md",
              "/en/reference/frontmatter.md",
              "/en/reference/components.md",
              "/en/reference/plugin-api.md",
              "/en/reference/theme-api.md",
              "/en/reference/client-api.md",
              "/en/reference/node-api.md"
            ]
          },
          {
            "text": "Bundlers Reference",
            "collapsible": true,
            "children": [
              "/en/reference/bundler/vite.md",
              "/en/reference/bundler/webpack.md"
            ]
          },
          {
            "text": "Default Theme Reference",
            "collapsible": true,
            "children": [
              "/en/reference/default-theme/config.md",
              "/en/reference/default-theme/frontmatter.md",
              "/en/reference/default-theme/components.md",
              "/en/reference/default-theme/markdown.md",
              "/en/reference/default-theme/styles.md"
            ]
          },
          {
            "text": "Official Plugins Reference",
            "collapsible": true,
            "children": [
              {
                "text": "Common Features",
                "children": [
                  "/en/reference/plugin/back-to-top.md",
                  "/en/reference/plugin/container.md",
                  "/en/reference/plugin/external-link-icon.md",
                  "/en/reference/plugin/google-analytics.md",
                  "/en/reference/plugin/medium-zoom.md",
                  "/en/reference/plugin/nprogress.md",
                  "/en/reference/plugin/register-components.md"
                ]
              },
              {
                "text": "Content Search",
                "children": [
                  "/en/reference/plugin/docsearch.md",
                  "/en/reference/plugin/search.md"
                ]
              },
              {
                "text": "PWA",
                "children": [
                  "/en/reference/plugin/pwa.md",
                  "/en/reference/plugin/pwa-popup.md"
                ]
              },
              {
                "text": "Syntax Highlighting",
                "children": [
                  "/en/reference/plugin/prismjs.md",
                  "/en/reference/plugin/shiki.md"
                ]
              },
              {
                "text": "Theme Development",
                "children": [
                  "/en/reference/plugin/active-header-links.md",
                  "/en/reference/plugin/debug.md",
                  "/en/reference/plugin/git.md",
                  "/en/reference/plugin/palette.md",
                  "/en/reference/plugin/theme-data.md",
                  "/en/reference/plugin/toc.md"
                ]
              }
            ]
          }
        ]
      },
      "selectLanguageText": "Languages",
      "editLinkText": "Edit this page on GitHub"
    },
    "/zh/": {
      "navbar": [
        {
          "text": "Home",
          "link": "/en/README.md/"
        },
        {
          "text": "Console",
          "link": "https://github.com/vuepress/awesome-vuepress"
        },
        {
          "text": "API",
          "link": "https://github.com/vuepress/awesome-vuepress"
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
      "selectLanguageText": "选择语言",
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
  "selectLanguageText": "Languages",
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
