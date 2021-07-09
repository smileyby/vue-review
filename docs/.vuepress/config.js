module.exports = {
  base: '/vue-review/',
  title: 'VUE-REVIEW',
  description: '点亮Vue技能点',
  head: [
    ['link', { rel: 'icon', href: '/link.png' }]
  ],
  themeConfig: {
    logo: '/avatar.gif',
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: 'Last Updated',
    smoothScroll: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Github', link: 'https://github.com/smileyby' },
    ],
    sidebar: {
      '/': [
        '',  
        'base',
        'principle',
        'vuex',
        'router',
        'contact', 
        'about'
      ]
    }
  }
}