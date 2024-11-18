# Dockerfile



## 指令详解



| Dockerfile 指令 | 说明                                                         |
| :-------------- | :----------------------------------------------------------- |
| **FROM**        | **指定基础镜像，用于后续的指令构建。**                       |
| **MAINTAINER**  | **指定Dockerfile的作者/维护者。（已弃用，推荐使用LABEL指令）** |
| **LABEL**       | **添加镜像的元数据，使用键值对的形式。**                     |
| **RUN**         | **在构建过程中在镜像中执行命令。**                           |
| **CMD**         | **指定容器创建时的默认命令。（可以被覆盖）**                 |
| **ENTRYPOINT**  | **设置容器创建时的主要命令。（不可被覆盖）**                 |
| **EXPOSE**      | **声明容器运行时监听的特定网络端口。**                       |
| **ENV**         | **在容器内部设置环境变量。**                                 |
| **ADD**         | **将文件、目录或远程URL复制到镜像中。**                      |
| **COPY**        | **将文件或目录复制到镜像中。**                               |
| **VOLUME**      | **为容器创建挂载点或声明卷。**                               |
| **WORKDIR**     | **设置后续指令的工作目录。**                                 |
| **USER**        | **指定后续指令的用户上下文。**                               |
| **ARG**         | **定义在构建过程中传递给构建器的变量，可使用 "docker build" 命令设置。** |
| **ONBUILD**     | **当该镜像被用作另一个构建过程的基础时，添加触发器。**       |
| **STOPSIGNAL**  | **设置发送给容器以退出的系统调用信号。**                     |
| **HEALTHCHECK** | **定义周期性检查容器健康状态的命令。**                       |
| **SHELL**       | **覆盖Docker中默认的shell，用于RUN、CMD和ENTRYPOINT指令。**  |



Dockerfile 的指令每执行一次都会在 docker 上新建一层。所以过多无意义的层，会造成镜像膨胀过大。例如：

```
FROM centos
RUN yum -y install wget
RUN wget -O redis.tar.gz "http://download.redis.io/releases/redis-5.0.3.tar.gz"
RUN tar -xvf redis.tar.gz
```

以上执行会创建 3 层镜像。可简化为以下格式：

```
FROM centos
RUN yum -y install wget \
    && wget -O redis.tar.gz "http://download.redis.io/releases/redis-5.0.3.tar.gz" \
    && tar -xvf redis.tar.gz
```

如上，以 **&&** 符号连接命令，这样执行后，只会创建 1 层镜像。





## 1. 基础镜像

声明自定义镜像的基础镜像

```dockerfile
FROM centos
```

## 2. 描述信息

此处可以声明镜像的负责人、版本、构建时间、描述等一系列信息，此处可以声明任何信息

```dockerfile
LABEL maintainer=tingtiandadi@360.cn
LABEL version="1.0"
LABEL date="2020/03/08"
LABEL description="RPM软件包制作"
```

## 3. 安装镜像执行指令

### 3.1 USER

执行Dockerfile中shell指令时指定的用户，包括：RUN、CMD、ENTRYPOINT

```crmsh
USER <user>[:<usergroup>]
USER root
```

### 3.2 EXPOSE

指定容器运行时的服务端口

格式为 `EXPOSE <端口1> [<端口2>...]`。

```apache
EXPOSE 80 443
```

### 3.3 WORKDIR

为Dockerfile中执行的指令设置工作目录，包括：ADD、COPY、RUN、CMD、ENTRYPOINT

格式为 `WORKDIR <工作目录路径>`

使用 `WORKDIR` 指令可以来指定工作目录（或者称为当前目录），以后各层的当前目录就被改为指定的目录，如该目录不存在，`WORKDIR` 会帮你建立目录。

```dockerfile
WORKDIR /root
```

### 3.4 ADD

拷贝文件/目录到镜像中

`ADD` 指令和 `COPY` 的格式和性质基本一致。但是在 `COPY` 基础上增加了一些功能。比如 `<源路径>` 可以是一个 `URL`，这种情况下，Docker 引擎会试图去下载这个链接的文件放到 `<目标路径>` 去。下载后的文件权限自动设置为 `600`，如果 `<源路径>` 为一个 `tar` 压缩文件的话，压缩格式为 `gzip`, `bzip2` 以及 `xz` 的情况下，`ADD` 指令将会自动解压缩这个压缩文件到 `<目标路径>` 去。

```dockerfile
ADD <src>...<dest>
ADD rpmbuild.tar.gz /root/
ADD https://xxx.com/rpmbuild.tar.gz /root/
```

### 3.5 COPY

拷贝文件/目录到镜像中，用法与ADD相同，但是不支持自动下载和解压

- `COPY [--chown=<user>:<group>] <源路径>... <目标路径>`
- `COPY [--chown=<user>:<group>] ["<源路径1>",... "<目标路径>"]`

和 `RUN` 指令一样，也有两种格式，一种类似于命令行，一种类似于函数调用。`COPY` 指令将从构建上下文目录中 `<源路径>` 的文件/目录复制到新的一层的镜像内的 `<目标路径>` 位置。

`<源路径>` 可以是多个，甚至可以是通配符，其通配符规则要满足 Go 的 [`filepath.Match`](https://golang.org/pkg/path/filepath/#Match) 规则；

`<目标路径>` 可以是容器内的绝对路径，也可以是相对于工作目录的相对路径（工作目录可以用 `WORKDIR`指令来指定）。目标路径不需要事先创建，如果目录不存在会在复制文件前先行创建缺失目录。

使用 `COPY` 指令，源文件的各种元数据都会保留。比如读、写、执行权限、文件变更时间等。

```dockerfile
ADD /home/mysql_cron /etc/cron.d/
```

### 3.6 VOLUME

把主机的目录挂载到docker中，类似nfs文件共享，一般很少用，大多在**[docker run](https://yq.aliyun.com/articles/748427)**中用-v来进行挂载

格式为：

- `VOLUME ["<路径1>", "<路径2>"...]`
- `VOLUME <路径>`

```css
VOLUME ["/usr/local/"]
VOLUME /usr/local/
```

### 3.7 ARG

在构建镜像时指定的参数

```dockerfile
ARG user
USER $user
```

只需要在**[docker build](https://yq.aliyun.com/articles/749590)**时带上user参数即可

```n1ql
docker build --build-arg user=root -f dockerfile_rpmbuild .
```

### 3.8 RUN

`RUN` 指令是用来执行命令行命令的。由于命令行的强大能力，`RUN` 指令在定制镜像时是最常用的指令之一。其格式有两种：

- `shell格式`：`RUN <命令>`，就像直接在命令行中输入的命令一样。刚才写的 Dockerfile 中的 `RUN` 指令就是这种格式；
- `exec格式`：`RUN ["可执行文件", "参数1", "参数2"]`，这更像是函数调用中的格式;

Dockerfile 中每一个指令都会建立一层，`RUN` 也不例外。每一个 `RUN` 的行为，都会新建立一层，在其上执行这些命令，执行结束后，`commit` 这一层的修改，构成新的镜像，所以建议多个指令使用一个`RUN`命令执行；

```routeros
RUN ["yum", "install", "net-tools", "-y"]
RUN yum install net-tools -y


FROM debian:jessie

RUN buildDeps='gcc libc6-dev make' s\
    && apt-get update \
    && apt-get install -y buildDeps
```

### 3.9 ENV

设置当前系统内环境变量

两种格式：

- `ENV <key> <value>`
- `ENV <key1>=<value1> <key2>=<value2>...`

这个指令很简单，就是设置环境变量而已，无论是后面的其它指令，如 `RUN`，还是运行时的应用，都可以直接使用这里定义的环境变量。

下列指令可以支持环境变量展开： `ADD`、`COPY`、`ENV`、`EXPOSE`、`LABEL`、`USER`、`WORKDIR`、`VOLUME`、`STOPSIGNAL`、`ONBUILD`

```apache
ENV JAVA_HOME /usr/local/jdk1.8.0_231
```

### 3.10 HEALTHCHECK

检查容器是否在仍在工作

```awk
HEALTHCHECK --interval=5m --timeout=3s --retries=3 \
    CMD curl -f http:/localhost/ || exit 1
```

- 选项说明：
  --interval=DURATION (default: 30s)：每隔多长时间探测一次，默认30秒

-- timeout= DURATION (default: 30s)：服务响应超时时长，默认30秒
--start-period= DURATION (default: 0s)：服务启动多久后开始探测，默认0秒
--retries=N (default: 3)：认为检测失败几次为宕机，默认3次

- 返回值说明：
  0：容器成功是健康的，随时可以使用

1：不健康的容器无法正常工作
2：保留不使用此退出代码

## 4. 容器启动执行指令

### 4.1 CMD方式

可以编辑多条，每条指令按顺序执行。

两种格式：

- `shell` 格式：`CMD <命令>`
- `exec` 格式：`CMD ["可执行文件", "参数1", "参数2"...]`

```dockerfile
CMD ["-C", "/start.sh"] 
CMD ["/usr/sbin/sshd", "-D"] 
CMD /usr/sbin/sshd -D
CMD ["nginx", "-g", "daemon off;"]
```

### 4.2 ENTRYPOINT方式

同CMD类似，但这种方式执行的命令不会被**[docker run](https://yq.aliyun.com/articles/748427)**执行的参数所覆盖，同时**[docker run](https://yq.aliyun.com/articles/748427)**执行的参数会传到此方式执行的脚本中。

```dockerfile
ENTRYPOINT [ "rpmbuild", "-bb" , "/root/rpmbuild/SPEC/mysql-install.spec"]
ENTRYPOINT [ "dpkg", "-b", "mysql-install", "mysql-install.deb"]
```

**重要提示：ENTRYPOINT可以有多行，但是执行时只有最后一行生效，切记！**

# 三、Dockerfile实例

```dockerfile
# 基础镜像
FROM centos

# 描述信息
LABEL maintainer=tingtiandadi@360.cn
LABEL version="1.0"
LABEL date="2020/03/08"
LABEL description="RPM软件包制作"

# 安装镜像执行指令
WORKDIR /root
USER root

RUN rpm -ivh net-tools-2.0-0.51.20160912git.el8.x86_64.rpm
RUN yum install rpm-build-4.14.2-25.el8.x86_64 -y

# 启动容器执行指令
ENTRYPOINT [ "rpmbuild", "-bb", "rpmbuild/SPEC/*.spec"]
```

### 多阶段构建

构建Docker镜像的过程中，最具挑战性的事情就是如何保证Docker镜像的尺寸能够尽可能的小。但是在编译的过程中，我们可能会产生一些多余的中间件，但是很多情况下我们可能只需要最终的可运行的二进制文件，并不需要编译环境中的多余组件。

实际上，通常只有一个`Dockerfile`用于开发（包含构建应用程序所需的一切），而精简的`Dockerfile`用于生产时，它仅包含您的应用程序以及运行它所需的内容。这被称为“构建者模式”。维护两个`Dockerfile`是不理想的，并且也会十分复杂。

- `Dockerfile.build`：用于开发构建的`Dockerfile`；
- `Dockerfile`：用于生产环境的`Dockerfile`；
- `build.sh`：构建第一个镜像并从中创建一个容器以复制出最终的二进制运行文件，然后构建第二个镜像；

#### 2.1.1、Dockerfile.build

**dockerfile**

```
FROM golang:1.7.3
WORKDIR /go/src/github.com/alexellis/href-counter/
COPY app.go .
RUN go get -d -v golang.org/x/net/html \
  && CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o app .
```

#### 2.1.2、Dockerfile

**dockerfile**

```
FROM alpine:latest  
RUN apk --no-cache add ca-certificates
WORKDIR /root/
COPY app .
CMD ["./app"]
```

#### 2.1.3、build.sh

**dockerfile**

```
#!/bin/sh
echo Building alexellis2/href-counter:build

docker build --build-arg https_proxy=$https_proxy --build-arg http_proxy=$http_proxy \  
    -t alexellis2/href-counter:build . -f Dockerfile.build

docker container create --name extract alexellis2/href-counter:build  
docker container cp extract:/go/src/github.com/alexellis/href-counter/app ./app  
docker container rm -f extract

echo Building alexellis2/href-counter:latest

docker build --no-cache -t alexellis2/href-counter:latest .
rm ./app
```

### 2.2、使用多阶段构建

极大的降低了复杂度，第二`FROM`条指令以`alpine:latest`图像为基础开始新的构建阶段。该`COPY --from=0`行仅将先前阶段中构建产生的文件复制到当前的构建阶段中，Go相关的SDK和任何中间工件都没有保存在最终景象中;

**dockerfile**

```
FROM golang:1.7.3
WORKDIR /go/src/github.com/alexellis/href-counter/
RUN go get -d -v golang.org/x/net/html  
COPY app.go .
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o app .

FROM alpine:latest
RUN apk --no-cache add ca-certificates
WORKDIR /root/
COPY --from=0 /go/src/github.com/alexellis/href-counter/app .
CMD ["./app"]
```

## 三、多阶段构建的使用姿势

### 3.1、阶段的命名

- `整数编号`：默认情况下，构建阶段未命名，但是我们可以使用整数编号来进行引用，起始编号为`0`；
- `AS <NAME>`命名：在使用`FROM`指令中同时使用`AS [NAME] `来进行阶段的命名操作；

### 3.2、特定的构建阶段停止

示例Dockerfile：

**dockerfile**

```
FROM golang:1.7.3 AS builder
WORKDIR /go/src/github.com/alexellis/href-counter/
RUN go get -d -v golang.org/x/net/html  
COPY app.go    .
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o app .

FROM alpine:latest  
RUN apk --no-cache add ca-certificates
WORKDIR /root/
COPY --from=builder /go/src/github.com/alexellis/href-counter/app .
CMD ["./app"]
```

构建镜像时，不一定需要构建包括每个阶段的整个Dockerfile。您可以指定目标构建阶段，以下命令含义为`builder`的阶段构建停止：

**bash**

```
docker build --target builder -t alexellis2/href-counter:latest .
```

### 3.3、将外部镜像作为阶段使用

使用多阶段构建时，您不仅限于从之前在`Dockerfile`中创建的阶段进行复制。您可以使用`COPY --from`指令从单独的映像进行复制，方法是使用本地映像名称，本地或`Docker`注册表上可用的标签或标签ID。Docker客户端在必要时提取映像并从那里复制工件。语法为：

**dockerfile**

```
COPY --from=nginx:latest /etc/nginx/nginx.conf /nginx.conf
```

## 四、多阶段构建的理解

### 4.1、docker的层级概念

- `文件层级`：`Docker`镜像可以理解为由多层的文件构成，当进行镜像的构建过程中，每执行一次`RUN`指令，镜像中就会增加一层；
- `起始层（根镜像）`：构建镜像的时候需要使用`FROM`指令选择一个基础镜像，即根镜像，后续所有的操作都会基于这个根镜像进行，`Docker`镜像只允许有一个根镜像，在多阶段构建中虽然使用了多个`FROM`指令，但是只有最后一个才是最终构建的根镜像；
- `层共享`：当我们的操作系统中只存在一个镜像，且该镜像的层数为`5`，当我们基于这个镜像构建新的镜像（新镜像比之前的镜像多出`2层`）进行构建的时候，最终在系统一共保存了`7层`，而不是`5+7=12层`，这就是`Docker`镜像的层共享；
- `联合挂载`：由于`Docker`的每一层只记录文件变更，因此在新启动一个容器的时候会计算当时使用镜像的每一层的信息，最终生成一个文件系统，这就是联合挂载的含义；

### 4.2、多个FROM的理解

- `中间产物`：在执行多个`FROM`之后，系统内会存在多个没有名称和`TAG`的无名镜像，这些镜像就是在多阶段构建中产生的中间镜像；
- `最终依赖`：多阶段构建中的多个`FROM`中只有最后一个`FROM`的镜像才是最终镜像的根镜像，在构建才是最终构建的根镜像；



### 从 rootfs 压缩包导入构建

除了标准的使用 `Dockerfile` 生成镜像的方法外，由于各种特殊需求和历史原因，还提供了一些其它方法用以生成镜像。

格式：`docker import [选项] <文件>|<URL>|- [<仓库名>[:<标签>]]`

压缩包可以是本地文件、远程 Web 文件，甚至是从标准输入中得到。压缩包将会在镜像 `/` 目录展开，并直接作为镜像第一层提交。

比如我们想要创建一个 [OpenVZ](https://openvz.org/Main_Page) 的 Ubuntu 14.04 [模板](https://openvz.org/Download/template/precreated)的镜像：

**bash**

```
docker import \
    http://download.openvz.org/template/precreated/ubuntu-14.04-x86_64-minimal.tar.gz \
    openvz/ubuntu:14.04
```

这条命令自动下载了 `ubuntu-14.04-x86_64-minimal.tar.gz` 文件，并且作为根文件系统展开导入，并保存为镜像 `openvz/ubuntu:14.04`。