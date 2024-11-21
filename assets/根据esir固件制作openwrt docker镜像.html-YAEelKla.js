import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,e as n,b as i,d as t,a as l,o,r as a}from"./app-BwK79we4.js";const c={},v={href:"http://192.168.18.2",target:"_blank",rel:"noopener noreferrer"};function u(m,e){const d=a("ExternalLinkIcon");return o(),r("div",null,[e[2]||(e[2]=n(`<h1 id="根据esir固件制作openwrt-docker镜像" tabindex="-1"><a class="header-anchor" href="#根据esir固件制作openwrt-docker镜像"><span>根据esir固件制作openwrt docker镜像</span></a></h1><p>1.下载固件包</p><p>然后把下好的openwrt固件包丢到linux虚拟机里.</p><p>2.制作docker openwrt镜像包</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>[root@localhost ~]# mkdir openwrt
[root@localhost ~]# cd openwrt

[root@localhost openwrt]## gunzip openwrt-spp-v2-1[2021]-x86-64-generic-squashfs-uefi.img.gz

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>[root@localhost openwrt]# fdisk openwrt-spp-v2-1[202 1]-x86-64-generic-squashfs-uefi.img -l
WARNING: fdisk GPT support is currently new, and therefore in an experimental phase. Use at your own discretion.

磁盘 openwrt-spp-v2-1[2021]-x86-64-generic-squashfs-uefi.img：331 MB, 331906560 字节，648255 个扇区
Units = 扇区 of 1 * 512 = 512 bytes
扇区大小(逻辑/物理)：512 字节 / 512 字节
I/O 大小(最小/最佳)：512 字节 / 512 字节
磁盘标签类型：gpt
Disk identifier: B3C9805D-045D-BB7B-C720-50B6CEBD9600


#         Start          End    Size  Type            Name
 1          512        33279     16M  EFI System      EFI System Partition
 2        33792       648191    300M  Microsoft basic 
128           34          511    239K  BIOS boot     
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们只需要把512 * 33792,把得到数值记录下来就好.</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>[root@localhost openwrt]# echo $((33792*512))
17301504

[root@localhost openwrt]# mkdir op

[root@localhost openwrt]# mount -o loop,offset=17301504 openwrt-spp-v2-1[2021]-x86-64-generic-squashfs-uefi.img ./op

[root@localhost openwrt]# tar czf openwrt.tar.gz -C ./op .

[root@localhost openwrt]# docker import openwrt.tar.gz  rocdk890/openwrt-x86-64

[root@localhost openwrt]# umount op  卸载
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来运行docker openwrt镜像</p><p>3.打开网卡混杂模式</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>[root@localhost openwrt]# ip link set ens33 promisc on
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>4.创建网络</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>[root@localhost openwrt]# docker network create -d macvlan --subnet=192.168.18.0/24 --gateway=192.168.18.1 -o parent=ens33 openwrt-LAN
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>5.运行docker openwrt</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>[root@myvps openwrt]# docker run --restart always --name openwrt -d --network openwrt-LAN --privileged rocdk890/openwrt-x86-64 /sbin/init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>6.进入容器并修改相关参数</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>[root@myvps openwrt]# docker exec -it openwrt sh

vi /etc/config/network

config interface &#39;lan&#39;
	option ifname &#39;eth0&#39;
	option proto &#39;static&#39;
	option ipaddr &#39;192.168.18.2&#39;
	option netmask &#39;255.255.255.0&#39;
	option gateway &#39;192.168.18.1&#39;
	option dns &#39;192.168.18.1&#39;
	option broadcast &#39;192.168.2.255&#39;
	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的参数根据自身的情况调整</p><ul><li><code>proto</code>设置使用静态分配IP地址的方式<code>static</code></li><li><code>ipaddr</code>为OpenWrt系统分配的静态IP，这里我分配的是<code>192.168.18.2</code>(注意: 这个IP地址不要与你本地网络已有的IP地址冲突)</li><li><code>netmask</code>为子网掩码<code>255.255.255.0</code></li><li><code>gateway</code>为路由器(硬路由)的网关，通常就是你访问路由器的IP地址，这里我是<code>192.168.18.1</code></li><li><code>dns</code>为<code>DNS</code>服务器的地址，可以是运营商的地址，比如<code>114.114.114.114</code>,这里我直接用的路由器的地址<code>192.168.18.1</code></li><li><code>broadcast</code>为广播地址<code>192.168.18.255</code></li></ul><p>保存后,重启网络 /etc/init.d/network restart</p>`,20)),i("p",null,[e[1]||(e[1]=t("最后使用浏览器访问")),i("a",v,[e[0]||(e[0]=t("http://192.168.18.2")),l(d)])]),e[3]||(e[3]=n(`<p>如无法联网，检查/etc/resolv.conf配置文件，需要更改nameserver 127.0.0.11为nameserver 127.0.0.1</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>/ # vi /etc/resolv.conf
search lan
nameserver 127.0.0.11
options ndots:0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>#!/bin/bash

# 定义变量
IMG_NAME=&quot;openwrt.img&quot;
BYTES_PER_SECTOR=512
OFFSET_SECTOR=33792
DOCKER_IMAGE_NAME=&quot;openwrt-x86-64&quot;
MOUNT_DIR=&quot;./op&quot;


# 计算偏移量
OFFSET=$((OFFSET_SECTOR * BYTES_PER_SECTOR))
echo &quot;计算的偏移量为：$OFFSET 字节&quot;

# 创建挂载目录
if [ ! -d $MOUNT_DIR ]; then
    mkdir $MOUNT_DIR
fi

# 挂载镜像
echo &quot;挂载镜像...&quot;
mount -o loop,offset=$OFFSET &quot;$IMG_NAME&quot; $MOUNT_DIR

# 打包文件系统为 tar.gz
echo &quot;打包文件系统...&quot;
tar czf openwrt.tar.gz -C $MOUNT_DIR .

# 导入 Docker 镜像
echo &quot;导入到 Docker...&quot;
docker import openwrt.tar.gz $DOCKER_IMAGE_NAME

# 卸载挂载点
echo &quot;卸载挂载点...&quot;
umount $MOUNT_DIR

echo &quot;操作完成！Docker 镜像已导入为 $DOCKER_IMAGE_NAME&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3))])}const g=s(c,[["render",u],["__file","根据esir固件制作openwrt docker镜像.html.vue"]]),x=JSON.parse('{"path":"/other/%E8%BD%AF%E8%B7%AF%E7%94%B1/OpenWrt/%E6%A0%B9%E6%8D%AEesir%E5%9B%BA%E4%BB%B6%E5%88%B6%E4%BD%9Copenwrt%20docker%E9%95%9C%E5%83%8F.html","title":"根据esir固件制作openwrt docker镜像","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"createdTime":1732094231000,"updatedTime":1732180627000,"contributors":[{"name":"dkyg666","email":"43946866+dkyg666@users.noreply.github.com","commits":4}]},"readingTime":{"minutes":2.37,"words":710},"filePathRelative":"other/软路由/OpenWrt/根据esir固件制作openwrt docker镜像.md","localizedDate":"2024年11月20日","excerpt":"\\n<p>1.下载固件包</p>\\n<p>然后把下好的openwrt固件包丢到linux虚拟机里.</p>\\n<p>2.制作docker openwrt镜像包</p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>[root@localhost ~]# mkdir openwrt\\n[root@localhost ~]# cd openwrt\\n\\n[root@localhost openwrt]## gunzip openwrt-spp-v2-1[2021]-x86-64-generic-squashfs-uefi.img.gz\\n\\n</code></pre></div>"}');export{g as comp,x as data};
