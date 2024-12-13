import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,e as s,o as t}from"./app-B_h_uIeu.js";const d={};function r(l,e){return t(),i("div",null,e[0]||(e[0]=[s(`<h1 id="openwrt扩容overlay" tabindex="-1"><a class="header-anchor" href="#openwrt扩容overlay"><span>OpenWrt扩容overlay</span></a></h1><details><summary>【查看详情】</summary> 此教程根据E-SIR大神视频整理，侵删 overlay分区扩容教程 （此教程仅适用于E-SIR大神制作的固件 ） <p>ssh连接你的X86-openwrt路由器</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Microsoft Windows [版本 10.0.19041.450]

(c) 2021 Microsoft Corporation. 保留所有权利。

 

PS C:\\Users\\ASUS&gt; ssh root@192.168.5.1

root@192.168.5.1&#39;s password:

BusyBox v1.31.1 () built-in shell (ash)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>| |.-----.-----.-----.| | | |.----.| |_</p><p>| - || _ | -__| || | | || _|| _|</p><p>|___<strong><strong>|| <strong>|</strong><em><strong>|</strong>|</em><em>||</em>_____<strong>||</strong>| |</strong></strong>|</p><pre><code>      |__| W I R E L E S S   F R E E D O M
</code></pre><hr><p>OpenWrt GDQ v1.1[2021] | by &quot;eSir PlayGround&quot;</p><hr><p><strong>root@OpenWrt:~# lsblk</strong></p><p>NAME MAJ:MIN RM SIZE RO TYPE MOUNTPOINT</p><p>loop0 7:0 0 51.4M 0 loop /mnt/loop0</p><p>sda 8:0 0 7.5G 0 disk</p><p>├─sda1 8:1 0 16M 0 part /mnt/sda1</p><p>└─sda2 8:2 0 300M 0 part /rom</p><p><strong>root@OpenWrt:~# cfdisk</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>如果没有cfdisk命令，则使用 opkg install cfdisk 安装）

因为我的系统使用的是固态硬盘，所以默认挂载点不是从/dev/sda开始的，直接使用cfdisk命令会报错：

cfdisk: cannot open /dev/sda: No such file or directory 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>  所以用 fdisk -l 命令，查看自己硬盘挂载点

fdisk -l

Disk /dev/nvme0n1: 931.51 GiB, 1000204886016 bytes, 1953525168 sectors

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 比如我这里，查看自己硬盘挂载点为 /dev/nvme0n1 后，</p><pre><code>  使用 cfdisk /dev/nvme0n1 进入下图分区工具界面 
</code></pre><p>（上下键控制上面的光标移动，左右键控制下面的光标移动）</p><p>光标上下移动至Free space，左右移至New，回车<br> 大小自己选择1G或者默认不变<br> 回车<br> 光标移至Write，回车<br> 输入yes，回车<br> 光标左右移动至Write后回车，然后移动至Quit回车退出</p><p>Syncing disks.</p><p><strong>root@OpenWrt:~# mkfs.ext4 /dev/sda3</strong></p><p>mke2fs 1.45.6 (20-Mar-2020)</p><p>Creating filesystem with 1101056 4k blocks and 275264 inodes</p><p>Filesystem UUID: a686d37a-c77f-4a12-8e05-222ace47ae00</p><p>Superblock backups stored on blocks:</p><pre><code>    32768, 98304, 163840, 229376, 294912, 819200, 884736
</code></pre><p>Allocating group tables: done</p><p>Writing inode tables: done</p><p>Creating journal (16384 blocks): done</p><p>Writing superblocks and filesystem accounting information: done</p><p><strong>root@OpenWrt:~# mount /dev/sda3 /mnt/sda3</strong></p><p>root@OpenWrt:~# <strong>ls /mnt/sda3</strong></p><p>lost+found</p><p>root@OpenWrt:~# <strong>cd /overlay</strong></p><p>root@OpenWrt:/overlay# <strong>ls</strong></p><p>upper work</p><p>root@OpenWrt:/overlay# <strong>cd upper</strong></p><p>root@OpenWrt:/overlay/upper# <strong>ls</strong></p><p>boot etc home htdocs lib mnt opt root run usr www</p><p>root@OpenWrt:/overlay/upper# <strong>cd ..</strong></p><p>root@OpenWrt:/overlay# <strong>cd ..</strong></p><p><em><em>root@OpenWrt:/# cp -r /overlay/</em> /mnt/sda3</em>*</p><p>root@OpenWrt:/# <strong>ls /mnt/sda3</strong></p><p><strong>lost+found upper work</strong></p><p>简化方法</p><p>进入路由器后台，系统-挂载点<br> 点“添加”<br> 选中“启用此挂载点&quot;, 根据UUID指定你前面新建分区大小的UUID，挂载点为”作为外部overlay使用“，然后保存&amp;应用<br> 保存并应用后，重启你的设备，再打开网页，就可以看到软件包空间变大了</p></details><h2 id="编译openwrt" tabindex="-1"><a class="header-anchor" href="#编译openwrt"><span>编译OpenWrt</span></a></h2><details><summary>【查看详情】</summary><p>Lean OpenWrt编译</p><p>\\1. 不要用 root 用户进行编译</p><p>\\2. 国内用户编译前最好准备好梯子</p><p>\\3. 默认登陆IP 192.168.1.1 密码 password</p><p>编译命令</p><p>\\1. 首先装好 Linux 系统，推荐 Debian 11 或 Ubuntu LTS</p><p>\\2. 安装编译依赖</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>   sudo apt update -y
   sudo apt full-upgrade -y
   sudo apt install -y ack antlr3 asciidoc autoconf automake autopoint binutils bison build-essential \\
   bzip2 ccache cmake cpio curl device-tree-compiler fastjar flex gawk gettext gcc-multilib g++-multilib \\
   git gperf haveged help2man intltool libc6-dev-i386 libelf-dev libfuse-dev libglib2.0-dev libgmp3-dev \\
   libltdl-dev libmpc-dev libmpfr-dev libncurses5-dev libncursesw5-dev libpython3-dev libreadline-dev \\
   libssl-dev libtool lrzsz mkisofs msmtp ninja-build p7zip p7zip-full patch pkgconf python2.7 python3 \\
   python3-pyelftools python3-setuptools qemu-utils rsync scons squashfs-tools subversion swig texinfo \\
   uglifyjs upx-ucl unzip vim wget xmlto xxd zlib1g-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\\3. 下载源代码，更新 feeds 并选择配置</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>   git clone https://github.com/coolsnowwolf/lede
   cd lede
   ./scripts/feeds update -a
   ./scripts/feeds install -a
   make menuconfig
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git clone https://github.com/openwrt/openwrt        **官方版本**
git clone https://github.com/coolsnowwolf/lede       **lede版本**
git clone -b 22.03 --single-branch https://github.com/Lienol/openwrt   **lienol版本**
cd openwrt            **切换到文件目录**
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\\4. 下载 dl 库，编译固件 （-j 后面是线程数，第一次编译推荐用单线程）</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>   make download -j8
   make V=s -j1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>本套代码保证肯定可以编译成功。里面包括了 R23 所有源代码，包括 IPK 的。 你可以自由使用，但源码编译二次发布请注明我的 GitHub 仓库链接。谢谢合作！ 二次编译：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>cd lede
git pull
./scripts/feeds update -a
./scripts/feeds install -a
make defconfig
make download -j8
make V=s -j$(nproc)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果需要重新配置：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>rm -rf .config
make menuconfig
make V=s -j$(nproc)



rm -rf ./tmp &amp;&amp; rm -rf .config
make menuconfig
make V=s -j$(nproc)

编译完成后输出路径：bin/targets
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果编译失败，可以执行以下命令：</p><p>make clean 删除编译目录/bin和/build_dir目录中的文件</p><p>make dirclean 除了删除编译目录之外还删除编译工具目录，删除/bin和/build_dir目录的中的文件(make clean)以及/staging_dir、/toolchain、/tmp和/logs中的文件，一般在更换CPU架构的情况下才操作。</p><p>下载编译压缩包</p><p>编译完成后输出路径：home/用户名/openwrt/bin/targets，下载到本地电脑，需要通过SSH远程登录进行下载。ubuntu默认是没开通SSH登录，所以我们需要进行开通。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>开通SSH登录方法：

1，必须切换成为root用户
sudo -i
2，先更新软件列表和更新软件
sudo apt-get update
3，先更新软件列表和更新软件
sudo apt-get upgrade
4，安装ssh
apt-get install ssh
5，启动ssh服务
sudo /etc/init.d/ssh start
6，检查是否有ssh环境
ps -e | grep ssh




ubuntu开通root登录SSH权限

1， 使用普通用户登录后切换root
sudo -i
2，创建root管理员密码
passwd root
3，开启root登录
sudo sed -i &#39;s/^#?PermitRootLogin./PermitRootLogin yes/g&#39; /etc/ssh/sshd_config
4，开启密码验证
sudo sed -i &#39;s/^#?PasswordAuthentication./PasswordAuthentication yes/g&#39; /etc/ssh/sshd_config
5，重启ssh服务
service sshd restart
6，检查是否有ssh环境
ps -e | grep ssh


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装Nginx</p><p>首先，您需要在OpenWrt上安装Nginx。可以使用以下命令在终端中进行安装：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>opkg update
opkg install nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>安装Nginx后，您可以通过以下命令启动和停止它：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>/etc/init.d/nginx start    # 启动Nginx
/etc/init.d/nginx stop     # 停止Nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>配置Nginx</p><p>接下来，您需要在OpenWrt上配置Nginx。Nginx的配置文件位于 /etc/nginx/nginx.conf 中。您可以通过修改此文件来配置Nginx。</p><p>例如，要将Nginx配置为监听端口80并向所有请求发送欢迎消息，请按照以下步骤操作：</p><ol><li>使用文本编辑器打开 /etc/nginx/nginx.conf 文件：</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>vi /etc/nginx/nginx.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li>在 http 块中添加以下内容：</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>worker_processes auto;

user root;

events {}

http {

upstream alist {
  server 127.0.0.1:5244;
}



server {
        listen       15244;
        server_name   localhost;
        location / {
           proxy_pass http://alist;
           proxy_set_header HOST $host;
           proxy_set_header X-Forwarded-Proto $scheme;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        }
      
    }

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>保存并关闭文件。</li><li>重新启动Nginx以使更改生效：</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>/etc/init.d/nginx restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用Nginx模块</p><p>要在OpenWrt上使用Nginx模块，您需要将相应的模块安装到Nginx中。这些模块可以使用以下命令安装：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>opkg update
opkg install nginx-mod-&lt;module_name&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>其中 &lt;module_name&gt; 是要安装的模块的名称。例如，要安装HttpEchoModule，可以使用以下命令：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>opkg update
opkg install nginx-mod-http-echo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>安装完毕后，您需要修改 /etc/nginx/nginx.conf 文件</p></details>`,4)]))}const p=n(d,[["render",r],["__file","OpenWrt.html.vue"]]),v=JSON.parse(`{"path":"/other/%E8%BD%AF%E8%B7%AF%E7%94%B1/OpenWrt/OpenWrt.html","title":"OpenWrt扩容overlay","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"编译OpenWrt","slug":"编译openwrt","link":"#编译openwrt","children":[]}],"git":{"createdTime":1731129855000,"updatedTime":1731129855000,"contributors":[{"name":"dkyg666","email":"43946866+dkyg666@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":5.45,"words":1636},"filePathRelative":"other/软路由/OpenWrt/OpenWrt.md","localizedDate":"2024年11月9日","excerpt":"\\n<details>\\n  <summary>【查看详情】</summary>\\n此教程根据E-SIR大神视频整理，侵删\\noverlay分区扩容教程\\n（此教程仅适用于E-SIR大神制作的固件 ）\\n<p>ssh连接你的X86-openwrt路由器</p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>Microsoft Windows [版本 10.0.19041.450]\\n\\n(c) 2021 Microsoft Corporation. 保留所有权利。\\n\\n \\n\\nPS C:\\\\Users\\\\ASUS&gt; ssh root@192.168.5.1\\n\\nroot@192.168.5.1's password:\\n\\nBusyBox v1.31.1 () built-in shell (ash)\\n</code></pre></div><hr>\\n<p>|       |.-----.-----.-----.|  |  |  |.----.|  |_</p>\\n<p>|   -   ||  _  |  -__|     ||  |  |  ||   _||   _|</p>\\n<p>|___<strong><strong>||   <strong>|</strong><em><strong>|</strong>|</em><em>||</em>_____<strong>||</strong>|  |</strong></strong>|</p>\\n<pre><code>      |__| W I R E L E S S   F R E E D O M\\n</code></pre>\\n<hr>\\n<p>OpenWrt GDQ v1.1[2021] | by \\"eSir PlayGround\\"</p>\\n<hr>\\n<p><strong>root@OpenWrt:~# lsblk</strong></p>\\n<p>NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT</p>\\n<p>loop0    7:0    0 51.4M  0 loop /mnt/loop0</p>\\n<p>sda      8:0    0  7.5G  0 disk</p>\\n<p>├─sda1   8:1    0   16M  0 part /mnt/sda1</p>\\n<p>└─sda2   8:2    0  300M  0 part /rom</p>\\n<p><strong>root@OpenWrt:~# cfdisk</strong></p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>如果没有cfdisk命令，则使用 opkg install cfdisk 安装）\\n\\n因为我的系统使用的是固态硬盘，所以默认挂载点不是从/dev/sda开始的，直接使用cfdisk命令会报错：\\n\\ncfdisk: cannot open /dev/sda: No such file or directory \\n</code></pre></div><div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>  所以用 fdisk -l 命令，查看自己硬盘挂载点\\n\\nfdisk -l\\n\\nDisk /dev/nvme0n1: 931.51 GiB, 1000204886016 bytes, 1953525168 sectors\\n\\n</code></pre></div><p>​      比如我这里，查看自己硬盘挂载点为 /dev/nvme0n1 后，</p>\\n<pre><code>  使用 cfdisk /dev/nvme0n1 进入下图分区工具界面 \\n</code></pre>\\n<p>（上下键控制上面的光标移动，左右键控制下面的光标移动）</p>\\n<p>光标上下移动至Free space，左右移至New，回车<br>\\n大小自己选择1G或者默认不变<br>\\n回车<br>\\n光标移至Write，回车<br>\\n输入yes，回车<br>\\n光标左右移动至Write后回车，然后移动至Quit回车退出</p>\\n<p>Syncing disks.</p>\\n<p><strong>root@OpenWrt:~# mkfs.ext4 /dev/sda3</strong></p>\\n<p>mke2fs 1.45.6 (20-Mar-2020)</p>\\n<p>Creating filesystem with 1101056 4k blocks and 275264 inodes</p>\\n<p>Filesystem UUID: a686d37a-c77f-4a12-8e05-222ace47ae00</p>\\n<p>Superblock backups stored on blocks:</p>\\n<pre><code>    32768, 98304, 163840, 229376, 294912, 819200, 884736\\n</code></pre>\\n<p>Allocating group tables: done</p>\\n<p>Writing inode tables: done</p>\\n<p>Creating journal (16384 blocks): done</p>\\n<p>Writing superblocks and filesystem accounting information: done</p>\\n<p><strong>root@OpenWrt:~# mount /dev/sda3 /mnt/sda3</strong></p>\\n<p>root@OpenWrt:~# <strong>ls /mnt/sda3</strong></p>\\n<p>lost+found</p>\\n<p>root@OpenWrt:~# <strong>cd /overlay</strong></p>\\n<p>root@OpenWrt:/overlay# <strong>ls</strong></p>\\n<p>upper  work</p>\\n<p>root@OpenWrt:/overlay# <strong>cd upper</strong></p>\\n<p>root@OpenWrt:/overlay/upper# <strong>ls</strong></p>\\n<p>boot    etc     home    htdocs  lib     mnt     opt     root    run     usr     www</p>\\n<p>root@OpenWrt:/overlay/upper# <strong>cd ..</strong></p>\\n<p>root@OpenWrt:/overlay# <strong>cd ..</strong></p>\\n<p><em><em>root@OpenWrt:/# cp -r /overlay/</em> /mnt/sda3</em>*</p>\\n<p>root@OpenWrt:/# <strong>ls /mnt/sda3</strong></p>\\n<p><strong>lost+found  upper       work</strong></p>\\n<p>简化方法</p>\\n<p>进入路由器后台，系统-挂载点<br>\\n点“添加”<br>\\n选中“启用此挂载点\\", 根据UUID指定你前面新建分区大小的UUID，挂载点为”作为外部overlay使用“，然后保存&amp;应用<br>\\n保存并应用后，重启你的设备，再打开网页，就可以看到软件包空间变大了</p>\\n </details>"}`);export{p as comp,v as data};
