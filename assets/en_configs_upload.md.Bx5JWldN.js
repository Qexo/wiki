import{_ as e,c as a,o as t,a5 as s}from"./chunks/framework.BTLartk_.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{"article":"","date":"","title":"","updated":"2024-07-19T22:47:45.503+08:00"},"headers":[],"relativePath":"en/configs/upload.md","filePath":"en/configs/upload.md","lastUpdated":1735461301000}'),i={name:"en/configs/upload.md"},n=s('<h1 id="image-hosting-configuration" tabindex="-1">Image Hosting Configuration <a class="header-anchor" href="#image-hosting-configuration" aria-label="Permalink to &quot;Image Hosting Configuration&quot;">​</a></h1><p>Starting from version 2.0.0, Qexo supports a modular approach to image hosting, merging previous S3, FTP, and Custom documentations.</p><h2 id="remote-api" tabindex="-1">Remote API <a class="header-anchor" href="#remote-api" aria-label="Permalink to &quot;Remote API&quot;">​</a></h2><p>Qexo offers a custom API image hosting feature. After configuring the image hosting settings, you can upload images from the article/page editing interface.</p><h3 id="api-url" tabindex="-1">API URL <a class="header-anchor" href="#api-url" aria-label="Permalink to &quot;API URL&quot;">​</a></h3><p>API for uploading images to the image hosting service</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>https://7bu.top/api/upload</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="post-parameter-name" tabindex="-1">POST Parameter Name <a class="header-anchor" href="#post-parameter-name" aria-label="Permalink to &quot;POST Parameter Name&quot;">​</a></h3><p>Parameter name for the image file in the API for image uploads</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>image</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="https://s2.loli.net/2024/07/19/9IJXAxzrCcKvs3Y.png" alt=""></p><h3 id="json-path" tabindex="-1">JSON Path <a class="header-anchor" href="#json-path" aria-label="Permalink to &quot;JSON Path&quot;">​</a></h3><p>Path in the API response data where the <strong>image URL</strong> is located. Leave blank if it is the entire response. Example:</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>data.url</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="custom-request-headers" tabindex="-1">Custom Request Headers <a class="header-anchor" href="#custom-request-headers" aria-label="Permalink to &quot;Custom Request Headers&quot;">​</a></h3><p>Request headers to include in the POST request, must be in standard JSON format. Leave blank if not needed.</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;key&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;value&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="custom-body" tabindex="-1">Custom BODY <a class="header-anchor" href="#custom-body" aria-label="Permalink to &quot;Custom BODY&quot;">​</a></h3><p>Additional request body for the POST request, must be in standard JSON format. Leave blank if not needed.</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;key&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;value&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="custom-prefix" tabindex="-1">Custom Prefix <a class="header-anchor" href="#custom-prefix" aria-label="Permalink to &quot;Custom Prefix&quot;">​</a></h3><p>Prefix to add to the returned URL. Leave blank if not needed.</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>some_text_or_url</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="delete-api" tabindex="-1">Delete API <a class="header-anchor" href="#delete-api" aria-label="Permalink to &quot;Delete API&quot;">​</a></h3><p>Path in the API response data where the <strong>delete image URL</strong> is located. Leave blank if it does not exist. Example:</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>data.delete_url</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="s3-protocol" tabindex="-1">S3 Protocol <a class="header-anchor" href="#s3-protocol" aria-label="Permalink to &quot;S3 Protocol&quot;">​</a></h2><p>Qexo provides support for S3 buckets. After configuring the S3 bucket settings, you can upload images from the article/page editing interface.</p><h3 id="access-key-id" tabindex="-1">Access Key ID <a class="header-anchor" href="#access-key-id" aria-label="Permalink to &quot;Access Key ID&quot;">​</a></h3><p>S3 Access Key ID for the application</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1000000000000080000000000</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="access-key" tabindex="-1">Access Key <a class="header-anchor" href="#access-key" aria-label="Permalink to &quot;Access Key&quot;">​</a></h3><p>S3 Access Key for the application</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>S12******************6129E</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="bucket-name" tabindex="-1">Bucket Name <a class="header-anchor" href="#bucket-name" aria-label="Permalink to &quot;Bucket Name&quot;">​</a></h3><p>S3 Bucket name</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Bucket</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="endpoint" tabindex="-1">Endpoint <a class="header-anchor" href="#endpoint" aria-label="Permalink to &quot;Endpoint&quot;">​</a></h3><p>S3 Endpoint</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>https://s3.us-west-002.backblazeb2.com</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="save-path" tabindex="-1">Save Path <a class="header-anchor" href="#save-path" aria-label="Permalink to &quot;Save Path&quot;">​</a></h3><p>Path where the file will be saved after upload, including the file name</p><table tabindex="0"><thead><tr><th>Keyword</th><th>Meaning</th><th>Example</th></tr></thead><tbody><tr><td><em>{year}</em></td><td>Current year</td><td>21</td></tr><tr><td><em>{month}</em></td><td>Current month</td><td>1</td></tr><tr><td><em>{day}</em></td><td>Current day</td><td>2</td></tr><tr><td><em>{YEAR}</em></td><td>Current year</td><td>2021</td></tr><tr><td><em>{MONTH}</em></td><td>Current month</td><td>01</td></tr><tr><td><em>{DAY}</em></td><td>Current day</td><td>02</td></tr><tr><td><em>{filename}</em></td><td>Filename without extension</td><td>image</td></tr><tr><td><em>{time}</em></td><td>Timestamp</td><td>1640186955.4339228</td></tr><tr><td><em>{extName}</em></td><td>File extension</td><td>png</td></tr><tr><td><em>{md5}</em></td><td>Image MD5-Hash</td><td>0c8bfe6821a91c3d96b25e2ea2dcf827</td></tr></tbody></table><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Qexo/{year}/{month}/{md5}.{extName}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="custom-domain" tabindex="-1">Custom Domain <a class="header-anchor" href="#custom-domain" aria-label="Permalink to &quot;Custom Domain&quot;">​</a></h3><p>Final URL of the returned file link, supports the same keywords</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>https://file.example.com/file/CDN/Qexo/{year}/{month}/{md5}.{extName}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="ftp-protocol" tabindex="-1">FTP Protocol <a class="header-anchor" href="#ftp-protocol" aria-label="Permalink to &quot;FTP Protocol&quot;">​</a></h2><p>You can use this module to upload images to a remote FTP location.</p><h3 id="ftp-host" tabindex="-1">FTP Host <a class="header-anchor" href="#ftp-host" aria-label="Permalink to &quot;FTP Host&quot;">​</a></h3><p>FTP host address</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>127.0.0.1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="ftp-port" tabindex="-1">FTP Port <a class="header-anchor" href="#ftp-port" aria-label="Permalink to &quot;FTP Port&quot;">​</a></h3><p>FTP connection port, usually <strong>21</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>21</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="username" tabindex="-1">Username <a class="header-anchor" href="#username" aria-label="Permalink to &quot;Username&quot;">​</a></h3><p>FTP login username</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>username</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="password" tabindex="-1">Password <a class="header-anchor" href="#password" aria-label="Permalink to &quot;Password&quot;">​</a></h3><p>FTP login password</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>password</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="save-path-1" tabindex="-1">Save Path <a class="header-anchor" href="#save-path-1" aria-label="Permalink to &quot;Save Path&quot;">​</a></h3><p>Path where the file will be saved after upload, including the file name</p><table tabindex="0"><thead><tr><th>Keyword</th><th>Meaning</th><th>Example</th></tr></thead><tbody><tr><td><em>{year}</em></td><td>Current year</td><td>21</td></tr><tr><td><em>{month}</em></td><td>Current month</td><td>1</td></tr><tr><td><em>{day}</em></td><td>Current day</td><td>2</td></tr><tr><td><em>{YEAR}</em></td><td>Current year</td><td>2021</td></tr><tr><td><em>{MONTH}</em></td><td>Current month</td><td>01</td></tr><tr><td><em>{DAY}</em></td><td>Current day</td><td>02</td></tr><tr><td><em>{filename}</em></td><td>Filename without extension</td><td>image</td></tr><tr><td><em>{time}</em></td><td>Timestamp</td><td>1640186955.4339228</td></tr><tr><td><em>{md5}</em></td><td>Image MD5-Hash</td><td>0c8bfe6821a91c3d96b25e2ea2dcf827</td></tr><tr><td><em>{extName}</em></td><td>File extension</td><td>png</td></tr></tbody></table><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/Qexo/{year}/{month}/{time}.{extName}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="custom-domain-1" tabindex="-1">Custom Domain <a class="header-anchor" href="#custom-domain-1" aria-label="Permalink to &quot;Custom Domain&quot;">​</a></h3><p>Final URL of the returned file link, supports the same keywords</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>https://file.example.com/file/CDN/Qexo/{year}/{month}/{time}.{extName}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="github" tabindex="-1">Github <a class="header-anchor" href="#github" aria-label="Permalink to &quot;Github&quot;">​</a></h2><p>(Not recommended) Upload images to a Github repository to leverage Github Actions for further operations.</p><h3 id="github-repository" tabindex="-1">Github Repository <a class="header-anchor" href="#github-repository" aria-label="Permalink to &quot;Github Repository&quot;">​</a></h3><p>Repository where your images are uploaded</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>username/repo</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="project-branch" tabindex="-1">Project Branch <a class="header-anchor" href="#project-branch" aria-label="Permalink to &quot;Project Branch&quot;">​</a></h3><p>Branch in the repository where images need to be uploaded</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>master</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="github-token" tabindex="-1">Github Token <a class="header-anchor" href="#github-token" aria-label="Permalink to &quot;Github Token&quot;">​</a></h3><p>Token generated at <a href="https://github.com/settings/tokens" target="_blank" rel="noreferrer">Github Settings</a><br> Requires at least read and write permissions for Repo <em>not recommended to give all permissions</em></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>wrq_P8sYPlYA9fjMlOPEYSKA84xxxxxxxxxxxxxx</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="save-path-2" tabindex="-1">Save Path <a class="header-anchor" href="#save-path-2" aria-label="Permalink to &quot;Save Path&quot;">​</a></h3><p>Path where the file will be saved after upload, including the file name</p><table tabindex="0"><thead><tr><th>Keyword</th><th>Meaning</th><th>Example</th></tr></thead><tbody><tr><td><em>{year}</em></td><td>Current year</td><td>21</td></tr><tr><td><em>{month}</em></td><td>Current month</td><td>1</td></tr><tr><td><em>{day}</em></td><td>Current day</td><td>2</td></tr><tr><td><em>{YEAR}</em></td><td>Current year</td><td>2021</td></tr><tr><td><em>{MONTH}</em></td><td>Current month</td><td>01</td></tr><tr><td><em>{DAY}</em></td><td>Current day</td><td>02</td></tr><tr><td><em>{filename}</em></td><td>Filename without extension</td><td>image</td></tr><tr><td><em>{time}</em></td><td>Timestamp</td><td>1640186955.4339228</td></tr><tr><td><em>{md5}</em></td><td>File MD5-Hash</td><td>0c8bfe6821a91c3d96b25e2ea2dcf827</td></tr><tr><td><em>{extName}</em></td><td>File extension</td><td>png</td></tr></tbody></table><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Qexo/{year}/{month}/{filename}_{md5}.{extName}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="custom-domain-2" tabindex="-1">Custom Domain <a class="header-anchor" href="#custom-domain-2" aria-label="Permalink to &quot;Custom Domain&quot;">​</a></h3><p>Final URL of the returned file link, supports the same keywords</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>https://github.com/username/repo/raw/master/Qexo/{year}/{month}/{filename}_{md5}.{extName}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>',86),d=[n];function r(o,l,p,h,c,u){return t(),a("div",null,d)}const g=e(i,[["render",r]]);export{b as __pageData,g as default};