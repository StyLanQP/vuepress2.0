<template><h1 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h1>
<NpmBadge package="@vuepress/cli" />
<NpmBadge package="@vuepress/core" />
<p>VuePress 配置的参考文档，可以通过配置文件来设置这些配置。 VuePress 约定的配置文件为（按照优先顺序）：</p>
<ul>
<li>当前工作目录 <code>cwd</code> 下：
<ul>
<li><code>vuepress.config.ts</code></li>
<li><code>vuepress.config.js</code></li>
</ul>
</li>
<li>源文件目录 <code>sourceDir</code> 下：
<ul>
<li><code>.vuepress/config.ts</code></li>
<li><code>.vuepress/config.js</code></li>
</ul>
</li>
</ul>
<p>你也可以通过 <RouterLink to="/cli.html">命令行接口</RouterLink> 的 <code>--config</code> 选项来指定配置文件。</p>
<h2 id="站点配置" tabindex="-1"><a class="header-anchor" href="#站点配置" aria-hidden="true">#</a> 站点配置</h2>
<h3 id="base" tabindex="-1"><a class="header-anchor" href="#base" aria-hidden="true">#</a> base</h3>
<ul>
<li>
<p>类型： <code>string</code></p>
</li>
<li>
<p>默认值： <code>/</code></p>
</li>
<li>
<p>详情：</p>
<p>部署站点的基础路径。</p>
<p>如果你想让你的网站部署到一个子路径下，你将需要设置它。它的值应当总是以斜杠开始，并以斜杠结束。举例来说，如果你想将你的网站部署到 <code>https://foo.github.io/bar/</code>，那么 <code>base</code> 应该被设置成 <code>&quot;/bar/&quot;</code>。</p>
<p><code>base</code> 将会作为前缀自动地插入到所有以 <code>/</code> 开始的其他选项的链接中，所以你只需要指定一次。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><RouterLink to="/guide/assets.html#base-helper">指南 &gt; 静态资源 &gt; Base Helper</RouterLink></li>
<li><RouterLink to="/guide/deployment.html">指南 &gt; 部署</RouterLink></li>
</ul>
</li>
</ul>
<h3 id="lang" tabindex="-1"><a class="header-anchor" href="#lang" aria-hidden="true">#</a> lang</h3>
<ul>
<li>
<p>类型： <code>string</code></p>
</li>
<li>
<p>默认值： <code>en-US</code></p>
</li>
<li>
<p>详情：</p>
<p>站点的语言。</p>
<p>它将会在最终渲染出的 HTML 中作为 <code>&lt;html&gt;</code> 标签的 <code>lang</code> 属性。</p>
<p>它可以设置在不同语言的 locales 中。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><a href="#locales">配置 &gt; locales</a></li>
</ul>
</li>
</ul>
<h3 id="title" tabindex="-1"><a class="header-anchor" href="#title" aria-hidden="true">#</a> title</h3>
<ul>
<li>
<p>类型： <code>string</code></p>
</li>
<li>
<p>默认值： <code>''</code></p>
</li>
<li>
<p>详情：</p>
<p>站点的标题。</p>
<p>它将会作为所有页面标题的后缀，并且在默认主题的导航栏中显示。</p>
<p>它可以设置在不同语言的 locales 中。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><a href="#locales">配置 &gt; locales</a></li>
</ul>
</li>
</ul>
<h3 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> description</h3>
<ul>
<li>
<p>类型： <code>string</code></p>
</li>
<li>
<p>默认值： <code>''</code></p>
</li>
<li>
<p>详情：</p>
<p>站点的描述。</p>
<p>它将会在最终渲染出的 HTML 中作为 <code>&lt;meta name=&quot;description&quot; /&gt;</code> 标签的 <code>content</code> 属性。它会被每个页面的 Frontmatter 中的 <code>description</code> 字段覆盖。</p>
<p>它可以设置在不同语言的 locales 中。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><a href="#locales">配置 &gt; locales</a></li>
<li><RouterLink to="/frontmatter.html#description">Frontmatter &gt; description</RouterLink></li>
</ul>
</li>
</ul>
<h3 id="head" tabindex="-1"><a class="header-anchor" href="#head" aria-hidden="true">#</a> head</h3>
<ul>
<li>
<p>类型： <code>HeadConfig[]</code></p>
</li>
<li>
<p>默认值： <code>[]</code></p>
</li>
<li>
<p>详情：</p>
<p>在最终渲染出的 HTML 的 <code>&lt;head&gt;</code> 标签内加入的额外标签。</p>
<p>你可以通过 <code>[tagName, { attrName: attrValue }, innerHTML?]</code> 的格式来添加标签。</p>
<p>它可以设置在不同语言的 locales 中。</p>
</li>
<li>
<p>示例：</p>
<p>增加一个自定义的 favicon ：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">head</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">'link'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">rel</span><span class="token operator">:</span> <span class="token string">'icon'</span><span class="token punctuation">,</span> <span class="token literal-property property">href</span><span class="token operator">:</span> <span class="token string">'/images/logo.png'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>渲染为：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>icon<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/images/logo.png<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul>
<li>参考：
<ul>
<li><a href="#locales">配置 &gt; locales</a></li>
<li><RouterLink to="/frontmatter.html#head">Frontmatter &gt; head</RouterLink></li>
</ul>
</li>
</ul>
<h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales" aria-hidden="true">#</a> locales</h3>
<ul>
<li>
<p>类型： <code>{ [path: string]: Partial&lt;SiteLocaleData&gt; }</code></p>
</li>
<li>
<p>默认值： <code>{}</code></p>
</li>
<li>
<p>详情：</p>
<p>多语言支持的各个语言 locales 。</p>
<p>可以使用的字段有：</p>
<ul>
<li><a href="#lang">lang</a></li>
<li><a href="#title">title</a></li>
<li><a href="#description">description</a></li>
<li><a href="#head">head</a></li>
</ul>
</li>
<li>
<p>参考：</p>
<ul>
<li><RouterLink to="/guide/i18n.html">指南 &gt; I18n</RouterLink></li>
</ul>
</li>
</ul>
<h2 id="主题配置" tabindex="-1"><a class="header-anchor" href="#主题配置" aria-hidden="true">#</a> 主题配置</h2>
<h3 id="theme" tabindex="-1"><a class="header-anchor" href="#theme" aria-hidden="true">#</a> theme</h3>
<ul>
<li>
<p>类型： <code>string</code></p>
</li>
<li>
<p>默认值： <code>'@vuepress/theme-default'</code></p>
</li>
<li>
<p>详情：</p>
<p>你想要使用的主题的名称或绝对路径。</p>
<p>这个选项可以接收主题名称、主题简称或主题的绝对路径。</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token string">'vuepress-theme-foo'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token string">'bar'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'./path/to/local/theme'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul>
<li>参考：
<ul>
<li><a href="#themeconfig">themeConfig</a></li>
<li><RouterLink to="/guide/theme.html">指南 &gt; 主题</RouterLink></li>
</ul>
</li>
</ul>
<h3 id="themeconfig" tabindex="-1"><a class="header-anchor" href="#themeconfig" aria-hidden="true">#</a> themeConfig</h3>
<ul>
<li>
<p>类型： <code>ThemeConfig</code></p>
</li>
<li>
<p>默认值： <code>{}</code></p>
</li>
<li>
<p>详情：</p>
<p>为当前使用的主题提供的配置项。具体的配置项取决于你使用的主题。</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 使用默认主题</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token string">'@vuepress/theme-default'</span><span class="token punctuation">,</span>
  <span class="token comment">// 配置默认主题</span>
  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">'/logo.png'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul>
<li>参考：
<ul>
<li><a href="#theme">theme</a></li>
<li><RouterLink to="/default-theme/config.html">默认主题 &gt; 配置</RouterLink></li>
</ul>
</li>
</ul>
<h2 id="打包工具配置" tabindex="-1"><a class="header-anchor" href="#打包工具配置" aria-hidden="true">#</a> 打包工具配置</h2>
<h3 id="bundler" tabindex="-1"><a class="header-anchor" href="#bundler" aria-hidden="true">#</a> bundler</h3>
<ul>
<li>
<p>类型： <code>string</code></p>
</li>
<li>
<p>默认值： <code>'@vuepress/bundler-vite'</code></p>
</li>
<li>
<p>详情：</p>
<p>你想要使用的打包工具的名称。</p>
<p>可以使用打包工具名称的简称。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><RouterLink to="/guide/bundler.html">指南 &gt; 打包工具</RouterLink></li>
</ul>
</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>在使用 <a href="https://www.npmjs.com/package/vuepress-webpack" target="_blank" rel="noopener noreferrer">vuepress-webpack<ExternalLinkIcon/></a> Package 时，默认的打包工具会被设置为 <code>'@vuepress/bundler-webpack'</code> 。</p>
</div>
<h3 id="bundlerconfig" tabindex="-1"><a class="header-anchor" href="#bundlerconfig" aria-hidden="true">#</a> bundlerConfig</h3>
<ul>
<li>
<p>类型： <code>BundlerConfig</code></p>
</li>
<li>
<p>默认值： <code>{}</code></p>
</li>
<li>
<p>详情：</p>
<p>为当前使用的打包工具提供的配置项。具体的配置项取决于你使用的打包工具。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><RouterLink to="/guide/bundler.html">指南 &gt; 打包工具</RouterLink></li>
<li><RouterLink to="/bundler/webpack.html">打包工具 &gt; Webpack</RouterLink></li>
<li><RouterLink to="/bundler/vite.html">打包工具 &gt; Vite</RouterLink></li>
</ul>
</li>
</ul>
<h2 id="通用配置项" tabindex="-1"><a class="header-anchor" href="#通用配置项" aria-hidden="true">#</a> 通用配置项</h2>
<h3 id="dest" tabindex="-1"><a class="header-anchor" href="#dest" aria-hidden="true">#</a> dest</h3>
<ul>
<li>
<p>类型： <code>string</code></p>
</li>
<li>
<p>默认值： <code>`${sourceDir}/.vuepress/dist`</code></p>
</li>
<li>
<p>详情：</p>
<p>指定 <code>vuepress build</code> 命令的输出目录。</p>
</li>
</ul>
<h3 id="temp" tabindex="-1"><a class="header-anchor" href="#temp" aria-hidden="true">#</a> temp</h3>
<ul>
<li>
<p>类型： <code>string</code></p>
</li>
<li>
<p>默认值： <code>`${sourceDir}/.vuepress/.temp`</code></p>
</li>
<li>
<p>详情：</p>
<p>指定临时文件目录。</p>
</li>
</ul>
<h3 id="cache" tabindex="-1"><a class="header-anchor" href="#cache" aria-hidden="true">#</a> cache</h3>
<ul>
<li>
<p>类型： <code>string</code></p>
</li>
<li>
<p>默认值： <code>`${sourceDir}/.vuepress/.cache`</code></p>
</li>
<li>
<p>详情：</p>
<p>指定缓存目录。</p>
</li>
</ul>
<h3 id="public" tabindex="-1"><a class="header-anchor" href="#public" aria-hidden="true">#</a> public</h3>
<ul>
<li>
<p>类型： <code>string</code></p>
</li>
<li>
<p>默认值： <code>`${sourceDir}/.vuepress/public`</code></p>
</li>
<li>
<p>详情：</p>
<p>指定 Public 文件目录。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><RouterLink to="/guide/assets.html#public-%E6%96%87%E4%BB%B6">指南 &gt; 静态资源 &gt; Public 文件</RouterLink></li>
</ul>
</li>
</ul>
<h3 id="debug" tabindex="-1"><a class="header-anchor" href="#debug" aria-hidden="true">#</a> debug</h3>
<ul>
<li>
<p>类型： <code>boolean</code></p>
</li>
<li>
<p>默认值： <code>false</code></p>
</li>
<li>
<p>详情：</p>
<p>是否启用 Debug 模式。</p>
<p>该配置项主要提供给开发者使用。同时，我们使用了 <a href="https://github.com/visionmedia/debug" target="_blank" rel="noopener noreferrer">debug<ExternalLinkIcon/></a> 模块打印 Debug 日志，可以通过 <code>DEBUG=vuepress*</code> 环境变量来启用。</p>
</li>
</ul>
<h3 id="pagepatterns" tabindex="-1"><a class="header-anchor" href="#pagepatterns" aria-hidden="true">#</a> pagePatterns</h3>
<ul>
<li>
<p>类型： <code>string[]</code></p>
</li>
<li>
<p>默认值： <code>['**/*.md', '!.vuepress', '!node_modules']</code></p>
</li>
<li>
<p>详情：</p>
<p>指定页面文件的 Patterns 。这些 Patterns 是相对于 Source 目录的。</p>
</li>
</ul>
<h2 id="dev-配置项" tabindex="-1"><a class="header-anchor" href="#dev-配置项" aria-hidden="true">#</a> Dev 配置项</h2>
<h3 id="host" tabindex="-1"><a class="header-anchor" href="#host" aria-hidden="true">#</a> host</h3>
<ul>
<li>
<p>类型： <code>string</code></p>
</li>
<li>
<p>默认值： <code>'0.0.0.0'</code></p>
</li>
<li>
<p>详情：</p>
<p>指定开发服务器的主机名。</p>
</li>
</ul>
<h3 id="port" tabindex="-1"><a class="header-anchor" href="#port" aria-hidden="true">#</a> port</h3>
<ul>
<li>
<p>类型： <code>number</code></p>
</li>
<li>
<p>默认值： <code>8080</code></p>
</li>
<li>
<p>详情：</p>
<p>指定开发服务器的端口号。</p>
</li>
</ul>
<h3 id="open" tabindex="-1"><a class="header-anchor" href="#open" aria-hidden="true">#</a> open</h3>
<ul>
<li>
<p>类型： <code>boolean</code></p>
</li>
<li>
<p>默认值： <code>false</code></p>
</li>
<li>
<p>详情：</p>
<p>是否在开发服务器启动后打开浏览器。</p>
</li>
</ul>
<h3 id="templatedev" tabindex="-1"><a class="header-anchor" href="#templatedev" aria-hidden="true">#</a> templateDev</h3>
<ul>
<li>
<p>类型： <code>string</code></p>
</li>
<li>
<p>默认值： <code>'@vuepress/client/templates/index.dev.html'</code></p>
</li>
<li>
<p>详情：</p>
<p>指定开发时使用的 HTML 模板。</p>
</li>
</ul>
<h2 id="build-配置项" tabindex="-1"><a class="header-anchor" href="#build-配置项" aria-hidden="true">#</a> Build 配置项</h2>
<h3 id="shouldpreload" tabindex="-1"><a class="header-anchor" href="#shouldpreload" aria-hidden="true">#</a> shouldPreload</h3>
<ul>
<li>
<p>类型： <code>((file: string, type: string) =&gt; boolean)) | boolean</code></p>
</li>
<li>
<p>默认值： <code>true</code></p>
</li>
<li>
<p>详情：</p>
<p>一个函数，用来控制哪些文件是需要生成对应的 <code>&lt;link rel=&quot;preload&quot;&gt;</code> 标签的。设置为 <code>true</code> 或者 <code>false</code> 来完全启用或禁用它。</p>
<p>默认情况下，只有当前页面所需的文件会被预加载。所以在绝大部分情况下，你只需要使用 <code>true</code> 就可以了。</p>
</li>
</ul>
<h3 id="shouldprefetch" tabindex="-1"><a class="header-anchor" href="#shouldprefetch" aria-hidden="true">#</a> shouldPrefetch</h3>
<ul>
<li>
<p>类型： <code>((file: string, type: string) =&gt; boolean)) | boolean</code></p>
</li>
<li>
<p>默认值： <code>false</code></p>
</li>
<li>
<p>详情：</p>
<p>一个函数，用来控制哪些文件是需要生成对应的 <code>&lt;link rel=&quot;prefetch&quot;&gt;</code> 标签的。设置为 <code>true</code> 或者 <code>false</code> 来完全启用或禁用它。</p>
<p>如果你将它设置为 <code>true</code> ，所有其它页面所需的文件都会被预拉取。这对于小型站点来说是十分有帮助的，因为它会大大提升页面切换的速度。但是在你的网站有很多页面时不建议你这么做。</p>
</li>
</ul>
<h3 id="templatebuild" tabindex="-1"><a class="header-anchor" href="#templatebuild" aria-hidden="true">#</a> templateBuild</h3>
<ul>
<li>
<p>类型： <code>string</code></p>
</li>
<li>
<p>默认值： <code>'@vuepress/client/templates/index.build.html'</code></p>
</li>
<li>
<p>详情：</p>
<p>指定构建时使用的 HTML 模板。</p>
</li>
</ul>
<h2 id="markdown-配置" tabindex="-1"><a class="header-anchor" href="#markdown-配置" aria-hidden="true">#</a> Markdown 配置</h2>
<h3 id="markdown" tabindex="-1"><a class="header-anchor" href="#markdown" aria-hidden="true">#</a> markdown</h3>
<ul>
<li>
<p>类型： <code>MarkdownOptions</code></p>
</li>
<li>
<p>默认值： <code>{}</code></p>
</li>
<li>
<p>详情：</p>
<p>对 VuePress 内置的 Markdown 语法扩展进行配置。</p>
<p>它可以接收 <a href="https://github.com/markdown-it/markdown-it" target="_blank" rel="noopener noreferrer">markdown-it<ExternalLinkIcon/></a> 的所有配置项，以及下列额外的配置项。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><a href="https://github.com/markdown-it/markdown-it#init-with-presets-and-options" target="_blank" rel="noopener noreferrer">markdown-it &gt; Init with presets and options<ExternalLinkIcon/></a></li>
<li><RouterLink to="/guide/markdown.html#%E8%AF%AD%E6%B3%95%E6%89%A9%E5%B1%95">指南 &gt; Markdown &gt; 语法扩展</RouterLink></li>
</ul>
</li>
</ul>
<h3 id="markdown-anchor" tabindex="-1"><a class="header-anchor" href="#markdown-anchor" aria-hidden="true">#</a> markdown.anchor</h3>
<ul>
<li>
<p>类型： <code>AnchorPluginOptions | false</code></p>
</li>
<li>
<p>详情：</p>
<p><a href="https://github.com/valeriangalliat/markdown-it-anchor" target="_blank" rel="noopener noreferrer">markdown-it-anchor<ExternalLinkIcon/></a> 的配置项。</p>
<p>设置为 <code>false</code> 可以禁用该插件。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><RouterLink to="/guide/markdown.html#%E6%A0%87%E9%A2%98%E9%94%9A%E7%82%B9">指南 &gt; Markdown &gt; 语法扩展 &gt; 标题锚点</RouterLink></li>
</ul>
</li>
</ul>
<h3 id="markdown-assets" tabindex="-1"><a class="header-anchor" href="#markdown-assets" aria-hidden="true">#</a> markdown.assets</h3>
<ul>
<li>
<p>类型： <code>AssetsPluginOptions | false</code></p>
</li>
<li>
<p>详情：</p>
<p>VuePress 内置的 markdown-it assets 插件的配置项。</p>
<p>设置为 <code>false</code> 可以禁用该插件。</p>
</li>
</ul>
<div class="custom-container danger"><p class="custom-container-title">DANGER</p>
<p>除非你了解它的用途，否则你不应该设置该配置项。</p>
</div>
<h3 id="markdown-code" tabindex="-1"><a class="header-anchor" href="#markdown-code" aria-hidden="true">#</a> markdown.code</h3>
<ul>
<li>
<p>类型： <code>CodePluginOptions | false</code></p>
</li>
<li>
<p>详情：</p>
<p>VuePress 内置的 markdown-it code 插件的配置项。</p>
<p>设置为 <code>false</code> 可以禁用该插件。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><RouterLink to="/guide/markdown.html#%E4%BB%A3%E7%A0%81%E5%9D%97">指南 &gt; Markdown &gt; 语法扩展 &gt; 代码块</RouterLink></li>
</ul>
</li>
</ul>
<h4 id="markdown-code-highlightlines" tabindex="-1"><a class="header-anchor" href="#markdown-code-highlightlines" aria-hidden="true">#</a> markdown.code.highlightLines</h4>
<ul>
<li>
<p>类型： <code>boolean</code></p>
</li>
<li>
<p>默认值： <code>true</code></p>
</li>
<li>
<p>详情：</p>
<p>是否启用代码块行高亮。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><RouterLink to="/guide/markdown.html#%E8%A1%8C%E9%AB%98%E4%BA%AE">指南 &gt; Markdown &gt; 语法扩展 &gt; 代码块 &gt; 行高亮</RouterLink></li>
</ul>
</li>
</ul>
<h4 id="markdown-code-linenumbers" tabindex="-1"><a class="header-anchor" href="#markdown-code-linenumbers" aria-hidden="true">#</a> markdown.code.lineNumbers</h4>
<ul>
<li>
<p>类型： <code>boolean | number</code></p>
</li>
<li>
<p>默认值： <code>true</code></p>
</li>
<li>
<p>详情：</p>
<p>配置代码块行号。</p>
<ul>
<li>布尔值 <code>boolean</code> 代表是否启用代码块行号。</li>
<li>数字 <code>number</code> 代表显示行号所需的最少行数。例如，如果你将它设置为 <code>4</code> ，那么只有在你的代码块包含至少 4 行代码时才会启用行号。</li>
</ul>
</li>
<li>
<p>参考：</p>
<ul>
<li><RouterLink to="/guide/markdown.html#%E8%A1%8C%E5%8F%B7">指南 &gt; Markdown &gt; 语法扩展 &gt; 代码块 &gt; 行号</RouterLink></li>
</ul>
</li>
</ul>
<h4 id="markdown-code-prewrapper" tabindex="-1"><a class="header-anchor" href="#markdown-code-prewrapper" aria-hidden="true">#</a> markdown.code.preWrapper</h4>
<ul>
<li>
<p>类型： <code>boolean</code></p>
</li>
<li>
<p>默认值： <code>true</code></p>
</li>
<li>
<p>详情：</p>
<p>是否在 <code>&lt;pre&gt;</code> 标签外额外包裹一层。</p>
<p><code>highlightLines</code> 和 <code>lineNumbers</code> 依赖于这个额外的包裹层。这换句话说，如果你禁用了 <code>preWrapper</code> ，那么行高亮和行号也会被同时禁用。</p>
</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>如果你想要在客户端来实现这些功能时，可以禁用该配置项。比如使用 <a href="https://prismjs.com/plugins/line-highlight/" target="_blank" rel="noopener noreferrer">Prismjs Line Highlight<ExternalLinkIcon/></a> 或者 <a href="https://prismjs.com/plugins/line-numbers/" target="_blank" rel="noopener noreferrer">Prismjs Line Numbers<ExternalLinkIcon/></a>。</p>
</div>
<h4 id="markdown-code-vpre" tabindex="-1"><a class="header-anchor" href="#markdown-code-vpre" aria-hidden="true">#</a> markdown.code.vPre</h4>
<ul>
<li>
<p>类型： <code>boolean</code></p>
</li>
<li>
<p>默认值： <code>true</code></p>
</li>
<li>
<p>详情：</p>
<p>是否在 <code>&lt;pre&gt;</code> 标签上添加 <code>v-pre</code> 指令。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><RouterLink to="/guide/markdown.html#%E6%B7%BB%E5%8A%A0-v-pre">指南 &gt; Markdown &gt; 语法扩展 &gt; 代码块 &gt; 添加 v-pre</RouterLink></li>
</ul>
</li>
</ul>
<h3 id="markdown-customcomponent" tabindex="-1"><a class="header-anchor" href="#markdown-customcomponent" aria-hidden="true">#</a> markdown.customComponent</h3>
<ul>
<li>
<p>类型： <code>undefined | false</code></p>
</li>
<li>
<p>详情：</p>
<p>VuePress 内置的 markdown-it custom-component 插件的配置项。</p>
<p>设置为 <code>false</code> 可以禁用该插件。</p>
</li>
</ul>
<div class="custom-container danger"><p class="custom-container-title">DANGER</p>
<p>除非你了解它的用途，否则你不应该设置该配置项。</p>
</div>
<h3 id="markdown-emoji" tabindex="-1"><a class="header-anchor" href="#markdown-emoji" aria-hidden="true">#</a> markdown.emoji</h3>
<ul>
<li>
<p>类型： <code>EmojiPluginOptions | false</code></p>
</li>
<li>
<p>详情：</p>
<p><a href="https://github.com/markdown-it/markdown-it-emoji" target="_blank" rel="noopener noreferrer">markdown-it-emoji<ExternalLinkIcon/></a> 的配置项。</p>
<p>设置为 <code>false</code> 可以禁用该插件。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><RouterLink to="/guide/markdown.html#emoji">指南 &gt; Markdown &gt; 语法扩展 &gt; Emoji</RouterLink></li>
</ul>
</li>
</ul>
<h3 id="markdown-extractheaders" tabindex="-1"><a class="header-anchor" href="#markdown-extractheaders" aria-hidden="true">#</a> markdown.extractHeaders</h3>
<ul>
<li>
<p>类型： <code>ExtractHeadersPluginOptions | false</code></p>
</li>
<li>
<p>详情：</p>
<p>VuePress 内置的 markdown-it extract-headers 插件的配置项。</p>
<p>它将会把页面的子标题提取到 Page Data 中，可以用于生成侧边栏、目录等。比如当前页面的侧边栏，就是由这个插件提取出的标题来自动生成的。</p>
<p>设置为 <code>false</code> 可以禁用该插件。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><RouterLink to="/node-api.html#headers">Node API &gt; Page 属性 &gt; headers</RouterLink></li>
</ul>
</li>
</ul>
<h4 id="markdown-extractheaders-level" tabindex="-1"><a class="header-anchor" href="#markdown-extractheaders-level" aria-hidden="true">#</a> markdown.extractHeaders.level</h4>
<ul>
<li>
<p>类型： <code>number[]</code></p>
</li>
<li>
<p>默认值： <code>[2, 3]</code></p>
</li>
<li>
<p>详情：</p>
<p>需要提取的子标题层级。</p>
<p>举例来说，如果你把该选项设为 <code>[2]</code> ，那么只会提取 <code>##</code> 子标题。</p>
<p>它应该是 <a href="#markdownanchor">markdown.anchor.level</a> 选项的一个子集，以便确保提取出来的链接是存在的。</p>
</li>
</ul>
<h4 id="markdown-extractheaders-slugify" tabindex="-1"><a class="header-anchor" href="#markdown-extractheaders-slugify" aria-hidden="true">#</a> markdown.extractHeaders.slugify</h4>
<ul>
<li>
<p>类型： <code>(str: string) =&gt; string</code></p>
</li>
<li>
<p>详情：</p>
<p>一个函数，根据原始的子标题来获取提取出的子标题 slug 。</p>
<p>它应该使用和 <a href="#markdownanchor">markdown.anchor.slugify</a> 选项相同的 slugify 函数，来确保链接是匹配的。</p>
</li>
</ul>
<h4 id="markdown-extractheaders-format" tabindex="-1"><a class="header-anchor" href="#markdown-extractheaders-format" aria-hidden="true">#</a> markdown.extractHeaders.format</h4>
<ul>
<li>
<p>类型： <code>((str: string) =&gt; string) | undefined</code></p>
</li>
<li>
<p>默认值： <code>undefined</code></p>
</li>
<li>
<p>详情：</p>
<p>一个函数，将原始的子标题格式化为提取出的标题。</p>
</li>
</ul>
<h3 id="markdown-extracttitle" tabindex="-1"><a class="header-anchor" href="#markdown-extracttitle" aria-hidden="true">#</a> markdown.extractTitle</h3>
<ul>
<li>
<p>类型： <code>undefined | false</code></p>
</li>
<li>
<p>详情：</p>
<p>VuePress 内置的 markdown-it extract-title 插件的配置项。</p>
<p>它将会把大标题提取到 Page Data 中，将会被用作页面标题。</p>
<p>设置为 <code>false</code> 可以禁用该插件。</p>
</li>
</ul>
<div class="custom-container danger"><p class="custom-container-title">DANGER</p>
<p>除非你了解它的用途，否则你不应该设置该配置项。</p>
</div>
<h3 id="markdown-hoisttags" tabindex="-1"><a class="header-anchor" href="#markdown-hoisttags" aria-hidden="true">#</a> markdown.hoistTags</h3>
<ul>
<li>
<p>类型： <code>HoistTagsPluginOptions | false</code></p>
</li>
<li>
<p>详情：</p>
<p>VuePress 内置的 markdown-it hoist-tags 插件的配置项。</p>
<p>它将会把你的 Markdown 中特定的 HTML 标签提升到 SFC 的顶层。</p>
<p>设置为 <code>false</code> 可以禁用该插件。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><RouterLink to="/advanced/cookbook/markdown-and-vue-sfc.html">Cookbook &gt; Markdown 与 Vue SFC</RouterLink></li>
<li><RouterLink to="/node-api.html#hoistedtags">Node API &gt; Page 属性 &gt; hoistedTags</RouterLink></li>
</ul>
</li>
</ul>
<h3 id="markdown-hoisttags-customblocks" tabindex="-1"><a class="header-anchor" href="#markdown-hoisttags-customblocks" aria-hidden="true">#</a> markdown.hoistTags.customBlocks</h3>
<ul>
<li>
<p>类型： <code>string[]</code></p>
</li>
<li>
<p>默认值： <code>[]</code></p>
</li>
<li>
<p>详情：</p>
<p>想要提升的 SFC 自定义块。</p>
<p>默认情况下，只会提升 <code>&lt;script&gt;</code> 和 <code>&lt;style&gt;</code> 标签。你可以设置该选项以便在 Markdown 中支持自定义块。</p>
<p>例如，如果你将该选项设置为 <code>['foo']</code> ，那么 Markdown 中的 <code>&lt;foo&gt;</code> 标签就会提升为 Vue SFC 的自定义块。需要提醒的是，为了处理自定义块，你还需要正确配置你的打包工具。</p>
</li>
</ul>
<h3 id="markdown-importcode" tabindex="-1"><a class="header-anchor" href="#markdown-importcode" aria-hidden="true">#</a> markdown.importCode</h3>
<ul>
<li>
<p>类型： <code>ImportCodePluginOptions | false</code></p>
</li>
<li>
<p>详情：</p>
<p>VuePress 内置的 markdown-it 导入代码插件的配置项。</p>
<p>设置为 <code>false</code> 可以禁用该插件。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><RouterLink to="/guide/markdown.html#%E5%AF%BC%E5%85%A5%E4%BB%A3%E7%A0%81%E5%9D%97">指南 &gt; Markdown &gt; 语法扩展 &gt; 导入代码块</RouterLink></li>
</ul>
</li>
</ul>
<h4 id="markdown-importcode-handleimportpath" tabindex="-1"><a class="header-anchor" href="#markdown-importcode-handleimportpath" aria-hidden="true">#</a> markdown.importCode.handleImportPath</h4>
<ul>
<li>
<p>类型： <code>(str: string) =&gt; string</code></p>
</li>
<li>
<p>默认值： <code>(str) =&gt; str</code></p>
</li>
<li>
<p>详情：</p>
<p>一个函数，用于处理导入代码语法中的文件导入路径。</p>
</li>
</ul>
<h3 id="markdown-links" tabindex="-1"><a class="header-anchor" href="#markdown-links" aria-hidden="true">#</a> markdown.links</h3>
<ul>
<li>
<p>类型： <code>LinkPluginOptions | false</code></p>
</li>
<li>
<p>详情：</p>
<p>VuePress 内置的 markdown-it 链接插件的配置项。</p>
<p>它可以把站内链接转换为 <code>&lt;RouterLink&gt;</code> ，并且可以在站外链接上添加额外的属性和图标。</p>
<p>设置为 <code>false</code> 可以禁用该插件。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><RouterLink to="/guide/markdown.html#%E9%93%BE%E6%8E%A5">指南 &gt; Markdown &gt; 语法扩展 &gt; 链接</RouterLink></li>
</ul>
</li>
</ul>
<h4 id="markdown-links-internaltag" tabindex="-1"><a class="header-anchor" href="#markdown-links-internaltag" aria-hidden="true">#</a> markdown.links.internalTag</h4>
<ul>
<li>
<p>类型： <code>string</code></p>
</li>
<li>
<p>默认值： <code>'RouterLink'</code></p>
</li>
<li>
<p>详情：</p>
<p>内部链接所使用的标签。</p>
<p>默认情况下，该插件会把内部链接转换为 <code>&lt;RouterLink&gt;</code> 。你可以把该选项设置为 <code>'a'</code> 来禁用这个功能。</p>
</li>
</ul>
<h4 id="markdown-links-externalattrs" tabindex="-1"><a class="header-anchor" href="#markdown-links-externalattrs" aria-hidden="true">#</a> markdown.links.externalAttrs</h4>
<ul>
<li>
<p>类型： <code>Record&lt;string, string&gt;</code></p>
</li>
<li>
<p>默认值： <code>{ target: '_blank', rel: 'noopener noreferrer' }</code></p>
</li>
<li>
<p>详情：</p>
<p>为外部链接添加额外的属性。</p>
</li>
</ul>
<h3 id="markdown-toc" tabindex="-1"><a class="header-anchor" href="#markdown-toc" aria-hidden="true">#</a> markdown.toc</h3>
<ul>
<li>
<p>类型： <code>TocPluginOptions | false</code></p>
</li>
<li>
<p>详情：</p>
<p>VuePress 内置的 markdown-it 目录插件的配置项。</p>
<p>设置为 <code>false</code> 可以禁用该插件。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><RouterLink to="/guide/markdown.html#%E7%9B%AE%E5%BD%95">指南 &gt; Markdown &gt; 语法扩展 &gt; 目录</RouterLink></li>
</ul>
</li>
</ul>
<h3 id="markdown-toc-pattern" tabindex="-1"><a class="header-anchor" href="#markdown-toc-pattern" aria-hidden="true">#</a> markdown.toc.pattern</h3>
<ul>
<li>
<p>类型： <code>RegExp</code></p>
</li>
<li>
<p>默认值： <code>/^\[\[toc\]\]$/i</code></p>
</li>
<li>
<p>详情：</p>
<p>识别 Markdown 中的目录语法的 Pattern 。</p>
</li>
</ul>
<h3 id="markdown-toc-slugify" tabindex="-1"><a class="header-anchor" href="#markdown-toc-slugify" aria-hidden="true">#</a> markdown.toc.slugify</h3>
<ul>
<li>
<p>类型： <code>(str: string) =&gt; string</code></p>
</li>
<li>
<p>详情：</p>
<p>一个函数，根据原始的子标题来获取目录中的子标题 slug 。</p>
<p>它应该使用和 <a href="#markdownanchor">markdown.anchor.slugify</a> 选项相同的 slugify 函数，来确保链接是匹配的。</p>
</li>
</ul>
<h4 id="markdown-toc-format" tabindex="-1"><a class="header-anchor" href="#markdown-toc-format" aria-hidden="true">#</a> markdown.toc.format</h4>
<ul>
<li>
<p>类型： <code>((str: string) =&gt; string) | undefined</code></p>
</li>
<li>
<p>默认值： <code>undefined</code></p>
</li>
<li>
<p>详情：</p>
<p>一个函数，将原始的子标题格式化为目录中的标题。</p>
</li>
</ul>
<h4 id="markdown-toc-level" tabindex="-1"><a class="header-anchor" href="#markdown-toc-level" aria-hidden="true">#</a> markdown.toc.level</h4>
<ul>
<li>
<p>类型： <code>number[]</code></p>
</li>
<li>
<p>默认值： <code>[2, 3]</code></p>
</li>
<li>
<p>详情：</p>
<p>需要包含在目录中的子标题层级。</p>
<p>举例来说，如果你把该选项设为 <code>[2]</code> ，那么只会包含 <code>##</code> 子标题。</p>
<p>它应该是 <a href="#markdownanchor">markdown.anchor.level</a> 选项的一个子集，以便确保目录中的链接是存在的。</p>
</li>
</ul>
<h2 id="插件配置" tabindex="-1"><a class="header-anchor" href="#插件配置" aria-hidden="true">#</a> 插件配置</h2>
<h3 id="plugins" tabindex="-1"><a class="header-anchor" href="#plugins" aria-hidden="true">#</a> plugins</h3>
<ul>
<li>
<p>类型： <code>PluginConfig[]</code></p>
</li>
<li>
<p>详情：</p>
<p>要使用的插件。</p>
<p>该配置项接收一个数组，其中的每一个数组项是一个包含两个元素的元组：</p>
<ul>
<li>第一个元素是插件名称或插件本身。它可以接收插件名称、插件简称、插件的绝对路径或插件对象。</li>
<li>第二个元素是插件选项。它可以接收布尔值或一个对象。设置为 <code>false</code> 可以跳过该插件。设置为 <code>true</code> 可以启用该插件但不设置任何选项。使用对象可以启用该插件并且传入选项。</li>
</ul>
<p>为了简便起见，你可以将上述元组的第一个元素直接作为数组项，它等价于启用该插件但不设置任何选项。</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// 包含两个元素的元组</span>
    <span class="token punctuation">[</span><span class="token string">'vuepress-plugin-foo'</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">'bar'</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'./path/to/local/plugin'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token comment">/* 选项 */</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'vuepress-plugin-baz'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// 只使用第一个元素</span>
    <span class="token string">'foobar'</span><span class="token punctuation">,</span> <span class="token comment">// 等价于 ['foobar', true]</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><ul>
<li>参考：
<ul>
<li><RouterLink to="/guide/plugin.html">指南 &gt; 插件</RouterLink></li>
</ul>
</li>
</ul>
<h2 id="插件-api" tabindex="-1"><a class="header-anchor" href="#插件-api" aria-hidden="true">#</a> 插件 API</h2>
<p>用户配置文件同样可以作为一个 VuePress 插件，所以除了 <code>name</code> 和 <code>multiple</code> 配置项以外的所有插件 API 都可以在配置文件中使用。</p>
<p>前往 <RouterLink to="/plugin-api.html">插件 API 参考</RouterLink> 查看所有插件 API 。</p>
</template>
