import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,e as l,b as e,d as s,a as t,o as u,r as c}from"./app-dX96qGh5.js";const p="/assets/debian-logo-D3pvZkJx.png",d="/assets/ubuntu-logo-DtCwA609.jpg",r={},b={href:"https://www.debian.org/",target:"_blank",rel:"noopener noreferrer"},m={href:"http://neuro.debian.net/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/Debian",target:"_blank",rel:"noopener noreferrer"},v={href:"https://hub.docker.com/_/debian/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/tianon/docker-brew-debian/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://ubuntu.com",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/ubuntu",target:"_blank",rel:"noopener noreferrer"},D={href:"https://hub.docker.com/_/ubuntu/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://github.com/tianon/docker-brew-ubuntu-core",target:"_blank",rel:"noopener noreferrer"};function U(w,n){const a=c("ExternalLinkIcon");return u(),o("div",null,[n[27]||(n[27]=l('<h1 id="debian-ubuntu" tabindex="-1"><a class="header-anchor" href="#debian-ubuntu"><span>Debian/Ubuntu</span></a></h1><p><code>Debian</code> 和 <code>Ubuntu</code> 都是目前较为流行的 <strong>Debian 系</strong> 的服务器操作系统，十分适合研发场景。<code>Docker Hub</code> 上提供了官方镜像，国内各大容器云服务也基本都提供了相应的支持。</p><h2 id="debian-系统简介" tabindex="-1"><a class="header-anchor" href="#debian-系统简介"><span>Debian 系统简介</span></a></h2><figure><img src="'+p+`" alt="Debian 操作系统" tabindex="0" loading="lazy"><figcaption>Debian 操作系统</figcaption></figure><p><code>Debian</code> 是由 <code>GPL</code> 和其他自由软件许可协议授权的自由软件组成的操作系统，由 <strong>Debian 计划（Debian Project）</strong> 组织维护。<strong>Debian 计划</strong> 是一个独立的、分散的组织，由 <code>3000</code> 人志愿者组成，接受世界多个非盈利组织的资金支持，<code>Software in the Public Interest</code> 提供支持并持有商标作为保护机构。<code>Debian</code> 以其坚守 <code>Unix</code> 和自由软件的精神，以及其给予用户的众多选择而闻名。现时 <code>Debian</code> 包括了超过 <code>25,000</code> 个软件包并支持 <code>12</code> 个计算机系统结构。</p><p><code>Debian</code> 作为一个大的系统组织框架，其下有多种不同操作系统核心的分支计划，主要为采用 <code>Linux</code> 核心的 <code>Debian GNU/Linux</code> 系统，其他还有采用 <code>GNU Hurd</code> 核心的 <code>Debian GNU/Hurd</code> 系统、采用 <code>FreeBSD</code> 核心的 <code>Debian GNU/kFreeBSD</code> 系统，以及采用 <code>NetBSD</code> 核心的 <code>Debian GNU/NetBSD</code> 系统。甚至还有利用 <code>Debian</code> 的系统架构和工具，采用 <code>OpenSolaris</code> 核心构建而成的 <code>Nexenta OS</code> 系统。在这些 <code>Debian</code> 系统中，以采用 <code>Linux</code> 核心的 <code>Debian GNU/Linux</code> 最为著名。</p><p>众多的 <code>Linux</code> 发行版，例如 <code>Ubuntu</code>、<code>Knoppix</code> 和 <code>Linspire</code> 及 <code>Xandros</code> 等，都基于 <code>Debian GNU/Linux</code>。</p><h3 id="使用-debian-官方镜像" tabindex="-1"><a class="header-anchor" href="#使用-debian-官方镜像"><span>使用 Debian 官方镜像</span></a></h3><p>官方提供了大家熟知的 <code>debian</code> 镜像以及面向科研领域的 <code>neurodebian</code> 镜像。可以使用 <code>docker run</code> 直接运行 <code>Debian</code> 镜像。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> run <span class="token parameter variable">-it</span> debian <span class="token function">bash</span>
root@668e178d8d69:/<span class="token comment"># cat /etc/issue</span>
Debian GNU/Linux <span class="token number">8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Debian</code> 镜像很适合作为基础镜像，构建自定义镜像。</p><h2 id="ubuntu-系统简介" tabindex="-1"><a class="header-anchor" href="#ubuntu-系统简介"><span>Ubuntu 系统简介</span></a></h2><figure><img src="`+d+`" alt="Ubuntu 操作系统" tabindex="0" loading="lazy"><figcaption>Ubuntu 操作系统</figcaption></figure><p><code>Ubuntu</code> 是一个以桌面应用为主的 <code>GNU/Linux</code> 操作系统，其名称来自非洲南部祖鲁语或豪萨语的“ubuntu”一词（官方译名“友帮拓”，另有“吾帮托”、“乌班图”、“有奔头”或“乌斑兔”等译名）。<code>Ubuntu</code> 意思是“人性”以及“我的存在是因为大家的存在”，是非洲传统的一种价值观，类似华人社会的“仁爱”思想。 <code>Ubuntu</code> 基于 <code>Debian</code> 发行版和 <code>GNOME/Unity</code> 桌面环境，与 <code>Debian</code> 的不同在于它每 6 个月会发布一个新版本，每 2 年推出一个长期支持 <strong>（Long Term Support，LTS）</strong> 版本，一般支持 3 年时间。</p><h3 id="使用-ubuntu-官方镜像" tabindex="-1"><a class="header-anchor" href="#使用-ubuntu-官方镜像"><span>使用 Ubuntu 官方镜像</span></a></h3><p>下面以 <code>ubuntu:18.04</code> 为例，演示如何使用该镜像安装一些常用软件。</p><p>首先使用 <code>-ti</code> 参数启动容器，登录 <code>bash</code>，查看 <code>ubuntu</code> 的发行版本号。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> run <span class="token parameter variable">-ti</span> ubuntu:18.04 /bin/bash
root@7d93de07bf76:/<span class="token comment"># cat /etc/os-release</span>
<span class="token assign-left variable">NAME</span><span class="token operator">=</span><span class="token string">&quot;Ubuntu&quot;</span>
<span class="token assign-left variable">VERSION</span><span class="token operator">=</span><span class="token string">&quot;18.04.1 LTS (Bionic Beaver)&quot;</span>
<span class="token assign-left variable">ID</span><span class="token operator">=</span>ubuntu
<span class="token assign-left variable">ID_LIKE</span><span class="token operator">=</span>debian
<span class="token assign-left variable">PRETTY_NAME</span><span class="token operator">=</span><span class="token string">&quot;Ubuntu 18.04.1 LTS&quot;</span>
<span class="token assign-left variable">VERSION_ID</span><span class="token operator">=</span><span class="token string">&quot;18.04&quot;</span>
<span class="token assign-left variable">HOME_URL</span><span class="token operator">=</span><span class="token string">&quot;https://www.ubuntu.com/&quot;</span>
<span class="token assign-left variable">SUPPORT_URL</span><span class="token operator">=</span><span class="token string">&quot;https://help.ubuntu.com/&quot;</span>
<span class="token assign-left variable">BUG_REPORT_URL</span><span class="token operator">=</span><span class="token string">&quot;https://bugs.launchpad.net/ubuntu/&quot;</span>
<span class="token assign-left variable">PRIVACY_POLICY_URL</span><span class="token operator">=</span><span class="token string">&quot;https://www.ubuntu.com/legal/terms-and-policies/privacy-policy&quot;</span>
<span class="token assign-left variable">VERSION_CODENAME</span><span class="token operator">=</span>bionic
<span class="token assign-left variable">UBUNTU_CODENAME</span><span class="token operator">=</span>bionic
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当试图直接使用 <code>apt-get</code> 安装一个软件的时候，会提示 <code>E: Unable to locate package</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>root@7d93de07bf76:/<span class="token comment"># apt-get install curl</span>
Reading package lists<span class="token punctuation">..</span>. Done
Building dependency tree
Reading state information<span class="token punctuation">..</span>. Done
E: Unable to <span class="token function">locate</span> package <span class="token function">curl</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这并非系统不支持 <code>apt-get</code> 命令。Docker 镜像在制作时为了精简清除了 <code>apt</code> 仓库信息，因此需要先执行 <code>apt-get update</code> 命令来更新仓库信息。更新信息后即可成功通过 <code>apt-get</code> 命令来安装软件。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>root@7d93de07bf76:/<span class="token comment"># apt-get update</span>
Get:1 http://archive.ubuntu.com/ubuntu bionic InRelease <span class="token punctuation">[</span><span class="token number">242</span> kB<span class="token punctuation">]</span>
Get:2 http://security.ubuntu.com/ubuntu bionic-security InRelease <span class="token punctuation">[</span><span class="token number">88.7</span> kB<span class="token punctuation">]</span>
Get:3 http://security.ubuntu.com/ubuntu bionic-security/multiverse amd64 Packages <span class="token punctuation">[</span><span class="token number">7348</span> B<span class="token punctuation">]</span>
Get:4 http://security.ubuntu.com/ubuntu bionic-security/universe amd64 Packages <span class="token punctuation">[</span><span class="token number">823</span> kB<span class="token punctuation">]</span>
Get:5 http://archive.ubuntu.com/ubuntu bionic-updates InRelease <span class="token punctuation">[</span><span class="token number">88.7</span> kB<span class="token punctuation">]</span>
Get:6 http://archive.ubuntu.com/ubuntu bionic-backports InRelease <span class="token punctuation">[</span><span class="token number">74.6</span> kB<span class="token punctuation">]</span>
Get:7 http://archive.ubuntu.com/ubuntu bionic/universe amd64 Packages <span class="token punctuation">[</span><span class="token number">11.3</span> MB<span class="token punctuation">]</span>
Get:8 http://security.ubuntu.com/ubuntu bionic-security/restricted amd64 Packages <span class="token punctuation">[</span><span class="token number">31.0</span> kB<span class="token punctuation">]</span>
Get:9 http://security.ubuntu.com/ubuntu bionic-security/main amd64 Packages <span class="token punctuation">[</span><span class="token number">835</span> kB<span class="token punctuation">]</span>
Get:10 http://archive.ubuntu.com/ubuntu bionic/restricted amd64 Packages <span class="token punctuation">[</span><span class="token number">13.5</span> kB<span class="token punctuation">]</span>
Get:11 http://archive.ubuntu.com/ubuntu bionic/main amd64 Packages <span class="token punctuation">[</span><span class="token number">1344</span> kB<span class="token punctuation">]</span>
Get:12 http://archive.ubuntu.com/ubuntu bionic/multiverse amd64 Packages <span class="token punctuation">[</span><span class="token number">186</span> kB<span class="token punctuation">]</span>
Get:13 http://archive.ubuntu.com/ubuntu bionic-updates/main amd64 Packages <span class="token punctuation">[</span><span class="token number">1127</span> kB<span class="token punctuation">]</span>
Get:14 http://archive.ubuntu.com/ubuntu bionic-updates/universe amd64 Packages <span class="token punctuation">[</span><span class="token number">1350</span> kB<span class="token punctuation">]</span>
Get:15 http://archive.ubuntu.com/ubuntu bionic-updates/multiverse amd64 Packages <span class="token punctuation">[</span><span class="token number">11.4</span> kB<span class="token punctuation">]</span>
Get:16 http://archive.ubuntu.com/ubuntu bionic-updates/restricted amd64 Packages <span class="token punctuation">[</span><span class="token number">44.7</span> kB<span class="token punctuation">]</span>
Get:17 http://archive.ubuntu.com/ubuntu bionic-backports/main amd64 Packages <span class="token punctuation">[</span><span class="token number">2496</span> B<span class="token punctuation">]</span>
Get:18 http://archive.ubuntu.com/ubuntu bionic-backports/universe amd64 Packages <span class="token punctuation">[</span><span class="token number">4252</span> B<span class="token punctuation">]</span>
Fetched <span class="token number">17.6</span> MB <span class="token keyword">in</span> 1min 25s <span class="token punctuation">(</span><span class="token number">207</span> kB/s<span class="token punctuation">)</span>
Reading package lists<span class="token punctuation">..</span>. Done
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>首先，安装 <code>curl</code> 工具。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>root@7d93de07bf76:/<span class="token comment"># apt-get install curl</span>
Reading package lists<span class="token punctuation">..</span>. Done
Building dependency tree
Reading state information<span class="token punctuation">..</span>. Done
The following additional packages will be installed:
  ca-certificates krb5-locales libasn1-8-heimdal libcurl4 libgssapi-krb5-2 libgssapi3-heimdal libhcrypto4-heimdal libheimbase1-heimdal libheimntlm0-heimdal libhx509-5-heimdal
  libk5crypto3 libkeyutils1 libkrb5-26-heimdal libkrb5-3 libkrb5support0 libldap-2.4-2 libldap-common libnghttp2-14 libpsl5 libroken18-heimdal librtmp1 libsasl2-2 libsasl2-modules libsasl2-modules-db libsqlite3-0 libssl1.1 libwind0-heimdal openssl publicsuffix
<span class="token punctuation">..</span>.
root@7d93de07bf76:/<span class="token comment"># curl</span>
curl: try <span class="token string">&#39;curl --help&#39;</span> or <span class="token string">&#39;curl --manual&#39;</span> <span class="token keyword">for</span> <span class="token function">more</span> information
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来，再安装 <code>apache</code> 服务。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>root@7d93de07bf76:/<span class="token comment"># apt-get install -y apache2</span>
Reading package lists<span class="token punctuation">..</span>. Done
Building dependency tree
Reading state information<span class="token punctuation">..</span>. Done
The following additional packages will be installed:
  apache2-bin apache2-data apache2-utils <span class="token function">file</span> libapr1 libaprutil1 libaprutil1-dbd-sqlite3 libaprutil1-ldap libexpat1 libgdbm-compat4 libgdbm5 libicu60 liblua5.2-0 libmagic-mgc libmagic1 libperl5.26 libxml2 mime-support netbase perl perl-modules-5.26 ssl-cert xz-utils
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动这个 <code>apache</code> 服务，然后使用 <code>curl</code> 来测试本地访问。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>root@7d93de07bf76:/<span class="token comment"># service apache2 start</span>
 * Starting web server apache2                                                                                                                               AH00558: apache2: Could not reliably determine the server<span class="token string">&#39;s fully qualified domain name, using 172.17.0.2. Set the &#39;</span>ServerName&#39; directive globally to suppress this message
 *
root@7d93de07bf76:/<span class="token comment"># curl 127.0.0.1</span>

<span class="token operator">&lt;</span><span class="token operator">!</span>DOCTYPE html PUBLIC <span class="token string">&quot;-//W3C//DTD XHTML 1.0 Transitional//EN&quot;</span> <span class="token string">&quot;http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd&quot;</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>html <span class="token assign-left variable">xmlns</span><span class="token operator">=</span><span class="token string">&quot;http://www.w3.org/1999/xhtml&quot;</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">!</span>--
    Modified from the Debian original <span class="token keyword">for</span> Ubuntu
    Last updated: <span class="token number">2016</span>-11-16
    See: https://launchpad.net/bugs/1288690
  --<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>head<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>meta http-equiv<span class="token operator">=</span><span class="token string">&quot;Content-Type&quot;</span> <span class="token assign-left variable">content</span><span class="token operator">=</span><span class="token string">&quot;text/html; charset=UTF-8&quot;</span> /<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>title<span class="token operator">&gt;</span>Apache2 Ubuntu Default Page: It works<span class="token operator">&lt;</span>/title<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>style <span class="token assign-left variable">type</span><span class="token operator">=</span><span class="token string">&quot;text/css&quot;</span> <span class="token assign-left variable">media</span><span class="token operator">=</span><span class="token string">&quot;screen&quot;</span><span class="token operator">&gt;</span>
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配合使用 <code>-p</code> 参数对外映射服务端口，可以允许容器外来访问该服务。</p><h2 id="相关资源" tabindex="-1"><a class="header-anchor" href="#相关资源"><span>相关资源</span></a></h2>`,30)),e("ul",null,[e("li",null,[n[1]||(n[1]=e("code",null,"Debian",-1)),n[2]||(n[2]=s(" 官网：")),e("a",b,[n[0]||(n[0]=s("https://www.debian.org/")),t(a)])]),e("li",null,[n[4]||(n[4]=e("code",null,"Neuro Debian",-1)),n[5]||(n[5]=s(" 官网：")),e("a",m,[n[3]||(n[3]=s("http://neuro.debian.net/")),t(a)])]),e("li",null,[n[7]||(n[7]=e("code",null,"Debian",-1)),n[8]||(n[8]=s(" 官方仓库：")),e("a",k,[n[6]||(n[6]=s("https://github.com/Debian")),t(a)])]),e("li",null,[n[10]||(n[10]=e("code",null,"Debian",-1)),n[11]||(n[11]=s(" 官方镜像：")),e("a",v,[n[9]||(n[9]=s("https://hub.docker.com/_/debian/")),t(a)])]),e("li",null,[n[13]||(n[13]=e("code",null,"Debian",-1)),n[14]||(n[14]=s(" 官方镜像仓库：")),e("a",g,[n[12]||(n[12]=s("https://github.com/tianon/docker-brew-debian/")),t(a)])]),e("li",null,[n[16]||(n[16]=e("code",null,"Ubuntu",-1)),n[17]||(n[17]=s(" 官网：")),e("a",h,[n[15]||(n[15]=s("https://ubuntu.com")),t(a)])]),e("li",null,[n[19]||(n[19]=e("code",null,"Ubuntu",-1)),n[20]||(n[20]=s(" 官方仓库：")),e("a",f,[n[18]||(n[18]=s("https://github.com/ubuntu")),t(a)])]),e("li",null,[n[22]||(n[22]=e("code",null,"Ubuntu",-1)),n[23]||(n[23]=s(" 官方镜像：")),e("a",D,[n[21]||(n[21]=s("https://hub.docker.com/_/ubuntu/")),t(a)])]),e("li",null,[n[25]||(n[25]=e("code",null,"Ubuntu",-1)),n[26]||(n[26]=s(" 官方镜像仓库：")),e("a",x,[n[24]||(n[24]=s("https://github.com/tianon/docker-brew-ubuntu-core")),t(a)])])])])}const q=i(r,[["render",U],["__file","debian.html.vue"]]),G=JSON.parse('{"path":"/index/Docker/cases/os/debian.html","title":"Debian/Ubuntu","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Debian 系统简介","slug":"debian-系统简介","link":"#debian-系统简介","children":[{"level":3,"title":"使用 Debian 官方镜像","slug":"使用-debian-官方镜像","link":"#使用-debian-官方镜像","children":[]}]},{"level":2,"title":"Ubuntu 系统简介","slug":"ubuntu-系统简介","link":"#ubuntu-系统简介","children":[{"level":3,"title":"使用 Ubuntu 官方镜像","slug":"使用-ubuntu-官方镜像","link":"#使用-ubuntu-官方镜像","children":[]}]},{"level":2,"title":"相关资源","slug":"相关资源","link":"#相关资源","children":[]}],"git":{"createdTime":1731129855000,"updatedTime":1731129855000,"contributors":[{"name":"dkyg666","email":"43946866+dkyg666@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":4.75,"words":1424},"filePathRelative":"index/Docker/cases/os/debian.md","localizedDate":"2024年11月9日","excerpt":"\\n<p><code>Debian</code> 和 <code>Ubuntu</code> 都是目前较为流行的 <strong>Debian 系</strong> 的服务器操作系统，十分适合研发场景。<code>Docker Hub</code> 上提供了官方镜像，国内各大容器云服务也基本都提供了相应的支持。</p>\\n<h2>Debian 系统简介</h2>\\n<figure><figcaption>Debian 操作系统</figcaption></figure>\\n<p><code>Debian</code> 是由 <code>GPL</code> 和其他自由软件许可协议授权的自由软件组成的操作系统，由 <strong>Debian 计划（Debian Project）</strong> 组织维护。<strong>Debian 计划</strong> 是一个独立的、分散的组织，由 <code>3000</code> 人志愿者组成，接受世界多个非盈利组织的资金支持，<code>Software in the Public Interest</code> 提供支持并持有商标作为保护机构。<code>Debian</code> 以其坚守 <code>Unix</code> 和自由软件的精神，以及其给予用户的众多选择而闻名。现时 <code>Debian</code> 包括了超过 <code>25,000</code> 个软件包并支持 <code>12</code> 个计算机系统结构。</p>"}');export{q as comp,G as data};
