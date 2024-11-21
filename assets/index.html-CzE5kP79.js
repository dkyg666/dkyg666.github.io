import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,e,o as i}from"./app-BA4_Sfsq.js";const l={};function d(c,n){return i(),a("div",null,n[0]||(n[0]=[e(`<h1 id="多阶段构建" tabindex="-1"><a class="header-anchor" href="#多阶段构建"><span>多阶段构建</span></a></h1><h2 id="之前的做法" tabindex="-1"><a class="header-anchor" href="#之前的做法"><span>之前的做法</span></a></h2><p>在 Docker 17.05 版本之前，我们构建 Docker 镜像时，通常会采用两种方式：</p><h3 id="全部放入一个-dockerfile" tabindex="-1"><a class="header-anchor" href="#全部放入一个-dockerfile"><span>全部放入一个 Dockerfile</span></a></h3><p>一种方式是将所有的构建过程编包含在一个 <code>Dockerfile</code> 中，包括项目及其依赖库的编译、测试、打包等流程，这里可能会带来的一些问题：</p><ul><li><p>镜像层次多，镜像体积较大，部署时间变长</p></li><li><p>源代码存在泄露的风险</p></li></ul><p>例如，编写 <code>app.go</code> 文件，该程序输出 <code>Hello World!</code></p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编写 <code>Dockerfile.one</code> 文件</p><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> golang:alpine</span>

<span class="token instruction"><span class="token keyword">RUN</span> apk --no-cache add git ca-certificates</span>

<span class="token instruction"><span class="token keyword">WORKDIR</span> /go/src/github.com/go/helloworld/</span>

<span class="token instruction"><span class="token keyword">COPY</span> app.go .</span>

<span class="token instruction"><span class="token keyword">RUN</span> go get -d -v github.com/go-sql-driver/mysql <span class="token operator">\\</span>
  &amp;&amp; CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o app . <span class="token operator">\\</span>
  &amp;&amp; cp /go/src/github.com/go/helloworld/app /root</span>

<span class="token instruction"><span class="token keyword">WORKDIR</span> /root/</span>

<span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">&quot;./app&quot;</span>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>构建镜像</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> build <span class="token parameter variable">-t</span> go/helloworld:1 <span class="token parameter variable">-f</span> Dockerfile.one <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="分散到多个-dockerfile" tabindex="-1"><a class="header-anchor" href="#分散到多个-dockerfile"><span>分散到多个 Dockerfile</span></a></h3><p>另一种方式，就是我们事先在一个 <code>Dockerfile</code> 将项目及其依赖库编译测试打包好后，再将其拷贝到运行环境中，这种方式需要我们编写两个 <code>Dockerfile</code> 和一些编译脚本才能将其两个阶段自动整合起来，这种方式虽然可以很好地规避第一种方式存在的风险，但明显部署过程较复杂。</p><p>例如，编写 <code>Dockerfile.build</code> 文件</p><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> golang:alpine</span>

<span class="token instruction"><span class="token keyword">RUN</span> apk --no-cache add git</span>

<span class="token instruction"><span class="token keyword">WORKDIR</span> /go/src/github.com/go/helloworld</span>

<span class="token instruction"><span class="token keyword">COPY</span> app.go .</span>

<span class="token instruction"><span class="token keyword">RUN</span> go get -d -v github.com/go-sql-driver/mysql <span class="token operator">\\</span>
  &amp;&amp; CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o app .</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编写 <code>Dockerfile.copy</code> 文件</p><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> alpine:latest</span>

<span class="token instruction"><span class="token keyword">RUN</span> apk --no-cache add ca-certificates</span>

<span class="token instruction"><span class="token keyword">WORKDIR</span> /root/</span>

<span class="token instruction"><span class="token keyword">COPY</span> app .</span>

<span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">&quot;./app&quot;</span>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新建 <code>build.sh</code></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/sh</span>
<span class="token builtin class-name">echo</span> Building go/helloworld:build

<span class="token function">docker</span> build <span class="token parameter variable">-t</span> go/helloworld:build <span class="token builtin class-name">.</span> <span class="token parameter variable">-f</span> Dockerfile.build

<span class="token function">docker</span> create <span class="token parameter variable">--name</span> extract go/helloworld:build
<span class="token function">docker</span> <span class="token function">cp</span> extract:/go/src/github.com/go/helloworld/app ./app
<span class="token function">docker</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> extract

<span class="token builtin class-name">echo</span> Building go/helloworld:2

<span class="token function">docker</span> build --no-cache <span class="token parameter variable">-t</span> go/helloworld:2 <span class="token builtin class-name">.</span> <span class="token parameter variable">-f</span> Dockerfile.copy
<span class="token function">rm</span> ./app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在运行脚本即可构建镜像</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">chmod</span> +x build.sh

$ ./build.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对比两种方式生成的镜像大小</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> image <span class="token function">ls</span>

REPOSITORY      TAG    IMAGE ID        CREATED         SIZE
go/helloworld   <span class="token number">2</span>      f7cf3465432c    <span class="token number">22</span> seconds ago  <span class="token number">6</span>.47MB
go/helloworld   <span class="token number">1</span>      f55d3e16affc    <span class="token number">2</span> minutes ago   295MB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用多阶段构建" tabindex="-1"><a class="header-anchor" href="#使用多阶段构建"><span>使用多阶段构建</span></a></h2><p>为解决以上问题，Docker v17.05 开始支持多阶段构建 (<code>multistage builds</code>)。使用多阶段构建我们就可以很容易解决前面提到的问题，并且只需要编写一个 <code>Dockerfile</code>：</p><p>例如，编写 <code>Dockerfile</code> 文件</p><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> golang:alpine <span class="token keyword">as</span> builder</span>

<span class="token instruction"><span class="token keyword">RUN</span> apk --no-cache add git</span>

<span class="token instruction"><span class="token keyword">WORKDIR</span> /go/src/github.com/go/helloworld/</span>

<span class="token instruction"><span class="token keyword">RUN</span> go get -d -v github.com/go-sql-driver/mysql</span>

<span class="token instruction"><span class="token keyword">COPY</span> app.go .</span>

<span class="token instruction"><span class="token keyword">RUN</span> CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o app .</span>

<span class="token instruction"><span class="token keyword">FROM</span> alpine:latest <span class="token keyword">as</span> prod</span>

<span class="token instruction"><span class="token keyword">RUN</span> apk --no-cache add ca-certificates</span>

<span class="token instruction"><span class="token keyword">WORKDIR</span> /root/</span>

<span class="token instruction"><span class="token keyword">COPY</span> <span class="token options"><span class="token property">--from</span><span class="token punctuation">=</span><span class="token string">0</span></span> /go/src/github.com/go/helloworld/app .</span>

<span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">&quot;./app&quot;</span>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>构建镜像</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> build <span class="token parameter variable">-t</span> go/helloworld:3 <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>对比三个镜像大小</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> image <span class="token function">ls</span>

REPOSITORY        TAG   IMAGE ID         CREATED            SIZE
go/helloworld     <span class="token number">3</span>     d6911ed9c846     <span class="token number">7</span> seconds ago      <span class="token number">6</span>.47MB
go/helloworld     <span class="token number">2</span>     f7cf3465432c     <span class="token number">22</span> seconds ago     <span class="token number">6</span>.47MB
go/helloworld     <span class="token number">1</span>     f55d3e16affc     <span class="token number">2</span> minutes ago      295MB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>很明显使用多阶段构建的镜像体积小，同时也完美解决了上边提到的问题。</p><h3 id="只构建某一阶段的镜像" tabindex="-1"><a class="header-anchor" href="#只构建某一阶段的镜像"><span>只构建某一阶段的镜像</span></a></h3><p>我们可以使用 <code>as</code> 来为某一阶段命名，例如</p><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> golang:alpine <span class="token keyword">as</span> builder</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如当我们只想构建 <code>builder</code> 阶段的镜像时，增加 <code>--target=builder</code> 参数即可</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> build <span class="token parameter variable">--target</span> builder <span class="token parameter variable">-t</span> username/imagename:tag <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="构建时从其他镜像复制文件" tabindex="-1"><a class="header-anchor" href="#构建时从其他镜像复制文件"><span>构建时从其他镜像复制文件</span></a></h3><p>上面例子中我们使用 <code>COPY --from=0 /go/src/github.com/go/helloworld/app .</code> 从上一阶段的镜像中复制文件，我们也可以复制任意镜像中的文件。</p><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code>$ COPY --from=nginx:latest /etc/nginx/nginx.conf /nginx.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,41)]))}const t=s(l,[["render",d],["__file","index.html.vue"]]),p=JSON.parse('{"path":"/index/Docker/image/multistage-builds/","title":"多阶段构建","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"之前的做法","slug":"之前的做法","link":"#之前的做法","children":[{"level":3,"title":"全部放入一个 Dockerfile","slug":"全部放入一个-dockerfile","link":"#全部放入一个-dockerfile","children":[]},{"level":3,"title":"分散到多个 Dockerfile","slug":"分散到多个-dockerfile","link":"#分散到多个-dockerfile","children":[]}]},{"level":2,"title":"使用多阶段构建","slug":"使用多阶段构建","link":"#使用多阶段构建","children":[{"level":3,"title":"只构建某一阶段的镜像","slug":"只构建某一阶段的镜像","link":"#只构建某一阶段的镜像","children":[]},{"level":3,"title":"构建时从其他镜像复制文件","slug":"构建时从其他镜像复制文件","link":"#构建时从其他镜像复制文件","children":[]}]}],"git":{"createdTime":1731129855000,"updatedTime":1731129855000,"contributors":[{"name":"dkyg666","email":"43946866+dkyg666@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.74,"words":823},"filePathRelative":"index/Docker/image/multistage-builds/README.md","localizedDate":"2024年11月9日","excerpt":"\\n<h2>之前的做法</h2>\\n<p>在 Docker 17.05 版本之前，我们构建 Docker 镜像时，通常会采用两种方式：</p>\\n<h3>全部放入一个 Dockerfile</h3>\\n<p>一种方式是将所有的构建过程编包含在一个 <code>Dockerfile</code> 中，包括项目及其依赖库的编译、测试、打包等流程，这里可能会带来的一些问题：</p>\\n<ul>\\n<li>\\n<p>镜像层次多，镜像体积较大，部署时间变长</p>\\n</li>\\n<li>\\n<p>源代码存在泄露的风险</p>\\n</li>\\n</ul>\\n<p>例如，编写 <code>app.go</code> 文件，该程序输出 <code>Hello World!</code></p>"}');export{t as comp,p as data};
