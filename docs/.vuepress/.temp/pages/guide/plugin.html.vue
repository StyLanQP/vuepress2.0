<template><h1 id="plugin" tabindex="-1"><a class="header-anchor" href="#plugin" aria-hidden="true">#</a> Plugin</h1>
<p>With the help of <RouterLink to="/reference/plugin-api.html">Plugin API</RouterLink>, VuePress plugin can provide different features for you.</p>
<h2 id="community-plugin" tabindex="-1"><a class="header-anchor" href="#community-plugin" aria-hidden="true">#</a> Community Plugin</h2>
<p>Community users have created lots of plugins and published them to <a href="https://www.npmjs.com/search?q=keywords:vuepress-plugin" target="_blank" rel="noopener noreferrer">NPM<ExternalLinkIcon/></a>. VuePress team also maintains some official plugins under the <a href="https://www.npmjs.com/search?q=%40vuepress%20keywords%3Aplugin" target="_blank" rel="noopener noreferrer">@vuepress<ExternalLinkIcon/></a> scope. You should check the plugin's own documentation for detailed guide.</p>
<p>In general, you need to specify the name of the plugin to use in <RouterLink to="/reference/config.html#plugins">plugins</RouterLink> option:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">'foo'</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">'bar'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token comment">/* options */</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>You can use either plugin name or its shorthand:</p>
<table>
<thead>
<tr>
<th>Plugin Name</th>
<th>Shorthand</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>vuepress-plugin-foo</code></td>
<td><code>foo</code></td>
</tr>
<tr>
<td><code>@org/vuepress-plugin-bar</code></td>
<td><code>@org/bar</code></td>
</tr>
<tr>
<td><code>@vuepress/plugin-foobar</code></td>
<td><code>@vuepress/foobar</code></td>
</tr>
</tbody>
</table>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>Most plugins can only be used once. If the same plugin is used multiple times, only the last one will take effect.</p>
<p>However, some plugins can be used multiple times (e.g. <RouterLink to="/reference/plugin/container.html">@vuepress/plugin-container</RouterLink>), and you should check the documentation of the plugin itself for detailed guide.</p>
</div>
<h2 id="local-plugin" tabindex="-1"><a class="header-anchor" href="#local-plugin" aria-hidden="true">#</a> Local Plugin</h2>
<p>If you want to use your own plugin but don't want to publish it, you can create a local plugin.</p>
<p>It is recommended to use the <RouterLink to="/guide/configuration.html#config-file">Config File</RouterLink> directly as a plugin, because <RouterLink to="/reference/config.html#plugin-api">almost all of the Plugin APIs are available</RouterLink>, which would be more convenient in most cases.</p>
<p>But if you have too many things to do in your config file, it's better to extract them into separate plugins, and use them by setting the absolute path to them or requiring them:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'./path/to/your-plugin.js'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./another-plugin'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>You can refer to <RouterLink to="/advanced/plugin.html">Advanced &gt; Writing a Plugin</RouterLink> for how to write your own plugin.</p>
</template>
