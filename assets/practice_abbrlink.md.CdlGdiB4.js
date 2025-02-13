import{_ as s,c as a,o as i,a5 as n}from"./chunks/framework.BTLartk_.js";const E=JSON.parse('{"title":"使用短链接","description":"","frontmatter":{},"headers":[],"relativePath":"practice/abbrlink.md","filePath":"practice/abbrlink.md","lastUpdated":1739437242000}'),e={name:"practice/abbrlink.md"},l=n(`<h1 id="使用短链接" tabindex="-1">使用短链接 <a class="header-anchor" href="#使用短链接" aria-label="Permalink to &quot;使用短链接&quot;">​</a></h1><p>这个教程将帮助你为博客接入唯一链接, 使你的博客链接更加简洁。</p><h2 id="接入短链接" tabindex="-1">接入短链接 <a class="header-anchor" href="#接入短链接" aria-label="Permalink to &quot;接入短链接&quot;">​</a></h2><p>安装 Hexo 插件</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hexo-abbrlink</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --save</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>在 <code>_config.yml</code> 文件中修改文章固定连接:</p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">permalink</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">posts/:abbrlink/</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     # 可改为你需要的连接, 例如archives/:abbrlink.html</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>然后添加两个设置:</p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># abbrlink 配置</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">abbrlink</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  alg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">crc32</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # 算法--支持 crc16(默认) 和 crc32</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  rep</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">hex</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 进制--支持 dec(默认/十进制) and hex(十六进制)</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  drafts</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # (true)处理草稿/(false)默认不处理草稿</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="使用-qexo-自动填写" tabindex="-1">使用 Qexo 自动填写 <a class="header-anchor" href="#使用-qexo-自动填写" aria-label="Permalink to &quot;使用 Qexo 自动填写&quot;">​</a></h2><p>首先, 修改文章模板 <code>scaffolds/post.md</code> 添加 <code>abbrlink</code> 字段</p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {{ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }}</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {{ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }}</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">updated</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {{ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }}</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">abbrlink</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {{ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">abbrlink</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }}</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">categories</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">tags</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>接下来, 修改 Qexo 设置中的 <code>短链接配置</code> , 其中的算法和进制对应上文</p><p>现在试着创建一个文章, 你会发现文章的头部已经自动填写了 <code>abbrlink</code> 字段</p>`,14),p=[l];function t(h,r,k,d,c,o){return i(),a("div",null,p)}const g=s(e,[["render",t]]);export{E as __pageData,g as default};
