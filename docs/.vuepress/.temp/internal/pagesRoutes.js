import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"配置"},["/index.html","/README.md"]],
  ["v-2d876c6e","/access/00Overview.html",{"title":"Overview"},["/access/00Overview","/access/00Overview.md"]],
  ["v-cedc56f2","/access/01ConnectingDevices.html",{"title":"Connecting devices"},["/access/01ConnectingDevices","/access/01ConnectingDevices.md"]],
  ["v-5d0e84f6","/access/02ViewingDevices.html",{"title":"Viewing devices"},["/access/02ViewingDevices","/access/02ViewingDevices.md"]],
  ["v-10348e14","/access/03GroupingDevices.html",{"title":"Grouping devices"},["/access/03GroupingDevices","/access/03GroupingDevices.md"]],
  ["v-c24fa0ba","/access/04DeviceDetails.html",{"title":"Device details"},["/access/04DeviceDetails","/access/04DeviceDetails.md"]],
  ["v-657cd2d8","/access/05ControllingDevices.html",{"title":"Controlling devices"},["/access/05ControllingDevices","/access/05ControllingDevices.md"]],
  ["v-5956c34b","/access/07LoggingMonitoring.html",{"title":"Logging and Monitoring"},["/access/07LoggingMonitoring","/access/07LoggingMonitoring.md"]],
  ["v-03ade946","/access/08ManagingDeviceData.html",{"title":"Managing device data"},["/access/08ManagingDeviceData","/access/08ManagingDeviceData.md"]],
  ["v-fffb8e28","/guide/",{"title":"Introduction"},["/guide/index.html","/guide/README.md"]],
  ["v-3c32c2ca","/guide/assets.html",{"title":"Assets"},["/guide/assets","/guide/assets.md"]],
  ["v-6f1f3595","/guide/bundler.html",{"title":"Bundler"},["/guide/bundler","/guide/bundler.md"]],
  ["v-4f4ccb8f","/guide/configuration.html",{"title":"Configuration"},["/guide/configuration","/guide/configuration.md"]],
  ["v-e8a66a70","/guide/deployment.html",{"title":"Deployment"},["/guide/deployment","/guide/deployment.md"]],
  ["v-fb0f0066","/guide/getting-started.html",{"title":"Getting Started"},["/guide/getting-started","/guide/getting-started.md"]],
  ["v-acb10be2","/guide/i18n.html",{"title":"I18n"},["/guide/i18n","/guide/i18n.md"]],
  ["v-0978b044","/guide/markdown.html",{"title":"Markdown"},["/guide/markdown","/guide/markdown.md"]],
  ["v-d0112c92","/guide/migration.html",{"title":"Migrating from v1"},["/guide/migration","/guide/migration.md"]],
  ["v-4eaf9f84","/guide/page.html",{"title":"Page"},["/guide/page","/guide/page.md"]],
  ["v-1d14d5cc","/guide/plugin.html",{"title":"Plugin"},["/guide/plugin","/guide/plugin.md"]],
  ["v-4d76029c","/guide/theme.html",{"title":"Theme"},["/guide/theme","/guide/theme.md"]],
  ["v-a951be94","/reference/cli.html",{"title":"命令行接口"},["/reference/cli","/reference/cli.md"]],
  ["v-a84e51b8","/reference/client-api.html",{"title":"客户端 API"},["/reference/client-api","/reference/client-api.md"]],
  ["v-55453034","/reference/components.html",{"title":"内置组件"},["/reference/components","/reference/components.md"]],
  ["v-b249668c","/reference/config.html",{"title":"配置"},["/reference/config","/reference/config.md"]],
  ["v-3590f0ec","/reference/frontmatter.html",{"title":"Frontmatter"},["/reference/frontmatter","/reference/frontmatter.md"]],
  ["v-4986678d","/reference/node-api.html",{"title":"Node API"},["/reference/node-api","/reference/node-api.md"]],
  ["v-51569e88","/reference/plugin-api.html",{"title":"插件 API"},["/reference/plugin-api","/reference/plugin-api.md"]],
  ["v-6b76c1c0","/reference/theme-api.html",{"title":"主题 API"},["/reference/theme-api","/reference/theme-api.md"]],
  ["v-0716aeb6","/views/access/ConnectingDevices.html",{"title":"Connecting devices"},["/views/access/ConnectingDevices","/views/access/ConnectingDevices.md"]],
  ["v-e4237204","/views/access/ControllingDevices.html",{"title":"Controlling devices"},["/views/access/ControllingDevices","/views/access/ControllingDevices.md"]],
  ["v-67169d7e","/views/access/DeviceDetails.html",{"title":"Device details"},["/views/access/DeviceDetails","/views/access/DeviceDetails.md"]],
  ["v-61b032a0","/views/access/GroupingDevices.html",{"title":"Grouping devices"},["/views/access/GroupingDevices","/views/access/GroupingDevices.md"]],
  ["v-000fffe3","/views/access/LoggingMonitoring.html",{"title":"Logging and Monitoring"},["/views/access/LoggingMonitoring","/views/access/LoggingMonitoring.md"]],
  ["v-3295d2e6","/views/access/ManagingDeviceData.html",{"title":"Managing device data"},["/views/access/ManagingDeviceData","/views/access/ManagingDeviceData.md"]],
  ["v-2138afa2","/views/access/Overview.html",{"title":"Overview"},["/views/access/Overview","/views/access/Overview.md"]],
  ["v-3f689070","/views/access/ViewingDevices.html",{"title":"Viewing devices"},["/views/access/ViewingDevices","/views/access/ViewingDevices.md"]],
  ["v-2e97e858","/reference/default-theme/components.html",{"title":"内置组件"},["/reference/default-theme/components","/reference/default-theme/components.md"]],
  ["v-0f0d17a8","/reference/default-theme/config.html",{"title":"配置"},["/reference/default-theme/config","/reference/default-theme/config.md"]],
  ["v-e5e26a84","/reference/default-theme/frontmatter.html",{"title":"Frontmatter"},["/reference/default-theme/frontmatter","/reference/default-theme/frontmatter.md"]],
  ["v-176c9c4a","/reference/default-theme/markdown.html",{"title":"Markdown"},["/reference/default-theme/markdown","/reference/default-theme/markdown.md"]],
  ["v-31e08608","/reference/default-theme/styles.html",{"title":"样式"},["/reference/default-theme/styles","/reference/default-theme/styles.md"]],
  ["v-cf5a290e","/reference/bundler/vite.html",{"title":"Vite"},["/reference/bundler/vite","/reference/bundler/vite.md"]],
  ["v-d4319af0","/reference/bundler/webpack.html",{"title":"Webpack"},["/reference/bundler/webpack","/reference/bundler/webpack.md"]],
  ["v-3ba02eb8","/reference/plugin/active-header-links.html",{"title":"active-header-links"},["/reference/plugin/active-header-links","/reference/plugin/active-header-links.md"]],
  ["v-6474e88f","/reference/plugin/back-to-top.html",{"title":"back-to-top"},["/reference/plugin/back-to-top","/reference/plugin/back-to-top.md"]],
  ["v-3df91977","/reference/plugin/container.html",{"title":"container"},["/reference/plugin/container","/reference/plugin/container.md"]],
  ["v-687d8b36","/reference/plugin/debug.html",{"title":"debug"},["/reference/plugin/debug","/reference/plugin/debug.md"]],
  ["v-ec0baf10","/reference/plugin/docsearch.html",{"title":"docsearch"},["/reference/plugin/docsearch","/reference/plugin/docsearch.md"]],
  ["v-5c864690","/reference/plugin/external-link-icon.html",{"title":"external-link-icon"},["/reference/plugin/external-link-icon","/reference/plugin/external-link-icon.md"]],
  ["v-0f9e4c06","/reference/plugin/git.html",{"title":"git"},["/reference/plugin/git","/reference/plugin/git.md"]],
  ["v-b3f1b470","/reference/plugin/google-analytics.html",{"title":"google-analytics"},["/reference/plugin/google-analytics","/reference/plugin/google-analytics.md"]],
  ["v-2ad6454d","/reference/plugin/medium-zoom.html",{"title":"medium-zoom"},["/reference/plugin/medium-zoom","/reference/plugin/medium-zoom.md"]],
  ["v-46d4f19d","/reference/plugin/nprogress.html",{"title":"nprogress"},["/reference/plugin/nprogress","/reference/plugin/nprogress.md"]],
  ["v-37c5e106","/reference/plugin/palette.html",{"title":"palette"},["/reference/plugin/palette","/reference/plugin/palette.md"]],
  ["v-35ebfb0e","/reference/plugin/prismjs.html",{"title":"prismjs"},["/reference/plugin/prismjs","/reference/plugin/prismjs.md"]],
  ["v-5f86289f","/reference/plugin/pwa-popup.html",{"title":"pwa-popup"},["/reference/plugin/pwa-popup","/reference/plugin/pwa-popup.md"]],
  ["v-7ab4099e","/reference/plugin/pwa.html",{"title":"pwa"},["/reference/plugin/pwa","/reference/plugin/pwa.md"]],
  ["v-7f8fee18","/reference/plugin/register-components.html",{"title":"register-components"},["/reference/plugin/register-components","/reference/plugin/register-components.md"]],
  ["v-260e1012","/reference/plugin/search.html",{"title":"search"},["/reference/plugin/search","/reference/plugin/search.md"]],
  ["v-bb2079f4","/reference/plugin/shiki.html",{"title":"shiki"},["/reference/plugin/shiki","/reference/plugin/shiki.md"]],
  ["v-18fd0fcc","/reference/plugin/theme-data.html",{"title":"theme-data"},["/reference/plugin/theme-data","/reference/plugin/theme-data.md"]],
  ["v-76709450","/reference/plugin/toc.html",{"title":"toc"},["/reference/plugin/toc","/reference/plugin/toc.md"]],
  ["v-3706649a","/404.html",{},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
