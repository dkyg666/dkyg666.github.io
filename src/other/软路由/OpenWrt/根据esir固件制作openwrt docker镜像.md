# 根据esir固件制作openwrt docker镜像



1.下载固件包

然后把下好的openwrt固件包丢到linux虚拟机里.

2.制作docker openwrt镜像包

```
[root@localhost ~]# mkdir openwrt
[root@localhost ~]# cd openwrt

[root@localhost openwrt]## gunzip openwrt-spp-v2-1[2021]-x86-64-generic-squashfs-uefi.img.gz

```

```
[root@localhost openwrt]# fdisk openwrt-spp-v2-1[202 1]-x86-64-generic-squashfs-uefi.img -l
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
```

我们只需要把512 * 33792,把得到数值记录下来就好.

```
[root@localhost openwrt]# echo $((33792*512))
17301504

[root@localhost openwrt]# mkdir op

[root@localhost openwrt]# mount -o loop,offset=17301504 openwrt-spp-v2-1[2021]-x86-64-generic-squashfs-uefi.img ./op

[root@localhost openwrt]# tar czf openwrt.tar.gz -C ./op .

[root@localhost openwrt]# docker import openwrt.tar.gz  rocdk890/openwrt-x86-64

[root@localhost openwrt]# umount op  卸载
```

接下来运行docker openwrt镜像

3.打开网卡混杂模式

```
[root@localhost openwrt]# ip link set ens33 promisc on
```

4.创建网络

```
[root@localhost openwrt]# docker network create -d macvlan --subnet=192.168.18.0/24 --gateway=192.168.18.1 -o parent=ens33 openwrt-LAN
```

5.运行docker openwrt

```
[root@myvps openwrt]# docker run --restart always --name openwrt -d --network openwrt-LAN --privileged rocdk890/openwrt-x86-64 /sbin/init
```

6.进入容器并修改相关参数

```
[root@myvps openwrt]# docker exec -it openwrt sh

vi /etc/config/network

config interface 'lan'
	option ifname 'eth0'
	option proto 'static'
	option ipaddr '192.168.18.2'
	option netmask '255.255.255.0'
	option gateway '192.168.18.1'
	option dns '192.168.18.1'
	option broadcast '192.168.2.255'
	
```

上面的参数根据自身的情况调整

- `proto`设置使用静态分配IP地址的方式`static`
- `ipaddr`为OpenWrt系统分配的静态IP，这里我分配的是`192.168.18.2`(注意: 这个IP地址不要与你本地网络已有的IP地址冲突)
- `netmask`为子网掩码`255.255.255.0`
- `gateway`为路由器(硬路由)的网关，通常就是你访问路由器的IP地址，这里我是`192.168.18.1`
- `dns`为`DNS`服务器的地址，可以是运营商的地址，比如`114.114.114.114`,这里我直接用的路由器的地址`192.168.18.1`
- `broadcast`为广播地址`192.168.18.255`

保存后,重启网络 /etc/init.d/network restart

最后使用浏览器访问http://192.168.18.2

如无法联网，检查/etc/resolv.conf配置文件，需要更改nameserver 127.0.0.11为nameserver 127.0.0.1
```
/ # vi /etc/resolv.conf
search lan
nameserver 127.0.0.11
options ndots:0
```
