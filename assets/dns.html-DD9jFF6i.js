import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,e as a,o as t}from"./app-dX96qGh5.js";const o={};function c(d,n){return t(),s("div",null,n[0]||(n[0]=[a(`<h1 id="配置-dns" tabindex="-1"><a class="header-anchor" href="#配置-dns"><span>配置 DNS</span></a></h1><p>如何自定义配置容器的主机名和 DNS 呢？秘诀就是 Docker 利用虚拟文件来挂载容器的 3 个相关配置文件。</p><p>在容器中使用 <code>mount</code> 命令可以看到挂载信息：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">mount</span>
/dev/disk/by-uuid/1fec<span class="token punctuation">..</span>.ebdf on /etc/hostname <span class="token builtin class-name">type</span> ext4 <span class="token punctuation">..</span>.
/dev/disk/by-uuid/1fec<span class="token punctuation">..</span>.ebdf on /etc/hosts <span class="token builtin class-name">type</span> ext4 <span class="token punctuation">..</span>.
tmpfs on /etc/resolv.conf <span class="token builtin class-name">type</span> tmpfs <span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种机制可以让宿主主机 DNS 信息发生更新后，所有 Docker 容器的 DNS 配置通过 <code>/etc/resolv.conf</code> 文件立刻得到更新。</p><p>配置全部容器的 DNS ，也可以在 <code>/etc/docker/daemon.json</code> 文件中增加以下内容来设置。</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;dns&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;114.114.114.114&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;8.8.8.8&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样每次启动的容器 DNS 自动配置为 <code>114.114.114.114</code> 和 <code>8.8.8.8</code>。使用以下命令来证明其已经生效。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">--rm</span> ubuntu:18.04  <span class="token function">cat</span> etc/resolv.conf

nameserver <span class="token number">114.114</span>.114.114
nameserver <span class="token number">8.8</span>.8.8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果用户想要手动指定容器的配置，可以在使用 <code>docker run</code> 命令启动容器时加入如下参数：</p><p><code>-h HOSTNAME</code> 或者 <code>--hostname=HOSTNAME</code> 设定容器的主机名，它会被写到容器内的 <code>/etc/hostname</code> 和 <code>/etc/hosts</code>。但它在容器外部看不到，既不会在 <code>docker container ls</code> 中显示，也不会在其他的容器的 <code>/etc/hosts</code> 看到。</p><p><code>--dns=IP_ADDRESS</code> 添加 DNS 服务器到容器的 <code>/etc/resolv.conf</code> 中，让容器用这个服务器来解析所有不在 <code>/etc/hosts</code> 中的主机名。</p><p><code>--dns-search=DOMAIN</code> 设定容器的搜索域，当设定搜索域为 <code>.example.com</code> 时，在搜索一个名为 host 的主机时，DNS 不仅搜索 host，还会搜索 <code>host.example.com</code>。</p><blockquote><p>注意：如果在容器启动时没有指定最后两个参数，Docker 会默认用主机上的 <code>/etc/resolv.conf</code> 来配置容器。</p></blockquote>`,14)]))}const l=e(o,[["render",c],["__file","dns.html.vue"]]),u=JSON.parse('{"path":"/index/Docker/network/dns.html","title":"配置 DNS","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"createdTime":1731129855000,"updatedTime":1731129855000,"contributors":[{"name":"dkyg666","email":"43946866+dkyg666@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.35,"words":404},"filePathRelative":"index/Docker/network/dns.md","localizedDate":"2024年11月9日","excerpt":"\\n<p>如何自定义配置容器的主机名和 DNS 呢？秘诀就是 Docker 利用虚拟文件来挂载容器的 3 个相关配置文件。</p>\\n<p>在容器中使用 <code>mount</code> 命令可以看到挂载信息：</p>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code>$ <span class=\\"token function\\">mount</span>\\n/dev/disk/by-uuid/1fec<span class=\\"token punctuation\\">..</span>.ebdf on /etc/hostname <span class=\\"token builtin class-name\\">type</span> ext4 <span class=\\"token punctuation\\">..</span>.\\n/dev/disk/by-uuid/1fec<span class=\\"token punctuation\\">..</span>.ebdf on /etc/hosts <span class=\\"token builtin class-name\\">type</span> ext4 <span class=\\"token punctuation\\">..</span>.\\ntmpfs on /etc/resolv.conf <span class=\\"token builtin class-name\\">type</span> tmpfs <span class=\\"token punctuation\\">..</span>.\\n</code></pre></div>"}');export{l as comp,u as data};
