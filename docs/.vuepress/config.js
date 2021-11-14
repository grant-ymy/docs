module.exports = {
  base: '/docs/',
  title: 'grant\'s tech docs',
  description: 'coding docs',
  dest: './dist',
  markdown: {
    lineNumbers: true,
  },
  evergreen: true,
  plugins: {
    '@vuepress/back-to-top': true,
    '@vuepress/active-header-links': {
      sidebarLinkSelector: '.sidebar-link',
      headerAnchorSelector: '.header-anchor'
    },
    '@vssue/vuepress-plugin-vssue': {
      platform: 'github-v4', //v3的platform是github，v4的是github-v4
      locale: 'zh', //语言
      // 其他的 Vssue 配置
      owner: 'grant-ymy', //github账户名
      repo: 'docs', //github一个项目的名称
      clientId: '1eab3284f097e9b1d067',//注册的Client ID
      clientSecret: '285d5f1a0a443580a778dd0cbc23a3d990070ed0',//注册的Client Secret
      autoCreateIssue: true // 自动创建评论，默认是false，最好开启，这样首次进入页面的时候就不用去点击创建评论的按钮了。
    },
  },
  themeConfig: {
    logo: '/head.jpg',
    repo: 'https://github.com/grant-ymy/docs',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    repoLabel: '仓库',
    lastUpdated: '上次更新时间',
    editLinks: true,
    editLinkText: '帮助我完善此内容',
    smoothScroll: true,
    nav: [
      { text: '首页', link: '/' },
    ],
    sidebar: [
      {
        title: '简介',
        path: 'intro/'
      },
      {
        title: 'PHP',
        sidebarDepth: 2,
        children: [
          'php/',
          {
            title: '框架',
            children: [
              'php/laravel/',
            ],
          },
        ],
      },
      {
        title: 'MySQL',
        sidebarDepth: 2,
        children: [
          'mysql/',
        ],
      },
      {
        title: 'Linux',
        sidebarDepth: 2,
        children: [
          'linux/',
        ],
      },
      {
        title: 'Golang',
        sidebarDepth: 2,
        children: [
          'go/',
        ],
      },
      {
        title: 'book',
        sidebarDepth: 2,
        children: [
          'book/',
        ],
      },
      {
        title: 'Docker',
        sidebarDepth: 2,
        children: [
          'docker/',
        ],
      },
      {
        title: 'Git',
        sidebarDepth: 2,
        children: [
          'git/',
        ],
      },
      {
        title: 'frontend',
        sidebarDepth: 2,
        children: [
          'frontend/',
        ],
      },
      {
        title: 'Tool',
        sidebarDepth: 2,
        children: [
          'tool/',
        ],
      },
    ]
  }
}
