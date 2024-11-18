# Linux离线安装Docker

#### 下载Docker

Docker官网：[Docker: Accelerated Container Application Development](https://www.docker.com/)

Docker引擎安装说明：[在 CentOS 上安装 Docker 引擎 |Docker 文档](https://docs.docker.com/engine/install/centos/)

Docker二进制安装说明：[从二进制文件安装 Docker 引擎 |Docker 文档](https://docs.docker.com/engine/install/binaries/)

因为这里要使用离线安装Docker，所以为二进制安装。需要下载二进制文件。下载地址：https://download.docker.com/linux/static/stable/x86_64/

选择版本进行下载，下载成功后解压docker包。

```sh
tar -zxvf docker-26.1.3.tgz
```

#### 安装Docker

将解压出来的`docker`文件内容拷贝或者移动到 `/usr/bin/`目录下

```sh
cp -rf docker/* /usr/bin/
```

然后就可以使用 `docker -v` 或者 `docker info` 命令验证是否可以输出`docker`信息了。因为没有开启守护进程，docker 其他命令还不能使用。所以需要编写`docker.service` 文件加入Linux服务当中并开启守护进程。

编辑文件:

```sh
vim /etc/systemd/system/docker.service
```

添加内容：

```sh
[Unit]
Description=Docker Application Container Engine
Documentation=https://docs.docker.com
After=network-online.target firewalld.service
Wants=network-online.target
  
[Service]
Type=notify
# the default is not to use systemd for cgroups because the delegate issues still
# exists and systemd currently does not support the cgroup feature set required
# for containers run by docker
ExecStart=/usr/bin/dockerd -H unix:///var/run/docker.sock --selinux-enabled=false --default-ulimit nofile=65536:65536
ExecReload=/bin/kill -s HUP $MAINPID
# Having non-zero Limit*s causes performance problems due to accounting overhead
# in the kernel. We recommend using cgroups to do container-local accounting.
LimitNOFILE=infinity
LimitNPROC=infinity
LimitCORE=infinity
# Uncomment TasksMax if your systemd version supports it.
# Only systemd 226 and above support this version.
#TasksMax=infinity
TimeoutStartSec=0
# set delegate yes so that systemd does not reset the cgroups of docker containers
Delegate=yes
# kill only the docker process, not all processes in the cgroup
KillMode=process
# restart the docker process if it exits prematurely
Restart=on-failure
StartLimitBurst=3
StartLimitInterval=60s
  
[Install]
WantedBy=multi-user.target
```

如果需要开启远程服务`ExecStart`属性修改为以下命令：

```sh
ExecStart=/usr/bin/dockerd -H tcp://0.0.0.0:2375 -H unix:///var/run/docker.sock --selinux-enabled=false --default-ulimit nofile=65536:65536

# -H tcp://0.0.0.0:2375 开启远程连接命令
```

添加文件可执行权限

```sh
chmod +x /etc/systemd/system/docker.service
```

配置成功后，重新加载 daemon 服务

```sh
systemctl daemon-reload
```

启动 docker 服务

```sh
systemctl start docker

systemctl enable docker
```

#### 配置Docker镜像

在目录 `etc` 下面创建一个 `docker` 文件夹，进入 `docker`目录创建 `daemon.json` 文件

```sh
vim daemon.json
```

加入从阿里云申请的镜像源地址。

```sh
{
  "registry-mirrors": ["https://ejes884z.mirror.aliyuncs.com"],
  "log-driver":"json-file",
  "log-opts": {"max-size":"1g", "max-file":"3"},
  "live-restore": true
}

# registry-mirrors 个人镜像源地址, 如果有多个仓库， 在相应的列表里增加即可。
# log-driver log-opts 全局配置容器日志大小，如果不配置没有限制大小，后面有可能会导致磁盘崩盘
# live-restore 更新daemon.json配置文件时，自动加载配置，不用重新启动Docker
```

配置成功后，重新启动Docker

**安装 docker-compose**

1、下载docker-compose 文件

https://github.com/docker/compose/releases/tag/v2.18.1

2、上传至服务器并复制到指定目录

```
# 复制到 /usr/local/bin
cp docker-compose-linux-x86_64 /usr/local/bin/docker-compose
# 设置可执行
chmod +x /usr/local/bin/docker-compose
# 创建软链
ln -sf /usr/local/bin/docker-compose /usr/bin/docker-compose
```

3、确定是否成功

```
docker-compose version
```