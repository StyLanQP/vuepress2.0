<template><h1 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h1>
<h2 id="config-file" tabindex="-1"><a class="header-anchor" href="#config-file" aria-hidden="true">#</a> Config File</h2>
<p>Without any configuration, the VuePress site is pretty minimal. To customize your site, let’s first create a <code>.vuepress</code> directory inside your docs directory. This is where all VuePress-specific files will be placed. Your project structure is probably like this:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>├─ docs
│  ├─ .vuepress
│  │  └─ config.js
│  └─ README.md
├─ .gitignore
└─ package.json
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>The essential file for configuring a VuePress site is <code>.vuepress/config.js</code>, which should export a JavaScript object. If you are using TypeScript, you can use <code>.vuepress/config.ts</code> instead to get better types hint for VuePress Config.</p>
<CodeGroup>
  <CodeGroupItem title="JS" active>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// site config</span>
  <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">'en-US'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Hello, VuePress!'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'This is my first VuePress site'</span><span class="token punctuation">,</span>

  <span class="token comment">// theme and its config</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token string">'@vuepress/theme-default'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">'https://vuejs.org/images/logo.png'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>  </CodeGroupItem>
  <CodeGroupItem title="TS">
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress'</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> DefaultThemeOptions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token generic-function"><span class="token function">defineUserConfig</span><span class="token generic class-name"><span class="token operator">&lt;</span>DefaultThemeOptions<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// site config</span>
  lang<span class="token operator">:</span> <span class="token string">'en-US'</span><span class="token punctuation">,</span>
  title<span class="token operator">:</span> <span class="token string">'Hello VuePress'</span><span class="token punctuation">,</span>
  description<span class="token operator">:</span> <span class="token string">'Just playing around'</span><span class="token punctuation">,</span>

  <span class="token comment">// theme and its config</span>
  theme<span class="token operator">:</span> <span class="token string">'@vuepress/theme-default'</span><span class="token punctuation">,</span>
  themeConfig<span class="token operator">:</span> <span class="token punctuation">{</span>
    logo<span class="token operator">:</span> <span class="token string">'https://vuejs.org/images/logo.png'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>  </CodeGroupItem>
</CodeGroup>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>Check out the <RouterLink to="/reference/config.html">Config Reference</RouterLink> for a full list of VuePress config.</p>
</div>
<h2 id="config-scopes" tabindex="-1"><a class="header-anchor" href="#config-scopes" aria-hidden="true">#</a> Config Scopes</h2>
<p>You may have noticed that there is a <code>themeConfig</code> option in VuePress config.</p>
<p>Options outside <code>themeConfig</code> are <strong>Site Config</strong>, while options inside <code>themeConfig</code> are <strong>Theme Config</strong>.</p>
<h3 id="site-config" tabindex="-1"><a class="header-anchor" href="#site-config" aria-hidden="true">#</a> Site Config</h3>
<p>Site config means that, no matter what theme you are using, these configurations are always valid.</p>
<p>As we know, every site should have its own <code>lang</code>, <code>title</code>, <code>description</code>, etc. Thus, VuePress has built-in support for those options.</p>
<h3 id="theme-config" tabindex="-1"><a class="header-anchor" href="#theme-config" aria-hidden="true">#</a> Theme Config</h3>
<p>Theme config will be processed by VuePress theme, so it depends on the theme you are using.</p>
<p>If you don't specify the <code>theme</code> option of VuePress config, the default theme will be used.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>Check out the <RouterLink to="/reference/default-theme/config.html">Default Theme &gt; Config Reference</RouterLink> for theme config of default theme.</p>
</div>
</template>
