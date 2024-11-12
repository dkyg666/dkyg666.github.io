import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,e as a,b as e,d as s,a as o,o as l,r as c}from"./app-dX96qGh5.js";const u={},r={href:"https://github.com/settings/applications/new",target:"_blank",rel:"noopener noreferrer"};function d(k,n){const t=c("ExternalLinkIcon");return l(),i("div",null,[n[3]||(n[3]=a('<h1 id="部署-drone" tabindex="-1"><a class="header-anchor" href="#部署-drone"><span>部署 Drone</span></a></h1><h2 id="要求" tabindex="-1"><a class="header-anchor" href="#要求"><span>要求</span></a></h2><ul><li><p>拥有公网 IP、域名 (如果你不满足要求，可以尝试在本地使用 Gogs + Drone)</p></li><li><p>域名 SSL 证书 (目前国内有很多云服务商提供免费证书)</p></li><li><p>熟悉 <code>Docker</code> 以及 <code>Docker Compose</code></p></li><li><p>熟悉 <code>Git</code> 基本命令</p></li><li><p>对 <code>CI/CD</code> 有一定了解</p></li></ul><h2 id="新建-github-应用" tabindex="-1"><a class="header-anchor" href="#新建-github-应用"><span>新建 GitHub 应用</span></a></h2>',4)),e("p",null,[n[1]||(n[1]=s("登录 GitHub，在 ")),e("a",r,[n[0]||(n[0]=s("https://github.com/settings/applications/new")),o(t)]),n[2]||(n[2]=s(" 新建一个应用。"))]),n[4]||(n[4]=a(`<figure><img src="https://docs.drone.io/screenshots/github_application_create.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>接下来查看这个应用的详情，记录 <code>Client ID</code> 和 <code>Client Secret</code>，之后配置 Drone 会用到。</p><h2 id="配置-drone" tabindex="-1"><a class="header-anchor" href="#配置-drone"><span>配置 Drone</span></a></h2><p>我们通过使用 <code>Docker Compose</code> 来启动 <code>Drone</code>，编写 <code>docker-compose.yml</code> 文件。</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>

  <span class="token key atrule">drone-server</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> drone/drone<span class="token punctuation">:</span>2.3.1
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 443<span class="token punctuation">:</span><span class="token number">443</span>
      <span class="token punctuation">-</span> <span class="token datetime number">80:80</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> drone<span class="token punctuation">-</span>data<span class="token punctuation">:</span>/data<span class="token punctuation">:</span>rw
      <span class="token punctuation">-</span> ./ssl<span class="token punctuation">:</span>/etc/certs
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> DRONE_SERVER_HOST=$<span class="token punctuation">{</span>DRONE_SERVER_HOST<span class="token punctuation">:</span><span class="token punctuation">-</span>https<span class="token punctuation">:</span>//drone.yeasy.com<span class="token punctuation">}</span>
      <span class="token punctuation">-</span> DRONE_SERVER_PROTO=$<span class="token punctuation">{</span>DRONE_SERVER_PROTO<span class="token punctuation">:</span><span class="token punctuation">-</span>https<span class="token punctuation">}</span>
      <span class="token punctuation">-</span> DRONE_RPC_SECRET=$<span class="token punctuation">{</span>DRONE_RPC_SECRET<span class="token punctuation">:</span><span class="token punctuation">-</span>secret<span class="token punctuation">}</span>
      <span class="token punctuation">-</span> DRONE_GITHUB_SERVER=https<span class="token punctuation">:</span>//github.com
      <span class="token punctuation">-</span> DRONE_GITHUB_CLIENT_ID=$<span class="token punctuation">{</span>DRONE_GITHUB_CLIENT_ID<span class="token punctuation">}</span>
      <span class="token punctuation">-</span> DRONE_GITHUB_CLIENT_SECRET=$<span class="token punctuation">{</span>DRONE_GITHUB_CLIENT_SECRET<span class="token punctuation">}</span>

  <span class="token key atrule">drone-agent</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> drone/drone<span class="token punctuation">-</span>runner<span class="token punctuation">-</span>docker<span class="token punctuation">:</span><span class="token number">1</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> drone<span class="token punctuation">-</span>server
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /var/run/docker.sock<span class="token punctuation">:</span>/var/run/docker.sock<span class="token punctuation">:</span>rw
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> DRONE_RPC_PROTO=http
      <span class="token punctuation">-</span> DRONE_RPC_HOST=drone<span class="token punctuation">-</span>server
      <span class="token punctuation">-</span> DRONE_RPC_SECRET=$<span class="token punctuation">{</span>DRONE_RPC_SECRET<span class="token punctuation">:</span><span class="token punctuation">-</span>secret<span class="token punctuation">}</span>
      <span class="token punctuation">-</span> DRONE_RUNNER_NAME=$<span class="token punctuation">{</span>HOSTNAME<span class="token punctuation">:</span><span class="token punctuation">-</span>demo<span class="token punctuation">}</span>
      <span class="token punctuation">-</span> DRONE_RUNNER_CAPACITY=2
    <span class="token key atrule">dns</span><span class="token punctuation">:</span> 114.114.114.114

<span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token key atrule">drone-data</span><span class="token punctuation">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新建 <code>.env</code> 文件，输入变量及其值</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 必填 服务器地址，例如 drone.domain.com</span>
<span class="token assign-left variable">DRONE_SERVER_HOST</span><span class="token operator">=</span>
<span class="token assign-left variable">DRONE_SERVER_PROTO</span><span class="token operator">=</span>https
<span class="token assign-left variable">DRONE_RPC_SECRET</span><span class="token operator">=</span>secret
<span class="token assign-left variable"><span class="token environment constant">HOSTNAME</span></span><span class="token operator">=</span>demo
<span class="token comment"># 必填 在 GitHub 应用页面查看</span>
<span class="token assign-left variable">DRONE_GITHUB_CLIENT_ID</span><span class="token operator">=</span>
<span class="token comment"># 必填 在 GitHub 应用页面查看</span>
<span class="token assign-left variable">DRONE_GITHUB_CLIENT_SECRET</span><span class="token operator">=</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启动-drone" tabindex="-1"><a class="header-anchor" href="#启动-drone"><span>启动 Drone</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,9))])}const b=p(u,[["render",d],["__file","install.html.vue"]]),E=JSON.parse('{"path":"/index/Docker/cases/ci/drone/install.html","title":"部署 Drone","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"要求","slug":"要求","link":"#要求","children":[]},{"level":2,"title":"新建 GitHub 应用","slug":"新建-github-应用","link":"#新建-github-应用","children":[]},{"level":2,"title":"配置 Drone","slug":"配置-drone","link":"#配置-drone","children":[{"level":3,"title":"启动 Drone","slug":"启动-drone","link":"#启动-drone","children":[]}]}],"git":{"createdTime":1731129855000,"updatedTime":1731129855000,"contributors":[{"name":"dkyg666","email":"43946866+dkyg666@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":0.92,"words":277},"filePathRelative":"index/Docker/cases/ci/drone/install.md","localizedDate":"2024年11月9日","excerpt":"\\n<h2>要求</h2>\\n<ul>\\n<li>\\n<p>拥有公网 IP、域名 (如果你不满足要求，可以尝试在本地使用 Gogs + Drone)</p>\\n</li>\\n<li>\\n<p>域名 SSL 证书 (目前国内有很多云服务商提供免费证书)</p>\\n</li>\\n<li>\\n<p>熟悉 <code>Docker</code> 以及 <code>Docker Compose</code></p>\\n</li>\\n<li>\\n<p>熟悉 <code>Git</code> 基本命令</p>\\n</li>\\n<li>\\n<p>对 <code>CI/CD</code> 有一定了解</p>\\n</li>\\n</ul>\\n<h2>新建 GitHub 应用</h2>"}');export{b as comp,E as data};
