import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,b as a,d as s,a as i,w as r,e as l,r as d,o as c}from"./app-B_h_uIeu.js";const p={};function m(u,n){const e=d("RouteLink");return c(),o("div",null,[n[11]||(n[11]=a("h1",{id:"创建-swarm-集群",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#创建-swarm-集群"},[a("span",null,"创建 Swarm 集群")])],-1)),a("p",null,[n[1]||(n[1]=s("阅读 ")),i(e,{to:"/index/Docker/swarm_mode/overview.html"},{default:r(()=>n[0]||(n[0]=[s("基本概念")])),_:1}),n[2]||(n[2]=s(" 一节我们知道 ")),n[3]||(n[3]=a("code",null,"Swarm",-1)),n[4]||(n[4]=s(" 集群由 ")),n[5]||(n[5]=a("strong",null,"管理节点",-1)),n[6]||(n[6]=s(" 和 ")),n[7]||(n[7]=a("strong",null,"工作节点",-1)),n[8]||(n[8]=s(" 组成。本节我们来创建一个包含一个管理节点和两个工作节点的最小 ")),n[9]||(n[9]=a("code",null,"Swarm",-1)),n[10]||(n[10]=s(" 集群。"))]),n[12]||(n[12]=l(`<h2 id="初始化集群" tabindex="-1"><a class="header-anchor" href="#初始化集群"><span>初始化集群</span></a></h2><p>在已经安装好 Docker 的主机上执行如下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> swarm init --advertise-addr <span class="token number">192.168</span>.99.100
Swarm initialized: current <span class="token function">node</span> <span class="token punctuation">(</span>dxn1zf6l61qsb1josjja83ngz<span class="token punctuation">)</span> is now a manager.

To <span class="token function">add</span> a worker to this swarm, run the following command:

    <span class="token function">docker</span> swarm <span class="token function">join</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">--token</span> SWMTKN-1-49nj1cmql0jkz5s954yi3oex3nedyz0fb0xx14ie39trti4wxv-8vxv8rssmk743ojnwacrr2e7c <span class="token punctuation">\\</span>
    <span class="token number">192.168</span>.99.100:2377

To <span class="token function">add</span> a manager to this swarm, run <span class="token string">&#39;docker swarm join-token manager&#39;</span> and follow the instructions.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你的 Docker 主机有多个网卡，拥有多个 IP，必须使用 <code>--advertise-addr</code> 指定 IP。</p><blockquote><p>执行 <code>docker swarm init</code> 命令的节点自动成为管理节点。</p></blockquote><h2 id="增加工作节点" tabindex="-1"><a class="header-anchor" href="#增加工作节点"><span>增加工作节点</span></a></h2><p>上一步我们初始化了一个 <code>Swarm</code> 集群，拥有了一个管理节点，下面我们继续在两个 Docker 主机中分别执行如下命令，创建工作节点并加入到集群中。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> swarm <span class="token function">join</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">--token</span> SWMTKN-1-49nj1cmql0jkz5s954yi3oex3nedyz0fb0xx14ie39trti4wxv-8vxv8rssmk743ojnwacrr2e7c <span class="token punctuation">\\</span>
    <span class="token number">192.168</span>.99.100:2377

This <span class="token function">node</span> joined a swarm as a worker.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看集群" tabindex="-1"><a class="header-anchor" href="#查看集群"><span>查看集群</span></a></h2><p>经过上边的两步，我们已经拥有了一个最小的 <code>Swarm</code> 集群，包含一个管理节点和两个工作节点。</p><p>在管理节点使用 <code>docker node ls</code> 查看集群。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> <span class="token function">node</span> <span class="token function">ls</span>
ID                           <span class="token environment constant">HOSTNAME</span>  STATUS  AVAILABILITY  MANAGER STATUS
03g1y59jwfg7cf99w4lt0f662    worker2   Ready   Active
9j68exjopxe7wfl6yuxml7a7j    worker1   Ready   Active
dxn1zf6l61qsb1josjja83ngz *  manager   Ready   Active        Leader
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12))])}const b=t(p,[["render",m],["__file","create.html.vue"]]),w=JSON.parse(`{"path":"/index/Docker/swarm_mode/create.html","title":"创建 Swarm 集群","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"初始化集群","slug":"初始化集群","link":"#初始化集群","children":[]},{"level":2,"title":"增加工作节点","slug":"增加工作节点","link":"#增加工作节点","children":[]},{"level":2,"title":"查看集群","slug":"查看集群","link":"#查看集群","children":[]}],"git":{"createdTime":1731129855000,"updatedTime":1731129855000,"contributors":[{"name":"dkyg666","email":"43946866+dkyg666@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.14,"words":343},"filePathRelative":"index/Docker/swarm_mode/create.md","localizedDate":"2024年11月9日","excerpt":"\\n<p>阅读 <a href=\\"/index/Docker/swarm_mode/overview.html\\" target=\\"_blank\\">基本概念</a> 一节我们知道 <code>Swarm</code> 集群由 <strong>管理节点</strong> 和 <strong>工作节点</strong> 组成。本节我们来创建一个包含一个管理节点和两个工作节点的最小 <code>Swarm</code> 集群。</p>\\n<h2>初始化集群</h2>\\n<p>在已经安装好 Docker 的主机上执行如下命令：</p>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code>$ <span class=\\"token function\\">docker</span> swarm init --advertise-addr <span class=\\"token number\\">192.168</span>.99.100\\nSwarm initialized: current <span class=\\"token function\\">node</span> <span class=\\"token punctuation\\">(</span>dxn1zf6l61qsb1josjja83ngz<span class=\\"token punctuation\\">)</span> is now a manager.\\n\\nTo <span class=\\"token function\\">add</span> a worker to this swarm, run the following command:\\n\\n    <span class=\\"token function\\">docker</span> swarm <span class=\\"token function\\">join</span> <span class=\\"token punctuation\\">\\\\</span>\\n    <span class=\\"token parameter variable\\">--token</span> SWMTKN-1-49nj1cmql0jkz5s954yi3oex3nedyz0fb0xx14ie39trti4wxv-8vxv8rssmk743ojnwacrr2e7c <span class=\\"token punctuation\\">\\\\</span>\\n    <span class=\\"token number\\">192.168</span>.99.100:2377\\n\\nTo <span class=\\"token function\\">add</span> a manager to this swarm, run <span class=\\"token string\\">'docker swarm join-token manager'</span> and follow the instructions.\\n</code></pre></div>"}`);export{b as comp,w as data};