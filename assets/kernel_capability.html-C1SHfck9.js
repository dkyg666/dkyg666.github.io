import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,b as r,d as t,a as l,e as a,o as s,r as p}from"./app-dX96qGh5.js";const d={},m={href:"https://man7.org/linux/man-pages/man7/capabilities.7.html",target:"_blank",rel:"noopener noreferrer"},u={href:"https://github.com/moby/moby/blob/master/oci/caps/defaults.go",target:"_blank",rel:"noopener noreferrer"};function b(k,e){const o=p("ExternalLinkIcon");return s(),i("div",null,[e[9]||(e[9]=r("h1",{id:"内核能力机制",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#内核能力机制"},[r("span",null,"内核能力机制")])],-1)),r("p",null,[r("a",m,[e[0]||(e[0]=t("能力机制（Capability）")),l(o)]),e[1]||(e[1]=t(" 是 Linux 内核一个强大的特性，可以提供细粒度的权限访问控制。")),e[2]||(e[2]=r("br",null,null,-1)),e[3]||(e[3]=t(" Linux 内核自 2.2 版本起就支持能力机制，它将权限划分为更加细粒度的操作能力，既可以作用在进程上，也可以作用在文件上。"))]),e[10]||(e[10]=a("<p>例如，一个 Web 服务进程只需要绑定一个低于 1024 的端口的权限，并不需要 root 权限。那么它只需要被授权 <code>net_bind_service</code> 能力即可。此外，还有很多其他的类似能力来避免进程获取 root 权限。</p><p>默认情况下，Docker 启动的容器被严格限制只允许使用内核的一部分能力。</p><p>使用能力机制对加强 Docker 容器的安全有很多好处。通常，在服务器上会运行一堆需要特权权限的进程，包括有 ssh、cron、syslogd、硬件管理工具模块（例如负载模块）、网络配置工具等等。容器跟这些进程是不同的，因为几乎所有的特权进程都由容器以外的支持系统来进行管理。</p><ul><li>ssh 访问被主机上ssh服务来管理；</li><li>cron 通常应该作为用户进程执行，权限交给使用它服务的应用来处理；</li><li>日志系统可由 Docker 或第三方服务管理；</li><li>硬件管理无关紧要，容器中也就无需执行 udevd 以及类似服务；</li><li>网络管理也都在主机上设置，除非特殊需求，容器不需要对网络进行配置。</li></ul><p>从上面的例子可以看出，大部分情况下，容器并不需要“真正的” root 权限，容器只需要少数的能力即可。为了加强安全，容器可以禁用一些没必要的权限。</p><ul><li>完全禁止任何 mount 操作；</li><li>禁止直接访问本地主机的套接字；</li><li>禁止访问一些文件系统的操作，比如创建新的设备、修改文件属性等；</li><li>禁止模块加载。</li></ul><p>这样，就算攻击者在容器中取得了 root 权限，也不能获得本地主机的较高权限，能进行的破坏也有限。</p>",7)),r("p",null,[e[5]||(e[5]=t("默认情况下，Docker采用 ")),r("a",u,[e[4]||(e[4]=t("白名单")),l(o)]),e[6]||(e[6]=t(" 机制，禁用必需功能之外的其它权限。")),e[7]||(e[7]=r("br",null,null,-1)),e[8]||(e[8]=t(" 当然，用户也可以根据自身需求来为 Docker 容器启用额外的权限。"))])])}const g=n(d,[["render",b],["__file","kernel_capability.html.vue"]]),x=JSON.parse('{"path":"/index/Docker/security/kernel_capability.html","title":"内核能力机制","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"createdTime":1731129855000,"updatedTime":1731129855000,"contributors":[{"name":"dkyg666","email":"43946866+dkyg666@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.05,"words":614},"filePathRelative":"index/Docker/security/kernel_capability.md","localizedDate":"2024年11月9日","excerpt":"\\n<p><a href=\\"https://man7.org/linux/man-pages/man7/capabilities.7.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">能力机制（Capability）</a> 是 Linux 内核一个强大的特性，可以提供细粒度的权限访问控制。<br>\\nLinux 内核自 2.2 版本起就支持能力机制，它将权限划分为更加细粒度的操作能力，既可以作用在进程上，也可以作用在文件上。</p>\\n<p>例如，一个 Web 服务进程只需要绑定一个低于 1024 的端口的权限，并不需要 root 权限。那么它只需要被授权 <code>net_bind_service</code> 能力即可。此外，还有很多其他的类似能力来避免进程获取 root 权限。</p>"}');export{g as comp,x as data};