import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,e as n,b as t,d as s,a,o as r,r as c}from"./app-BAGG9h-A.js";const o={},v={href:"https://github.com/etcd-io/etcd/releases",target:"_blank",rel:"noopener noreferrer"};function u(m,e){const i=c("ExternalLinkIcon");return r(),l("div",null,[e[6]||(e[6]=n('<h1 id="使用-etcdctl" tabindex="-1"><a class="header-anchor" href="#使用-etcdctl"><span>使用 etcdctl</span></a></h1><p><code>etcdctl</code> 是一个命令行客户端，它能提供一些简洁的命令，供用户直接跟 <code>etcd</code> 服务打交道，而无需基于 <code>HTTP API</code> 方式。这在某些情况下将很方便，例如用户对服务进行测试或者手动修改数据库内容。我们也推荐在刚接触 <code>etcd</code> 时通过 <code>etcdctl</code> 命令来熟悉相关的操作，这些操作跟 <code>HTTP API</code> 实际上是对应的。</p>',2)),t("p",null,[e[1]||(e[1]=t("code",null,"etcd",-1)),e[2]||(e[2]=s(" 项目二进制发行包中已经包含了 ")),e[3]||(e[3]=t("code",null,"etcdctl",-1)),e[4]||(e[4]=s(" 工具，没有的话，可以从 ")),t("a",v,[e[0]||(e[0]=s("github.com/etcd-io/etcd/releases")),a(i)]),e[5]||(e[5]=s(" 下载。"))]),e[7]||(e[7]=n(`<p><code>etcdctl</code> 支持如下的命令，大体上分为数据库操作和非数据库操作两类，后面将分别进行解释。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>NAME:
	etcdctl - A simple command line client for etcd3.

USAGE:
	etcdctl

VERSION:
	3.4.0

API VERSION:
	3.4


COMMANDS:
	get			Gets the key or a range of keys
	put			Puts the given key into the store
	del			Removes the specified key or range of keys [key, range_end)
	txn			Txn processes all the requests in one transaction
	compaction		Compacts the event history in etcd
	alarm disarm		Disarms all alarms
	alarm list		Lists all alarms
	defrag			Defragments the storage of the etcd members with given endpoints
	endpoint health		Checks the healthiness of endpoints specified in \`--endpoints\` flag
	endpoint status		Prints out the status of endpoints specified in \`--endpoints\` flag
	watch			Watches events stream on keys or prefixes
	version			Prints the version of etcdctl
	lease grant		Creates leases
	lease revoke		Revokes leases
	lease timetolive	Get lease information
	lease keep-alive	Keeps leases alive (renew)
	member add		Adds a member into the cluster
	member remove		Removes a member from the cluster
	member update		Updates a member in the cluster
	member list		Lists all members in the cluster
	snapshot save		Stores an etcd node backend snapshot to a given file
	snapshot restore	Restores an etcd member snapshot to an etcd directory
	snapshot status		Gets backend snapshot status of a given file
	make-mirror		Makes a mirror at the destination etcd cluster
	migrate			Migrates keys in a v2 store to a mvcc store
	lock			Acquires a named lock
	elect			Observes and participates in leader election
	auth enable		Enables authentication
	auth disable		Disables authentication
	user add		Adds a new user
	user delete		Deletes a user
	user get		Gets detailed information of a user
	user list		Lists all users
	user passwd		Changes password of user
	user grant-role		Grants a role to a user
	user revoke-role	Revokes a role from a user
	role add		Adds a new role
	role delete		Deletes a role
	role get		Gets detailed information of a role
	role list		Lists all roles
	role grant-permission	Grants a key to a role
	role revoke-permission	Revokes a key from a role
	check perf		Check the performance of the etcd cluster
	help			Help about any command

OPTIONS:
      --cacert=&quot;&quot;				verify certificates of TLS-enabled secure servers using this CA bundle
      --cert=&quot;&quot;					identify secure client using this TLS certificate file
      --command-timeout=5s			timeout for short running command (excluding dial timeout)
      --debug[=false]				enable client-side debug logging
      --dial-timeout=2s				dial timeout for client connections
      --endpoints=[127.0.0.1:2379]		gRPC endpoints
      --hex[=false]				print byte strings as hex encoded strings
      --insecure-skip-tls-verify[=false]	skip server certificate verification
      --insecure-transport[=true]		disable transport security for client connections
      --key=&quot;&quot;					identify secure client using this TLS key file
      --user=&quot;&quot;					username[:password] for authentication (prompt if password is not supplied)
  -w, --write-out=&quot;simple&quot;			set the output format (fields, json, protobuf, simple, table)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据库操作" tabindex="-1"><a class="header-anchor" href="#数据库操作"><span>数据库操作</span></a></h2><p>数据库操作围绕对键值和目录的 CRUD （符合 REST 风格的一套操作：Create）完整生命周期的管理。</p><p>etcd 在键的组织上采用了层次化的空间结构（类似于文件系统中目录的概念），用户指定的键可以为单独的名字，如 <code>testkey</code>，此时实际上放在根目录 <code>/</code> 下面，也可以为指定目录结构，如 <code>cluster1/node2/testkey</code>，则将创建相应的目录结构。</p><blockquote><p>注：CRUD 即 Create, Read, Update, Delete，是符合 REST 风格的一套 API 操作。</p></blockquote><h3 id="put" tabindex="-1"><a class="header-anchor" href="#put"><span>put</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ etcdctl put /testdir/testkey <span class="token string">&quot;Hello world&quot;</span>
OK
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="get" tabindex="-1"><a class="header-anchor" href="#get"><span>get</span></a></h3><p>获取指定键的值。例如</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ etcdctl put testkey hello
OK
$ etcdctl get testkey
testkey
hello
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>支持的选项为</p><p><code>--sort</code> 对结果进行排序</p><p><code>--consistent</code> 将请求发给主节点，保证获取内容的一致性</p><h3 id="del" tabindex="-1"><a class="header-anchor" href="#del"><span>del</span></a></h3><p>删除某个键值。例如</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ etcdctl del testkey
<span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="非数据库操作" tabindex="-1"><a class="header-anchor" href="#非数据库操作"><span>非数据库操作</span></a></h2><h3 id="watch" tabindex="-1"><a class="header-anchor" href="#watch"><span>watch</span></a></h3><p>监测一个键值的变化，一旦键值发生更新，就会输出最新的值。</p><p>例如，用户更新 <code>testkey</code> 键值为 <code>Hello world</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ etcdctl <span class="token function">watch</span> testkey
PUT
testkey
<span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="member" tabindex="-1"><a class="header-anchor" href="#member"><span>member</span></a></h3><p>通过 <code>list</code>、<code>add</code>、<code>update</code>、<code>remove</code> 命令列出、添加、更新、删除 etcd 实例到 etcd 集群中。</p><p>例如本地启动一个 <code>etcd</code> 服务实例后，可以用如下命令进行查看。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ etcdctl member list
422a74f03b622fef, started, node1, http://172.16.238.100:2380, http://172.16.238.100:23
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,26))])}const h=d(o,[["render",u],["__file","etcdctl.html.vue"]]),g=JSON.parse('{"path":"/index/Docker/etcd/etcdctl.html","title":"使用 etcdctl","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"数据库操作","slug":"数据库操作","link":"#数据库操作","children":[{"level":3,"title":"put","slug":"put","link":"#put","children":[]},{"level":3,"title":"get","slug":"get","link":"#get","children":[]},{"level":3,"title":"del","slug":"del","link":"#del","children":[]}]},{"level":2,"title":"非数据库操作","slug":"非数据库操作","link":"#非数据库操作","children":[{"level":3,"title":"watch","slug":"watch","link":"#watch","children":[]},{"level":3,"title":"member","slug":"member","link":"#member","children":[]}]}],"git":{"createdTime":1731129855000,"updatedTime":1731129855000,"contributors":[{"name":"dkyg666","email":"43946866+dkyg666@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":3.26,"words":978},"filePathRelative":"index/Docker/etcd/etcdctl.md","localizedDate":"2024年11月9日","excerpt":"\\n<p><code>etcdctl</code> 是一个命令行客户端，它能提供一些简洁的命令，供用户直接跟 <code>etcd</code> 服务打交道，而无需基于 <code>HTTP API</code> 方式。这在某些情况下将很方便，例如用户对服务进行测试或者手动修改数据库内容。我们也推荐在刚接触 <code>etcd</code> 时通过 <code>etcdctl</code> 命令来熟悉相关的操作，这些操作跟 <code>HTTP API</code> 实际上是对应的。</p>\\n<p><code>etcd</code> 项目二进制发行包中已经包含了 <code>etcdctl</code> 工具，没有的话，可以从 <a href=\\"https://github.com/etcd-io/etcd/releases\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">github.com/etcd-io/etcd/releases</a> 下载。</p>"}');export{h as comp,g as data};
