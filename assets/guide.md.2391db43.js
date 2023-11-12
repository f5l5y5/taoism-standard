import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.ec8f7e8e.js";const F=JSON.parse('{"title":"配置化","description":"","frontmatter":{},"headers":[],"relativePath":"guide.md","filePath":"guide.md"}'),p={name:"guide.md"},o=l(`<h1 id="配置化" tabindex="-1">配置化 <a class="header-anchor" href="#配置化" aria-label="Permalink to &quot;配置化&quot;">​</a></h1><p>公共配置</p><h2 id="prettier" tabindex="-1">prettier <a class="header-anchor" href="#prettier" aria-label="Permalink to &quot;prettier&quot;">​</a></h2><h3 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-label="Permalink to &quot;Install&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># with npm</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">i</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@taoismcn/prettier-config</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># with yarn</span></span>
<span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@taoismcn/prettier-config</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># with pnpm</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@taoismcn/prettier-config</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># with npm</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">i</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@taoismcn/prettier-config</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># with yarn</span></span>
<span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@taoismcn/prettier-config</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># with pnpm</span></span>
<span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@taoismcn/prettier-config</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span></span></code></pre></div><h3 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// .prettierrc.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;@taoismcn/prettier-config&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">config</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// .prettierrc.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">config</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;@taoismcn/prettier-config&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">config</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="eslint" tabindex="-1">eslint <a class="header-anchor" href="#eslint" aria-label="Permalink to &quot;eslint&quot;">​</a></h2><h3 id="install-1" tabindex="-1">Install <a class="header-anchor" href="#install-1" aria-label="Permalink to &quot;Install&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># with npm</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">i</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@taoism/eslint-config</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># with yarn</span></span>
<span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@taoism/eslint-config</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># with pnpm</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@taoism/eslint-config</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># with npm</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">i</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@taoism/eslint-config</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># with yarn</span></span>
<span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@taoism/eslint-config</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># with pnpm</span></span>
<span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@taoism/eslint-config</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span></span></code></pre></div><h3 id="usage-1" tabindex="-1">Usage <a class="header-anchor" href="#usage-1" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">&quot;extends&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;@taoism&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">&quot;extends&quot;</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;@taoism&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="stylelint" tabindex="-1">Stylelint <a class="header-anchor" href="#stylelint" aria-label="Permalink to &quot;Stylelint&quot;">​</a></h2><h3 id="install-2" tabindex="-1">Install <a class="header-anchor" href="#install-2" aria-label="Permalink to &quot;Install&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># with npm</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">i</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@taoism/stylelint-config</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># with yarn</span></span>
<span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@taoism/stylelint-config</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># with pnpm</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@taoism/stylelint-config</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># with npm</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">i</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@taoism/stylelint-config</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># with yarn</span></span>
<span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@taoism/stylelint-config</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># with pnpm</span></span>
<span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@taoism/stylelint-config</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span></span></code></pre></div><h3 id="usage-2" tabindex="-1">Usage <a class="header-anchor" href="#usage-2" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&quot;extends&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;@taoism/stylelint-config&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&quot;extends&quot;</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;@taoism/stylelint-config&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="commitlint" tabindex="-1">Commitlint <a class="header-anchor" href="#commitlint" aria-label="Permalink to &quot;Commitlint&quot;">​</a></h2><h3 id="install-3" tabindex="-1">Install <a class="header-anchor" href="#install-3" aria-label="Permalink to &quot;Install&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># with npm</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">i</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@taoism/commitlint-config</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># with yarn</span></span>
<span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@taoism/commitlint-config</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># with pnpm</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@taoism/commitlint-config</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># with npm</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">i</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@taoism/commitlint-config</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># with yarn</span></span>
<span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@taoism/commitlint-config</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># with pnpm</span></span>
<span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@taoism/commitlint-config</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span></span></code></pre></div><h3 id="usage-3" tabindex="-1">Usage <a class="header-anchor" href="#usage-3" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><p>commitlint.config.js</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">extends:</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&#39;@taoism/commitlint-config&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">extends:</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&#39;@taoism/commitlint-config&#39;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,23),e=[o];function t(c,r,i,y,E,d){return a(),n("div",null,e)}const m=s(p,[["render",t]]);export{F as __pageData,m as default};
