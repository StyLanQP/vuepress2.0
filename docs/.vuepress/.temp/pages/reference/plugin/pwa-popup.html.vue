<template><h1 id="pwa-popup" tabindex="-1"><a class="header-anchor" href="#pwa-popup" aria-hidden="true">#</a> pwa-popup</h1>
<NpmBadge package="@vuepress/plugin-pwa-popup" />
<p>提供一个弹窗组件，允许用户手动刷新 PWA Service Worker 。</p>
<p>该插件必须和 <RouterLink to="/reference/plugin/pwa.html">pwa 插件</RouterLink> 一起使用，并且 <code>skipWaiting</code> 配置项不能设置为 <code>true</code> 。</p>
<p>当新的 Service Worker 就绪时，会在页面右下角出现一个弹窗，询问用户是否需要激活处于 Waiting 状态的 Service Worker 。</p>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i -D @vuepress/plugin-pwa-popup@next
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项" aria-hidden="true">#</a> 配置项</h2>
<h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales" aria-hidden="true">#</a> locales</h3>
<ul>
<li>
<p>类型： <code>Record&lt;string, { message: string, buttonText: string }&gt;</code></p>
</li>
<li>
<p>详情：</p>
<p>弹窗在不同 locales 下的信息。</p>
<p>如果没有指定该配置项，它会降级使用默认信息。</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token string">'@vuepress/plugin-pwa'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token string">'@vuepress/plugin-pwa-popup'</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">locales</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">'/'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'New content is available.'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">buttonText</span><span class="token operator">:</span> <span class="token string">'Refresh'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token string-property property">'/zh/'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'发现新内容可用'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">buttonText</span><span class="token operator">:</span> <span class="token string">'刷新'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><ul>
<li>参考：
<ul>
<li><RouterLink to="/guide/i18n.html">指南 &gt; 多语言支持</RouterLink></li>
</ul>
</li>
</ul>
<h2 id="样式" tabindex="-1"><a class="header-anchor" href="#样式" aria-hidden="true">#</a> 样式</h2>
<p>你可以通过 CSS 变量来自定义弹窗的样式：</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code>File not found</code></pre><div class="line-numbers"></div></div></template>
