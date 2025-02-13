import{_ as a,c as e,o as s,a5 as t}from"./chunks/framework.BTLartk_.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{"article":"","date":"","title":"","updated":"2024-07-22T17:30:53.285+08:00"},"headers":[],"relativePath":"configs/provider.md","filePath":"configs/provider.md","lastUpdated":1739437242000}'),i={name:"configs/provider.md"},n=t('<h1 id="服务商设置" tabindex="-1">服务商设置 <a class="header-anchor" href="#服务商设置" aria-label="Permalink to &quot;服务商设置&quot;">​</a></h1><p>Qexo 在 2.0 版本支持了服务商拓展</p><table tabindex="0"><thead><tr><th></th><th>Github</th><th>Gitlab</th><th>本地</th></tr></thead><tbody><tr><td>获取文件</td><td>√</td><td>无Size数据</td><td>√</td></tr><tr><td>获取目录</td><td>√</td><td>√</td><td>√</td></tr><tr><td>保存文件</td><td>√</td><td>√</td><td>√</td></tr><tr><td>删除文件</td><td>√</td><td>√</td><td>√</td></tr><tr><td>Webhook</td><td>自动</td><td>手动</td><td>×</td></tr><tr><td>自动部署</td><td>Action</td><td>Action</td><td>命令行</td></tr></tbody></table><h1 id="博客程序设置" tabindex="-1">博客程序设置 <a class="header-anchor" href="#博客程序设置" aria-label="Permalink to &quot;博客程序设置&quot;">​</a></h1><p>Qexo 在2.6版本开始支持多博客程序(截止2.6已支持Hexo、Hugo和Valaxy)</p><h2 id="使用-github" tabindex="-1">使用 Github <a class="header-anchor" href="#使用-github" aria-label="Permalink to &quot;使用 Github&quot;">​</a></h2><p>如果部署中遇到问题, 可以访问 <a href="https://hexoplusplus.cronfly.workers.dev/?step=start" target="_blank" rel="noreferrer">HPP校验助手</a> 自检配置 <em>仅支持Github</em>, 若确认无误, 可检查仓库内是否有已经发布的文章</p><h3 id="github-仓库" tabindex="-1">Github 仓库 <a class="header-anchor" href="#github-仓库" aria-label="Permalink to &quot;Github 仓库&quot;">​</a></h3><p>您 博客源码 <strong>自动化部署</strong>所在的仓库</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>username/repo</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>参考文献:</p><p><a href="https://blog.cyfan.top/p/e626cb30.html" target="_blank" rel="noreferrer">https://blog.cyfan.top/p/e626cb30.html</a></p><p><a href="https://www.oplog.cn/archives/24998.html" target="_blank" rel="noreferrer">https://www.oplog.cn/archives/24998.html</a></p><p><a href="https://crazywong.com/posts/74006f42" target="_blank" rel="noreferrer">https://crazywong.com/posts/74006f42</a></p><h3 id="项目分支" tabindex="-1">项目分支 <a class="header-anchor" href="#项目分支" aria-label="Permalink to &quot;项目分支&quot;">​</a></h3><p>您 博客源码 自动化部署所在仓库的分支</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>master</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="github-密钥" tabindex="-1">Github 密钥 <a class="header-anchor" href="#github-密钥" aria-label="Permalink to &quot;Github 密钥&quot;">​</a></h3><p>于 <a href="https://github.com/settings/tokens" target="_blank" rel="noreferrer">Github 设置</a> 生成的 Token (建议使用 Classical) 需要 Repo &amp; Workflow 下的权限 <em>不建议给出所有权限</em></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>wrq_P8sYPlYA9fjMlOPEYSKA84xxxxxxxxxxxxxx</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="仓库路径" tabindex="-1">仓库路径 <a class="header-anchor" href="#仓库路径" aria-label="Permalink to &quot;仓库路径&quot;">​</a></h3><p>您 博客源码 自动化部署所在仓库的路径 若为根目录请留空</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>path/</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="使用-gitlab" tabindex="-1">使用 Gitlab <a class="header-anchor" href="#使用-gitlab" aria-label="Permalink to &quot;使用 Gitlab&quot;">​</a></h2><h3 id="gitlab-仓库" tabindex="-1">Gitlab 仓库 <a class="header-anchor" href="#gitlab-仓库" aria-label="Permalink to &quot;Gitlab 仓库&quot;">​</a></h3><p>您 博客源码 <strong>自动化部署</strong>所在的仓库</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>username/repo</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>参考文献:</p><p><a href="https://blog.cyfan.top/p/e626cb30.html" target="_blank" rel="noreferrer">https://blog.cyfan.top/p/e626cb30.html</a></p><p><a href="https://www.oplog.cn/archives/24998.html" target="_blank" rel="noreferrer">https://www.oplog.cn/archives/24998.html</a></p><p><a href="https://crazywong.com/posts/74006f42" target="_blank" rel="noreferrer">https://crazywong.com/posts/74006f42</a></p><h3 id="项目分支-1" tabindex="-1">项目分支 <a class="header-anchor" href="#项目分支-1" aria-label="Permalink to &quot;项目分支&quot;">​</a></h3><p>您 博客源码 自动化部署所在仓库的分支</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>master</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="gitlab-密钥" tabindex="-1">Gitlab 密钥 <a class="header-anchor" href="#gitlab-密钥" aria-label="Permalink to &quot;Gitlab 密钥&quot;">​</a></h3><p>于 <a href="https://gitlab.com/-/profile/personal_access_tokens" target="_blank" rel="noreferrer">Gitlab 设置</a> 生成的 Token 需要 Repo 下的至少读取和写入权限 <em>不建议给出所有权限</em></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>wrq_P8sYPlYA9fjMlOPEYSKA84xxxxxxxxxxxxxx</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="仓库路径-1" tabindex="-1">仓库路径 <a class="header-anchor" href="#仓库路径-1" aria-label="Permalink to &quot;仓库路径&quot;">​</a></h3><p>您 博客源码 自动化部署所在仓库的路径 若为根目录请留空</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>path/</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="使用本地" tabindex="-1">使用本地 <a class="header-anchor" href="#使用本地" aria-label="Permalink to &quot;使用本地&quot;">​</a></h2><h3 id="博客-路径" tabindex="-1">博客 路径 <a class="header-anchor" href="#博客-路径" aria-label="Permalink to &quot;博客 路径&quot;">​</a></h3><p>您 博客源码 所在本地的 <em>绝对路径</em></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>D:\\Hexo</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/www/myblog</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="自动部署" tabindex="-1">自动部署 <a class="header-anchor" href="#自动部署" aria-label="Permalink to &quot;自动部署&quot;">​</a></h3><p>自动部署命令, 将在每次源码修改后执行, 若留空则默认不执行</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hexo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hexo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> g</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hexo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> d</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hugo</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>如果提示 /bin/sh: 1: xxx : not found</p><p>请尝试在每一条命令前加上 <code>/bin/bash -c</code></p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/bin/bash</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;hexo clean&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/bin/bash</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;hexo g&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>',52),l=[n];function r(p,d,h,o,c,b){return s(),e("div",null,l)}const m=a(i,[["render",r]]);export{g as __pageData,m as default};
