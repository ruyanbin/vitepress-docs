// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import "element-plus/dist/index.css"
import ElementPlus from 'element-plus'
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp:async({ app, router, siteData }) =>{
    app.use(ElementPlus)
    // ...
  }
} satisfies Theme
