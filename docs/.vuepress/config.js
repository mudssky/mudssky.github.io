module.exports = {
  lang: 'zh-CN',
  title: 'blog',
  description: '这是我的第一个 VuePress 站点',
  base: '/',
  themeConfig: {
    navbar: [
      {
        text: '常用工具配置',
        children: [
          {
            text: '代码检查&格式化',
            children: [
              {
                text: 'prettier使用指南',
                link: '/prettier使用指南.md',
              },
            ],
          },
        ],
      },
      // 嵌套 Group - 最大深度为 2
      {
        text: 'Group',
        children: [
          {
            text: 'SubGroup',
            children: ['/group/sub/foo.md', '/group/sub/bar.md'],
          },
          {
            text: 'SubGroup2',
            children: ['/group/sub/foo.md', '/group/sub/bar.md'],
          },
        ],
      },
      {
        text: 'Foo',
        link: '/foo/',
      },
    ],
    // 如果你按照 `organization/repository` 的格式设置它
    // 我们会将它作为一个 GitHub 仓库
    repo: 'vuejs/vuepress',
    // 如果你使用的不是 GitHub ，可以直接使用 URL
    repo: 'https://gitlab.com/foo/bar',

    logo: 'https://vuejs.org/images/logo.png',
  },
}
