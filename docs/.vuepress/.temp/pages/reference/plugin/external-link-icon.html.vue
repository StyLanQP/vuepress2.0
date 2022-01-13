<template><h1 id="external-link-icon" tabindex="-1"><a class="header-anchor" href="#external-link-icon" aria-hidden="true">#</a> external-link-icon</h1>
<NpmBadge package="@vuepress/plugin-external-link-icon" />
<p>该插件会为你 Markdown 内容中的外部链接添加一个图标，即 <ExternalLinkIcon /></p>
<p>该插件已经集成到默认主题中。</p>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i -D @vuepress/plugin-external-link-icon@next
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter" aria-hidden="true">#</a> Frontmatter</h2>
<h3 id="externallinkicon" tabindex="-1"><a class="header-anchor" href="#externallinkicon" aria-hidden="true">#</a> externalLinkIcon</h3>
<ul>
<li>
<p>类型： <code>boolean</code></p>
</li>
<li>
<p>详情：</p>
<p>是否在当前页面的外部链接的后面添加外部链接图标。</p>
</li>
</ul>
<h2 id="样式" tabindex="-1"><a class="header-anchor" href="#样式" aria-hidden="true">#</a> 样式</h2>
<p>你可以通过 CSS 变量来自定义外部链接图标的样式：</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code>File not found</code></pre><div class="line-numbers"></div></div><h2 id="组件" tabindex="-1"><a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件</h2>
<h3 id="externallinkicon-1" tabindex="-1"><a class="header-anchor" href="#externallinkicon-1" aria-hidden="true">#</a> ExternalLinkIcon</h3>
<ul>
<li>
<p>详情：</p>
<p>该插件会全局注册一个 <code>&lt;ExternalLinkIcon /&gt;</code> 组件，你可以不传入任何 Props 来使用它。</p>
</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>该组件主要用于主题开发。在大多数情况下你不需要直接使用该组件。</p>
</div>
</template>
