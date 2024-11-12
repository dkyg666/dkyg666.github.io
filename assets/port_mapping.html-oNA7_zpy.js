import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,e,o as t}from"./app-dX96qGh5.js";const p={};function i(l,a){return t(),s("div",null,a[0]||(a[0]=[e(`<h1 id="映射容器端口到宿主主机的实现" tabindex="-1"><a class="header-anchor" href="#映射容器端口到宿主主机的实现"><span>映射容器端口到宿主主机的实现</span></a></h1><p>默认情况下，容器可以主动访问到外部网络的连接，但是外部网络无法访问到容器。</p><h2 id="容器访问外部实现" tabindex="-1"><a class="header-anchor" href="#容器访问外部实现"><span>容器访问外部实现</span></a></h2><p>容器所有到外部网络的连接，源地址都会被 NAT 成本地系统的 IP 地址。这是使用 <code>iptables</code> 的源地址伪装操作实现的。</p><p>查看主机的 NAT 规则。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> iptables <span class="token parameter variable">-t</span> nat <span class="token parameter variable">-nL</span>
<span class="token punctuation">..</span>.
Chain POSTROUTING <span class="token punctuation">(</span>policy ACCEPT<span class="token punctuation">)</span>
target     prot opt <span class="token builtin class-name">source</span>               destination
MASQUERADE  all  --  <span class="token number">172.17</span>.0.0/16       <span class="token operator">!</span><span class="token number">172.17</span>.0.0/16
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，上述规则将所有源地址在 <code>172.17.0.0/16</code> 网段，目标地址为其他网段（外部网络）的流量动态伪装为从系统网卡发出。MASQUERADE 跟传统 SNAT 的好处是它能动态从网卡获取地址。</p><h2 id="外部访问容器实现" tabindex="-1"><a class="header-anchor" href="#外部访问容器实现"><span>外部访问容器实现</span></a></h2><p>容器允许外部访问，可以在 <code>docker run</code> 时候通过 <code>-p</code> 或 <code>-P</code> 参数来启用。</p><p>不管用那种办法，其实也是在本地的 <code>iptable</code> 的 nat 表中添加相应的规则。</p><p>使用 <code>-P</code> 时：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ iptables <span class="token parameter variable">-t</span> nat <span class="token parameter variable">-nL</span>
<span class="token punctuation">..</span>.
Chain DOCKER <span class="token punctuation">(</span><span class="token number">2</span> references<span class="token punctuation">)</span>
target     prot opt <span class="token builtin class-name">source</span>               destination
DNAT       tcp  --  <span class="token number">0.0</span>.0.0/0            <span class="token number">0.0</span>.0.0/0            tcp dpt:49153 to:172.17.0.2:80
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>-p 80:80</code> 时：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ iptables <span class="token parameter variable">-t</span> nat <span class="token parameter variable">-nL</span>
Chain DOCKER <span class="token punctuation">(</span><span class="token number">2</span> references<span class="token punctuation">)</span>
target     prot opt <span class="token builtin class-name">source</span>               destination
DNAT       tcp  --  <span class="token number">0.0</span>.0.0/0            <span class="token number">0.0</span>.0.0/0            tcp dpt:80 to:172.17.0.2:80
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：</p><ul><li><p>这里的规则映射了 <code>0.0.0.0</code>，意味着将接受主机来自所有接口的流量。用户可以通过 <code>-p IP:host_port:container_port</code> 或 <code>-p IP::port</code> 来指定允许访问容器的主机上的 IP、接口等，以制定更严格的规则。</p></li><li><p>如果希望永久绑定到某个固定的 IP 地址，可以在 Docker 配置文件 <code>/etc/docker/daemon.json</code> 中添加如下内容。</p></li></ul><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;ip&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.0.0.0&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17)]))}const r=n(p,[["render",i],["__file","port_mapping.html.vue"]]),d=JSON.parse('{"path":"/index/Docker/advanced_network/port_mapping.html","title":"映射容器端口到宿主主机的实现","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"容器访问外部实现","slug":"容器访问外部实现","link":"#容器访问外部实现","children":[]},{"level":2,"title":"外部访问容器实现","slug":"外部访问容器实现","link":"#外部访问容器实现","children":[]}],"git":{"createdTime":1731129855000,"updatedTime":1731129855000,"contributors":[{"name":"dkyg666","email":"43946866+dkyg666@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.39,"words":417},"filePathRelative":"index/Docker/advanced_network/port_mapping.md","localizedDate":"2024年11月9日","excerpt":"\\n<p>默认情况下，容器可以主动访问到外部网络的连接，但是外部网络无法访问到容器。</p>\\n<h2>容器访问外部实现</h2>\\n<p>容器所有到外部网络的连接，源地址都会被 NAT 成本地系统的 IP 地址。这是使用 <code>iptables</code> 的源地址伪装操作实现的。</p>\\n<p>查看主机的 NAT 规则。</p>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code>$ <span class=\\"token function\\">sudo</span> iptables <span class=\\"token parameter variable\\">-t</span> nat <span class=\\"token parameter variable\\">-nL</span>\\n<span class=\\"token punctuation\\">..</span>.\\nChain POSTROUTING <span class=\\"token punctuation\\">(</span>policy ACCEPT<span class=\\"token punctuation\\">)</span>\\ntarget     prot opt <span class=\\"token builtin class-name\\">source</span>               destination\\nMASQUERADE  all  --  <span class=\\"token number\\">172.17</span>.0.0/16       <span class=\\"token operator\\">!</span><span class=\\"token number\\">172.17</span>.0.0/16\\n<span class=\\"token punctuation\\">..</span>.\\n</code></pre></div>"}');export{r as comp,d as data};
