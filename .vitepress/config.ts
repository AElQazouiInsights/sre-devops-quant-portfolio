import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Amine El Qazoui's Portfolio",
  description: "Professional portfolio and CV of Amine El Qazoui",
  base: "/SRE-DevOps-Financial-Markets-Portfolio/",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Curriculum Vitae', link: '/curriculum-vitae' },
      { text: 'SRE Practices', link: '/sre-practices-implementation' },
    ],
    sidebar: [
      {
        text: 'Portfolio',
        items: [
          { text: 'Welcome', link: '/' },
          { text: 'Curriculum Vitae', link: '/curriculum-vitae' },
          { text: 'SRE Practices', link: '/sre-practices-implementation' },
          { text: 'Dev Env setup', link: '/development-env-cmder' },
          { text: 'Advanced documentation practices', link: '/vitepress-using-github-page' },
          // Adding the collapsible "PiKube" section
          {
            text: 'PiKube',
            collapsible: true,
            collapsed: true, // The section will start collapsed
            items: [
              {
                text: 'What it is about?',
                collapsible: true,
                collapsed: true, // This subfolder will also start collapsed
                items: [
                  { text: 'Project Purpose', link: '/PiKube/project-architecture-purpose/1-project-purpose' },
                  { text: 'Architecture', link: '/PiKube/project-architecture-purpose/2-architecture' },
                ]
              }
            ]
          }
        ]
      }
    ],
    socialLinks: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/amine-el-qazoui-43450926' },
      { icon: 'github', link: 'https://github.com/Crypto-Aggressor' }
    ]
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
})
