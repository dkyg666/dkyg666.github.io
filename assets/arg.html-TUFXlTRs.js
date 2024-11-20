import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,e as a,o as i}from"./app-DYmmM49d.js";const c={};function d(l,n){return i(),s("div",null,n[0]||(n[0]=[a(`<h1 id="arg-构建参数" tabindex="-1"><a class="header-anchor" href="#arg-构建参数"><span>ARG 构建参数</span></a></h1><p>格式：<code>ARG &lt;参数名&gt;[=&lt;默认值&gt;]</code></p><p>构建参数和 <code>ENV</code> 的效果一样，都是设置环境变量。所不同的是，<code>ARG</code> 所设置的构建环境的环境变量，在将来容器运行时是不会存在这些环境变量的。但是不要因此就使用 <code>ARG</code> 保存密码之类的信息，因为 <code>docker history</code> 还是可以看到所有值的。</p><p><code>Dockerfile</code> 中的 <code>ARG</code> 指令是定义参数名称，以及定义其默认值。该默认值可以在构建命令 <code>docker build</code> 中用 <code>--build-arg &lt;参数名&gt;=&lt;值&gt;</code> 来覆盖。</p><p>灵活的使用 <code>ARG</code> 指令，能够在不修改 Dockerfile 的情况下，构建出不同的镜像。</p><p>ARG 指令有生效范围，如果在 <code>FROM</code> 指令之前指定，那么只能用于 <code>FROM</code> 指令中。</p><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">ARG</span> DOCKER_USERNAME=library</span>

<span class="token instruction"><span class="token keyword">FROM</span> <span class="token variable">\${DOCKER_USERNAME}</span>/alpine</span>

<span class="token instruction"><span class="token keyword">RUN</span> set -x ; echo <span class="token variable">\${DOCKER_USERNAME}</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用上述 Dockerfile 会发现无法输出 <code>\${DOCKER_USERNAME}</code> 变量的值，要想正常输出，你必须在 <code>FROM</code> 之后再次指定 <code>ARG</code></p><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token comment"># 只在 FROM 中生效</span>
<span class="token instruction"><span class="token keyword">ARG</span> DOCKER_USERNAME=library</span>

<span class="token instruction"><span class="token keyword">FROM</span> <span class="token variable">\${DOCKER_USERNAME}</span>/alpine</span>

<span class="token comment"># 要想在 FROM 之后使用，必须再次指定</span>
<span class="token instruction"><span class="token keyword">ARG</span> DOCKER_USERNAME=library</span>

<span class="token instruction"><span class="token keyword">RUN</span> set -x ; echo <span class="token variable">\${DOCKER_USERNAME}</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于多阶段构建，尤其要注意这个问题</p><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token comment"># 这个变量在每个 FROM 中都生效</span>
<span class="token instruction"><span class="token keyword">ARG</span> DOCKER_USERNAME=library</span>

<span class="token instruction"><span class="token keyword">FROM</span> <span class="token variable">\${DOCKER_USERNAME}</span>/alpine</span>

<span class="token instruction"><span class="token keyword">RUN</span> set -x ; echo 1</span>

<span class="token instruction"><span class="token keyword">FROM</span> <span class="token variable">\${DOCKER_USERNAME}</span>/alpine</span>

<span class="token instruction"><span class="token keyword">RUN</span> set -x ; echo 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于上述 Dockerfile 两个 <code>FROM</code> 指令都可以使用 <code>\${DOCKER_USERNAME}</code>，对于在各个阶段中使用的变量都必须在每个阶段分别指定：</p><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">ARG</span> DOCKER_USERNAME=library</span>

<span class="token instruction"><span class="token keyword">FROM</span> <span class="token variable">\${DOCKER_USERNAME}</span>/alpine</span>

<span class="token comment"># 在FROM 之后使用变量，必须在每个阶段分别指定</span>
<span class="token instruction"><span class="token keyword">ARG</span> DOCKER_USERNAME=library</span>

<span class="token instruction"><span class="token keyword">RUN</span> set -x ; echo <span class="token variable">\${DOCKER_USERNAME}</span></span>

<span class="token instruction"><span class="token keyword">FROM</span> <span class="token variable">\${DOCKER_USERNAME}</span>/alpine</span>

<span class="token comment"># 在FROM 之后使用变量，必须在每个阶段分别指定</span>
<span class="token instruction"><span class="token keyword">ARG</span> DOCKER_USERNAME=library</span>

<span class="token instruction"><span class="token keyword">RUN</span> set -x ; echo <span class="token variable">\${DOCKER_USERNAME}</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13)]))}const t=e(c,[["render",d],["__file","arg.html.vue"]]),p=JSON.parse('{"path":"/index/Docker/image/dockerfile/arg.html","title":"ARG 构建参数","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"createdTime":1731129855000,"updatedTime":1731129855000,"contributors":[{"name":"dkyg666","email":"43946866+dkyg666@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.47,"words":440},"filePathRelative":"index/Docker/image/dockerfile/arg.md","localizedDate":"2024年11月9日","excerpt":"\\n<p>格式：<code>ARG &lt;参数名&gt;[=&lt;默认值&gt;]</code></p>\\n<p>构建参数和 <code>ENV</code> 的效果一样，都是设置环境变量。所不同的是，<code>ARG</code> 所设置的构建环境的环境变量，在将来容器运行时是不会存在这些环境变量的。但是不要因此就使用 <code>ARG</code> 保存密码之类的信息，因为 <code>docker history</code> 还是可以看到所有值的。</p>\\n<p><code>Dockerfile</code> 中的 <code>ARG</code> 指令是定义参数名称，以及定义其默认值。该默认值可以在构建命令 <code>docker build</code> 中用 <code>--build-arg &lt;参数名&gt;=&lt;值&gt;</code> 来覆盖。</p>"}');export{t as comp,p as data};
