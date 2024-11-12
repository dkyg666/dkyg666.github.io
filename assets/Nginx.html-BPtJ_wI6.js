import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,e as i,b as s,a as t,d as e,o as r,r as c}from"./app-dX96qGh5.js";const o={},p={id:"下载nginx",tabindex:"-1"},v={class:"header-anchor",href:"#下载nginx"},u={href:"https://dkyg666.github.io/other/%E8%BD%AF%E8%B7%AF%E7%94%B1/OpenWrt/%E5%85%B6%E4%BB%96.html#%E4%BA%94%E3%80%81%E4%B8%8B%E8%BD%BDnginx",target:"_blank",rel:"noopener noreferrer"},m={href:"https://nginx.org/en/download.html",target:"_blank",rel:"noopener noreferrer"},b={href:"http://nginx.org/en/docs/varindex.html",target:"_blank",rel:"noopener noreferrer"};function k(g,n){const a=c("ExternalLinkIcon");return r(),l("div",null,[n[6]||(n[6]=i(`<h1 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx"><span>NGINX</span></a></h1><h2 id="安装nginx" tabindex="-1"><a class="header-anchor" href="#安装nginx"><span>安装nginx</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># Ubuntu使用apt安装
sudo apt install nginx

# nginx默认安装路径

 /usr/sbin/nginx:  主程序
 /etc/nginx:       存放配置文件
 /usr/share/nginx: 存放静态文件
 /var/log/nginx:   存放日志
 /run/nginx.pid:   nginx pid路径

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker方式安装" tabindex="-1"><a class="header-anchor" href="#docker方式安装"><span>Docker方式安装</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>下载镜像
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


docker run -d -p 8080:8080 --name nginx --restart=always \\
	-v /home/doubi/docker_dir/nginx/conf/nginx.conf:/etc/nginx/nginx.conf \\
	-v /home/doubi/docker_dir/nginx/conf/conf.d:/etc/nginx/conf.d \\
	-v /home/doubi/docker_dir/nginx/log:/var/log/nginx \\
	-v /home/doubi/docker_dir/nginx/html:/usr/share/nginx/html \\
	nginx:1.26.2
	

-d：后台运行
-p： 端口映射（宿主机端口：容器端口），nginx配置文件中默认使用的是80端口，所以容器的端口使用的是80，除非修改配置文件。
--name 创建容器的名称
--restart=always 容器停止后自动重启
-v 目录挂载（宿主机目录：容器目录）
最后的nginx表示镜像的名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># CentOS

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


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>#源码安装：
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


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7)),s("h5",p,[s("a",v,[s("span",null,[s("a",u,[n[0]||(n[0]=s("strong",null,"下载Nginx",-1)),t(a)])])])]),s("p",null,[n[2]||(n[2]=s("strong",null,"1. 官网下载",-1)),n[3]||(n[3]=e(" 直接下载.tar.gz安装包，地址：")),s("a",m,[n[1]||(n[1]=e("https://nginx.org/en/download.html")),t(a)])]),n[7]||(n[7]=i(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>wget -c https://nginx.org/download/nginx-1.26.2.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>2. 解压</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>tar -zxvf nginx-1.26.2.tar.gz
cd nginx-1.26.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3. 配置</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
./configure

./configure --prefix=/usr/local/nginx --with-http_stub_status_module --with-http_ssl_module

## openssl源解压路径

./configure --prefix=/usr/local/nginx --with-http_stub_status_module  --with-http_ssl_module --with-openssl=/root/openssl-1.1.1s

## 自定义配置（不推荐）

./configure \\
--prefix=/usr/local/nginx \\
--conf-path=/usr/local/nginx/conf/nginx.conf \\
--pid-path=/usr/local/nginx/conf/nginx.pid \\
--lock-path=/var/lock/nginx.lock \\
--error-log-path=/var/log/nginx/error.log \\
--http-log-path=/var/log/nginx/access.log \\
--with-http_gzip_static_module \\
--http-client-body-temp-path=/var/temp/nginx/client \\
--http-proxy-temp-path=/var/temp/nginx/proxy \\
--http-fastcgi-temp-path=/var/temp/nginx/fastcgi \\
--http-uwsgi-temp-path=/var/temp/nginx/uwsgi \\
--http-scgi-temp-path=/var/temp/nginx/scgi

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>4. 编译安装</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>make
make install

## 查找安装路径
whereis nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>5. Nginx systemctl配置</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>vi /usr/lib/systemd/system/nginx.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>chmod +x /usr/lib/systemd/system/nginx.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>[Unit]
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>## 在启动服务之前，需要先重载systemctl命令
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
## 关闭防火墙
systemctl stop firewalld.service
systemctl disable firewalld.service
## 放行端口
firewall-cmd --zone=public --add-port=80/tcp --permanent
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>6. 卸载Nginx</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>apt-get --purge remove nginx
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Nginx默认配置</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
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

    #log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;
    #                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;
    #                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;

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
        #location ~ \\.php$ {
        #    proxy_pass   http://127.0.0.1;
        #}

        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
        #
        #location ~ \\.php$ {
        #    root           html;
        #    fastcgi_pass   127.0.0.1:9000;
        #    fastcgi_index  index.php;
        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
        #    include        fastcgi_params;
        #}

        # deny access to .htaccess files, if Apache&#39;s document root
        # concurs with nginx&#39;s one
        #
        #location ~ /\\.ht {
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Nginx ssl配置</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>cd /etc/nginx/conf.d

vim alist.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>server {
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
    ssl_ciphers &#39;ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384&#39;;
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



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同时我们关闭直接对公网ip和未配置域名的访问</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>vim close.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>server {
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


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重启nginx反代即生效</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>sudo systemctl restart nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>SSL证书生成</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
#!/bin/sh

mkdir -p ssl

OUTPUT_FILENAME=&quot;example.com&quot;

printf &quot;[req]
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

&quot;&gt;ssl/\${OUTPUT_FILENAME}.conf

openssl req -x509 -newkey rsa:2048 -keyout ssl/$OUTPUT_FILENAME.key -out ssl/$OUTPUT_FILENAME.crt -days 36500 -nodes -config ssl/\${OUTPUT_FILENAME}.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>#!/bin/sh

mkdir -p ssl

OUTPUT_FILENAME=&quot;example.com&quot;

printf &quot;[req]
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

&quot;&gt;ssl/\${OUTPUT_FILENAME}.conf

openssl req -x509  -sha384 -newkey ec:&lt;(openssl ecparam -name secp384r1) -keyout ssl/$OUTPUT_FILENAME.key -out ssl/$OUTPUT_FILENAME.crt -days 36500 -nodes -config ssl/\${OUTPUT_FILENAME}.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="日志文件" tabindex="-1"><a class="header-anchor" href="#日志文件"><span>日志文件</span></a></h2><p>在发起请求的时候，会记录每一次请求。例如请求 <code>http://www.abc.com/nginx.jpg</code> 日志的记录如下</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>192.168.0.103 - - [01/Jun/2024:13:49:28 +0000] &quot;GET /nginx.jpg HTTP/1.1&quot; 200 24039 &quot;-&quot; &quot;Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:125.0) Gecko/20100101 Firefox/125.0&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面是默认的日志输出格式，我们还可以在 <code>nginx.conf</code> 中自定义日志的输出格式，在前面介绍 Nginx 配置文件的时候，里面有如下配置：</p><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
    <span class="token comment"># ...其他配置</span>
  
    <span class="token comment"># log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span>
                      &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;
                      &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;<span class="token punctuation">;</span>  
    <span class="token comment"># 定义日志格式（包括IP、时间等信息），Nginx内置了一些变量，可以使用 $变量 进行使用</span>
    <span class="token comment"># 配置文件中，可能是注释掉的，是有默认配置的</span>

    <span class="token comment"># access_log  /var/log/nginx/access.log  main;  </span>
    <span class="token comment"># 访问日志文件路径和日志格式，main就是上面日志格式定义的，当用户访问服务器，都会记录日志</span>
  
    <span class="token comment"># ...其他配置</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面 <code>log_format</code> 就是用来定义日志输出格式的，<code>main</code> 就是日志文件的格式名称，后面是日志输出的格式。</p><p><code>access_log</code> 就是定义日志输出，后面 <code>/var/log/nginx/access.log</code> 日志的路径，再后面的 <code>main</code> 表示使用的输出日志的格式，就是前面定义的。</p><p><strong>所以可以通过修改 <code>log_format</code> 来修改日志的格式，通过修改<code>access_log</code> 可以修改日志的路径。</strong></p><p>定义日志格式使用了很多的内置变量，简单解释一下：</p><ul><li><strong><code>$remote_addr</code></strong>: 客户端的 IP 地址；</li><li><strong><code>-</code></strong>: 一个连接符号，用于分隔字段；</li><li><strong><code>$remote_user</code></strong>: 客户端的用户名，通常通过 HTTP 认证获得。如果没有用户名，则为空；</li><li><strong><code>[$time_local]</code></strong>: 本地时间</li><li><strong><code>&quot;$request&quot;</code></strong>: 请求行，包括方法、URI 和 HTTP 协议版本，如 <code>GET /nginx.jpg HTTP/1.1</code>。</li><li><strong><code>$status</code></strong>: 响应状态码，如 <code>200</code>、<code>404</code> 等。</li><li><strong><code>$body_bytes_sent</code></strong>: 发送给客户端的字节数（不包括响应头）。</li><li><strong><code>&quot;$http_referer&quot;</code></strong>: 引荐地址，即从哪个页面链接到当前请求的页面。如果没有引用页面，则为空。</li><li><strong><code>&quot;$http_user_agent&quot;</code></strong>: 客户端的 User-Agent 字符串，表示客户端的浏览器、操作系统等信息。</li><li><strong><code>&quot;$http_x_forwarded_for&quot;</code></strong>: X-Forwarded-For 请求头的值，表示客户端的原始 IP 地址。通常在经过代理或负载均衡器时使用。</li></ul><h2 id="server单独指定日志文件" tabindex="-1"><a class="header-anchor" href="#server单独指定日志文件"><span>server单独指定日志文件</span></a></h2><p>上面的日志是全局配置，所有站点的访问日志都会记录到同一个日志文件中。</p><p>所有的站点日志记录到一个文件很混乱，我们也可以为站点单独配置日志文件。</p><p>举个例子：</p><p>首先在配置文件的 <code>http</code> 节点下，定义日志格式：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>log_format  my_log  <span class="token string">&#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span>
                      <span class="token string">&#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span>
                      <span class="token string">&#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;</span><span class="token punctuation">;</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在 <code>server</code> 节点下，配置日志路径，指定使用上面定义的日志格式：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
    listen       <span class="token number">80</span><span class="token punctuation">;</span>  
    server_name  www.abc.com<span class="token punctuation">;</span>
    access_log   /home/doubi/html_1.log my_log<span class="token punctuation">;</span>  <span class="token comment"># 配置日志目录 和 使用的日志格式</span>

    location / <span class="token punctuation">{</span>
        root   /home/doubi/html_1<span class="token punctuation">;</span>  <span class="token comment"># 站点1路径</span>
        index  index.html<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="手动切割日志文件" tabindex="-1"><a class="header-anchor" href="#手动切割日志文件"><span>手动切割日志文件</span></a></h2><p>默认 Nginx 的日志都是输出到一个文件中的，是不会按照日期进行切割的，这样会导致文件越来越大，不利于查看。</p><p>我们可以编写一个脚本文件，通过命令来进行切割。</p><p>例如命令为：<code>cut_nginx_log.sh</code></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>#!/bin/bash
# 日志路径
LOG_PATH=&quot;/var/log/nginx&quot;

# 生成一个时间的字符串
RECORD_TIME=$(date -d &quot;yesterday&quot; +%Y-%m-%d-%H-%M-%S)

# nginx的PID
PID=/usr/local/nginx/nginx.pid

# 移动文件
mv \${LOG_PATH}/access.log \${LOG_PATH}/access.\${RECORD_TIME}.log
mv \${LOG_PATH}/error.log \${LOG_PATH}/error.\${RECORD_TIME}.log

# 向Nginx主进程发送信号，用于重新打开日志文件
kill -USR1 \`cat $PID\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编写好了，赋予文件执行权限。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">chmod</span> +x cut_nginx_log.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后执行脚本文件：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>./cut_nginx_log.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="定时切割日志文件" tabindex="-1"><a class="header-anchor" href="#定时切割日志文件"><span>定时切割日志文件</span></a></h2><h3 id="安装crontabs" tabindex="-1"><a class="header-anchor" href="#安装crontabs"><span>安装crontabs</span></a></h3><p>首先看一下有没有安装 crontabs：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">crontab</span> <span class="token parameter variable">-l</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果输出为 <code>no crontab for &lt;username&gt;</code>，则表示当前用户没有定时任务，但 <code>crontab</code> 程序本身是安装的。如果输出显示一系列的 <code>cron</code> 任务，则表示 <code>crontab</code> 已经安装了。</p><p>如果系统未安装 <code>crontab</code>，可以使用以下命令安装：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># ubuntu</span>
<span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token function">cron</span>

<span class="token comment"># centos</span>
<span class="token function">sudo</span> yum <span class="token function">install</span> crontabs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加定时任务" tabindex="-1"><a class="header-anchor" href="#添加定时任务"><span>添加定时任务</span></a></h3><p>执行下面的命令来添加定时任务：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 使用管理员权限运行，给管理员添加定时任务，避免脚本中有脚本没有权限</span>
<span class="token function">sudo</span> <span class="token function">crontab</span> <span class="token parameter variable">-e</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>第一次运行，可能会选择编辑器， 将如下内容添加到文件中：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 每分钟执行一次，为了演示</span>
*/1 * * * *   /usr/local/nginx/sbin/cut_nginx_log.sh

<span class="token comment"># 如果要每天0点0分执行，使用如下：</span>
<span class="token number">0</span> <span class="token number">0</span> * * *   /usr/local/nginx/sbin/cut_nginx_log.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果选择了cron编辑器，操作方法：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">crontab</span> <span class="token parameter variable">-e</span> 配置完成后，如何把保存并退出？
<span class="token number">1</span>.Ctrl+O 写入
<span class="token number">2</span>.出现“FIile name to Write<span class="token punctuation">..</span>.”，输入Enter
<span class="token number">3</span>.Ctrl+x 保存输出
提示“crontab:installing new crontab”表示成功。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>保存退出后，可以通过 <code>sudo crontab -l</code> 查看（因为定时任务是针对用户添加的，这里查看也需要sudo）。</p><p>关于定时任务表达式，可以去搜索一下 Cron 表达式的写法。</p><h3 id="重启定时任务" tabindex="-1"><a class="header-anchor" href="#重启定时任务"><span>重启定时任务</span></a></h3><p>重启一下定时任务，使生效。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">service</span> crond restart

<span class="token comment"># 如果找不到服务，可以尝试使用这个</span>
<span class="token function">sudo</span> <span class="token function">service</span> <span class="token function">cron</span> restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nginx编译参数说明" tabindex="-1"><a class="header-anchor" href="#nginx编译参数说明"><span>Nginx编译参数说明</span></a></h2><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>--prefix=<code>&lt;path&gt;</code></td><td>Nginx安装路径。如果没有指定，默认为 /usr/local/nginx。</td></tr><tr><td>--sbin-path=<code>&lt;path&gt;</code></td><td>Nginx可执行文件安装路径。只能安装时指定，如果没有指定，默认为<code>&lt;prefix&gt;</code>/sbin/nginx。</td></tr><tr><td>--conf-path=<code>&lt;path&gt;</code></td><td>在没有给定-c选项下默认的nginx.conf的路径。如果没有指定，默认为<code>&lt;prefix&gt;</code>/conf/nginx.conf。</td></tr><tr><td>--pid-path=<code>&lt;path&gt;</code></td><td>在nginx.conf中没有指定pid指令的情况下，默认的nginx.pid的路径。如果没有指定，默认为 <code>&lt;prefix&gt;</code>/logs/nginx.pid。</td></tr><tr><td>--lock-path=<code>&lt;path&gt;</code></td><td>nginx.lock文件的路径。</td></tr><tr><td>--error-log-path=<code>&lt;path&gt;</code></td><td>在nginx.conf中没有指定error_log指令的情况下，默认的错误日志的路径。如果没有指定，默认为 <code>&lt;prefix&gt;</code>/- logs/error.log。</td></tr><tr><td>--http-log-path=<code>&lt;path&gt;</code></td><td>在nginx.conf中没有指定access_log指令的情况下，默认的访问日志的路径。如果没有指定，默认为 <code>&lt;prefix&gt;</code>/- logs/access.log。</td></tr><tr><td>--user=<code>&lt;user&gt;</code></td><td>在nginx.conf中没有指定user指令的情况下，默认的nginx使用的用户。如果没有指定，默认为 nobody。</td></tr><tr><td>--group=<code>&lt;group&gt;</code></td><td>在nginx.conf中没有指定user指令的情况下，默认的nginx使用的组。如果没有指定，默认为 nobody。</td></tr><tr><td>--builddir=DIR</td><td>指定编译的目录</td></tr><tr><td>--with-rtsig_module</td><td>启用 rtsig 模块</td></tr><tr><td>--with-select_module --without-select_module</td><td>允许或不允许开启SELECT模式，如果 configure 没有找到更合适的模式，比如：kqueue(sun os),epoll (linux kenel 2.6+), rtsig(- 实时信号)或者/dev/poll(一种类似select的模式，底层实现与SELECT基本相 同，都是采用轮训方法) SELECT模式将是默认安装模式</td></tr><tr><td>--with-poll_module --without-poll_module</td><td>Whether or not to enable the poll module. This module is enabled by, default if a more suitable method such as kqueue, epoll, rtsig or /dev/poll is not discovered by configure.</td></tr><tr><td>--with-http_ssl_module</td><td>Enable ngx_http_ssl_module. Enables SSL support and the ability to handle HTTPS requests. Requires OpenSSL. On Debian, this is libssl-dev. 开启HTTP SSL模块，使NGINX可以支持HTTPS请求。这个模块需要已经安装了OPENSSL，在DEBIAN上是libssl</td></tr><tr><td>--with-http_realip_module</td><td>启用 ngx_http_realip_module</td></tr><tr><td>--with-http_addition_module</td><td>启用 ngx_http_addition_module</td></tr><tr><td>--with-http_sub_module</td><td>启用 ngx_http_sub_module</td></tr><tr><td>--with-http_dav_module</td><td>启用 ngx_http_dav_module</td></tr><tr><td>--with-http_flv_module</td><td>启用 ngx_http_flv_module</td></tr><tr><td>--with-http_stub_status_module</td><td>启用 &quot;server status&quot; 页</td></tr><tr><td>--without-http_charset_module</td><td>禁用 ngx_http_charset_module</td></tr><tr><td>--without-http_gzip_module</td><td>禁用 ngx_http_gzip_module. 如果启用，需要 zlib 。</td></tr><tr><td>--without-http_ssi_module</td><td>禁用 ngx_http_ssi_module</td></tr><tr><td>--without-http_userid_module</td><td>禁用 ngx_http_userid_module</td></tr><tr><td>--without-http_access_module</td><td>禁用 ngx_http_access_module</td></tr><tr><td>--without-http_auth_basic_module</td><td>禁用 ngx_http_auth_basic_module</td></tr><tr><td>--without-http_autoindex_module</td><td>禁用 ngx_http_autoindex_module</td></tr><tr><td>--without-http_geo_module</td><td>禁用 ngx_http_geo_module</td></tr><tr><td>--without-http_map_module</td><td>禁用 ngx_http_map_module</td></tr><tr><td>--without-http_referer_module</td><td>禁用 ngx_http_referer_module</td></tr><tr><td>--without-http_rewrite_module</td><td>禁用 ngx_http_rewrite_module. 如果启用需要 PCRE 。</td></tr><tr><td>--without-http_proxy_module</td><td>禁用 ngx_http_proxy_module</td></tr><tr><td>--without-http_fastcgi_module</td><td>禁用 ngx_http_fastcgi_module</td></tr><tr><td>--without-http_memcached_module</td><td>禁用 ngx_http_memcached_module</td></tr><tr><td>--without-http_limit_zone_module</td><td>禁用 ngx_http_limit_zone_module</td></tr><tr><td>--without-http_empty_gif_module</td><td>禁用 ngx_http_empty_gif_module</td></tr><tr><td>--without-http_browser_module</td><td>禁用 ngx_http_browser_module</td></tr><tr><td>--without-http_upstream_ip_hash_module</td><td>禁用 ngx_http_upstream_ip_hash_module</td></tr><tr><td>--with-http_perl_module</td><td>启用 ngx_http_perl_module</td></tr><tr><td>--with-perl_modules_path=PATH</td><td>指定 perl 模块的路径</td></tr><tr><td>--with-perl=PATH</td><td>指定 perl 执行文件的路径</td></tr><tr><td>--http-log-path=PATH</td><td>Set path to the http access log</td></tr><tr><td>--http-client-body-temp-path=PATH</td><td>Set path to the http client request body temporary files</td></tr><tr><td>--http-proxy-temp-path=PATH</td><td>Set path to the http proxy temporary files</td></tr><tr><td>--http-fastcgi-temp-path=PATH</td><td>Set path to the http fastcgi temporary files</td></tr><tr><td>--without-http</td><td>禁用 HTTP server</td></tr><tr><td>--with-mail</td><td>启用 IMAP4/POP3/SMTP 代理模块</td></tr><tr><td>--with-mail_ssl_module</td><td>启用 ngx_mail_ssl_module</td></tr><tr><td>--with-cc=PATH</td><td>指定 C 编译器的路径</td></tr><tr><td>--with-cpp=PATH</td><td>指定 C 预处理器的路径</td></tr><tr><td>--with-cc-opt=OPTIONS</td><td>Additional parameters which will be added to the variable CFLAGS. With the use of the system library PCRE in FreeBSD, it is necessary to indicate --with-cc-opt=&quot;-I /usr/local/include&quot;. If we are using select() and it is necessary to increase the number of file descriptors, then this also can be assigned here: --with-cc-opt=&quot;-D FD_SETSIZE=2048&quot;.</td></tr><tr><td>--with-ld-opt=OPTIONS</td><td>Additional parameters passed to the linker. With the use of the system library PCRE in - FreeBSD, it is necessary to indicate --with-ld-opt=&quot;-L /usr/local/lib&quot;.</td></tr><tr><td>--with-cpu-opt=CPU</td><td>为特定的 CPU 编译，有效的值包括：pentium, pentiumpro, pentium3, pentium4, athlon, opteron, amd64, sparc32, sparc64, ppc64</td></tr><tr><td>--without-pcre</td><td>禁止 PCRE 库的使用。同时也会禁止 HTTP rewrite 模块。在 &quot;location&quot; 配置指令中的正则表达式也需要 PCRE 。</td></tr><tr><td>--with-pcre=DIR</td><td>指定 PCRE 库的源代码的路径。</td></tr><tr><td>--with-pcre-opt=OPTIONS</td><td>Set additional options for PCRE building.</td></tr><tr><td>--with-md5=DIR</td><td>Set path to md5 library sources.</td></tr><tr><td>--with-md5-opt=OPTIONS</td><td>Set additional options for md5 building.</td></tr><tr><td>--with-md5-asm</td><td>Use md5 assembler sources.</td></tr><tr><td>--with-sha1=DIR</td><td>Set path to sha1 library sources.</td></tr><tr><td>--with-sha1-opt=OPTIONS</td><td>Set additional options for sha1 building.</td></tr><tr><td>--with-sha1-asm</td><td>Use sha1 assembler sources.</td></tr><tr><td>--with-zlib=DIR</td><td>Set path to zlib library sources.</td></tr><tr><td>--with-zlib-opt=OPTIONS</td><td>Set additional options for zlib building.</td></tr><tr><td>--with-zlib-asm=CPU</td><td>Use zlib assembler sources optimized for specified CPU, valid values are: pentium, pentiumpro</td></tr><tr><td>--with-openssl=DIR</td><td>Set path to OpenSSL library sources</td></tr><tr><td>--with-openssl-opt=OPTIONS</td><td>Set additional options for OpenSSL building</td></tr><tr><td>--with-debug</td><td>启用调试日志</td></tr><tr><td>--add-module=PATH</td><td>Add in a third-party module found in directory PATH</td></tr></tbody></table><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><p>在Centos 默认配置文件在 <strong>/usr/local/nginx-1.5.1/conf/nginx.conf</strong> 我们要在这里配置一些文件。nginx.conf是主配置文件，由若干个部分组成，每个大括号<code>{}</code>表示一个部分。每一行指令都由分号结束<code>;</code>，标志着一行的结束。</p><h3 id="常用正则" tabindex="-1"><a class="header-anchor" href="#常用正则"><span>常用正则</span></a></h3><table><thead><tr><th>正则</th><th>说明</th><th>正则</th><th>说明</th></tr></thead><tbody><tr><td><code>. </code></td><td>匹配除换行符以外的任意字符</td><td><code>$ </code></td><td>匹配字符串的结束</td></tr><tr><td><code>? </code></td><td>重复0次或1次</td><td><code>{n} </code></td><td>重复n次</td></tr><tr><td><code>+ </code></td><td>重复1次或更多次</td><td><code>{n,} </code></td><td>重复n次或更多次</td></tr><tr><td><code>*</code></td><td>重复0次或更多次</td><td><code>[c] </code></td><td>匹配单个字符c</td></tr><tr><td><code>\\d </code></td><td>匹配数字</td><td><code>[a-z]</code></td><td>匹配a-z小写字母的任意一个</td></tr><tr><td><code>^ </code></td><td>匹配字符串的开始</td><td>-</td><td>-</td></tr></tbody></table><h3 id="全局变量" tabindex="-1"><a class="header-anchor" href="#全局变量"><span>全局变量</span></a></h3><table><thead><tr><th>变量</th><th>说明</th><th>变量</th><th>说明</th></tr></thead><tbody><tr><td>$args</td><td>这个变量等于请求行中的参数，同$query_string</td><td>$remote_port</td><td>客户端的端口。</td></tr><tr><td>$content_length</td><td>请求头中的Content-length字段。</td><td>$remote_user</td><td>已经经过Auth Basic Module验证的用户名。</td></tr><tr><td>$content_type</td><td>请求头中的Content-Type字段。</td><td>$request_filename</td><td>当前请求的文件路径，由root或alias指令与URI请求生成。</td></tr><tr><td>$document_root</td><td>当前请求在root指令中指定的值。</td><td>$scheme</td><td>HTTP方法（如http，https）。</td></tr><tr><td>$host</td><td>请求主机头字段，否则为服务器名称。</td><td>$server_protocol</td><td>请求使用的协议，通常是HTTP/1.0或HTTP/1.1。</td></tr><tr><td>$http_user_agent</td><td>客户端agent信息</td><td>$server_addr</td><td>服务器地址，在完成一次系统调用后可以确定这个值。</td></tr><tr><td>$http_cookie</td><td>客户端cookie信息</td><td>$server_name</td><td>服务器名称。</td></tr><tr><td>$limit_rate</td><td>这个变量可以限制连接速率。</td><td>$server_port</td><td>请求到达服务器的端口号。</td></tr><tr><td>$request_method</td><td>客户端请求的动作，通常为GET或POST。</td><td>$request_uri</td><td>包含请求参数的原始URI，不包含主机名，如：/foo/bar.php?arg=baz。</td></tr><tr><td>$remote_addr</td><td>客户端的IP地址。</td><td>$uri</td><td>不带请求参数的当前URI，$uri不包含主机名，如/foo/bar.html。</td></tr><tr><td>$document_uri</td><td>与$uri相同。</td><td>-</td><td>-</td></tr></tbody></table><p>例如请求：<code>http://localhost:3000/test1/test2/test.php</code></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$host：localhost  
$server_port：3000  
$request_uri：/test1/test2/test.php  
$document_uri：/test1/test2/test.php  
$document_root：/var/www/html  
$request_filename：/var/www/html/test1/test2/test.php  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="符号参考" tabindex="-1"><a class="header-anchor" href="#符号参考"><span>符号参考</span></a></h3><table><thead><tr><th>符号</th><th>说明</th><th>符号</th><th>说明</th><th>符号</th><th>说明</th></tr></thead><tbody><tr><td>k,K</td><td>千字节</td><td>m,M</td><td>兆字节</td><td>ms</td><td>毫秒</td></tr><tr><td>s</td><td>秒</td><td>m</td><td>分钟</td><td>h</td><td>小时</td></tr><tr><td>d</td><td>日</td><td>w</td><td>周</td><td>M</td><td>一个月, 30天</td></tr></tbody></table><p>例如，&quot;8k&quot;，&quot;1m&quot; 代表字节数计量。<br> 例如，&quot;1h 30m&quot;，&quot;1y 6M&quot;。代表 &quot;1小时 30分&quot;，&quot;1年零6个月&quot;。</p><h3 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件"><span>配置文件</span></a></h3><p>nginx 的配置系统由一个主配置文件和其他一些辅助的配置文件构成。这些配置文件均是纯文本文件，全部位于 nginx 安装目录下的 conf 目录下。</p><p>指令由 nginx 的各个模块提供，不同的模块会提供不同的指令来实现配置。<br> 指令除了 Key-Value 的形式，还有作用域指令。</p><p>nginx.conf 中的配置信息，根据其逻辑上的意义，对它们进行了分类，也就是分成了多个作用域，或者称之为配置指令上下文。不同的作用域含有一个或者多个配置项。</p><p>下面的这些上下文指令是用的比较多：</p><table><thead><tr><th>Directive</th><th>Description</th><th>Contains Directive</th></tr></thead><tbody><tr><td>main</td><td>nginx 在运行时与具体业务功能（比如 http 服务或者 email 服务代理）无关的一些参数，比如工作进程数，运行的身份等。</td><td>user, worker_processes, error_log, events, http, mail</td></tr><tr><td>http</td><td>与提供 http 服务相关的一些配置参数。例如：是否使用 keepalive 啊，是否使用 gzip 进行压缩等。</td><td>server</td></tr><tr><td>server</td><td>http 服务上支持若干虚拟主机。每个虚拟主机一个对应的 server 配置项，配置项里面包含该虚拟主机相关的配置。在提供 mail 服务的代理时，也可以建立若干 server. 每个 server 通过监听的地址来区分。</td><td>listen, server_name, access_log, location, protocol, proxy, smtp_auth, xclient</td></tr><tr><td>location</td><td>http 服务中，某些特定的 URL 对应的一系列配置项。</td><td>index, root</td></tr><tr><td>mail</td><td>实现 email 相关的 SMTP/IMAP/POP3 代理时，共享的一些配置项（因为可能实现多个代理，工作在多个监听地址上）。</td><td>server, http, imap_capabilities</td></tr><tr><td>include</td><td>以便增强配置文件的可读性，使得部分配置文件可以重新使用。</td><td>-</td></tr><tr><td>valid_referers</td><td>用来校验Http请求头Referer是否有效。</td><td>-</td></tr><tr><td>try_files</td><td>用在server部分，不过最常见的还是用在location部分，它会按照给定的参数顺序进行尝试，第一个被匹配到的将会被使用。</td><td>-</td></tr><tr><td>if</td><td>当在location块中使用if指令，在某些情况下它并不按照预期运行，一般来说避免使用if指令。</td><td>-</td></tr></tbody></table><p>例如我们再 <strong>nginx.conf</strong> 里面引用两个配置 vhost/example.com.conf 和 vhost/gitlab.com.conf 它们都被放在一个我自己新建的目录 vhost 下面。nginx.conf 配置如下：</p><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">worker_processes</span>  <span class="token number">1</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">events</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">worker_connections</span>  <span class="token number">1024</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">include</span>       mime.types</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">default_type</span>  application/octet-stream</span><span class="token punctuation">;</span>

    <span class="token comment">#log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span>
    <span class="token comment">#                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span>
    <span class="token comment">#                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span>

    <span class="token comment">#access_log  logs/access.log  main;</span>

    <span class="token directive"><span class="token keyword">sendfile</span>        <span class="token boolean">on</span></span><span class="token punctuation">;</span>
    <span class="token comment">#tcp_nopush     on;</span>

    <span class="token comment">#keepalive_timeout  0;</span>
    <span class="token directive"><span class="token keyword">keepalive_timeout</span>  <span class="token number">65</span></span><span class="token punctuation">;</span>

    <span class="token comment">#gzip  on;</span>
    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">80</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">server_name</span>  localhost</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">root</span>   html</span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">index</span>  index.html index.htm</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token directive"><span class="token keyword">error_page</span>   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">location</span> = /50x.html</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">root</span>   html</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token directive"><span class="token keyword">include</span>  vhost/example.com.conf</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">include</span>  vhost/gitlab.com.conf</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简单的配置: example.com.conf</p><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token comment">#侦听的80端口</span>
    <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span>  baidu.com app.baidu.com</span><span class="token punctuation">;</span> <span class="token comment"># 这里指定域名</span>
    <span class="token directive"><span class="token keyword">index</span>        index.html index.htm</span><span class="token punctuation">;</span>    <span class="token comment"># 这里指定默认入口页面</span>
    <span class="token directive"><span class="token keyword">root</span> /home/www/app.baidu.com</span><span class="token punctuation">;</span>         <span class="token comment"># 这里指定目录</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="内置预定义变量" tabindex="-1"><a class="header-anchor" href="#内置预定义变量"><span>内置预定义变量</span></a></h3>`,98)),s("p",null,[n[5]||(n[5]=e("Nginx提供了许多预定义的变量，也可以通过使用set来设置变量。你可以在if中使用预定义变量，也可以将它们传递给代理服务器。以下是一些常见的预定义变量，")),s("a",b,[n[4]||(n[4]=e("更多详见")),t(a)])]),n[8]||(n[8]=i(`<table><thead><tr><th>变量名称</th><th>值</th></tr></thead><tbody><tr><td>$args_name</td><td>在请求中的name参数</td></tr><tr><td>$args</td><td>所有请求参数</td></tr><tr><td>$query_string</td><td>$args的别名</td></tr><tr><td>$content_length</td><td>请求头Content-Length的值</td></tr><tr><td>$content_type</td><td>请求头Content-Type的值</td></tr><tr><td>$host</td><td>如果当前有Host，则为请求头Host的值；如果没有这个头，那么该值等于匹配该请求的server_name的值</td></tr><tr><td>$remote_addr</td><td>客户端的IP地址</td></tr><tr><td>$request</td><td>完整的请求，从客户端收到，包括Http请求方法、URI、Http协议、头、请求体</td></tr><tr><td>$request_uri</td><td>完整请求的URI，从客户端来的请求，包括参数</td></tr><tr><td>$scheme</td><td>当前请求的协议</td></tr><tr><td>$uri</td><td>当前请求的标准化URI</td></tr></tbody></table><h3 id="反向代理" tabindex="-1"><a class="header-anchor" href="#反向代理"><span>反向代理</span></a></h3><p>反向代理是一个Web服务器，它接受客户端的连接请求，然后将请求转发给上游服务器，并将从服务器得到的结果返回给连接的客户端。下面简单的反向代理的例子：</p><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>  
  <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">80</span></span><span class="token punctuation">;</span>                                                        
  <span class="token directive"><span class="token keyword">server_name</span>  localhost</span><span class="token punctuation">;</span>                                              
  <span class="token directive"><span class="token keyword">client_max_body_size</span> <span class="token number">1024M</span></span><span class="token punctuation">;</span>  <span class="token comment"># 允许客户端请求的最大单文件字节数</span>

  <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">proxy_pass</span>                         http://localhost:8080</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> Host              <span class="token variable">$host</span>:<span class="token variable">$server_port</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-For   <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span> <span class="token comment"># HTTP的请求端真实的IP</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-Proto <span class="token variable">$scheme</span></span><span class="token punctuation">;</span>      <span class="token comment"># 为了正确地识别实际用户发出的协议是 http 还是 https</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂的配置: gitlab.com.conf。</p><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token comment">#侦听的80端口</span>
    <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span>  git.example.cn</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span>   http://localhost:3000</span><span class="token punctuation">;</span>
        <span class="token comment">#以下是一些反向代理的配置可删除</span>
        <span class="token directive"><span class="token keyword">proxy_redirect</span>             <span class="token boolean">off</span></span><span class="token punctuation">;</span>
        <span class="token comment">#后端的Web服务器可以通过X-Forwarded-For获取用户真实IP</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span>           Host <span class="token variable">$host</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">client_max_body_size</span>       <span class="token number">10m</span></span><span class="token punctuation">;</span> <span class="token comment">#允许客户端请求的最大单文件字节数</span>
        <span class="token directive"><span class="token keyword">client_body_buffer_size</span>    <span class="token number">128k</span></span><span class="token punctuation">;</span> <span class="token comment">#缓冲区代理缓冲用户端请求的最大字节数</span>
        <span class="token directive"><span class="token keyword">proxy_connect_timeout</span>      <span class="token number">300</span></span><span class="token punctuation">;</span> <span class="token comment">#nginx跟后端服务器连接超时时间(代理连接超时)</span>
        <span class="token directive"><span class="token keyword">proxy_send_timeout</span>         <span class="token number">300</span></span><span class="token punctuation">;</span> <span class="token comment">#后端服务器数据回传时间(代理发送超时)</span>
        <span class="token directive"><span class="token keyword">proxy_read_timeout</span>         <span class="token number">300</span></span><span class="token punctuation">;</span> <span class="token comment">#连接成功后，后端服务器响应时间(代理接收超时)</span>
        <span class="token directive"><span class="token keyword">proxy_buffer_size</span>          <span class="token number">4k</span></span><span class="token punctuation">;</span> <span class="token comment">#设置代理服务器（nginx）保存用户头信息的缓冲区大小</span>
        <span class="token directive"><span class="token keyword">proxy_buffers</span>              <span class="token number">4</span> <span class="token number">32k</span></span><span class="token punctuation">;</span> <span class="token comment">#proxy_buffers缓冲区，网页平均在32k以下的话，这样设置</span>
        <span class="token directive"><span class="token keyword">proxy_busy_buffers_size</span>    <span class="token number">64k</span></span><span class="token punctuation">;</span> <span class="token comment">#高负荷下缓冲大小（proxy_buffers*2）</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代理到上游服务器的配置中，最重要的是proxy_pass指令。以下是代理模块中的一些常用指令：</p><table><thead><tr><th>指令</th><th>说明</th></tr></thead><tbody><tr><td>proxy_connect_timeout</td><td>Nginx从接受请求至连接到上游服务器的最长等待时间</td></tr><tr><td>proxy_send_timeout</td><td>后端服务器数据回传时间(代理发送超时)</td></tr><tr><td>proxy_read_timeout</td><td>连接成功后，后端服务器响应时间(代理接收超时)</td></tr><tr><td>proxy_cookie_domain</td><td>替代从上游服务器来的Set-Cookie头的domain属性</td></tr><tr><td>proxy_cookie_path</td><td>替代从上游服务器来的Set-Cookie头的path属性</td></tr><tr><td>proxy_buffer_size</td><td>设置代理服务器（nginx）保存用户头信息的缓冲区大小</td></tr><tr><td>proxy_buffers</td><td>proxy_buffers缓冲区，网页平均在多少k以下</td></tr><tr><td>proxy_set_header</td><td>重写发送到上游服务器头的内容，也可以通过将某个头部的值设置为空字符串，而不发送某个头部的方法实现</td></tr><tr><td>proxy_ignore_headers</td><td>这个指令禁止处理来自代理服务器的应答。</td></tr><tr><td>proxy_intercept_errors</td><td>使nginx阻止HTTP应答代码为400或者更高的应答。</td></tr></tbody></table><h3 id="负载均衡" tabindex="-1"><a class="header-anchor" href="#负载均衡"><span>负载均衡</span></a></h3><p>upstream指令启用一个新的配置区段，在该区段定义一组上游服务器。这些服务器可能被设置不同的权重，也可能出于对服务器进行维护，标记为down。</p><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">upstream</span> gitlab</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">ip_hash</span></span><span class="token punctuation">;</span>
    <span class="token comment"># upstream的负载均衡，weight是权重，可以根据机器配置定义权重。weigth参数表示权值，权值越高被分配到的几率越大。</span>
    <span class="token directive"><span class="token keyword">server</span> 192.168.122.11:8081</span> <span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server</span> 127.0.0.1:82 weight=3</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server</span> 127.0.0.1:83 weight=3 down</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server</span> 127.0.0.1:84 weight=3</span><span class="token punctuation">;</span> <span class="token directive"><span class="token keyword">max_fails=3</span>  fail_timeout=20s</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server</span> 127.0.0.1:85 weight=4</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">keepalive</span> <span class="token number">32</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token comment">#侦听的80端口</span>
    <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span>  git.example.cn</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span>   http://gitlab</span><span class="token punctuation">;</span>    <span class="token comment">#在这里设置一个代理，和upstream的名字一样</span>
        <span class="token comment">#以下是一些反向代理的配置可删除</span>
        <span class="token directive"><span class="token keyword">proxy_redirect</span>             <span class="token boolean">off</span></span><span class="token punctuation">;</span>
        <span class="token comment">#后端的Web服务器可以通过X-Forwarded-For获取用户真实IP</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span>           Host <span class="token variable">$host</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span>           X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span>           X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">client_max_body_size</span>       <span class="token number">10m</span></span><span class="token punctuation">;</span>  <span class="token comment">#允许客户端请求的最大单文件字节数</span>
        <span class="token directive"><span class="token keyword">client_body_buffer_size</span>    <span class="token number">128k</span></span><span class="token punctuation">;</span> <span class="token comment">#缓冲区代理缓冲用户端请求的最大字节数</span>
        <span class="token directive"><span class="token keyword">proxy_connect_timeout</span>      <span class="token number">300</span></span><span class="token punctuation">;</span>  <span class="token comment">#nginx跟后端服务器连接超时时间(代理连接超时)</span>
        <span class="token directive"><span class="token keyword">proxy_send_timeout</span>         <span class="token number">300</span></span><span class="token punctuation">;</span>  <span class="token comment">#后端服务器数据回传时间(代理发送超时)</span>
        <span class="token directive"><span class="token keyword">proxy_read_timeout</span>         <span class="token number">300</span></span><span class="token punctuation">;</span>  <span class="token comment">#连接成功后，后端服务器响应时间(代理接收超时)</span>
        <span class="token directive"><span class="token keyword">proxy_buffer_size</span>          <span class="token number">4k</span></span><span class="token punctuation">;</span> <span class="token comment">#设置代理服务器（nginx）保存用户头信息的缓冲区大小</span>
        <span class="token directive"><span class="token keyword">proxy_buffers</span>              <span class="token number">4</span> <span class="token number">32k</span></span><span class="token punctuation">;</span><span class="token comment"># 缓冲区，网页平均在32k以下的话，这样设置</span>
        <span class="token directive"><span class="token keyword">proxy_busy_buffers_size</span>    <span class="token number">64k</span></span><span class="token punctuation">;</span> <span class="token comment">#高负荷下缓冲大小（proxy_buffers*2）</span>
        <span class="token directive"><span class="token keyword">proxy_temp_file_write_size</span> <span class="token number">64k</span></span><span class="token punctuation">;</span> <span class="token comment">#设定缓存文件夹大小，大于这个值，将从upstream服务器传</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每个请求按时间顺序逐一分配到不同的后端服务器，如果后端服务器down掉，能自动剔除。</p><p><strong>负载均衡：</strong></p><p>upstream模块能够使用3种负载均衡算法：轮询、IP哈希、最少连接数。</p><p><strong>轮询：</strong> 默认情况下使用轮询算法，不需要配置指令来激活它，它是基于在队列中谁是下一个的原理确保访问均匀地分布到每个上游服务器；<br><strong>IP哈希：</strong> 通过ip_hash指令来激活，Nginx通过IPv4地址的前3个字节或者整个IPv6地址作为哈希键来实现，同一个IP地址总是能被映射到同一个上游服务器；<br><strong>最少连接数：</strong> 通过least_conn指令来激活，该算法通过选择一个活跃数最少的上游服务器进行连接。如果上游服务器处理能力不同，可以通过给server配置weight权重来说明，该算法将考虑到不同服务器的加权最少连接数。</p><h4 id="rr" tabindex="-1"><a class="header-anchor" href="#rr"><span>RR</span></a></h4><p><strong>简单配置</strong> ，这里我配置了2台服务器，当然实际上是一台，只是端口不一样而已，而8081的服务器是不存在的，也就是说访问不到，但是我们访问 <code>http://localhost</code> 的时候，也不会有问题，会默认跳转到<code>http://localhost:8080</code>具体是因为Nginx会自动判断服务器的状态，如果服务器处于不能访问（服务器挂了），就不会跳转到这台服务器，所以也避免了一台服务器挂了影响使用的情况，由于Nginx默认是RR策略，所以我们不需要其他更多的设置</p><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">upstream</span> test</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">server</span> localhost:8080</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server</span> localhost:8081</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">81</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span>  localhost</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">client_max_body_size</span> <span class="token number">1024M</span></span><span class="token punctuation">;</span>
 
    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span> http://test</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$host</span>:<span class="token variable">$server_port</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>负载均衡的核心代码为</strong></p><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">upstream</span> test</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">server</span> localhost:8080</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server</span> localhost:8081</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="权重" tabindex="-1"><a class="header-anchor" href="#权重"><span>权重</span></a></h4><p>指定轮询几率，weight和访问比率成正比，用于后端服务器性能不均的情况。 例如</p><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">upstream</span> test</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">server</span> localhost:8080 weight=9</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server</span> localhost:8081 weight=1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么10次一般只会有1次会访问到8081，而有9次会访问到8080</p><h4 id="ip-hash" tabindex="-1"><a class="header-anchor" href="#ip-hash"><span>ip_hash</span></a></h4><p>上面的2种方式都有一个问题，那就是下一个请求来的时候请求可能分发到另外一个服务器，当我们的程序不是无状态的时候（采用了session保存数据），这时候就有一个很大的很问题了，比如把登录信息保存到了session中，那么跳转到另外一台服务器的时候就需要重新登录了，所以很多时候我们需要一个客户只访问一个服务器，那么就需要用iphash了，iphash的每个请求按访问ip的hash结果分配，这样每个访客固定访问一个后端服务器，可以解决session的问题。</p><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">upstream</span> test</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">ip_hash</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server</span> localhost:8080</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server</span> localhost:8081</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="fair" tabindex="-1"><a class="header-anchor" href="#fair"><span>fair</span></a></h4><p>这是个第三方模块，按后端服务器的响应时间来分配请求，响应时间短的优先分配。</p><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">upstream</span> backend</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">fair</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server</span> localhost:8080</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server</span> localhost:8081</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="url-hash" tabindex="-1"><a class="header-anchor" href="#url-hash"><span>url_hash</span></a></h4><p>这是个第三方模块，按访问url的hash结果来分配请求，使每个url定向到同一个后端服务器，后端服务器为缓存时比较有效。 在upstream中加入hash语句，server语句中不能写入weight等其他的参数，hash_method是使用的hash算法</p><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">upstream</span> backend</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">hash</span> <span class="token variable">$request_uri</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">hash_method</span> crc32</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server</span> localhost:8080</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server</span> localhost:8081</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上5种负载均衡各自适用不同情况下使用，所以可以根据实际情况选择使用哪种策略模式，不过fair和url_hash需要安装第三方模块才能使用</p><p><strong>server指令可选参数：</strong></p><ol><li>weight：设置一个服务器的访问权重，数值越高，收到的请求也越多；</li><li>fail_timeout：在这个指定的时间内服务器必须提供响应，如果在这个时间内没有收到响应，那么服务器将会被标记为down状态；</li><li>max_fails：设置在fail_timeout时间之内尝试对一个服务器连接的最大次数，如果超过这个次数，那么服务器将会被标记为down;</li><li>down：标记一个服务器不再接受任何请求；</li><li>backup：一旦其他服务器宕机，那么有该标记的机器将会接收请求。</li></ol><p><strong>keepalive指令：</strong></p><p>Nginx服务器将会为每一个worker进行保持同上游服务器的连接。</p><h3 id="屏蔽ip" tabindex="-1"><a class="header-anchor" href="#屏蔽ip"><span>屏蔽ip</span></a></h3><p>在nginx的配置文件<code>nginx.conf</code>中加入如下配置，可以放到http, server, location, limit_except语句块，需要注意相对路径，本例当中<code>nginx.conf</code>，<code>blocksip.conf</code>在同一个目录中。</p><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">include</span> blockip.conf</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在blockip.conf里面输入内容，如：</p><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">deny</span> 165.91.122.67</span><span class="token punctuation">;</span>

<span class="token directive"><span class="token keyword">deny</span> IP</span><span class="token punctuation">;</span>   <span class="token comment"># 屏蔽单个ip访问</span>
<span class="token directive"><span class="token keyword">allow</span> IP</span><span class="token punctuation">;</span>  <span class="token comment"># 允许单个ip访问</span>
<span class="token directive"><span class="token keyword">deny</span> all</span><span class="token punctuation">;</span>  <span class="token comment"># 屏蔽所有ip访问</span>
<span class="token directive"><span class="token keyword">allow</span> all</span><span class="token punctuation">;</span> <span class="token comment"># 允许所有ip访问</span>
<span class="token directive"><span class="token keyword">deny</span> 123.0.0.0/8   <span class="token comment"># 屏蔽整个段即从123.0.0.1到123.255.255.254访问的命令</span>
deny 124.45.0.0/16 <span class="token comment"># 屏蔽IP段即从123.45.0.1到123.45.255.254访问的命令</span>
deny 123.45.6.0/24 <span class="token comment"># 屏蔽IP段即从123.45.6.1到123.45.6.254访问的命令</span>

<span class="token comment"># 如果你想实现这样的应用，除了几个IP外，其他全部拒绝</span>
allow 1.1.1.1</span><span class="token punctuation">;</span> 
<span class="token directive"><span class="token keyword">allow</span> 1.1.1.2</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">deny</span> all</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第三方模块安装方法" tabindex="-1"><a class="header-anchor" href="#第三方模块安装方法"><span>第三方模块安装方法</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>./configure --prefix=/你的安装目录  --add-module=/第三方模块目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="重定向" tabindex="-1"><a class="header-anchor" href="#重定向"><span>重定向</span></a></h2><ul><li><code>permanent</code> 永久性重定向。请求日志中的状态码为301</li><li><code>redirect</code> 临时重定向。请求日志中的状态码为302</li></ul><h3 id="重定向整个网站" tabindex="-1"><a class="header-anchor" href="#重定向整个网站"><span>重定向整个网站</span></a></h3><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">server_name</span> old-site.com
    return <span class="token number">301</span> <span class="token variable">$scheme</span>://new-site.com<span class="token variable">$request_uri</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重定向单页" tabindex="-1"><a class="header-anchor" href="#重定向单页"><span>重定向单页</span></a></h3><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">location</span> = /oldpage.html</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">return</span> <span class="token number">301</span> http://example.org/newpage.html</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重定向整个子路径" tabindex="-1"><a class="header-anchor" href="#重定向整个子路径"><span>重定向整个子路径</span></a></h3><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">location</span> /old-site</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">rewrite</span> ^/old-site/(.*) http://example.org/new-site/<span class="token variable">$1</span> permanent</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="性能" tabindex="-1"><a class="header-anchor" href="#性能"><span>性能</span></a></h2><h3 id="内容缓存" tabindex="-1"><a class="header-anchor" href="#内容缓存"><span>内容缓存</span></a></h3><p>允许浏览器基本上永久地缓存静态内容。 Nginx将为您设置Expires和Cache-Control头信息。</p><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">location</span> /static</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">root</span> /data</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">expires</span> max</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要求浏览器永远不会缓存响应（例如用于跟踪请求），请使用-1。</p><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">location</span> = /empty.gif</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">empty_gif</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">expires</span> -1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="gzip压缩" tabindex="-1"><a class="header-anchor" href="#gzip压缩"><span>Gzip压缩</span></a></h3><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">gzip</span>  <span class="token boolean">on</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">gzip_buffers</span> <span class="token number">16</span> <span class="token number">8k</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">gzip_comp_level</span> <span class="token number">6</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">gzip_http_version</span> 1.1</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">gzip_min_length</span> <span class="token number">256</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">gzip_proxied</span> any</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">gzip_vary</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">gzip_types</span>
    text/xml application/xml application/atom+xml application/rss+xml application/xhtml+xml image/svg+xml
    text/javascript application/javascript application/x-javascript
    text/x-json application/json application/x-web-app-manifest+json
    text/css text/plain text/x-component
    font/opentype application/x-font-ttf application/vnd.ms-fontobject
    image/x-icon</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">gzip_disable</span>  <span class="token string">&quot;msie6&quot;</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="打开文件缓存" tabindex="-1"><a class="header-anchor" href="#打开文件缓存"><span>打开文件缓存</span></a></h3><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">open_file_cache</span> max=1000 inactive=20s</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">open_file_cache_valid</span> <span class="token number">30s</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">open_file_cache_min_uses</span> <span class="token number">2</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">open_file_cache_errors</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ssl缓存" tabindex="-1"><a class="header-anchor" href="#ssl缓存"><span>SSL缓存</span></a></h3><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">ssl_session_cache</span> shared:SSL:10m</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">ssl_session_timeout</span> <span class="token number">10m</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="上游keepalive" tabindex="-1"><a class="header-anchor" href="#上游keepalive"><span>上游Keepalive</span></a></h3><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">upstream</span> backend</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">server</span> 127.0.0.1:8080</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">keepalive</span> <span class="token number">32</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    ...
    <span class="token directive"><span class="token keyword">location</span> /api/</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span> http://backend</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_http_version</span> 1.1</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> Connection <span class="token string">&quot;&quot;</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,67))])}const _=d(o,[["render",k],["__file","Nginx.html.vue"]]),y=JSON.parse('{"path":"/other/%E8%BD%AF%E8%B7%AF%E7%94%B1/OpenWrt/Nginx.html","title":"NGINX","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"安装nginx","slug":"安装nginx","link":"#安装nginx","children":[]},{"level":2,"title":"Docker方式安装","slug":"docker方式安装","link":"#docker方式安装","children":[{"level":5,"title":"下载Nginx","slug":"下载nginx","link":"#下载nginx","children":[]}]},{"level":2,"title":"日志文件","slug":"日志文件","link":"#日志文件","children":[]},{"level":2,"title":"server单独指定日志文件","slug":"server单独指定日志文件","link":"#server单独指定日志文件","children":[]},{"level":2,"title":"手动切割日志文件","slug":"手动切割日志文件","link":"#手动切割日志文件","children":[]},{"level":2,"title":"定时切割日志文件","slug":"定时切割日志文件","link":"#定时切割日志文件","children":[{"level":3,"title":"安装crontabs","slug":"安装crontabs","link":"#安装crontabs","children":[]},{"level":3,"title":"添加定时任务","slug":"添加定时任务","link":"#添加定时任务","children":[]},{"level":3,"title":"重启定时任务","slug":"重启定时任务","link":"#重启定时任务","children":[]}]},{"level":2,"title":"Nginx编译参数说明","slug":"nginx编译参数说明","link":"#nginx编译参数说明","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[{"level":3,"title":"常用正则","slug":"常用正则","link":"#常用正则","children":[]},{"level":3,"title":"全局变量","slug":"全局变量","link":"#全局变量","children":[]},{"level":3,"title":"符号参考","slug":"符号参考","link":"#符号参考","children":[]},{"level":3,"title":"配置文件","slug":"配置文件","link":"#配置文件","children":[]},{"level":3,"title":"内置预定义变量","slug":"内置预定义变量","link":"#内置预定义变量","children":[]},{"level":3,"title":"反向代理","slug":"反向代理","link":"#反向代理","children":[]},{"level":3,"title":"负载均衡","slug":"负载均衡","link":"#负载均衡","children":[{"level":4,"title":"RR","slug":"rr","link":"#rr","children":[]},{"level":4,"title":"权重","slug":"权重","link":"#权重","children":[]},{"level":4,"title":"ip_hash","slug":"ip-hash","link":"#ip-hash","children":[]},{"level":4,"title":"fair","slug":"fair","link":"#fair","children":[]},{"level":4,"title":"url_hash","slug":"url-hash","link":"#url-hash","children":[]}]},{"level":3,"title":"屏蔽ip","slug":"屏蔽ip","link":"#屏蔽ip","children":[]}]},{"level":2,"title":"第三方模块安装方法","slug":"第三方模块安装方法","link":"#第三方模块安装方法","children":[]},{"level":2,"title":"重定向","slug":"重定向","link":"#重定向","children":[{"level":3,"title":"重定向整个网站","slug":"重定向整个网站","link":"#重定向整个网站","children":[]},{"level":3,"title":"重定向单页","slug":"重定向单页","link":"#重定向单页","children":[]},{"level":3,"title":"重定向整个子路径","slug":"重定向整个子路径","link":"#重定向整个子路径","children":[]}]},{"level":2,"title":"性能","slug":"性能","link":"#性能","children":[{"level":3,"title":"内容缓存","slug":"内容缓存","link":"#内容缓存","children":[]},{"level":3,"title":"Gzip压缩","slug":"gzip压缩","link":"#gzip压缩","children":[]},{"level":3,"title":"打开文件缓存","slug":"打开文件缓存","link":"#打开文件缓存","children":[]},{"level":3,"title":"SSL缓存","slug":"ssl缓存","link":"#ssl缓存","children":[]},{"level":3,"title":"上游Keepalive","slug":"上游keepalive","link":"#上游keepalive","children":[]}]}],"git":{"createdTime":1731388197000,"updatedTime":1731388197000,"contributors":[{"name":"dkyg666","email":"43946866+dkyg666@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":26.36,"words":7907},"filePathRelative":"other/软路由/OpenWrt/Nginx.md","localizedDate":"2024年11月12日","excerpt":"\\n<h2>安装nginx</h2>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code># Ubuntu使用apt安装\\nsudo apt install nginx\\n\\n# nginx默认安装路径\\n\\n /usr/sbin/nginx:  主程序\\n /etc/nginx:       存放配置文件\\n /usr/share/nginx: 存放静态文件\\n /var/log/nginx:   存放日志\\n /run/nginx.pid:   nginx pid路径\\n\\n</code></pre></div>"}');export{_ as comp,y as data};
