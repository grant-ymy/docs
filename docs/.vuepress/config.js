module.exports = {
  base: '/docs/',
  title: 'grant\'s tech docs',
  description: 'coding docs',
  dest: './dist',
  markdown: {
    lineNumbers: true,
  },
  evergreen: true,
  themeConfig: {
    repo: 'https://github.com/grant-ymy/docs',
    repoLabel: '源码',
    lastUpdated: '上次更新',
    editLinks: true,
    editLinkText: '编辑此页内容',
    nav: [
      { text: '首页', link: '/' },
    ],
    sidebar: [
      ['/', '简介'],
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
        title: 'go',
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
        title: 'docker',
        sidebarDepth: 2,
        children: [
          'docker/',
        ],
      },
      {
        title: 'frontend',
        sidebarDepth: 2,
        children: [
          'frontend/',
        ],
      },
    ]
  }
}
