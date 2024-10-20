---
title: OpenWrt 为 Docker 扩容
icon: 
order: -1
category:
  - 配置教程
tag:
  - OpenWrt
  - Docker
---

OpenWrt 默认只给 Docker 约 200 MB 的空间，完全不够折腾的，一拉取镜像就提示 “no space left on device” 。必须要扩容！

**打开`系统 > 磁盘管理`**

![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402151450335.png)

选择对应磁盘，点击“修改进入修改界面”

![f5be80847444639c6b86876b11c40c8.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402151452446.png)

找到对应磁盘，Free Space 新建，再格式化剩余空间

![7c439467833109158c46cd0c699ab53.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402151452750.png)

分区格式选择：ext4

**打开`系统 > 挂载点`**

![f3a93224294591beade5c502add99f1.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402151453997.png)

下拉到”挂载点“，点击最下方的“添加”

![3f8cca62a75884e864a4f75e96f725a.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402151455436.png)

“启用此挂载点”打勾，“UUID”选择对应磁盘，“挂载点”选择“作为 Docker 数据分区使用”，点击“保存&应用”

**最后重启 OpenWrt 系统**

![fc9f94d330a7bd2247c467aceeb6c44.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402151458165.png)

重启后来到`Docker > 概览`，此时可以看到 Docker 扩容已经成功


