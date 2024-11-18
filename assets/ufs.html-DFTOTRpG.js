import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as l,c as i,b as t,d as o,a as n,r as a,e as s}from"./app-DFk01ace.js";const p={},f={href:"https://en.wikipedia.org/wiki/UnionFS",target:"_blank",rel:"noopener noreferrer"},c={href:"https://docs.docker.com/storage/storagedriver/select-storage-driver/",target:"_blank",rel:"noopener noreferrer"};function u(y,e){const r=a("ExternalLinkIcon");return l(),i("div",null,[e[12]||(e[12]=t("h1",{id:"联合文件系统",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#联合文件系统"},[t("span",null,"联合文件系统")])],-1)),t("p",null,[e[1]||(e[1]=o("联合文件系统（")),t("a",f,[e[0]||(e[0]=o("UnionFS")),n(r)]),e[2]||(e[2]=o("）是一种分层、轻量级并且高性能的文件系统，它支持对文件系统的修改作为一次提交来一层层的叠加，同时可以将不同目录挂载到同一个虚拟文件系统下(unite several directories into a single virtual filesystem)。"))]),e[13]||(e[13]=s('<p>联合文件系统是 Docker 镜像的基础。镜像可以通过分层来进行继承，基于基础镜像（没有父镜像），可以制作各种具体的应用镜像。</p><p>另外，不同 Docker 容器就可以共享一些基础的文件系统层，同时再加上自己独有的改动层，大大提高了存储的效率。</p><p>Docker 中使用的 AUFS（Advanced Multi-Layered Unification Filesystem）就是一种联合文件系统。 <code>AUFS</code> 支持为每一个成员目录（类似 Git 的分支）设定只读（readonly）、读写（readwrite）和写出（whiteout-able）权限, 同时 <code>AUFS</code> 里有一个类似分层的概念, 对只读权限的分支可以逻辑上进行增量地修改(不影响只读部分的)。</p><p>Docker 目前支持的联合文件系统包括 <code>OverlayFS</code>, <code>AUFS</code>, <code>Btrfs</code>, <code>VFS</code>, <code>ZFS</code> 和 <code>Device Mapper</code>。</p><p>各 Linux 发行版 Docker 推荐使用的存储驱动如下表。</p><table><thead><tr><th style="text-align:left;">Linux 发行版</th><th style="text-align:left;">Docker 推荐使用的存储驱动</th></tr></thead><tbody><tr><td style="text-align:left;">Docker on Ubuntu</td><td style="text-align:left;"><code>overlay2</code> (16.04 +)</td></tr><tr><td style="text-align:left;">Docker on Debian</td><td style="text-align:left;"><code>overlay2</code> (Debian Stretch), <code>aufs</code>, <code>devicemapper</code></td></tr><tr><td style="text-align:left;">Docker on CentOS</td><td style="text-align:left;"><code>overlay2</code></td></tr><tr><td style="text-align:left;">Docker on Fedora</td><td style="text-align:left;"><code>overlay2</code></td></tr></tbody></table>',6)),t("p",null,[e[4]||(e[4]=o("在可能的情况下，")),t("a",c,[e[3]||(e[3]=o("推荐")),n(r)]),e[5]||(e[5]=o(" 使用 ")),e[6]||(e[6]=t("code",null,"overlay2",-1)),e[7]||(e[7]=o(" 存储驱动，")),e[8]||(e[8]=t("code",null,"overlay2",-1)),e[9]||(e[9]=o(" 是目前 Docker 默认的存储驱动，以前则是 ")),e[10]||(e[10]=t("code",null,"aufs",-1)),e[11]||(e[11]=o("。你可以通过配置来使用以上提到的其他类型的存储驱动。"))])])}const g=d(p,[["render",u],["__file","ufs.html.vue"]]),x=JSON.parse('{"path":"/index/Docker/underly/ufs.html","title":"联合文件系统","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"createdTime":1731129855000,"updatedTime":1731129855000,"contributors":[{"name":"dkyg666","email":"43946866+dkyg666@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.38,"words":413},"filePathRelative":"index/Docker/underly/ufs.md","localizedDate":"2024年11月9日","excerpt":"\\n<p>联合文件系统（<a href=\\"https://en.wikipedia.org/wiki/UnionFS\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">UnionFS</a>）是一种分层、轻量级并且高性能的文件系统，它支持对文件系统的修改作为一次提交来一层层的叠加，同时可以将不同目录挂载到同一个虚拟文件系统下(unite several directories into a single virtual filesystem)。</p>\\n<p>联合文件系统是 Docker 镜像的基础。镜像可以通过分层来进行继承，基于基础镜像（没有父镜像），可以制作各种具体的应用镜像。</p>"}');export{g as comp,x as data};