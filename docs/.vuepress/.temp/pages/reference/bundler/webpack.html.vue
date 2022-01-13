<template><h1 id="webpack" tabindex="-1"><a class="header-anchor" href="#webpack" aria-hidden="true">#</a> Webpack</h1>
<NpmBadge package="@vuepress/bundler-webpack" />
<p>Webpack 打包工具是由 <a href="https://www.npmjs.com/package/@vuepress/bundler-webpack" target="_blank" rel="noopener noreferrer">@vuepress/bundler-webpack<ExternalLinkIcon/></a> 包提供的。它是 <a href="https://www.npmjs.com/package/vuepress-webpack" target="_blank" rel="noopener noreferrer">vuepress-webpack<ExternalLinkIcon/></a> 包的依赖之一，当然你也可以单独安装它：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i -D @vuepress/bundler-webpack@next
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项" aria-hidden="true">#</a> 配置项</h2>
<p>Webpack 打包工具配置的参考文档，可以通过 <RouterLink to="/reference/config.html#bundlerconfig">bundlerConfig</RouterLink> 来设置这些配置。</p>
<CodeGroup>
  <CodeGroupItem title="JS" active>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 在使用 vuepress-webpack 包的时候，你可以忽略这个字段，因为 Webpack 是默认打包工具</span>
  <span class="token literal-property property">bundler</span><span class="token operator">:</span> <span class="token string">'@vuepress/bundler-webpack'</span><span class="token punctuation">,</span>
  <span class="token comment">// Webpack 打包工具的配置项</span>
  <span class="token literal-property property">bundlerConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 查看下方</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>  </CodeGroupItem>
  <CodeGroupItem title="TS">
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> WebpackBundlerOptions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/bundler-webpack'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/cli'</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> DefaultThemeOptions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/theme-default'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token generic-function"><span class="token function">defineUserConfig</span><span class="token generic class-name"><span class="token operator">&lt;</span>DefaultThemeOptions<span class="token punctuation">,</span> WebpackBundlerOptions<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 在使用 vuepress 包的时候，你可以忽略这个字段，因为 Webpack 是默认打包工具</span>
  bundler<span class="token operator">:</span> <span class="token string">'@vuepress/bundler-webpack'</span><span class="token punctuation">,</span>
  <span class="token comment">// Webpack 打包工具的配置项</span>
  bundlerConfig<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 查看下方</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>  </CodeGroupItem>
</CodeGroup>
<h3 id="configurewebpack" tabindex="-1"><a class="header-anchor" href="#configurewebpack" aria-hidden="true">#</a> configureWebpack</h3>
<ul>
<li>
<p>类型： <code>(config: WebpackConfiguration, isServer: boolean, isBuild: boolean) =&gt; WebpackConfiguration</code></p>
</li>
<li>
<p>详情：</p>
<p>用于修改内部的 Webpack 配置。</p>
<p>该配置项接收一个函数，该函数的第一个参数是 Webpack 配置对象，第二个参数是 <code>isServer</code> 标志位，第三个参数是 <code>isBuild</code> 标志位。</p>
</li>
</ul>
<h3 id="chainwebpack" tabindex="-1"><a class="header-anchor" href="#chainwebpack" aria-hidden="true">#</a> chainWebpack</h3>
<ul>
<li>
<p>类型： <code>(config: WebpackChainConfig, isServer: boolean, isBuild: boolean) =&gt; void</code></p>
</li>
<li>
<p>详情：</p>
<p>通过 <a href="https://github.com/mozilla-neutrino/webpack-chain" target="_blank" rel="noopener noreferrer">webpack-chain<ExternalLinkIcon/></a> 来修改内部的 Webpack 配置。</p>
<p>该配置项接收一个函数，该函数的第一个参数是由 <code>webpack-chain</code> 提供的 <code>Config</code> 实例，第二个参数是 <code>isServer</code> 标志位，第三个参数是 <code>isBuild</code> 标志位。</p>
</li>
</ul>
<h3 id="devserversetupmiddlewares" tabindex="-1"><a class="header-anchor" href="#devserversetupmiddlewares" aria-hidden="true">#</a> devServerSetupMiddlewares</h3>
<ul>
<li>
<p>类型： <code>(middlewares: Middleware[], devServer: Server) =&gt; Middleware[]</code></p>
</li>
<li>
<p>详情：</p>
<p>在 Webpack 的 <code>devServer.setupMiddlewares</code> 中调用的 Hook 。</p>
<p>函数的参数即是 <code>devServer.setupMiddlewares</code> 的参数。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><a href="https://webpack.js.org/configuration/dev-server/#devserversetupmiddlewares" target="_blank" rel="noopener noreferrer">Webpack &gt; Configuration &gt; DevServer &gt; devServer.setupMiddlewares<ExternalLinkIcon/></a></li>
</ul>
</li>
</ul>
<h3 id="vue" tabindex="-1"><a class="header-anchor" href="#vue" aria-hidden="true">#</a> vue</h3>
<ul>
<li>
<p>类型： <code>VueLoaderOptions</code></p>
</li>
<li>
<p>详情：</p>
<p><code>vue-loader</code> 的配置项。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><a href="https://vue-loader.vuejs.org/zh/options.html" target="_blank" rel="noopener noreferrer">vue-loader &gt; 选项参考<ExternalLinkIcon/></a></li>
</ul>
</li>
</ul>
<h3 id="postcss" tabindex="-1"><a class="header-anchor" href="#postcss" aria-hidden="true">#</a> postcss</h3>
<ul>
<li>
<p>类型： <code>PostcssLoaderOptions</code></p>
</li>
<li>
<p>详情：</p>
<p><code>postcss-loader</code> 的配置项。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><a href="https://github.com/webpack-contrib/postcss-loader#options" target="_blank" rel="noopener noreferrer">postcss-loader &gt; Options<ExternalLinkIcon/></a></li>
</ul>
</li>
</ul>
<h3 id="stylus" tabindex="-1"><a class="header-anchor" href="#stylus" aria-hidden="true">#</a> stylus</h3>
<ul>
<li>
<p>类型： <code>StylusLoaderOptions</code></p>
</li>
<li>
<p>详情：</p>
<p><code>stylus-loader</code> 的配置项。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><a href="https://github.com/webpack-contrib/stylus-loader#options" target="_blank" rel="noopener noreferrer">stylus-loader &gt; Options<ExternalLinkIcon/></a></li>
</ul>
</li>
</ul>
<h3 id="scss" tabindex="-1"><a class="header-anchor" href="#scss" aria-hidden="true">#</a> scss</h3>
<ul>
<li>
<p>类型： <code>SassLoaderOptions</code></p>
</li>
<li>
<p>详情：</p>
<p>针对 <code>.scss</code> 文件的 <code>sass-loader</code> 的配置项。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><a href="https://github.com/webpack-contrib/sass-loader#options" target="_blank" rel="noopener noreferrer">sass-loader &gt; Options<ExternalLinkIcon/></a></li>
</ul>
</li>
</ul>
<h3 id="sass" tabindex="-1"><a class="header-anchor" href="#sass" aria-hidden="true">#</a> sass</h3>
<ul>
<li>
<p>类型： <code>SassLoaderOptions</code></p>
</li>
<li>
<p>详情：</p>
<p>针对 <code>.sass</code> 文件的 <code>sass-loader</code> 的配置项。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><a href="https://github.com/webpack-contrib/sass-loader#options" target="_blank" rel="noopener noreferrer">sass-loader &gt; Options<ExternalLinkIcon/></a></li>
</ul>
</li>
</ul>
<h3 id="less" tabindex="-1"><a class="header-anchor" href="#less" aria-hidden="true">#</a> less</h3>
<ul>
<li>
<p>类型： <code>LessLoaderOptions</code></p>
</li>
<li>
<p>详情：</p>
<p><code>less-loader</code> 的配置项。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><a href="https://github.com/webpack-contrib/less-loader#options" target="_blank" rel="noopener noreferrer">less-loader &gt; Options<ExternalLinkIcon/></a></li>
</ul>
</li>
</ul>
<h3 id="evergreen" tabindex="-1"><a class="header-anchor" href="#evergreen" aria-hidden="true">#</a> evergreen</h3>
<ul>
<li>
<p>类型： <code>boolean</code></p>
</li>
<li>
<p>默认值： <code>true</code></p>
</li>
<li>
<p>详情：</p>
<p>如果你的对象只有那些 “常青树” 浏览器，你可以将其设置成 <code>true</code> 。这将会禁用一些转译过程和 Polyfills ，带来更快的构建速度和更小的文件体积。</p>
</li>
</ul>
</template>
