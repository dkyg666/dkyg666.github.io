---
title: 黑群辉安装教程
icon: 
order: 2
category:
  - 安装教程
tag:
  - Synology
---

## 准备工作：

1、引导U盘1个≥4G ；（建议用品牌U盘）（注：U盘以后要一直插在群晖设备上） 

引导盘推荐用U盘，灵活方便。(当前支持 SATA/SCSI/NVME/MMC/IDE or USB 设备, 且要大于2GB推荐4G）不用U盘，用其它类型盘当作引导看这个：
[https://zhuanlan.zhihu.com/p/675182987](https://zhuanlan.zhihu.com/p/675182987)

2、工作电脑1台；

要求和群晖设备在同一个局域网，建议用有线连接，WiFi可能不稳定。  

3、准备装群晖的设备1台。(至少1块SATA接口硬盘，内存: 需要≥ 4GB.）

设备插好网线(路由器开启DHCP)、鼠标、键盘、显示器、硬盘备用。  



::: details 黑群晖一般只支持机械硬盘。制作全固态/全闪存NAS方法

暂时只能 新版U盘引导+SA6400 才能支持NVMe盘做系统盘。

方法：开机 > 选择中文 > 选择型号 (SA6400) > 选择版本 DSM7.2 > 添加插件 (HDDdb、NvmeSystem、NvmeVolume) > 填入洗白码 (可选) > 编译群晖引导。

:::

::: warning 安装前注意事项：  

DT的型号目前不支持HBA扩展卡(较新版本的RR引导 SA6400 支持).  

NVME的PCIPATH有两种格式, 单层路径的兼容 DT 的型号, 多层路径的兼容 DS918+ 等型号.
:::

::: warning 安装中注意事项：

安装后注意事项：  
1、不要拔掉U盘，需要一直插着U盘。  
2、不要点升级。不要点升级。不要点升级，因为是黑群hui。

![image.png](https://www.nas50.cn/zb_users/upload/2024/04/202404271714192284175459.png)  
3、不懂就不要随意删除“任务计划”里面的任务。

![image.png](https://www.nas50.cn/zb_users/upload/2024/04/202404271714192030238092.png)

![image.png](https://www.nas50.cn/zb_users/upload/2024/04/202404271714191961334233.png)

:::

## 一、群辉引导U盘制作、系统安装

### 1. 下载基本文件

进入网站下载arpl巴西大佬群晖引导：[RROrg/rr: Redpill Recovery (arpl-i18n)](https://github.com/RROrg/rr/releases)

下翻并选择后缀为 .img.zip 的文件，点击下载。

![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407080452810.png)

得到文件使用解压缩软件进行解压缩，得到文件：`rr.img` 。

下载Rufus写盘工具：[Rufus - 轻松创建 USB 启动盘](https://rufus.ie/zh/)

下拉并找到下载选项，点击下载Windows版本文件。

![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407080445788.png)

下载后点击应用程序文件进行安装，并将作为群辉引导的U盘接入电脑。

::: caution
U盘以后要一直插在群晖设备上，且写入系统时会被格式化！请妥善备份该U盘中的文件！
:::

### 2. 将黑群晖系统写入U盘

![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407080501796.png)

之后一路点击 “确定” 开启硬盘写入。

当状态栏显示 “准备就绪” 就成功了。

![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407080504409.png)

引导制作完成，将该U盘拔出电脑，插入NAS机器中。同时接上键鼠、显示器、网线。

准备完成后点击开机键开机，开机同时不断按 ‘Delete’ 键进入 BIOS 界面。

![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407082152873.png)


点击 ’→‘ 到 “Boot” 选项，点击 ’↓‘ 到 “Boot Option #1” 选项，点击 ‘Enter’ 后在弹出的对话框选择刚刚引导的U盘。

![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407082153446.png)

选择 “Save Changes and Exit”，在弹出的对话框中选择 ‘Yes’ 。

![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407082153567.png)

之后屏幕会跑一阵时间代码，最终会显示一个内网ip地址，以7681端口为结尾。

![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407082159456.png)

### 3. 群辉系统引导编译

用另一台电脑（连接同一内网）登录该地址，进入自编译界面。此处按 ’↑‘ 键和 ’↓‘ 键可选中不同选项，按 ’Enter‘ 键进入设置。

选中 “choose a language” 可选择语言，如更换为中文。此处保持英文。

![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407092207326.png)

选中 “choose a model” 以选择型号。一般选择918，在某些不支持的固件上可能不显示该选项，此时可以改选其他引导，如3615。

![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407092006535.png)

选中 “Choose a version” 以选择系统版本。可直接选择最新版本并回车。

![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407092201658.png)

在弹出的版本页面，点击URL下载当前引导的系统文件。下载好的系统文件后缀为pat，然后回车确认。

![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407092203057.png)

选中 “Build the loader” 以编译引导。PR会自动完成引导的编译。

![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407092205196.png)

编译好引导后会自动跳转到主菜单的启动选项，直接点击 “Boot the loader” 启动即可。

![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407092215244.png)

系统自动启动，等待1-2分钟后使用页面弹出的ip地址访问即可进入到系统安装步骤

![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407092216920.png)

::: note
步骤12中的ip地址不一定正确，可以在 http://find.synology.com/ 搜索安装。（软件已经放在网盘中），双击进入系统安装步骤。
:::

### 4. 群辉系统安装

浏览器输入刚刚获得的ip地址，进入系统安装页面，点击安装。

![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407092223868.png)

选择从计算机手动上传 .pat 文件，文件为选择系统版本时下载的文件，点击下一步

![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407092223785.png)

之后会安装系统，持续几分钟。

![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407092230164.png)

等待倒计时归零

![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407092231330.png)



## 二、群辉NAS初上手

## 三、群辉NAS进阶玩法

## 四、注意事项+补充