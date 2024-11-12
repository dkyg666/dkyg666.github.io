# NGINX



## 安装nginx

```
# Ubuntu使用apt安装
sudo apt install nginx

# nginx默认安装路径

 /usr/sbin/nginx:  主程序
 /etc/nginx:       存放配置文件
 /usr/share/nginx: 存放静态文件
 /var/log/nginx:   存放日志
 /run/nginx.pid:   nginx pid路径

```

## Docker方式安装

```
下载镜像
docker pull nginx:1.26.2

2 创建挂载目录
在宿主机上创建挂载目录，自己自定义放在哪里。
# 配置文件目录
mkdir -p /home/doubi/docker_dir/nginx/conf
# 站点目录
mkdir -p /home/doubi/docker_dir/nginx/html
# nginx日志目录
mkdir -p /home/doubi/docker_dir/nginx/log

# 递归赋予文件夹读写执行权限
chmod -R 777 /home/doubi/docker_dir/nginx

3 复制配置文件

# 启动容器
docker run --name nginx -p 8080:80 -d nginx:1.26.2
复制配置文件到宿主机

# 将容器中nginx.conf文件复制到宿主机的挂载目录中
docker cp nginx:/etc/nginx/nginx.conf /home/doubi/docker_dir/nginx/conf/nginx.conf
# 将容器中conf.d文件夹下内容复制到宿主机的挂载目录中
docker cp nginx:/etc/nginx/conf.d /home/doubi/docker_dir/nginx/conf/conf.d
# 将容器中的html文件夹复制到宿主机的挂载目录中，后面没有html
docker cp nginx:/usr/share/nginx/html /home/doubi/docker_dir/nginx


docker run -d -p 8080:8080 --name nginx --restart=always \
	-v /home/doubi/docker_dir/nginx/conf/nginx.conf:/etc/nginx/nginx.conf \
	-v /home/doubi/docker_dir/nginx/conf/conf.d:/etc/nginx/conf.d \
	-v /home/doubi/docker_dir/nginx/log:/var/log/nginx \
	-v /home/doubi/docker_dir/nginx/html:/usr/share/nginx/html \
	nginx:1.26.2
	

-d：后台运行
-p： 端口映射（宿主机端口：容器端口），nginx配置文件中默认使用的是80端口，所以容器的端口使用的是80，除非修改配置文件。
--name 创建容器的名称
--restart=always 容器停止后自动重启
-v 目录挂载（宿主机目录：容器目录）
最后的nginx表示镜像的名称
```





```
# CentOS

yum install gcc gcc-c++
yum install -y pcre pcre-devel
yum install -y zlib zlib-devel
yum install -y openssl openssl-devel

# Ubuntu

sudo apt update
sudo apt install build-essential
sudo apt install libpcre3 libpcre3-dev
sudo apt install zlib1g zlib1g-dev
sudo apt install openssl libssl-dev


```

```
#源码安装：
# Ubuntu

1.安装PCRE
# 使用源码安装
wget github.com/PCRE2Project/pcre2/releases/download/pcre2-10.42/pcre2-10.42.tar.gz
tar -zxf pcre2-10.42.tar.gz
cd pcre2-10.42
./configure
make
sudo make install

2.安装zlib
# 使用源码安装
wget http://zlib.net/zlib-1.2.13.tar.gz
tar -zxf zlib-1.2.13.tar.gz
cd zlib-1.2.13
./configure
make
sudo make install

3.安装OpenSSL
# 使用源码安装
wget http://www.openssl.org/source/openssl-1.1.1v.tar.gz
tar -zxf openssl-1.1.1v.tar.gz
cd openssl-1.1.1v
./Configure darwin64-x86_64-cc --prefix=/usr
make
sudo make install


```

##### [**下载Nginx**](https://dkyg666.github.io/other/软路由/OpenWrt/其他.html#五、下载nginx)

**1. 官网下载** 直接下载.tar.gz安装包，地址：https://nginx.org/en/download.html

```
wget -c https://nginx.org/download/nginx-1.26.2.tar.gz
```

**2. 解压** 

```
tar -zxvf nginx-1.26.2.tar.gz
cd nginx-1.26.2
```

**3. 配置**

```

./configure

./configure --prefix=/usr/local/nginx --with-http_stub_status_module --with-http_ssl_module

## openssl源解压路径

./configure --prefix=/usr/local/nginx --with-http_stub_status_module  --with-http_ssl_module --with-openssl=/root/openssl-1.1.1s

## 自定义配置（不推荐）

./configure \
--prefix=/usr/local/nginx \
--conf-path=/usr/local/nginx/conf/nginx.conf \
--pid-path=/usr/local/nginx/conf/nginx.pid \
--lock-path=/var/lock/nginx.lock \
--error-log-path=/var/log/nginx/error.log \
--http-log-path=/var/log/nginx/access.log \
--with-http_gzip_static_module \
--http-client-body-temp-path=/var/temp/nginx/client \
--http-proxy-temp-path=/var/temp/nginx/proxy \
--http-fastcgi-temp-path=/var/temp/nginx/fastcgi \
--http-uwsgi-temp-path=/var/temp/nginx/uwsgi \
--http-scgi-temp-path=/var/temp/nginx/scgi

```

**4. 编译安装**

```
make
make install

## 查找安装路径
whereis nginx
```

**5. Nginx systemctl配置**

```
vi /usr/lib/systemd/system/nginx.service
```

```
chmod +x /usr/lib/systemd/system/nginx.service
```

```
[Unit]
Description=The nginx HTTP and reverse proxy server
After=syslog.target network.target remote-fs.target nss-lookup.target

[Service]
Type=forking
PIDFile=/usr/local/nginx/logs/nginx.pid  
ExecStartPre=/usr/local/nginx/sbin/nginx -t -c /usr/local/nginx/conf/nginx.conf
ExecStart=/usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf
ExecReload=/usr/local/nginx/sbin/nginx -s reload
ExecStop=/usr/local/nginx/sbin/nginx -s stop
ExecQuit=/usr/local/nginx/sbin/nginx -s quit
PrivateTmp=true

[Install]
WantedBy=multi-user.target
```

```
## 在启动服务之前，需要先重载systemctl命令
systemctl daemon-reload

# 设置开机自启动
sudo systemctl enable nginx
# 取消开机自启动
sudo systemctl disable nginx
# 启动
sudo systemctl start nginx
 # 停止
sudo systemctl stop nginx
# 重启
sudo systemctl relaod nginx

systemctl status nginx
```



```

## 关闭防火墙
systemctl stop firewalld.service
systemctl disable firewalld.service
## 放行端口
firewall-cmd --zone=public --add-port=80/tcp --permanent
```

**6. 卸载Nginx**

```
apt-get --purge remove nginx
# 自动移除不使用的软件包
apt-get autoremove
# 罗列出与nginx相关的软件
dpkg --get-selections|grep nginx
# 删除上一步中查询出的软件
apt-get --purge remove nginx-common
apt-get --purge remove nginx-core

whereis nginx

find / -name nginx

rm -rf /usr/local/nginx 

```



**Nginx默认配置**

```

#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       mime.types;
   
    default_type  application/octet-stream;

    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    #access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;
    include /usr/local/nginx/conf/conf.d/*.conf;

    server {
        listen       80;
        server_name  localhost;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {
            root   html;
            index  index.html index.htm;
        }

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

        # proxy the PHP scripts to Apache listening on 127.0.0.1:80
        #
        #location ~ \.php$ {
        #    proxy_pass   http://127.0.0.1;
        #}

        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
        #
        #location ~ \.php$ {
        #    root           html;
        #    fastcgi_pass   127.0.0.1:9000;
        #    fastcgi_index  index.php;
        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
        #    include        fastcgi_params;
        #}

        # deny access to .htaccess files, if Apache's document root
        # concurs with nginx's one
        #
        #location ~ /\.ht {
        #    deny  all;
        #}
    }


    # another virtual host using mix of IP-, name-, and port-based configuration
    #
    #server {
    #    listen       8000;
    #    listen       somename:8080;
    #    server_name  somename  alias  another.alias;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}


    # HTTPS server
    #
    #server {
    #    listen       443 ssl;
    #    server_name  localhost;

    #    ssl_certificate      cert.pem;
    #    ssl_certificate_key  cert.key;

    #    ssl_session_cache    shared:SSL:1m;
    #    ssl_session_timeout  5m;

    #    ssl_ciphers  HIGH:!aNULL:!MD5;
    #    ssl_prefer_server_ciphers  on;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}

}

```



**Nginx ssl配置**

```
cd /etc/nginx/conf.d

vim alist.conf
```

```
server {
    listen 80;
    listen [::]:80;
    server_name example.com;  # 替换为你的域名

    # 强制重定向到 HTTPS
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl;
    listen [::]:443 ssl;
    server_name example.com;  # 替换为你的域名

    ssl_certificate     /etc/nginx/keyfile/cert.pem;  
    ssl_certificate_key /etc/nginx/keyfile/key.pem;  

    # SSL 配置（可选）
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers 'ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384';
    ssl_prefer_server_ciphers on;

    location / {
               proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
               proxy_set_header X-Forwarded-Proto $scheme;
               proxy_set_header Host $http_host;
               proxy_set_header X-Real-IP $remote_addr;
               proxy_set_header Range $http_range;
               proxy_set_header If-Range $http_if_range;
               proxy_redirect off;
               proxy_pass http://127.0.0.1:5244;     #反代不同服务修改这里
               # the max size of file to upload
               client_max_body_size 20000m;
             }
}



```

同时我们关闭直接对公网ip和未配置域名的访问

```
vim close.conf
```

```
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    server_name _;

    # 对未配置的域名返回 444
    return 444;
}

server {
    listen 443 ssl default_server;
    listen [::]:443 ssl default_server;
    server_name _;

    ssl_certificate /etc/nginx/keyfile/cert.pem;  
    ssl_certificate_key /etc/nginx/keyfile/key.pem;


    # 对未配置的域名返回 444
    return 444;
}


```

重启nginx反代即生效

```text
sudo systemctl restart nginx
```

**SSL证书生成**

```

#!/bin/sh

mkdir -p ssl

OUTPUT_FILENAME="example.com"

printf "[req]
prompt                  = no
default_bits            = 4096
default_md              = sha256
encrypt_key             = no
string_mask             = utf8only

distinguished_name      = cert_distinguished_name
req_extensions          = req_x509v3_extensions
x509_extensions         = req_x509v3_extensions

[ cert_distinguished_name ]
C  = CN
ST = BJ
L  = BJ 
O  = example.com
OU = example.com
CN = example.com

[req_x509v3_extensions]
basicConstraints        = critical,CA:true
subjectKeyIdentifier    = hash
keyUsage                = critical,digitalSignature,keyCertSign,cRLSign #,keyEncipherment
extendedKeyUsage        = critical,serverAuth #, clientAuth
subjectAltName          = @alt_names

[alt_names]
DNS.1 = example.com
DNS.2 = *.example.com

">ssl/${OUTPUT_FILENAME}.conf

openssl req -x509 -newkey rsa:2048 -keyout ssl/$OUTPUT_FILENAME.key -out ssl/$OUTPUT_FILENAME.crt -days 36500 -nodes -config ssl/${OUTPUT_FILENAME}.conf
```



```
#!/bin/sh

mkdir -p ssl

OUTPUT_FILENAME="example.com"

printf "[req]
prompt                  = no
default_bits            = 4096
default_md              = sha256
encrypt_key             = no
string_mask             = utf8only

distinguished_name      = cert_distinguished_name
req_extensions          = req_x509v3_extensions
x509_extensions         = req_x509v3_extensions

[ cert_distinguished_name ]
C  = CN
ST = BJ
L  = BJ 
O  = example.com
OU = example.com
CN = example.com

[req_x509v3_extensions]
basicConstraints        = critical,CA:true
subjectKeyIdentifier    = hash
keyUsage                = critical,digitalSignature,keyCertSign,cRLSign #,keyEncipherment
extendedKeyUsage        = critical,serverAuth #, clientAuth
subjectAltName          = @alt_names

[alt_names]
DNS.1 = example.com
DNS.2 = *.example.com

">ssl/${OUTPUT_FILENAME}.conf

openssl req -x509  -sha384 -newkey ec:<(openssl ecparam -name secp384r1) -keyout ssl/$OUTPUT_FILENAME.key -out ssl/$OUTPUT_FILENAME.crt -days 36500 -nodes -config ssl/${OUTPUT_FILENAME}.conf
```



## 日志文件

在发起请求的时候，会记录每一次请求。例如请求 `http://www.abc.com/nginx.jpg` 日志的记录如下

```
192.168.0.103 - - [01/Jun/2024:13:49:28 +0000] "GET /nginx.jpg HTTP/1.1" 200 24039 "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:125.0) Gecko/20100101 Firefox/125.0"
```



上面是默认的日志输出格式，我们还可以在 `nginx.conf` 中自定义日志的输出格式，在前面介绍 Nginx 配置文件的时候，里面有如下配置：

```nginx
http {
    # ...其他配置
  
    # log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';  
    # 定义日志格式（包括IP、时间等信息），Nginx内置了一些变量，可以使用 $变量 进行使用
    # 配置文件中，可能是注释掉的，是有默认配置的

    # access_log  /var/log/nginx/access.log  main;  
    # 访问日志文件路径和日志格式，main就是上面日志格式定义的，当用户访问服务器，都会记录日志
  
    # ...其他配置
}
```

上面 `log_format` 就是用来定义日志输出格式的，`main` 就是日志文件的格式名称，后面是日志输出的格式。

`access_log` 就是定义日志输出，后面 `/var/log/nginx/access.log` 日志的路径，再后面的 `main` 表示使用的输出日志的格式，就是前面定义的。

**所以可以通过修改 `log_format` 来修改日志的格式，通过修改`access_log` 可以修改日志的路径。**



定义日志格式使用了很多的内置变量，简单解释一下：

- **`$remote_addr`**: 客户端的 IP 地址；
- **`-`**: 一个连接符号，用于分隔字段；
- **`$remote_user`**: 客户端的用户名，通常通过 HTTP 认证获得。如果没有用户名，则为空；
- **`[$time_local]`**: 本地时间
- **`"$request"`**: 请求行，包括方法、URI 和 HTTP 协议版本，如 `GET /nginx.jpg HTTP/1.1`。
- **`$status`**: 响应状态码，如 `200`、`404` 等。
- **`$body_bytes_sent`**: 发送给客户端的字节数（不包括响应头）。
- **`"$http_referer"`**: 引荐地址，即从哪个页面链接到当前请求的页面。如果没有引用页面，则为空。
- **`"$http_user_agent"`**: 客户端的 User-Agent 字符串，表示客户端的浏览器、操作系统等信息。
- **`"$http_x_forwarded_for"`**: X-Forwarded-For 请求头的值，表示客户端的原始 IP 地址。通常在经过代理或负载均衡器时使用。

## server单独指定日志文件

上面的日志是全局配置，所有站点的访问日志都会记录到同一个日志文件中。

所有的站点日志记录到一个文件很混乱，我们也可以为站点单独配置日志文件。

举个例子：

首先在配置文件的 `http` 节点下，定义日志格式：

```shell
log_format  my_log  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';  
```

然后在 `server` 节点下，配置日志路径，指定使用上面定义的日志格式：

```shell
server {
    listen       80;  
    server_name  www.abc.com;
    access_log   /home/doubi/html_1.log my_log;  # 配置日志目录 和 使用的日志格式

    location / {
        root   /home/doubi/html_1;  # 站点1路径
        index  index.html;
    }
}
```

## 手动切割日志文件

默认 Nginx 的日志都是输出到一个文件中的，是不会按照日期进行切割的，这样会导致文件越来越大，不利于查看。

我们可以编写一个脚本文件，通过命令来进行切割。

例如命令为：`cut_nginx_log.sh`

```
#!/bin/bash
# 日志路径
LOG_PATH="/var/log/nginx"

# 生成一个时间的字符串
RECORD_TIME=$(date -d "yesterday" +%Y-%m-%d-%H-%M-%S)

# nginx的PID
PID=/usr/local/nginx/nginx.pid

# 移动文件
mv ${LOG_PATH}/access.log ${LOG_PATH}/access.${RECORD_TIME}.log
mv ${LOG_PATH}/error.log ${LOG_PATH}/error.${RECORD_TIME}.log

# 向Nginx主进程发送信号，用于重新打开日志文件
kill -USR1 `cat $PID`
```

编写好了，赋予文件执行权限。

```shell
sudo chmod +x cut_nginx_log.sh
```

然后执行脚本文件：

```shell
./cut_nginx_log.sh
```

## 定时切割日志文件

###  安装crontabs

首先看一下有没有安装 crontabs：

```shell
crontab -l
```

如果输出为 `no crontab for <username>`，则表示当前用户没有定时任务，但 `crontab` 程序本身是安装的。如果输出显示一系列的 `cron` 任务，则表示 `crontab` 已经安装了。

如果系统未安装 `crontab`，可以使用以下命令安装：

```shell
# ubuntu
sudo apt update
sudo apt install cron

# centos
sudo yum install crontabs
```

### 添加定时任务

执行下面的命令来添加定时任务：

```shell
# 使用管理员权限运行，给管理员添加定时任务，避免脚本中有脚本没有权限
sudo crontab -e
```

第一次运行，可能会选择编辑器， 将如下内容添加到文件中：

```shell
# 每分钟执行一次，为了演示
*/1 * * * *   /usr/local/nginx/sbin/cut_nginx_log.sh

# 如果要每天0点0分执行，使用如下：
0 0 * * *   /usr/local/nginx/sbin/cut_nginx_log.sh
```

如果选择了cron编辑器，操作方法：

```shell
crontab -e 配置完成后，如何把保存并退出？
1.Ctrl+O 写入
2.出现“FIile name to Write...”，输入Enter
3.Ctrl+x 保存输出
提示“crontab:installing new crontab”表示成功。
```

保存退出后，可以通过 `sudo crontab -l` 查看（因为定时任务是针对用户添加的，这里查看也需要sudo）。

关于定时任务表达式，可以去搜索一下 Cron 表达式的写法。

### 重启定时任务

重启一下定时任务，使生效。

```shell
sudo service crond restart

# 如果找不到服务，可以尝试使用这个
sudo service cron restart
```





## Nginx编译参数说明

| 参数                                         | 说明                                                         |
| -------------------------------------------- | ------------------------------------------------------------ |
| --prefix=`<path>`                            | Nginx安装路径。如果没有指定，默认为 /usr/local/nginx。       |
| --sbin-path=`<path>`                         | Nginx可执行文件安装路径。只能安装时指定，如果没有指定，默认为`<prefix>`/sbin/nginx。 |
| --conf-path=`<path>`                         | 在没有给定-c选项下默认的nginx.conf的路径。如果没有指定，默认为`<prefix>`/conf/nginx.conf。 |
| --pid-path=`<path>`                          | 在nginx.conf中没有指定pid指令的情况下，默认的nginx.pid的路径。如果没有指定，默认为 `<prefix>`/logs/nginx.pid。 |
| --lock-path=`<path>`                         | nginx.lock文件的路径。                                       |
| --error-log-path=`<path>`                    | 在nginx.conf中没有指定error_log指令的情况下，默认的错误日志的路径。如果没有指定，默认为 `<prefix>`/- logs/error.log。 |
| --http-log-path=`<path>`                     | 在nginx.conf中没有指定access_log指令的情况下，默认的访问日志的路径。如果没有指定，默认为 `<prefix>`/- logs/access.log。 |
| --user=`<user>`                              | 在nginx.conf中没有指定user指令的情况下，默认的nginx使用的用户。如果没有指定，默认为 nobody。 |
| --group=`<group>`                            | 在nginx.conf中没有指定user指令的情况下，默认的nginx使用的组。如果没有指定，默认为 nobody。 |
| --builddir=DIR                               | 指定编译的目录                                               |
| --with-rtsig_module                          | 启用 rtsig 模块                                              |
| --with-select_module --without-select_module | 允许或不允许开启SELECT模式，如果 configure 没有找到更合适的模式，比如：kqueue(sun os),epoll (linux kenel 2.6+), rtsig(- 实时信号)或者/dev/poll(一种类似select的模式，底层实现与SELECT基本相 同，都是采用轮训方法) SELECT模式将是默认安装模式 |
| --with-poll_module --without-poll_module     | Whether or not to enable the poll module. This module is enabled by, default if a more suitable method such as kqueue, epoll, rtsig or /dev/poll is not discovered by configure. |
| --with-http_ssl_module                       | Enable ngx_http_ssl_module. Enables SSL support and the ability to handle HTTPS requests. Requires OpenSSL. On Debian, this is libssl-dev. 开启HTTP SSL模块，使NGINX可以支持HTTPS请求。这个模块需要已经安装了OPENSSL，在DEBIAN上是libssl |
| --with-http_realip_module                    | 启用 ngx_http_realip_module                                  |
| --with-http_addition_module                  | 启用 ngx_http_addition_module                                |
| --with-http_sub_module                       | 启用 ngx_http_sub_module                                     |
| --with-http_dav_module                       | 启用 ngx_http_dav_module                                     |
| --with-http_flv_module                       | 启用 ngx_http_flv_module                                     |
| --with-http_stub_status_module               | 启用 "server status" 页                                      |
| --without-http_charset_module                | 禁用 ngx_http_charset_module                                 |
| --without-http_gzip_module                   | 禁用 ngx_http_gzip_module. 如果启用，需要 zlib 。            |
| --without-http_ssi_module                    | 禁用 ngx_http_ssi_module                                     |
| --without-http_userid_module                 | 禁用 ngx_http_userid_module                                  |
| --without-http_access_module                 | 禁用 ngx_http_access_module                                  |
| --without-http_auth_basic_module             | 禁用 ngx_http_auth_basic_module                              |
| --without-http_autoindex_module              | 禁用 ngx_http_autoindex_module                               |
| --without-http_geo_module                    | 禁用 ngx_http_geo_module                                     |
| --without-http_map_module                    | 禁用 ngx_http_map_module                                     |
| --without-http_referer_module                | 禁用 ngx_http_referer_module                                 |
| --without-http_rewrite_module                | 禁用 ngx_http_rewrite_module. 如果启用需要 PCRE 。           |
| --without-http_proxy_module                  | 禁用 ngx_http_proxy_module                                   |
| --without-http_fastcgi_module                | 禁用 ngx_http_fastcgi_module                                 |
| --without-http_memcached_module              | 禁用 ngx_http_memcached_module                               |
| --without-http_limit_zone_module             | 禁用 ngx_http_limit_zone_module                              |
| --without-http_empty_gif_module              | 禁用 ngx_http_empty_gif_module                               |
| --without-http_browser_module                | 禁用 ngx_http_browser_module                                 |
| --without-http_upstream_ip_hash_module       | 禁用 ngx_http_upstream_ip_hash_module                        |
| --with-http_perl_module                      | 启用 ngx_http_perl_module                                    |
| --with-perl_modules_path=PATH                | 指定 perl 模块的路径                                         |
| --with-perl=PATH                             | 指定 perl 执行文件的路径                                     |
| --http-log-path=PATH                         | Set path to the http access log                              |
| --http-client-body-temp-path=PATH            | Set path to the http client request body temporary files     |
| --http-proxy-temp-path=PATH                  | Set path to the http proxy temporary files                   |
| --http-fastcgi-temp-path=PATH                | Set path to the http fastcgi temporary files                 |
| --without-http                               | 禁用 HTTP server                                             |
| --with-mail                                  | 启用 IMAP4/POP3/SMTP 代理模块                                |
| --with-mail_ssl_module                       | 启用 ngx_mail_ssl_module                                     |
| --with-cc=PATH                               | 指定 C 编译器的路径                                          |
| --with-cpp=PATH                              | 指定 C 预处理器的路径                                        |
| --with-cc-opt=OPTIONS                        | Additional parameters which will be added to the variable CFLAGS. With the use of the system library PCRE in FreeBSD, it is necessary to indicate --with-cc-opt="-I /usr/local/include". If we are using select() and it is necessary to increase the number of file descriptors, then this also can be assigned here: --with-cc-opt="-D FD_SETSIZE=2048". |
| --with-ld-opt=OPTIONS                        | Additional parameters passed to the linker. With the use of the system library PCRE in - FreeBSD, it is necessary to indicate --with-ld-opt="-L /usr/local/lib". |
| --with-cpu-opt=CPU                           | 为特定的 CPU 编译，有效的值包括：pentium, pentiumpro, pentium3, pentium4, athlon, opteron, amd64, sparc32, sparc64, ppc64 |
| --without-pcre                               | 禁止 PCRE 库的使用。同时也会禁止 HTTP rewrite 模块。在 "location" 配置指令中的正则表达式也需要 PCRE 。 |
| --with-pcre=DIR                              | 指定 PCRE 库的源代码的路径。                                 |
| --with-pcre-opt=OPTIONS                      | Set additional options for PCRE building.                    |
| --with-md5=DIR                               | Set path to md5 library sources.                             |
| --with-md5-opt=OPTIONS                       | Set additional options for md5 building.                     |
| --with-md5-asm                               | Use md5 assembler sources.                                   |
| --with-sha1=DIR                              | Set path to sha1 library sources.                            |
| --with-sha1-opt=OPTIONS                      | Set additional options for sha1 building.                    |
| --with-sha1-asm                              | Use sha1 assembler sources.                                  |
| --with-zlib=DIR                              | Set path to zlib library sources.                            |
| --with-zlib-opt=OPTIONS                      | Set additional options for zlib building.                    |
| --with-zlib-asm=CPU                          | Use zlib assembler sources optimized for specified CPU, valid values are: pentium, pentiumpro |
| --with-openssl=DIR                           | Set path to OpenSSL library sources                          |
| --with-openssl-opt=OPTIONS                   | Set additional options for OpenSSL building                  |
| --with-debug                                 | 启用调试日志                                                 |
| --add-module=PATH                            | Add in a third-party module found in directory PATH          |

## 配置

在Centos 默认配置文件在 **/usr/local/nginx-1.5.1/conf/nginx.conf** 我们要在这里配置一些文件。nginx.conf是主配置文件，由若干个部分组成，每个大括号`{}`表示一个部分。每一行指令都由分号结束`;`，标志着一行的结束。

### 常用正则

| 正则  | 说明                       | 正则    | 说明                      |
| ----- | -------------------------- | ------- | ------------------------- |
| `. `  | 匹配除换行符以外的任意字符 | `$ `    | 匹配字符串的结束          |
| `? `  | 重复0次或1次               | `{n} `  | 重复n次                   |
| `+ `  | 重复1次或更多次            | `{n,} ` | 重复n次或更多次           |
| `*`   | 重复0次或更多次            | `[c] `  | 匹配单个字符c             |
| `\d ` | 匹配数字                   | `[a-z]` | 匹配a-z小写字母的任意一个 |
| `^ `  | 匹配字符串的开始           | -       | -                         |

### 全局变量

| 变量             | 说明                                        | 变量              | 说明                                                         |
| ---------------- | ------------------------------------------- | ----------------- | ------------------------------------------------------------ |
| $args            | 这个变量等于请求行中的参数，同$query_string | $remote_port      | 客户端的端口。                                               |
| $content_length  | 请求头中的Content-length字段。              | $remote_user      | 已经经过Auth Basic Module验证的用户名。                      |
| $content_type    | 请求头中的Content-Type字段。                | $request_filename | 当前请求的文件路径，由root或alias指令与URI请求生成。         |
| $document_root   | 当前请求在root指令中指定的值。              | $scheme           | HTTP方法（如http，https）。                                  |
| $host            | 请求主机头字段，否则为服务器名称。          | $server_protocol  | 请求使用的协议，通常是HTTP/1.0或HTTP/1.1。                   |
| $http_user_agent | 客户端agent信息                             | $server_addr      | 服务器地址，在完成一次系统调用后可以确定这个值。             |
| $http_cookie     | 客户端cookie信息                            | $server_name      | 服务器名称。                                                 |
| $limit_rate      | 这个变量可以限制连接速率。                  | $server_port      | 请求到达服务器的端口号。                                     |
| $request_method  | 客户端请求的动作，通常为GET或POST。         | $request_uri      | 包含请求参数的原始URI，不包含主机名，如：/foo/bar.php?arg=baz。 |
| $remote_addr     | 客户端的IP地址。                            | $uri              | 不带请求参数的当前URI，$uri不包含主机名，如/foo/bar.html。   |
| $document_uri    | 与$uri相同。                                | -                 | -                                                            |

例如请求：`http://localhost:3000/test1/test2/test.php`

```
$host：localhost  
$server_port：3000  
$request_uri：/test1/test2/test.php  
$document_uri：/test1/test2/test.php  
$document_root：/var/www/html  
$request_filename：/var/www/html/test1/test2/test.php  
```

### 符号参考

| 符号 | 说明   | 符号 | 说明   | 符号 | 说明         |
| ---- | ------ | ---- | ------ | ---- | ------------ |
| k,K  | 千字节 | m,M  | 兆字节 | ms   | 毫秒         |
| s    | 秒     | m    | 分钟   | h    | 小时         |
| d    | 日     | w    | 周     | M    | 一个月, 30天 |

例如，"8k"，"1m" 代表字节数计量。  
例如，"1h 30m"，"1y 6M"。代表 "1小时 30分"，"1年零6个月"。 

### 配置文件

nginx 的配置系统由一个主配置文件和其他一些辅助的配置文件构成。这些配置文件均是纯文本文件，全部位于 nginx 安装目录下的 conf 目录下。

指令由 nginx 的各个模块提供，不同的模块会提供不同的指令来实现配置。
指令除了 Key-Value 的形式，还有作用域指令。

nginx.conf 中的配置信息，根据其逻辑上的意义，对它们进行了分类，也就是分成了多个作用域，或者称之为配置指令上下文。不同的作用域含有一个或者多个配置项。

下面的这些上下文指令是用的比较多：

| Directive      | Description                                                  | Contains Directive                                           |
| -------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| main           | nginx 在运行时与具体业务功能（比如 http 服务或者 email 服务代理）无关的一些参数，比如工作进程数，运行的身份等。 | user, worker_processes, error_log, events, http, mail        |
| http           | 与提供 http 服务相关的一些配置参数。例如：是否使用 keepalive 啊，是否使用 gzip 进行压缩等。 | server                                                       |
| server         | http 服务上支持若干虚拟主机。每个虚拟主机一个对应的 server 配置项，配置项里面包含该虚拟主机相关的配置。在提供 mail 服务的代理时，也可以建立若干 server. 每个 server 通过监听的地址来区分。 | listen, server_name, access_log, location, protocol, proxy, smtp_auth, xclient |
| location       | http 服务中，某些特定的 URL 对应的一系列配置项。             | index, root                                                  |
| mail           | 实现 email 相关的 SMTP/IMAP/POP3 代理时，共享的一些配置项（因为可能实现多个代理，工作在多个监听地址上）。 | server, http, imap_capabilities                              |
| include        | 以便增强配置文件的可读性，使得部分配置文件可以重新使用。     | -                                                            |
| valid_referers | 用来校验Http请求头Referer是否有效。                          | -                                                            |
| try_files      | 用在server部分，不过最常见的还是用在location部分，它会按照给定的参数顺序进行尝试，第一个被匹配到的将会被使用。 | -                                                            |
| if             | 当在location块中使用if指令，在某些情况下它并不按照预期运行，一般来说避免使用if指令。 | -                                                            |


例如我们再 **nginx.conf** 里面引用两个配置 vhost/example.com.conf 和 vhost/gitlab.com.conf 它们都被放在一个我自己新建的目录 vhost 下面。nginx.conf 配置如下：

```nginx
worker_processes  1;
events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;

    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    #access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;
    server {
        listen       80;
        server_name  localhost;
        location / {
            root   html;
            index  index.html index.htm;
        }
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
    include  vhost/example.com.conf;
    include  vhost/gitlab.com.conf;
}
```


简单的配置: example.com.conf

```nginx
server {
    #侦听的80端口
    listen       80;
    server_name  baidu.com app.baidu.com; # 这里指定域名
    index        index.html index.htm;    # 这里指定默认入口页面
    root /home/www/app.baidu.com;         # 这里指定目录
}
```

### 内置预定义变量

Nginx提供了许多预定义的变量，也可以通过使用set来设置变量。你可以在if中使用预定义变量，也可以将它们传递给代理服务器。以下是一些常见的预定义变量，[更多详见](http://nginx.org/en/docs/varindex.html)

| 变量名称        | 值                                                           |
| --------------- | ------------------------------------------------------------ |
| $args_name      | 在请求中的name参数                                           |
| $args           | 所有请求参数                                                 |
| $query_string   | $args的别名                                                  |
| $content_length | 请求头Content-Length的值                                     |
| $content_type   | 请求头Content-Type的值                                       |
| $host           | 如果当前有Host，则为请求头Host的值；如果没有这个头，那么该值等于匹配该请求的server_name的值 |
| $remote_addr    | 客户端的IP地址                                               |
| $request        | 完整的请求，从客户端收到，包括Http请求方法、URI、Http协议、头、请求体 |
| $request_uri    | 完整请求的URI，从客户端来的请求，包括参数                    |
| $scheme         | 当前请求的协议                                               |
| $uri            | 当前请求的标准化URI                                          |

### 反向代理

反向代理是一个Web服务器，它接受客户端的连接请求，然后将请求转发给上游服务器，并将从服务器得到的结果返回给连接的客户端。下面简单的反向代理的例子：

```nginx
server {  
  listen       80;                                                        
  server_name  localhost;                                              
  client_max_body_size 1024M;  # 允许客户端请求的最大单文件字节数

  location / {
    proxy_pass                         http://localhost:8080;
    proxy_set_header Host              $host:$server_port;
    proxy_set_header X-Forwarded-For   $remote_addr; # HTTP的请求端真实的IP
    proxy_set_header X-Forwarded-Proto $scheme;      # 为了正确地识别实际用户发出的协议是 http 还是 https
  }
}
```

复杂的配置: gitlab.com.conf。

```nginx
server {
    #侦听的80端口
    listen       80;
    server_name  git.example.cn;
    location / {
        proxy_pass   http://localhost:3000;
        #以下是一些反向代理的配置可删除
        proxy_redirect             off;
        #后端的Web服务器可以通过X-Forwarded-For获取用户真实IP
        proxy_set_header           Host $host;
        client_max_body_size       10m; #允许客户端请求的最大单文件字节数
        client_body_buffer_size    128k; #缓冲区代理缓冲用户端请求的最大字节数
        proxy_connect_timeout      300; #nginx跟后端服务器连接超时时间(代理连接超时)
        proxy_send_timeout         300; #后端服务器数据回传时间(代理发送超时)
        proxy_read_timeout         300; #连接成功后，后端服务器响应时间(代理接收超时)
        proxy_buffer_size          4k; #设置代理服务器（nginx）保存用户头信息的缓冲区大小
        proxy_buffers              4 32k; #proxy_buffers缓冲区，网页平均在32k以下的话，这样设置
        proxy_busy_buffers_size    64k; #高负荷下缓冲大小（proxy_buffers*2）
    }
}
```

代理到上游服务器的配置中，最重要的是proxy_pass指令。以下是代理模块中的一些常用指令：

| 指令                   | 说明                                                         |
| ---------------------- | ------------------------------------------------------------ |
| proxy_connect_timeout  | Nginx从接受请求至连接到上游服务器的最长等待时间              |
| proxy_send_timeout     | 后端服务器数据回传时间(代理发送超时)                         |
| proxy_read_timeout     | 连接成功后，后端服务器响应时间(代理接收超时)                 |
| proxy_cookie_domain    | 替代从上游服务器来的Set-Cookie头的domain属性                 |
| proxy_cookie_path      | 替代从上游服务器来的Set-Cookie头的path属性                   |
| proxy_buffer_size      | 设置代理服务器（nginx）保存用户头信息的缓冲区大小            |
| proxy_buffers          | proxy_buffers缓冲区，网页平均在多少k以下                     |
| proxy_set_header       | 重写发送到上游服务器头的内容，也可以通过将某个头部的值设置为空字符串，而不发送某个头部的方法实现 |
| proxy_ignore_headers   | 这个指令禁止处理来自代理服务器的应答。                       |
| proxy_intercept_errors | 使nginx阻止HTTP应答代码为400或者更高的应答。                 |

### 负载均衡

upstream指令启用一个新的配置区段，在该区段定义一组上游服务器。这些服务器可能被设置不同的权重，也可能出于对服务器进行维护，标记为down。

```nginx
upstream gitlab {
    ip_hash;
    # upstream的负载均衡，weight是权重，可以根据机器配置定义权重。weigth参数表示权值，权值越高被分配到的几率越大。
    server 192.168.122.11:8081 ;
    server 127.0.0.1:82 weight=3;
    server 127.0.0.1:83 weight=3 down;
    server 127.0.0.1:84 weight=3; max_fails=3  fail_timeout=20s;
    server 127.0.0.1:85 weight=4;;
    keepalive 32;
}
server {
    #侦听的80端口
    listen       80;
    server_name  git.example.cn;
    location / {
        proxy_pass   http://gitlab;    #在这里设置一个代理，和upstream的名字一样
        #以下是一些反向代理的配置可删除
        proxy_redirect             off;
        #后端的Web服务器可以通过X-Forwarded-For获取用户真实IP
        proxy_set_header           Host $host;
        proxy_set_header           X-Real-IP $remote_addr;
        proxy_set_header           X-Forwarded-For $proxy_add_x_forwarded_for;
        client_max_body_size       10m;  #允许客户端请求的最大单文件字节数
        client_body_buffer_size    128k; #缓冲区代理缓冲用户端请求的最大字节数
        proxy_connect_timeout      300;  #nginx跟后端服务器连接超时时间(代理连接超时)
        proxy_send_timeout         300;  #后端服务器数据回传时间(代理发送超时)
        proxy_read_timeout         300;  #连接成功后，后端服务器响应时间(代理接收超时)
        proxy_buffer_size          4k; #设置代理服务器（nginx）保存用户头信息的缓冲区大小
        proxy_buffers              4 32k;# 缓冲区，网页平均在32k以下的话，这样设置
        proxy_busy_buffers_size    64k; #高负荷下缓冲大小（proxy_buffers*2）
        proxy_temp_file_write_size 64k; #设定缓存文件夹大小，大于这个值，将从upstream服务器传
    }
}
```

每个请求按时间顺序逐一分配到不同的后端服务器，如果后端服务器down掉，能自动剔除。

**负载均衡：**

upstream模块能够使用3种负载均衡算法：轮询、IP哈希、最少连接数。

**轮询：** 默认情况下使用轮询算法，不需要配置指令来激活它，它是基于在队列中谁是下一个的原理确保访问均匀地分布到每个上游服务器；  
**IP哈希：** 通过ip_hash指令来激活，Nginx通过IPv4地址的前3个字节或者整个IPv6地址作为哈希键来实现，同一个IP地址总是能被映射到同一个上游服务器；  
**最少连接数：** 通过least_conn指令来激活，该算法通过选择一个活跃数最少的上游服务器进行连接。如果上游服务器处理能力不同，可以通过给server配置weight权重来说明，该算法将考虑到不同服务器的加权最少连接数。

#### RR

**简单配置** ，这里我配置了2台服务器，当然实际上是一台，只是端口不一样而已，而8081的服务器是不存在的，也就是说访问不到，但是我们访问 `http://localhost` 的时候，也不会有问题，会默认跳转到`http://localhost:8080`具体是因为Nginx会自动判断服务器的状态，如果服务器处于不能访问（服务器挂了），就不会跳转到这台服务器，所以也避免了一台服务器挂了影响使用的情况，由于Nginx默认是RR策略，所以我们不需要其他更多的设置

```nginx
upstream test {
    server localhost:8080;
    server localhost:8081;
}
server {
    listen       81;
    server_name  localhost;
    client_max_body_size 1024M;
 
    location / {
        proxy_pass http://test;
        proxy_set_header Host $host:$server_port;
    }
}
```

**负载均衡的核心代码为** 

```nginx
upstream test {
    server localhost:8080;
    server localhost:8081;
}
```

#### 权重

指定轮询几率，weight和访问比率成正比，用于后端服务器性能不均的情况。 例如

```nginx
upstream test {
    server localhost:8080 weight=9;
    server localhost:8081 weight=1;
}
```

那么10次一般只会有1次会访问到8081，而有9次会访问到8080

#### ip_hash

上面的2种方式都有一个问题，那就是下一个请求来的时候请求可能分发到另外一个服务器，当我们的程序不是无状态的时候（采用了session保存数据），这时候就有一个很大的很问题了，比如把登录信息保存到了session中，那么跳转到另外一台服务器的时候就需要重新登录了，所以很多时候我们需要一个客户只访问一个服务器，那么就需要用iphash了，iphash的每个请求按访问ip的hash结果分配，这样每个访客固定访问一个后端服务器，可以解决session的问题。

```nginx
upstream test {
    ip_hash;
    server localhost:8080;
    server localhost:8081;
}
```

#### fair

这是个第三方模块，按后端服务器的响应时间来分配请求，响应时间短的优先分配。

```nginx
upstream backend {
    fair;
    server localhost:8080;
    server localhost:8081;
}
```

#### url_hash

这是个第三方模块，按访问url的hash结果来分配请求，使每个url定向到同一个后端服务器，后端服务器为缓存时比较有效。 在upstream中加入hash语句，server语句中不能写入weight等其他的参数，hash_method是使用的hash算法

```nginx
upstream backend {
    hash $request_uri;
    hash_method crc32;
    server localhost:8080;
    server localhost:8081;
}
```

以上5种负载均衡各自适用不同情况下使用，所以可以根据实际情况选择使用哪种策略模式，不过fair和url_hash需要安装第三方模块才能使用

**server指令可选参数：**

1. weight：设置一个服务器的访问权重，数值越高，收到的请求也越多；
2. fail_timeout：在这个指定的时间内服务器必须提供响应，如果在这个时间内没有收到响应，那么服务器将会被标记为down状态；
3. max_fails：设置在fail_timeout时间之内尝试对一个服务器连接的最大次数，如果超过这个次数，那么服务器将会被标记为down;
4. down：标记一个服务器不再接受任何请求；
5. backup：一旦其他服务器宕机，那么有该标记的机器将会接收请求。

**keepalive指令：**

Nginx服务器将会为每一个worker进行保持同上游服务器的连接。

### 屏蔽ip

在nginx的配置文件`nginx.conf`中加入如下配置，可以放到http, server, location, limit_except语句块，需要注意相对路径，本例当中`nginx.conf`，`blocksip.conf`在同一个目录中。

```nginx
include blockip.conf;
```

在blockip.conf里面输入内容，如：

```nginx
deny 165.91.122.67;

deny IP;   # 屏蔽单个ip访问
allow IP;  # 允许单个ip访问
deny all;  # 屏蔽所有ip访问
allow all; # 允许所有ip访问
deny 123.0.0.0/8   # 屏蔽整个段即从123.0.0.1到123.255.255.254访问的命令
deny 124.45.0.0/16 # 屏蔽IP段即从123.45.0.1到123.45.255.254访问的命令
deny 123.45.6.0/24 # 屏蔽IP段即从123.45.6.1到123.45.6.254访问的命令

# 如果你想实现这样的应用，除了几个IP外，其他全部拒绝
allow 1.1.1.1; 
allow 1.1.1.2;
deny all; 
```

## 第三方模块安装方法

```
./configure --prefix=/你的安装目录  --add-module=/第三方模块目录
```

## 重定向

- `permanent` 永久性重定向。请求日志中的状态码为301
- `redirect` 临时重定向。请求日志中的状态码为302

### 重定向整个网站

```nginx
server {
    server_name old-site.com
    return 301 $scheme://new-site.com$request_uri;
}
```

### 重定向单页

```nginx
server {
    location = /oldpage.html {
        return 301 http://example.org/newpage.html;
    }
}
```

### 重定向整个子路径

```nginx
location /old-site {
    rewrite ^/old-site/(.*) http://example.org/new-site/$1 permanent;
}
```

## 性能

### 内容缓存

允许浏览器基本上永久地缓存静态内容。 Nginx将为您设置Expires和Cache-Control头信息。

```nginx
location /static {
    root /data;
    expires max;
}
```

如果要求浏览器永远不会缓存响应（例如用于跟踪请求），请使用-1。

```nginx
location = /empty.gif {
    empty_gif;
    expires -1;
}
```

### Gzip压缩

```nginx
gzip  on;
gzip_buffers 16 8k;
gzip_comp_level 6;
gzip_http_version 1.1;
gzip_min_length 256;
gzip_proxied any;
gzip_vary on;
gzip_types
    text/xml application/xml application/atom+xml application/rss+xml application/xhtml+xml image/svg+xml
    text/javascript application/javascript application/x-javascript
    text/x-json application/json application/x-web-app-manifest+json
    text/css text/plain text/x-component
    font/opentype application/x-font-ttf application/vnd.ms-fontobject
    image/x-icon;
gzip_disable  "msie6";
```

### 打开文件缓存

```nginx
open_file_cache max=1000 inactive=20s;
open_file_cache_valid 30s;
open_file_cache_min_uses 2;
open_file_cache_errors on;
```

### SSL缓存

```nginx
ssl_session_cache shared:SSL:10m;
ssl_session_timeout 10m;
```

### 上游Keepalive

```nginx
upstream backend {
    server 127.0.0.1:8080;
    keepalive 32;
}
server {
    ...
    location /api/ {
        proxy_pass http://backend;
        proxy_http_version 1.1;
        proxy_set_header Connection "";
    }
}
```



