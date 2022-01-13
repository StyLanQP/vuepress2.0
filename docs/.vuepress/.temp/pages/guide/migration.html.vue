<template><h1 id="migrating-from-v1" tabindex="-1"><a class="header-anchor" href="#migrating-from-v1" aria-hidden="true">#</a> Migrating from v1</h1>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>Plugins and themes of VuePress v1 are not compatible with VuePress v2. You need to update them to corresponding v2 version.</p>
</div>
<p>Some major changes and enhancements of VuePress v2:</p>
<ul>
<li>VuePress v2 is now using Vue 3, so make sure your components and other client files are compatible with Vue 3.</li>
<li>VuePress v2 is developed with TypeScript, so it provides better TS support now. It's highly recommended to use TypeScript to develop plugins and themes. VuePress config file also supports TypeScript, and you can use <code>.vuepress/config.ts</code> directly.</li>
<li>VuePress v2 add supports both Webpack and Vite as bundler. Now Vite is the default bundler, while you can still choose use Webpack. You can even use Vite in dev mode to get better development experience, and use Webpack in build mode to get better browser compatibility.</li>
</ul>
<p>Core ideas and processes of VuePress v2 are the same with v1, while v2 API has been re-designed and becomes more normalized. So you might encounter breaking changes when migrating an existing v1 project to v2. This guide is here to help you migrating v1 sites / plugins / themes to v2.</p>
<ul>
<li>If you are a common user, you need to read the guide <a href="#for-users">for users</a>.</li>
<li>If you are a plugin author, you need to read the guide <a href="#for-plugin-authors">for plugin authors</a>.</li>
<li>If you are a theme author, you need to read the guide <a href="#for-theme-authors">for theme authors</a>.</li>
</ul>
<h2 id="for-users" tabindex="-1"><a class="header-anchor" href="#for-users" aria-hidden="true">#</a> For Users</h2>
<h3 id="user-config-change" tabindex="-1"><a class="header-anchor" href="#user-config-change" aria-hidden="true">#</a> User Config Change</h3>
<h4 id="shouldprefetch" tabindex="-1"><a class="header-anchor" href="#shouldprefetch" aria-hidden="true">#</a> shouldPrefetch</h4>
<p>Default value is changed from <code>() =&gt; true</code> to <code>false</code>.</p>
<h4 id="extrawatchfiles" tabindex="-1"><a class="header-anchor" href="#extrawatchfiles" aria-hidden="true">#</a> extraWatchFiles</h4>
<p>Removed.</p>
<p>You can watch files manually in <RouterLink to="/reference/plugin-api.html#onwatched">onWatched</RouterLink> hook.</p>
<h4 id="plugins" tabindex="-1"><a class="header-anchor" href="#plugins" aria-hidden="true">#</a> plugins</h4>
<p>Only <a href="https://v1.vuepress.vuejs.org/plugin/using-a-plugin.html#babel-style" target="_blank" rel="noopener noreferrer">Babel Style<ExternalLinkIcon/></a> config is allowed.</p>
<p><a href="https://v1.vuepress.vuejs.org/plugin/using-a-plugin.html#object-style" target="_blank" rel="noopener noreferrer">Object Style<ExternalLinkIcon/></a> config is <strong>NOT</strong> supported in v2.</p>
<h4 id="patterns" tabindex="-1"><a class="header-anchor" href="#patterns" aria-hidden="true">#</a> patterns</h4>
<p>Renamed to <code>pagePatterns</code></p>
<h4 id="markdown-linenumbers" tabindex="-1"><a class="header-anchor" href="#markdown-linenumbers" aria-hidden="true">#</a> markdown.lineNumbers</h4>
<p>Moved to <RouterLink to="/reference/config.html#markdown-code-linenumbers">markdown.code.lineNumbers</RouterLink>.</p>
<p>Default value is changed from <code>false</code> to <code>true</code>.</p>
<h4 id="markdown-slugify" tabindex="-1"><a class="header-anchor" href="#markdown-slugify" aria-hidden="true">#</a> markdown.slugify</h4>
<p>Removed.</p>
<p>If you want to change the slugify function anyway, set the following options separately:</p>
<ul>
<li><code>markdown.anchor.slugify</code></li>
<li><code>markdown.toc.slugify</code></li>
<li><code>markdown.extractHeaders.slugify</code></li>
</ul>
<h4 id="markdown-pagesuffix" tabindex="-1"><a class="header-anchor" href="#markdown-pagesuffix" aria-hidden="true">#</a> markdown.pageSuffix</h4>
<p>Removed.</p>
<h4 id="markdown-externallinks" tabindex="-1"><a class="header-anchor" href="#markdown-externallinks" aria-hidden="true">#</a> markdown.externalLinks</h4>
<p>Moved to <RouterLink to="/reference/config.html#markdown-links">markdown.links.externalAttrs</RouterLink>.</p>
<h4 id="markdown-toc" tabindex="-1"><a class="header-anchor" href="#markdown-toc" aria-hidden="true">#</a> markdown.toc</h4>
<p>Changed.</p>
<p>See <RouterLink to="/reference/config.html#markdown-toc">Config &gt; markdown.toc</RouterLink></p>
<h4 id="markdown-plugins" tabindex="-1"><a class="header-anchor" href="#markdown-plugins" aria-hidden="true">#</a> markdown.plugins</h4>
<p>Removed.</p>
<p>Use markdown-it plugins in <RouterLink to="/reference/plugin-api.html#extendsmarkdown">extendsMarkdown</RouterLink> hook.</p>
<h4 id="markdown-extendmarkdown" tabindex="-1"><a class="header-anchor" href="#markdown-extendmarkdown" aria-hidden="true">#</a> markdown.extendMarkdown</h4>
<p>Removed.</p>
<p>Use <RouterLink to="/reference/plugin-api.html#extendsmarkdown">extendsMarkdown</RouterLink> hook.</p>
<h4 id="markdown-extractheaders" tabindex="-1"><a class="header-anchor" href="#markdown-extractheaders" aria-hidden="true">#</a> markdown.extractHeaders</h4>
<p>Changed.</p>
<p>See <RouterLink to="/reference/config.html#markdown-extractheaders">Config &gt; markdown.extractHeaders</RouterLink></p>
<h4 id="webpack-related-configs" tabindex="-1"><a class="header-anchor" href="#webpack-related-configs" aria-hidden="true">#</a> Webpack Related Configs</h4>
<p>All webpack related configs are moved to options of <code>@vuepress/bundler-webpack</code>, so you should set them in <RouterLink to="/reference/config.html#bundlerconfig">bundlerConfig</RouterLink>:</p>
<ul>
<li><code>postcss</code>: moved to <code>bundlerConfig.postcss</code></li>
<li><code>stylus</code>: moved to <code>bundlerConfig.stylus</code></li>
<li><code>scss</code>: moved to <code>bundlerConfig.scss</code></li>
<li><code>sass</code>: moved to <code>bundlerConfig.sass</code></li>
<li><code>less</code>: moved to <code>bundlerConfig.less</code></li>
<li><code>chainWebpack</code>: moved to <code>bundlerConfig.chainWebpack</code></li>
<li><code>configureWebpack</code>: moved to <code>bundlerConfig.configureWebpack</code></li>
<li><code>evergreen</code>: moved to <code>bundlerConfig.evergreen</code>, and default value is changed from <code>false</code> to <code>true</code>.</li>
</ul>
<p>See <RouterLink to="/reference/bundler/webpack.html">Bundlers &gt; Webpack</RouterLink></p>
<h3 id="frontmatter-change" tabindex="-1"><a class="header-anchor" href="#frontmatter-change" aria-hidden="true">#</a> Frontmatter Change</h3>
<h4 id="meta" tabindex="-1"><a class="header-anchor" href="#meta" aria-hidden="true">#</a> meta</h4>
<p>Removed.</p>
<p>Use <RouterLink to="/reference/frontmatter.html#head">head</RouterLink> instead. For example:</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">head</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token punctuation">-</span> meta
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> foo
      <span class="token key atrule">content</span><span class="token punctuation">:</span> bar
  <span class="token punctuation">-</span> <span class="token punctuation">-</span> link
    <span class="token punctuation">-</span> <span class="token key atrule">rel</span><span class="token punctuation">:</span> canonical
      <span class="token key atrule">href</span><span class="token punctuation">:</span> foobar
  <span class="token punctuation">-</span> <span class="token punctuation">-</span> script
    <span class="token punctuation">-</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">-</span> console.log('hello from frontmatter');
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>Has the same structure with:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// .vuepress/config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token literal-property property">head</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token string">'meta'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'foo'</span><span class="token punctuation">,</span> <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">'bar'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">'link'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">rel</span><span class="token operator">:</span> <span class="token string">'canonical'</span><span class="token punctuation">,</span> <span class="token literal-property property">href</span><span class="token operator">:</span> <span class="token string">'foobar'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">'script'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">console.log('hello from frontmatter');</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="permalink-patterns-change" tabindex="-1"><a class="header-anchor" href="#permalink-patterns-change" aria-hidden="true">#</a> Permalink Patterns Change</h3>
<ul>
<li><code>:i_month</code>: removed</li>
<li><code>:i_day</code>: removed</li>
<li><code>:minutes</code>: removed (undocumented in v1)</li>
<li><code>:seconds</code>: removed (undocumented in v1)</li>
<li><code>:regular</code>: renamed to <code>:raw</code></li>
</ul>
<p>See <RouterLink to="/reference/frontmatter.html#permalinkpattern">Frontmatter &gt; permalinkPattern</RouterLink>.</p>
<h3 id="palette-system-change" tabindex="-1"><a class="header-anchor" href="#palette-system-change" aria-hidden="true">#</a> Palette System Change</h3>
<p>The stylus palette system of VuePress v1 (i.e. <code>styles/palette.styl</code> and <code>styles/index.styl</code>) is no longer provided by VuePress Core.</p>
<p>The palette system is extracted to <RouterLink to="/reference/plugin/palette.html">@vuepress/plugin-palette</RouterLink>.</p>
<p>Theme authors can use their own way to allow users to customize styles, and not be limited with stylus.</p>
<p>If you are using default theme, the palette system is still available but migrated to SASS, while most variables have been migrated to CSS variables. See <RouterLink to="/reference/default-theme/styles.html">Default Theme &gt; Styles</RouterLink>.</p>
<h3 id="conventional-files-change" tabindex="-1"><a class="header-anchor" href="#conventional-files-change" aria-hidden="true">#</a> Conventional Files Change</h3>
<h4 id="vuepress-enhanceapp-js" tabindex="-1"><a class="header-anchor" href="#vuepress-enhanceapp-js" aria-hidden="true">#</a> .vuepress/enhanceApp.js</h4>
<p>Renamed to <code>.vuepress/clientAppEnhance.{js,ts}</code>.</p>
<p>The arguments of the function are changed, too.</p>
<p>See <RouterLink to="/reference/client-api.html#defineclientappenhance">Client API &gt; defineClientAppEnhance</RouterLink>.</p>
<h4 id="vuepress-components" tabindex="-1"><a class="header-anchor" href="#vuepress-components" aria-hidden="true">#</a> .vuepress/components/</h4>
<p>Files in this directory will not be registered as Vue components automatically.</p>
<p>You need to use <RouterLink to="/reference/plugin/register-components.html">@vuepress/plugin-register-components</RouterLink>, or register your components manually in <code>.vuepress/clientAppEnhance.{js,ts}</code>.</p>
<h4 id="vuepress-theme" tabindex="-1"><a class="header-anchor" href="#vuepress-theme" aria-hidden="true">#</a> .vuepress/theme/</h4>
<p>This directory will not be used as local theme implicitly if it is existed.</p>
<p>You need to set the path to the local theme explicitly via <RouterLink to="/reference/config.html#theme">theme</RouterLink> option.</p>
<h3 id="markdown-slot-change" tabindex="-1"><a class="header-anchor" href="#markdown-slot-change" aria-hidden="true">#</a> Markdown slot Change</h3>
<p>Markdown slot is no longer supported.</p>
<h3 id="plugin-api-change" tabindex="-1"><a class="header-anchor" href="#plugin-api-change" aria-hidden="true">#</a> Plugin API Change</h3>
<ul>
<li><code>plugins</code>: removed</li>
<li><code>ready</code>: renamed to <code>onPrepared</code></li>
<li><code>updated</code>: renamed to <code>onWatched</code></li>
<li><code>generated</code>: renamed to <code>onGenerated</code></li>
<li><code>additionalPages</code>: removed, use <code>app.pages.push(createPage())</code> in <code>onInitialized</code> hook</li>
<li><code>clientDynamicModules</code>: removed, use <code>app.writeTemp()</code> in <code>onPrepared</code> hook</li>
<li><code>enhanceAppFiles</code>: renamed to <code>clientAppEnhanceFiles</code></li>
<li><code>globalUIComponents</code>: renamed to <code>clientAppRootComponentFiles</code></li>
<li><code>clientRootMixin</code>: renamed to<code>clientAppSetupFiles</code></li>
<li><code>extendMarkdown</code>: renamed to <code>extendsMarkdown</code></li>
<li><code>chainMarkdown</code>: removed</li>
<li><code>extendPageData</code>: renamed to <code>extendsPage</code></li>
<li><code>extendsCli</code>: removed</li>
<li><code>configureWebpack</code>: removed</li>
<li><code>chainWebpack</code>: removed</li>
<li><code>beforeDevServer</code>: removed</li>
<li><code>afterDevServer</code>: removed</li>
</ul>
<p>See <RouterLink to="/reference/plugin-api.html">Plugin API</RouterLink>.</p>
<h3 id="theme-api-change" tabindex="-1"><a class="header-anchor" href="#theme-api-change" aria-hidden="true">#</a> Theme API Change</h3>
<h4 id="layouts" tabindex="-1"><a class="header-anchor" href="#layouts" aria-hidden="true">#</a> layouts</h4>
<p>Now you need to specify the layouts directory or layout components manually.</p>
<p>See <RouterLink to="/reference/theme-api.html#layouts">Theme API &gt; layouts</RouterLink>.</p>
<h4 id="extend" tabindex="-1"><a class="header-anchor" href="#extend" aria-hidden="true">#</a> extend</h4>
<p>Renamed to <code>extends</code>.</p>
<p>You can still inherit a parent theme with <code>extends: 'parent-theme'</code>, which will extends the plugins, layouts, etc.</p>
<p>The <code>@theme</code> and <code>@parent-theme</code> aliases are not available now.</p>
<p>Now multi-level theme inheritance is supported.</p>
<h3 id="cli-change" tabindex="-1"><a class="header-anchor" href="#cli-change" aria-hidden="true">#</a> CLI Change</h3>
<h4 id="eject-command" tabindex="-1"><a class="header-anchor" href="#eject-command" aria-hidden="true">#</a> eject command</h4>
<p>Removed.</p>
<h4 id="cache-options" tabindex="-1"><a class="header-anchor" href="#cache-options" aria-hidden="true">#</a> cache options</h4>
<ul>
<li><code>-c, --cache [cache]</code>: changed to <code>--cache &lt;cache&gt;</code>, which means that the shorthand <code>-c</code> is not for <code>cache</code> option, and the value of <code>cache</code> option is not optional.</li>
<li><code>--no-cache</code>: renamed to <code>--clean-cache</code> .</li>
</ul>
<h3 id="default-theme-change" tabindex="-1"><a class="header-anchor" href="#default-theme-change" aria-hidden="true">#</a> Default Theme Change</h3>
<h4 id="built-in-components" tabindex="-1"><a class="header-anchor" href="#built-in-components" aria-hidden="true">#</a> Built-in Components</h4>
<ul>
<li><code>&lt;CodeGroup /&gt;</code> and <code>&lt;CodeBlock /&gt;</code> renamed to <code>&lt;CodeGroup /&gt;</code> and <code>&lt;CodeGroupItem /&gt;</code></li>
<li><code>&lt;Badge /&gt;</code>
<ul>
<li><code>$badgeErrorColor</code> palette variable renamed to <code>$badgeDangerColor</code></li>
<li><code>type</code> prop only accepts <code>tip</code>, <code>warning</code> and <code>danger</code> now</li>
</ul>
</li>
</ul>
<h4 id="palette-system" tabindex="-1"><a class="header-anchor" href="#palette-system" aria-hidden="true">#</a> Palette System</h4>
<p>The palette system of default theme has migrated to SASS and CSS variables.</p>
<p>See <RouterLink to="/reference/default-theme/styles.html">Default Theme &gt; Styles</RouterLink>.</p>
<h4 id="theme-config" tabindex="-1"><a class="header-anchor" href="#theme-config" aria-hidden="true">#</a> Theme Config</h4>
<p>Default theme config has changed a lot.</p>
<p>See <RouterLink to="/reference/default-theme/config.html">Default Theme &gt; Config</RouterLink>.</p>
<h3 id="official-plugins-change" tabindex="-1"><a class="header-anchor" href="#official-plugins-change" aria-hidden="true">#</a> Official Plugins Change</h3>
<p>See <RouterLink to="/reference/plugin/">Official Plugins</RouterLink>.</p>
<h3 id="community-themes-and-plugins" tabindex="-1"><a class="header-anchor" href="#community-themes-and-plugins" aria-hidden="true">#</a> Community Themes and Plugins</h3>
<p>Themes and plugins of v1 is not compatible with v2.</p>
<p>Please make sure that those themes and plugins you are using have supported v2, and refer to their own documentation for migration guide.</p>
<h2 id="for-plugin-authors" tabindex="-1"><a class="header-anchor" href="#for-plugin-authors" aria-hidden="true">#</a> For Plugin Authors</h2>
<p>Read the <a href="#plugin-api-change">Plugin API Change</a> first.</p>
<p>Some major breaking changes:</p>
<ul>
<li>You cannot use other plugins in your plugin anymore, which avoids lots of potential issues caused by plugin nesting. If your plugin depends on other plugins, you should list them in the docs.</li>
<li>Most of the v1 hooks have equivalents in v2. The only exception is <code>extendsCli</code>, which has been removed.</li>
<li>Webpack related hooks are removed, because VuePress Core has decoupled with webpack. If you still want to modify webpack config in plugin, try modifying <code>app.options.bundlerConfig</code> directly.</li>
</ul>
<h2 id="for-theme-authors" tabindex="-1"><a class="header-anchor" href="#for-theme-authors" aria-hidden="true">#</a> For Theme Authors</h2>
<p>Read the <a href="#plugin-api-change">Plugin API Change</a> and <a href="#theme-api-change">Theme API Change</a> first.</p>
<p>Although we do not allow using other plugins in a plugin, you can still use plugins in your theme.</p>
<p>Some major breaking changes:</p>
<ul>
<li>There is no <strong>conventional theme directory structure</strong> anymore.
<ul>
<li>The file <code>theme/enhanceApp.js</code> or <code>theme/clientAppEnhance.{js,ts}</code> will not be used as client app enhance file implicitly. You need to specify it explicitly in <code>clientAppEnhanceFiles</code> hook.</li>
<li>Files in <code>theme/global-components/</code> directory will not be registered as Vue components automatically. You need to use <RouterLink to="/reference/plugin/register-components.html">@vuepress/plugin-register-components</RouterLink>, or register components manually in <code>clientAppEnhance.{js,ts}</code>.</li>
<li>Files in <code>theme/layouts/</code> directory will not be registered as layout components automatically. You need to specify it explicitly in <code>layouts</code> option.</li>
<li>Files in <code>theme/templates/</code> directory will not be used as dev / ssr template automatically.</li>
<li>Always provide a theme entry file, and do not use <code>&quot;main&quot;: &quot;layouts/Layout.vue&quot;</code> as the theme entry.</li>
</ul>
</li>
<li>Stylus is no longer the default CSS pre-processor, and the stylus palette system is not embedded. If you still want to use similar palette system as v1, <RouterLink to="/reference/plugin/palette.html">@vuepress/plugin-palette</RouterLink> may help.</li>
<li>Markdown code blocks syntax highlighting by Prism.js is not embedded by default. You can use either <RouterLink to="/reference/plugin/prismjs.html">@vuepress/plugin-prismjs</RouterLink> or <RouterLink to="/reference/plugin/shiki.html">@vuepress/plugin-shiki</RouterLink>, or implement syntax highlighting in your own way.</li>
<li>For scalability concern, <code>$site.pages</code> is not available any more.</li>
</ul>
</template>
