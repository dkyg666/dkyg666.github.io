import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,e as a,o as t}from"./app-dX96qGh5.js";const l={};function o(c,n){return t(),e("div",null,n[0]||(n[0]=[a(`<h1 id="healthcheck-健康检查" tabindex="-1"><a class="header-anchor" href="#healthcheck-健康检查"><span>HEALTHCHECK 健康检查</span></a></h1><p>格式：</p><ul><li><code>HEALTHCHECK [选项] CMD &lt;命令&gt;</code>：设置检查容器健康状况的命令</li><li><code>HEALTHCHECK NONE</code>：如果基础镜像有健康检查指令，使用这行可以屏蔽掉其健康检查指令</li></ul><p><code>HEALTHCHECK</code> 指令是告诉 Docker 应该如何进行判断容器的状态是否正常，这是 Docker 1.12 引入的新指令。</p><p>在没有 <code>HEALTHCHECK</code> 指令前，Docker 引擎只可以通过容器内主进程是否退出来判断容器是否状态异常。很多情况下这没问题，但是如果程序进入死锁状态，或者死循环状态，应用进程并不退出，但是该容器已经无法提供服务了。在 1.12 以前，Docker 不会检测到容器的这种状态，从而不会重新调度，导致可能会有部分容器已经无法提供服务了却还在接受用户请求。</p><p>而自 1.12 之后，Docker 提供了 <code>HEALTHCHECK</code> 指令，通过该指令指定一行命令，用这行命令来判断容器主进程的服务状态是否还正常，从而比较真实的反应容器实际状态。</p><p>当在一个镜像指定了 <code>HEALTHCHECK</code> 指令后，用其启动容器，初始状态会为 <code>starting</code>，在 <code>HEALTHCHECK</code> 指令检查成功后变为 <code>healthy</code>，如果连续一定次数失败，则会变为 <code>unhealthy</code>。</p><p><code>HEALTHCHECK</code> 支持下列选项：</p><ul><li><code>--interval=&lt;间隔&gt;</code>：两次健康检查的间隔，默认为 30 秒；</li><li><code>--timeout=&lt;时长&gt;</code>：健康检查命令运行超时时间，如果超过这个时间，本次健康检查就被视为失败，默认 30 秒；</li><li><code>--retries=&lt;次数&gt;</code>：当连续失败指定次数后，则将容器状态视为 <code>unhealthy</code>，默认 3 次。</li></ul><p>和 <code>CMD</code>, <code>ENTRYPOINT</code> 一样，<code>HEALTHCHECK</code> 只可以出现一次，如果写了多个，只有最后一个生效。</p><p>在 <code>HEALTHCHECK [选项] CMD</code> 后面的命令，格式和 <code>ENTRYPOINT</code> 一样，分为 <code>shell</code> 格式，和 <code>exec</code> 格式。命令的返回值决定了该次健康检查的成功与否：<code>0</code>：成功；<code>1</code>：失败；<code>2</code>：保留，不要使用这个值。</p><p>假设我们有个镜像是个最简单的 Web 服务，我们希望增加健康检查来判断其 Web 服务是否在正常工作，我们可以用 <code>curl</code> 来帮助判断，其 <code>Dockerfile</code> 的 <code>HEALTHCHECK</code> 可以这么写：</p><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> nginx</span>
<span class="token instruction"><span class="token keyword">RUN</span> apt-get update &amp;&amp; apt-get install -y curl &amp;&amp; rm -rf /var/lib/apt/lists/*</span>
<span class="token instruction"><span class="token keyword">HEALTHCHECK</span> <span class="token options"><span class="token property">--interval</span><span class="token punctuation">=</span><span class="token string">5s</span> <span class="token property">--timeout</span><span class="token punctuation">=</span><span class="token string">3s</span></span> <span class="token operator">\\</span>
  <span class="token keyword">CMD</span> curl -fs http://localhost/ || exit 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里我们设置了每 5 秒检查一次（这里为了试验所以间隔非常短，实际应该相对较长），如果健康检查命令超过 3 秒没响应就视为失败，并且使用 <code>curl -fs http://localhost/ || exit 1</code> 作为健康检查命令。</p><p>使用 <code>docker build</code> 来构建这个镜像：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> build <span class="token parameter variable">-t</span> myweb:v1 <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>构建好了后，我们启动一个容器：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> web <span class="token parameter variable">-p</span> <span class="token number">80</span>:80 myweb:v1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当运行该镜像后，可以通过 <code>docker container ls</code> 看到最初的状态为 <code>(health: starting)</code>：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> container <span class="token function">ls</span>
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS                            PORTS               NAMES
03e28eb00bd0        myweb:v1            <span class="token string">&quot;nginx -g &#39;daemon off&quot;</span>   <span class="token number">3</span> seconds ago       Up <span class="token number">2</span> seconds <span class="token punctuation">(</span>health: starting<span class="token punctuation">)</span>   <span class="token number">80</span>/tcp, <span class="token number">443</span>/tcp     web
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在等待几秒钟后，再次 <code>docker container ls</code>，就会看到健康状态变化为了 <code>(healthy)</code>：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> container <span class="token function">ls</span>
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS                    PORTS               NAMES
03e28eb00bd0        myweb:v1            <span class="token string">&quot;nginx -g &#39;daemon off&quot;</span>   <span class="token number">18</span> seconds ago      Up <span class="token number">16</span> seconds <span class="token punctuation">(</span>healthy<span class="token punctuation">)</span>   <span class="token number">80</span>/tcp, <span class="token number">443</span>/tcp     web
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果健康检查连续失败超过了重试次数，状态就会变为 <code>(unhealthy)</code>。</p><p>为了帮助排障，健康检查命令的输出（包括 <code>stdout</code> 以及 <code>stderr</code>）都会被存储于健康状态里，可以用 <code>docker inspect</code> 来查看。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> inspect <span class="token parameter variable">--format</span> <span class="token string">&#39;{{json .State.Health}}&#39;</span> web <span class="token operator">|</span> python <span class="token parameter variable">-m</span> json.tool
<span class="token punctuation">{</span>
    <span class="token string">&quot;FailingStreak&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
    <span class="token string">&quot;Log&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;End&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2016-11-25T14:35:37.940957051Z&quot;</span>,
            <span class="token string">&quot;ExitCode&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;Output&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&lt;!DOCTYPE html&gt;<span class="token entity" title="\\n">\\n</span>&lt;html&gt;<span class="token entity" title="\\n">\\n</span>&lt;head&gt;<span class="token entity" title="\\n">\\n</span>&lt;title&gt;Welcome to nginx!&lt;/title&gt;<span class="token entity" title="\\n">\\n</span>&lt;style&gt;<span class="token entity" title="\\n">\\n</span>    body {<span class="token entity" title="\\n">\\n</span>        width: 35em;<span class="token entity" title="\\n">\\n</span>        margin: 0 auto;<span class="token entity" title="\\n">\\n</span>        font-family: Tahoma, Verdana, Arial, sans-serif;<span class="token entity" title="\\n">\\n</span>    }<span class="token entity" title="\\n">\\n</span>&lt;/style&gt;<span class="token entity" title="\\n">\\n</span>&lt;/head&gt;<span class="token entity" title="\\n">\\n</span>&lt;body&gt;<span class="token entity" title="\\n">\\n</span>&lt;h1&gt;Welcome to nginx!&lt;/h1&gt;<span class="token entity" title="\\n">\\n</span>&lt;p&gt;If you see this page, the nginx web server is successfully installed and<span class="token entity" title="\\n">\\n</span>working. Further configuration is required.&lt;/p&gt;<span class="token entity" title="\\n">\\n</span><span class="token entity" title="\\n">\\n</span>&lt;p&gt;For online documentation and support please refer to<span class="token entity" title="\\n">\\n</span>&lt;a href=<span class="token entity" title="\\&quot;">\\&quot;</span>http://nginx.org/<span class="token entity" title="\\&quot;">\\&quot;</span>&gt;nginx.org&lt;/a&gt;.&lt;br/&gt;<span class="token entity" title="\\n">\\n</span>Commercial support is available at<span class="token entity" title="\\n">\\n</span>&lt;a href=<span class="token entity" title="\\&quot;">\\&quot;</span>http://nginx.com/<span class="token entity" title="\\&quot;">\\&quot;</span>&gt;nginx.com&lt;/a&gt;.&lt;/p&gt;<span class="token entity" title="\\n">\\n</span><span class="token entity" title="\\n">\\n</span>&lt;p&gt;&lt;em&gt;Thank you for using nginx.&lt;/em&gt;&lt;/p&gt;<span class="token entity" title="\\n">\\n</span>&lt;/body&gt;<span class="token entity" title="\\n">\\n</span>&lt;/html&gt;<span class="token entity" title="\\n">\\n</span>&quot;</span>,
            <span class="token string">&quot;Start&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2016-11-25T14:35:37.780192565Z&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>,
    <span class="token string">&quot;Status&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;healthy&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25)]))}const d=s(l,[["render",o],["__file","healthcheck.html.vue"]]),r=JSON.parse('{"path":"/index/Docker/image/dockerfile/healthcheck.html","title":"HEALTHCHECK 健康检查","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"createdTime":1731129855000,"updatedTime":1731129855000,"contributors":[{"name":"dkyg666","email":"43946866+dkyg666@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":3.47,"words":1041},"filePathRelative":"index/Docker/image/dockerfile/healthcheck.md","localizedDate":"2024年11月9日","excerpt":"\\n<p>格式：</p>\\n<ul>\\n<li><code>HEALTHCHECK [选项] CMD &lt;命令&gt;</code>：设置检查容器健康状况的命令</li>\\n<li><code>HEALTHCHECK NONE</code>：如果基础镜像有健康检查指令，使用这行可以屏蔽掉其健康检查指令</li>\\n</ul>\\n<p><code>HEALTHCHECK</code> 指令是告诉 Docker 应该如何进行判断容器的状态是否正常，这是 Docker 1.12 引入的新指令。</p>\\n<p>在没有 <code>HEALTHCHECK</code> 指令前，Docker 引擎只可以通过容器内主进程是否退出来判断容器是否状态异常。很多情况下这没问题，但是如果程序进入死锁状态，或者死循环状态，应用进程并不退出，但是该容器已经无法提供服务了。在 1.12 以前，Docker 不会检测到容器的这种状态，从而不会重新调度，导致可能会有部分容器已经无法提供服务了却还在接受用户请求。</p>"}');export{d as comp,r as data};
