import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,e as n,o as t}from"./app-dX96qGh5.js";const r={};function o(p,s){return t(),e("div",null,s[0]||(s[0]=[n(`<h1 id="在-swarm-集群中管理敏感数据" tabindex="-1"><a class="header-anchor" href="#在-swarm-集群中管理敏感数据"><span>在 Swarm 集群中管理敏感数据</span></a></h1><p>在动态的、大规模的分布式集群上，管理和分发 <code>密码</code>、<code>证书</code> 等敏感信息是极其重要的工作。传统的密钥分发方式（如密钥放入镜像中，设置环境变量，volume 动态挂载等）都存在着潜在的巨大的安全风险。</p><p>Docker 目前已经提供了 <code>secrets</code> 管理功能，用户可以在 Swarm 集群中安全地管理密码、密钥证书等敏感数据，并允许在多个 Docker 容器实例之间共享访问指定的敏感数据。</p><blockquote><p>注意： <code>secret</code> 也可以在 <code>Docker Compose</code> 中使用。</p></blockquote><p>我们可以用 <code>docker secret</code> 命令来管理敏感信息。接下来我们在上面章节中创建好的 Swarm 集群中介绍该命令的使用。</p><p>这里我们以在 Swarm 集群中部署 <code>mysql</code> 和 <code>wordpress</code> 服务为例。</p><h2 id="创建-secret" tabindex="-1"><a class="header-anchor" href="#创建-secret"><span>创建 secret</span></a></h2><p>我们使用 <code>docker secret create</code> 命令以管道符的形式创建 <code>secret</code></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ openssl rand <span class="token parameter variable">-base64</span> <span class="token number">20</span> <span class="token operator">|</span> <span class="token function">docker</span> secret create mysql_password -

$ openssl rand <span class="token parameter variable">-base64</span> <span class="token number">20</span> <span class="token operator">|</span> <span class="token function">docker</span> secret create mysql_root_password -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看-secret" tabindex="-1"><a class="header-anchor" href="#查看-secret"><span>查看 secret</span></a></h2><p>使用 <code>docker secret ls</code> 命令来查看 <code>secret</code></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> secret <span class="token function">ls</span>

ID                          NAME                  CREATED             UPDATED
l1vinzevzhj4goakjap5ya409   mysql_password        <span class="token number">41</span> seconds ago      <span class="token number">41</span> seconds ago
yvsczlx9votfw3l0nz5rlidig   mysql_root_password   <span class="token number">12</span> seconds ago      <span class="token number">12</span> seconds ago
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建-mysql-服务" tabindex="-1"><a class="header-anchor" href="#创建-mysql-服务"><span>创建 MySQL 服务</span></a></h2><p>创建服务相关命令已经在前边章节进行了介绍，这里直接列出命令。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> network create <span class="token parameter variable">-d</span> overlay mysql_private

$ <span class="token function">docker</span> <span class="token function">service</span> create <span class="token punctuation">\\</span>
     <span class="token parameter variable">--name</span> mysql <span class="token punctuation">\\</span>
     <span class="token parameter variable">--replicas</span> <span class="token number">1</span> <span class="token punctuation">\\</span>
     <span class="token parameter variable">--network</span> mysql_private <span class="token punctuation">\\</span>
     <span class="token parameter variable">--mount</span> <span class="token assign-left variable">type</span><span class="token operator">=</span>volume,source<span class="token operator">=</span>mydata,destination<span class="token operator">=</span>/var/lib/mysql <span class="token punctuation">\\</span>
     <span class="token parameter variable">--secret</span> <span class="token assign-left variable">source</span><span class="token operator">=</span>mysql_root_password,target<span class="token operator">=</span>mysql_root_password <span class="token punctuation">\\</span>
     <span class="token parameter variable">--secret</span> <span class="token assign-left variable">source</span><span class="token operator">=</span>mysql_password,target<span class="token operator">=</span>mysql_password <span class="token punctuation">\\</span>
     <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD_FILE</span><span class="token operator">=</span><span class="token string">&quot;/run/secrets/mysql_root_password&quot;</span> <span class="token punctuation">\\</span>
     <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_PASSWORD_FILE</span><span class="token operator">=</span><span class="token string">&quot;/run/secrets/mysql_password&quot;</span> <span class="token punctuation">\\</span>
     <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_USER</span><span class="token operator">=</span><span class="token string">&quot;wordpress&quot;</span> <span class="token punctuation">\\</span>
     <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_DATABASE</span><span class="token operator">=</span><span class="token string">&quot;wordpress&quot;</span> <span class="token punctuation">\\</span>
     mysql:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你没有在 <code>target</code> 中显式的指定路径时，<code>secret</code> 默认通过 <code>tmpfs</code> 文件系统挂载到容器的 <code>/run/secrets</code> 目录中。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> <span class="token function">service</span> create <span class="token punctuation">\\</span>
     <span class="token parameter variable">--name</span> wordpress <span class="token punctuation">\\</span>
     <span class="token parameter variable">--replicas</span> <span class="token number">1</span> <span class="token punctuation">\\</span>
     <span class="token parameter variable">--network</span> mysql_private <span class="token punctuation">\\</span>
     <span class="token parameter variable">--publish</span> <span class="token assign-left variable">target</span><span class="token operator">=</span><span class="token number">30000</span>,port<span class="token operator">=</span><span class="token number">80</span> <span class="token punctuation">\\</span>
     <span class="token parameter variable">--mount</span> <span class="token assign-left variable">type</span><span class="token operator">=</span>volume,source<span class="token operator">=</span>wpdata,destination<span class="token operator">=</span>/var/www/html <span class="token punctuation">\\</span>
     <span class="token parameter variable">--secret</span> <span class="token assign-left variable">source</span><span class="token operator">=</span>mysql_password,target<span class="token operator">=</span>wp_db_password,mode<span class="token operator">=</span>0444 <span class="token punctuation">\\</span>
     <span class="token parameter variable">-e</span> <span class="token assign-left variable">WORDPRESS_DB_USER</span><span class="token operator">=</span><span class="token string">&quot;wordpress&quot;</span> <span class="token punctuation">\\</span>
     <span class="token parameter variable">-e</span> <span class="token assign-left variable">WORDPRESS_DB_PASSWORD_FILE</span><span class="token operator">=</span><span class="token string">&quot;/run/secrets/wp_db_password&quot;</span> <span class="token punctuation">\\</span>
     <span class="token parameter variable">-e</span> <span class="token assign-left variable">WORDPRESS_DB_HOST</span><span class="token operator">=</span><span class="token string">&quot;mysql:3306&quot;</span> <span class="token punctuation">\\</span>
     <span class="token parameter variable">-e</span> <span class="token assign-left variable">WORDPRESS_DB_NAME</span><span class="token operator">=</span><span class="token string">&quot;wordpress&quot;</span> <span class="token punctuation">\\</span>
     wordpress:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看服务</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> <span class="token function">service</span> <span class="token function">ls</span>

ID            NAME   MODE        REPLICAS  IMAGE
wvnh0siktqr3  mysql      replicated  <span class="token number">1</span>/1       mysql:latest
nzt5xzae4n62  wordpress  replicated  <span class="token number">1</span>/1       wordpress:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在浏览器访问 <code>IP:30000</code>，即可开始 <code>WordPress</code> 的安装与使用。</p><p>通过以上方法，我们没有像以前通过设置环境变量来设置 MySQL 密码， 而是采用 <code>docker secret</code> 来设置密码，防范了密码泄露的风险。</p>`,21)]))}const i=a(r,[["render",o],["__file","secret.html.vue"]]),d=JSON.parse('{"path":"/index/Docker/swarm_mode/secret.html","title":"在 Swarm 集群中管理敏感数据","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"创建 secret","slug":"创建-secret","link":"#创建-secret","children":[]},{"level":2,"title":"查看 secret","slug":"查看-secret","link":"#查看-secret","children":[]},{"level":2,"title":"创建 MySQL 服务","slug":"创建-mysql-服务","link":"#创建-mysql-服务","children":[]}],"git":{"createdTime":1731129855000,"updatedTime":1731129855000,"contributors":[{"name":"dkyg666","email":"43946866+dkyg666@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.85,"words":556},"filePathRelative":"index/Docker/swarm_mode/secret.md","localizedDate":"2024年11月9日","excerpt":"\\n<p>在动态的、大规模的分布式集群上，管理和分发 <code>密码</code>、<code>证书</code> 等敏感信息是极其重要的工作。传统的密钥分发方式（如密钥放入镜像中，设置环境变量，volume 动态挂载等）都存在着潜在的巨大的安全风险。</p>\\n<p>Docker 目前已经提供了 <code>secrets</code> 管理功能，用户可以在 Swarm 集群中安全地管理密码、密钥证书等敏感数据，并允许在多个 Docker 容器实例之间共享访问指定的敏感数据。</p>\\n<blockquote>\\n<p>注意： <code>secret</code> 也可以在 <code>Docker Compose</code> 中使用。</p>\\n</blockquote>"}');export{i as comp,d as data};
