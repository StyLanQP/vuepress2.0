<template><h1 id="toc" tabindex="-1"><a class="header-anchor" href="#toc" aria-hidden="true">#</a> toc</h1>
<NpmBadge package="@vuepress/plugin-toc" />
<p>该插件会提供一个目录 (table-of-contents, TOC) 组件。</p>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i -D @vuepress/plugin-toc@next
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="与-markdown-目录语法的区别" tabindex="-1"><a class="header-anchor" href="#与-markdown-目录语法的区别" aria-hidden="true">#</a> 与 Markdown 目录语法的区别</h2>
<p>与 <RouterLink to="/guide/markdown.html#%E7%9B%AE%E5%BD%95">Markdown 目录语法</RouterLink> 类似，该插件提供的目录组件可以直接在你的 Markdown 内容中使用：</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token comment">&lt;!-- Markdown 目录语法 --></span>
[[toc]]

<span class="token comment">&lt;!-- Vue 目录组件 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Toc</span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>在 Build 模式中，它们都可以被正确地预渲染。然而，它们之间存在一些区别。</p>
<p>Markdown 语法 <code>[[toc]]</code> 仅能在 Markdown 文件中使用。它是由 markdown-it 解析的，生成的目录是静态内容。</p>
<p>组件 <code>&lt;Toc/&gt;</code> 既可以用在 Markdown 文件中，也可以用在 Vue 文件中。它是由 Vue 加载的，生成的目录是一个 Vue 组件。</p>
<p>该插件可以和 <RouterLink to="/reference/plugin/active-header-links.html">@vuepress/plugin-active-header-links</RouterLink> 协同工作，你只需要将 <RouterLink to="/reference/plugin/active-header-links.html#headerlinkselector">headerLinkSelector</RouterLink> 与该插件的 <code>linkClass</code> 匹配即可。当页面滚动至某个标题锚点后，对应的链接就会被加上 <code>linkActiveClass</code> 类名。</p>
<p>因此，该插件对于主题开发者来说更为有用。</p>
<h2 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项" aria-hidden="true">#</a> 配置项</h2>
<h3 id="componentname" tabindex="-1"><a class="header-anchor" href="#componentname" aria-hidden="true">#</a> componentName</h3>
<ul>
<li>
<p>类型： <code>string</code></p>
</li>
<li>
<p>默认值： <code>Toc</code></p>
</li>
<li>
<p>详情：</p>
<p>指定目录组件的名称。</p>
</li>
</ul>
<h3 id="defaultpropsoptions" tabindex="-1"><a class="header-anchor" href="#defaultpropsoptions" aria-hidden="true">#</a> defaultPropsOptions</h3>
<ul>
<li>
<p>类型： <code>Partial&lt;TocPropsOptions&gt;</code></p>
</li>
<li>
<p>默认值： <code>{}</code></p>
</li>
<li>
<p>详情：</p>
<p>覆盖组件 <a href="#options">options</a> Prop 的默认值。</p>
</li>
</ul>
<h2 id="组件-props" tabindex="-1"><a class="header-anchor" href="#组件-props" aria-hidden="true">#</a> 组件 Props</h2>
<p>目录组件可以通过 Props 来进行自定义。</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Toc</span> <span class="token attr-name">:headers</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>headers<span class="token punctuation">"</span></span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>options<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="headers" tabindex="-1"><a class="header-anchor" href="#headers" aria-hidden="true">#</a> headers</h3>
<ul>
<li>类型： <code>PageHeader[]</code></li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">PageHeader</span> <span class="token punctuation">{</span>
  level<span class="token operator">:</span> <span class="token builtin">number</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span>
  slug<span class="token operator">:</span> <span class="token builtin">string</span>
  children<span class="token operator">:</span> PageHeader<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul>
<li>
<p>详情：</p>
<p>指定要渲染的标题数组。</p>
<p>如果该 Prop 没有被设置，默认会使用当前页面的标题。</p>
</li>
</ul>
<h3 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> options</h3>
<ul>
<li>类型： <code>Partial&lt;TocPropsOptions&gt;</code></li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">TocPropsOptions</span> <span class="token punctuation">{</span>
  containerTag<span class="token operator">:</span> <span class="token builtin">string</span>
  containerClass<span class="token operator">:</span> <span class="token builtin">string</span>
  listClass<span class="token operator">:</span> <span class="token builtin">string</span>
  itemClass<span class="token operator">:</span> <span class="token builtin">string</span>
  linkTag<span class="token operator">:</span> <span class="token string">'a'</span> <span class="token operator">|</span> <span class="token string">'RouterLink'</span>
  linkClass<span class="token operator">:</span> <span class="token builtin">string</span>
  linkActiveClass<span class="token operator">:</span> <span class="token builtin">string</span>
  linkChildrenActiveClass<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ul>
<li>
<p>默认值：</p>
<p>下列默认值可以用过 <a href="#defaultpropsoptions">defaultPropsOptions</a> 来覆盖：</p>
</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> defaultOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
  containerTag<span class="token operator">:</span> <span class="token string">'nav'</span><span class="token punctuation">,</span>
  containerClass<span class="token operator">:</span> <span class="token string">'vuepress-toc'</span><span class="token punctuation">,</span>
  listClass<span class="token operator">:</span> <span class="token string">'vuepress-toc-list'</span><span class="token punctuation">,</span>
  itemClass<span class="token operator">:</span> <span class="token string">'vuepress-toc-item'</span><span class="token punctuation">,</span>
  linkTag<span class="token operator">:</span> <span class="token string">'RouterLink'</span><span class="token punctuation">,</span>
  linkClass<span class="token operator">:</span> <span class="token string">'vuepress-toc-link'</span><span class="token punctuation">,</span>
  linkActiveClass<span class="token operator">:</span> <span class="token string">'active'</span><span class="token punctuation">,</span>
  linkChildrenActiveClass<span class="token operator">:</span> <span class="token string">'active'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ul>
<li>
<p>详情：</p>
<p>自定义目录组件。</p>
<p>如果 <code>containerTag</code> 设置为空字符串 <code>''</code> ，那么最外层的 <code>&lt;nav&gt;</code> Container 会被完全移除。</p>
</li>
<li>
<p>示例：</p>
<p>使用默认 options 的目录组件的渲染结果类似以下结构：</p>
</li>
</ul>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- container --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vuepress-toc<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- list --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vuepress-toc-list<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token comment">&lt;!-- item --></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vuepress-toc-item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!-- link --></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RouterLink</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vuepress-toc-link<span class="token punctuation">"</span></span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#foo<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Foo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RouterLink</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
      <span class="token comment">&lt;!-- item with children --></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vuepress-toc-item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!-- link (children active) --></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RouterLink</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vuepress-toc-link active<span class="token punctuation">"</span></span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#bar<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Bar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RouterLink</span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!-- list (children) --></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vuepress-toc-list<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token comment">&lt;!-- item --></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vuepress-toc-item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token comment">&lt;!-- link (active) --></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RouterLink</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vuepress-toc-link active<span class="token punctuation">"</span></span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#bar-child<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Bar Child<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RouterLink</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div></template>
