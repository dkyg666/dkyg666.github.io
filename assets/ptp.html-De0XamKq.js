import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,e,o as p}from"./app-B_h_uIeu.js";const t={};function c(o,n){return p(),a("div",null,n[0]||(n[0]=[e(`<h1 id="示例-创建一个点到点连接" tabindex="-1"><a class="header-anchor" href="#示例-创建一个点到点连接"><span>示例：创建一个点到点连接</span></a></h1><p>默认情况下，Docker 会将所有容器连接到由 <code>docker0</code> 提供的虚拟子网中。</p><p>用户有时候需要两个容器之间可以直连通信，而不用通过主机网桥进行桥接。</p><p>解决办法很简单：创建一对 <code>peer</code> 接口，分别放到两个容器中，配置成点到点链路类型即可。</p><p>首先启动 2 个容器：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> run <span class="token parameter variable">-i</span> <span class="token parameter variable">-t</span> <span class="token parameter variable">--rm</span> <span class="token parameter variable">--net</span><span class="token operator">=</span>none base /bin/bash
root@1f1f4c1f931a:/<span class="token comment">#</span>
$ <span class="token function">docker</span> run <span class="token parameter variable">-i</span> <span class="token parameter variable">-t</span> <span class="token parameter variable">--rm</span> <span class="token parameter variable">--net</span><span class="token operator">=</span>none base /bin/bash
root@12e343489d2f:/<span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>找到进程号，然后创建网络命名空间的跟踪文件。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> inspect <span class="token parameter variable">-f</span> <span class="token string">&#39;{{.State.Pid}}&#39;</span> 1f1f4c1f931a
<span class="token number">2989</span>
$ <span class="token function">docker</span> inspect <span class="token parameter variable">-f</span> <span class="token string">&#39;{{.State.Pid}}&#39;</span> 12e343489d2f
<span class="token number">3004</span>
$ <span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /var/run/netns
$ <span class="token function">sudo</span> <span class="token function">ln</span> <span class="token parameter variable">-s</span> /proc/2989/ns/net /var/run/netns/2989
$ <span class="token function">sudo</span> <span class="token function">ln</span> <span class="token parameter variable">-s</span> /proc/3004/ns/net /var/run/netns/3004
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建一对 <code>peer</code> 接口，然后配置路由</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">ip</span> <span class="token function">link</span> <span class="token function">add</span> A <span class="token builtin class-name">type</span> veth peer name B

$ <span class="token function">sudo</span> <span class="token function">ip</span> <span class="token function">link</span> <span class="token builtin class-name">set</span> A netns <span class="token number">2989</span>
$ <span class="token function">sudo</span> <span class="token function">ip</span> netns <span class="token builtin class-name">exec</span> <span class="token number">2989</span> <span class="token function">ip</span> addr <span class="token function">add</span> <span class="token number">10.1</span>.1.1/32 dev A
$ <span class="token function">sudo</span> <span class="token function">ip</span> netns <span class="token builtin class-name">exec</span> <span class="token number">2989</span> <span class="token function">ip</span> <span class="token function">link</span> <span class="token builtin class-name">set</span> A up
$ <span class="token function">sudo</span> <span class="token function">ip</span> netns <span class="token builtin class-name">exec</span> <span class="token number">2989</span> <span class="token function">ip</span> route <span class="token function">add</span> <span class="token number">10.1</span>.1.2/32 dev A

$ <span class="token function">sudo</span> <span class="token function">ip</span> <span class="token function">link</span> <span class="token builtin class-name">set</span> B netns <span class="token number">3004</span>
$ <span class="token function">sudo</span> <span class="token function">ip</span> netns <span class="token builtin class-name">exec</span> <span class="token number">3004</span> <span class="token function">ip</span> addr <span class="token function">add</span> <span class="token number">10.1</span>.1.2/32 dev B
$ <span class="token function">sudo</span> <span class="token function">ip</span> netns <span class="token builtin class-name">exec</span> <span class="token number">3004</span> <span class="token function">ip</span> <span class="token function">link</span> <span class="token builtin class-name">set</span> B up
$ <span class="token function">sudo</span> <span class="token function">ip</span> netns <span class="token builtin class-name">exec</span> <span class="token number">3004</span> <span class="token function">ip</span> route <span class="token function">add</span> <span class="token number">10.1</span>.1.1/32 dev B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在这 2 个容器就可以相互 ping 通，并成功建立连接。点到点链路不需要子网和子网掩码。</p><p>此外，也可以不指定 <code>--net=none</code> 来创建点到点链路。这样容器还可以通过原先的网络来通信。</p><p>利用类似的办法，可以创建一个只跟主机通信的容器。但是一般情况下，更推荐使用 <code>--icc=false</code> 来关闭容器之间的通信。</p>`,13)]))}const r=s(t,[["render",c],["__file","ptp.html.vue"]]),d=JSON.parse('{"path":"/index/Docker/advanced_network/ptp.html","title":"示例：创建一个点到点连接","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"createdTime":1731129855000,"updatedTime":1731129855000,"contributors":[{"name":"dkyg666","email":"43946866+dkyg666@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.33,"words":400},"filePathRelative":"index/Docker/advanced_network/ptp.md","localizedDate":"2024年11月9日","excerpt":"\\n<p>默认情况下，Docker 会将所有容器连接到由 <code>docker0</code> 提供的虚拟子网中。</p>\\n<p>用户有时候需要两个容器之间可以直连通信，而不用通过主机网桥进行桥接。</p>\\n<p>解决办法很简单：创建一对 <code>peer</code> 接口，分别放到两个容器中，配置成点到点链路类型即可。</p>\\n<p>首先启动 2 个容器：</p>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code>$ <span class=\\"token function\\">docker</span> run <span class=\\"token parameter variable\\">-i</span> <span class=\\"token parameter variable\\">-t</span> <span class=\\"token parameter variable\\">--rm</span> <span class=\\"token parameter variable\\">--net</span><span class=\\"token operator\\">=</span>none base /bin/bash\\nroot@1f1f4c1f931a:/<span class=\\"token comment\\">#</span>\\n$ <span class=\\"token function\\">docker</span> run <span class=\\"token parameter variable\\">-i</span> <span class=\\"token parameter variable\\">-t</span> <span class=\\"token parameter variable\\">--rm</span> <span class=\\"token parameter variable\\">--net</span><span class=\\"token operator\\">=</span>none base /bin/bash\\nroot@12e343489d2f:/<span class=\\"token comment\\">#</span>\\n</code></pre></div>"}');export{r as comp,d as data};