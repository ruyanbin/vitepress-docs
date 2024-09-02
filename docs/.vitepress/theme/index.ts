// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import "../../../example/css/houdini.vue"
import "element-plus/dist/index.css"
import ElementPlus from 'element-plus'
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp: async ({ app, router, siteData }) => {
    app.use(ElementPlus)
    app.component("Houdini", await import("../../../example/css/houdini.vue"))
    // ...
  }
} satisfies Theme
