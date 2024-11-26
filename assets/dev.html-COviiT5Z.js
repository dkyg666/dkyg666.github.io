import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,b as e,d as s,a,e as l,o as t,r}from"./app-7pmo0-8W.js";const u="/img/sso/dev/cmd.png",c={},v={href:"https://classic.yarnpkg.com/en/docs/install",target:"_blank",rel:"noopener noreferrer"},p={href:"https://github.com/casdoor/casdoor/issues/294",target:"_blank",rel:"noopener noreferrer"},m={href:"https://git-scm.com/download/win",target:"_blank",rel:"noopener noreferrer"},b={href:"https://casdoor.org/zh/docs/basic/server-installation#%E9%80%9A%E8%BF%87-ini-%E6%96%87%E4%BB%B6%E9%85%8D%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"},g={href:"https://casdoor.org/zh/docs/basic/server-installation#%E6%95%B0%E6%8D%AE%E5%BA%93",target:"_blank",rel:"noopener noreferrer"},h={href:"http://localhost:7001/",target:"_blank",rel:"noopener noreferrer"};function f(k,n){const i=r("ExternalLinkIcon");return t(),o("div",null,[n[18]||(n[18]=e("h2",{id:"开发须知",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#开发须知"},[e("span",null,[e("strong",null,"开发须知")])])],-1)),n[19]||(n[19]=e("p",null,[s("开发Cadoor需要使用 "),e("code",null,"Go > 1.17+"),s("，"),e("code",null,"Node.js ≥ 14&16"),s("，"),e("code",null,"Yarn 1.x"),s(" 版本")],-1)),e("p",null,[n[2]||(n[2]=s("官网推荐使用 ")),e("a",v,[n[0]||(n[0]=s("Yarn 1.x")),a(i)]),n[3]||(n[3]=s(" 运行 & Casdoor 前端，使用 NPM可能会导致UI 风格问题。 更多详细信息见： ")),e("a",p,[n[1]||(n[1]=s("Casdoor#294")),a(i)])]),e("p",null,[n[5]||(n[5]=s("然后我们将开源代码下载下来，或者使用 ")),e("a",m,[n[4]||(n[4]=s("Git Bash")),a(i)]),n[6]||(n[6]=s(" clone到本地"))]),n[20]||(n[20]=l(`<div class="language-git line-numbers-mode" data-ext="git" data-title="git"><pre class="language-git"><code>git clone https://github.com/casdoor/casdoor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后我们打开开发工具，我这里使用的开发工具是 <strong>VS Code <sup>(Visual_Studio_Code)</sup></strong> ，如果你使用 <strong>GoLand<sup>(JetBrains)</sup></strong> 也可以</p><hr><p>在正式开发前我们需要先配置一下<a href="#casdoor%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6">配置文件</a>才能启动，最主要是配置以下数据库不然无法存放数据无法启动</p><h2 id="casdoor配置文件" tabindex="-1"><a class="header-anchor" href="#casdoor配置文件"><span><strong>casdoor配置文件</strong></span></a></h2><div class="language-conf line-numbers-mode" data-ext="conf" data-title="conf"><pre class="language-conf"><code>appname = casdoor
httpport = 8000
runmode = dev
copyrequestbody = true
driverName = mysql
dataSourceName = root:123123@tcp(localhost:3306)/
dbName = casdoor
tableNamePrefix =
showSql = false
redisEndpoint =
defaultStorageProvider = 
isCloudIntranet = false
authState = &quot;casdoor&quot;
socks5Proxy = &quot;127.0.0.1:10808&quot;
verificationCodeTimeout = 10
initScore = 2000
logPostOnly = true
origin =
staticBaseUrl = &quot;https://cdn.casbin.org&quot;
isDemoMode = false
batchSize = 100
ldapServerPort = 389
quota = {&quot;organization&quot;: -1, &quot;user&quot;: -1, &quot;application&quot;: -1, &quot;provider&quot;: -1}
logConfig = {&quot;filename&quot;: &quot;logs/casdoor.log&quot;, &quot;maxdays&quot;:99999, &quot;perm&quot;:&quot;0770&quot;}
initDataFile = &quot;./init_data.json&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6)),e("p",null,[n[8]||(n[8]=s("配置文件所有参数的作用我这里细说了,下面我只说一下如何配置数据库和")),n[9]||(n[9]=e("code",null,"8000端口",-1)),n[10]||(n[10]=s("是做什么的吧")),e("a",b,[n[7]||(n[7]=s("详情查看Casdoor官网")),a(i)])]),n[21]||(n[21]=l(`<p>casdoor默认使用的是<strong>MySQL</strong>数据库，如果你也是使用<strong>MySQL</strong>可以按照以下格式填写,应该看得懂什么意思 实在不懂可以评论区问问</p><div class="language-conf line-numbers-mode" data-ext="conf" data-title="conf"><pre class="language-conf"><code>	......
driverName = mysql
dataSourceName = root:123123@tcp(localhost:3306)/
dbName = casdoor
	......
</code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你要使用<strong>Sqlite3</strong>，可以改成如下配置</p><div class="language-conf line-numbers-mode" data-ext="conf" data-title="conf"><pre class="language-conf"><code>	......
driverName = sqlite
dataSourceName = &quot;file:casdoor.db?cache=shared&quot;
dbName = casdoor
	......
</code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4)),e("p",null,[n[12]||(n[12]=s("还有更多的数据库用法，有需要的可以前往")),e("a",g,[n[11]||(n[11]=s("Casdoor官网")),a(i)]),n[13]||(n[13]=s("看看"))]),n[22]||(n[22]=l(`<br><div class="language-conf line-numbers-mode" data-ext="conf" data-title="conf"><pre class="language-conf"><code>appname = casdoor
httpport = 8000
runmode = dev
</code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>8000端口</code>是后端应用程序正在监听的端口，也是你要接入的时候需要填写的</p><p>例如我们接入<code>AList</code>在单点登录选项,<code>SSO端点名称</code>就是我们要写的 http(s)://192.168.31.1:8000，写进AList单点登录配置的选项里面</p><ul><li>注:如果8000端口号和你的冲突你可以随便改</li></ul><p>配置文件配置的差不多了我们直接去启动一下吧</p><h4 id="先启动后端" tabindex="-1"><a class="header-anchor" href="#先启动后端"><span><strong>先启动后端</strong></span></a></h4><p>默认是<code>8000</code>端口号的喔~不多说了</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>PS casdoor<span class="token operator">&gt;</span> go run .<span class="token punctuation">\\</span>main.go
Socks5 proxy enabled: <span class="token number">127.0</span>.0.1:10808
<span class="token number">2023</span>/05/22 xx:xx:xx Listening on <span class="token number">0.0</span>.0.0:389
<span class="token number">2023</span>/05/22 xx:xx:xx.382 <span class="token punctuation">[</span>I<span class="token punctuation">]</span>  http server Running on http://:8000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="再启动前端" tabindex="-1"><a class="header-anchor" href="#再启动前端"><span>再启动前端</span></a></h4><p>由于我们直接在<code>Casdoor</code>接入第三方应用属于开发模式了，否则直接接入会<code>404</code>错误，所以我们启动前端的时候要多一步</p><p>记得再打开一个命令窗口在输入命令哦</p><figure><img src="`+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#进入前端文件夹</span>
<span class="token builtin class-name">cd</span> web
<span class="token comment">#下载package.json 包所需要的依赖</span>
<span class="token function">yarn</span> <span class="token function">install</span>
<span class="token comment">#构建前端静态资源</span>
<span class="token function">yarn</span> build
<span class="token comment">#启动Casdoor</span>
<span class="token function">yarn</span> start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>yarn install</code>安装我们所需要的依赖的时候有点儿慢，文件太多 我第一次构建这个包等待了<mark>30多分钟</mark></p><p>所有的都下载完后有 <strong><code>130,752</code></strong> 个文件， <strong><code>13,201</code></strong> 个文件夹，文件大小 <strong>1GB</strong> ，所以构建的时间比较久</p>`,16)),e("p",null,[n[15]||(n[15]=s("输入")),n[16]||(n[16]=e("code",null,"yarn start",-1)),n[17]||(n[17]=s("启动后等待一会儿，就会自动打开一个浏览器 ")),e("a",h,[n[14]||(n[14]=s("http://localhost:7001/")),a(i)])]),n[23]||(n[23]=l(`<ul><li>开发模式我们在浏览器需要使用<code>7001</code>端口号才能访问（推荐使用生产模式来）</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Compiled successfully<span class="token operator">!</span>

You can now view web <span class="token keyword">in</span> the browser.

  Local:            http://localhost:7001
  On Your Network:  http://192.168.137.1:7001

Note that the development build is not optimized.
To create a production build, use <span class="token function">yarn</span> build.

webpack compiled successfully
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>到这里基本上结束了，可以去愉快的给<code>应用</code>接入登录了</p><br><p>那里不清楚大家可以留言 会回复的。</p>`,5))])}const y=d(c,[["render",f],["__file","dev.html.vue"]]),E=JSON.parse('{"path":"/index/Alist/build/sso/dev.html","title":"在线调试Cadoor","lang":"zh-CN","frontmatter":{"title":"在线调试Cadoor","icon":null,"order":122,"author":null,"date":"2023-01-01T00:00:00.000Z","category":["使用指南"],"tag":["自己编译","Dev","在线调试","Cadoor"],"sticky":true,"star":true,"headerDepth":6,"collapsible":false},"headers":[{"level":2,"title":"开发须知","slug":"开发须知","link":"#开发须知","children":[]},{"level":2,"title":"casdoor配置文件","slug":"casdoor配置文件","link":"#casdoor配置文件","children":[{"level":4,"title":"先启动后端","slug":"先启动后端","link":"#先启动后端","children":[]},{"level":4,"title":"再启动前端","slug":"再启动前端","link":"#再启动前端","children":[]}]}],"git":{"createdTime":1731129855000,"updatedTime":1731129855000,"contributors":[{"name":"dkyg666","email":"43946866+dkyg666@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.01,"words":604},"filePathRelative":"index/Alist/build/sso/dev.md","localizedDate":"2023年1月1日","excerpt":"<!-- 你可以通过设置页面的 Frontmatter，在页面禁用功能与布局。 -->\\n"}');export{y as comp,E as data};
