(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{567:function(s,n,t){"use strict";t.r(n);var a=t(6),e=Object(a.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("blockquote",[t("p",[s._v("Nginx是一个异步框架的Web服务器，也可以用作反向代理，负载平衡器 和 HTTP缓存。该软件由Igor Sysoev 创建，并于2004年首次公开发布。 同名公司成立于2011年，以提供支持。 Nginx是一款免费的开源软件，根据类BSD许可证的条款发布。"),t("a",{attrs:{href:"https://zh.wikipedia.org/zh-cn/Nginx",target:"_blank",rel:"noopener noreferrer"}},[s._v("维基百科"),t("OutboundLink")],1)])]),s._v(" "),t("p",[s._v("虽说 Nginx 一般都是由后端来配置的，但是如果你想成为一个全栈或者一个有追求的前端的话，了解一下 Nginx 还是很有必要的。如果没有服务器的话，自己可以装一个 Linux 虚拟机练下手。这里我用的 CentOS7 64位的系统来做演示。")]),s._v(" "),t("h3",{attrs:{id:"虚拟机安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#虚拟机安装"}},[s._v("#")]),s._v(" 虚拟机安装")]),s._v(" "),t("p",[s._v("这篇文章主要是介绍 Nginx 的，关于 Mac 安装 CentOS 虚拟机的教程可以参考这篇文章 "),t("a",{attrs:{href:"https://my.oschina.net/u/563848/blog/414818",target:"_blank",rel:"noopener noreferrer"}},[s._v("Mac Pro 上用 Vmware Fusion 7.1.1 安装 CentOS7"),t("OutboundLink")],1),s._v("，其他系统就自行查找了。安装好之后可以输入 "),t("code",[s._v("ping baidu.com")]),s._v(" 测试一下网络是不是正常的。")]),s._v(" "),t("h3",{attrs:{id:"ssh-登录虚拟机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ssh-登录虚拟机"}},[s._v("#")]),s._v(" SSH 登录虚拟机")]),s._v(" "),t("p",[s._v("虚拟机安装好了之后我一般会用 terminal 连接虚拟机，因为想粘贴一些长命令时不是很好操作。使用命令 "),t("code",[s._v("ssh rootName@ip")]),s._v("，如下图所示")]),s._v(" "),t("p",[t("img",{attrs:{src:"/imgs/nginx/0.png",alt:"iterm"}})]),s._v(" "),t("p",[s._v("获取虚拟机的 IP 地址，可以在 VMware 的窗口输入 "),t("code",[s._v("ifconfig")]),s._v("，如果提示 "),t("code",[s._v("ifconfig command not found")]),s._v("，可以参考这篇文章"),t("a",{attrs:{href:"https://my.oschina.net/u/1428349/blog/288708",target:"_blank",rel:"noopener noreferrer"}},[s._v("CentOS 7 下 ifconfig command not found 解决办法"),t("OutboundLink")],1)]),s._v(" "),t("h3",{attrs:{id:"安装-nginx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-nginx"}},[s._v("#")]),s._v(" 安装 Nginx")]),s._v(" "),t("p",[s._v("Nginx 安装也十分简单，输入 "),t("code",[s._v("yum install -y nginx")]),s._v("，如果无法安装，则先执行这条命令 "),t("code",[s._v("rpm -ivh http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm")]),s._v(" 安装 Nginx 源。然后再输入 "),t("code",[s._v("yum install -y nginx")]),s._v("。安装好之后可以输入 "),t("code",[s._v("whereis nginx")]),s._v(" 查看 Nginx 的默认目录。输入 "),t("code",[s._v("nginx")]),s._v(" 启动服务，然后在浏览器输入虚拟机的 IP 地址进行访问，如果无法访问的话，应该就是虚拟机的防火墙没有开启80端口，输入 "),t("code",[s._v("firewall-cmd --permanent --add-port=80/tcp")]),s._v(" 开启防火墙的80端口，再输入 "),t("code",[s._v("firewall-cmd --reload")]),s._v("。到这里再访问一下虚拟机的 IP 地址，就可以看到 Nginx 的欢迎页面了。参考文章"),t("a",{attrs:{href:"http://www.itmuch.com/install/nginx-yum-install-in-centos7/",target:"_blank",rel:"noopener noreferrer"}},[s._v("在CentOS 7中，使用yum安装Nginx"),t("OutboundLink")],1),s._v("。")]),s._v(" "),t("h3",{attrs:{id:"修改配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改配置文件"}},[s._v("#")]),s._v(" 修改配置文件")]),s._v(" "),t("p",[s._v("输入 "),t("code",[s._v("cd /etc/nginx")]),s._v(" 进入 /etc/nginx 目录，用 "),t("code",[s._v("ls")]),s._v(" 命令可以看到 nginx.conf 这个文件。这个就是 nginx 的配置文件了。用 "),t("code",[s._v("cat nginx.conf")]),s._v(" 命令来看下里面写了什么东西。内容大致如下")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("user  nginx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nworker_processes  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nerror_log  /var/log/nginx/error.log warn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\npid        /var/run/nginx.pid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\nevents "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    worker_connections  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n\nhttp "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    include       /etc/nginx/mime.types"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    default_type  application/octet-stream"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    log_format  main  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'$remote_addr - $remote_user [$time_local] \"$request\" '")]),s._v("\n                      "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'$status $body_bytes_sent \"$http_referer\" '")]),s._v("\n                      "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'"$http_user_agent" "$http_x_forwarded_for"\'')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    access_log  /var/log/nginx/access.log  main"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    sendfile        on"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#tcp_nopush     on;")]),s._v("\n\n    keepalive_timeout  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("65")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#gzip  on;")]),s._v("\n\n    include /etc/nginx/conf.d/*.conf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br")])]),t("p",[s._v("主要配置内容还是在之后一句 "),t("code",[s._v("include /etc/nginx/conf.d/*.conf;")]),s._v(" 接下来在进入 /etc/nginx/conf.d/ 目录看下有什么东西。同样用 "),t("code",[s._v("ls")]),s._v(" 命令可以看到一个 default.conf 文件，内容大致如下")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("server "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    listen       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    server_name  localhost"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#charset koi8-r;")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#access_log  /var/log/nginx/host.access.log  main;")]),s._v("\n\n    location / "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        root   /usr/share/nginx/html"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        index  index.html index.htm"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#error_page  404              /404.html;")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# redirect server error pages to the static page /50x.html")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n    error_page   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("502")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("503")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("504")]),s._v("  /50x.html"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    location "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /50x.html "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        root   /usr/share/nginx/html"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# proxy the PHP scripts to Apache listening on 127.0.0.1:80")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#location ~ \\.php$ {")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    proxy_pass   http://127.0.0.1;")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#}")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#location ~ \\.php$ {")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    root           html;")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    fastcgi_pass   127.0.0.1:9000;")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    fastcgi_index  index.php;")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    include        fastcgi_params;")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#}")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# deny access to .htaccess files, if Apache's document root")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# concurs with nginx's one")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#location ~ /\\.ht {")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    deny  all;")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br")])]),t("p",[s._v("可以看到这个服务在监听 80 端口，root 指向项目根目录，即我们访问 localhost （默认为80端口）时，将会查找 /usr/share/nginx/html 这个目录下的文件。我自己的配置一般如下")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("server "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    listen "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    server_name domain"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#使用域名或 IP 地址")]),s._v("\n\n    charset utf8"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#字符编码")]),s._v("\n    access_log /path/folder/access.log main"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#访问日志")]),s._v("\n    error_log /path/folder/error.log error"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#错误日志")]),s._v("\n\n    root /path/folder"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    index index.html"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("日志文件需要我们到对应目录下创建对应的 log 文件，修改完配置文件可以使用 "),t("code",[s._v("nginx -s reload")]),s._v(" 重启服务。")]),s._v(" "),t("hr"),s._v(" "),t("p",[s._v("如果你喜欢我的文章，希望可以关注一下我的公众号【前端develop】")]),s._v(" "),t("p",[t("img",{attrs:{src:"/imgs/qrcode.png",alt:"前端develop"}})])])}),[],!1,null,null,null);n.default=e.exports}}]);