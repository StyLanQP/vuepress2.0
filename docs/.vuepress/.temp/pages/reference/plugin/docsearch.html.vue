<template><h1 id="docsearch" tabindex="-1"><a class="header-anchor" href="#docsearch" aria-hidden="true">#</a> docsearch</h1>
<NpmBadge package="@vuepress/plugin-docsearch" />
<p>将 <a href="https://docsearch.algolia.com/" target="_blank" rel="noopener noreferrer">Algolia DocSearch<ExternalLinkIcon/></a> 集成到 VuePress 中，为你的文档网站提供搜索功能。</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>当你正确配置该插件后，默认主题会把 DocSearch 按钮添加到导航栏。</p>
<p>该插件不一定能在其他主题中直接使用，因此你应参考主题本身的文档来获取更多信息。</p>
</div>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i -D @vuepress/plugin-docsearch@next
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="获取搜索索引" tabindex="-1"><a class="header-anchor" href="#获取搜索索引" aria-hidden="true">#</a> 获取搜索索引</h2>
<p>你需要 <a href="https://docsearch.algolia.com/apply/" target="_blank" rel="noopener noreferrer">提交你的网站 URL<ExternalLinkIcon/></a> 来加入 DocSearch 项目。当你的索引成功创建后， DocSearch 团队会将 <a href="#apikey">apiKey</a> 和 <a href="#indexname">indexName</a> 发送到你的邮箱。接下来，你就可以配置该插件，在 VuePress 中启用 DocSearch 了。</p>
<p>或者，你也可以 <a href="https://docsearch.algolia.com/docs/run-your-own/" target="_blank" rel="noopener noreferrer">运行你自己的爬虫<ExternalLinkIcon/></a> 来创建索引，然后使用你自己的 <a href="#appId">appId</a>, <a href="#apikey">apiKey</a> 和 <a href="#indexname">indexName</a> 来配置该插件。</p>
<details class="custom-container details"><summary>点击查看爬虫配置示例</summary>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"index_name"</span><span class="token operator">:</span> <span class="token string">"your_index_name"</span><span class="token punctuation">,</span>
  <span class="token property">"start_urls"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"https://your.domain.name/"</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"stop_urls"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"selectors"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"lvl0"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"selector"</span><span class="token operator">:</span> <span class="token string">".sidebar-heading.active"</span><span class="token punctuation">,</span>
      <span class="token property">"global"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">"default_value"</span><span class="token operator">:</span> <span class="token string">"Documentation"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"lvl1"</span><span class="token operator">:</span> <span class="token string">".theme-default-content h1"</span><span class="token punctuation">,</span>
    <span class="token property">"lvl2"</span><span class="token operator">:</span> <span class="token string">".theme-default-content h2"</span><span class="token punctuation">,</span>
    <span class="token property">"lvl3"</span><span class="token operator">:</span> <span class="token string">".theme-default-content h3"</span><span class="token punctuation">,</span>
    <span class="token property">"lvl4"</span><span class="token operator">:</span> <span class="token string">".theme-default-content h4"</span><span class="token punctuation">,</span>
    <span class="token property">"lvl5"</span><span class="token operator">:</span> <span class="token string">".theme-default-content h5"</span><span class="token punctuation">,</span>
    <span class="token property">"text"</span><span class="token operator">:</span> <span class="token string">".theme-default-content p, .theme-default-content li"</span><span class="token punctuation">,</span>
    <span class="token property">"lang"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"selector"</span><span class="token operator">:</span> <span class="token string">"/html/@lang"</span><span class="token punctuation">,</span>
      <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"xpath"</span><span class="token punctuation">,</span>
      <span class="token property">"global"</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"custom_settings"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"attributesForFaceting"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"lang"</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>上述 <code>selectors</code> 是用于默认主题的配置，你可以根据你使用的主题来修改它们。</p>
<p>注意 <code>selectors.lang</code> 和 <code>custom_settings.attributesForFaceting</code> 字段，它们是<strong>必须</strong>的，否则该插件将无法正常工作。</p>
</details>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>如果你使用的不是默认主题，或者在使用 Docsearch 的时候遇到了任何问题，你也可以检查上述的爬虫配置示例，然后前往 <a href="https://github.com/algolia/docsearch-configs" target="_blank" rel="noopener noreferrer">docsearch-configs<ExternalLinkIcon/></a> 仓库，向你的网站的对应配置提交 PR 。</p>
</div>
<h2 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项" aria-hidden="true">#</a> 配置项</h2>
<h3 id="apikey" tabindex="-1"><a class="header-anchor" href="#apikey" aria-hidden="true">#</a> apiKey</h3>
<ul>
<li>
<p>类型： <code>string</code></p>
</li>
<li>
<p>是否必需： <code>true</code></p>
</li>
<li>
<p>详情：</p>
<p>从 DocSearch 团队收到的 <code>apiKey</code> ，或者由你自己生成。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><a href="https://docsearch.algolia.com/docs/api#apikey" target="_blank" rel="noopener noreferrer">DocSearch &gt; Options &gt; apiKey<ExternalLinkIcon/></a></li>
</ul>
</li>
</ul>
<h3 id="indexname" tabindex="-1"><a class="header-anchor" href="#indexname" aria-hidden="true">#</a> indexName</h3>
<ul>
<li>
<p>类型： <code>string</code></p>
</li>
<li>
<p>是否必需： <code>true</code></p>
</li>
<li>
<p>详情：</p>
<p>从 DocSearch 团队收到的 <code>indexName</code> ，或者由你自己生成。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><a href="https://docsearch.algolia.com/docs/api#indexname" target="_blank" rel="noopener noreferrer">DocSearch &gt; Options &gt; indexName<ExternalLinkIcon/></a></li>
</ul>
</li>
</ul>
<h3 id="appid" tabindex="-1"><a class="header-anchor" href="#appid" aria-hidden="true">#</a> appId</h3>
<ul>
<li>
<p>类型： <code>string</code></p>
</li>
<li>
<p>详情：</p>
<p>在你 <a href="https://docsearch.algolia.com/docs/legacy/run-your-own/" target="_blank" rel="noopener noreferrer">运行你自己的 DocSearch 爬虫<ExternalLinkIcon/></a> 或已经 <a href="https://docsearch.algolia.com/docs/migrating-from-legacy" target="_blank" rel="noopener noreferrer">迁移到新的 DocSearch 结构<ExternalLinkIcon/></a> 时需要配置此选项。用于设置你的 Application ID。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><a href="https://docsearch.algolia.com/docs/api#appid" target="_blank" rel="noopener noreferrer">DocSearch &gt; Options &gt; appId<ExternalLinkIcon/></a></li>
</ul>
</li>
</ul>
<h3 id="searchparameters" tabindex="-1"><a class="header-anchor" href="#searchparameters" aria-hidden="true">#</a> searchParameters</h3>
<ul>
<li>
<p>类型： <code>Record&lt;string, any&gt;</code></p>
</li>
<li>
<p>详情：</p>
<p>Algolia API 的 API 参数。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><a href="https://docsearch.algolia.com/docs/api/#searchparameters" target="_blank" rel="noopener noreferrer">DocSearch &gt; Options &gt; searchParameters<ExternalLinkIcon/></a></li>
<li><a href="https://www.algolia.com/doc/api-reference/search-api-parameters/" target="_blank" rel="noopener noreferrer">Algolia &gt; Search API Parameters<ExternalLinkIcon/></a></li>
</ul>
</li>
</ul>
<h3 id="placeholder" tabindex="-1"><a class="header-anchor" href="#placeholder" aria-hidden="true">#</a> placeholder</h3>
<ul>
<li>
<p>类型： <code>string</code></p>
</li>
<li>
<p>默认值： <code>'Search docs'</code></p>
</li>
<li>
<p>详情：</p>
<p>搜索输入框的 placeholder 属性。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><a href="https://docsearch.algolia.com/docs/api#placeholder" target="_blank" rel="noopener noreferrer">DocSearch &gt; Options &gt; placeholder<ExternalLinkIcon/></a></li>
</ul>
</li>
</ul>
<h3 id="disableuserpersonalization" tabindex="-1"><a class="header-anchor" href="#disableuserpersonalization" aria-hidden="true">#</a> disableUserPersonalization</h3>
<ul>
<li>
<p>类型： <code>boolean</code></p>
</li>
<li>
<p>默认值： <code>false</code></p>
</li>
<li>
<p>详情：</p>
<p>是否禁用所有的个性化功能：最近的搜索、收藏的搜索结果等。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><a href="https://docsearch.algolia.com/docs/api#disableuserpersonalization" target="_blank" rel="noopener noreferrer">DocSearch &gt; Options &gt; disableUserPersonalization<ExternalLinkIcon/></a></li>
</ul>
</li>
</ul>
<h3 id="initialquery" tabindex="-1"><a class="header-anchor" href="#initialquery" aria-hidden="true">#</a> initialQuery</h3>
<ul>
<li>
<p>类型： <code>string</code></p>
</li>
<li>
<p>详情：</p>
<p>打开弹窗时的初始请求。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><a href="https://docsearch.algolia.com/docs/api#initialquery" target="_blank" rel="noopener noreferrer">DocSearch &gt; Options &gt; initialQuery<ExternalLinkIcon/></a></li>
</ul>
</li>
</ul>
<h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales" aria-hidden="true">#</a> locales</h3>
<ul>
<li>
<p>类型： <code>Record&lt;string, DocsearchPluginOptions&gt;</code></p>
</li>
<li>
<p>详情：</p>
<p>在不同 locales 下对该插件进行不同的配置。</p>
<p>该插件的所有其他选项都可以在 locale 中进行配置。</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">'@vuepress/docsearch'</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">apiKey</span><span class="token operator">:</span> <span class="token string">'&lt;API_KEY>'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">indexName</span><span class="token operator">:</span> <span class="token string">'&lt;INDEX_NAME>'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">locales</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">'/'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">placeholder</span><span class="token operator">:</span> <span class="token string">'Search Documentation'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token string-property property">'/zh/'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">placeholder</span><span class="token operator">:</span> <span class="token string">'搜索文档'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><ul>
<li>参考：
<ul>
<li><RouterLink to="/guide/i18n.html">指南 &gt; 多语言支持</RouterLink></li>
</ul>
</li>
</ul>
<h2 id="样式" tabindex="-1"><a class="header-anchor" href="#样式" aria-hidden="true">#</a> 样式</h2>
<p>你可以通过 <a href="https://autocomplete-experimental.netlify.app/docs/docsearch-css" target="_blank" rel="noopener noreferrer">@docsearch/css<ExternalLinkIcon/></a> 提供的 CSS 变量来自定义样式：</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">:root</span> <span class="token punctuation">{</span>
  <span class="token property">--docsearch-primary-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>84<span class="token punctuation">,</span> 104<span class="token punctuation">,</span> 255<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--docsearch-text-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>28<span class="token punctuation">,</span> 30<span class="token punctuation">,</span> 33<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--docsearch-spacing</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
  <span class="token property">--docsearch-icon-stroke-width</span><span class="token punctuation">:</span> 1.4<span class="token punctuation">;</span>
  <span class="token property">--docsearch-highlight-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--docsearch-primary-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--docsearch-muted-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>150<span class="token punctuation">,</span> 159<span class="token punctuation">,</span> 175<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--docsearch-container-background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>101<span class="token punctuation">,</span> 108<span class="token punctuation">,</span> 133<span class="token punctuation">,</span> 0.8<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--docsearch-logo-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>84<span class="token punctuation">,</span> 104<span class="token punctuation">,</span> 255<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">/* modal */</span>
  <span class="token property">--docsearch-modal-width</span><span class="token punctuation">:</span> 560px<span class="token punctuation">;</span>
  <span class="token property">--docsearch-modal-height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
  <span class="token property">--docsearch-modal-background</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>245<span class="token punctuation">,</span> 246<span class="token punctuation">,</span> 247<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--docsearch-modal-shadow</span><span class="token punctuation">:</span> inset 1px 1px 0 0 <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">,</span>
    0 3px 8px 0 <span class="token function">rgba</span><span class="token punctuation">(</span>85<span class="token punctuation">,</span> 90<span class="token punctuation">,</span> 100<span class="token punctuation">,</span> 1<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">/* searchbox */</span>
  <span class="token property">--docsearch-searchbox-height</span><span class="token punctuation">:</span> 56px<span class="token punctuation">;</span>
  <span class="token property">--docsearch-searchbox-background</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>235<span class="token punctuation">,</span> 237<span class="token punctuation">,</span> 240<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--docsearch-searchbox-focus-background</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">--docsearch-searchbox-shadow</span><span class="token punctuation">:</span> inset 0 0 0 2px <span class="token function">var</span><span class="token punctuation">(</span>--docsearch-primary-color<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">/* hit */</span>
  <span class="token property">--docsearch-hit-height</span><span class="token punctuation">:</span> 56px<span class="token punctuation">;</span>
  <span class="token property">--docsearch-hit-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>68<span class="token punctuation">,</span> 73<span class="token punctuation">,</span> 80<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--docsearch-hit-active-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">--docsearch-hit-background</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">--docsearch-hit-shadow</span><span class="token punctuation">:</span> 0 1px 3px 0 <span class="token function">rgb</span><span class="token punctuation">(</span>212<span class="token punctuation">,</span> 217<span class="token punctuation">,</span> 225<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">/* key */</span>
  <span class="token property">--docsearch-key-gradient</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>
    -225deg<span class="token punctuation">,</span>
    <span class="token function">rgb</span><span class="token punctuation">(</span>213<span class="token punctuation">,</span> 219<span class="token punctuation">,</span> 228<span class="token punctuation">)</span> 0%<span class="token punctuation">,</span>
    <span class="token function">rgb</span><span class="token punctuation">(</span>248<span class="token punctuation">,</span> 248<span class="token punctuation">,</span> 248<span class="token punctuation">)</span> 100%
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--docsearch-key-shadow</span><span class="token punctuation">:</span> inset 0 -2px 0 0 <span class="token function">rgb</span><span class="token punctuation">(</span>205<span class="token punctuation">,</span> 205<span class="token punctuation">,</span> 230<span class="token punctuation">)</span><span class="token punctuation">,</span>
    inset 0 0 1px 1px #fff<span class="token punctuation">,</span> 0 1px 2px 1px <span class="token function">rgba</span><span class="token punctuation">(</span>30<span class="token punctuation">,</span> 35<span class="token punctuation">,</span> 90<span class="token punctuation">,</span> 0.4<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">/* footer */</span>
  <span class="token property">--docsearch-footer-height</span><span class="token punctuation">:</span> 44px<span class="token punctuation">;</span>
  <span class="token property">--docsearch-footer-background</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">--docsearch-footer-shadow</span><span class="token punctuation">:</span> 0 -1px 0 0 <span class="token function">rgb</span><span class="token punctuation">(</span>224<span class="token punctuation">,</span> 227<span class="token punctuation">,</span> 232<span class="token punctuation">)</span><span class="token punctuation">,</span>
    0 -3px 6px 0 <span class="token function">rgba</span><span class="token punctuation">(</span>69<span class="token punctuation">,</span> 98<span class="token punctuation">,</span> 155<span class="token punctuation">,</span> 0.12<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div><h2 id="组件" tabindex="-1"><a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件</h2>
<h3 id="docsearch-1" tabindex="-1"><a class="header-anchor" href="#docsearch-1" aria-hidden="true">#</a> Docsearch</h3>
<ul>
<li>
<p>详情：</p>
<p>该插件会全局注册一个 <code>&lt;Docsearch /&gt;</code> 组件，你可以不传入任何 Props 来使用它。</p>
<p>将该组件放置在你想要显示 docsearch 按钮的地方。例如，默认主题将这个组件放在了导航栏的末尾。</p>
</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>该组件主要用于主题开发。在大多数情况下你不需要直接使用该组件。</p>
</div>
</template>
