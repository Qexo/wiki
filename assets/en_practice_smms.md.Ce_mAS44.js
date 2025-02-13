import{_ as s,c as a,o as i,a5 as e}from"./chunks/framework.BTLartk_.js";const m=JSON.parse('{"title":"Using SMMS Image Hosting","description":"","frontmatter":{},"headers":[],"relativePath":"en/practice/smms.md","filePath":"en/practice/smms.md","lastUpdated":1739437242000}'),t={name:"en/practice/smms.md"},n=e(`<h1 id="using-smms-image-hosting" tabindex="-1">Using SMMS Image Hosting <a class="header-anchor" href="#using-smms-image-hosting" aria-label="Permalink to &quot;Using SMMS Image Hosting&quot;">​</a></h1><p>As an example of a remote API image hosting, this article will show you how to quickly integrate SMMS image hosting with Qexo for one-click uploads.</p><h2 id="api-address" tabindex="-1">API Address <a class="header-anchor" href="#api-address" aria-label="Permalink to &quot;API Address&quot;">​</a></h2><p>Refer to the <a href="https://doc.sm.ms/#api-Image-Upload" target="_blank" rel="noreferrer">documentation</a>. The API endpoint for SM.MS is:</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>https://sm.ms/api/v2/upload</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="post-parameters" tabindex="-1">POST Parameters <a class="header-anchor" href="#post-parameters" aria-label="Permalink to &quot;POST Parameters&quot;">​</a></h2><p>Refer to the <code>Parameters</code> section to view the parameters in the request body.</p><table tabindex="0"><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>smfile</td><td>file</td><td>Default value: <code>multipart/form-data</code></td></tr><tr><td>format</td><td>String</td><td>Return Type: <code>json</code> or <code>xml</code>, the default value is <code>json</code></td></tr></tbody></table><p>The type <code>file</code> indicates that the image file stream should be under the <code>smfile</code> field:</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>smfile</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="json-path" tabindex="-1">JSON Path <a class="header-anchor" href="#json-path" aria-label="Permalink to &quot;JSON Path&quot;">​</a></h2><p>Refer to the documentation’s <code>Success-Response</code>.</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;success&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;success&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;message&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Upload success.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;data&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;file_id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;width&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4677</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;height&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3307</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;filename&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;luo.jpg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;storename&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;D5VpWCKFElUsPcR.jpg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;size&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">801933</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;path&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/2019/12/16/D5VpWCKFElUsPcR.jpg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;hash&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Q6vLIbCGZojrMhO2e7BmgFuXRV&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;url&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://vip1.loli.net/2019/12/16/D5VpWCKFElUsPcR.jpg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;delete&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://sm.ms/delete/Q6vLIbCGZojrMhO2e7BmgFuXRV&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;page&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://sm.ms/image/D5VpWCKFElUsPcR&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;RequestId&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;8A84DDCA-96B3-4363-B5DF-524E95A5201A&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>It is clear that the image URL we need should be under <code>data</code> <code>url</code>:</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>data.url</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="custom-request-headers" tabindex="-1">Custom Request Headers <a class="header-anchor" href="#custom-request-headers" aria-label="Permalink to &quot;Custom Request Headers&quot;">​</a></h2><p>The documentation describes the following:</p><table tabindex="0"><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>Content-Type</td><td>String</td><td>Default value: <code>multipart/form-data</code></td></tr><tr><td>Authorization</td><td>String</td><td></td></tr></tbody></table><p>The <code>Content-Type</code> has a default value and can be left empty, while <code>Authorization</code> is a required field for authentication. According to the <a href="https://doc.sm.ms/#api-_" target="_blank" rel="noreferrer">documentation</a>, you need to include an authorization header in the request. Assuming my API key is <code>abcdefg123456</code>, it should be:</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{&quot;Authorization&quot;: &quot;abcdefg123456&quot;}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="custom-request-body" tabindex="-1">Custom Request Body <a class="header-anchor" href="#custom-request-body" aria-label="Permalink to &quot;Custom Request Body&quot;">​</a></h2><p>Refer to the <a href="#post-parameters">POST Parameters</a>.</p><table tabindex="0"><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>smfile</td><td>file</td><td>Default value: <code>multipart/form-data</code></td></tr><tr><td>format</td><td>String</td><td>Return Type: <code>json</code> or <code>xml</code>, the default value is <code>json</code></td></tr></tbody></table><p>Since <code>smfile</code> has already been filled in and <code>format</code> defaults to <code>json</code>, this section can be left empty.</p><h2 id="custom-prefix" tabindex="-1">Custom Prefix <a class="header-anchor" href="#custom-prefix" aria-label="Permalink to &quot;Custom Prefix&quot;">​</a></h2><p>The SM.MS image hosting used in this tutorial does not require this configuration and can be left empty.</p><p>Now, you have completed all configurations. In fact, remote API image hosting setups are quite similar, and you can use this tutorial to easily configure others.</p>`,27),l=[n];function p(h,r,d,o,u,c){return i(),a("div",null,l)}const g=s(t,[["render",p]]);export{m as __pageData,g as default};
