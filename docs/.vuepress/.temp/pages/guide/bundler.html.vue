<template><h1 id="bundler" tabindex="-1"><a class="header-anchor" href="#bundler" aria-hidden="true">#</a> Bundler</h1>
<p>VuePress has been using <a href="https://webpack.js.org/" target="_blank" rel="noopener noreferrer">Webpack<ExternalLinkIcon/></a> as the bundler to dev and build sites. Since VuePress v2, other bundlers are also supported, and now we are using <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">Vite<ExternalLinkIcon/></a> as the default bundler. Of course, you can still choose to use Webpack.</p>
<h2 id="choose-a-bundler" tabindex="-1"><a class="header-anchor" href="#choose-a-bundler" aria-hidden="true">#</a> Choose a Bundler</h2>
<p>When using the <a href="https://www.npmjs.com/package/vuepress" target="_blank" rel="noopener noreferrer">vuepress<ExternalLinkIcon/></a> package, Vite bundler is installed and used automatically.</p>
<p>If you want to use Webpack bundler instead, you can switch to <a href="https://www.npmjs.com/package/vuepress-webpack" target="_blank" rel="noopener noreferrer">vuepress-webpack<ExternalLinkIcon/></a> package:</p>
<CodeGroup>
  <CodeGroupItem title="YARN" active>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> remove vuepress
<span class="token function">yarn</span> <span class="token function">add</span> -D vuepress-webpack@next
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>  </CodeGroupItem>
  <CodeGroupItem title="NPM">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> uninstall vuepress
<span class="token function">npm</span> <span class="token function">install</span> -D vuepress-webpack@next
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>  </CodeGroupItem>
</CodeGroup>
<h2 id="bundler-config" tabindex="-1"><a class="header-anchor" href="#bundler-config" aria-hidden="true">#</a> Bundler Config</h2>
<p>Generally, you could use a bundler without extra configuration, because we have already configured them properly to work with VuePress.</p>
<p>Similar to <RouterLink to="/reference/config.html#themeconfig">themeConfig</RouterLink>, VuePress also allows users to set bundler config via <RouterLink to="/reference/config.html#bundlerconfig">bundlerConfig</RouterLink>.</p>
<p>You can refer to <RouterLink to="/reference/bundler/vite.html">Bundlers &gt; Vite</RouterLink> and <RouterLink to="/reference/bundler/webpack.html">Bundlers &gt; Webpack</RouterLink> to check out all options of the corresponding bundler.</p>
</template>
