import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,b as a,d as s,a as r,e as o,o as i,r as p}from"./app-BA4_Sfsq.js";const d={},c={id:"mysql",tabindex:"-1"},m={class:"header-anchor",href:"#mysql"},u={href:"https://hub.docker.com/_/mysql/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://en.wikipedia.org/wiki/MySQL",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/docker-library/docs/tree/master/mysql",target:"_blank",rel:"noopener noreferrer"};function b(v,e){const n=p("ExternalLinkIcon");return i(),l("div",null,[a("h1",c,[a("a",m,[a("span",null,[a("a",u,[e[0]||(e[0]=s("MySQL")),r(n)])])])]),e[6]||(e[6]=a("h2",{id:"基本信息",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#基本信息"},[a("span",null,"基本信息")])],-1)),a("p",null,[a("a",k,[e[1]||(e[1]=s("MySQL")),r(n)]),e[2]||(e[2]=s(" 是开源的关系数据库实现。"))]),e[7]||(e[7]=o(`<p>该仓库位于 <code>https://hub.docker.com/_/mysql/</code> ，提供了 MySQL 5.5 ~ 8.x 各个版本的镜像。</p><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2><p>默认会在 <code>3306</code> 端口启动数据库。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> run <span class="token parameter variable">--name</span> some-mysql <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>mysecretpassword <span class="token parameter variable">-d</span> mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>之后就可以使用其它应用来连接到该容器。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> run <span class="token parameter variable">--name</span> some-app <span class="token parameter variable">--link</span> some-mysql:mysql <span class="token parameter variable">-d</span> application-that-uses-mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者通过 <code>mysql</code> 命令行连接。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">--rm</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">--link</span> some-mysql:mysql <span class="token punctuation">\\</span>
    mysql <span class="token punctuation">\\</span>
    <span class="token function">sh</span> <span class="token parameter variable">-c</span> <span class="token string">&#39;exec mysql -h&quot;$MYSQL_PORT_3306_TCP_ADDR&quot; -P&quot;$MYSQL_PORT_3306_TCP_PORT&quot; -uroot -p&quot;$MYSQL_ENV_MYSQL_ROOT_PASSWORD&quot;&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dockerfile" tabindex="-1"><a class="header-anchor" href="#dockerfile"><span>Dockerfile</span></a></h2>`,9)),a("p",null,[e[4]||(e[4]=s("请到 ")),a("a",h,[e[3]||(e[3]=s("https://github.com/docker-library/docs/tree/master/mysql")),r(n)]),e[5]||(e[5]=s(" 查看"))])])}const f=t(d,[["render",b],["__file","mysql.html.vue"]]),_=JSON.parse('{"path":"/index/Docker/appendix/repo/mysql.html","title":"MySQL","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"基本信息","slug":"基本信息","link":"#基本信息","children":[]},{"level":2,"title":"使用方法","slug":"使用方法","link":"#使用方法","children":[]},{"level":2,"title":"Dockerfile","slug":"dockerfile","link":"#dockerfile","children":[]}],"git":{"createdTime":1731129855000,"updatedTime":1731129855000,"contributors":[{"name":"dkyg666","email":"43946866+dkyg666@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":0.47,"words":140},"filePathRelative":"index/Docker/appendix/repo/mysql.md","localizedDate":"2024年11月9日","excerpt":"\\n<h2>基本信息</h2>\\n<p><a href=\\"https://en.wikipedia.org/wiki/MySQL\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">MySQL</a> 是开源的关系数据库实现。</p>\\n<p>该仓库位于 <code>https://hub.docker.com/_/mysql/</code> ，提供了 MySQL 5.5 ~ 8.x 各个版本的镜像。</p>\\n<h2>使用方法</h2>\\n<p>默认会在 <code>3306</code> 端口启动数据库。</p>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code>$ <span class=\\"token function\\">docker</span> run <span class=\\"token parameter variable\\">--name</span> some-mysql <span class=\\"token parameter variable\\">-e</span> <span class=\\"token assign-left variable\\">MYSQL_ROOT_PASSWORD</span><span class=\\"token operator\\">=</span>mysecretpassword <span class=\\"token parameter variable\\">-d</span> mysql\\n</code></pre></div>"}');export{f as comp,_ as data};