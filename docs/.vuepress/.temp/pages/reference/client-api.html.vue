<template><h1 id="客户端-api" tabindex="-1"><a class="header-anchor" href="#客户端-api" aria-hidden="true">#</a> 客户端 API</h1>
<NpmBadge package="@vuepress/client" />
<p>客户端 API 是由 <a href="https://www.npmjs.com/package/@vuepress/client" target="_blank" rel="noopener noreferrer">@vuepress/client<ExternalLinkIcon/></a> Package 提供的，用于开发客户端文件。</p>
<h2 id="composition-api" tabindex="-1"><a class="header-anchor" href="#composition-api" aria-hidden="true">#</a> Composition API</h2>
<h3 id="usesitedata" tabindex="-1"><a class="header-anchor" href="#usesitedata" aria-hidden="true">#</a> useSiteData</h3>
<ul>
<li>
<p>详情：</p>
<p>返回站点数据的 Ref 对象。</p>
</li>
</ul>
<h3 id="usesitelocaledata" tabindex="-1"><a class="header-anchor" href="#usesitelocaledata" aria-hidden="true">#</a> useSiteLocaleData</h3>
<ul>
<li>
<p>详情：</p>
<p>返回当前 locale 的站点数据的 Ref 对象。</p>
<p>当前 locale 中的配置已经合并到顶层配置中。</p>
</li>
</ul>
<h3 id="useroutelocale" tabindex="-1"><a class="header-anchor" href="#useroutelocale" aria-hidden="true">#</a> useRouteLocale</h3>
<ul>
<li>
<p>详情：</p>
<p>返回当前路由对应的 locale path 的 Ref 对象。</p>
<p>它的值是 <RouterLink to="/reference/config.html#locales">locales</RouterLink> 配置的键之一。</p>
</li>
</ul>
<h3 id="usepagedata" tabindex="-1"><a class="header-anchor" href="#usepagedata" aria-hidden="true">#</a> usePageData</h3>
<ul>
<li>
<p>详情：</p>
<p>返回当前页面数据的 Ref 对象。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><RouterLink to="/reference/node-api.html#data">Node API &gt; Page 属性 &gt; data</RouterLink></li>
<li><RouterLink to="/reference/plugin-api.html#extendspage">插件 API &gt; extendsPage</RouterLink></li>
</ul>
</li>
</ul>
<h3 id="usepagefrontmatter" tabindex="-1"><a class="header-anchor" href="#usepagefrontmatter" aria-hidden="true">#</a> usePageFrontmatter</h3>
<ul>
<li>
<p>详情：</p>
<p>返回当前页面 Frontmatter 的 Ref 对象。</p>
<p>它的值是页面数据的 <code>frontmatter</code> 属性。</p>
</li>
</ul>
<h3 id="usepagehead" tabindex="-1"><a class="header-anchor" href="#usepagehead" aria-hidden="true">#</a> usePageHead</h3>
<ul>
<li>
<p>详情：</p>
<p>返回当前页面 Head 配置的 Ref 对象。</p>
<p>它的值是合并 <RouterLink to="/reference/frontmatter.html#head">head</RouterLink> Frontmatter 和 <RouterLink to="/reference/config.html#head">head</RouterLink> 配置，并进行去重后得到的。</p>
</li>
</ul>
<h3 id="usepageheadtitle" tabindex="-1"><a class="header-anchor" href="#usepageheadtitle" aria-hidden="true">#</a> usePageHeadTitle</h3>
<ul>
<li>
<p>详情：</p>
<p>返回当前页面 Head 中的标题的 Ref 对象。</p>
<p>它的值是连接页面标题和站点标题后得到的。</p>
</li>
</ul>
<h3 id="usepagelang" tabindex="-1"><a class="header-anchor" href="#usepagelang" aria-hidden="true">#</a> usePageLang</h3>
<ul>
<li>
<p>详情：</p>
<p>返回当前页面语言的 Ref 对象。</p>
<p>它的值是页面数据的 <code>lang</code> 属性。</p>
</li>
</ul>
<h2 id="工具函数" tabindex="-1"><a class="header-anchor" href="#工具函数" aria-hidden="true">#</a> 工具函数</h2>
<h3 id="defineclientappenhance" tabindex="-1"><a class="header-anchor" href="#defineclientappenhance" aria-hidden="true">#</a> defineClientAppEnhance</h3>
<ul>
<li>
<p>详情：</p>
<p>帮助你创建 <RouterLink to="/reference/plugin-api.html#clientappenhancefiles">clientAppEnhanceFiles</RouterLink> 的工具函数。</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<p>创建 <code>clientAppEnhance.ts</code> 文件：</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientAppEnhance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/client'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientAppEnhance</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">{</span> app<span class="token punctuation">,</span> router<span class="token punctuation">,</span> siteData <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul>
<li>参考：
<ul>
<li><RouterLink to="/advanced/cookbook/usage-of-client-app-enhance.html">Cookbook &gt; Client App Enhance 的使用方法</RouterLink></li>
</ul>
</li>
</ul>
<h3 id="defineclientappsetup" tabindex="-1"><a class="header-anchor" href="#defineclientappsetup" aria-hidden="true">#</a> defineClientAppSetup</h3>
<ul>
<li>
<p>详情：</p>
<p>帮助你创建 <RouterLink to="/reference/plugin-api.html#clientappsetupfiles">clientAppSetupFiles</RouterLink> 的工具函数。</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<p>创建 <code>clientAppSetup.ts</code> 文件：</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientAppSetup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/client'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientAppSetup</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="withbase" tabindex="-1"><a class="header-anchor" href="#withbase" aria-hidden="true">#</a> withBase</h3>
<ul>
<li>
<p>详情：</p>
<p>在 URL 前添加站点 <RouterLink to="/reference/config.html#base">base</RouterLink> 前缀。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><RouterLink to="/guide/assets.html#base-helper">指南 &gt; 静态资源 &gt; Base Helper</RouterLink></li>
</ul>
</li>
</ul>
<h2 id="常量" tabindex="-1"><a class="header-anchor" href="#常量" aria-hidden="true">#</a> 常量</h2>
<p>在客户端代码中有一些常量可以使用。</p>
<p>如果想要把这些常量的类型定义补充到你的代码环境中，请将 <code>@vuepress/client/types</code> 添加到你的 <code>tsconfig.json</code> 里：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"types"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"@vuepress/client/types"</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="vuepress-version" tabindex="-1"><a class="header-anchor" href="#vuepress-version" aria-hidden="true">#</a> <code>__VUEPRESS_VERSION__</code></h3>
<ul>
<li>
<p>类型： <code>string</code></p>
</li>
<li>
<p>详情：</p>
<p>VuePress Core 的版本号。</p>
</li>
</ul>
<h3 id="vuepress-dev" tabindex="-1"><a class="header-anchor" href="#vuepress-dev" aria-hidden="true">#</a> <code>__VUEPRESS_DEV__</code></h3>
<ul>
<li>
<p>类型： <code>boolean</code></p>
</li>
<li>
<p>详情：</p>
<p>一个环境标记，用于标识当前是否运行在 <code>dev</code> 模式下。</p>
</li>
</ul>
<h3 id="vuepress-ssr" tabindex="-1"><a class="header-anchor" href="#vuepress-ssr" aria-hidden="true">#</a> <code>__VUEPRESS_SSR__</code></h3>
<ul>
<li>
<p>类型： <code>boolean</code></p>
</li>
<li>
<p>详情：</p>
<p>一个环境标记，用于标识当前是否运行在服务端渲染 (SSR) 环境下。</p>
</li>
</ul>
</template>
