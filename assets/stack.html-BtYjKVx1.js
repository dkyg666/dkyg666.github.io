import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,e,o as c}from"./app-dX96qGh5.js";const o="/assets/wordpress-XmrimFC5.png",t={};function l(p,s){return c(),a("div",null,s[0]||(s[0]=[e(`<h1 id="在-swarm-集群中使用-compose-文件" tabindex="-1"><a class="header-anchor" href="#在-swarm-集群中使用-compose-文件"><span>在 Swarm 集群中使用 compose 文件</span></a></h1><p>正如之前使用 <code>docker-compose.yml</code> 来一次配置、启动多个容器，在 <code>Swarm</code> 集群中也可以使用 <code>compose</code> 文件 （<code>docker-compose.yml</code>） 来配置、启动多个服务。</p><p>上一节中，我们使用 <code>docker service create</code> 一次只能部署一个服务，使用 <code>docker-compose.yml</code> 我们可以一次启动多个关联的服务。</p><p>我们以在 <code>Swarm</code> 集群中部署 <code>WordPress</code> 为例进行说明。</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">wordpress</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> wordpress
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token datetime number">80:80</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> overlay
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">WORDPRESS_DB_HOST</span><span class="token punctuation">:</span> db<span class="token punctuation">:</span><span class="token number">3306</span>
      <span class="token key atrule">WORDPRESS_DB_USER</span><span class="token punctuation">:</span> wordpress
      <span class="token key atrule">WORDPRESS_DB_PASSWORD</span><span class="token punctuation">:</span> wordpress
    <span class="token key atrule">deploy</span><span class="token punctuation">:</span>
      <span class="token key atrule">mode</span><span class="token punctuation">:</span> replicated
      <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">3</span>

  <span class="token key atrule">db</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> mysql
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
       <span class="token punctuation">-</span> overlay
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> db<span class="token punctuation">-</span>data<span class="token punctuation">:</span>/var/lib/mysql
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">MYSQL_ROOT_PASSWORD</span><span class="token punctuation">:</span> somewordpress
      <span class="token key atrule">MYSQL_DATABASE</span><span class="token punctuation">:</span> wordpress
      <span class="token key atrule">MYSQL_USER</span><span class="token punctuation">:</span> wordpress
      <span class="token key atrule">MYSQL_PASSWORD</span><span class="token punctuation">:</span> wordpress
    <span class="token key atrule">deploy</span><span class="token punctuation">:</span>
      <span class="token key atrule">placement</span><span class="token punctuation">:</span>
        <span class="token key atrule">constraints</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>node.role == manager<span class="token punctuation">]</span>

  <span class="token key atrule">visualizer</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> dockersamples/visualizer<span class="token punctuation">:</span>stable
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;8080:8080&quot;</span>
    <span class="token key atrule">stop_grace_period</span><span class="token punctuation">:</span> 1m30s
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;/var/run/docker.sock:/var/run/docker.sock&quot;</span>
    <span class="token key atrule">deploy</span><span class="token punctuation">:</span>
      <span class="token key atrule">placement</span><span class="token punctuation">:</span>
        <span class="token key atrule">constraints</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>node.role == manager<span class="token punctuation">]</span>

<span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token key atrule">db-data</span><span class="token punctuation">:</span>
<span class="token key atrule">networks</span><span class="token punctuation">:</span>
  <span class="token key atrule">overlay</span><span class="token punctuation">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <code>Swarm</code> 集群管理节点新建该文件，其中的 <code>visualizer</code> 服务提供一个可视化页面，我们可以从浏览器中很直观的查看集群中各个服务的运行节点。</p><p>在 <code>Swarm</code> 集群中使用 <code>docker-compose.yml</code> 我们用 <code>docker stack</code> 命令，下面我们对该命令进行详细讲解。</p><h2 id="部署服务" tabindex="-1"><a class="header-anchor" href="#部署服务"><span>部署服务</span></a></h2><p>部署服务使用 <code>docker stack deploy</code>，其中 <code>-c</code> 参数指定 compose 文件名。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> stack deploy <span class="token parameter variable">-c</span> docker-compose.yml wordpress
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>现在我们打开浏览器输入 <code>任一节点IP:8080</code> 即可看到各节点运行状态。如下图所示：</p><figure><img src="`+o+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在浏览器新的标签页输入 <code>任一节点IP</code> 即可看到 <code>WordPress</code> 安装界面，安装完成之后，输入 <code>任一节点IP</code> 即可看到 <code>WordPress</code> 页面。</p><h2 id="查看服务" tabindex="-1"><a class="header-anchor" href="#查看服务"><span>查看服务</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> stack <span class="token function">ls</span>
NAME                SERVICES
wordpress           <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="移除服务" tabindex="-1"><a class="header-anchor" href="#移除服务"><span>移除服务</span></a></h2><p>要移除服务，使用 <code>docker stack down</code></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> stack down wordpress
Removing <span class="token function">service</span> wordpress_db
Removing <span class="token function">service</span> wordpress_visualizer
Removing <span class="token function">service</span> wordpress_wordpress
Removing network wordpress_overlay
Removing network wordpress_default
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该命令不会移除服务所使用的 <code>数据卷</code>，如果你想移除数据卷请使用 <code>docker volume rm</code></p>`,19)]))}const r=n(t,[["render",l],["__file","stack.html.vue"]]),u=JSON.parse('{"path":"/index/Docker/swarm_mode/stack.html","title":"在 Swarm 集群中使用 compose 文件","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"部署服务","slug":"部署服务","link":"#部署服务","children":[]},{"level":2,"title":"查看服务","slug":"查看服务","link":"#查看服务","children":[]},{"level":2,"title":"移除服务","slug":"移除服务","link":"#移除服务","children":[]}],"git":{"createdTime":1731129855000,"updatedTime":1731129855000,"contributors":[{"name":"dkyg666","email":"43946866+dkyg666@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.51,"words":453},"filePathRelative":"index/Docker/swarm_mode/stack.md","localizedDate":"2024年11月9日","excerpt":"\\n<p>正如之前使用 <code>docker-compose.yml</code> 来一次配置、启动多个容器，在 <code>Swarm</code> 集群中也可以使用 <code>compose</code> 文件 （<code>docker-compose.yml</code>） 来配置、启动多个服务。</p>\\n<p>上一节中，我们使用 <code>docker service create</code> 一次只能部署一个服务，使用 <code>docker-compose.yml</code> 我们可以一次启动多个关联的服务。</p>\\n<p>我们以在 <code>Swarm</code> 集群中部署 <code>WordPress</code> 为例进行说明。</p>"}');export{r as comp,u as data};
