<template><!-- `# nprogress` 会被渲染成 `<h1 id="nprogress">` ，导致 id 和 nprogress 进度条冲突 （有点蠢） -->
<!-- 所以我们在 h1 标题后添加一个 '插件' 后缀，然后通过 title frontmatter 来设置页面标题 -->
<h1 id="nprogress-插件" tabindex="-1"><a class="header-anchor" href="#nprogress-插件" aria-hidden="true">#</a> nprogress 插件</h1>
<NpmBadge package="@vuepress/plugin-nprogress" />
<p>将 <a href="https://github.com/rstacruz/nprogress" target="_blank" rel="noopener noreferrer">nprogress<ExternalLinkIcon/></a> 集成到 VuePress 中，在切换到另一个页面时会展示进度条。</p>
<p>该插件已经集成到默认主题中。</p>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i -D @vuepress/plugin-nprogress@next
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="样式" tabindex="-1"><a class="header-anchor" href="#样式" aria-hidden="true">#</a> 样式</h2>
<p>你可以通过 CSS 变量来自定义进度条的样式：</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code>File not found</code></pre><div class="line-numbers"></div></div></template>
