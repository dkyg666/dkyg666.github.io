import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,e as o,b as e,d as s,a,w as c,r as i,o as p}from"./app-dX96qGh5.js";const u={},k={href:"https://getfedora.org/",target:"_blank",rel:"noopener noreferrer"},m={href:"http://test.docker.com",target:"_blank",rel:"noopener noreferrer"},v={href:"https://en.wikipedia.org/wiki/Unix_domain_socket",target:"_blank",rel:"noopener noreferrer"},b={href:"https://docs.docker.com/install/linux/docker-ce/fedora",target:"_blank",rel:"noopener noreferrer"};function h(f,n){const l=i("ExternalLinkIcon"),d=i("RouteLink");return p(),t("div",null,[n[26]||(n[26]=o('<h1 id="fedora-安装-docker" tabindex="-1"><a class="header-anchor" href="#fedora-安装-docker"><span>Fedora 安装 Docker</span></a></h1><blockquote><p>警告：切勿在没有配置 Docker dnf 源的情况下直接使用 dnf 命令安装 Docker.</p></blockquote><h2 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作"><span>准备工作</span></a></h2><h3 id="系统要求" tabindex="-1"><a class="header-anchor" href="#系统要求"><span>系统要求</span></a></h3>',4)),e("p",null,[n[1]||(n[1]=s("Docker 支持以下版本的 ")),e("a",k,[n[0]||(n[0]=s("Fedora")),a(l)]),n[2]||(n[2]=s(" 操作系统："))]),n[27]||(n[27]=o(`<ul><li>33</li><li>34</li></ul><h3 id="卸载旧版本" tabindex="-1"><a class="header-anchor" href="#卸载旧版本"><span>卸载旧版本</span></a></h3><p>旧版本的 Docker 称为 <code>docker</code> 或者 <code>docker-engine</code>，使用以下命令卸载旧版本：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> dnf remove <span class="token function">docker</span> <span class="token punctuation">\\</span>
                  docker-client <span class="token punctuation">\\</span>
                  docker-client-latest <span class="token punctuation">\\</span>
                  docker-common <span class="token punctuation">\\</span>
                  docker-latest <span class="token punctuation">\\</span>
                  docker-latest-logrotate <span class="token punctuation">\\</span>
                  docker-logrotate <span class="token punctuation">\\</span>
                  docker-selinux <span class="token punctuation">\\</span>
                  docker-engine-selinux <span class="token punctuation">\\</span>
                  docker-engine
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用-dnf-安装" tabindex="-1"><a class="header-anchor" href="#使用-dnf-安装"><span>使用 dnf 安装</span></a></h2><p>执行以下命令安装依赖包：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> dnf <span class="token parameter variable">-y</span> <span class="token function">install</span> dnf-plugins-core
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>鉴于国内网络问题，强烈建议使用国内源，官方源请在注释中查看。</p><p>执行下面的命令添加 <code>dnf</code> 软件源：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> dnf config-manager <span class="token punctuation">\\</span>
    --add-repo <span class="token punctuation">\\</span>
    https://mirrors.aliyun.com/docker-ce/linux/fedora/docker-ce.repo

$ <span class="token function">sudo</span> <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/download.docker.com/mirrors.aliyun.com\\/docker-ce/g&#39;</span> /etc/yum.repos.d/docker-ce.repo

<span class="token comment"># 官方源</span>
<span class="token comment"># $ sudo dnf config-manager \\</span>
<span class="token comment">#    --add-repo \\</span>
<span class="token comment">#    https://download.docker.com/linux/fedora/docker-ce.repo</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果需要测试版本的 Docker 请使用以下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> dnf config-manager --set-enabled docker-ce-test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>你也可以禁用测试版本的 Docker</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> dnf config-manager --set-disabled docker-ce-test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="安装-docker" tabindex="-1"><a class="header-anchor" href="#安装-docker"><span>安装 Docker</span></a></h3><p>更新 <code>dnf</code> 软件源缓存，并安装 <code>docker-ce</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> dnf update
$ <span class="token function">sudo</span> dnf <span class="token function">install</span> docker-ce docker-ce-cli containerd.io
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>你也可以使用以下命令安装指定版本的 Docker</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ dnf list docker-ce  <span class="token parameter variable">--showduplicates</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-r</span>

docker-ce.x86_64          <span class="token number">18.06</span>.1.ce-3.fc28                     docker-ce-stable

$ <span class="token function">sudo</span> dnf <span class="token parameter variable">-y</span> <span class="token function">install</span> docker-ce-18.06.1.ce
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用脚本自动安装" tabindex="-1"><a class="header-anchor" href="#使用脚本自动安装"><span>使用脚本自动安装</span></a></h2><p>在测试或开发环境中 Docker 官方为了简化安装流程，提供了一套便捷的安装脚本，Debian 系统上可以使用这套脚本安装，另外可以通过 <code>--mirror</code> 选项使用国内源进行安装：</p>`,21)),e("blockquote",null,[e("p",null,[n[4]||(n[4]=s("若你想安装测试版的 Docker, 请从 ")),e("a",m,[n[3]||(n[3]=s("test.docker.com")),a(l)]),n[5]||(n[5]=s(" 获取脚本"))])]),n[28]||(n[28]=o(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># $ curl -fsSL test.docker.com -o get-docker.sh</span>
$ <span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> get.docker.com <span class="token parameter variable">-o</span> get-docker.sh
$ <span class="token function">sudo</span> <span class="token function">sh</span> get-docker.sh <span class="token parameter variable">--mirror</span> Aliyun
<span class="token comment"># $ sudo sh get-docker.sh --mirror AzureChinaCloud</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行这个命令后，脚本就会自动的将一切准备工作做好，并且把 Docker 最新稳定(stable)版本安装在系统中。</p><h2 id="启动-docker" tabindex="-1"><a class="header-anchor" href="#启动-docker"><span>启动 Docker</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>
$ <span class="token function">sudo</span> systemctl start <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="建立-docker-用户组" tabindex="-1"><a class="header-anchor" href="#建立-docker-用户组"><span>建立 docker 用户组</span></a></h2>`,5)),e("p",null,[n[7]||(n[7]=s("默认情况下，")),n[8]||(n[8]=e("code",null,"docker",-1)),n[9]||(n[9]=s(" 命令会使用 ")),e("a",v,[n[6]||(n[6]=s("Unix socket")),a(l)]),n[10]||(n[10]=s(" 与 Docker 引擎通讯。而只有 ")),n[11]||(n[11]=e("code",null,"root",-1)),n[12]||(n[12]=s(" 用户和 ")),n[13]||(n[13]=e("code",null,"docker",-1)),n[14]||(n[14]=s(" 组的用户才可以访问 Docker 引擎的 Unix socket。出于安全考虑，一般 Linux 系统上不会直接使用 ")),n[15]||(n[15]=e("code",null,"root",-1)),n[16]||(n[16]=s(" 用户。因此，更好地做法是将需要使用 ")),n[17]||(n[17]=e("code",null,"docker",-1)),n[18]||(n[18]=s(" 的用户加入 ")),n[19]||(n[19]=e("code",null,"docker",-1)),n[20]||(n[20]=s(" 用户组。"))]),n[29]||(n[29]=o(`<p>建立 <code>docker</code> 组：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">groupadd</span> <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将当前用户加入 <code>docker</code> 组：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">usermod</span> <span class="token parameter variable">-aG</span> <span class="token function">docker</span> <span class="token environment constant">$USER</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>退出当前终端并重新登录，进行如下测试。</p><h2 id="测试-docker-是否安装正确" tabindex="-1"><a class="header-anchor" href="#测试-docker-是否安装正确"><span>测试 Docker 是否安装正确</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> run <span class="token parameter variable">--rm</span> hello-world

Unable to <span class="token function">find</span> image <span class="token string">&#39;hello-world:latest&#39;</span> locally
latest: Pulling from library/hello-world
b8dfde127a29: Pull complete
Digest: sha256:308866a43596e83578c7dfa15e27a73011bdd402185a84c5cd7f32a88b501a24
Status: Downloaded newer image <span class="token keyword">for</span> hello-world:latest

Hello from Docker<span class="token operator">!</span>
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 <span class="token number">1</span>. The Docker client contacted the Docker daemon.
 <span class="token number">2</span>. The Docker daemon pulled the <span class="token string">&quot;hello-world&quot;</span> image from the Docker Hub.
    <span class="token punctuation">(</span>amd64<span class="token punctuation">)</span>
 <span class="token number">3</span>. The Docker daemon created a new container from that image <span class="token function">which</span> runs the
    executable that produces the output you are currently reading.
 <span class="token number">4</span>. The Docker daemon streamed that output to the Docker client, <span class="token function">which</span> sent it
    to your terminal.

To try something <span class="token function">more</span> ambitious, you can run an Ubuntu container with:
 $ <span class="token function">docker</span> run <span class="token parameter variable">-it</span> ubuntu <span class="token function">bash</span>

Share images, automate workflows, and <span class="token function">more</span> with a <span class="token function">free</span> Docker ID:
 https://hub.docker.com/

For <span class="token function">more</span> examples and ideas, visit:
 https://docs.docker.com/get-started/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>若能正常输出以上信息，则说明安装成功。</p><h2 id="镜像加速" tabindex="-1"><a class="header-anchor" href="#镜像加速"><span>镜像加速</span></a></h2>`,9)),e("p",null,[n[22]||(n[22]=s("如果在使用过程中发现拉取 Docker 镜像十分缓慢，可以配置 Docker ")),a(d,{to:"/index/Docker/install/mirror.html"},{default:c(()=>n[21]||(n[21]=[s("国内镜像加速")])),_:1}),n[23]||(n[23]=s("。"))]),n[30]||(n[30]=e("h2",{id:"参考文档",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参考文档"},[e("span",null,"参考文档")])],-1)),e("ul",null,[e("li",null,[e("a",b,[n[24]||(n[24]=s("Docker 官方 Fedora 安装文档")),a(l)]),n[25]||(n[25]=s("。"))])])])}const D=r(u,[["render",h],["__file","fedora.html.vue"]]),w=JSON.parse('{"path":"/index/Docker/install/fedora.html","title":"Fedora 安装 Docker","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"准备工作","slug":"准备工作","link":"#准备工作","children":[{"level":3,"title":"系统要求","slug":"系统要求","link":"#系统要求","children":[]},{"level":3,"title":"卸载旧版本","slug":"卸载旧版本","link":"#卸载旧版本","children":[]}]},{"level":2,"title":"使用 dnf 安装","slug":"使用-dnf-安装","link":"#使用-dnf-安装","children":[{"level":3,"title":"安装 Docker","slug":"安装-docker","link":"#安装-docker","children":[]}]},{"level":2,"title":"使用脚本自动安装","slug":"使用脚本自动安装","link":"#使用脚本自动安装","children":[]},{"level":2,"title":"启动 Docker","slug":"启动-docker","link":"#启动-docker","children":[]},{"level":2,"title":"建立 docker 用户组","slug":"建立-docker-用户组","link":"#建立-docker-用户组","children":[]},{"level":2,"title":"测试 Docker 是否安装正确","slug":"测试-docker-是否安装正确","link":"#测试-docker-是否安装正确","children":[]},{"level":2,"title":"镜像加速","slug":"镜像加速","link":"#镜像加速","children":[]},{"level":2,"title":"参考文档","slug":"参考文档","link":"#参考文档","children":[]}],"git":{"createdTime":1731129855000,"updatedTime":1731129855000,"contributors":[{"name":"dkyg666","email":"43946866+dkyg666@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.85,"words":855},"filePathRelative":"index/Docker/install/fedora.md","localizedDate":"2024年11月9日","excerpt":"\\n<blockquote>\\n<p>警告：切勿在没有配置 Docker dnf 源的情况下直接使用 dnf 命令安装 Docker.</p>\\n</blockquote>\\n<h2>准备工作</h2>\\n<h3>系统要求</h3>\\n<p>Docker 支持以下版本的 <a href=\\"https://getfedora.org/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Fedora</a> 操作系统：</p>\\n<ul>\\n<li>33</li>\\n<li>34</li>\\n</ul>\\n<h3>卸载旧版本</h3>\\n<p>旧版本的 Docker 称为 <code>docker</code> 或者 <code>docker-engine</code>，使用以下命令卸载旧版本：</p>"}');export{D as comp,w as data};
