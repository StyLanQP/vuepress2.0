<template><h1 id="theme-data" tabindex="-1"><a class="header-anchor" href="#theme-data" aria-hidden="true">#</a> theme-data</h1>
<NpmBadge package="@vuepress/plugin-theme-data" />
<p>为你的主题提供客户端数据，包含 VuePress 的 <RouterLink to="/guide/i18n.html">多语言支持</RouterLink> 。</p>
<p>该插件主要用于开发主题，并且已经集成到默认主题中。大部分情况下你不需要直接使用它。</p>
<p>对于主题作者，该插件可以提供与 VuePress 及默认主题相同的多语言支持机制。但是如果你的主题不需要提供多语言支持，或者你想用你自己的方式来实现多语言支持，那么你不需要使用该插件。</p>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i -D @vuepress/plugin-theme-data@next
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项" aria-hidden="true">#</a> 配置项</h2>
<h3 id="themedata" tabindex="-1"><a class="header-anchor" href="#themedata" aria-hidden="true">#</a> themeData</h3>
<ul>
<li>
<p>类型： <code>ThemeData</code></p>
</li>
<li>
<p>默认值： <code>{}</code></p>
</li>
<li>
<p>详情：</p>
<p>你希望在 Client 端中使用的主题数据对象。</p>
<p>你可以通过该配置项，在 Node 端提供主题数据，然后在客户端通过 <a href="#useThemeData">useThemeData</a> 和 <a href="#useThemeLocaleData">useThemeLocaleData</a> 来使用主题数据。</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">'@vuepress/plugin-theme-data'</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">themeData</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">'foo'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">locales</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">'/zh/'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">'zh-foo'</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>主题数据对象在传递到客户端之前，会使用 <code>JSON.stringify()</code> 进行处理，因此你需要保证你提供的是一个可以被 JSON 序列化的对象。</p>
</div>
<h2 id="composition-api" tabindex="-1"><a class="header-anchor" href="#composition-api" aria-hidden="true">#</a> Composition API</h2>
<h3 id="usethemedata" tabindex="-1"><a class="header-anchor" href="#usethemedata" aria-hidden="true">#</a> useThemeData</h3>
<ul>
<li>
<p>详情：</p>
<p>返回主题数据的 Ref 对象。</p>
<p>数据是通过 <a href="#themeData">themeData</a> 配置项提供的。</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useThemeData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-theme-data/lib/client'</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> ThemeData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-theme-data'</span>

<span class="token keyword">type</span> <span class="token class-name">MyThemeData</span> <span class="token operator">=</span> ThemeData<span class="token operator">&lt;</span><span class="token punctuation">{</span>
  foo<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span><span class="token operator">></span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> themeData <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useThemeData</span><span class="token generic class-name"><span class="token operator">&lt;</span>MyThemeData<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>themeData<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="usethemelocaledata" tabindex="-1"><a class="header-anchor" href="#usethemelocaledata" aria-hidden="true">#</a> useThemeLocaleData</h3>
<ul>
<li>
<p>详情：</p>
<p>返回当前 locale 下主题数据的 Ref 对象。</p>
<p>当前 locale 中的字段已被合并到顶层字段中。</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useThemeLocaleData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-theme-data/lib/client'</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> ThemeData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-theme-data/lib/client'</span>

<span class="token keyword">type</span> <span class="token class-name">MyThemeData</span> <span class="token operator">=</span> ThemeData<span class="token operator">&lt;</span><span class="token punctuation">{</span>
  foo<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span><span class="token operator">></span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> themeLocaleData <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useThemeLocaleData</span><span class="token generic class-name"><span class="token operator">&lt;</span>MyThemeData<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>themeLocaleData<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></template>
