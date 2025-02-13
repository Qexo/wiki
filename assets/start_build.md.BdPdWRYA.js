import{_ as s,c as a,o as i,a5 as e}from"./chunks/framework.BTLartk_.js";const E=JSON.parse('{"title":"","description":"","frontmatter":{"article":"","date":"","title":"","updated":"2024-07-21T23:40:37.381+08:00"},"headers":[],"relativePath":"start/build.md","filePath":"start/build.md","lastUpdated":1739437242000}'),n={name:"start/build.md"},t=e(`<h1 id="部署程序" tabindex="-1">部署程序 <a class="header-anchor" href="#部署程序" aria-label="Permalink to &quot;部署程序&quot;">​</a></h1><p>得益于 Python 强大的跨平台功能, Qexo 支持在各种平台进行部署, 受支持的部署方式为 Vercel 或 Docker 部署。本地源码部署只建议高级用户使用。</p><p>值得注意的一点是, 如果你使用的是 Vercel 部署, 我不建议你自备数据库, 因为你往往无法保证与 Vercel 的连接质量。</p><h2 id="docker-部署" tabindex="-1">Docker 部署 <a class="header-anchor" href="#docker-部署" aria-label="Permalink to &quot;Docker 部署&quot;">​</a></h2><p>建议使用 Docker 随时随地一键部署 Qexo 应用</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --restart=unless-stopped</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    -v</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">pwd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/db:/app/db</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 8000:8000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    -e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> TIMEOUT=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">600</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --name=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;qexo&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    abudulin/qexo:latest</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>其中 <code>$(pwd)/db</code> 为数据存储目录, 你可以改为需要的地址</p><p>如果你需要 Dev 分支, 请拉取 <code>qexo:testing</code></p><p>当然, 你也可以使用 docker-compose</p><div class="language-yml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;3.8&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">services</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  qexo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">abudulin/qexo:latest</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    container_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">qexo</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    restart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">unless-stopped</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    ports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;8000:8000&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    environment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      WORKERS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      THREADS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      TIMEOUT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">600</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    volumes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">./db:/app/db</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="vercel-部署-postgresql-vercel" tabindex="-1">Vercel 部署 (PostgreSQL/Vercel) <a class="header-anchor" href="#vercel-部署-postgresql-vercel" aria-label="Permalink to &quot;Vercel 部署 (PostgreSQL/Vercel)&quot;">​</a></h2><p>你可以通过 Vercel 提供的免费数据库。但请注意这是个 Beta 功能</p><h3 id="一键部署" tabindex="-1">一键部署 <a class="header-anchor" href="#一键部署" aria-label="Permalink to &quot;一键部署&quot;">​</a></h3><p><a href="https://vercel.com/new/clone?repository-url=https://github.com/am-abudu/Qexo" target="_blank" rel="noreferrer"><img src="https://vercel.com/button" alt="部署到 Vercel"></a></p><p>首次部署会报错, 请无视并进行接下来的步骤</p><h3 id="申请-vercel-数据库" tabindex="-1">申请 Vercel 数据库 <a class="header-anchor" href="#申请-vercel-数据库" aria-label="Permalink to &quot;申请 Vercel 数据库&quot;">​</a></h3><p>进入<a href="https://vercel.com/dashboard/stores" target="_blank" rel="noreferrer">Vercel Storage 界面</a> 然后点击右上角的 Create Database 并选择 Postgres 创建免费 PostgreSQL 数据库, 在 Connect 页面获取数据库连接信息。请注意在地区选择的位置选择与你上一步项目对应的地区（通常为 Washington, D.C., USA (East) - iad1）。</p><h3 id="绑定项目" tabindex="-1">绑定项目 <a class="header-anchor" href="#绑定项目" aria-label="Permalink to &quot;绑定项目&quot;">​</a></h3><p>在左侧边栏选择 Projects 点击 Connect Project 连接到你第一步创建的项目</p><h3 id="部署" tabindex="-1">部署 <a class="header-anchor" href="#部署" aria-label="Permalink to &quot;部署&quot;">​</a></h3><p>回到你的项目页面，在 Deployments 点击 Redeploy 开始部署, 若没有 Error 信息即可打开域名进入初始化引导</p><h2 id="vercel-部署-mysql-planetscale" tabindex="-1">Vercel 部署 (MySQL/PlanetScale) <a class="header-anchor" href="#vercel-部署-mysql-planetscale" aria-label="Permalink to &quot;Vercel 部署 (MySQL/PlanetScale)&quot;">​</a></h2><blockquote><p>流行的数据库平台PlanetScale删除免费计划 开发者必须在4月8日前付费</p></blockquote><p>你可以通过使用 PlanetScale 提供的免费数据库</p><h3 id="申请-planetscale-数据库" tabindex="-1">申请 PlanetScale 数据库 <a class="header-anchor" href="#申请-planetscale-数据库" aria-label="Permalink to &quot;申请 PlanetScale 数据库&quot;">​</a></h3><p><a href="https://www.planetscale.com/" target="_blank" rel="noreferrer">注册 PlanetScale 账号</a> 创建免费 MySQL 数据库(不支持大陆IP), 区域<strong>一定要选择 AWS / N. Virginia (us-east-1)</strong>, 并记录数据库连接信息</p><h3 id="一键部署-1" tabindex="-1">一键部署 <a class="header-anchor" href="#一键部署-1" aria-label="Permalink to &quot;一键部署&quot;">​</a></h3><p><a href="https://vercel.com/new/clone?repository-url=https://github.com/am-abudu/Qexo" target="_blank" rel="noreferrer"><img src="https://vercel.com/button" alt="部署到 Vercel"></a></p><p>首次部署会报错, 请无视并重新进入项目, 在项目设置界面添加环境变量 Environment Variables</p><table tabindex="0"><thead><tr><th>名称</th><th>意义</th><th>示例</th></tr></thead><tbody><tr><td>MYSQL_HOST</td><td>MySQL 数据库连接地址</td><td>us-east.connect.psdb.cloud</td></tr><tr><td>MYSQL_PORT</td><td>MySQL 数据库通信端口 默认应填写 3306</td><td>3306</td></tr><tr><td>MYSQL_USER</td><td>MySQL 数据库用户名</td><td>abudu</td></tr><tr><td>MYSQL_NAME</td><td>MySQL 数据库名</td><td>mydatabase</td></tr><tr><td>MYSQL_PASSWORD</td><td>MySQL 数据库密码</td><td>password</td></tr><tr><td>PLANETSCALE</td><td>(可选)用PlanetScale则设置为1</td><td>1</td></tr></tbody></table><p>其中 <code>PLANETSCALE</code> 用于禁用外键约束, 以防止PlanetScale数据库部署失败, 若你自备数据库且没有特殊需求请<strong>不要填写</strong></p><p>在 Deployments 点击 Redeploy 开始部署, 若没有 Error 信息即可打开域名进入初始化引导</p><h2 id="vercel-部署-postgresql-supabase" tabindex="-1">Vercel 部署 (PostgreSQL/SupaBase) <a class="header-anchor" href="#vercel-部署-postgresql-supabase" aria-label="Permalink to &quot;Vercel 部署 (PostgreSQL/SupaBase)&quot;">​</a></h2><p>你可以通过 SupaBase 提供的免费数据库</p><h3 id="申请-supabase-数据库" tabindex="-1">申请 SupaBase 数据库 <a class="header-anchor" href="#申请-supabase-数据库" aria-label="Permalink to &quot;申请 SupaBase 数据库&quot;">​</a></h3><p><a href="https://supabase.com" target="_blank" rel="noreferrer">注册 SupaBase 账号</a> 创建免费 SupaBase 数据库, 区域<strong>一定要选择 N. Virginia (us-east-1)</strong> 在项目设置页面获取数据库连接信息, 密码即为你所设置的值</p><h3 id="一键部署-2" tabindex="-1">一键部署 <a class="header-anchor" href="#一键部署-2" aria-label="Permalink to &quot;一键部署&quot;">​</a></h3><p><a href="https://vercel.com/new/clone?repository-url=https://github.com/am-abudu/Qexo" target="_blank" rel="noreferrer"><img src="https://vercel.com/button" alt="部署到 Vercel"></a></p><p>首次部署会报错, 请无视并重新进入项目, 在项目设置界面添加环境变量 Environment Variables</p><table tabindex="0"><thead><tr><th>名称</th><th>意义</th><th>示例</th></tr></thead><tbody><tr><td>PG_HOST</td><td>PostgreSQL 数据库连接地址</td><td>db.xxx.supabase.co</td></tr><tr><td>PG_PORT</td><td>PostgreSQL 数据库通信端口 默认应填写 5432</td><td>5432</td></tr><tr><td>PG_USER</td><td>PostgreSQL 数据库用户名</td><td>postgres</td></tr><tr><td>PG_DB</td><td>PostgreSQL 数据库名</td><td>postgres</td></tr><tr><td>PG_PASS</td><td>PostgreSQL 数据库密码</td><td>password</td></tr></tbody></table><p>在 Deployments 点击 Redeploy 开始部署, 若没有 Error 信息即可打开域名进入初始化引导</p><h2 id="vercel-部署-mongodb-不推荐" tabindex="-1">Vercel 部署 (MongoDB/不推荐) <a class="header-anchor" href="#vercel-部署-mongodb-不推荐" aria-label="Permalink to &quot;Vercel 部署 (MongoDB/不推荐)&quot;">​</a></h2><p>鉴于 Djongo 对于 MongoDB 的支持并不够完善, 更建议<strong>使用另外的数据库(MySQL/PostgreSQL)</strong></p><h3 id="申请-mongodb-数据库" tabindex="-1">申请 MongoDB 数据库 <a class="header-anchor" href="#申请-mongodb-数据库" aria-label="Permalink to &quot;申请 MongoDB 数据库&quot;">​</a></h3><p><a href="https://www.mongodb.com/cloud/atlas/register" target="_blank" rel="noreferrer">注册 MongoDB 账号</a> 创建免费 MongoDB 数据库, 区域<strong>一定要选择 AWS / N. Virginia (us-east-1)</strong> 在 Clusters 页面点击 CONNECT, 按步骤设置允许所有 IP 地址的连接）, 创建数据库用户, 并记录数据库连接信息, 密码即为你所设置的值 <img src="https://s2.loli.net/2024/07/19/9axCOdNGJWUIqQ7.png" alt=""></p><h3 id="一键部署-3" tabindex="-1">一键部署 <a class="header-anchor" href="#一键部署-3" aria-label="Permalink to &quot;一键部署&quot;">​</a></h3><p><a href="https://vercel.com/new/clone?repository-url=https://github.com/am-abudu/Qexo" target="_blank" rel="noreferrer"><img src="https://vercel.com/button" alt="部署到 Vercel"></a></p><p>首次部署会报错, 请无视并重新进入项目, 在项目设置界面添加环境变量 Environment Variables</p><table tabindex="0"><thead><tr><th>名称</th><th>意义</th><th>示例</th></tr></thead><tbody><tr><td>MONGODB_HOST</td><td>MongoDB 数据库连接地址</td><td>mongodb+srv://cluster0.xxxx.mongodb.net</td></tr><tr><td>MONGODB_PORT</td><td>MongoDB 数据库通信端口 默认应填写 27017</td><td>27017</td></tr><tr><td>MONGODB_USER</td><td>MongoDB 数据库用户名</td><td>abudu</td></tr><tr><td>MONGODB_DB</td><td>MongoDB 数据库名</td><td>Cluster0</td></tr><tr><td>MONGODB_PASS</td><td>MongoDB 数据库密码</td><td>password</td></tr></tbody></table><p>在 Deployments 点击 Redeploy 开始部署, 若没有 Error 信息即可打开域名进入初始化引导</p><h2 id="本地源码部署-高级" tabindex="-1">本地源码部署 (高级) <a class="header-anchor" href="#本地源码部署-高级" aria-label="Permalink to &quot;本地源码部署 (高级)&quot;">​</a></h2><p>从 2.0 版本开始, Qexo 对本地部署进行了较为完善的支持</p><p>由于本地部署问题的多样性及不确定性, 维护者不能保证给予有效的支持, 一般用户建议使用 Docker 部署。只建议高级用户使用源码部署, 需要自行配置本地 Python3 环境</p><p>如果要使用本地部署, 请使用2.0+版本或Dev分支</p><h3 id="下载-release" tabindex="-1">下载 Release <a class="header-anchor" href="#下载-release" aria-label="Permalink to &quot;下载 Release&quot;">​</a></h3><p>在 <a href="https://github.com/am-abudu/Qexo/releases" target="_blank" rel="noreferrer">Release</a> 下载最新的版本 <em>Source code (zip)</em> 并解压</p><h3 id="准备数据库" tabindex="-1">准备数据库 <a class="header-anchor" href="#准备数据库" aria-label="Permalink to &quot;准备数据库&quot;">​</a></h3><p>参考 <a href="https://docs.djangoproject.com/zh-hans/3.2/ref/databases/" target="_blank" rel="noreferrer">Django 官方文档</a></p><table tabindex="0"><thead><tr><th>官方支持</th><th>第三方支持</th></tr></thead><tbody><tr><td>PostgreSQL</td><td>CockroachDB</td></tr><tr><td>MariaDB</td><td>Firebird</td></tr><tr><td>MySQL</td><td>Google Cloud Spanner</td></tr><tr><td>Oracle</td><td>Microsoft SQL Server</td></tr><tr><td>SQLite</td><td>......</td></tr></tbody></table><p>注1: 你可能需要根据你使用的数据库修改 <code>requirement.txt</code> 以安装依赖</p><p>注2: 在进行一键更新时，名称为<code>db</code>的目录下的文件以及名称为<code>configs.py</code>文件将不会被删除，你应该把重要文件（如数据库）放在该文件夹下</p><h3 id="编辑配置" tabindex="-1">编辑配置 <a class="header-anchor" href="#编辑配置" aria-label="Permalink to &quot;编辑配置&quot;">​</a></h3><p>以使用 Mysql 为例, 确认好安装相关依赖后在<code>manage.py</code>的同级目录下创建并修改 <code>configs.py</code></p><div class="language-python vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pymysql</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pymysql.install_as_MySQLdb()</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DOMAINS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;127.0.0.1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;yoursite.com&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DATABASES</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;default&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &#39;ENGINE&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;django.db.backends.mysql&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &#39;NAME&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;qexo&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &#39;USER&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;root&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &#39;PASSWORD&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;password&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &#39;HOST&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;127.0.0.1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &#39;PORT&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;3306&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &#39;OPTIONS&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;init_command&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;SET sql_mode=&#39;STRICT_TRANS_TABLES&#39;&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>如果需要引入其他的库, 或在<code>init.py</code>中执行代码, 可以直接在顶部写入<code>import pymysql</code></p><h3 id="执行命令运行" tabindex="-1">执行命令运行 <a class="header-anchor" href="#执行命令运行" aria-label="Permalink to &quot;执行命令运行&quot;">​</a></h3><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pip3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> requirements.txt</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">python3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> manage.py</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> makemigrations</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">python3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> manage.py</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> migrate</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">python3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> manage.py</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> runserver</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 0.0.0.0:8000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --noreload</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>生产环境下，建议更换至 uWSGI 或 Gunicorn</p>`,68),l=[t];function r(p,h,d,k,o,c){return i(),a("div",null,l)}const g=s(n,[["render",r]]);export{E as __pageData,g as default};
