import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/en-lang-vitepress/',
  title: "🎈 英语成长笔记",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '学习积累', link: '/docs/prologue' },
      { text: '雅思通关', link: '/ielts/prologue' }
    ],

    sidebar: [
      {
        text: '写在最前',
        collapsed: false,
        items: [
          { text: '序言', link: '/docs/prologue' },
          { text: '关于目录结构的设计', link: '/docs/beginning/directory_structure' },
        ]
      },
      {
        text: '口语练习',
        collapsed: false,
        items: [
          { text: '读前必看', link: '/docs/speaking/' },
          {
            text: '英文歌曲',
            collapsed: true,
            items: [
              { text: 'Blank Space', link: '/docs/speaking/songs/blank_space' },
            ]
          },
        ]
      },
      {
        text: '听力练习',
        collapsed: false,
        items: [
          { text: '读前必看', link: '/docs/listening/' },
          { text: '1. What is money?', link: '/docs/listening/1_what-is-money' },
          { text: '2. What is iceberg thinking?', link: '/docs/listening/2_what-is-iceberg-thinking' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © 2023-${new Date().getFullYear()} fmw666`
    },
    
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
  },

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/vitepress-logo-mini.svg' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/vitepress-logo-mini.png' }],
  ],
})
