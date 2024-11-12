import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,e as a,o as d}from"./app-dX96qGh5.js";const o={};function c(t,n){return d(),e("div",null,n[0]||(n[0]=[a(`<h1 id="自定义网桥" tabindex="-1"><a class="header-anchor" href="#自定义网桥"><span>自定义网桥</span></a></h1><p>除了默认的 <code>docker0</code> 网桥，用户也可以指定网桥来连接各个容器。</p><p>在启动 Docker 服务的时候，使用 <code>-b BRIDGE</code>或<code>--bridge=BRIDGE</code> 来指定使用的网桥。</p><p>如果服务已经运行，那需要先停止服务，并删除旧的网桥。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> systemctl stop <span class="token function">docker</span>
$ <span class="token function">sudo</span> <span class="token function">ip</span> <span class="token function">link</span> <span class="token builtin class-name">set</span> dev docker0 down
$ <span class="token function">sudo</span> brctl delbr docker0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后创建一个网桥 <code>bridge0</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> brctl addbr bridge0
$ <span class="token function">sudo</span> <span class="token function">ip</span> addr <span class="token function">add</span> <span class="token number">192.168</span>.5.1/24 dev bridge0
$ <span class="token function">sudo</span> <span class="token function">ip</span> <span class="token function">link</span> <span class="token builtin class-name">set</span> dev bridge0 up
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看确认网桥创建并启动。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">ip</span> addr show bridge0
<span class="token number">4</span>: bridge0: <span class="token operator">&lt;</span>BROADCAST,MULTICAST<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc noop state UP group default
    link/ether <span class="token number">66</span>:38:d0:0d:76:18 brd ff:ff:ff:ff:ff:ff
    inet <span class="token number">192.168</span>.5.1/24 scope global bridge0
       valid_lft forever preferred_lft forever
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 Docker 配置文件 <code>/etc/docker/daemon.json</code> 中添加如下内容，即可将 Docker 默认桥接到创建的网桥上。</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;bridge&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bridge0&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动 Docker 服务。</p><p>新建一个容器，可以看到它已经桥接到了 <code>bridge0</code> 上。</p><p>可以继续用 <code>brctl show</code> 命令查看桥接的信息。另外，在容器中可以使用 <code>ip addr</code> 和 <code>ip route</code> 命令来查看 IP 地址配置和路由信息。</p>`,14)]))}const p=s(o,[["render",c],["__file","bridge.html.vue"]]),r=JSON.parse('{"path":"/index/Docker/advanced_network/bridge.html","title":"自定义网桥","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"createdTime":1731129855000,"updatedTime":1731129855000,"contributors":[{"name":"dkyg666","email":"43946866+dkyg666@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":0.91,"words":273},"filePathRelative":"index/Docker/advanced_network/bridge.md","localizedDate":"2024年11月9日","excerpt":"\\n<p>除了默认的 <code>docker0</code> 网桥，用户也可以指定网桥来连接各个容器。</p>\\n<p>在启动 Docker 服务的时候，使用 <code>-b BRIDGE</code>或<code>--bridge=BRIDGE</code> 来指定使用的网桥。</p>\\n<p>如果服务已经运行，那需要先停止服务，并删除旧的网桥。</p>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code>$ <span class=\\"token function\\">sudo</span> systemctl stop <span class=\\"token function\\">docker</span>\\n$ <span class=\\"token function\\">sudo</span> <span class=\\"token function\\">ip</span> <span class=\\"token function\\">link</span> <span class=\\"token builtin class-name\\">set</span> dev docker0 down\\n$ <span class=\\"token function\\">sudo</span> brctl delbr docker0\\n</code></pre></div>"}');export{p as comp,r as data};
