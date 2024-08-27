/*
 * @Descripttion: 
 * @Author: voanit
 * @Date: 2024-08-16 19:16:02
 * @LastEditors: voanit
 * @LastEditTime: 2024-08-27 20:42:09
 */
import { defineConfig } from 'vitepress'
import NavList from "../config/nav.json"
import sidebarList from "../config/sidebar";
import inlineSFCPlugin from "vite-plugin-vitepres-inline-sfc";
// console.log('A->', a);
// https://vitepress.dev/reference/site-confid
// https://api.iconify.design/material-symbols:book.svg
export default defineConfig({
  base: '/vitepress-docs/',
  title: "海上钢琴师的个人博客",
  description: "海上钢琴师的个人博客",
  head: [
    ['link', { rel: 'icon', href: 'https://api.iconify.design/material-symbols:book.svg' }]
  ],
  themeConfig: {
    outline: {
      level: [2, 3],
      label: '目录',
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: NavList,

    sidebar: sidebarList,
    lastUpdatedText: '上次更新',
    lastUpdated: {},
    editLink: {
      pattern: 'https://github.com/ruyanbin/myvitepress/docs/:path',
      text: '编辑此页'
    },

    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ruyanbin/vitepress-docs' },
      {
        icon: {
          svg: '<svg t="1670828084087" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1923" width="32" height="32"><path d="M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.883h-290.74a25.293 25.293 0 0 0-25.292 25.293l-0.026 63.206c0 13.952 11.315 25.293 25.267 25.293h177.024c13.978 0 25.293 11.315 25.293 25.267v12.646a75.853 75.853 0 0 1-75.853 75.853h-240.23a25.293 25.293 0 0 1-25.267-25.293V417.203a75.853 75.853 0 0 1 75.827-75.853h353.946a25.293 25.293 0 0 0 25.267-25.292l0.077-63.207a25.293 25.293 0 0 0-25.268-25.293H417.152a189.62 189.62 0 0 0-189.62 189.645V771.15c0 13.977 11.316 25.293 25.294 25.293h372.94a170.65 170.65 0 0 0 170.65-170.65V480.384a25.293 25.293 0 0 0-25.293-25.267z" fill="#C71D23" p-id="1924"></path></svg>',
        },
        link: "https://gitee.com/ruyanbin243019",
      },
    ],
    footer: {
      message: '个人博客',
      copyright: 'Copyright © 2024-present Evan You'
    },
    darkModeSwitchLabel: '外观',
    returnToTopLabel: '返回顶部',
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
  },
  vite: {
    plugins: [
      inlineSFCPlugin()
    ]
  }
})
