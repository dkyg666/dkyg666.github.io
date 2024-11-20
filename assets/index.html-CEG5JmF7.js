import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as p,e as c,b as o,d as r,a as t,o as s,r as n}from"./app-DYmmM49d.js";const i={},k={href:"https://datatracker.ietf.org/doc/html/rfc1918",target:"_blank",rel:"noopener noreferrer"};function m(u,e){const d=n("ExternalLinkIcon"),l=n("Catalog");return s(),p("div",null,[e[11]||(e[11]=c('<h1 id="高级网络配置" tabindex="-1"><a class="header-anchor" href="#高级网络配置"><span>高级网络配置</span></a></h1><blockquote><p>注意：本章属于 <code>Docker</code> 高级配置，如果您是初学者，您可以暂时跳过本章节，直接学习 <a href="../compose">Docker Compose</a> 一节。</p></blockquote><p>本章将介绍 Docker 的一些高级网络配置和选项。</p><p>当 Docker 启动时，会自动在主机上创建一个 <code>docker0</code> 虚拟网桥，实际上是 Linux 的一个 bridge，可以理解为一个软件交换机。它会在挂载到它的网口之间进行转发。</p>',4)),o("p",null,[e[1]||(e[1]=r("同时，Docker 随机分配一个本地未占用的私有网段（在 ")),o("a",k,[e[0]||(e[0]=r("RFC1918")),t(d)]),e[2]||(e[2]=r(" 中定义）中的一个地址给 ")),e[3]||(e[3]=o("code",null,"docker0",-1)),e[4]||(e[4]=r(" 接口。比如典型的 ")),e[5]||(e[5]=o("code",null,"172.17.42.1",-1)),e[6]||(e[6]=r("，掩码为 ")),e[7]||(e[7]=o("code",null,"255.255.0.0",-1)),e[8]||(e[8]=r("。此后启动的容器内的网口也会自动分配一个同一网段（")),e[9]||(e[9]=o("code",null,"172.17.0.0/16",-1)),e[10]||(e[10]=r("）的地址。"))]),e[12]||(e[12]=o("p",null,[r("当创建一个 Docker 容器的时候，同时会创建了一对 "),o("code",null,"veth pair"),r(" 接口（当数据包发送到一个接口时，另外一个接口也可以收到相同的数据包）。这对接口一端在容器内，即 "),o("code",null,"eth0"),r("；另一端在本地并被挂载到 "),o("code",null,"docker0"),r(" 网桥，名称以 "),o("code",null,"veth"),r(" 开头（例如 "),o("code",null,"vethAQI2QT"),r("）。通过这种方式，主机可以跟容器通信，容器之间也可以相互通信。Docker 就创建了在主机和所有容器之间一个虚拟共享网络。")],-1)),e[13]||(e[13]=o("p",null,"接下来的部分将介绍在一些场景中，Docker 所有的网络定制配置。以及通过 Linux 命令来调整、补充、甚至替换 Docker 默认的网络配置。",-1)),t(l)])}const x=a(i,[["render",m],["__file","index.html.vue"]]),g=JSON.parse('{"path":"/index/Docker/advanced_network/","title":"高级网络配置","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"createdTime":1731129855000,"updatedTime":1731129855000,"contributors":[{"name":"dkyg666","email":"43946866+dkyg666@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.26,"words":379},"filePathRelative":"index/Docker/advanced_network/README.md","localizedDate":"2024年11月9日","excerpt":"\\n<blockquote>\\n<p>注意：本章属于 <code>Docker</code> 高级配置，如果您是初学者，您可以暂时跳过本章节，直接学习 <a href=\\"../compose\\">Docker Compose</a> 一节。</p>\\n</blockquote>\\n<p>本章将介绍 Docker 的一些高级网络配置和选项。</p>\\n<p>当 Docker 启动时，会自动在主机上创建一个 <code>docker0</code> 虚拟网桥，实际上是 Linux 的一个 bridge，可以理解为一个软件交换机。它会在挂载到它的网口之间进行转发。</p>\\n<p>同时，Docker 随机分配一个本地未占用的私有网段（在 <a href=\\"https://datatracker.ietf.org/doc/html/rfc1918\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">RFC1918</a> 中定义）中的一个地址给 <code>docker0</code> 接口。比如典型的 <code>172.17.42.1</code>，掩码为 <code>255.255.0.0</code>。此后启动的容器内的网口也会自动分配一个同一网段（<code>172.17.0.0/16</code>）的地址。</p>"}');export{x as comp,g as data};
