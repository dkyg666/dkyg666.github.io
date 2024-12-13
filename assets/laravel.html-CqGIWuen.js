import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,e as a,b as e,d as n,a as o,o as r,r as c}from"./app-B_h_uIeu.js";const t={},d={href:"https://github.com/khs1994-docker/laravel-demo",target:"_blank",rel:"noopener noreferrer"};function v(k,s){const i=c("ExternalLinkIcon");return r(),l("div",null,[s[3]||(s[3]=a(`<h1 id="实战多阶段构建-laravel-镜像" tabindex="-1"><a class="header-anchor" href="#实战多阶段构建-laravel-镜像"><span>实战多阶段构建 Laravel 镜像</span></a></h1><blockquote><p>本节适用于 PHP 开发者阅读。<code>Laravel</code> 基于 8.x 版本，各个版本的文件结构可能会有差异，请根据实际自行修改。</p></blockquote><h2 id="准备" tabindex="-1"><a class="header-anchor" href="#准备"><span>准备</span></a></h2><p>新建一个 <code>Laravel</code> 项目或在已有的 <code>Laravel</code> 项目根目录下新建 <code>Dockerfile</code> <code>.dockerignore</code> <code>laravel.conf</code> 文件。</p><p>在 <code>.dockerignore</code> 文件中写入以下内容。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>.idea/
.git/

vendor/

node_modules/

public/js/
public/css/
public/mix-manifest.json

yarn-error.log

bootstrap/cache/*
storage/

<span class="token comment"># 自行添加其他需要排除的文件，例如 .env.* 文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <code>laravel.conf</code> 文件中写入 nginx 配置。</p><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span> default_server</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">root</span> /app/laravel/public</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">index</span> index.php index.html</span><span class="token punctuation">;</span>

  <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
      <span class="token directive"><span class="token keyword">try_files</span> <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.php?<span class="token variable">$query_string</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token directive"><span class="token keyword">location</span> ~ .*\\.php(\\/.*)*$</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">fastcgi_pass</span>   laravel:9000</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">include</span>        fastcgi.conf</span><span class="token punctuation">;</span>

    <span class="token comment"># fastcgi_connect_timeout 300;</span>
    <span class="token comment"># fastcgi_send_timeout 300;</span>
    <span class="token comment"># fastcgi_read_timeout 300;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="前端构建" tabindex="-1"><a class="header-anchor" href="#前端构建"><span>前端构建</span></a></h2><p>第一阶段进行前端构建。</p><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> node:alpine <span class="token keyword">as</span> frontend</span>

<span class="token instruction"><span class="token keyword">COPY</span> package.json /app/</span>

<span class="token instruction"><span class="token keyword">RUN</span> set -x ; cd /app <span class="token operator">\\</span>
      &amp;&amp; npm install --registry=https://registry.npmmirror.com</span>

<span class="token instruction"><span class="token keyword">COPY</span> webpack.mix.js webpack.config.js tailwind.config.js /app/</span>
<span class="token instruction"><span class="token keyword">COPY</span> resources/ /app/resources/</span>

<span class="token instruction"><span class="token keyword">RUN</span> set -x ; cd /app <span class="token operator">\\</span>
      &amp;&amp; touch artisan <span class="token operator">\\</span>
      &amp;&amp; mkdir -p public <span class="token operator">\\</span>
      &amp;&amp; npm run production</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装-composer-依赖" tabindex="-1"><a class="header-anchor" href="#安装-composer-依赖"><span>安装 Composer 依赖</span></a></h2><p>第二阶段安装 Composer 依赖。</p><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> composer <span class="token keyword">as</span> composer</span>

<span class="token instruction"><span class="token keyword">COPY</span> database/ /app/database/</span>
<span class="token instruction"><span class="token keyword">COPY</span> composer.json composer.lock /app/</span>

<span class="token instruction"><span class="token keyword">RUN</span> set -x ; cd /app <span class="token operator">\\</span>
      &amp;&amp; composer config -g repo.packagist composer https://mirrors.aliyun.com/composer/ <span class="token operator">\\</span>
      &amp;&amp; composer install <span class="token operator">\\</span>
           --ignore-platform-reqs <span class="token operator">\\</span>
           --no-interaction <span class="token operator">\\</span>
           --no-plugins <span class="token operator">\\</span>
           --no-scripts <span class="token operator">\\</span>
           --prefer-dist</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="整合以上阶段所生成的文件" tabindex="-1"><a class="header-anchor" href="#整合以上阶段所生成的文件"><span>整合以上阶段所生成的文件</span></a></h2><p>第三阶段对以上阶段生成的文件进行整合。</p><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> php:7.4-fpm-alpine <span class="token keyword">as</span> laravel</span>

<span class="token instruction"><span class="token keyword">ARG</span> LARAVEL_PATH=/app/laravel</span>

<span class="token instruction"><span class="token keyword">COPY</span> <span class="token options"><span class="token property">--from</span><span class="token punctuation">=</span><span class="token string">composer</span></span> /app/vendor/ <span class="token variable">\${LARAVEL_PATH}</span>/vendor/</span>
<span class="token instruction"><span class="token keyword">COPY</span> . <span class="token variable">\${LARAVEL_PATH}</span></span>
<span class="token instruction"><span class="token keyword">COPY</span> <span class="token options"><span class="token property">--from</span><span class="token punctuation">=</span><span class="token string">frontend</span></span> /app/public/js/ <span class="token variable">\${LARAVEL_PATH}</span>/public/js/</span>
<span class="token instruction"><span class="token keyword">COPY</span> <span class="token options"><span class="token property">--from</span><span class="token punctuation">=</span><span class="token string">frontend</span></span> /app/public/css/ <span class="token variable">\${LARAVEL_PATH}</span>/public/css/</span>
<span class="token instruction"><span class="token keyword">COPY</span> <span class="token options"><span class="token property">--from</span><span class="token punctuation">=</span><span class="token string">frontend</span></span> /app/public/mix-manifest.json <span class="token variable">\${LARAVEL_PATH}</span>/public/mix-manifest.json</span>

<span class="token instruction"><span class="token keyword">RUN</span> set -x ; cd <span class="token variable">\${LARAVEL_PATH}</span> <span class="token operator">\\</span>
      &amp;&amp; mkdir -p storage <span class="token operator">\\</span>
      &amp;&amp; mkdir -p storage/framework/cache <span class="token operator">\\</span>
      &amp;&amp; mkdir -p storage/framework/sessions <span class="token operator">\\</span>
      &amp;&amp; mkdir -p storage/framework/testing <span class="token operator">\\</span>
      &amp;&amp; mkdir -p storage/framework/views <span class="token operator">\\</span>
      &amp;&amp; mkdir -p storage/logs <span class="token operator">\\</span>
      &amp;&amp; chmod -R 777 storage <span class="token operator">\\</span>
      &amp;&amp; php artisan package:discover</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="最后一个阶段构建-nginx-镜像" tabindex="-1"><a class="header-anchor" href="#最后一个阶段构建-nginx-镜像"><span>最后一个阶段构建 NGINX 镜像</span></a></h2><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> nginx:alpine <span class="token keyword">as</span> nginx</span>

<span class="token instruction"><span class="token keyword">ARG</span> LARAVEL_PATH=/app/laravel</span>

<span class="token instruction"><span class="token keyword">COPY</span> laravel.conf /etc/nginx/conf.d/</span>
<span class="token instruction"><span class="token keyword">COPY</span> <span class="token options"><span class="token property">--from</span><span class="token punctuation">=</span><span class="token string">laravel</span></span> <span class="token variable">\${LARAVEL_PATH}</span>/public <span class="token variable">\${LARAVEL_PATH}</span>/public</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="构建-laravel-及-nginx-镜像" tabindex="-1"><a class="header-anchor" href="#构建-laravel-及-nginx-镜像"><span>构建 Laravel 及 Nginx 镜像</span></a></h2><p>使用 <code>docker build</code> 命令构建镜像。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> build <span class="token parameter variable">-t</span> my/laravel <span class="token parameter variable">--target</span><span class="token operator">=</span>laravel <span class="token builtin class-name">.</span>

$ <span class="token function">docker</span> build <span class="token parameter variable">-t</span> my/nginx <span class="token parameter variable">--target</span><span class="token operator">=</span>nginx <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="启动容器并测试" tabindex="-1"><a class="header-anchor" href="#启动容器并测试"><span>启动容器并测试</span></a></h2><p>新建 Docker 网络</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> network create laravel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动 laravel 容器， <code>--name=laravel</code> 参数设定的名字必须与 <code>nginx</code> 配置文件中的 <code>fastcgi_pass laravel:9000;</code> 一致</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> run <span class="token parameter variable">-dit</span> <span class="token parameter variable">--rm</span> <span class="token parameter variable">--name</span><span class="token operator">=</span>laravel <span class="token parameter variable">--network</span><span class="token operator">=</span>laravel my/laravel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动 nginx 容器</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> run <span class="token parameter variable">-dit</span> <span class="token parameter variable">--rm</span> <span class="token parameter variable">--network</span><span class="token operator">=</span>laravel <span class="token parameter variable">-p</span> <span class="token number">8080</span>:80 my/nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>浏览器访问 <code>127.0.0.1:8080</code> 可以看到 Laravel 项目首页。</p><blockquote><p>也许 Laravel 项目依赖其他外部服务，例如 redis、MySQL，请自行启动这些服务之后再进行测试，本小节不再赘述。</p></blockquote><h2 id="生产环境优化" tabindex="-1"><a class="header-anchor" href="#生产环境优化"><span>生产环境优化</span></a></h2><p>本小节内容为了方便测试，将配置文件直接放到了镜像中，实际在使用时 <strong>建议</strong> 将配置文件作为 <code>config</code> 或 <code>secret</code> 挂载到容器中，请读者自行学习 <code>Swarm mode</code> 或 <code>Kubernetes</code> 的相关内容。</p>`,33)),e("p",null,[s[1]||(s[1]=n("由于篇幅所限本小节只是简单列出，更多内容可以参考 ")),e("a",d,[s[0]||(s[0]=n("https://github.com/khs1994-docker/laravel-demo")),o(i)]),s[2]||(s[2]=n(" 项目。"))]),s[4]||(s[4]=a(`<h2 id="附录" tabindex="-1"><a class="header-anchor" href="#附录"><span>附录</span></a></h2><p>完整的 <code>Dockerfile</code> 文件如下。</p><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> node:alpine <span class="token keyword">as</span> frontend</span>

<span class="token instruction"><span class="token keyword">COPY</span> package.json /app/</span>

<span class="token instruction"><span class="token keyword">RUN</span> set -x ; cd /app <span class="token operator">\\</span>
      &amp;&amp; npm install --registry=https://registry.npmmirror.com</span>

<span class="token instruction"><span class="token keyword">COPY</span> webpack.mix.js webpack.config.js tailwind.config.js /app/</span>
<span class="token instruction"><span class="token keyword">COPY</span> resources/ /app/resources/</span>

<span class="token instruction"><span class="token keyword">RUN</span> set -x ; cd /app <span class="token operator">\\</span>
      &amp;&amp; touch artisan <span class="token operator">\\</span>
      &amp;&amp; mkdir -p public <span class="token operator">\\</span>
      &amp;&amp; npm run production</span>

<span class="token instruction"><span class="token keyword">FROM</span> composer <span class="token keyword">as</span> composer</span>

<span class="token instruction"><span class="token keyword">COPY</span> database/ /app/database/</span>
<span class="token instruction"><span class="token keyword">COPY</span> composer.json /app/</span>

<span class="token instruction"><span class="token keyword">RUN</span> set -x ; cd /app <span class="token operator">\\</span>
      &amp;&amp; composer config -g repo.packagist composer https://mirrors.aliyun.com/composer/ <span class="token operator">\\</span>
      &amp;&amp; composer install <span class="token operator">\\</span>
           --ignore-platform-reqs <span class="token operator">\\</span>
           --no-interaction <span class="token operator">\\</span>
           --no-plugins <span class="token operator">\\</span>
           --no-scripts <span class="token operator">\\</span>
           --prefer-dist</span>

<span class="token instruction"><span class="token keyword">FROM</span> php:7.4-fpm-alpine <span class="token keyword">as</span> laravel</span>

<span class="token instruction"><span class="token keyword">ARG</span> LARAVEL_PATH=/app/laravel</span>

<span class="token instruction"><span class="token keyword">COPY</span> <span class="token options"><span class="token property">--from</span><span class="token punctuation">=</span><span class="token string">composer</span></span> /app/vendor/ <span class="token variable">\${LARAVEL_PATH}</span>/vendor/</span>
<span class="token instruction"><span class="token keyword">COPY</span> . <span class="token variable">\${LARAVEL_PATH}</span></span>
<span class="token instruction"><span class="token keyword">COPY</span> <span class="token options"><span class="token property">--from</span><span class="token punctuation">=</span><span class="token string">frontend</span></span> /app/public/js/ <span class="token variable">\${LARAVEL_PATH}</span>/public/js/</span>
<span class="token instruction"><span class="token keyword">COPY</span> <span class="token options"><span class="token property">--from</span><span class="token punctuation">=</span><span class="token string">frontend</span></span> /app/public/css/ <span class="token variable">\${LARAVEL_PATH}</span>/public/css/</span>
<span class="token instruction"><span class="token keyword">COPY</span> <span class="token options"><span class="token property">--from</span><span class="token punctuation">=</span><span class="token string">frontend</span></span> /app/public/mix-manifest.json <span class="token variable">\${LARAVEL_PATH}</span>/public/mix-manifest.json</span>

<span class="token instruction"><span class="token keyword">RUN</span> set -x ; cd <span class="token variable">\${LARAVEL_PATH}</span> <span class="token operator">\\</span>
      &amp;&amp; mkdir -p storage <span class="token operator">\\</span>
      &amp;&amp; mkdir -p storage/framework/cache <span class="token operator">\\</span>
      &amp;&amp; mkdir -p storage/framework/sessions <span class="token operator">\\</span>
      &amp;&amp; mkdir -p storage/framework/testing <span class="token operator">\\</span>
      &amp;&amp; mkdir -p storage/framework/views <span class="token operator">\\</span>
      &amp;&amp; mkdir -p storage/logs <span class="token operator">\\</span>
      &amp;&amp; chmod -R 777 storage <span class="token operator">\\</span>
      &amp;&amp; php artisan package:discover</span>

<span class="token instruction"><span class="token keyword">FROM</span> nginx:alpine <span class="token keyword">as</span> nginx</span>

<span class="token instruction"><span class="token keyword">ARG</span> LARAVEL_PATH=/app/laravel</span>

<span class="token instruction"><span class="token keyword">COPY</span> laravel.conf /etc/nginx/conf.d/</span>
<span class="token instruction"><span class="token keyword">COPY</span> <span class="token options"><span class="token property">--from</span><span class="token punctuation">=</span><span class="token string">laravel</span></span> <span class="token variable">\${LARAVEL_PATH}</span>/public <span class="token variable">\${LARAVEL_PATH}</span>/public</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3))])}const b=p(t,[["render",v],["__file","laravel.html.vue"]]),g=JSON.parse('{"path":"/index/Docker/image/multistage-builds/laravel.html","title":"实战多阶段构建 Laravel 镜像","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"准备","slug":"准备","link":"#准备","children":[]},{"level":2,"title":"前端构建","slug":"前端构建","link":"#前端构建","children":[]},{"level":2,"title":"安装 Composer 依赖","slug":"安装-composer-依赖","link":"#安装-composer-依赖","children":[]},{"level":2,"title":"整合以上阶段所生成的文件","slug":"整合以上阶段所生成的文件","link":"#整合以上阶段所生成的文件","children":[]},{"level":2,"title":"最后一个阶段构建 NGINX 镜像","slug":"最后一个阶段构建-nginx-镜像","link":"#最后一个阶段构建-nginx-镜像","children":[]},{"level":2,"title":"构建 Laravel 及 Nginx 镜像","slug":"构建-laravel-及-nginx-镜像","link":"#构建-laravel-及-nginx-镜像","children":[]},{"level":2,"title":"启动容器并测试","slug":"启动容器并测试","link":"#启动容器并测试","children":[]},{"level":2,"title":"生产环境优化","slug":"生产环境优化","link":"#生产环境优化","children":[]},{"level":2,"title":"附录","slug":"附录","link":"#附录","children":[]}],"git":{"createdTime":1731129855000,"updatedTime":1731129855000,"contributors":[{"name":"dkyg666","email":"43946866+dkyg666@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.77,"words":831},"filePathRelative":"index/Docker/image/multistage-builds/laravel.md","localizedDate":"2024年11月9日","excerpt":"\\n<blockquote>\\n<p>本节适用于 PHP 开发者阅读。<code>Laravel</code> 基于 8.x 版本，各个版本的文件结构可能会有差异，请根据实际自行修改。</p>\\n</blockquote>\\n<h2>准备</h2>\\n<p>新建一个 <code>Laravel</code> 项目或在已有的 <code>Laravel</code> 项目根目录下新建 <code>Dockerfile</code> <code>.dockerignore</code> <code>laravel.conf</code> 文件。</p>\\n<p>在 <code>.dockerignore</code> 文件中写入以下内容。</p>"}');export{b as comp,g as data};
