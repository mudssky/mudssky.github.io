module.exports = {
  /**
   *
   * 1.站点配置
   * 01-05 配置项可以设置在不同语言的 locales 中
   */
  // 01. 部署站点的基础路径
  base: '/',
  // 02. 站点的语言,默认是en-US
  lang: 'zh-CN',
  // 03.站点的标题,会作为所有页面标题的后缀，并且在默认主题的导航栏中显示
  title: 'blog',
  // 04.站点的描述,最终渲染成 <meta name="description" /> 标签的 content 属性,会被每个页面的 Frontmatter 中的 description 字段覆盖
  description: '这是我的第一个 VuePress 站点',
  /* 
  05. head是最终渲染出来的html标签中加入额外的标签.
  module.exports = {
    head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
  }
  渲染为
  <head>
    <link rel="icon" href="/images/logo.png" />
  </head>
  06.locales 配置多语言支持的
  */

  /**
   * 2.主题配置
   *
   *
   */
  // 07.你想要使用的主题的名称或绝对路径,默认值为@vuepress/default
  theme: '@vuepress/default',
  // 08.为当前使用的主题提供的配置项。具体的配置项取决于你使用的主题。
  themeConfig: {
    /**
     * 默认主题配置
     */
    // 001 locales { [path: string]: Partial<DefaultThemeLocaleData> },默认值{},默认主题的多语言配置
    // 002 loacle, 只有一种语言的情况单独进行配置
    // 003. 首页的路径。有两个地方会被用到:导航栏中 Logo 的链接 ,404 页面的 返回首页 链接
    // home:'/'
    // 004.导航栏配置, false | (NavbarItem | NavbarGroup | string)[]
    // NavbarItem 对象应该有一个 text 字段和一个 link 字段。
    // NavbarGroup 对象应该有一个 text 字段和一个 children 字段。 children 字段同样是一个 导航栏数组 。
    // 字符串应为目标页面文件的路径。它将会被转换为 NavbarItem 对象，将页面标题作为 text ，将页面路由路径作为 link 。
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
    // 005.Logo 图片的 URL。将会显示在导航栏的左端。
    // Public 文件路径 logo: '/images/hero.png',
    //url  logo: 'https://vuejs.org/images/logo.png',
    logo: 'https://vuejs.org/images/logo.png',

    // 006.如果你按照 `organization/repository` 的格式设置它
    // 我们会将它作为一个 GitHub 仓库
    repo: 'mudssky/mudssky.github.io',
    // 如果你使用的不是 GitHub ，可以直接使用 URL
    // repo: 'https://github.com/mudssky/mudssky.github.io',
    // 007. 项目仓库的标签。它将被用作 仓库链接 的文字。仓库链接 将会显示为导航栏的最后一个元素。如果你不明确指定该配置项，它将会根据 repo 配置项自动推断。
    repoLabel: 'GitHub',
    // 008.选择语言菜单的文字 string，如果你在站点配置中设置了多个 locales ，那么 选择语言菜单 就会显示在导航栏中仓库按钮的旁边。
    // selectLanguageText
    // 009. selectLanguageAriaLabel
    // 010.selectLanguageName Locale 的语言名称。该配置项 仅能在主题配置的 locales 的内部生效 。它将被用作 locale 的语言名称，展示在 选择语言菜单 内。
    // 011.侧边栏配置,如果你设置为 'auto'，侧边栏会根据页面标题自动生成。 默认是auto
    /**
     * 为了手动配置侧边栏元素，你可以将其设置为 侧边栏数组 ，其中的每个元素是 SidebarItem 对象、 SidebarGroup 对象、或者字符串：
      SidebarItem 对象应该有一个 text 字段、一个 link 字段和一个 children 字段。 children 字段是一个由 SidebarItem 或者字符串组成的数组。
      SidebarGroup 对象应将 isGroup 字段设为 true ，并且应该有一个 text 字段和一个children 字段。 children 字段是一个由 SidebarItem 或者字符串组成的数组。
      字符串应为目标页面文件的路径。它将会被转换为 SidebarItem 对象，将页面标题作为 text ，将页面路由路径作为 link ，并根据页面标题自动生成 children 。
          */
    // sidebar: 'auto',
    // 012. 是否启用编辑此页链接
    editLink: false,
    // 013. 编辑此页链接的文字
    // editLinkText: 'Edit this page',
    // 014. 编辑此页链接的pattern
    // :repo	文档仓库 URL ，即 docsRepo
    // :branch	文档仓库分支 ，即 docsBranch
    // :path	页面源文件的路径，即 docsDir 拼接上页面文件的相对路径
    /**
    * module.exports = {
      themeConfig: {
        docsRepo: 'https://gitlab.com/owner/name',
        docsBranch: 'master',
        docsDir: 'docs',
        editLinkPattern: ':repo/-/edit/:branch/:path',
      },
    }
    则会生成类似于 'https://gitlab.com/owner/name/-/edit/master/docs/path/to/file.md' 的链接。
     */
    // docsRepo: 'https://github.com/mudssky/mudssky.github.io',
    // docsBranch: 'gh-pages',
    // docsDir: '/',
    // editLinkPattern: ':repo/edit/:branch/:path',
    // 015. 是否启用 最近更新时间戳 。
    lastUpdated: true,
    // 016. 最近更新时间戳 标签的文字。
    lastUpdatedText: 'Last Updated',
    // 016.是否启用 贡献者列表 。
    contributors: true,
    // 017.贡献者列表 标签的文字。
    contributorsText: 'Contributors',
    // 018.Tip 自定义容器 的默认标题。
    tip: 'TIP',
    // 019.Warning 自定义容器 的默认标题。
    warning: 'WARNING',
    // 020.Danger 自定义容器 的默认标题。
    danger: 'WARNING',
    // 021.404 页面的提示信息。当用户进入 404 页面时，会从数组中随机选取一条信息进行展示。
    notFound: ['Not Found'],
    // 022.404 页面中 返回首页 链接的文字。
    backToHome: 'Back to home',
    // 023.OutboundLink 链接内的 sr-only 文字。它主要是为了站点的可访问性 (a11y) 。
    openInNewWindow: 'open in new window',

    /**
     * 插件 默认主题使用了一些插件，如果你确实不需要该插件，你可以选择禁用它。在禁用插件之前，请确保你已了解它的用途。
     */
    // themePlugins: {
    //   activeHeaderLinks: true,
    //   backToTop: true,
    //   container: true,
    //   git: true,
    //   mediumZoom: true,
    //   nprogress: true,
    // },
  },
  /**
   * 3.打包工具配置
   *
   *
   */
  // 09.可以使用打包工具名称的简称,默认值是webpack,以后可能就换成vite了
  // bundler: '@vuepress/webpack',
  // bundler: '@vuepress/vite',
  // 10.具体打包工具的配置项,默认值{}
  // bundlerConfig,

  /**
   * 4.目录配置
   *
   */
  // 11.指定 vuepress build 命令的输出目录。默认值是 dest: `${sourceDir}/.vuepress/dist`
  // dest: `${sourceDir}/.vuepress/dist`,
  // 12.指定临时文件目录。默认值是  temp: `${sourceDir}/.vuepress/.temp`,
  // temp: `${sourceDir}/.vuepress/.temp`,
  // 13.指定缓存目录,默认值是  cache: `${sourceDir}/.vuepress/.cache`,
  // cache: `${sourceDir}/.vuepress/.cache`,
  // 14.指定public文件目录,默认值是 public: `${sourceDir}/.vuepress/public`,
  // public: `${sourceDir}/.vuepress/public`,

  /**
   * 5. Markdown 配置
   */
  /*
  15.它可以接收 markdown-it 的所有配置项,以及一些额外的选项
  默认值,MarkdownOptions: {},
  额外的配置项为以下的几个:
  markdown.anchor ,AnchorPluginOptions | false, markdown-it-anchor 的配置项
  #markdown.assets,AssetsPluginOptions | false, VuePress 内置的 markdown-it assets 插件的配置项。
  #markdown.code,  CodePluginOptions | false,VuePress 内置的 markdown-it code 插件的配置项。
  #markdown.code.highlightLines,boolean 默认值： true,是否启用代码块行高亮。
  #markdown.code.lineNumbers,boolean 默认值： true, 是否启用代码块行号。
  #markdown.code.preWrapper, boolean 默认值： true, 是否在 <pre> 标签外额外包裹一层,highlightLines 和 lineNumbers 依赖于这个额外的包裹层。这换句话说，如果你禁用了 preWrapper ，那么行高亮和行号也会被同时禁用。
  #markdown.code.vPre,boolean 默认值： true, 是否在 <pre> 标签上添加 v-pre 指令。
  #markdown.customComponent undefined | false VuePress 内置的 markdown-it custom-component 插件的配置项。
  #markdown.emoji, EmojiPluginOptions | false, markdown-it-emoji 的配置项。
  #markdown.extractHeaders, ExtractHeadersPluginOptions | false, VuePress 内置的 markdown-it extract-headers 插件的配置项。,它将会把页面的标题提取到 Page Data 中，可以用于生成侧边栏、目录等。比如当前页面的侧边栏，就是由这个插件提取出的标题来自动生成的。
  #markdown.hoistTags, HoistTagsPluginOptions | false, VuePress 内置的 markdown-it hoist-tags 插件的配置项, 它将会把你的 Markdown 中特定的 HTML 标签提升到 SFC 的顶层。默认情况下，只有 <script> 和 <style> 标签会被提升。你可以通过这个配置项，在 Markdown 中使用 SFC 自定义块。
  #markdown.links, LinksPluginOptions | false, VuePress 内置的 markdown-it 链接插件的配置项,它将会把站内链接转换为 <RouterLink> ，并且会在站外链接上添加额外的属性。
  #markdown.toc, TocPluginOptions | false, VuePress 内置的 markdown-it 目录插件的配置项。
  */

  /**
   * 6. 开发配置项
   */
  // 16.是否启用 Debug 模式, boolean,默认值： false
  // 该配置项主要提供给开发者使用。同时，我们使用了 debug 模块打印 Debug 日志，可以通过 DEBUG=vuepress* 环境变量来启用。
  debug: true,
  // 17.指定开发服务器的主机名。
  // host: '0.0.0.0',
  host: '127.0.0.1',
  // 18. 指定开发服务器的端口号。
  port: 8080,
  // 19.是否在开发服务器启动后打开浏览器。
  open: false,
  // 20.指定页面文件的 Patterns 。这些 Patterns 是相对于 Source 目录的。
  // 默认值:pagePatterns: ['**/*.md', '!.vuepress', '!node_modules'],
  pagePatterns: ['**/*.md', '!.vuepress', '!node_modules'],
  // 21.指定开发时使用的 HTML 模板,默认值'@vuepress/client/templates/index.dev.html'
  // templateDev: '@vuepress/client/templates/index.dev.html',
  // 22.指定构建时 (SSR) 使用的 HTML 模板。 默认值'@vuepress/client/templates/index.ssr.html'
  // templateSSR: '@vuepress/client/templates/index.ssr.html',
  // 23.一个函数，用来控制哪些文件是需要生成对应的 <link rel="preload"> 标签的。设置为 true 或者 false 来完全启用或禁用它。
  // 默认情况下，只有当前页面所需的文件会被预加载。所以在绝大部分情况下，你只需要使用 true 就可以了。
  // ((file: string, type: string) => boolean)) | boolean
  // shouldPreload: true,

  //24. 一个函数，用来控制哪些文件是需要生成对应的 <link rel="prefetch"> 标签的。设置为 true 或者 false 来完全启用或禁用它。
  // 如果你将它设置为 true ，所有其它页面所需的文件都会被预拉取。这对于小型站点来说是十分有帮助的，因为它会大大提升页面切换的速度。但是在你的网站有很多页面时不建议你这么做。
  // shouldPrefetch: false,
}
