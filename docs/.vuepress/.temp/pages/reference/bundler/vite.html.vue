<template><h1 id="vite" tabindex="-1"><a class="header-anchor" href="#vite" aria-hidden="true">#</a> Vite</h1>
<NpmBadge package="@vuepress/bundler-vite" />
<p>Vite 打包工具是由 <a href="https://www.npmjs.com/package/@vuepress/bundler-vite" target="_blank" rel="noopener noreferrer">@vuepress/bundler-vite<ExternalLinkIcon/></a> 包提供的。它是 <a href="https://www.npmjs.com/package/vuepress-vite" target="_blank" rel="noopener noreferrer">vuepress-vite<ExternalLinkIcon/></a> 包的依赖之一，当然你也可以单独安装它：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i -D @vuepress/bundler-vite@next
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项" aria-hidden="true">#</a> 配置项</h2>
<p>Vite 打包工具配置的参考文档，可以通过 <RouterLink to="/reference/config.html#bundlerconfig">bundlerConfig</RouterLink> 来设置这些配置。</p>
<CodeGroup>
  <CodeGroupItem title="JS" active>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 在使用 vuepress-vite 包的时候，你可以忽略这个字段，因为 Vite 是默认打包工具</span>
  <span class="token literal-property property">bundler</span><span class="token operator">:</span> <span class="token string">'@vuepress/bundler-vite'</span><span class="token punctuation">,</span>
  <span class="token comment">// Vite 打包工具的配置项</span>
  <span class="token literal-property property">bundlerConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 查看下方</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>  </CodeGroupItem>
  <CodeGroupItem title="TS">
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> ViteBundlerOptions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/bundler-vite'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/cli'</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> DefaultThemeOptions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/theme-default'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token generic-function"><span class="token function">defineUserConfig</span><span class="token generic class-name"><span class="token operator">&lt;</span>DefaultThemeOptions<span class="token punctuation">,</span> ViteBundlerOptions<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 在使用 vuepress-vite 包的时候，你可以忽略这个字段，因为 Vite 是默认打包工具</span>
  bundler<span class="token operator">:</span> <span class="token string">'@vuepress/bundler-vite'</span><span class="token punctuation">,</span>
  <span class="token comment">// Vite 打包工具的配置项</span>
  bundlerConfig<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 查看下方</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>  </CodeGroupItem>
</CodeGroup>
<h3 id="viteoptions" tabindex="-1"><a class="header-anchor" href="#viteoptions" aria-hidden="true">#</a> viteOptions</h3>
<ul>
<li>
<p>详情：</p>
<p>接收 Vite 的所有配置项。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><a href="https://cn.vitejs.dev/config/" target="_blank" rel="noopener noreferrer">Vite &gt; Config<ExternalLinkIcon/></a></li>
</ul>
</li>
</ul>
<h3 id="vuepluginoptions" tabindex="-1"><a class="header-anchor" href="#vuepluginoptions" aria-hidden="true">#</a> vuePluginOptions</h3>
<ul>
<li>
<p>详情：</p>
<p>接收 <a href="https://www.npmjs.com/package/@vitejs/plugin-vue" target="_blank" rel="noopener noreferrer">@vitejs/plugin-vue<ExternalLinkIcon/></a> 的所有配置项。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><a href="https://cn.vitejs.dev/plugins/#vitejsplugin-vue" target="_blank" rel="noopener noreferrer">Vite &gt; 插件 &gt; 官方插件<ExternalLinkIcon/></a></li>
</ul>
</li>
</ul>
</template>
