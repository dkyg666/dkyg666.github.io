import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as l,c as i,b as e,d as s,a as o,r as d,e as t}from"./app-DFk01ace.js";const u={},p={href:"https://cr.console.aliyun.com/cn-hangzhou/instances",target:"_blank",rel:"noopener noreferrer"},c={href:"https://www.163yun.com/help/documents/56918246390157312",target:"_blank",rel:"noopener noreferrer"},m={href:"https://cloud.baidu.com/doc/CCE/s/Yjxppt74z#%E4%BD%BF%E7%94%A8dockerhub%E5%8A%A0%E9%80%9F%E5%99%A8",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/docker-practice/docker-registry-cn-mirror-test/actions",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.163yun.com/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://systemd.io/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.aliyun.com/product/acr?source=5176.11533457&userCode=8lx5zmtu&type=copy",target:"_blank",rel:"noopener noreferrer"},h={href:"https://dockerhub.azk8s.cn",target:"_blank",rel:"noopener noreferrer"},f={href:"https://reg-mirror.qiniu.com",target:"_blank",rel:"noopener noreferrer"},y={href:"https://registry.docker-cn.com",target:"_blank",rel:"noopener noreferrer"},x={href:"https://github.com/docker-practice/docker-registry-cn-mirror-test",target:"_blank",rel:"noopener noreferrer"},w={href:"https://github.com/Azure/container-service-for-azure-china/blob/master/aks/README.md#22-container-registry-proxy",target:"_blank",rel:"noopener noreferrer"},q={href:"https://cloud.tencent.com/act/cps/redirect?redirect=10058&cps_key=3a5255852d5db99dcd5da4c72f05df61",target:"_blank",rel:"noopener noreferrer"};function D(E,n){const r=d("ExternalLinkIcon");return l(),i("div",null,[n[37]||(n[37]=e("h1",{id:"镜像加速器",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#镜像加速器"},[e("span",null,"镜像加速器")])],-1)),n[38]||(n[38]=e("p",null,"国内从 Docker Hub 拉取镜像有时会遇到困难，此时可以配置镜像加速器。国内很多云服务商都提供了国内加速器服务，例如：",-1)),e("ul",null,[e("li",null,[e("a",p,[n[0]||(n[0]=s("阿里云加速器(点击管理控制台 -> 登录账号(淘宝账号) -> 左侧镜像工具 -> 镜像加速器 -> 复制加速器地址)")),o(r)])]),e("li",null,[e("a",c,[n[1]||(n[1]=s("网易云加速器 ")),n[2]||(n[2]=e("code",null,"https://hub-mirror.c.163.com",-1)),o(r)])]),e("li",null,[e("a",m,[n[3]||(n[3]=s("百度云加速器 ")),n[4]||(n[4]=e("code",null,"https://mirror.baidubce.com",-1)),o(r)])])]),e("p",null,[e("strong",null,[n[6]||(n[6]=s("由于镜像服务可能出现宕机，建议同时配置多个镜像。各个镜像站测试结果请到 ")),e("a",b,[n[5]||(n[5]=s("docker-practice/docker-registry-cn-mirror-test")),o(r)]),n[7]||(n[7]=s(" 查看。"))])]),n[39]||(n[39]=e("blockquote",null,[e("p",null,"国内各大云服务商（腾讯云、阿里云、百度云）均提供了 Docker 镜像加速服务，建议根据运行 Docker 的云平台选择对应的镜像加速服务，具体请参考本页最后一小节。")],-1)),e("p",null,[n[9]||(n[9]=s("本节我们以 ")),e("a",k,[n[8]||(n[8]=s("网易云")),o(r)]),n[10]||(n[10]=s(" 镜像服务 ")),n[11]||(n[11]=e("code",null,"https://hub-mirror.c.163.com",-1)),n[12]||(n[12]=s(" 为例进行介绍。"))]),n[40]||(n[40]=e("h2",{id:"ubuntu-16-04-、debian-8-、centos-7",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ubuntu-16-04-、debian-8-、centos-7"},[e("span",null,"Ubuntu 16.04+、Debian 8+、CentOS 7+")])],-1)),e("p",null,[n[14]||(n[14]=s("目前主流 Linux 发行版均已使用 ")),e("a",g,[n[13]||(n[13]=s("systemd")),o(r)]),n[15]||(n[15]=s(" 进行服务管理，这里介绍如何在使用 systemd 的 Linux 发行版中配置镜像加速器。"))]),n[41]||(n[41]=t(`<p>请首先执行以下命令，查看是否在 <code>docker.service</code> 文件中配置过镜像地址。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ systemctl <span class="token function">cat</span> <span class="token function">docker</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&#39;\\-\\-registry\\-mirror&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果该命令有输出，那么请执行 <code>$ systemctl cat docker</code> 查看 <code>ExecStart=</code> 出现的位置，修改对应的文件内容去掉 <code>--registry-mirror</code> 参数及其值，并按接下来的步骤进行配置。</p><p>如果以上命令没有任何输出，那么就可以在 <code>/etc/docker/daemon.json</code> 中写入如下内容（如果文件不存在请新建该文件）：</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;registry-mirrors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;https://hub-mirror.c.163.com&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;https://mirror.baidubce.com&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意，一定要保证该文件符合 json 规范，否则 Docker 将不能启动。</p></blockquote><p>之后重新启动服务。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> systemctl daemon-reload
$ <span class="token function">sudo</span> systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="windows-10" tabindex="-1"><a class="header-anchor" href="#windows-10"><span>Windows 10</span></a></h2><p>对于使用 <code>Windows 10</code> 的用户，在任务栏托盘 Docker 图标内右键菜单选择 <code>Settings</code>，打开配置窗口后在左侧导航菜单选择 <code>Docker Engine</code>，在右侧像下边一样编辑 json 文件，之后点击 <code>Apply &amp; Restart</code> 保存后 Docker 就会重启并应用配置的镜像地址了。</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;registry-mirrors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;https://hub-mirror.c.163.com&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;https://mirror.baidubce.com&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="macos" tabindex="-1"><a class="header-anchor" href="#macos"><span>macOS</span></a></h2><p>对于使用 macOS 的用户，在任务栏点击 Docker Desktop 应用图标 -&gt; <code>Settings...</code>，在左侧导航菜单选择 <code>Docker Engine</code>，在右侧像下边一样编辑 json 文件。修改完成之后，点击 <code>Apply &amp; restart</code> 按钮，Docker 就会重启并应用配置的镜像地址了。</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;registry-mirrors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;https://hub-mirror.c.163.com&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;https://mirror.baidubce.com&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="检查加速器是否生效" tabindex="-1"><a class="header-anchor" href="#检查加速器是否生效"><span>检查加速器是否生效</span></a></h2><p>执行 <code>$ docker info</code>，如果从结果中看到了如下内容，说明配置成功。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Registry Mirrors:
 https://hub-mirror.c.163.com/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="k8s-gcr-io-镜像" tabindex="-1"><a class="header-anchor" href="#k8s-gcr-io-镜像"><span><code>k8s.gcr.io</code> 镜像</span></a></h2>`,18)),e("p",null,[n[17]||(n[17]=s("可以登录 ")),e("a",v,[n[16]||(n[16]=s("阿里云 容器镜像服务")),o(r)]),n[18]||(n[18]=s()),n[19]||(n[19]=e("strong",null,"镜像中心",-1)),n[20]||(n[20]=s(" -> ")),n[21]||(n[21]=e("strong",null,"镜像搜索",-1)),n[22]||(n[22]=s(" 查找。"))]),n[42]||(n[42]=t(`<p>例如 <code>k8s.gcr.io/coredns:1.6.7</code> 镜像可以用 <code>registry.cn-hangzhou.aliyuncs.com/google_containers/coredns:1.6.7</code> 代替。</p><p>一般情况下有如下对应关系：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># $ docker pull k8s.gcr.io/xxx</span>

$ <span class="token function">docker</span> pull registry.cn-hangzhou.aliyuncs.com/google_containers/xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="不再提供服务的镜像" tabindex="-1"><a class="header-anchor" href="#不再提供服务的镜像"><span>不再提供服务的镜像</span></a></h2><p>某些镜像不再提供服务，添加无用的镜像加速器，会拖慢镜像拉取速度，你可以从镜像配置列表中删除它们。</p>`,5)),e("ul",null,[e("li",null,[e("a",h,[n[23]||(n[23]=s("https://dockerhub.azk8s.cn")),o(r)]),n[24]||(n[24]=s()),n[25]||(n[25]=e("strong",null,"已转为私有",-1))]),e("li",null,[e("a",f,[n[26]||(n[26]=s("https://reg-mirror.qiniu.com")),o(r)])]),e("li",null,[e("a",y,[n[27]||(n[27]=s("https://registry.docker-cn.com")),o(r)])])]),e("p",null,[n[29]||(n[29]=s("建议 ")),n[30]||(n[30]=e("strong",null,"watch（页面右上角）",-1)),n[31]||(n[31]=s()),e("a",x,[n[28]||(n[28]=s("镜像测试")),o(r)]),n[32]||(n[32]=s(" 这个 GitHub 仓库，我们会在此更新各个镜像地址的状态。"))]),n[43]||(n[43]=e("h2",{id:"云服务商",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#云服务商"},[e("span",null,"云服务商")])],-1)),n[44]||(n[44]=e("p",null,[s("某些云服务商提供了 "),e("strong",null,"仅供内部"),s(" 访问的镜像服务，当您的 Docker 运行在云平台时可以选择它们。")],-1)),e("ul",null,[e("li",null,[e("p",null,[e("a",w,[n[33]||(n[33]=s("Azure 中国镜像 ")),n[34]||(n[34]=e("code",null,"https://dockerhub.azk8s.cn",-1)),o(r)])])]),e("li",null,[e("p",null,[e("a",q,[n[35]||(n[35]=s("腾讯云 ")),n[36]||(n[36]=e("code",null,"https://mirror.ccs.tencentyun.com",-1)),o(r)])])])])])}const A=a(u,[["render",D],["__file","mirror.html.vue"]]),S=JSON.parse('{"path":"/index/Docker/install/mirror.html","title":"镜像加速器","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Ubuntu 16.04+、Debian 8+、CentOS 7+","slug":"ubuntu-16-04-、debian-8-、centos-7","link":"#ubuntu-16-04-、debian-8-、centos-7","children":[]},{"level":2,"title":"Windows 10","slug":"windows-10","link":"#windows-10","children":[]},{"level":2,"title":"macOS","slug":"macos","link":"#macos","children":[]},{"level":2,"title":"检查加速器是否生效","slug":"检查加速器是否生效","link":"#检查加速器是否生效","children":[]},{"level":2,"title":"k8s.gcr.io 镜像","slug":"k8s-gcr-io-镜像","link":"#k8s-gcr-io-镜像","children":[]},{"level":2,"title":"不再提供服务的镜像","slug":"不再提供服务的镜像","link":"#不再提供服务的镜像","children":[]},{"level":2,"title":"云服务商","slug":"云服务商","link":"#云服务商","children":[]}],"git":{"createdTime":1731129855000,"updatedTime":1731129855000,"contributors":[{"name":"dkyg666","email":"43946866+dkyg666@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":3.14,"words":942},"filePathRelative":"index/Docker/install/mirror.md","localizedDate":"2024年11月9日","excerpt":"\\n<p>国内从 Docker Hub 拉取镜像有时会遇到困难，此时可以配置镜像加速器。国内很多云服务商都提供了国内加速器服务，例如：</p>\\n<ul>\\n<li><a href=\\"https://cr.console.aliyun.com/cn-hangzhou/instances\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">阿里云加速器(点击管理控制台 -&gt; 登录账号(淘宝账号) -&gt; 左侧镜像工具 -&gt; 镜像加速器 -&gt; 复制加速器地址)</a></li>\\n<li><a href=\\"https://www.163yun.com/help/documents/56918246390157312\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">网易云加速器 <code>https://hub-mirror.c.163.com</code></a></li>\\n<li><a href=\\"https://cloud.baidu.com/doc/CCE/s/Yjxppt74z#%E4%BD%BF%E7%94%A8dockerhub%E5%8A%A0%E9%80%9F%E5%99%A8\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">百度云加速器 <code>https://mirror.baidubce.com</code></a></li>\\n</ul>"}');export{A as comp,S as data};