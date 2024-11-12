import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,b as s,d as a,a as i,w as d,e as t,r as e,o as u}from"./app-dX96qGh5.js";const c="/img/build/build13.png",g="/img/build/build14.png",m="/img/build/build15.png",b="/img/build/build16.png",v="/img/build/build17.png",k="/img/build/build18.png",h="/img/build/build19.png",f="/img/build/build20.png",x="/img/build/build21.png",w="/img/build/build22.png",_={},z={class:"hint-container tip"},y={href:"https://alist.nn.ci/zh/config/configuration.html#bleve-dir",target:"_blank",rel:"noopener noreferrer"},q={href:"https://github.com/codespaces/templates",target:"_blank",rel:"noopener noreferrer"},A={href:"https://github.com/alist-org/alist.git",target:"_blank",rel:"noopener noreferrer"},L={href:"https://github.com/alist-org/alist-web.git",target:"_blank",rel:"noopener noreferrer"};function $(N,n){const o=e("RouteLink"),l=e("ExternalLinkIcon");return u(),r("div",null,[n[20]||(n[20]=s("p",null,[a("有的小伙伴想着自己编译一下 Alist"),s("br"),a(" 不管是出于自己想折腾还是自己想改改源码哩.大家都可以编译~ (๑•́₃ •)")],-1)),n[21]||(n[21]=s("hr",null,null,-1)),n[22]||(n[22]=s("h2",{id:"linux版本编译教程",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#linux版本编译教程"},[s("span",null,"Linux版本编译教程")])],-1)),n[23]||(n[23]=s("h2",{id:"_1-编译前准备",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_1-编译前准备"},[s("span",null,"1. 编译前准备")])],-1)),s("div",z,[n[10]||(n[10]=s("p",{class:"hint-container-title"},"提示",-1)),s("p",null,[n[1]||(n[1]=s("code",null,"GitHub code space",-1)),n[2]||(n[2]=a("编译的似乎只有一个版本，如果你想要像AList官方那样编译很多可以使用 ")),i(o,{to:"/index/Alist/build/github.html"},{default:d(()=>n[0]||(n[0]=[a("GitHub Actions")])),_:1}),n[3]||(n[3]=a(" 来进行编译"))]),s("ul",null,[s("li",null,[n[6]||(n[6]=a("如果你只有修改前端的想法，")),n[7]||(n[7]=s("mark",null,[s("strong",null,"强烈推荐")],-1)),n[8]||(n[8]=a(" 单独只进行编译前端即可，后端(二进制)应用程序继续使用AList官方原版的文件 ")),s("ul",null,[s("li",null,[n[5]||(n[5]=a("因为现在支持引用第三方前端文件使用：参考 ")),s("a",y,[n[4]||(n[4]=a("https://alist.nn.ci/zh/config/configuration.html#bleve-dir")),i(l)])])])]),n[9]||(n[9]=s("li",null,"这样就不用担心设备不同不会交叉编译，以及编译过程中出现的问题无法解决",-1))])]),n[24]||(n[24]=t('<h3 id="_1-1-编译前说明" tabindex="-1"><a class="header-anchor" href="#_1-1-编译前说明"><span>1.1 编译前说明</span></a></h3><p>编译Linux版本教程我们使用 <code>GitHub code space</code> 来演示</p><p>原本我们需要安装 <strong><code>git nodejs pnpm gcc golang 1.20+</code></strong> 这些软件并且配置环境的，</p><p>但是呢code space帮我们已经配置好了，不用我们手动安装了 挺好的<sub>（对于想自己编译，但是不会安装环境的简直美滋滋</sub>~~~）</p><p>而且Go代理都不用换成国内的~我们直接进行克隆代码开始编译吧</p>',5)),s("p",null,[n[12]||(n[12]=a("打开")),s("a",q,[n[11]||(n[11]=s("strong",null,"Build software better, together",-1)),i(l)]),n[13]||(n[13]=a("创建一个空白模板即可"))]),n[25]||(n[25]=s("figure",null,[s("img",{src:c,alt:"",tabindex:"0",loading:"lazy"}),s("figcaption")],-1)),n[26]||(n[26]=s("h3",{id:"_1-2-首先先把前后端代码克隆下来",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_1-2-首先先把前后端代码克隆下来"},[s("span",null,"1.2 首先先把前后端代码克隆下来")])],-1)),s("ul",null,[s("li",null,[n[16]||(n[16]=a("后端：")),s("strong",null,[n[15]||(n[15]=a("git clone ")),s("a",A,[n[14]||(n[14]=a("https://github.com/alist-org/alist.git")),i(l)])])]),s("li",null,[n[19]||(n[19]=a("前端：")),s("strong",null,[n[18]||(n[18]=a("git clone --recurse-submodules ")),s("a",L,[n[17]||(n[17]=a("https://github.com/alist-org/alist-web.git")),i(l)])])])]),n[27]||(n[27]=t('<ol><li><strong>找不到输入的终端在哪里......</strong></li><li><img src="'+g+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></li></ol><h3 id="_1-3-然后安装-pnpm" tabindex="-1"><a class="header-anchor" href="#_1-3-然后安装-pnpm"><span>1.3 然后安装 pnpm</span></a></h3><p>使用npm安装pnpm 输入 <strong>npm install -g pnpm</strong> 执行安装</p><p>如果出现 <code>xxxxxx 317</code> 是内存不够导致的</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code>@anwen-anyi ➜ <span class="token operator">/</span>workspaces/codespaces-blank $ npm install <span class="token operator">-</span>g pnpm

added 1 package<span class="token punctuation">,</span> and audited 2 packages in 2s

1 package is looking <span class="token keyword">for</span> funding
  run \`npm fund\` <span class="token keyword">for</span> details

found 0 vulnerabilities
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-下载语言文件并且初始化" tabindex="-1"><a class="header-anchor" href="#_1-4-下载语言文件并且初始化"><span>1.4 下载语言文件并且初始化</span></a></h3><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code>cd alist-web 
wget https:<span class="token operator">/</span><span class="token operator">/</span>crowdin<span class="token punctuation">.</span>com/backend/download/project/alist/zh-CN<span class="token punctuation">.</span>zip 
unzip zh-CN<span class="token punctuation">.</span>zip 
node <span class="token punctuation">.</span><span class="token operator">/</span>scripts/i18n<span class="token punctuation">.</span>mjs
<span class="token function">rm</span> zh-CN<span class="token punctuation">.</span>zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码说明（应该都懂吧）：</p><ol><li>进入前端文件夹里面</li><li>下载中文语言包</li><li>解压</li><li>初始化一下语言包，不然无法使用</li><li>删除语言包压缩包</li></ol><h4 id="安装项目所有依赖-同时编译前端文件" tabindex="-1"><a class="header-anchor" href="#安装项目所有依赖-同时编译前端文件"><span>安装项目所有依赖，同时编译前端文件</span></a></h4><p><strong>中间修改代码的过程就不说了，大家就当我已经修改好了就行 嘿嘿~我们直接编译</strong></p><h2 id="_2-编译前端" tabindex="-1"><a class="header-anchor" href="#_2-编译前端"><span>2.编译前端</span></a></h2><p>输入 <code>pnpm install &amp;&amp; pnpm run build</code> 编译前端，</p><p>也可以分开运行，先执行 <code>pnpm install</code>再执行 <code>pnpm run build</code></p><p>我是一起执行了（看你自己呗~）</p><figure><img src="`+m+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_3-编译后端" tabindex="-1"><a class="header-anchor" href="#_3-编译后端"><span>3.编译后端</span></a></h2><h3 id="_3-1-编译后端前准备" tabindex="-1"><a class="header-anchor" href="#_3-1-编译后端前准备"><span>3.1 编译后端前准备</span></a></h3><p>先将编译好的前端文件，移动到后端目录里面，再进行编译</p><ol><li><strong>手动</strong>将前端里面的dist文件夹，移动到后端public文件夹</li><li>或者<strong>使用命令</strong>将前端里面的dist文件夹，移动到后端public文件夹</li></ol><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token function">cp</span> <span class="token operator">-</span>r <span class="token operator">/</span>workspaces/codespaces-blank/alist-web/dist <span class="token operator">/</span>workspaces/codespaces-blank/alist/public/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>以上方法自己二选一</p><h3 id="_3-2-开始编译" tabindex="-1"><a class="header-anchor" href="#_3-2-开始编译"><span>3.2 开始编译</span></a></h3><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code>appName=<span class="token string">&quot;alist&quot;</span>
builtAt=<span class="token string">&quot;<span class="token function">$<span class="token punctuation">(</span>date <span class="token operator">+</span><span class="token string">&#39;%F %T %z&#39;</span><span class="token punctuation">)</span></span>&quot;</span>
goVersion=$<span class="token punctuation">(</span>go version <span class="token punctuation">|</span> sed <span class="token string">&#39;s/go version //&#39;</span><span class="token punctuation">)</span>
gitAuthor=$<span class="token punctuation">(</span>git show <span class="token operator">-</span>s <span class="token operator">--</span>format=<span class="token string">&#39;format:%aN &lt;%ae&gt;&#39;</span> HEAD<span class="token punctuation">)</span>
gitCommit=$<span class="token punctuation">(</span>git log <span class="token operator">--</span>pretty=format:<span class="token string">&quot;%h&quot;</span> <span class="token operator">-</span>1<span class="token punctuation">)</span>
version=$<span class="token punctuation">(</span>git describe <span class="token operator">--</span>long <span class="token operator">--</span>tags <span class="token operator">--</span>dirty <span class="token operator">--</span>always<span class="token punctuation">)</span>
webVersion=$<span class="token punctuation">(</span>wget <span class="token operator">-</span>qO- <span class="token operator">-</span>t1 <span class="token operator">-</span>T2 <span class="token string">&quot;https://api.github.com/repos/alist-org/alist-web/releases/latest&quot;</span> <span class="token punctuation">|</span> grep <span class="token string">&quot;tag_name&quot;</span> <span class="token punctuation">|</span> head <span class="token operator">-</span>n 1 <span class="token punctuation">|</span> awk <span class="token operator">-</span>F <span class="token string">&quot;:&quot;</span> <span class="token string">&#39;{print $2}&#39;</span> <span class="token punctuation">|</span> sed <span class="token string">&#39;s/\\&quot;//g;s/,//g;s/ //g&#39;</span><span class="token punctuation">)</span>
ldflags=<span class="token string">&quot;\\
-w -s \\
-X &#39;github.com/alist-org/alist/v3/internal/conf.BuiltAt=<span class="token variable">$builtAt</span>&#39; \\
-X &#39;github.com/alist-org/alist/v3/internal/conf.GoVersion=<span class="token variable">$goVersion</span>&#39; \\
-X &#39;github.com/alist-org/alist/v3/internal/conf.GitAuthor=<span class="token variable">$gitAuthor</span>&#39; \\
-X &#39;github.com/alist-org/alist/v3/internal/conf.GitCommit=<span class="token variable">$gitCommit</span>&#39; \\
-X &#39;github.com/alist-org/alist/v3/internal/conf.Version=<span class="token variable">$version</span>&#39; \\
-X &#39;github.com/alist-org/alist/v3/internal/conf.WebVersion=<span class="token variable">$webVersion</span>&#39; \\
&quot;</span>
go build <span class="token operator">-</span>ldflags=<span class="token string">&quot;<span class="token variable">$ldflags</span>&quot;</span> <span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>把上面的代码复制粘贴进去</p><figure><img src="`+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>粘贴进去后，他会像下面这个图这样，</p><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>粘贴好了开始执行，稍等1-2分钟就会好，第一次可能会比较慢（1-2分钟），再编译就快了</p><figure><img src="'+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>编译好后我们左侧里面就会看到我们编译好的二进制 文件</p><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_3-3-编译结束" tabindex="-1"><a class="header-anchor" href="#_3-3-编译结束"><span>3.3 编译结束</span></a></h3><p>我们去看看能不能用吧</p><p>我们先手动把这个新编译好的 alist 二进制文件移动出去，不然在这里看着怪乱糟糟的到时候，而且我们后面还有用哩~</p><p>先授权<code>chmod +x alist</code></p><figure><img src="'+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>看到右下角的 按钮了吗，在浏览器中打开，不过这个属于私人的，会效验GitHub账号和你的这个是不是匹配的.</p><figure><img src="'+x+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>打开后看到了我们熟悉的界面，后面我就不展示了。没有问题</p><figure><img src="'+w+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Linux 二进制的编译就到这里结束啦~ 有兴趣的小伙伴可以去试试啦~</p><hr>',43))])}const G=p(_,[["render",$],["__file","linux.html.vue"]]),T=JSON.parse('{"path":"/index/Alist/build/linux.html","title":"Linux编译教程","lang":"zh-CN","frontmatter":{"title":"Linux编译教程","icon":null,"order":109,"author":null,"date":"2023-01-01T00:00:00.000Z","category":["使用指南"],"tag":["AList魔改教程","自己编译","编译AList教程","Build","Linux"],"sticky":true,"star":true,"headerDepth":6,"collapsible":false},"headers":[{"level":2,"title":"Linux版本编译教程","slug":"linux版本编译教程","link":"#linux版本编译教程","children":[]},{"level":2,"title":"1. 编译前准备","slug":"_1-编译前准备","link":"#_1-编译前准备","children":[{"level":3,"title":"1.1 编译前说明","slug":"_1-1-编译前说明","link":"#_1-1-编译前说明","children":[]},{"level":3,"title":"1.2 首先先把前后端代码克隆下来","slug":"_1-2-首先先把前后端代码克隆下来","link":"#_1-2-首先先把前后端代码克隆下来","children":[]},{"level":3,"title":"1.3 然后安装 pnpm","slug":"_1-3-然后安装-pnpm","link":"#_1-3-然后安装-pnpm","children":[]},{"level":3,"title":"1.4 下载语言文件并且初始化","slug":"_1-4-下载语言文件并且初始化","link":"#_1-4-下载语言文件并且初始化","children":[{"level":4,"title":"安装项目所有依赖，同时编译前端文件","slug":"安装项目所有依赖-同时编译前端文件","link":"#安装项目所有依赖-同时编译前端文件","children":[]}]}]},{"level":2,"title":"2.编译前端","slug":"_2-编译前端","link":"#_2-编译前端","children":[]},{"level":2,"title":"3.编译后端","slug":"_3-编译后端","link":"#_3-编译后端","children":[{"level":3,"title":"3.1 编译后端前准备","slug":"_3-1-编译后端前准备","link":"#_3-1-编译后端前准备","children":[]},{"level":3,"title":"3.2 开始编译","slug":"_3-2-开始编译","link":"#_3-2-开始编译","children":[]},{"level":3,"title":"3.3 编译结束","slug":"_3-3-编译结束","link":"#_3-3-编译结束","children":[]}]}],"git":{"createdTime":1731129855000,"updatedTime":1731129855000,"contributors":[{"name":"dkyg666","email":"43946866+dkyg666@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":4.22,"words":1265},"filePathRelative":"index/Alist/build/linux.md","localizedDate":"2023年1月1日","excerpt":"<!-- 你可以通过设置页面的 Frontmatter，在页面禁用功能与布局。 -->\\n"}');export{G as comp,T as data};
