import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/Users/lanqiuping/Desktop/vuepress2.0/vuepress2.0/docs/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("/Users/lanqiuping/Desktop/vuepress2.0/vuepress2.0/docs/theme-default/lib/client/layouts/Layout.vue")),
}
