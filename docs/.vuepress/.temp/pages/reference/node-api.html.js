export const data = {
  "key": "v-4986678d",
  "path": "/reference/node-api.html",
  "title": "Node API",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "<h1 id=\"node-api\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#node-api\" aria-hidden=\"true\">#</a> Node API</h1>\n<NpmBadge package=\"@vuepress/core\" />\n<p>Node API 是由 <a href=\"https://www.npmjs.com/package/@vuepress/clcorei\" target=\"_blank\" rel=\"noopener noreferrer\">@vuepress/core<ExternalLinkIcon/></a> 包提供的。它是 <a href=\"https://www.npmjs.com/package/vuepress\" target=\"_blank\" rel=\"noopener noreferrer\">vuepress<ExternalLinkIcon/></a> 包的依赖之一，当然你也可以单独安装它：</p>\n<div class=\"language-bash ext-sh line-numbers-mode\"><pre v-pre class=\"language-bash\"><code><span class=\"token function\">npm</span> i -D @vuepress/core@next\n</code></pre><div class=\"line-numbers\"><span class=\"line-number\">1</span><br></div></div><h2 id=\"app\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#app\" aria-hidden=\"true\">#</a> App</h2>\n<p><RouterLink to=\"/reference/plugin-api.html\">插件 API</RouterLink> 的所有 Hooks 中都可以获取到 App 实例。</p>\n<p><code>BuildApp</code> 和 <code>DevApp</code> 除了 <a href=\"#build\">build</a> 和 <a href=\"#dev\">dev</a> 方法外，拥有一样的属性和方法。</p>\n<h3 id=\"createbuildapp\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#createbuildapp\" aria-hidden=\"true\">#</a> createBuildApp</h3>\n<ul>\n<li>函数签名：</li>\n</ul>\n<div class=\"language-typescript ext-ts line-numbers-mode\"><pre v-pre class=\"language-typescript\"><code><span class=\"token keyword\">const</span> <span class=\"token function-variable function\">createBuildApp</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">(</span>config<span class=\"token operator\">:</span> AppConfig<span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> BuildApp<span class=\"token punctuation\">;</span>\n</code></pre><div class=\"line-numbers\"><span class=\"line-number\">1</span><br></div></div><ul>\n<li>参数：</li>\n</ul>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>config</td>\n<td><code>AppConfig</code></td>\n<td>创建 VuePress App 的选项。</td>\n</tr>\n</tbody>\n</table>\n<ul>\n<li>\n<p>详情：</p>\n<p>创建一个 Build 模式的 App 实例，用于构建静态文件。</p>\n</li>\n<li>\n<p>示例：</p>\n</li>\n</ul>\n<div class=\"language-typescript ext-ts line-numbers-mode\"><pre v-pre class=\"language-typescript\"><code><span class=\"token keyword\">const</span> <span class=\"token function-variable function\">build</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">async</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">const</span> app <span class=\"token operator\">=</span> <span class=\"token function\">createBuildApp</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n    <span class=\"token comment\">// ...配置项</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span>\n\n  <span class=\"token comment\">// 初始化和准备</span>\n  <span class=\"token keyword\">await</span> app<span class=\"token punctuation\">.</span><span class=\"token function\">init</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span>\n  <span class=\"token keyword\">await</span> app<span class=\"token punctuation\">.</span><span class=\"token function\">prepare</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span>\n\n  <span class=\"token comment\">// 构建</span>\n  <span class=\"token keyword\">await</span> app<span class=\"token punctuation\">.</span><span class=\"token function\">build</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span>\n\n  <span class=\"token comment\">// 处理 onGenerated hook</span>\n  <span class=\"token keyword\">await</span> app<span class=\"token punctuation\">.</span>pluginApi<span class=\"token punctuation\">.</span>hooks<span class=\"token punctuation\">.</span>onGenerated<span class=\"token punctuation\">.</span><span class=\"token function\">process</span><span class=\"token punctuation\">(</span>app<span class=\"token punctuation\">)</span>\n<span class=\"token punctuation\">}</span>\n</code></pre><div class=\"line-numbers\"><span class=\"line-number\">1</span><br><span class=\"line-number\">2</span><br><span class=\"line-number\">3</span><br><span class=\"line-number\">4</span><br><span class=\"line-number\">5</span><br><span class=\"line-number\">6</span><br><span class=\"line-number\">7</span><br><span class=\"line-number\">8</span><br><span class=\"line-number\">9</span><br><span class=\"line-number\">10</span><br><span class=\"line-number\">11</span><br><span class=\"line-number\">12</span><br><span class=\"line-number\">13</span><br><span class=\"line-number\">14</span><br><span class=\"line-number\">15</span><br></div></div><ul>\n<li>参考：\n<ul>\n<li><a href=\"#build\">Node API &gt; App 方法 &gt; build</a></li>\n</ul>\n</li>\n</ul>\n<h3 id=\"createdevapp\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#createdevapp\" aria-hidden=\"true\">#</a> createDevApp</h3>\n<ul>\n<li>函数签名：</li>\n</ul>\n<div class=\"language-typescript ext-ts line-numbers-mode\"><pre v-pre class=\"language-typescript\"><code><span class=\"token keyword\">const</span> <span class=\"token function-variable function\">createDevApp</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">(</span>config<span class=\"token operator\">:</span> AppConfig<span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> DevApp\n</code></pre><div class=\"line-numbers\"><span class=\"line-number\">1</span><br></div></div><ul>\n<li>参数：</li>\n</ul>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>config</td>\n<td><code>AppConfig</code></td>\n<td>创建 VuePress App 的选项。</td>\n</tr>\n</tbody>\n</table>\n<ul>\n<li>\n<p>详情：</p>\n<p>创建一个 Dev 模式的 App 实例，用于启动开发服务器。</p>\n</li>\n<li>\n<p>示例：</p>\n</li>\n</ul>\n<div class=\"language-typescript ext-ts line-numbers-mode\"><pre v-pre class=\"language-typescript\"><code><span class=\"token keyword\">const</span> <span class=\"token function-variable function\">dev</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">async</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">const</span> app <span class=\"token operator\">=</span> <span class=\"token function\">createDevApp</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n    <span class=\"token comment\">// ...配置项</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span>\n\n  <span class=\"token comment\">// 初始化和准备</span>\n  <span class=\"token keyword\">await</span> app<span class=\"token punctuation\">.</span><span class=\"token function\">init</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span>\n  <span class=\"token keyword\">await</span> app<span class=\"token punctuation\">.</span><span class=\"token function\">prepare</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span>\n\n  <span class=\"token comment\">// 启动开发服务器</span>\n  <span class=\"token keyword\">const</span> closeDevServer <span class=\"token operator\">=</span> <span class=\"token keyword\">await</span> app<span class=\"token punctuation\">.</span><span class=\"token function\">dev</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span>\n\n  <span class=\"token comment\">// 准备文件监听器</span>\n  <span class=\"token keyword\">const</span> watchers <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span>\n\n  <span class=\"token comment\">// 重启开发服务器</span>\n  <span class=\"token keyword\">const</span> <span class=\"token function-variable function\">restart</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">async</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">await</span> <span class=\"token builtin\">Promise</span><span class=\"token punctuation\">.</span><span class=\"token function\">all</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">[</span>\n      <span class=\"token comment\">// 关闭所有监听器</span>\n      <span class=\"token operator\">...</span>watchers<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>item<span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> item<span class=\"token punctuation\">.</span><span class=\"token function\">close</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n      <span class=\"token comment\">// 关闭当前的开发服务器</span>\n      <span class=\"token function\">closeDevServer</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">)</span>\n    <span class=\"token keyword\">await</span> <span class=\"token function\">dev</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token comment\">// 处理 onWatched hook</span>\n  <span class=\"token keyword\">await</span> app<span class=\"token punctuation\">.</span>pluginApi<span class=\"token punctuation\">.</span>hooks<span class=\"token punctuation\">.</span>onWatched<span class=\"token punctuation\">.</span><span class=\"token function\">process</span><span class=\"token punctuation\">(</span>app<span class=\"token punctuation\">,</span> watchers<span class=\"token punctuation\">,</span> restart<span class=\"token punctuation\">)</span>\n<span class=\"token punctuation\">}</span>\n</code></pre><div class=\"line-numbers\"><span class=\"line-number\">1</span><br><span class=\"line-number\">2</span><br><span class=\"line-number\">3</span><br><span class=\"line-number\">4</span><br><span class=\"line-number\">5</span><br><span class=\"line-number\">6</span><br><span class=\"line-number\">7</span><br><span class=\"line-number\">8</span><br><span class=\"line-number\">9</span><br><span class=\"line-number\">10</span><br><span class=\"line-number\">11</span><br><span class=\"line-number\">12</span><br><span class=\"line-number\">13</span><br><span class=\"line-number\">14</span><br><span class=\"line-number\">15</span><br><span class=\"line-number\">16</span><br><span class=\"line-number\">17</span><br><span class=\"line-number\">18</span><br><span class=\"line-number\">19</span><br><span class=\"line-number\">20</span><br><span class=\"line-number\">21</span><br><span class=\"line-number\">22</span><br><span class=\"line-number\">23</span><br><span class=\"line-number\">24</span><br><span class=\"line-number\">25</span><br><span class=\"line-number\">26</span><br><span class=\"line-number\">27</span><br><span class=\"line-number\">28</span><br><span class=\"line-number\">29</span><br></div></div><ul>\n<li>参考：\n<ul>\n<li><a href=\"#dev\">Node API &gt; App 方法 &gt; dev</a></li>\n</ul>\n</li>\n</ul>\n<h2 id=\"app-属性\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#app-属性\" aria-hidden=\"true\">#</a> App 属性</h2>\n<h3 id=\"options\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#options\" aria-hidden=\"true\">#</a> options</h3>\n<ul>\n<li>\n<p>类型： <code>AppOptions</code></p>\n</li>\n<li>\n<p>详情：</p>\n<p>VuePress App 的配置项。</p>\n<p>这些配置项来自于 <a href=\"#createbuildapp\">createBuildApp</a> / <a href=\"#createdevapp\">createDevApp</a> 的 <code>config</code> 参数，但所有可选的字段都填充上了默认值。</p>\n</li>\n</ul>\n<h3 id=\"sitedata\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#sitedata\" aria-hidden=\"true\">#</a> siteData</h3>\n<ul>\n<li>\n<p>类型： <code>SiteData</code></p>\n</li>\n<li>\n<p>详情：</p>\n<p>由用户设置的站点数据，包含所有的 <RouterLink to=\"/reference/config.html#%E7%AB%99%E7%82%B9%E9%85%8D%E7%BD%AE\">站点配置</RouterLink> ，可以在客户端代码中使用。</p>\n</li>\n</ul>\n<h3 id=\"version\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#version\" aria-hidden=\"true\">#</a> version</h3>\n<ul>\n<li>\n<p>类型： <code>string</code></p>\n</li>\n<li>\n<p>详情：</p>\n<p>VuePress App 的版本，即 <code>@vuepress/core</code> 包的版本。</p>\n</li>\n</ul>\n<h3 id=\"env-isbuild\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#env-isbuild\" aria-hidden=\"true\">#</a> env.isBuild</h3>\n<ul>\n<li>\n<p>类型： <code>boolean</code></p>\n</li>\n<li>\n<p>详情：</p>\n<p>用于判断 App 是否运行在 Build 模式的环境标记，即当前 App 是否是 <a href=\"#createbuildapp\">BuildApp</a> 实例。</p>\n</li>\n</ul>\n<h3 id=\"env-isdev\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#env-isdev\" aria-hidden=\"true\">#</a> env.isDev</h3>\n<ul>\n<li>\n<p>类型： <code>boolean</code></p>\n</li>\n<li>\n<p>详情：</p>\n<p>用于判断 App 是否运行在 Dev 模式的环境标记，即当前 App 是否是 <a href=\"#createdevapp\">DevApp</a> 实例。</p>\n</li>\n</ul>\n<h3 id=\"env-isdebug\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#env-isdebug\" aria-hidden=\"true\">#</a> env.isDebug</h3>\n<ul>\n<li>\n<p>类型： <code>boolean</code></p>\n</li>\n<li>\n<p>详情：</p>\n<p>用于判断 App 是否开启 Debug 模式的环境标记。</p>\n</li>\n</ul>\n<h3 id=\"markdown\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#markdown\" aria-hidden=\"true\">#</a> markdown</h3>\n<ul>\n<li>\n<p>类型： <code>MarkdownIt</code></p>\n</li>\n<li>\n<p>详情：</p>\n<p>用于解析 Markdown 内容的 <a href=\"https://github.com/markdown-it/markdown-it\" target=\"_blank\" rel=\"noopener noreferrer\">markdown-it<ExternalLinkIcon/></a> 实例。</p>\n<p>它仅在 <RouterLink to=\"/reference/plugin-api.html#oninitialized\">onInitialized</RouterLink> 以及之后的 Hooks 中才可用。</p>\n</li>\n</ul>\n<h3 id=\"layouts\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#layouts\" aria-hidden=\"true\">#</a> layouts</h3>\n<ul>\n<li>\n<p>类型： <code>Record&lt;string, string&gt;</code></p>\n</li>\n<li>\n<p>详情：</p>\n<p>布局组件 Map ，其键为布局名称，对应值为布局组件的绝对文件路径。</p>\n<p>它仅在 <RouterLink to=\"/reference/plugin-api.html#oninitialized\">onInitialized</RouterLink> 以及之后的 Hooks 中才可用。</p>\n</li>\n</ul>\n<h3 id=\"pages\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#pages\" aria-hidden=\"true\">#</a> pages</h3>\n<ul>\n<li>\n<p>类型： <code>Page[]</code></p>\n</li>\n<li>\n<p>详情：</p>\n<p><a href=\"#page\">Page</a> 对象数组。</p>\n<p>它仅在 <RouterLink to=\"/reference/plugin-api.html#oninitialized\">onInitialized</RouterLink> 以及之后的 Hooks 中才可用。</p>\n</li>\n</ul>\n<h2 id=\"app-方法\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#app-方法\" aria-hidden=\"true\">#</a> App 方法</h2>\n<h3 id=\"dir\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#dir\" aria-hidden=\"true\">#</a> dir</h3>\n<ul>\n<li>\n<p>工具函数：</p>\n<ul>\n<li><code>dir.cache()</code>： 解析至缓存目录</li>\n<li><code>dir.temp()</code>： 解析至临时文件目录</li>\n<li><code>dir.source()</code>： 解析至源文件目录</li>\n<li><code>dir.dest()</code>： 解析至输出目录</li>\n<li><code>dir.client()</code>： 解析至 <code>@vuepress/client</code> 目录</li>\n<li><code>dir.public()</code>： 解析至 Public 文件目录</li>\n</ul>\n</li>\n<li>\n<p>函数签名：</p>\n</li>\n</ul>\n<div class=\"language-typescript ext-ts line-numbers-mode\"><pre v-pre class=\"language-typescript\"><code><span class=\"token keyword\">type</span> <span class=\"token class-name\">AppDirFunction</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token operator\">...</span>args<span class=\"token operator\">:</span> <span class=\"token builtin\">string</span><span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token builtin\">string</span>\n</code></pre><div class=\"line-numbers\"><span class=\"line-number\">1</span><br></div></div><ul>\n<li>\n<p>详情：</p>\n<p>用于解析对应目录下的文件绝对路径的一些工具函数。</p>\n<p>如果你不传入任何参数，就会返回对应目录的绝对路径。</p>\n</li>\n<li>\n<p>示例：</p>\n</li>\n</ul>\n<div class=\"language-typescript ext-ts line-numbers-mode\"><pre v-pre class=\"language-typescript\"><code><span class=\"token comment\">// 解析 `${sourceDir}/README.md` 文件的绝对路径</span>\n<span class=\"token keyword\">const</span> homeSourceFile <span class=\"token operator\">=</span> app<span class=\"token punctuation\">.</span>dir<span class=\"token punctuation\">.</span><span class=\"token function\">source</span><span class=\"token punctuation\">(</span><span class=\"token string\">'README.md'</span><span class=\"token punctuation\">)</span>\n</code></pre><div class=\"line-numbers\"><span class=\"line-number\">1</span><br><span class=\"line-number\">2</span><br></div></div><h3 id=\"writetemp\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#writetemp\" aria-hidden=\"true\">#</a> writeTemp</h3>\n<ul>\n<li>函数签名：</li>\n</ul>\n<div class=\"language-typescript ext-ts line-numbers-mode\"><pre v-pre class=\"language-typescript\"><code><span class=\"token function\">writeTemp</span><span class=\"token punctuation\">(</span>file<span class=\"token operator\">:</span> <span class=\"token builtin\">string</span><span class=\"token punctuation\">,</span> content<span class=\"token operator\">:</span> <span class=\"token builtin\">string</span><span class=\"token punctuation\">)</span><span class=\"token operator\">:</span> <span class=\"token builtin\">Promise</span><span class=\"token operator\">&lt;</span><span class=\"token builtin\">string</span><span class=\"token operator\">></span>\n</code></pre><div class=\"line-numbers\"><span class=\"line-number\">1</span><br></div></div><ul>\n<li>参数：</li>\n</ul>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>file</td>\n<td><code>string</code></td>\n<td>要写入的临时文件的路径，相对于临时文件目录。</td>\n</tr>\n<tr>\n<td>content</td>\n<td><code>string</code></td>\n<td>要写入的临时文件路径的内容。</td>\n</tr>\n</tbody>\n</table>\n<ul>\n<li>\n<p>详情：</p>\n<p>用于写入临时文件的方法。</p>\n<p>写入的文件可以在客户端文件中通过 <code>@temp</code> 别名来引入。</p>\n</li>\n<li>\n<p>示例：</p>\n</li>\n</ul>\n<div class=\"language-javascript ext-js line-numbers-mode\"><pre v-pre class=\"language-javascript\"><code>module<span class=\"token punctuation\">.</span>exports <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token comment\">// 在 onPrepared hook 中写入临时文件</span>\n  <span class=\"token keyword\">async</span> <span class=\"token function\">onPrepared</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">await</span> app<span class=\"token punctuation\">.</span><span class=\"token function\">writeTemp</span><span class=\"token punctuation\">(</span><span class=\"token string\">'foo.js'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'export const foo = \\'bar\\''</span><span class=\"token punctuation\">)</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n</code></pre><div class=\"line-numbers\"><span class=\"line-number\">1</span><br><span class=\"line-number\">2</span><br><span class=\"line-number\">3</span><br><span class=\"line-number\">4</span><br><span class=\"line-number\">5</span><br><span class=\"line-number\">6</span><br></div></div><div class=\"language-typescript ext-ts line-numbers-mode\"><pre v-pre class=\"language-typescript\"><code><span class=\"token comment\">// 在客户端文件中引入临时文件</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> foo <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'@temp/foo'</span>\n</code></pre><div class=\"line-numbers\"><span class=\"line-number\">1</span><br><span class=\"line-number\">2</span><br></div></div><h3 id=\"init\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#init\" aria-hidden=\"true\">#</a> init</h3>\n<ul>\n<li>函数签名：</li>\n</ul>\n<div class=\"language-typescript ext-ts line-numbers-mode\"><pre v-pre class=\"language-typescript\"><code><span class=\"token function\">init</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token operator\">:</span> <span class=\"token builtin\">Promise</span><span class=\"token operator\">&lt;</span><span class=\"token keyword\">void</span><span class=\"token operator\">></span>\n</code></pre><div class=\"line-numbers\"><span class=\"line-number\">1</span><br></div></div><ul>\n<li>\n<p>详情：</p>\n<p>初始化 VuePress App 。</p>\n</li>\n<li>\n<p>参考：</p>\n<ul>\n<li><RouterLink to=\"/advanced/architecture.html#%E6%A0%B8%E5%BF%83%E6%B5%81%E7%A8%8B%E4%B8%8E-hooks\">深入 &gt; 架构 &gt; 核心流程与 Hooks</RouterLink></li>\n</ul>\n</li>\n</ul>\n<h3 id=\"prepare\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#prepare\" aria-hidden=\"true\">#</a> prepare</h3>\n<ul>\n<li>函数签名：</li>\n</ul>\n<div class=\"language-typescript ext-ts line-numbers-mode\"><pre v-pre class=\"language-typescript\"><code><span class=\"token function\">prepare</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token operator\">:</span> <span class=\"token builtin\">Promise</span><span class=\"token operator\">&lt;</span><span class=\"token keyword\">void</span><span class=\"token operator\">></span>\n</code></pre><div class=\"line-numbers\"><span class=\"line-number\">1</span><br></div></div><ul>\n<li>\n<p>详情：</p>\n<p>准备客户端临时文件。</p>\n</li>\n<li>\n<p>参考：</p>\n<ul>\n<li><RouterLink to=\"/advanced/architecture.html#%E6%A0%B8%E5%BF%83%E6%B5%81%E7%A8%8B%E4%B8%8E-hooks\">深入 &gt; 架构 &gt; 核心流程与 Hooks</RouterLink></li>\n</ul>\n</li>\n</ul>\n<h3 id=\"build\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#build\" aria-hidden=\"true\">#</a> build</h3>\n<ul>\n<li>函数签名：</li>\n</ul>\n<div class=\"language-typescript ext-ts line-numbers-mode\"><pre v-pre class=\"language-typescript\"><code><span class=\"token function\">build</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token operator\">:</span> <span class=\"token builtin\">Promise</span><span class=\"token operator\">&lt;</span><span class=\"token keyword\">void</span><span class=\"token operator\">></span>\n</code></pre><div class=\"line-numbers\"><span class=\"line-number\">1</span><br></div></div><ul>\n<li>\n<p>详情：</p>\n<p>生成静态站点文件。</p>\n<p>该方法仅在 <a href=\"#createbuildapp\">BuildApp</a> 中可用。</p>\n</li>\n<li>\n<p>参考：</p>\n<ul>\n<li><RouterLink to=\"/advanced/architecture.html#%E6%A0%B8%E5%BF%83%E6%B5%81%E7%A8%8B%E4%B8%8E-hooks\">深入 &gt; 架构 &gt; 核心流程与 Hooks</RouterLink></li>\n</ul>\n</li>\n</ul>\n<h3 id=\"dev\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#dev\" aria-hidden=\"true\">#</a> dev</h3>\n<ul>\n<li>函数签名：</li>\n</ul>\n<div class=\"language-typescript ext-ts line-numbers-mode\"><pre v-pre class=\"language-typescript\"><code><span class=\"token function\">dev</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token operator\">:</span> <span class=\"token builtin\">Promise</span><span class=\"token operator\">&lt;</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token builtin\">Promise</span><span class=\"token operator\">&lt;</span><span class=\"token keyword\">void</span><span class=\"token operator\">>></span>\n</code></pre><div class=\"line-numbers\"><span class=\"line-number\">1</span><br></div></div><ul>\n<li>\n<p>详情：</p>\n<p>启动开发服务器。</p>\n<p>该方法仅在 <a href=\"#createdevapp\">DevApp</a> 中可用。</p>\n</li>\n<li>\n<p>参考：</p>\n<ul>\n<li><RouterLink to=\"/advanced/architecture.html#%E6%A0%B8%E5%BF%83%E6%B5%81%E7%A8%8B%E4%B8%8E-hooks\">深入 &gt; 架构 &gt; 核心流程与 Hooks</RouterLink></li>\n</ul>\n</li>\n</ul>\n<h2 id=\"page\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#page\" aria-hidden=\"true\">#</a> Page</h2>\n<h3 id=\"createpage\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#createpage\" aria-hidden=\"true\">#</a> createPage</h3>\n<ul>\n<li>函数签名：</li>\n</ul>\n<div class=\"language-typescript ext-ts line-numbers-mode\"><pre v-pre class=\"language-typescript\"><code><span class=\"token keyword\">const</span> <span class=\"token function-variable function\">createPage</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">(</span>app<span class=\"token operator\">:</span> App<span class=\"token punctuation\">,</span> options<span class=\"token operator\">:</span> PageOptions<span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token builtin\">Promise</span><span class=\"token operator\">&lt;</span>Page<span class=\"token operator\">></span>\n</code></pre><div class=\"line-numbers\"><span class=\"line-number\">1</span><br></div></div><ul>\n<li>参数：</li>\n</ul>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>app</td>\n<td><code>App</code></td>\n<td>VuePress App 实例。</td>\n</tr>\n<tr>\n<td>options</td>\n<td><code>PageOptions</code></td>\n<td>创建 VuePress Page 的选项。</td>\n</tr>\n</tbody>\n</table>\n<ul>\n<li>\n<p>详情：</p>\n<p>创建一个 VuePress Page 对象。</p>\n</li>\n<li>\n<p>示例：</p>\n</li>\n</ul>\n<div class=\"language-typescript ext-ts line-numbers-mode\"><pre v-pre class=\"language-typescript\"><code><span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> createPage <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">require</span><span class=\"token punctuation\">(</span><span class=\"token string\">'@vuepress/core'</span><span class=\"token punctuation\">)</span>\n\nmodule<span class=\"token punctuation\">.</span>exports <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token comment\">// 在 onInitialized hook 中创建一个额外页面</span>\n  <span class=\"token keyword\">async</span> <span class=\"token function\">onInitialized</span><span class=\"token punctuation\">(</span>app<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    app<span class=\"token punctuation\">.</span>pages<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span>\n      <span class=\"token keyword\">await</span> <span class=\"token function\">createPage</span><span class=\"token punctuation\">(</span>app<span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n        path<span class=\"token operator\">:</span> <span class=\"token string\">'/foo.html'</span><span class=\"token punctuation\">,</span>\n        frontmatter<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n          layout<span class=\"token operator\">:</span> <span class=\"token string\">'Layout'</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        content<span class=\"token operator\">:</span> <span class=\"token template-string\"><span class=\"token template-punctuation string\">`</span><span class=\"token string\">\\\n# 某个 Page\n\n你好，世界。\n</span><span class=\"token template-punctuation string\">`</span></span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span>\n    <span class=\"token punctuation\">)</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n</code></pre><div class=\"line-numbers\"><span class=\"line-number\">1</span><br><span class=\"line-number\">2</span><br><span class=\"line-number\">3</span><br><span class=\"line-number\">4</span><br><span class=\"line-number\">5</span><br><span class=\"line-number\">6</span><br><span class=\"line-number\">7</span><br><span class=\"line-number\">8</span><br><span class=\"line-number\">9</span><br><span class=\"line-number\">10</span><br><span class=\"line-number\">11</span><br><span class=\"line-number\">12</span><br><span class=\"line-number\">13</span><br><span class=\"line-number\">14</span><br><span class=\"line-number\">15</span><br><span class=\"line-number\">16</span><br><span class=\"line-number\">17</span><br><span class=\"line-number\">18</span><br><span class=\"line-number\">19</span><br><span class=\"line-number\">20</span><br></div></div><ul>\n<li>参考：\n<ul>\n<li><a href=\"#pages\">Node API &gt; App 属性 &gt; pages</a></li>\n<li><RouterLink to=\"/advanced/cookbook/adding-extra-pages.html\">Cookbook &gt; 添加额外页面</RouterLink></li>\n</ul>\n</li>\n</ul>\n<h2 id=\"page-属性\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#page-属性\" aria-hidden=\"true\">#</a> Page 属性</h2>\n<h3 id=\"key\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#key\" aria-hidden=\"true\">#</a> key</h3>\n<ul>\n<li>\n<p>类型： <code>string</code></p>\n</li>\n<li>\n<p>详情：</p>\n<p>该 Page 的标识。</p>\n<p>Page Key 会被用作页面路由的 <a href=\"https://next.router.vuejs.org/api/#name-2\" target=\"_blank\" rel=\"noopener noreferrer\">name<ExternalLinkIcon/></a>。</p>\n</li>\n<li>\n<p>参考：</p>\n<ul>\n<li><RouterLink to=\"/reference/components.html#content\">Built-in Components &gt; Content</RouterLink></li>\n</ul>\n</li>\n</ul>\n<h3 id=\"path\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#path\" aria-hidden=\"true\">#</a> path</h3>\n<ul>\n<li>\n<p>类型： <code>string</code></p>\n</li>\n<li>\n<p>详情：</p>\n<p>该 Page 的路由路径。</p>\n</li>\n<li>\n<p>参考：</p>\n<ul>\n<li><RouterLink to=\"/guide/page.html#%E8%B7%AF%E7%94%B1\">指南 &gt; 页面 &gt; 路由</RouterLink></li>\n<li><a href=\"#pathinferred\">Node API &gt; Page 属性 &gt; pathInferred</a></li>\n</ul>\n</li>\n</ul>\n<h3 id=\"title\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#title\" aria-hidden=\"true\">#</a> title</h3>\n<ul>\n<li>\n<p>类型： <code>string</code></p>\n</li>\n<li>\n<p>详情：</p>\n<p>该 Page 的标题。</p>\n</li>\n<li>\n<p>参考：</p>\n<ul>\n<li><RouterLink to=\"/reference/frontmatter.html#title\">Frontmatter &gt; title</RouterLink></li>\n</ul>\n</li>\n</ul>\n<h3 id=\"lang\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#lang\" aria-hidden=\"true\">#</a> lang</h3>\n<ul>\n<li>\n<p>类型： <code>string</code></p>\n</li>\n<li>\n<p>详情：</p>\n<p>该 Page 的语言。</p>\n</li>\n<li>\n<p>示例：</p>\n<ul>\n<li><code>'en-US'</code></li>\n<li><code>'zh-CN'</code></li>\n</ul>\n</li>\n<li>\n<p>参考：</p>\n<ul>\n<li><RouterLink to=\"/reference/frontmatter.html#title\">Frontmatter &gt; lang</RouterLink></li>\n</ul>\n</li>\n</ul>\n<h3 id=\"frontmatter\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#frontmatter\" aria-hidden=\"true\">#</a> frontmatter</h3>\n<ul>\n<li>\n<p>类型： <code>PageFrontmatter</code></p>\n</li>\n<li>\n<p>详情：</p>\n<p>该 Page 的 Frontmatter 。</p>\n</li>\n<li>\n<p>参考：</p>\n<ul>\n<li><RouterLink to=\"/reference/frontmatter.html\">Frontmatter</RouterLink></li>\n</ul>\n</li>\n</ul>\n<h3 id=\"excerpt\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#excerpt\" aria-hidden=\"true\">#</a> excerpt</h3>\n<ul>\n<li>\n<p>类型： <code>string</code></p>\n</li>\n<li>\n<p>详情：</p>\n<p>该 Page 的摘要。</p>\n<p>如果一个 Markdown 文件中包含一个 `</p>\n</li>\n</ul>\n",
  "headers": [
    {
      "level": 2,
      "title": "App",
      "slug": "app",
      "children": [
        {
          "level": 3,
          "title": "createBuildApp",
          "slug": "createbuildapp",
          "children": []
        },
        {
          "level": 3,
          "title": "createDevApp",
          "slug": "createdevapp",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "App 属性",
      "slug": "app-属性",
      "children": [
        {
          "level": 3,
          "title": "options",
          "slug": "options",
          "children": []
        },
        {
          "level": 3,
          "title": "siteData",
          "slug": "sitedata",
          "children": []
        },
        {
          "level": 3,
          "title": "version",
          "slug": "version",
          "children": []
        },
        {
          "level": 3,
          "title": "env.isBuild",
          "slug": "env-isbuild",
          "children": []
        },
        {
          "level": 3,
          "title": "env.isDev",
          "slug": "env-isdev",
          "children": []
        },
        {
          "level": 3,
          "title": "env.isDebug",
          "slug": "env-isdebug",
          "children": []
        },
        {
          "level": 3,
          "title": "markdown",
          "slug": "markdown",
          "children": []
        },
        {
          "level": 3,
          "title": "layouts",
          "slug": "layouts",
          "children": []
        },
        {
          "level": 3,
          "title": "pages",
          "slug": "pages",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "App 方法",
      "slug": "app-方法",
      "children": [
        {
          "level": 3,
          "title": "dir",
          "slug": "dir",
          "children": []
        },
        {
          "level": 3,
          "title": "writeTemp",
          "slug": "writetemp",
          "children": []
        },
        {
          "level": 3,
          "title": "init",
          "slug": "init",
          "children": []
        },
        {
          "level": 3,
          "title": "prepare",
          "slug": "prepare",
          "children": []
        },
        {
          "level": 3,
          "title": "build",
          "slug": "build",
          "children": []
        },
        {
          "level": 3,
          "title": "dev",
          "slug": "dev",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Page",
      "slug": "page",
      "children": [
        {
          "level": 3,
          "title": "createPage",
          "slug": "createpage",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Page 属性",
      "slug": "page-属性",
      "children": [
        {
          "level": 3,
          "title": "key",
          "slug": "key",
          "children": []
        },
        {
          "level": 3,
          "title": "path",
          "slug": "path",
          "children": []
        },
        {
          "level": 3,
          "title": "title",
          "slug": "title",
          "children": []
        },
        {
          "level": 3,
          "title": "lang",
          "slug": "lang",
          "children": []
        },
        {
          "level": 3,
          "title": "frontmatter",
          "slug": "frontmatter",
          "children": []
        },
        {
          "level": 3,
          "title": "excerpt",
          "slug": "excerpt",
          "children": []
        },
        {
          "level": 3,
          "title": "headers",
          "slug": "headers",
          "children": []
        },
        {
          "level": 3,
          "title": "data",
          "slug": "data",
          "children": []
        },
        {
          "level": 3,
          "title": "content",
          "slug": "content",
          "children": []
        },
        {
          "level": 3,
          "title": "contentRendered",
          "slug": "contentrendered",
          "children": []
        },
        {
          "level": 3,
          "title": "date",
          "slug": "date",
          "children": []
        },
        {
          "level": 3,
          "title": "deps",
          "slug": "deps",
          "children": []
        },
        {
          "level": 3,
          "title": "hoistedTags",
          "slug": "hoistedtags",
          "children": []
        },
        {
          "level": 3,
          "title": "links",
          "slug": "links",
          "children": []
        },
        {
          "level": 3,
          "title": "pathInferred",
          "slug": "pathinferred",
          "children": []
        },
        {
          "level": 3,
          "title": "pathLocale",
          "slug": "pathlocale",
          "children": []
        },
        {
          "level": 3,
          "title": "permalink",
          "slug": "permalink",
          "children": []
        },
        {
          "level": 3,
          "title": "routeMeta",
          "slug": "routemeta",
          "children": []
        },
        {
          "level": 3,
          "title": "slug",
          "slug": "slug",
          "children": []
        },
        {
          "level": 3,
          "title": "filePath",
          "slug": "filepath",
          "children": []
        },
        {
          "level": 3,
          "title": "filePathRelative",
          "slug": "filepathrelative",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "reference/node-api.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
