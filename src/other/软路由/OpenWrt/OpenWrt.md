

# OpenWrt扩容overlay

<details>
  <summary>【查看详情】</summary>
此教程根据E-SIR大神视频整理，侵删
overlay分区扩容教程
（此教程仅适用于E-SIR大神制作的固件 ）

ssh连接你的X86-openwrt路由器

```
Microsoft Windows [版本 10.0.19041.450]

(c) 2021 Microsoft Corporation. 保留所有权利。

 

PS C:\Users\ASUS> ssh root@192.168.5.1

root@192.168.5.1's password:

BusyBox v1.31.1 () built-in shell (ash)
```



_______                     ________        __

 |       |.-----.-----.-----.|  |  |  |.----.|  |_

 |   -   ||  _  |  -__|     ||  |  |  ||   _||   _|

 |_______||   __|_____|__|__||________||__|  |____|

          |__| W I R E L E S S   F R E E D O M

--------------------------------------------------

 OpenWrt GDQ v1.1[2021] | by "eSir PlayGround"

--------------------------------------------------

**root@OpenWrt:~# lsblk**

NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT

loop0    7:0    0 51.4M  0 loop /mnt/loop0

sda      8:0    0  7.5G  0 disk

├─sda1   8:1    0   16M  0 part /mnt/sda1

└─sda2   8:2    0  300M  0 part /rom

**root@OpenWrt:~# cfdisk**

```
如果没有cfdisk命令，则使用 opkg install cfdisk 安装）

因为我的系统使用的是固态硬盘，所以默认挂载点不是从/dev/sda开始的，直接使用cfdisk命令会报错：

cfdisk: cannot open /dev/sda: No such file or directory 
```

```
  所以用 fdisk -l 命令，查看自己硬盘挂载点

fdisk -l

Disk /dev/nvme0n1: 931.51 GiB, 1000204886016 bytes, 1953525168 sectors

```


​      比如我这里，查看自己硬盘挂载点为 /dev/nvme0n1 后，

      使用 cfdisk /dev/nvme0n1 进入下图分区工具界面 



（上下键控制上面的光标移动，左右键控制下面的光标移动）

光标上下移动至Free space，左右移至New，回车
大小自己选择1G或者默认不变
回车
光标移至Write，回车
输入yes，回车
光标左右移动至Write后回车，然后移动至Quit回车退出

Syncing disks.

**root@OpenWrt:~# mkfs.ext4 /dev/sda3**

mke2fs 1.45.6 (20-Mar-2020)

Creating filesystem with 1101056 4k blocks and 275264 inodes

Filesystem UUID: a686d37a-c77f-4a12-8e05-222ace47ae00

Superblock backups stored on blocks:

        32768, 98304, 163840, 229376, 294912, 819200, 884736

 








Allocating group tables: done

Writing inode tables: done

Creating journal (16384 blocks): done

Writing superblocks and filesystem accounting information: done

 

**root@OpenWrt:~# mount /dev/sda3 /mnt/sda3**

root@OpenWrt:~# **ls /mnt/sda3**

lost+found

root@OpenWrt:~# **cd /overlay**

root@OpenWrt:/overlay# **ls**

upper  work

root@OpenWrt:/overlay# **cd upper**

root@OpenWrt:/overlay/upper# **ls**

boot    etc     home    htdocs  lib     mnt     opt     root    run     usr     www

root@OpenWrt:/overlay/upper# **cd ..**

root@OpenWrt:/overlay# **cd ..**

**root@OpenWrt:/# cp -r /overlay/* /mnt/sda3**

root@OpenWrt:/# **ls /mnt/sda3**

**lost+found  upper       work**

简化方法

进入路由器后台，系统-挂载点
点“添加”
选中“启用此挂载点", 根据UUID指定你前面新建分区大小的UUID，挂载点为”作为外部overlay使用“，然后保存&应用
保存并应用后，重启你的设备，再打开网页，就可以看到软件包空间变大了









 </details>





## 编译OpenWrt

<details>
  <summary>【查看详情】</summary>


Lean OpenWrt编译

\1. 不要用 root 用户进行编译

\2. 国内用户编译前最好准备好梯子

\3. 默认登陆IP 192.168.1.1 密码 password

编译命令

\1. 首先装好 Linux 系统，推荐 Debian 11 或 Ubuntu LTS

\2. 安装编译依赖

```
   sudo apt update -y
   sudo apt full-upgrade -y
   sudo apt install -y ack antlr3 asciidoc autoconf automake autopoint binutils bison build-essential \
   bzip2 ccache cmake cpio curl device-tree-compiler fastjar flex gawk gettext gcc-multilib g++-multilib \
   git gperf haveged help2man intltool libc6-dev-i386 libelf-dev libfuse-dev libglib2.0-dev libgmp3-dev \
   libltdl-dev libmpc-dev libmpfr-dev libncurses5-dev libncursesw5-dev libpython3-dev libreadline-dev \
   libssl-dev libtool lrzsz mkisofs msmtp ninja-build p7zip p7zip-full patch pkgconf python2.7 python3 \
   python3-pyelftools python3-setuptools qemu-utils rsync scons squashfs-tools subversion swig texinfo \
   uglifyjs upx-ucl unzip vim wget xmlto xxd zlib1g-dev
```

\3. 下载源代码，更新 feeds 并选择配置

```
   git clone https://github.com/coolsnowwolf/lede
   cd lede
   ./scripts/feeds update -a
   ./scripts/feeds install -a
   make menuconfig
```



```
git clone https://github.com/openwrt/openwrt        **官方版本**
git clone https://github.com/coolsnowwolf/lede       **lede版本**
git clone -b 22.03 --single-branch https://github.com/Lienol/openwrt   **lienol版本**
cd openwrt            **切换到文件目录**
```



\4. 下载 dl 库，编译固件 （-j 后面是线程数，第一次编译推荐用单线程）

```
   make download -j8
   make V=s -j1
```

本套代码保证肯定可以编译成功。里面包括了 R23 所有源代码，包括 IPK 的。 你可以自由使用，但源码编译二次发布请注明我的 GitHub 仓库链接。谢谢合作！ 二次编译：

```
cd lede
git pull
./scripts/feeds update -a
./scripts/feeds install -a
make defconfig
make download -j8
make V=s -j$(nproc)
```



如果需要重新配置：

```
rm -rf .config
make menuconfig
make V=s -j$(nproc)



rm -rf ./tmp && rm -rf .config
make menuconfig
make V=s -j$(nproc)

编译完成后输出路径：bin/targets
```

如果编译失败，可以执行以下命令：

make clean 删除编译目录/bin和/build_dir目录中的文件

make dirclean 除了删除编译目录之外还删除编译工具目录，删除/bin和/build_dir目录的中的文件(make clean)以及/staging_dir、/toolchain、/tmp和/logs中的文件，一般在更换CPU架构的情况下才操作。



下载编译压缩包

编译完成后输出路径：home/用户名/openwrt/bin/targets，下载到本地电脑，需要通过SSH远程登录进行下载。ubuntu默认是没开通SSH登录，所以我们需要进行开通。

```
开通SSH登录方法：

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
sudo sed -i 's/^#?PermitRootLogin./PermitRootLogin yes/g' /etc/ssh/sshd_config
4，开启密码验证
sudo sed -i 's/^#?PasswordAuthentication./PasswordAuthentication yes/g' /etc/ssh/sshd_config
5，重启ssh服务
service sshd restart
6，检查是否有ssh环境
ps -e | grep ssh


```



安装Nginx

首先，您需要在OpenWrt上安装Nginx。可以使用以下命令在终端中进行安装：

```
opkg update
opkg install nginx
```

安装Nginx后，您可以通过以下命令启动和停止它：

```
/etc/init.d/nginx start    # 启动Nginx
/etc/init.d/nginx stop     # 停止Nginx
```

配置Nginx

接下来，您需要在OpenWrt上配置Nginx。Nginx的配置文件位于 /etc/nginx/nginx.conf 中。您可以通过修改此文件来配置Nginx。

例如，要将Nginx配置为监听端口80并向所有请求发送欢迎消息，请按照以下步骤操作：

1. 使用文本编辑器打开 /etc/nginx/nginx.conf 文件：

```
vi /etc/nginx/nginx.conf
```

1. 在 http 块中添加以下内容：

```
worker_processes auto;

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

```

1. 保存并关闭文件。
2. 重新启动Nginx以使更改生效：

```
/etc/init.d/nginx restart
```

使用Nginx模块

要在OpenWrt上使用Nginx模块，您需要将相应的模块安装到Nginx中。这些模块可以使用以下命令安装：

```
opkg update
opkg install nginx-mod-<module_name>
```

其中 <module_name> 是要安装的模块的名称。例如，要安装HttpEchoModule，可以使用以下命令：

```
opkg update
opkg install nginx-mod-http-echo
```

安装完毕后，您需要修改 /etc/nginx/nginx.conf 文件





 </details>



