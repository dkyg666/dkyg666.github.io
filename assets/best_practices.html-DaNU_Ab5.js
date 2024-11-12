import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,b as n,d as s,a,e as d,w as r,r as l,o as p}from"./app-dX96qGh5.js";const u={},k={href:"https://docs.docker.com/develop/develop-images/dockerfile_best-practices/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://hub.docker.com/_/alpine/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://docs.docker.com/config/labels-custom-metadata/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://docs.docker.com/config/labels-custom-metadata/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/tianon/gosu",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/docker-library/docs",target:"_blank",rel:"noopener noreferrer"};function f(D,e){const o=l("ExternalLinkIcon"),i=l("RouteLink");return p(),t("div",null,[e[23]||(e[23]=n("h1",{id:"dockerfile-最佳实践",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#dockerfile-最佳实践"},[n("span",null,"Dockerfile 最佳实践")])],-1)),n("p",null,[e[1]||(e[1]=s("本附录是笔者对 Docker 官方文档中 ")),n("a",k,[e[0]||(e[0]=s("Best practices for writing Dockerfiles")),a(o)]),e[2]||(e[2]=s(" 的理解与翻译。"))]),e[24]||(e[24]=d('<h2 id="一般性的指南和建议" tabindex="-1"><a class="header-anchor" href="#一般性的指南和建议"><span>一般性的指南和建议</span></a></h2><h3 id="容器应该是短暂的" tabindex="-1"><a class="header-anchor" href="#容器应该是短暂的"><span>容器应该是短暂的</span></a></h3><p>通过 <code>Dockerfile</code> 构建的镜像所启动的容器应该尽可能短暂（生命周期短）。「短暂」意味着可以停止和销毁容器，并且创建一个新容器并部署好所需的设置和配置工作量应该是极小的。</p><h3 id="使用-dockerignore-文件" tabindex="-1"><a class="header-anchor" href="#使用-dockerignore-文件"><span>使用 <code>.dockerignore</code> 文件</span></a></h3><p>使用 <code>Dockerfile</code> 构建镜像时最好是将 <code>Dockerfile</code> 放置在一个新建的空目录下。然后将构建镜像所需要的文件添加到该目录中。为了提高构建镜像的效率，你可以在目录下新建一个 <code>.dockerignore</code> 文件来指定要忽略的文件和目录。<code>.dockerignore</code> 文件的排除模式语法和 Git 的 <code>.gitignore</code> 文件相似。</p><h3 id="使用多阶段构建" tabindex="-1"><a class="header-anchor" href="#使用多阶段构建"><span>使用多阶段构建</span></a></h3><p>在 <code>Docker 17.05</code> 以上版本中，你可以使用 [多阶段构建] 来减少所构建镜像的大小。</p><h3 id="避免安装不必要的包" tabindex="-1"><a class="header-anchor" href="#避免安装不必要的包"><span>避免安装不必要的包</span></a></h3><p>为了降低复杂性、减少依赖、减小文件大小、节约构建时间，你应该避免安装任何不必要的包。例如，不要在数据库镜像中包含一个文本编辑器。</p><h3 id="一个容器只运行一个进程" tabindex="-1"><a class="header-anchor" href="#一个容器只运行一个进程"><span>一个容器只运行一个进程</span></a></h3><p>应该保证在一个容器中只运行一个进程。将多个应用解耦到不同容器中，保证了容器的横向扩展和复用。例如 web 应用应该包含三个容器：web应用、数据库、缓存。</p>',11)),n("p",null,[e[4]||(e[4]=s("如果容器互相依赖，你可以使用 ")),a(i,{to:"/index/Docker/network/linking.html"},{default:r(()=>e[3]||(e[3]=[s("Docker 自定义网络")])),_:1}),e[5]||(e[5]=s(" 来把这些容器连接起来。"))]),e[25]||(e[25]=d(`<h3 id="镜像层数尽可能少" tabindex="-1"><a class="header-anchor" href="#镜像层数尽可能少"><span>镜像层数尽可能少</span></a></h3><p>你需要在 <code>Dockerfile</code> 可读性（也包括长期的可维护性）和减少层数之间做一个平衡。</p><h3 id="将多行参数排序" tabindex="-1"><a class="header-anchor" href="#将多行参数排序"><span>将多行参数排序</span></a></h3><p>将多行参数按字母顺序排序（比如要安装多个包时）。这可以帮助你避免重复包含同一个包，更新包列表时也更容易。也便于 <code>PRs</code> 阅读和审查。建议在反斜杠符号 <code>\\</code> 之前添加一个空格，以增加可读性。</p><p>下面是来自 <code>buildpack-deps</code> 镜像的例子：</p><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">RUN</span> apt-get update &amp;&amp; apt-get install -y <span class="token operator">\\</span>
  bzr <span class="token operator">\\</span>
  cvs <span class="token operator">\\</span>
  git <span class="token operator">\\</span>
  mercurial <span class="token operator">\\</span>
  subversion</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="构建缓存" tabindex="-1"><a class="header-anchor" href="#构建缓存"><span>构建缓存</span></a></h3><p>在镜像的构建过程中，Docker 会遍历 <code>Dockerfile</code> 文件中的指令，然后按顺序执行。在执行每条指令之前，Docker 都会在缓存中查找是否已经存在可重用的镜像，如果有就使用现存的镜像，不再重复创建。如果你不想在构建过程中使用缓存，你可以在 <code>docker build</code> 命令中使用 <code>--no-cache=true</code> 选项。</p><p>但是，如果你想在构建的过程中使用缓存，你得明白什么时候会，什么时候不会找到匹配的镜像，遵循的基本规则如下：</p><ul><li>从一个基础镜像开始（<code>FROM</code> 指令指定），下一条指令将和该基础镜像的所有子镜像进行匹配，检查这些子镜像被创建时使用的指令是否和被检查的指令完全一样。如果不是，则缓存失效。</li><li>在大多数情况下，只需要简单地对比 <code>Dockerfile</code> 中的指令和子镜像。然而，有些指令需要更多的检查和解释。</li><li>对于 <code>ADD</code> 和 <code>COPY</code> 指令，镜像中对应文件的内容也会被检查，每个文件都会计算出一个校验和。文件的最后修改时间和最后访问时间不会纳入校验。在缓存的查找过程中，会将这些校验和和已存在镜像中的文件校验和进行对比。如果文件有任何改变，比如内容和元数据，则缓存失效。</li><li>除了 <code>ADD</code> 和 <code>COPY</code> 指令，缓存匹配过程不会查看临时容器中的文件来决定缓存是否匹配。例如，当执行完 <code>RUN apt-get -y update</code> 指令后，容器中一些文件被更新，但 Docker 不会检查这些文件。这种情况下，只有指令字符串本身被用来匹配缓存。</li></ul><p>一旦缓存失效，所有后续的 <code>Dockerfile</code> 指令都将产生新的镜像，缓存不会被使用。</p><h2 id="dockerfile-指令" tabindex="-1"><a class="header-anchor" href="#dockerfile-指令"><span>Dockerfile 指令</span></a></h2><p>下面针对 <code>Dockerfile</code> 中各种指令的最佳编写方式给出建议。</p><h3 id="from" tabindex="-1"><a class="header-anchor" href="#from"><span>FROM</span></a></h3>`,14)),n("p",null,[e[7]||(e[7]=s("尽可能使用当前官方仓库作为你构建镜像的基础。推荐使用 ")),n("a",v,[e[6]||(e[6]=s("Alpine")),a(o)]),e[8]||(e[8]=s(" 镜像，因为它被严格控制并保持最小尺寸（目前小于 5 MB），但它仍然是一个完整的发行版。"))]),e[26]||(e[26]=d(`<h3 id="label" tabindex="-1"><a class="header-anchor" href="#label"><span>LABEL</span></a></h3><p>你可以给镜像添加标签来帮助组织镜像、记录许可信息、辅助自动化构建等。每个标签一行，由 <code>LABEL</code> 开头加上一个或多个标签对。下面的示例展示了各种不同的可能格式。<code>#</code> 开头的行是注释内容。</p><blockquote><p>注意：如果你的字符串中包含空格，必须将字符串放入引号中或者对空格使用转义。如果字符串内容本身就包含引号，必须对引号使用转义。</p></blockquote><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token comment"># Set one or more individual labels</span>
<span class="token instruction"><span class="token keyword">LABEL</span> com.example.version=<span class="token string">&quot;0.0.1-beta&quot;</span></span>

<span class="token instruction"><span class="token keyword">LABEL</span> vendor=<span class="token string">&quot;ACME Incorporated&quot;</span></span>

<span class="token instruction"><span class="token keyword">LABEL</span> com.example.release-date=<span class="token string">&quot;2015-02-12&quot;</span></span>

<span class="token instruction"><span class="token keyword">LABEL</span> com.example.version.is-production=<span class="token string">&quot;&quot;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个镜像可以包含多个标签，但建议将多个标签放入到一个 <code>LABEL</code> 指令中。</p><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token comment"># Set multiple labels at once, using line-continuation characters to break long lines</span>
<span class="token instruction"><span class="token keyword">LABEL</span> vendor=ACME\\ Incorporated <span class="token operator">\\</span>
      com.example.is-beta= <span class="token operator">\\</span>
      com.example.is-production=<span class="token string">&quot;&quot;</span> <span class="token operator">\\</span>
      com.example.version=<span class="token string">&quot;0.0.1-beta&quot;</span> <span class="token operator">\\</span>
      com.example.release-date=<span class="token string">&quot;2015-02-12&quot;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6)),n("p",null,[e[11]||(e[11]=s("关于标签可以接受的键值对，参考 ")),n("a",m,[e[9]||(e[9]=s("Understanding object labels")),a(o)]),e[12]||(e[12]=s("。关于查询标签信息，参考 ")),n("a",b,[e[10]||(e[10]=s("Managing labels on objects")),a(o)]),e[13]||(e[13]=s("。"))]),e[27]||(e[27]=d(`<h3 id="run" tabindex="-1"><a class="header-anchor" href="#run"><span>RUN</span></a></h3><p>为了保持 <code>Dockerfile</code> 文件的可读性，可理解性，以及可维护性，建议将长的或复杂的 <code>RUN</code> 指令用反斜杠 <code>\\</code> 分割成多行。</p><h4 id="apt-get" tabindex="-1"><a class="header-anchor" href="#apt-get"><span>apt-get</span></a></h4><p><code>RUN</code> 指令最常见的用法是安装包用的 <code>apt-get</code>。因为 <code>RUN apt-get</code> 指令会安装包，所以有几个问题需要注意。</p><p>不要使用 <code>RUN apt-get upgrade</code> 或 <code>dist-upgrade</code>，因为许多基础镜像中的「必须」包不会在一个非特权容器中升级。如果基础镜像中的某个包过时了，你应该联系它的维护者。如果你确定某个特定的包，比如 <code>foo</code>，需要升级，使用 <code>apt-get install -y foo</code> 就行，该指令会自动升级 <code>foo</code> 包。</p><p>永远将 <code>RUN apt-get update</code> 和 <code>apt-get install</code> 组合成一条 <code>RUN</code> 声明，例如：</p><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">RUN</span> apt-get update &amp;&amp; apt-get install -y <span class="token operator">\\</span>
        package-bar <span class="token operator">\\</span>
        package-baz <span class="token operator">\\</span>
        package-foo</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将 <code>apt-get update</code> 放在一条单独的 <code>RUN</code> 声明中会导致缓存问题以及后续的 <code>apt-get install</code> 失败。比如，假设你有一个 <code>Dockerfile</code> 文件：</p><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> ubuntu:18.04</span>

<span class="token instruction"><span class="token keyword">RUN</span> apt-get update</span>

<span class="token instruction"><span class="token keyword">RUN</span> apt-get install -y curl</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>构建镜像后，所有的层都在 Docker 的缓存中。假设你后来又修改了其中的 <code>apt-get install</code> 添加了一个包：</p><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> ubuntu:18.04</span>

<span class="token instruction"><span class="token keyword">RUN</span> apt-get update</span>

<span class="token instruction"><span class="token keyword">RUN</span> apt-get install -y curl nginx</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Docker 发现修改后的 <code>RUN apt-get update</code> 指令和之前的完全一样。所以，<code>apt-get update</code> 不会执行，而是使用之前的缓存镜像。因为 <code>apt-get update</code> 没有运行，后面的 <code>apt-get install</code> 可能安装的是过时的 <code>curl</code> 和 <code>nginx</code> 版本。</p><p>使用 <code>RUN apt-get update &amp;&amp; apt-get install -y</code> 可以确保你的 Dockerfiles 每次安装的都是包的最新的版本，而且这个过程不需要进一步的编码或额外干预。这项技术叫作 <code>cache busting</code>。你也可以显示指定一个包的版本号来达到 <code>cache-busting</code>，这就是所谓的固定版本，例如：</p><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">RUN</span> apt-get update &amp;&amp; apt-get install -y <span class="token operator">\\</span>
    package-bar <span class="token operator">\\</span>
    package-baz <span class="token operator">\\</span>
    package-foo=1.3.*</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>固定版本会迫使构建过程检索特定的版本，而不管缓存中有什么。这项技术也可以减少因所需包中未预料到的变化而导致的失败。</p><p>下面是一个 <code>RUN</code> 指令的示例模板，展示了所有关于 <code>apt-get</code> 的建议。</p><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">RUN</span> apt-get update &amp;&amp; apt-get install -y <span class="token operator">\\</span>
    aufs-tools <span class="token operator">\\</span>
    automake <span class="token operator">\\</span>
    build-essential <span class="token operator">\\</span>
    curl <span class="token operator">\\</span>
    dpkg-sig <span class="token operator">\\</span>
    libcap-dev <span class="token operator">\\</span>
    libsqlite3-dev <span class="token operator">\\</span>
    mercurial <span class="token operator">\\</span>
    reprepro <span class="token operator">\\</span>
    ruby1.9.1 <span class="token operator">\\</span>
    ruby1.9.1-dev <span class="token operator">\\</span>
    s3cmd=1.1.* <span class="token operator">\\</span>
 &amp;&amp; rm -rf /var/lib/apt/lists/*</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中 <code>s3cmd</code> 指令指定了一个版本号 <code>1.1.*</code>。如果之前的镜像使用的是更旧的版本，指定新的版本会导致 <code>apt-get update</code> 缓存失效并确保安装的是新版本。</p><p>另外，清理掉 apt 缓存 <code>var/lib/apt/lists</code> 可以减小镜像大小。因为 <code>RUN</code> 指令的开头为 <code>apt-get update</code>，包缓存总是会在 <code>apt-get install</code> 之前刷新。</p><blockquote><p>注意：官方的 Debian 和 Ubuntu 镜像会自动运行 apt-get clean，所以不需要显式的调用 apt-get clean。</p></blockquote><h3 id="cmd" tabindex="-1"><a class="header-anchor" href="#cmd"><span>CMD</span></a></h3><p><code>CMD</code> 指令用于执行目标镜像中包含的软件，可以包含参数。<code>CMD</code> 大多数情况下都应该以 <code>CMD [&quot;executable&quot;, &quot;param1&quot;, &quot;param2&quot;...]</code> 的形式使用。因此，如果创建镜像的目的是为了部署某个服务(比如 <code>Apache</code>)，你可能会执行类似于 <code>CMD [&quot;apache2&quot;, &quot;-DFOREGROUND&quot;]</code> 形式的命令。我们建议任何服务镜像都使用这种形式的命令。</p><p>多数情况下，<code>CMD</code> 都需要一个交互式的 <code>shell</code> (bash, Python, perl 等)，例如 <code>CMD [&quot;perl&quot;, &quot;-de0&quot;]</code>，或者 <code>CMD [&quot;PHP&quot;, &quot;-a&quot;]</code>。使用这种形式意味着，当你执行类似 <code>docker run -it python</code> 时，你会进入一个准备好的 <code>shell</code> 中。<code>CMD</code> 应该在极少的情况下才能以 <code>CMD [&quot;param&quot;, &quot;param&quot;]</code> 的形式与 <code>ENTRYPOINT</code> 协同使用，除非你和你的镜像使用者都对 <code>ENTRYPOINT</code> 的工作方式十分熟悉。</p><h3 id="expose" tabindex="-1"><a class="header-anchor" href="#expose"><span>EXPOSE</span></a></h3><p><code>EXPOSE</code> 指令用于指定容器将要监听的端口。因此，你应该为你的应用程序使用常见的端口。例如，提供 <code>Apache</code> web 服务的镜像应该使用 <code>EXPOSE 80</code>，而提供 <code>MongoDB</code> 服务的镜像使用 <code>EXPOSE 27017</code>。</p><p>对于外部访问，用户可以在执行 <code>docker run</code> 时使用一个标志来指示如何将指定的端口映射到所选择的端口。</p><h3 id="env" tabindex="-1"><a class="header-anchor" href="#env"><span>ENV</span></a></h3><p>为了方便新程序运行，你可以使用 <code>ENV</code> 来为容器中安装的程序更新 <code>PATH</code> 环境变量。例如使用 <code>ENV PATH /usr/local/nginx/bin:$PATH</code> 来确保 <code>CMD [&quot;nginx&quot;]</code> 能正确运行。</p><p><code>ENV</code> 指令也可用于为你想要容器化的服务提供必要的环境变量，比如 Postgres 需要的 <code>PGDATA</code>。</p><p>最后，<code>ENV</code> 也能用于设置常见的版本号，比如下面的示例：</p><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">ENV</span> PG_MAJOR 9.3</span>

<span class="token instruction"><span class="token keyword">ENV</span> PG_VERSION 9.3.4</span>

<span class="token instruction"><span class="token keyword">RUN</span> curl -SL http://example.com/postgres-<span class="token variable">$PG_VERSION</span>.tar.xz | tar -xJC /usr/src/postgress &amp;&amp; …</span>

<span class="token instruction"><span class="token keyword">ENV</span> PATH /usr/local/postgres-<span class="token variable">$PG_MAJOR</span>/bin:<span class="token variable">$PATH</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>类似于程序中的常量，这种方法可以让你只需改变 <code>ENV</code> 指令来自动的改变容器中的软件版本。</p><h3 id="add-和-copy" tabindex="-1"><a class="header-anchor" href="#add-和-copy"><span>ADD 和 COPY</span></a></h3><p>虽然 <code>ADD</code> 和 <code>COPY</code> 功能类似，但一般优先使用 <code>COPY</code>。因为它比 <code>ADD</code> 更透明。<code>COPY</code> 只支持简单将本地文件拷贝到容器中，而 <code>ADD</code> 有一些并不明显的功能（比如本地 tar 提取和远程 URL 支持）。因此，<code>ADD</code> 的最佳用例是将本地 tar 文件自动提取到镜像中，例如 <code>ADD rootfs.tar.xz</code>。</p><p>如果你的 <code>Dockerfile</code> 有多个步骤需要使用上下文中不同的文件。单独 <code>COPY</code> 每个文件，而不是一次性的 <code>COPY</code> 所有文件，这将保证每个步骤的构建缓存只在特定的文件变化时失效。例如：</p><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">COPY</span> requirements.txt /tmp/</span>

<span class="token instruction"><span class="token keyword">RUN</span> pip install --requirement /tmp/requirements.txt</span>

<span class="token instruction"><span class="token keyword">COPY</span> . /tmp/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果将 <code>COPY . /tmp/</code> 放置在 <code>RUN</code> 指令之前，只要 <code>.</code> 目录中任何一个文件变化，都会导致后续指令的缓存失效。</p><p>为了让镜像尽量小，最好不要使用 <code>ADD</code> 指令从远程 URL 获取包，而是使用 <code>curl</code> 和 <code>wget</code>。这样你可以在文件提取完之后删掉不再需要的文件来避免在镜像中额外添加一层。比如尽量避免下面的用法：</p><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">ADD</span> http://example.com/big.tar.xz /usr/src/things/</span>

<span class="token instruction"><span class="token keyword">RUN</span> tar -xJf /usr/src/things/big.tar.xz -C /usr/src/things</span>

<span class="token instruction"><span class="token keyword">RUN</span> make -C /usr/src/things all</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而是应该使用下面这种方法：</p><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">RUN</span> mkdir -p /usr/src/things <span class="token operator">\\</span>
    &amp;&amp; curl -SL http://example.com/big.tar.xz <span class="token operator">\\</span>
    | tar -xJC /usr/src/things <span class="token operator">\\</span>
    &amp;&amp; make -C /usr/src/things all</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面使用的管道操作，所以没有中间文件需要删除。</p><p>对于其他不需要 <code>ADD</code> 的自动提取功能的文件或目录，你应该使用 <code>COPY</code>。</p><h3 id="entrypoint" tabindex="-1"><a class="header-anchor" href="#entrypoint"><span>ENTRYPOINT</span></a></h3><p><code>ENTRYPOINT</code> 的最佳用处是设置镜像的主命令，允许将镜像当成命令本身来运行（用 <code>CMD</code> 提供默认选项）。</p><p>例如，下面的示例镜像提供了命令行工具 <code>s3cmd</code>:</p><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">ENTRYPOINT</span> [<span class="token string">&quot;s3cmd&quot;</span>]</span>

<span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">&quot;--help&quot;</span>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在直接运行该镜像创建的容器会显示命令帮助：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> run s3cmd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者提供正确的参数来执行某个命令：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> run s3cmd <span class="token function">ls</span> s3://mybucket
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样镜像名可以当成命令行的参考。</p><p><code>ENTRYPOINT</code> 指令也可以结合一个辅助脚本使用，和前面命令行风格类似，即使启动工具需要不止一个步骤。</p><p>例如，<code>Postgres</code> 官方镜像使用下面的脚本作为 <code>ENTRYPOINT</code>：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-e</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&#39;postgres&#39;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token function">chown</span> <span class="token parameter variable">-R</span> postgres <span class="token string">&quot;<span class="token variable">$PGDATA</span>&quot;</span>

    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">ls</span> <span class="token parameter variable">-A</span> <span class="token string">&quot;<span class="token variable">$PGDATA</span>&quot;</span><span class="token variable">)</span></span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        gosu postgres initdb
    <span class="token keyword">fi</span>

    <span class="token builtin class-name">exec</span> gosu postgres <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
<span class="token keyword">fi</span>

<span class="token builtin class-name">exec</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意：该脚本使用了 Bash 的内置命令 exec，所以最后运行的进程就是容器的 PID 为 1 的进程。这样，进程就可以接收到任何发送给容器的 Unix 信号了。</p></blockquote><p>该辅助脚本被拷贝到容器，并在容器启动时通过 <code>ENTRYPOINT</code> 执行：</p><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">COPY</span> ./docker-entrypoint.sh /</span>

<span class="token instruction"><span class="token keyword">ENTRYPOINT</span> [<span class="token string">&quot;/docker-entrypoint.sh&quot;</span>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该脚本可以让用户用几种不同的方式和 <code>Postgres</code> 交互。</p><p>你可以很简单地启动 <code>Postgres</code>：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> run postgres
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>也可以执行 <code>Postgres</code> 并传递参数：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> run postgres postgres <span class="token parameter variable">--help</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>最后，你还可以启动另外一个完全不同的工具，比如 <code>Bash</code>：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> run <span class="token parameter variable">--rm</span> <span class="token parameter variable">-it</span> postgres <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="volume" tabindex="-1"><a class="header-anchor" href="#volume"><span>VOLUME</span></a></h3><p><code>VOLUME</code> 指令用于暴露任何数据库存储文件，配置文件，或容器创建的文件和目录。强烈建议使用 <code>VOLUME</code> 来管理镜像中的可变部分和用户可以改变的部分。</p><h3 id="user" tabindex="-1"><a class="header-anchor" href="#user"><span>USER</span></a></h3><p>如果某个服务不需要特权执行，建议使用 <code>USER</code> 指令切换到非 root 用户。先在 <code>Dockerfile</code> 中使用类似 <code>RUN groupadd -r postgres &amp;&amp; useradd -r -g postgres postgres</code> 的指令创建用户和用户组。</p><blockquote><p>注意：在镜像中，用户和用户组每次被分配的 UID/GID 都是不确定的，下次重新构建镜像时被分配到的 UID/GID 可能会不一样。如果要依赖确定的 UID/GID，你应该显式的指定一个 UID/GID。</p></blockquote>`,70)),n("p",null,[e[15]||(e[15]=s("你应该避免使用 ")),e[16]||(e[16]=n("code",null,"sudo",-1)),e[17]||(e[17]=s("，因为它不可预期的 TTY 和信号转发行为可能造成的问题比它能解决的问题还多。如果你真的需要和 ")),e[18]||(e[18]=n("code",null,"sudo",-1)),e[19]||(e[19]=s(" 类似的功能（例如，以 root 权限初始化某个守护进程，以非 root 权限执行它），你可以使用 ")),n("a",g,[e[14]||(e[14]=s("gosu")),a(o)]),e[20]||(e[20]=s("。"))]),e[28]||(e[28]=d('<p>最后，为了减少层数和复杂度，避免频繁地使用 <code>USER</code> 来回切换用户。</p><h3 id="workdir" tabindex="-1"><a class="header-anchor" href="#workdir"><span>WORKDIR</span></a></h3><p>为了清晰性和可靠性，你应该总是在 <code>WORKDIR</code> 中使用绝对路径。另外，你应该使用 <code>WORKDIR</code> 来替代类似于 <code>RUN cd ... &amp;&amp; do-something</code> 的指令，后者难以阅读、排错和维护。</p><h2 id="官方镜像示例" tabindex="-1"><a class="header-anchor" href="#官方镜像示例"><span>官方镜像示例</span></a></h2>',4)),n("p",null,[e[22]||(e[22]=s("这些官方镜像的 Dockerfile 都是参考典范：")),n("a",h,[e[21]||(e[21]=s("https://github.com/docker-library/docs")),a(o)])])])}const N=c(u,[["render",f],["__file","best_practices.html.vue"]]),q=JSON.parse('{"path":"/index/Docker/appendix/best_practices.html","title":"Dockerfile 最佳实践","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"一般性的指南和建议","slug":"一般性的指南和建议","link":"#一般性的指南和建议","children":[{"level":3,"title":"容器应该是短暂的","slug":"容器应该是短暂的","link":"#容器应该是短暂的","children":[]},{"level":3,"title":"使用 .dockerignore 文件","slug":"使用-dockerignore-文件","link":"#使用-dockerignore-文件","children":[]},{"level":3,"title":"使用多阶段构建","slug":"使用多阶段构建","link":"#使用多阶段构建","children":[]},{"level":3,"title":"避免安装不必要的包","slug":"避免安装不必要的包","link":"#避免安装不必要的包","children":[]},{"level":3,"title":"一个容器只运行一个进程","slug":"一个容器只运行一个进程","link":"#一个容器只运行一个进程","children":[]},{"level":3,"title":"镜像层数尽可能少","slug":"镜像层数尽可能少","link":"#镜像层数尽可能少","children":[]},{"level":3,"title":"将多行参数排序","slug":"将多行参数排序","link":"#将多行参数排序","children":[]},{"level":3,"title":"构建缓存","slug":"构建缓存","link":"#构建缓存","children":[]}]},{"level":2,"title":"Dockerfile 指令","slug":"dockerfile-指令","link":"#dockerfile-指令","children":[{"level":3,"title":"FROM","slug":"from","link":"#from","children":[]},{"level":3,"title":"LABEL","slug":"label","link":"#label","children":[]},{"level":3,"title":"RUN","slug":"run","link":"#run","children":[{"level":4,"title":"apt-get","slug":"apt-get","link":"#apt-get","children":[]}]},{"level":3,"title":"CMD","slug":"cmd","link":"#cmd","children":[]},{"level":3,"title":"EXPOSE","slug":"expose","link":"#expose","children":[]},{"level":3,"title":"ENV","slug":"env","link":"#env","children":[]},{"level":3,"title":"ADD 和 COPY","slug":"add-和-copy","link":"#add-和-copy","children":[]},{"level":3,"title":"ENTRYPOINT","slug":"entrypoint","link":"#entrypoint","children":[]},{"level":3,"title":"VOLUME","slug":"volume","link":"#volume","children":[]},{"level":3,"title":"USER","slug":"user","link":"#user","children":[]},{"level":3,"title":"WORKDIR","slug":"workdir","link":"#workdir","children":[]}]},{"level":2,"title":"官方镜像示例","slug":"官方镜像示例","link":"#官方镜像示例","children":[]}],"git":{"createdTime":1731129855000,"updatedTime":1731129855000,"contributors":[{"name":"dkyg666","email":"43946866+dkyg666@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":12.67,"words":3801},"filePathRelative":"index/Docker/appendix/best_practices.md","localizedDate":"2024年11月9日","excerpt":"\\n<p>本附录是笔者对 Docker 官方文档中 <a href=\\"https://docs.docker.com/develop/develop-images/dockerfile_best-practices/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Best practices for writing Dockerfiles</a> 的理解与翻译。</p>\\n<h2>一般性的指南和建议</h2>\\n<h3>容器应该是短暂的</h3>\\n<p>通过 <code>Dockerfile</code> 构建的镜像所启动的容器应该尽可能短暂（生命周期短）。「短暂」意味着可以停止和销毁容器，并且创建一个新容器并部署好所需的设置和配置工作量应该是极小的。</p>"}');export{N as comp,q as data};
