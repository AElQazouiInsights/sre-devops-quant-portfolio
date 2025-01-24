import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(
  defineConfig({
    title: "SRE • DevOps • Quant Portfolio",
    description: "Portfolio showcasing SRE, DevOps implementations and Quantitative Finance projects",
    base: "/sre-devops-quant-portfolio/",
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'About myself', link: '/curriculum-vitae' }
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
          collapsed: false,
          items: [
            { text: 'Development Environment', link: '/development-env-cmder' },
            { text: 'VitePress Documentation', link: '/vitepress-using-github-page' },
            { text: 'Building a Bike Share Billing System from the Ground Up', link: '/sql/divvy-bike-problem-statement' }
          ]
        }
      ],
      socialLinks: [
        { icon: 'linkedin', link: 'https://www.linkedin.com/in/amine-el-qazoui-43450926' },
        { icon: 'github', link: 'https://github.com/AElQazouiInsights' }
      ],
      footer: {
        message: 'Portfolio built with VitePress',
        copyright: '© 2025 A El Qazoui'
      }
    },
    head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }],
      ['meta', { name: 'theme-color', content: '#3eaf7c' }],
      ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
      ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
    ],
    // Enable Mermaid in markdown code fences
    markdown: {
      mermaid: true
    }
  })
)