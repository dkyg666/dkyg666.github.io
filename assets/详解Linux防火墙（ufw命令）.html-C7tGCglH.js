import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,e as l,o as d}from"./app-dX96qGh5.js";const s={};function a(u,e){return d(),i("div",null,e[0]||(e[0]=[l(`<h1 id="详解linux防火墙-ufw命令" tabindex="-1"><a class="header-anchor" href="#详解linux防火墙-ufw命令"><span>详解Linux防火墙（ufw命令）</span></a></h1><h2 id="一-什么是ufw命令" tabindex="-1"><a class="header-anchor" href="#一-什么是ufw命令"><span>一：什么是ufw命令</span></a></h2><blockquote><p><strong>ufw（Uncomplicated Firewall）</strong> 是一个在Linux上管理iptables防火墙的命令行工具。它提供了一种简单的方式来配置和管理防火墙规则，使得用户可以轻松地<code>限制网络流量</code>、<code>设置访问规则</code>和<code>保护服务器</code>。使用UFW可以帮助管理员更方便地管理网络安全，它的命令可以用来<strong>添加、删除、启用、禁用防火墙规则</strong>，检查防火墙状态等。<br> 　　早期ufw是在 Ubuntu 8.04 LTS（Hardy Heron） 版本中引入的，并且作为Ubuntu的默认防火墙配置工具而得到推广和采用。然而随着时间的推移，它被其它基于Debian的Linux发行版（如Debian本身以及其衍生版）采纳和支持。所以我们现在使用的Ubuntu、Debian、Linux Mint等等都可以看到ufw命令，甚至一些版本直接自带了ufw命令。<br><strong>说明：设置命令行中文语言（设置完重启即可）</strong></p></blockquote><p>若英文的命令行看起来难受，则可以修改成中文语言（设置完重启）若英文的命令行看起来难受，则可以修改成中文语言（设置完重启）🔔<br> 　　<strong><code>sudo apt-get install language-pack-zh-hans</code></strong>【下载中文语言包】<br> 　　<strong><code>sudo update-locale LANG=zh_CN.UTF-8</code></strong>【设置成中文语言包】<br> 　　<strong><code>reboot now</code></strong>【立刻关机的命令!】</p><p>注：下文都是以Ubuntu−24.04(LTS)发行版演示注：下文都是以<em>U<strong>b</strong>u<strong>n</strong>t**u</em>−24.04(<em>L**TS</em>)发行版演示🔔</p><h2 id="二-ufw基本使用" tabindex="-1"><a class="header-anchor" href="#二-ufw基本使用"><span>二：ufw基本使用</span></a></h2><h3 id="一-检查ufw命令是否存在" tabindex="-1"><a class="header-anchor" href="#一-检查ufw命令是否存在"><span>（一）：检查ufw命令是否存在</span></a></h3><p>既然要使用ufw命令，那么就要看当前版本系统是否自带了ufw命令，一般都是自带的，若没有的话则需要进行安装哟。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Ⅰ：检查是否存在ufw命令
    sudo ufw status
        若打印这个：状态：不活动  （有ufw命令，这小节则无需处理）
        若打印这个：-bash: /usr/sbin/ufw: 没有那个文件或目录 （代表当前没有ufw命令，需要手动下载）

Ⅱ：使用apt安装ufw命令（在线安装）
    sudo apt update
        -- 更新系统的apt包列表，以确保获取最新的软件信息和依赖关系：
    sudo apt install ufw
        -- 通过apt包管理器下载ufw服务。

Ⅲ：使用deb包的方式安装（离线安装）
    Ubuntu24.04LTS版本下载这个：
        http://archive.ubuntu.com/ubuntu/pool/main/u/ufw/ufw_0.36.2-6_all.deb
    Ubuntu22.04LTS版本下载这个：
        http://archive.ubuntu.com/ubuntu/pool/main/u/ufw/ufw_0.36.1-4build1_all.deb
    下载后上传到服务器并通过dpkg安装即可：
        sudo dpkg -i ufw_0.36.2-6_all.deb

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二-ufw快速使用" tabindex="-1"><a class="header-anchor" href="#二-ufw快速使用"><span>（二）：ufw快速使用</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>开启防火墙  
    &gt;&gt; ufw enable  
关闭防火墙  
    &gt;&gt; ufw disable  
查看防火墙状态  
    &gt;&gt; ufw status  
添加放行22、80两个端口；并关闭3389端口  
    &gt;&gt; ufw allow 22  
    &gt;&gt; ufw allow 80  
    &gt;&gt; ufw deny 3389  
删除80端口  
    &gt;&gt; ufw delete allow 80
在开启端口的同时为这个端口规则添加一条注释：
    &gt;&gt; ufw allow 80 comment &quot;这是一个注释&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三-ufw命令详细使用" tabindex="-1"><a class="header-anchor" href="#三-ufw命令详细使用"><span>三：ufw命令详细使用</span></a></h2><p>ufw命令其实贼好用，它可不是光光开放个端口和禁用一个端口这么简单，其实它内部功能强大，如开启关闭端口、设置端口的连接数、添加路由规则等等哟，下面就按照类型依次说明。<br> 　简单说一下，由于我Ubuntu24设置的语言包为中文，会导致我的命令提示信息都是以中文输出，大家看中文也可以猜个大概英文。</p><h3 id="一-ufw状态通用操作" tabindex="-1"><a class="header-anchor" href="#一-ufw状态通用操作"><span>（一）：ufw状态通用操作</span></a></h3><p>其实就是ufw服务的基本启停、状态查询、重置ufw的一些配置等等，没涉及到端口的放。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>ufw enable：          启用防火墙。
ufw disable：         禁用防火墙。
ufw reload：          重新加载防火墙。
ufw reset：           重置防火墙设置。
ufw status：          显示防火墙状态。
ufw status numbered： 以编号的列表显示防火墙状态。
ufw status verbose：  显示详细状态信息。
ufw version：         显示版本信息。

&#39;Ⅰ：开启和关闭防火墙是最重要的啦，如下：&#39;
    &gt;&gt; ufw enable
        此命令可能会中断目前的 ssh 连接。要继续吗 (y|n)？ y
        在系统启动时启用和激活防火墙
        注：设置开启后需要开启22号端口，要不然下次就连不上了（看后面的端口开放规则章节）。
    &gt;&gt; ufw disable
        防火墙在系统启动时自动禁用

&#39;Ⅱ：重新加载防火墙和重置防护墙，如下：&#39;
    &gt;&gt; ufw reload
        已经重新载入防火墙
        注：设置完ufw防火墙的一些操作后需要执行刷新，否则大概率不能立即生效。
        注：有时执行了重新载入防火墙后也得等10秒左右。
    &gt;&gt; ufw reset
        所有规则将被重设为安装时的默认值。这可能会中断目前的 ssh 连接。要继续吗 (y|n)？ y
        备份 “user.rules” 至 “/etc/ufw/user.rules.20240806_153827”
        备份 “before.rules” 至 “/etc/ufw/before.rules.20240806_153827”
        备份 “after.rules” 至 “/etc/ufw/after.rules.20240806_153827”
        备份 “user6.rules” 至 “/etc/ufw/user6.rules.20240806_153827”
        ...
        注：删除所有的规则设置，将ufw配置重置为初始状态且关闭防火墙（谨慎操作，执行完以后啥规则和配置都没了）

&#39;Ⅲ：查看防火墙的一些配置（为了看到好的状态，我这里放开2个端口：分别执行 ufw allow 22 和 ufw allow 8080）&#39;
    &gt;&gt; ufw status
        状态： 激活
        至                          动作          来自
        -                          --          --
        22                         ALLOW       Anywhere
        8080                       ALLOW       Anywhere
        22 (v6)                    ALLOW       Anywhere (v6)
        8080 (v6)                  ALLOW       Anywhere (v6)
        说明：其中v6代表是IPv6的地址规则，
        比如：22      ALLOW  Anywhere     代表允许端口22的流量通过防火墙。
        比如：22(v6)  ALLOW  Anywhere(v6) 代表允许IPv6网络上端口22的流量通过防火墙。
        其中&quot;动作&quot;可选值有如下：
            ALLOW：允许指定的流量通过防火墙，可以是特定端口和协议，也可以是来自特定IP地址或子网的流量。
            DENY：拒绝指定的流量通过防火墙，阻止特定端口或协议的访问或来自特定IP地址的流量。
            REJECT：拒绝指定的流量通过防火墙，并发送拒绝消息给发送方，通常用于明确告知访问被拒绝的情况。
            LIMIT：限制指定的流量通过防火墙，通常用于限制对某些服务的频繁访问或用于防止DoS（拒绝服务）攻击。
    &gt;&gt; ufw status numbered
        状态： 激活
            ...
        [ 4] 8080 (v6)                  ALLOW IN    Anywhere (v6)
        它和上面的一样，只不过在前面加上了一个序号显示。
    &gt;&gt; ufw status verbose
        状态：激活
        日志： on (low)
        默认：deny (incoming), allow (outgoing), disabled (routed)
        新建配置文件: skip
            ....（后面省略）

&#39;Ⅳ：查看ufw版本信息&#39;
    &gt;&gt; ufw version
        ufw 0.36.2
        Copyright 2008-2023 Canonical Ltd.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二-ufw设置端口规则" tabindex="-1"><a class="header-anchor" href="#二-ufw设置端口规则"><span>（二）：ufw设置端口规则</span></a></h3><p>端口的开放和关闭是防火墙的基本功能，下面就跟着我来看看端口的开关规则是如何操作的。</p><p>设置访问的默认策略:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>ufw default ARG： 设置默认策略。

&#39;一旦开启防火墙以后，则所有端口默认都是被拒绝的，我们可用通过ufw status verbose查看：&#39;
    打印部分==》默认：deny (incoming), allow (outgoing), disabled (routed)
    其中 deny (incoming) 代表请求的全部被拒绝。
&#39;但是我想开启端口后还保证所有的端口都是允许连接状态，则需要开启默认策略，需要执行如下代码：&#39;
&gt;&gt; ufw default allow
    默认的 incoming 策略更改为 “allow”
    （请相应地更新你的防火墙规则）
&#39;更新完默认策略后执行ufw reload并通过ufw status verbose查看端口详情则打印：&#39;
    打印部分==》默认：allow (incoming), allow (outgoing), disabled (routed)
    其中 allow (incoming) 代表请求的全部被运行。
注：设置allow就等于没开防火墙，不推荐，不安全。
注：若在allow的默认情况下，需要关闭某个端口则需要再设置具体端口规则，下面有说。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加端口的允许和拒绝策略:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>ufw allow ARGS： 添加允许连接的规则。  
ufw deny ARGS：  添加拒绝连接的规则。

&#39;下面的开启端口用allow、关闭端口用deny即可（只是替换allow和deny来实现效果）&#39;
&#39;1：指定端口号&#39;
    &gt;&gt; ufw allow 22
    &gt;&gt; ufw allow 80
    说明：允许22和80端口的tcp、udp方式的请求访问
&#39;2：指定端口和协议&#39;
    &gt;&gt; ufw allow 6379/tcp
    &gt;&gt; ufw allow 1248/udp
    说明：允许6379端口tcp方式的请求、允许1248端口的udp方式的请求。
&#39;3：指定端口范围&#39;
    &gt;&gt; ufw allow 6000:6005/tcp
    &gt;&gt; ufw allow 7000:7005
    说明：开启6000~6005端口的tcp协议、开启7000~7005的tcp和udp协议
&#39;4：开启特定服务的端口&#39;
    &gt;&gt; ufw allow ssh
    &gt;&gt; ufw allow http
    说明：开启ssh(22)和http(80)端口。
    一般常见的服务名称和端口号说明：
        ●：http（80/tcp）：用于传输超文本内容的协议，网页浏览器和服务器之间的通信。
        ●：https（443/tcp、443/udp）：HTTP的安全版本，通过加密通道（TLS/SSL）进行传输。
        ●：ftp（21/tcp）：文件传输协议，用于在网络上传输文件。
        ●：ssh（22/tcp）：安全Shell协议，用于在网络上安全登录和执行命令。
        ●：smtp（25/tcp）：简单邮件传输协议，用于在邮件服务器之间传输电子邮件。
        ●：pop3（110/tcp）：邮局协议版本3，用于从邮件服务器接收电子邮件。
        ●：imap（143/tcp）：Internet 消息访问协议，也是从邮件服务器接收电子邮件的协议。
        ●：snmp（161/tcp、161/udp）：简单网络管理协议，用于网络设备的监控和管理。
&#39;5：开启特定IP访问&#39;
    &gt;&gt; ufw allow from 192.168.0.144
    &gt;&gt; ufw allow from 192.168.0.125
    &gt;&gt; ufw allow from 192.168.0.0/24    （这种是设置的IP段）
    说明：允许特定的IP地址来通过防火墙任意端口而不被限制

&#39;关于IP段说明：&#39;
    我们常见的IP段有：192.168.0.0/24、192.168.0.0/16、192.168.0.0/8一共三组。
    IP地址格式采用“斜线记法”，即：IP地址/网络前缀。
    如192.168.1.0/24表示32位的二进制地址中（IP的二进制地址都是32位），前24位为网络前缀不变，后8位代表主机号。
    换算192.168.1.0/24对应的二进制为：
        1100 0000 ， 1010 1000 ， 0000 0000 ， 0000 0000
    其中最后面的8位是主机号，取最小地址192.168.0.0，当这8位全为1时，取最大地址192.168.0.255。
    但请注意的是主机号全为0或者全为1的地址一般不使用，作为预留地址另有作用。
    全为0的IP为：192.168.1.0（网络地址）、全为1的IP为：192.168.0.255（广播地址）
    其实最终的IP段 192.168.0.0/24 可用范围为：192.168.0.1 ~ 192.168.0.254
    其实最终的IP段 192.168.0.0/16 可用范围为：192.168.0.1 ~ 192.168.255.254
    其实最终的IP段 192.168.0.0/8 可用范围为：192.0.0.1 ~ 192.255.255.254
    那么：111.152.23.0/24 的公网可用的IP段为：111.152.23.1 ~ 111.152.23.254

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>禁用端口<em>d<strong>e</strong>n**y</em>和<em>re<strong>j</strong>ec**t</em>区别:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>ufw deny ARGS：   添加拒绝连接的规则。
ufw reject ARGS： 添加拒绝连接的规则并响应。

&#39;禁用端口其实有两种方式分别为（假设禁用80端口）：&#39;
    ufw deny 80 、 ufw reject 80
&#39;那它们具体有啥区别呢？&#39;
    通过deny设置的端口禁用，请求被阻止后，并不向请求者返回任何消息回应。
        若在浏览器访问被禁用的地址端口后，服务器不返回信息；但是浏览器不知道，会进行重试请求，最终等到网络超时
    通过reject设置的端口禁用，请求被阻止后，会向请求者返回一条消息，说明请求被阻止了。
        通常返回的是“Connection refused”连接被拒绝
具体哪种方式就看自己了，但是推荐使用reject方式，请求方连不上你好得告诉人家一声。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>端口策略的删除操作:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>ufw delete RULE|NUM：    删除之前添加的端口策略。

&#39;端口删除策略分为两种，分别如下：&#39;
    &#39;通过规则删除（添加规则怎么添加，删除就得怎么删除）：&#39;
        比如创建：ufw allow 8080  ；比如删除：ufw delete allow 8080
        比如创建：ufw deny 8888  ；比如删除：ufw delete deny 8888
        比如创建：ufw allow 6379/tcp  ； 比如删除：ufw delete allow 6379/tcp
        比如创建：ufw allow from 192.168.0.144 ；比如删除：ufw delete allow from 192.168.0.144
        按照这个规律就可以删除了。
    &#39;通过序号删除（序号可以通过 ufw status numbered 查看）如下：&#39;
        &gt;&gt; ufw status numbered
                [ 1] 8080          REJECT IN   Anywhere
                [ 2] 80            REJECT IN   Anywhere
                [ 3] 22/tcp        ALLOW IN    Anywhere
                [ 4] 8080 (v6)     REJECT IN   Anywhere (v6)
                [ 5] 80 (v6)       REJECT IN   Anywhere (v6)
                [ 6] 22/tcp (v6)   ALLOW IN    Anywhere (v6)
        &gt;&gt; ufw delete 2
            将要删除：
            reject 80
            要继续吗 (y|n)？ y
            规则已删除
        &gt;&gt; ufw delete 4     &#39;(删除前面一个端口，后面的序号会重新排序)&#39;
            将要删除：
            reject 80
            要继续吗 (y|n)？ y
            规则已删除 (v6)
        说明：删除序号2、4的80端口（IPv4和IPv6）

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>端口策略的其它操作:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>ufw insert NUM RULE：        在特定位置插入规则。
ufw prepend RULE：           将规则添加到规则列表的顶部。
ufw limit ARGS：             限制连接数量。
ufw show ARG：               显示防火墙报告。

&#39;Ⅰ：将新规则添加到指定位置，优先级高于现有规则：&#39;
    &gt;&gt; ufw insert 1 allow 3387
    &gt;&gt; ufw insert 2 allow 6666
    说明：在规则表中的第一和第二位置添加3387和6666
    添加情况：
        root@javascript-EQ:~# ufw status numbered
            ...
        [ 1] 3387           ALLOW IN    Anywhere
        [ 2] 6666           ALLOW IN    Anywhere
        [ 3] 22/tcp         ALLOW IN    Anywhere
        [ 4] 3387 (v6)      ALLOW IN    Anywhere (v6)
        [ 5] 6666 (v6)      ALLOW IN    Anywhere (v6)
        [ 6] 22/tcp (v6)    ALLOW IN    Anywhere (v6)

&#39;Ⅱ：确保新规则在所有其它规则之前。这通常用于确保规则的重要性：&#39;
    &gt;&gt; ufw prepend allow 4448
    说明：将4443端口添加到规则表中的最顶端，即使后面添加不带prepend的其它规则，也不会影响它置顶的位置。

&#39;Ⅲ：限制同一IP的短时间内频繁地连接尝试：&#39;
    &gt;&gt; ufw limit 22/tcp
        说明：若某个IP在短时间内频繁地（30秒内只能进行6次连接尝试）尝试连接SSH端口，它将会被暂时禁用连接。
    &gt;&gt; ufw limit 80/tcp
        说明：防止来自同一IP地址的过多HTTP请求，从而减轻DDoS攻击或其他类型的网络攻击。
    &gt;&gt; ufw limit 8080
        说明：限制特定端口的TCP、UDP连接速率。
    其它：
        &gt;&gt; ufw limit 80/tcp  # 限制HTTP流量
        &gt;&gt; ufw limit 443/tcp # 限制HTTPS流量
        &gt;&gt; ufw limit 21/tcp  # 限制FTP流量

&#39;Ⅳ：显示防火墙报告：&#39;
    &gt;&gt; ufw show listening：
        显示当前正在监听连接的应用程序和端口号。  
    &gt;&gt; ufw show added：
        用于显示自上次激活或重新加载以来已添加到ufw防火墙中的规则列表  
    &gt;&gt; ufw show raw：
        显示原始的、未经处理的防火墙规则，这些规则可以直接用于 UFW 的配置文件或其他脚本中。 
    &gt;&gt; ufw show user-rules：
        显示用户自定义的 UFW 规则，这些规则通常在 /etc/ufw/user.rules 文件中定义。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="三-ufw日志等级设置" tabindex="-1"><a class="header-anchor" href="#三-ufw日志等级设置"><span>（三）：ufw日志等级设置</span></a></h3><p>我们可以通过ufw日志信息来获取到防火墙的端口通过或者阻止信息，也可以方便后期的故障排查、安全策略优化和用户请求行为的分析。下面就详细说明一下使用。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&#39;通过logging LEVEL来设置日志记录级别：&#39;
    sudo ufw logging on      # 启用日志
    sudo ufw logging off     # 禁用日志
    sudo ufw logging low     # 低级别日志；默认就是这个模式
    sudo ufw logging medium  # 中级别日志；不推荐设置此模式
    sudo ufw logging high    # 高级别日志；不推荐设置此模式

&#39;日志级别的含义和用途：&#39;
    low（低级别）：
        含义：记录较少的信息，通常仅记录重要的防火墙事件和与防火墙规则相关的关键信息。
        用途：适合在需要基本的操作记录但不想被大量日志信息淹没的情况下使用。
        比如：记录拒绝连接的事件或关键的防火墙规则变更。
    medium（中级别）：
        含义：记录比低级别更多的信息，包括详细的连接信息和部分数据包（甚至无效包）信息。
        用途：适合在需要更详细的连接和数据包信息以便调试或安全审计时使用。
        比如：记录所有的连接尝试和数据包信息，但不会记录太过冗长的内容。
    high（高级别）：
        含义：记录最详细的信息，包括所有的连接细节、数据包内容等。
        用途：适合在进行深度调试、安全审计或对网络活动进行详尽记录时使用。
        高级别日志可能会产生大量的日志数据，对系统性能有一定影响，因此通常不适合在常规情况下长期启用。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加<em>u<strong>f</strong>w</em>日志记录规则（其实是有两种日志相关的</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&#39;全局 logging on 设置（上面刚说的）：&#39;
    这会使ufw开始记录所有由ufw规则阻止或允许的数据包到系统的日志文件中。
    这个设置确保了基本的日志记录功能被启用，无需进一步配置即可记录所有操作。
    示例：
        如开启日志设置等级：ufw logging high
        说明：所有的防火墙端口都是high记录模式
&#39;部分 allow log 设置&#39;
    这个选项的作用是在添加特定规则时，显式地声明希望对该规则允许的连接进行额外的日志记录。
    即使ufw全局日志记录功能已开启，但log选项可以对特定规则的数据包进行详细记录，而不是仅记录通过或阻止的信息。
    示例：
        如开启80端口且开启详细日志：ufw allow log 80
        说明：除80端口为详细记录外，其它端口就是默认的全局日志等级，如上图的全局日志等级为on(low)

&#39;为什么要单独设置log选项？&#39;
    &#39;精细化日志记录&#39;: 有时候你可能只对特定规则的连接进行详细记录，而不是所有通过防火墙的连接。
        例如，对于某些重要服务或者安全审核需要，可能需要更详细的连接信息。
    &#39;效率和资源管理&#39;: 记录所有通过防火墙的连接可能会产生大量的日志数据，特别是在高流量环境中。
        选择性地记录某些规则可以帮助减少日志数据量，同时保留关键的信息。

&#39;总结（一些选项需要看到日志分析才明白）：&#39;
    若设置 ‘部分allow log’  则会在日志文件中输出更细的记录行，如注意：[UFW ALLOW]只会在、[UFW BLOCK]...
    若设置 ‘全局logging on’ 则会在日志文件中输出拒绝信息（具体看设置级别），如[UFW BLOCK]...
    注意：[UFW ALLOW]只会在‘部分allow log’模式下打印。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解读<em>u<strong>f</strong>w</em>防火墙日志文件信息：<br> 　　一旦开启了ufw日志模式以后，就会在当前系统生成一个<strong>日志文件：/var/log/ufw.log</strong>；我们通过分析这个文件信息来了解防火墙的拦截情况和放行情况。如下我随机从这个日志中获取一条记录说明：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>1：时间戳信息（表示事件发生的精确时间）：
    2024-08-05T22:43:27.324999+08:00
2：主机名和内核版本（这通常是由于系统的配置或自定义主机名而出现的）：
    javascript-EQ kernel:
3：日志级别（指出这是一条由 ufw 阻止的日志条目）：
    [UFW BLOCK]
    除了当前选项，其实还有好多输出方式，代表不同的拦截方式：
        [UFW BLOCK]：表示ufw拒绝了一个连接或数据包通过防火墙。
        [UFW ALLOW]：表示ufw允许了一个连接或数据包通过防火墙。
        [UFW LIMIT]：指示ufw规则中的限制（limit）已经生效，通常用于限制特定流量的速率或频率。
        [UFW LOG]：表示ufw已经配置为记录（log）特定的连接或数据包，但并未阻止或允许它们通过防火墙。
        [UFW AUDIT]：表示ufw记录了一个特定事件或操作，这通常用于跟踪和审核防火墙规则的变更和使用情况。
        [UFW REJECT]：用于指示ufw拒绝了一个连接或数据包，但可能与拒绝操作的具体条件或设置相关联。
        [UFW DROP]：用于表示ufw将连接或数据包静默丢弃（drop），通常不向发送方发送任何响应。
        [UFW DENY]：可能用于指示ufw拒绝了一个连接请求或数据包的传入或传出。
        [UFW ALLOW OUT]：表示ufw允许了一个传出的连接或数据包通过防火墙。
        [UFW ALLOW IN]：用于指示ufw允许了一个传入的连接或数据包通过防火墙。
            ...
4：数据包信息：
    IN=wlo1：数据包进入的网络接口是wlo1。
    OUT=：出口接口为空，表示该数据包没有离开网络设备（因为这条记录是[UFW BLOCK]被阻止了）。
    MAC=98:59:7a:13:ee:21:10:6f:d9:73:99:ad:08:00：源和目的MAC地址。
5：IP地址信息：
    SRC=192.168.0.144：报文源IP地址（请求方地址）。
    DST=192.168.0.155：目的IP地址（当前这台服务器的IP地址）。
6：数据包头信息：
    LEN=52：显示当前数据包的长度（这里是52个字节）。
    TOS=0x00：服务类型字段。
    PREC=0x00：优先类型字段。
    TTL=128：显示包的TTL（生存时间）。它会显示如果未指定目的地，数据包将反弹多久直到过期。。
    ID=6329：将为您提供IP数据报的唯一ID，并将由相同数据包的片段共享。
    DF：不分段标志。
    PROTO=TCP：显示数据包传输所使用的协议（这里传输层协议为TCP）。
    SPT=3428：获取请求方数据包的源端口（这里是从对方3428号端口发出的信息）。
    DPT=8080：表示数据包的目的端口（这里说明请求方请求当前服务器的8080端口）。
    WINDOW=64240：TCP窗口大小。
    RES=0x00：保留字段。
    SYN：TCP 表示请求建立新连接（这里建立的是TCP连接）。
    URGP=0：表示连接尚未建立。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-安装ufw防护墙" tabindex="-1"><a class="header-anchor" href="#_1-安装ufw防护墙"><span>1 安装ufw防护墙</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>sudo apt install ufw 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-配置防火墙" tabindex="-1"><a class="header-anchor" href="#_2-配置防火墙"><span>2 配置防火墙</span></a></h2><h3 id="_2-1-查看当前配置" tabindex="-1"><a class="header-anchor" href="#_2-1-查看当前配置"><span>2.1 查看当前配置</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>sudo ufw status verbose 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-2-打开默认设置" tabindex="-1"><a class="header-anchor" href="#_2-2-打开默认设置"><span>2.2 打开默认设置</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>sudo ufw default allow outgoing sudo ufw default deny incoming 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-3-打开局域网访问" tabindex="-1"><a class="header-anchor" href="#_2-3-打开局域网访问"><span>2.3 打开局域网访问</span></a></h3><p>允许局域网址为<code>192.168.1.X</code>的设备访问</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>sudo ufw allow from 192.168.1.0/24 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-4-允许外网80和443端口" tabindex="-1"><a class="header-anchor" href="#_2-4-允许外网80和443端口"><span>2.4 允许外网80和443端口</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>sudo ufw allow 80          #允许外网访问80端口 sudo ufw allow 443         #允许外网访问80端口 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-5-启动防火墙" tabindex="-1"><a class="header-anchor" href="#_2-5-启动防火墙"><span>2.5 启动防火墙</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>sudo ufw enable 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p></p><h2 id="_3-ufw防火墙常用命令" tabindex="-1"><a class="header-anchor" href="#_3-ufw防火墙常用命令"><span>3 ufw防火墙常用命令</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>sudo ufw version         #查看版本信息 sudo ufw logging on      #启用日志 sudo ufw logging off     #禁用日志 sudo ufw enable          #启用防火墙 sudo ufw disable         #禁用防火墙 sudo ufw reload          #重载防火墙 sudo ufw reset           #重新设置防火墙 (注意：这将禁用UFW并删除之前定义的任何规则) sudo ufw status          #查看防火墙状态 sudo ufw status verbose     #查看防火墙策略 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p></p><h2 id="_4-其他配置" tabindex="-1"><a class="header-anchor" href="#_4-其他配置"><span>4 其他配置</span></a></h2><h3 id="_4-1-放行与拒绝" tabindex="-1"><a class="header-anchor" href="#_4-1-放行与拒绝"><span>4.1 放行与拒绝</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>sudo ufw allow 80     #放行80端口 sudo ufw deny 80      #拒绝80端口 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-2-删除端口规则" tabindex="-1"><a class="header-anchor" href="#_4-2-删除端口规则"><span>4.2 删除端口规则</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>sudo ufw delete allow 80   #删除放行80端口 sudo ufw delete deny 80    #删除拒绝80端口 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-3-带编号展示规则" tabindex="-1"><a class="header-anchor" href="#_4-3-带编号展示规则"><span>4.3 带编号展示规则</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>sudo ufw status numbered 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-4-删除编号为1的规则" tabindex="-1"><a class="header-anchor" href="#_4-4-删除编号为1的规则"><span>4.4 删除编号为1的规则</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>sudo ufw delete 1 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-5-放行指定tcp规则" tabindex="-1"><a class="header-anchor" href="#_4-5-放行指定tcp规则"><span>4.5 放行指定tcp规则</span></a></h3><p>不指定规则，默认tcp与udp都放行</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>sudo ufw allow 80/tcp       #放行80端口tcp sudo ufw allow 443/tcp      #放行443端口tcp 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-6-放行指定的udp规则" tabindex="-1"><a class="header-anchor" href="#_4-6-放行指定的udp规则"><span>4.6 放行指定的udp规则</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>sudo ufw allow 6881/udp      #放行6881端口udp 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-7-放行应用默认端口" tabindex="-1"><a class="header-anchor" href="#_4-7-放行应用默认端口"><span>4.7 放行应用默认端口</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>sudo ufw allow ssh         #放行ssh的默认端口22 sudo ufw allow http        #放行http默认端口80 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-8-开放一定范围端口" tabindex="-1"><a class="header-anchor" href="#_4-8-开放一定范围端口"><span>4.8 开放一定范围端口</span></a></h3><p>如下开放9000到9002的端口规则，<strong>指定端口范围时，必须指定规则应适用的协议tcp或udp</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>sudo ufw allow 9000:9002/tcp sudo ufw allow 9000:9002/udp 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-9-允许ip访问" tabindex="-1"><a class="header-anchor" href="#_4-9-允许ip访问"><span>4.9 允许ip访问</span></a></h3><p>只允许或者拒绝某IP访问</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>sudo ufw allow from 192.168.1.2   #允许 sudo ufw deny from 192.168.1.2    #拒绝 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>允许或者拒绝指定IP范围的访问</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>sudo ufw allow from 192.168.1.0/24     #允许 sudo ufw deny from 192.168.1.0/24      #拒绝 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>指定IP地址允许或者拒绝特定的端口</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>sudo ufw allow from 192.168.1.2 to any port 80   #允许 sudo ufw deny from 192.168.1.2 to any port 80    #拒绝 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>指定IP地址允许或者拒绝特定的端口的规则</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>#允许 sudo ufw allow from 192.168.29.36 to any port 80 proto tcp sudo ufw allow from 192.168.29.36 to any port 80 proto udp #拒绝 sudo ufw deny from 192.168.29.36 to any port 80 proto tcp sudo ufw deny from 192.168.29.36 to any port 80 proto udp 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-10-允许从一个ip的53端口到另一个ip的53端口的udp协议" tabindex="-1"><a class="header-anchor" href="#_4-10-允许从一个ip的53端口到另一个ip的53端口的udp协议"><span>4.10 允许从一个IP的53端口到另一个IP的53端口的udp协议</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>sudo ufw allow proto udp 192.168.0.1 port 53 to 192.168.0.2 port 53
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,83)]))}const r=n(s,[["render",a],["__file","详解Linux防火墙（ufw命令）.html.vue"]]),c=JSON.parse('{"path":"/other/%E8%BD%AF%E8%B7%AF%E7%94%B1/OpenWrt/%E8%AF%A6%E8%A7%A3Linux%E9%98%B2%E7%81%AB%E5%A2%99%EF%BC%88ufw%E5%91%BD%E4%BB%A4%EF%BC%89.html","title":"详解Linux防火墙（ufw命令）","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"一：什么是ufw命令","slug":"一-什么是ufw命令","link":"#一-什么是ufw命令","children":[]},{"level":2,"title":"二：ufw基本使用","slug":"二-ufw基本使用","link":"#二-ufw基本使用","children":[{"level":3,"title":"（一）：检查ufw命令是否存在","slug":"一-检查ufw命令是否存在","link":"#一-检查ufw命令是否存在","children":[]},{"level":3,"title":"（二）：ufw快速使用","slug":"二-ufw快速使用","link":"#二-ufw快速使用","children":[]}]},{"level":2,"title":"三：ufw命令详细使用","slug":"三-ufw命令详细使用","link":"#三-ufw命令详细使用","children":[{"level":3,"title":"（一）：ufw状态通用操作","slug":"一-ufw状态通用操作","link":"#一-ufw状态通用操作","children":[]},{"level":3,"title":"（二）：ufw设置端口规则","slug":"二-ufw设置端口规则","link":"#二-ufw设置端口规则","children":[]},{"level":3,"title":"（三）：ufw日志等级设置","slug":"三-ufw日志等级设置","link":"#三-ufw日志等级设置","children":[]}]},{"level":2,"title":"1 安装ufw防护墙","slug":"_1-安装ufw防护墙","link":"#_1-安装ufw防护墙","children":[]},{"level":2,"title":"2 配置防火墙","slug":"_2-配置防火墙","link":"#_2-配置防火墙","children":[{"level":3,"title":"2.1 查看当前配置","slug":"_2-1-查看当前配置","link":"#_2-1-查看当前配置","children":[]},{"level":3,"title":"2.2 打开默认设置","slug":"_2-2-打开默认设置","link":"#_2-2-打开默认设置","children":[]},{"level":3,"title":"2.3 打开局域网访问","slug":"_2-3-打开局域网访问","link":"#_2-3-打开局域网访问","children":[]},{"level":3,"title":"2.4 允许外网80和443端口","slug":"_2-4-允许外网80和443端口","link":"#_2-4-允许外网80和443端口","children":[]},{"level":3,"title":"2.5 启动防火墙","slug":"_2-5-启动防火墙","link":"#_2-5-启动防火墙","children":[]}]},{"level":2,"title":"3 ufw防火墙常用命令","slug":"_3-ufw防火墙常用命令","link":"#_3-ufw防火墙常用命令","children":[]},{"level":2,"title":"4 其他配置","slug":"_4-其他配置","link":"#_4-其他配置","children":[{"level":3,"title":"4.1 放行与拒绝","slug":"_4-1-放行与拒绝","link":"#_4-1-放行与拒绝","children":[]},{"level":3,"title":"4.2 删除端口规则","slug":"_4-2-删除端口规则","link":"#_4-2-删除端口规则","children":[]},{"level":3,"title":"4.3 带编号展示规则","slug":"_4-3-带编号展示规则","link":"#_4-3-带编号展示规则","children":[]},{"level":3,"title":"4.4 删除编号为1的规则","slug":"_4-4-删除编号为1的规则","link":"#_4-4-删除编号为1的规则","children":[]},{"level":3,"title":"4.5 放行指定tcp规则","slug":"_4-5-放行指定tcp规则","link":"#_4-5-放行指定tcp规则","children":[]},{"level":3,"title":"4.6 放行指定的udp规则","slug":"_4-6-放行指定的udp规则","link":"#_4-6-放行指定的udp规则","children":[]},{"level":3,"title":"4.7 放行应用默认端口","slug":"_4-7-放行应用默认端口","link":"#_4-7-放行应用默认端口","children":[]},{"level":3,"title":"4.8 开放一定范围端口","slug":"_4-8-开放一定范围端口","link":"#_4-8-开放一定范围端口","children":[]},{"level":3,"title":"4.9 允许ip访问","slug":"_4-9-允许ip访问","link":"#_4-9-允许ip访问","children":[]},{"level":3,"title":"4.10 允许从一个IP的53端口到另一个IP的53端口的udp协议","slug":"_4-10-允许从一个ip的53端口到另一个ip的53端口的udp协议","link":"#_4-10-允许从一个ip的53端口到另一个ip的53端口的udp协议","children":[]}]}],"git":{"createdTime":1731129855000,"updatedTime":1731129855000,"contributors":[{"name":"dkyg666","email":"43946866+dkyg666@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":20.48,"words":6144},"filePathRelative":"other/软路由/OpenWrt/详解Linux防火墙（ufw命令）.md","localizedDate":"2024年11月9日","excerpt":"\\n<h2>一：什么是ufw命令</h2>\\n<blockquote>\\n<p><strong>ufw（Uncomplicated Firewall）</strong> 是一个在Linux上管理iptables防火墙的命令行工具。它提供了一种简单的方式来配置和管理防火墙规则，使得用户可以轻松地<code>限制网络流量</code>、<code>设置访问规则</code>和<code>保护服务器</code>。使用UFW可以帮助管理员更方便地管理网络安全，它的命令可以用来<strong>添加、删除、启用、禁用防火墙规则</strong>，检查防火墙状态等。<br>\\n　　早期ufw是在 Ubuntu 8.04 LTS（Hardy Heron） 版本中引入的，并且作为Ubuntu的默认防火墙配置工具而得到推广和采用。然而随着时间的推移，它被其它基于Debian的Linux发行版（如Debian本身以及其衍生版）采纳和支持。所以我们现在使用的Ubuntu、Debian、Linux Mint等等都可以看到ufw命令，甚至一些版本直接自带了ufw命令。<br>\\n<strong>说明：设置命令行中文语言（设置完重启即可）</strong></p>\\n</blockquote>"}');export{r as comp,c as data};
