---
title: OpenWrt 安装教程
icon: 
order: 2
category:
  - 安装教程
tag:
  - OpenWrt
---

## 一、准备u盘

准备u盘（后续会被完全擦除），打开wePE（一种常用的WinPE [^1]安装工具，其中还包括了许多常用工具）[微PE官网](https://www.wepe.com.cn/download.html)

[^1]: WinPE:极度精简的、可以在U盘运行的Windows系统

点击“安装到U盘”

![](/assets/OpenWrt-Install/95a4c7ba5aac14a4099bf7e6d0095f0b_MD5.jpeg)

设置微PE选项

![](/assets/OpenWrt-Install/51c014518ea36ee154fd9328590abfb3_MD5.jpeg)

将DiskImage和[esir的OpenWrt镜像](https://drive.google.com/drive/folders/1uRXg_krKHPrQneI3F2GNcSVRoCgkqESr)放到u盘中

![](/assets/OpenWrt-Install/15d7b98336df425e41f778819b6bea94_MD5.jpeg)

将u盘从电脑拔下

---

## 二、写入OpenWrt

### 1. WinPE安装

插入软路由，给软路由接一套键鼠

 插电开机，开机过程中狂按Esc（也可能是Del或F1、F2、F10、F11、F12等）进入BIOS，选择从u盘启动

 在写盘之前推荐用DiskGenius（微PE中内置）将目标硬盘清空

![](/assets/OpenWrt-Install/57de92cafc70d3bc6c3fcf72ce7b0708_MD5.jpeg)

![](/assets/OpenWrt-Install/0e88e6895bf4d96ecddbc120977943d2_MD5.jpeg)

### 2. 写入镜像

进入C盘，打开“[DiskImage](https://roadkil.net/program.php/P12/Disk%20Image)”

![](/assets/OpenWrt-Install/988500df1d0191b6e98734da0d889c46_MD5.jpeg)

等待进度条走完即可

写入完成后拔掉u盘，重启软路由，稍等系统初始化

当屏幕中显示`Please press enter to activite this console`时，就说明大功告成

---

## 三、初始配置OpenWrt

回车进入OpenWrt终端

![](/assets/OpenWrt-Install/a251c2e30124fb93440dcc2237b16887_MD5.jpeg)

### 1. 设置密码

在终端输入`passwd`并回车
在`New Password:`输入密码，并回车
在`Retype Password:`再次输入密码，并回车
注意密码是隐藏显示的

![](/assets/OpenWrt-Install/77de6a10a109b7184aec4efd76623799_MD5.jpeg)

### 2. 配置软路由网络和端口

在终端中输入`vi /etc/config/network`并回车
按“i”进入输入模式，此时屏幕左下方显示`--INSERT--` 

![](/assets/OpenWrt-Install/5bba1b4892f4190aa4bfd82650f8c8de_MD5.jpeg)

将lan口改为eth1，将wan口改为eth0

![](/assets/OpenWrt-Install/dc2be99a55a34ccd5a66a639123aa75c_MD5.jpeg)

如果输入错了：按“Esc”退出输入模式后，按“U”即可撤销上一个操作

修改完成后按“Esc”退出输入模式，然后按“Shift”和分号键，随后在出现的冒号后输入`wq`保存并退出
然后输入`reboot`并回车重启软路由

### 3. 进入OpenWrt面板 

将电脑网口和软路由接口相连
在浏览器中输入192.168.5.1进入OpenWrt控制面板
用户名是root，密码是刚刚设置的密码

---

## 四（一）OpenWrt的主路由设置

将电脑网口和软路由ETH1口相连，将光猫LAN口与软路由WAN口相连


![](/assets/OpenWrt-Install/dd3f5555bc70f7e8dd5faa9b46ca85f2_MD5.jpeg)

将WAN口传输协议改为“PPPoE”，输入宽带账号密码

![](/assets/OpenWrt-Install/c0f30fefd2678e4de1be31c139de5253_MD5.jpeg)

若无法获得宽带账号密码，此步可暂时维持为“DHCP模式” 

---

## 四（二）OpenWrt的旁路由设置

将电脑网口和软路由随意接口相连

**旁路由可以理解为接入在内网的一台普通机器**，只要你能知道它的内网IP，在本地网络中直接编辑网关和DNS服务器指向它即可。

旁路由不管接用LAN还是WAN接入理论上都可以，只不过WAN口接入的话，网关指过去可能会让连接的机器失去NAT能力，影响内网穿透等服务，所以还是建议接LAN口。

如果想内网流量都自动经过它，则只需在主路由上的DHCP分配网关、DNS设置为旁路由即可。

### 1. 旁路由上的设置

![](/assets/OpenWrt-Install/302bc5dff0730f8b84f35b294999d777_MD5.jpeg)

接入内网接口协议改为“静态地址”，我这里使用的LAN口，“网关”设置成“主路由IP”，“DNS”设置为“主路由IP”。

![](/assets/OpenWrt-Install/7870ae602ebf76ebbef86669f5cc33a0_MD5.jpeg)

DNS设置为主路由IP

如果你的主路由支持修改DHCP分配的网关到旁路由，并且你想使用主路由进行DHCP，则这里需要忽略。

![](/assets/OpenWrt-Install/5088d3cda19eaa087371877742c2e6d3_MD5.webp)

### 2. 所有流量都经过旁路由的设置

梅林支持自定义DHCP的分配的网关和DNS服务器，所以我这里填写：

**主路由的DHCP分配网关**设置为旁路由，结合上图**默认网关**我这里应该填写172.16.1.23，请根据实际情况调整

**主路由DHCP分配DNS**为任意公共**DNS服务器**如114.114.114.114

不要按照图上填！**不要按照图上填！**不要按照图上填！**不要按照图上填！**

![](/assets/OpenWrt-Install/aa65aed3e8a2f21d19d4e5c630ea9430_MD5.webp)

注：部分无法自定义DHCP分配网关的路由器或系统，**只能将DHCP服务在旁路由开启！**

### 3. 个别机器流量经过旁路由的设置

无需操作主路由，在PC中【网络->适配器选项->双击适配器->属性->双击Internet协议版本4(TCP/IPv4)】，修改网关和DNS指向到旁路由即可，Mac同理。

![](/assets/OpenWrt-Install/24033d6a6c9be707363ff5a0527662e5_MD5.webp)

### 4. 后话

这样就设置完毕了，如果有网页打不开，可以关闭浏览器并在cmd中输入 **ipconfig /flushdns** 命令刷新DNS缓存试试。

**注：**部分OpenWrt固件可能导致无线设备连接主路由AP无法上网，可尝试在旁路由防火墙加入规则，开启NAT：

```text
iptables -t nat -I POSTROUTING -j MASQUERADE
```

**或者尝试关闭** 网络->负载均衡

话外题：一般来说，接旁路由主要是网络环境不可控或过于复杂，比如在公司，不可能自己带个路由换上去当主路由，这时候比较适合旁路由的方法。如果家庭条件允许，最好是由OpenWrt来做主路由，WIFI设备做AP的方式来构建局域网。

---

## 五、获取IPv6地址

### 1. 软路由获取IPv6地址

删除OpenWrt自带的WAN6接口，然后创建新的WAN6接口

协议选择“DHCPv6客户端”，自定义接口名称为“@wan”

![](/assets/OpenWrt-Install/2b27faeb05697b49328a4609fc33b5d1_MD5.jpeg)

进入WAN6口的防火墙设置，选择WAN口的防火墙区域

![](/assets/OpenWrt-Install/768f313950530520f01c583b3797fc15_MD5.jpeg)

过一会之后即可获取到ipv6地址

若光猫未处于桥接模式下，公网IPv6的分配可能被光猫拦截

### 2. 下游设备分配IPv6地址和局域网IPv4地址

编辑LAN口，在“基本设置”处更改IPv6分配长度为“64”



![](/assets/OpenWrt-Install/9e71d25a2c9330e92a3a206900b1891b_MD5.jpeg)

点击“物理设置”，勾选除eth0之外所有接口，就可以让其他接口也同属于LAN的配置下



![](/assets/OpenWrt-Install/cfaf2182973d95007b92873b482e5fe5_MD5.jpeg)

点击“ipv6设置”，将“路由通告服务”和“DHCPv6服务”均改为“服务器模式”



![](//assets/OpenWrt-Install/c0c421ddfdcdd490eb62f29578d542b4_MD5.jpeg)

这样所有LAN口就都可以正常使用，并且可以为所有下游设备分配IPv6与局域网IPv4地址


