import{_ as s,c as a,o as e,a as n}from"./app.3505266b.js";const b=JSON.parse('{"title":"\u90E8\u7F72\u7A0B\u5E8F","description":"","frontmatter":{},"headers":[{"level":2,"title":"Vercel \u90E8\u7F72 (MongoDB)","slug":"vercel-\u90E8\u7F72-mongodb","link":"#vercel-\u90E8\u7F72-mongodb","children":[{"level":3,"title":"\u7533\u8BF7 MongoDB \u6570\u636E\u5E93","slug":"\u7533\u8BF7-mongodb-\u6570\u636E\u5E93","link":"#\u7533\u8BF7-mongodb-\u6570\u636E\u5E93","children":[]},{"level":3,"title":"\u4E00\u952E\u90E8\u7F72","slug":"\u4E00\u952E\u90E8\u7F72","link":"#\u4E00\u952E\u90E8\u7F72","children":[]}]},{"level":2,"title":"Vercel \u90E8\u7F72 (MySQL/PlanetScale)","slug":"vercel-\u90E8\u7F72-mysql-planetscale","link":"#vercel-\u90E8\u7F72-mysql-planetscale","children":[{"level":3,"title":"\u7533\u8BF7 PlanetScale \u6570\u636E\u5E93","slug":"\u7533\u8BF7-planetscale-\u6570\u636E\u5E93","link":"#\u7533\u8BF7-planetscale-\u6570\u636E\u5E93","children":[]},{"level":3,"title":"\u4E00\u952E\u90E8\u7F72","slug":"\u4E00\u952E\u90E8\u7F72-1","link":"#\u4E00\u952E\u90E8\u7F72-1","children":[]}]},{"level":2,"title":"Vercel \u90E8\u7F72 (PostgreSQL/SupaBase)","slug":"vercel-\u90E8\u7F72-postgresql-supabase","link":"#vercel-\u90E8\u7F72-postgresql-supabase","children":[{"level":3,"title":"\u7533\u8BF7 SupaBase \u6570\u636E\u5E93","slug":"\u7533\u8BF7-supabase-\u6570\u636E\u5E93","link":"#\u7533\u8BF7-supabase-\u6570\u636E\u5E93","children":[]},{"level":3,"title":"\u4E00\u952E\u90E8\u7F72","slug":"\u4E00\u952E\u90E8\u7F72-2","link":"#\u4E00\u952E\u90E8\u7F72-2","children":[]}]},{"level":2,"title":"\u672C\u5730\u90E8\u7F72","slug":"\u672C\u5730\u90E8\u7F72","link":"#\u672C\u5730\u90E8\u7F72","children":[{"level":3,"title":"\u4E0B\u8F7D Release","slug":"\u4E0B\u8F7D-release","link":"#\u4E0B\u8F7D-release","children":[]},{"level":3,"title":"\u51C6\u5907\u6570\u636E\u5E93","slug":"\u51C6\u5907\u6570\u636E\u5E93","link":"#\u51C6\u5907\u6570\u636E\u5E93","children":[]},{"level":3,"title":"\u7F16\u8F91\u914D\u7F6E","slug":"\u7F16\u8F91\u914D\u7F6E","link":"#\u7F16\u8F91\u914D\u7F6E","children":[]},{"level":3,"title":"\u6267\u884C\u547D\u4EE4\u8FD0\u884C","slug":"\u6267\u884C\u547D\u4EE4\u8FD0\u884C","link":"#\u6267\u884C\u547D\u4EE4\u8FD0\u884C","children":[]}]}],"relativePath":"start/build.md","lastUpdated":1673423251000}'),t={name:"start/build.md"},l=n(`<h1 id="\u90E8\u7F72\u7A0B\u5E8F" tabindex="-1">\u90E8\u7F72\u7A0B\u5E8F <a class="header-anchor" href="#\u90E8\u7F72\u7A0B\u5E8F" aria-hidden="true">#</a></h1><p>\u5F97\u76CA\u4E8E Python \u5F3A\u5927\u7684\u8DE8\u5E73\u53F0\u529F\u80FD, Qexo \u652F\u6301\u5728\u5404\u5F0F\u5404\u6837\u7684\u5E73\u53F0\u8FDB\u884C\u90E8\u7F72, \u53D7\u652F\u6301\u7684\u90E8\u7F72\u65B9\u5F0F\u4E3A Vercel \u6216\u672C\u5730\u90E8\u7F72</p><h2 id="vercel-\u90E8\u7F72-mongodb" tabindex="-1">Vercel \u90E8\u7F72 (MongoDB) <a class="header-anchor" href="#vercel-\u90E8\u7F72-mongodb" aria-hidden="true">#</a></h2><h3 id="\u7533\u8BF7-mongodb-\u6570\u636E\u5E93" tabindex="-1">\u7533\u8BF7 MongoDB \u6570\u636E\u5E93 <a class="header-anchor" href="#\u7533\u8BF7-mongodb-\u6570\u636E\u5E93" aria-hidden="true">#</a></h3><p><a href="https://www.mongodb.com/cloud/atlas/register" target="_blank" rel="noreferrer">\u6CE8\u518C MongoDB \u8D26\u53F7</a> \u521B\u5EFA\u514D\u8D39 MongoDB \u6570\u636E\u5E93\uFF0C\u533A\u57DF<strong>\u4E00\u5B9A\u8981\u9009\u62E9 AWS / N. Virginia (us-east-1)</strong> \u5728 Clusters \u9875\u9762\u70B9\u51FB CONNECT\uFF0C\u6309\u6B65\u9AA4\u8BBE\u7F6E\u5141\u8BB8\u6240\u6709 IP \u5730\u5740\u7684\u8FDE\u63A5\uFF09\uFF0C\u521B\u5EFA\u6570\u636E\u5E93\u7528\u6237\uFF0C\u5E76\u8BB0\u5F55\u6570\u636E\u5E93\u8FDE\u63A5\u4FE1\u606F\uFF0C\u5BC6\u7801\u5373\u4E3A\u4F60\u6240\u8BBE\u7F6E\u7684\u503C <img src="https://pic.hipyt.cn/pic/2023/01/03/e1b3ca7b101fa.png" alt=""></p><h3 id="\u4E00\u952E\u90E8\u7F72" tabindex="-1">\u4E00\u952E\u90E8\u7F72 <a class="header-anchor" href="#\u4E00\u952E\u90E8\u7F72" aria-hidden="true">#</a></h3><p><a href="https://vercel.com/new/clone?repository-url=https://github.com/am-abudu/Qexo" target="_blank" rel="noreferrer"><img src="https://vercel.com/button" alt="\u90E8\u7F72\u5230 Vercel"></a></p><p>\u9996\u6B21\u90E8\u7F72\u4F1A\u62A5\u9519, \u8BF7\u65E0\u89C6\u5E76\u91CD\u65B0\u8FDB\u5165\u9879\u76EE, \u5728\u9879\u76EE\u8BBE\u7F6E\u754C\u9762\u6DFB\u52A0\u73AF\u5883\u53D8\u91CF Environment Variables</p><table><thead><tr><th>\u540D\u79F0</th><th>\u610F\u4E49</th><th>\u793A\u4F8B</th></tr></thead><tbody><tr><td>MONGODB_HOST</td><td>MongoDB \u6570\u636E\u5E93\u8FDE\u63A5\u5730\u5740</td><td>mongodb+srv://cluster0.xxxx.mongodb.net</td></tr><tr><td>MONGODB_PORT</td><td>MongoDB \u6570\u636E\u5E93\u901A\u4FE1\u7AEF\u53E3 \u9ED8\u8BA4\u5E94\u586B\u5199 27017</td><td>27017</td></tr><tr><td>MONGODB_USER</td><td>MongoDB \u6570\u636E\u5E93\u7528\u6237\u540D</td><td>abudu</td></tr><tr><td>MONGODB_DB</td><td>MongoDB \u6570\u636E\u5E93\u540D</td><td>Cluster0</td></tr><tr><td>MONGODB_PASS</td><td>MongoDB \u6570\u636E\u5E93\u5BC6\u7801</td><td>password</td></tr></tbody></table><p>\u5728 Deployments \u70B9\u51FB Redeploy \u5F00\u59CB\u90E8\u7F72\uFF0C\u82E5\u6CA1\u6709 Error \u4FE1\u606F\u5373\u53EF\u6253\u5F00\u57DF\u540D\u8FDB\u5165\u521D\u59CB\u5316\u5F15\u5BFC</p><h2 id="vercel-\u90E8\u7F72-mysql-planetscale" tabindex="-1">Vercel \u90E8\u7F72 (MySQL/PlanetScale) <a class="header-anchor" href="#vercel-\u90E8\u7F72-mysql-planetscale" aria-hidden="true">#</a></h2><p>\u4F60\u53EF\u4EE5\u901A\u8FC7\u81EA\u5DF1\u7684 MySQL \u6570\u636E\u5E93\u90E8\u7F72\u6216\u4F7F\u7528 PlanetScale \u63D0\u4F9B\u7684\u514D\u8D39\u6570\u636E\u5E93</p><h3 id="\u7533\u8BF7-planetscale-\u6570\u636E\u5E93" tabindex="-1">\u7533\u8BF7 PlanetScale \u6570\u636E\u5E93 <a class="header-anchor" href="#\u7533\u8BF7-planetscale-\u6570\u636E\u5E93" aria-hidden="true">#</a></h3><p><a href="https://www.planetscale.com/" target="_blank" rel="noreferrer">\u6CE8\u518C PlanetScale \u8D26\u53F7</a> \u521B\u5EFA\u514D\u8D39 MySQL \u6570\u636E\u5E93(\u4E0D\u652F\u6301\u5927\u9646IP)\uFF0C\u533A\u57DF<strong>\u4E00\u5B9A\u8981\u9009\u62E9 AWS / N. Virginia (us-east-1)</strong>\uFF0C\u5E76\u8BB0\u5F55\u6570\u636E\u5E93\u8FDE\u63A5\u4FE1\u606F <em>(\u82E5\u81EA\u5907MySQL\u6570\u636E\u5E93\u8BF7\u8DF3\u8FC7\u8BE5\u6B65\u9AA4)</em></p><h3 id="\u4E00\u952E\u90E8\u7F72-1" tabindex="-1">\u4E00\u952E\u90E8\u7F72 <a class="header-anchor" href="#\u4E00\u952E\u90E8\u7F72-1" aria-hidden="true">#</a></h3><p><a href="https://vercel.com/new/clone?repository-url=https://github.com/am-abudu/Qexo" target="_blank" rel="noreferrer"><img src="https://vercel.com/button" alt="\u90E8\u7F72\u5230 Vercel"></a></p><p>\u9996\u6B21\u90E8\u7F72\u4F1A\u62A5\u9519, \u8BF7\u65E0\u89C6\u5E76\u91CD\u65B0\u8FDB\u5165\u9879\u76EE, \u5728\u9879\u76EE\u8BBE\u7F6E\u754C\u9762\u6DFB\u52A0\u73AF\u5883\u53D8\u91CF Environment Variables</p><table><thead><tr><th>\u540D\u79F0</th><th>\u610F\u4E49</th><th>\u793A\u4F8B</th></tr></thead><tbody><tr><td>MYSQL_HOST</td><td>MySQL \u6570\u636E\u5E93\u8FDE\u63A5\u5730\u5740</td><td>us-east.connect.psdb.cloud</td></tr><tr><td>MYSQL_PORT</td><td>MySQL \u6570\u636E\u5E93\u901A\u4FE1\u7AEF\u53E3 \u9ED8\u8BA4\u5E94\u586B\u5199 3306</td><td>3306</td></tr><tr><td>MYSQL_USER</td><td>MySQL \u6570\u636E\u5E93\u7528\u6237\u540D</td><td>abudu</td></tr><tr><td>MYSQL_NAME</td><td>MySQL \u6570\u636E\u5E93\u540D</td><td>mydatabase</td></tr><tr><td>MYSQL_PASSWORD</td><td>MySQL \u6570\u636E\u5E93\u5BC6\u7801</td><td>password</td></tr><tr><td>PLANETSCALE</td><td>(\u53EF\u9009)\u7528PlanetScale\u5219\u8BBE\u7F6E\u4E3A1</td><td>1</td></tr></tbody></table><p>\u5176\u4E2D <code>PLANETSCALE</code> \u7528\u4E8E\u7981\u7528\u5916\u952E\u7EA6\u675F\uFF0C\u4EE5\u9632\u6B62PlanetScale\u6570\u636E\u5E93\u90E8\u7F72\u5931\u8D25\uFF0C\u82E5\u4F60\u81EA\u5907\u6570\u636E\u5E93\u4E14\u6CA1\u6709\u7279\u6B8A\u9700\u6C42\u8BF7<strong>\u4E0D\u8981\u586B\u5199</strong></p><p>\u5728 Deployments \u70B9\u51FB Redeploy \u5F00\u59CB\u90E8\u7F72\uFF0C\u82E5\u6CA1\u6709 Error \u4FE1\u606F\u5373\u53EF\u6253\u5F00\u57DF\u540D\u8FDB\u5165\u521D\u59CB\u5316\u5F15\u5BFC</p><h2 id="vercel-\u90E8\u7F72-postgresql-supabase" tabindex="-1">Vercel \u90E8\u7F72 (PostgreSQL/SupaBase) <a class="header-anchor" href="#vercel-\u90E8\u7F72-postgresql-supabase" aria-hidden="true">#</a></h2><p>\u4F60\u53EF\u4EE5\u901A\u8FC7\u81EA\u5DF1\u7684 PostgreSQL \u6570\u636E\u5E93\u90E8\u7F72\u6216\u4F7F\u7528 SupaBase \u63D0\u4F9B\u7684\u514D\u8D39\u6570\u636E\u5E93</p><h3 id="\u7533\u8BF7-supabase-\u6570\u636E\u5E93" tabindex="-1">\u7533\u8BF7 SupaBase \u6570\u636E\u5E93 <a class="header-anchor" href="#\u7533\u8BF7-supabase-\u6570\u636E\u5E93" aria-hidden="true">#</a></h3><p><a href="https://supabase.com" target="_blank" rel="noreferrer">\u6CE8\u518C SupaBase \u8D26\u53F7</a> \u521B\u5EFA\u514D\u8D39 SupaBase \u6570\u636E\u5E93\uFF0C\u533A\u57DF<strong>\u4E00\u5B9A\u8981\u9009\u62E9 N. Virginia (us-east-1)</strong> \u5728\u9879\u76EE\u8BBE\u7F6E\u9875\u9762\u83B7\u53D6\u6570\u636E\u5E93\u8FDE\u63A5\u4FE1\u606F\uFF0C\u5BC6\u7801\u5373\u4E3A\u4F60\u6240\u8BBE\u7F6E\u7684\u503C <em>(\u82E5\u81EA\u5907PostgreSQL\u6570\u636E\u5E93\u8BF7\u8DF3\u8FC7\u8BE5\u6B65\u9AA4)</em></p><h3 id="\u4E00\u952E\u90E8\u7F72-2" tabindex="-1">\u4E00\u952E\u90E8\u7F72 <a class="header-anchor" href="#\u4E00\u952E\u90E8\u7F72-2" aria-hidden="true">#</a></h3><p><a href="https://vercel.com/new/clone?repository-url=https://github.com/am-abudu/Qexo" target="_blank" rel="noreferrer"><img src="https://vercel.com/button" alt="\u90E8\u7F72\u5230 Vercel"></a></p><p>\u9996\u6B21\u90E8\u7F72\u4F1A\u62A5\u9519, \u8BF7\u65E0\u89C6\u5E76\u91CD\u65B0\u8FDB\u5165\u9879\u76EE, \u5728\u9879\u76EE\u8BBE\u7F6E\u754C\u9762\u6DFB\u52A0\u73AF\u5883\u53D8\u91CF Environment Variables</p><table><thead><tr><th>\u540D\u79F0</th><th>\u610F\u4E49</th><th>\u793A\u4F8B</th></tr></thead><tbody><tr><td>PG_HOST</td><td>PostgreSQL \u6570\u636E\u5E93\u8FDE\u63A5\u5730\u5740</td><td><a href="http://db.xxx.supabase.co" target="_blank" rel="noreferrer">db.xxx.supabase.co</a></td></tr><tr><td>PG_PORT</td><td>PostgreSQL \u6570\u636E\u5E93\u901A\u4FE1\u7AEF\u53E3 \u9ED8\u8BA4\u5E94\u586B\u5199 5432</td><td>5432</td></tr><tr><td>PG_USER</td><td>PostgreSQL \u6570\u636E\u5E93\u7528\u6237\u540D</td><td>postgres</td></tr><tr><td>PG_DB</td><td>PostgreSQL \u6570\u636E\u5E93\u540D</td><td>postgres</td></tr><tr><td>PG_PASS</td><td>PostgreSQL \u6570\u636E\u5E93\u5BC6\u7801</td><td>password</td></tr></tbody></table><p>\u5728 Deployments \u70B9\u51FB Redeploy \u5F00\u59CB\u90E8\u7F72\uFF0C\u82E5\u6CA1\u6709 Error \u4FE1\u606F\u5373\u53EF\u6253\u5F00\u57DF\u540D\u8FDB\u5165\u521D\u59CB\u5316\u5F15\u5BFC</p><h2 id="\u672C\u5730\u90E8\u7F72" tabindex="-1">\u672C\u5730\u90E8\u7F72 <a class="header-anchor" href="#\u672C\u5730\u90E8\u7F72" aria-hidden="true">#</a></h2><p>\u4ECE 2.0 \u7248\u672C\u5F00\u59CB, Qexo \u5BF9\u672C\u5730\u90E8\u7F72\u8FDB\u884C\u4E86\u8F83\u4E3A\u5B8C\u5584\u7684\u652F\u6301</p><p>\u7531\u4E8E\u672C\u5730\u90E8\u7F72\u95EE\u9898\u7684\u591A\u6837\u6027\u53CA\u4E0D\u786E\u5B9A\u6027\uFF0C\u7EF4\u62A4\u8005\u4E0D\u80FD\u4FDD\u8BC1\u7ED9\u4E88\u6709\u6548\u7684\u652F\u6301\uFF0C\u53EA\u5EFA\u8BAE\u9AD8\u7EA7\u7528\u6237\u64CD\u4F5C\uFF0C\u4E14\u9700\u8981\u81EA\u884C\u914D\u7F6E\u672C\u5730 Python3 \u73AF\u5883</p><p>\u5982\u679C\u8981\u4F7F\u7528\u672C\u5730\u90E8\u7F72\uFF0C\u8BF7\u4F7F\u75282.0+\u7248\u672C\u6216Dev\u5206\u652F</p><h3 id="\u4E0B\u8F7D-release" tabindex="-1">\u4E0B\u8F7D Release <a class="header-anchor" href="#\u4E0B\u8F7D-release" aria-hidden="true">#</a></h3><p>\u5728 <a href="https://github.com/am-abudu/Qexo/releases" target="_blank" rel="noreferrer">Release</a> \u4E0B\u8F7D\u6700\u65B0\u7684\u7248\u672C <em>Source code (zip)</em> \u5E76\u89E3\u538B</p><h3 id="\u51C6\u5907\u6570\u636E\u5E93" tabindex="-1">\u51C6\u5907\u6570\u636E\u5E93 <a class="header-anchor" href="#\u51C6\u5907\u6570\u636E\u5E93" aria-hidden="true">#</a></h3><p>\u53C2\u8003 <a href="https://docs.djangoproject.com/zh-hans/3.2/ref/databases/" target="_blank" rel="noreferrer">Django \u5B98\u65B9\u6587\u6863</a></p><table><thead><tr><th>\u5B98\u65B9\u652F\u6301</th><th>\u7B2C\u4E09\u65B9\u652F\u6301</th></tr></thead><tbody><tr><td>PostgreSQL</td><td>CockroachDB</td></tr><tr><td>MariaDB</td><td>Firebird</td></tr><tr><td>MySQL</td><td>Google Cloud Spanner</td></tr><tr><td>Oracle</td><td>Microsoft SQL Server</td></tr><tr><td>SQLite</td><td>......</td></tr></tbody></table><p>\u6CE8\u610F: \u4F60\u53EF\u80FD\u9700\u8981\u6839\u636E\u4F60\u4F7F\u7528\u7684\u6570\u636E\u5E93\u4FEE\u6539 <code>requirement.txt</code> \u4EE5\u5B89\u88C5\u4F9D\u8D56</p><h3 id="\u7F16\u8F91\u914D\u7F6E" tabindex="-1">\u7F16\u8F91\u914D\u7F6E <a class="header-anchor" href="#\u7F16\u8F91\u914D\u7F6E" aria-hidden="true">#</a></h3><p>\u4EE5\u4F7F\u7528 Mysql \u4E3A\u4F8B, \u786E\u8BA4\u597D\u5B89\u88C5\u76F8\u5173\u4F9D\u8D56\u540E\u5728<code>manage.py</code>\u7684\u540C\u7EA7\u76EE\u5F55\u4E0B\u521B\u5EFA\u5E76\u4FEE\u6539 <code>configs.py</code></p><div class="language-python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> pymysql</span></span>
<span class="line"><span style="color:#A6ACCD;">pymysql</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">install_as_MySQLdb</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">DOMAINS </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">127.0.0.1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">yoursite.com</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">DATABASES </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">default</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ENGINE</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">django.db.backends.mysql</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">NAME</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">qexo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">USER</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">root</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">PASSWORD</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">password</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">HOST</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">127.0.0.1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">PORT</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">3306</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">OPTIONS</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">init_command</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">SET sql_mode=&#39;STRICT_TRANS_TABLES&#39;</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u5982\u679C\u9700\u8981\u5F15\u5165\u5176\u4ED6\u7684\u5E93\uFF0C\u6216\u5728<code>init.py</code>\u4E2D\u6267\u884C\u4EE3\u7801\uFF0C\u53EF\u4EE5\u76F4\u63A5\u5728\u9876\u90E8\u5199\u5165<code>import pymysql</code></p><h3 id="\u6267\u884C\u547D\u4EE4\u8FD0\u884C" tabindex="-1">\u6267\u884C\u547D\u4EE4\u8FD0\u884C <a class="header-anchor" href="#\u6267\u884C\u547D\u4EE4\u8FD0\u884C" aria-hidden="true">#</a></h3><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">pip3 install -r requirements.txt</span></span>
<span class="line"><span style="color:#A6ACCD;">python3 manage.py makemigrations</span></span>
<span class="line"><span style="color:#A6ACCD;">python3 manage.py migrate</span></span>
<span class="line"><span style="color:#A6ACCD;">python3 manage.py runserver --noreload</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,45),r=[l];function p(o,c,d,i,D,h){return e(),a("div",null,r)}const F=s(t,[["render",p]]);export{b as __pageData,F as default};
