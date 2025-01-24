import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "SRE • DevOps • Quant Portfolio",
  description: "Portfolio showcasing SRE, DevOps implementations and Quantitative Finance projects",
  base: "/sre-devops-quant-portfolio/",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'CV', link: '/curriculum-vitae' },
      { text: 'Projects', link: '/projects' }
    ],
    sidebar: [
      {
        text: 'Experience',
        collapsible: true,
        collapsed: false,
        items: [
          { text: 'Overview', link: '/' },
          { text: 'Curriculum Vitae', link: '/curriculum-vitae' }
        ]
      },
      {
        text: 'Professional Projects',
        collapsible: true,
        collapsed: false,
        items: [
          { text: 'SRE Implementation', link: '/sre-practices-implementation' },
          { text: 'PiKube Service', link: '/pikube-kubernetes-service' },
          { text: 'Quantitative Finance Platform', link: '/investment-management-with-python-and-machine-learning' }
        ]
      },
      {
        text: 'Technical Guides',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'Development Environment', link: '/development-env-cmder' },
          { text: 'VitePress Documentation', link: '/vitepress-using-github-page' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/amine-el-qazoui-43450926' },
      { icon: 'github', link: 'https://github.com/AElQazouiInsights' }
    ],
    footer: {
      message: 'Portfolio built with VitePress',
      copyright: '© 2024 A El Qazoui'
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ]
})