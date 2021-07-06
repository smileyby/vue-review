module.exports = {
  base: '/vue-review/',
  title: 'VUE-REVIEW',
  description: '点亮Vue技能点',
  head: [
    ['link', { rel: 'icon', href: '/head.jpg' }]
  ],
  themeConfig: {
    logo: '/avatar.gif',
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: 'Last Updated',
    smoothScroll: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Github', link: 'https://github.com/smileyby' },
    ]
  }
}