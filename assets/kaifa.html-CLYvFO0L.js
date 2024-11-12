import{_ as u}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c,e as o,b as s,d as n,a as i,w as l,r as d,o as g}from"./app-dX96qGh5.js";const b={},h={href:"https://github.com/alist-org/alist-web",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/alist-org/alist-web.git",target:"_blank",rel:"noopener noreferrer"};function v(k,e){const r=d("ExternalLinkIcon"),p=d("Tabs");return g(),c("div",null,[e[12]||(e[12]=o('<h2 id="前言-什么是在线调试开发" tabindex="-1"><a class="header-anchor" href="#前言-什么是在线调试开发"><span><strong>前言：什么是在线调试开发?</strong></span></a></h2><p>对我来说就是在线修改代码查看效果，不用每次修改一处位置然后编译再查看效果。</p><h2 id="如何在线调试开发" tabindex="-1"><a class="header-anchor" href="#如何在线调试开发"><span><strong>如何在线调试开发？</strong></span></a></h2><h3 id="_1-1-调试前准备" tabindex="-1"><a class="header-anchor" href="#_1-1-调试前准备"><span><strong>1.1 调试前准备</strong></span></a></h3>',4)),s("p",null,[e[1]||(e[1]=n("我们先下载一个编译好的AList，然后将AList前端代码(")),s("a",h,[e[0]||(e[0]=s("strong",null,"alist-web",-1)),i(r)]),e[2]||(e[2]=n(")下载到本地"))]),s("ul",null,[e[7]||(e[7]=s("li",null,"下载已经可以直接使用的AList，然后启动",-1)),s("li",null,[e[5]||(e[5]=n("下载AList前端代码：")),s("strong",null,[e[4]||(e[4]=n("git clone --recurse-submodules ")),s("a",m,[e[3]||(e[3]=n("https://github.com/alist-org/alist-web.git")),i(r)])]),e[6]||(e[6]=s("ul",null,[s("li",null,[n("仔细看有 "),s("strong",null,[s("code",null,"--recurse-submodules")]),n(" 参数，如果不加会缺少"),s("code",null,"solid-router"),n("运行的时候会报错")])],-1))])]),e[13]||(e[13]=o(`<br><h3 id="_1-2-加载包管理器所需要的安装项目依赖" tabindex="-1"><a class="header-anchor" href="#_1-2-加载包管理器所需要的安装项目依赖"><span><strong>1.2 加载包管理器所需要的安装项目依赖</strong></span></a></h3><p>我们这里在线调试使用的开发工具是 <strong>VS Code</strong> <sup>(Visual_Studio_Code)</sup> ，如果你使用 <strong>WebStorm</strong><sup>JetBrains</sup> 也可以</p><p>进入调试工具打开前端的代码，执行如下代码</p><div class="language-pnpm line-numbers-mode" data-ext="pnpm" data-title="pnpm"><pre class="language-pnpm"><code>pnpm install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后就会加载<code>package.json</code>这里面提到的我们需要的项目依赖，会在同级目录的<code>node_modules</code>暂时存储</p><p>(第一次加载可能会慢一些，如果你后续继续开发的话<code>node_modules</code>留着不要删除后续继续用)</p><h4 id="_1-2-1-后续继续开发调试" tabindex="-1"><a class="header-anchor" href="#_1-2-1-后续继续开发调试"><span><strong>1.2.1 后续继续开发调试</strong></span></a></h4><p>我们后续继续开发调试的时候，AList版本也会更新依赖也会更新，到时候我们继续使用<code>pnpm install</code>安装命令来更新就好</p><p>之要之前使用的<code>node_modules</code>文件夹没有删除后续更新基本几秒钟的时间</p><br><h3 id="_1-3-修改调试配置" tabindex="-1"><a class="header-anchor" href="#_1-3-修改调试配置"><span><strong>1.3 修改调试配置</strong></span></a></h3><ul><li><p>进入开发调试工具后我们先修改两个文件</p><ul><li><p>如果你需要在局域网其他电脑查看效果需要修改两个文件</p></li><li><p>如果你只是在本地这台电脑修改不需要要修改</p></li></ul></li><li><p>两个文件都需要修改，缺一不可</p></li></ul>`,13)),i(p,{id:"88",data:[{id:"文件1"},{id:"文件2"}]},{title0:l(({value:a,isActive:t})=>e[8]||(e[8]=[n("文件1")])),title1:l(({value:a,isActive:t})=>e[9]||(e[9]=[n("文件2")])),tab0:l(({value:a,isActive:t})=>e[10]||(e[10]=[s("p",null,[n("文件1：alist-web/"),s("code",null,"package.json")],-1),s("p",null,[n("我们这里在线调试用 "),s("code",null,"dev"),n(" 启动我们就修改"),s("code",null,"dev"),n("即可")],-1),s("h4",{id:"修改前",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#修改前"},[s("span",null,"修改前")])],-1),s("div",{class:"language-json line-numbers-mode","data-ext":"json","data-title":"json"},[s("pre",{class:"language-json"},[s("code",null,[n(`......
    `),s("span",{class:"token property"},'"start"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"vite"'),s("span",{class:"token punctuation"},","),n(`
    `),s("span",{class:"token property"},'"dev"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"vite"'),s("span",{class:"token punctuation"},","),n(`
    `),s("span",{class:"token property"},'"build"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"vite build"'),s("span",{class:"token punctuation"},","),n(`
......
`)])]),s("div",{class:"highlight-lines"},[s("br"),s("br"),s("div",{class:"highlight-line"}," "),s("br"),s("br")]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),s("div",{class:"language-log line-numbers-mode","data-ext":"log","data-title":"log"},[s("pre",{class:"language-log"},[s("code",null,[s("span",{class:"token operator"},">"),n(" alist"),s("span",{class:"token operator"},"-"),n("web"),s("span",{class:"token operator"},"@"),s("span",{class:"token number"},"0.0.0"),n(" dev alist"),s("span",{class:"token operator"},"-"),n(`web
`),s("span",{class:"token operator"},">"),n(` vite


  VITE `),s("span",{class:"token number"},"v3.0.8"),n("  ready in "),s("span",{class:"token number"},"952"),n(` ms

  ➜  Local`),s("span",{class:"token operator"},":"),n("   "),s("span",{class:"token url"},"http://localhost:5173/"),n(`
  ➜  Network`),s("span",{class:"token operator"},":"),n(" use "),s("span",{class:"token operator"},"-"),s("span",{class:"token operator"},"-"),n(`host to expose
`)])]),s("div",{class:"highlight-lines"},[s("br"),s("div",{class:"highlight-line"}," "),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{class:"highlight-line"}," ")]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),s("h4",{id:"修改后",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#修改后"},[s("span",null,"修改后")])],-1),s("div",{class:"language-json line-numbers-mode","data-ext":"json","data-title":"json"},[s("pre",{class:"language-json"},[s("code",null,[n(`......    
    `),s("span",{class:"token property"},'"start"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"vite"'),s("span",{class:"token punctuation"},","),n(`
    `),s("span",{class:"token property"},'"dev"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"vite --host 0.0.0.0"'),s("span",{class:"token punctuation"},","),n(`
    `),s("span",{class:"token property"},'"build"'),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"vite build"'),s("span",{class:"token punctuation"},","),n(`
......
`)])]),s("div",{class:"highlight-lines"},[s("br"),s("br"),s("div",{class:"highlight-line"}," "),s("br"),s("br")]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),s("div",{class:"language-log line-numbers-mode","data-ext":"log","data-title":"log"},[s("pre",{class:"language-log"},[s("code",null,[s("span",{class:"token operator"},">"),n(" alist"),s("span",{class:"token operator"},"-"),n("web"),s("span",{class:"token operator"},"@"),s("span",{class:"token number"},"0.0.0"),n(" dev alist"),s("span",{class:"token operator"},"-"),n(`web
`),s("span",{class:"token operator"},">"),n(" vite "),s("span",{class:"token operator"},"-"),s("span",{class:"token operator"},"-"),n("host "),s("span",{class:"token ip-address constant"},"0.0.0.0"),n(`


  VITE `),s("span",{class:"token number"},"v3.0.8"),n("  ready in "),s("span",{class:"token number"},"1994"),n(` ms

  ➜  Local`),s("span",{class:"token operator"},":"),n("   "),s("span",{class:"token url"},"http://localhost:5173/"),n(`
  ➜  Network`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token url"},"http://192.168.137.1:5173/"),n(`
  ➜  Network`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token url"},"http://192.168.140.1:5173/"),n(`
  ➜  Network`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token url"},"http://192.168.200.1:5173/"),n(`
  ➜  Network`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token url"},"http://192.168.31.14:5173/"),n(`
`)])]),s("div",{class:"highlight-lines"},[s("br"),s("div",{class:"highlight-line"}," "),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," ")]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),s("p",null,"这样修改的好处就是 启动 Vite 构建工具时并指示它在本地主机的所有 IP 地址上监听请求，方便我们在其他设备也能预览",-1),s("p",null,[n("像开始那样如果我们不添加参数,只能使用"),s("code",null,"http://localhost:5173/"),n("然后用本机访问，无法使用局域网内或者其他设备预览查看")],-1)])),tab1:l(({value:a,isActive:t})=>e[11]||(e[11]=[s("p",null,[n("文件2：alist-web/"),s("code",null,".env.development")],-1),s("h4",{id:"修改前-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#修改前-1"},[s("span",null,[s("strong",null,"修改前")])])],-1),s("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[n("VITE_API_URL "),s("span",{class:"token operator"},"="),n(),s("span",{class:"token string"},'"http://localhost:5244/"'),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),s("h4",{id:"修改后-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#修改后-1"},[s("span",null,[s("strong",null,"修改后")])])],-1),s("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[n("VITE_API_URL "),s("span",{class:"token operator"},"="),n(),s("span",{class:"token string"},'"http://192.168.31.14:5244/"'),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),s("p",null,"当然这里修改不限于只能启动本地的，你也可以填写远程服务器的只要能访问的到就可以，例如我写我远程服务区的地址",-1),s("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[n("VITE_API_URL "),s("span",{class:"token operator"},"="),n(),s("span",{class:"token string"},'"https://alist.xxxx.com/"'),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),s("p",null,[n("这里如果不修改，也只能在本机访问 因为默认的是"),s("code",null,"localhost"),n("，其他机器没办法访问到AList")],-1),s("p",null,[n("所以需要我们改一下地址，改成内网IP"),s("sup",null,"(第二种)"),n("或者远程服务器"),s("sup",null,"(第三种)")],-1)])),_:1}),e[14]||(e[14]=s("br",null,null,-1)),e[15]||(e[15]=s("h2",{id:"结语",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#结语"},[s("span",null,[s("strong",null,"结语")])])],-1)),e[16]||(e[16]=s("p",null,[n("呃呃呃 看起来我说的很啰嗦，很繁琐，主要是照顾一下 "),s("mark",null,[s("strong",null,"真·小白")]),n(" 让他们知道如何使用，大佬基本上也不需要看直接上手多多担待啦")],-1)),e[17]||(e[17]=s("p",null,[n("然后可以愉快并且奔放的去"),s("strong",null,"编译或者魔改"),n("啦 🤙🤙🤙🤙🤙")],-1))])}const A=u(b,[["render",v],["__file","kaifa.html.vue"]]),w=JSON.parse('{"path":"/index/Alist/build/kaifa.html","title":"在线调试开发AList前端","lang":"zh-CN","frontmatter":{"title":"在线调试开发AList前端","icon":null,"order":112,"author":null,"date":"2023-01-01T00:00:00.000Z","category":["使用指南"],"tag":["AList魔改教程","AList教程","Build","在线调试"],"sticky":true,"star":true,"headerDepth":6,"collapsible":false},"headers":[{"level":2,"title":"前言：什么是在线调试开发?","slug":"前言-什么是在线调试开发","link":"#前言-什么是在线调试开发","children":[]},{"level":2,"title":"如何在线调试开发？","slug":"如何在线调试开发","link":"#如何在线调试开发","children":[{"level":3,"title":"1.1 调试前准备","slug":"_1-1-调试前准备","link":"#_1-1-调试前准备","children":[]},{"level":3,"title":"1.2 加载包管理器所需要的安装项目依赖","slug":"_1-2-加载包管理器所需要的安装项目依赖","link":"#_1-2-加载包管理器所需要的安装项目依赖","children":[{"level":4,"title":"1.2.1 后续继续开发调试","slug":"_1-2-1-后续继续开发调试","link":"#_1-2-1-后续继续开发调试","children":[]}]},{"level":3,"title":"1.3 修改调试配置","slug":"_1-3-修改调试配置","link":"#_1-3-修改调试配置","children":[]}]},{"level":2,"title":"结语","slug":"结语","link":"#结语","children":[]}],"git":{"createdTime":1731129855000,"updatedTime":1731129855000,"contributors":[{"name":"dkyg666","email":"43946866+dkyg666@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":3.46,"words":1038},"filePathRelative":"index/Alist/build/kaifa.md","localizedDate":"2023年1月1日","excerpt":"<h2><strong>前言：什么是在线调试开发?</strong></h2>\\n<p>对我来说就是在线修改代码查看效果，不用每次修改一处位置然后编译再查看效果。</p>\\n<h2><strong>如何在线调试开发？</strong></h2>\\n<h3><strong>1.1 调试前准备</strong></h3>\\n<p>我们先下载一个编译好的AList，然后将AList前端代码(<a href=\\"https://github.com/alist-org/alist-web\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><strong>alist-web</strong></a>)下载到本地</p>"}');export{A as comp,w as data};