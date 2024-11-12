import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,b as n,d as e,a as t,e as i,o as r,r as p}from"./app-dX96qGh5.js";const c={},d={href:"https://getfedora.org/coreos/download/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://docs.fedoraproject.org/en-US/fedora-coreos/bare-metal/",target:"_blank",rel:"noopener noreferrer"};function k(m,a){const s=p("ExternalLinkIcon");return r(),o("div",null,[a[6]||(a[6]=n("h1",{id:"安装-fedora-coreos",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安装-fedora-coreos"},[n("span",null,"安装 Fedora CoreOS")])],-1)),a[7]||(a[7]=n("h2",{id:"下载-iso",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#下载-iso"},[n("span",null,"下载 ISO")])],-1)),n("p",null,[a[1]||(a[1]=e("在 ")),n("a",d,[a[0]||(a[0]=e("下载页面")),t(s)]),a[2]||(a[2]=e()),a[3]||(a[3]=n("code",null,"Bare Metal & Virtualized",-1)),a[4]||(a[4]=e(" 标签页下载 ISO。"))]),a[8]||(a[8]=i(`<h2 id="编写-fcc" tabindex="-1"><a class="header-anchor" href="#编写-fcc"><span>编写 FCC</span></a></h2><p>FCC 是 Fedora CoreOS Configuration （Fedora CoreOS 配置）的简称。</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token comment"># example.fcc</span>
<span class="token key atrule">variant</span><span class="token punctuation">:</span> fcos
<span class="token key atrule">version</span><span class="token punctuation">:</span> 1.0.0
<span class="token key atrule">passwd</span><span class="token punctuation">:</span>
  <span class="token key atrule">users</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> core
      <span class="token key atrule">ssh_authorized_keys</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> ssh<span class="token punctuation">-</span>rsa AAAA<span class="token punctuation">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将 <code>ssh-rsa AAAA...</code> 替换为自己的 SSH 公钥（位于 <code>~/.ssh/id_rsa.pub</code>）。</p><h2 id="转换-fcc-为-ignition" tabindex="-1"><a class="header-anchor" href="#转换-fcc-为-ignition"><span>转换 FCC 为 Ignition</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> run <span class="token parameter variable">-i</span> <span class="token parameter variable">--rm</span> quay.io/coreos/fcct:v0.5.0 <span class="token parameter variable">--pretty</span> <span class="token parameter variable">--strict</span> <span class="token operator">&lt;</span> example.fcc <span class="token operator">&gt;</span> example.ign
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="挂载-iso-启动虚拟机并安装" tabindex="-1"><a class="header-anchor" href="#挂载-iso-启动虚拟机并安装"><span>挂载 ISO 启动虚拟机并安装</span></a></h2><blockquote><p>虚拟机需要分配 3GB 以上内存，否则会无法启动。</p></blockquote><p>在虚拟机终端执行以下命令安装：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> coreos-installer <span class="token function">install</span> /dev/sda --ignition-file example.ign
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装之后重新启动即可使用。</p><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">ssh</span> core@虚拟机IP

$ <span class="token function">docker</span> <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接"><span>参考链接</span></a></h2>`,14)),n("ul",null,[n("li",null,[n("a",u,[a[5]||(a[5]=e("官方文档")),t(s)])])])])}const g=l(c,[["render",k],["__file","install.html.vue"]]),f=JSON.parse('{"path":"/index/Docker/coreos/install.html","title":"安装 Fedora CoreOS","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"下载 ISO","slug":"下载-iso","link":"#下载-iso","children":[]},{"level":2,"title":"编写 FCC","slug":"编写-fcc","link":"#编写-fcc","children":[]},{"level":2,"title":"转换 FCC 为 Ignition","slug":"转换-fcc-为-ignition","link":"#转换-fcc-为-ignition","children":[]},{"level":2,"title":"挂载 ISO 启动虚拟机并安装","slug":"挂载-iso-启动虚拟机并安装","link":"#挂载-iso-启动虚拟机并安装","children":[]},{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[]},{"level":2,"title":"参考链接","slug":"参考链接","link":"#参考链接","children":[]}],"git":{"createdTime":1731129855000,"updatedTime":1731129855000,"contributors":[{"name":"dkyg666","email":"43946866+dkyg666@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":0.58,"words":173},"filePathRelative":"index/Docker/coreos/install.md","localizedDate":"2024年11月9日","excerpt":"\\n<h2>下载 ISO</h2>\\n<p>在 <a href=\\"https://getfedora.org/coreos/download/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">下载页面</a> <code>Bare Metal &amp; Virtualized</code> 标签页下载 ISO。</p>\\n<h2>编写 FCC</h2>\\n<p>FCC 是 Fedora CoreOS Configuration （Fedora CoreOS 配置）的简称。</p>\\n<div class=\\"language-yaml\\" data-ext=\\"yml\\" data-title=\\"yml\\"><pre class=\\"language-yaml\\"><code><span class=\\"token comment\\"># example.fcc</span>\\n<span class=\\"token key atrule\\">variant</span><span class=\\"token punctuation\\">:</span> fcos\\n<span class=\\"token key atrule\\">version</span><span class=\\"token punctuation\\">:</span> 1.0.0\\n<span class=\\"token key atrule\\">passwd</span><span class=\\"token punctuation\\">:</span>\\n  <span class=\\"token key atrule\\">users</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token punctuation\\">-</span> <span class=\\"token key atrule\\">name</span><span class=\\"token punctuation\\">:</span> core\\n      <span class=\\"token key atrule\\">ssh_authorized_keys</span><span class=\\"token punctuation\\">:</span>\\n        <span class=\\"token punctuation\\">-</span> ssh<span class=\\"token punctuation\\">-</span>rsa AAAA<span class=\\"token punctuation\\">...</span>\\n</code></pre></div>"}');export{g as comp,f as data};
