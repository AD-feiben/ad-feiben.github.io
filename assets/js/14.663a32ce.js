(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{562:function(s,a,n){"use strict";n.r(a);var e=n(6),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("如果还未了解过 Docker, 建议先阅读上一篇文章 "),n("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzIyMDQyNTc3OA==&mid=2247483767&idx=1&sn=fbf540263518d02ad6fb05d4d9ba1801&chksm=97cd7a2aa0baf33c9c8476654733d5ae136d12daa2524d2d711483921146bd563e9ca54cec79&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[s._v("初识 Docker"),n("OutboundLink")],1),s._v("。")]),s._v(" "),n("hr"),s._v(" "),n("p",[s._v("仓库（Repository）就是存放镜像的地方。类似于 "),n("code",[s._v("Node")]),s._v(" 的 "),n("code",[s._v("npm")]),s._v("； "),n("code",[s._v("Python")]),s._v(" 的 "),n("code",[s._v("PyPi")]),s._v("。")]),s._v(" "),n("p",[s._v("注册服务器（Registry）的概念比较容易与仓库混淆。实际上注册服务器是用来管理仓库的服务器，一个服务器上可以存在多个仓库，而每个仓库下可以有多个镜像。")]),s._v(" "),n("p",[s._v("例如对于仓库地址 "),n("code",[s._v("hub.dockerpool.com/nginx")]),s._v(" 来说，"),n("code",[s._v("hub.dockerpool.com")]),s._v(" 是注册服务器的地址，"),n("code",[s._v("nginx")]),s._v(" 是仓库名。")]),s._v(" "),n("h2",{attrs:{id:"docker-hub"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker-hub"}},[s._v("#")]),s._v(" Docker Hub")]),s._v(" "),n("p",[s._v("目前 Docker 官方维护的一个公共仓库，大部分需求我们都可以从 Docker Hub 中直接下载镜像来实现。")]),s._v(" "),n("h3",{attrs:{id:"注册"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#注册"}},[s._v("#")]),s._v(" 注册")]),s._v(" "),n("p",[s._v("我们可以在 https://hub.docker.com/ 注册一个 Docker 账号。")]),s._v(" "),n("h3",{attrs:{id:"登录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#登录"}},[s._v("#")]),s._v(" 登录")]),s._v(" "),n("p",[s._v("可以通过 "),n("code",[s._v("docker login")]),s._v(" 命令在终端输入用户名及密码来完成 Docker Hub 的登录。")]),s._v(" "),n("p",[s._v("我们也可以通过 "),n("code",[s._v("docker logout")]),s._v(" 退出登录。")]),s._v(" "),n("h3",{attrs:{id:"镜像分类"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#镜像分类"}},[s._v("#")]),s._v(" 镜像分类")]),s._v(" "),n("p",[s._v("通过上一篇文章可以知道，使用 "),n("code",[s._v("docker search")]),s._v(" 搜索镜像时，搜索出来可以看到下面的镜像列表。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ docker search nginx\nNAME                              DESCRIPTION                                     STARS               OFFICIAL            AUTOMATED\nnginx                             Official build of Nginx.                        "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("12036")]),s._v("               "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OK"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\njwilder/nginx-proxy               Automated Nginx reverse proxy "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" docker con…   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1671")]),s._v("                                    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OK"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nricharvey/nginx-php-fpm           Container running Nginx + PHP-FPM capable of…   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("742")]),s._v("                                     "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OK"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nlinuxserver/nginx                 An Nginx container, brought to you by LinuxS…   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("78")]),s._v("\nbitnami/nginx                     Bitnami nginx Docker Image                      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("71")]),s._v("                                      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OK"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\ntiangolo/nginx-rtmp               Docker image with Nginx using the nginx-rtmp…   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("56")]),s._v("                                      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OK"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nnginxdemos/hello                  NGINX webserver that serves a simple page co…   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("28")]),s._v("                                      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OK"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\njlesage/nginx-proxy-manager       Docker container "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" Nginx Proxy Manager        "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),s._v("                                      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OK"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\njc21/nginx-proxy-manager          Docker container "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" managing Nginx proxy ho…   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),s._v("\nnginx/nginx-ingress               NGINX Ingress Controller "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" Kubernetes         "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v("\nprivatebin/nginx-fpm-alpine       PrivateBin running on an Nginx, php-fpm "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" Al…   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v("                                      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OK"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nschmunk42/nginx-redirect          A very simple container to redirect HTTP tra…   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v("                                      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OK"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nblacklabelops/nginx               Dockerized Nginx Reverse Proxy Server.          "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v("                                      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OK"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("p",[s._v("根据是否是官方提供，可以将镜像分为两类。")]),s._v(" "),n("p",[s._v("一类是类似 "),n("code",[s._v("nginx")]),s._v(" 这样的镜像，被称为基础镜像或跟镜像。这些基础镜像由 Docker 公司创建、验证、支持、提供。这样的镜像往往使用单个单词作为名字。")]),s._v(" "),n("p",[s._v("还有一种类型，比如 "),n("code",[s._v("feiben/nginx")]),s._v(" 镜像，它是由 Docker Hub 的注册用户创建并维护的，往往带有用户名称前缀。可以通过前缀 "),n("code",[s._v("username/")]),s._v(" 来指定使用某个用户提供的镜像，比如 "),n("code",[s._v("feiben")]),s._v(" 用户。")]),s._v(" "),n("h3",{attrs:{id:"推送镜像"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#推送镜像"}},[s._v("#")]),s._v(" 推送镜像")]),s._v(" "),n("p",[s._v("用户登录后可以通过 "),n("code",[s._v("docker push")]),s._v(" 命令来把自己的镜像推送到 Docker Hub，例如将 "),n("code",[s._v("nginx")]),s._v(" 镜像改成我们自己的镜像，然后推送到 Docker Hub。")]),s._v(" "),n("p",[s._v("首先通过 "),n("code",[s._v("docker pull nginx")]),s._v(" 将 "),n("code",[s._v("nginx")]),s._v(" 镜像下载到本地。")]),s._v(" "),n("p",[s._v("给 "),n("code",[s._v("nginx")]),s._v(" 添加标签 "),n("code",[s._v("docker tag nginx feiben/nginx:1.17.5")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ docker images\nREPOSITORY          TAG                 IMAGE ID            CREATED             SIZE\nfeiben/nginx        "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.17")]),s._v(".5              f949e7d76d63        "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" weeks ago         126MB\nnginx               latest              f949e7d76d63        "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" weeks ago         126MB\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("将自己的镜像推送到 Docker Hub")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ docker push feiben/nginx:1.17.5\nThe push refers to repository "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("docker.io/feiben/nginx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n509a5ea4aeeb: Mounted from library/nginx\n3bb51901dfa3: Mounted from library/nginx\n2db44bce66cd: Mounted from library/nginx\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.17")]),s._v(".5: digest: sha256:066edc156bcada86155fd80ae03667cf3811c499df73815a2b76e43755ebbc76 size: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("948")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("稍等片刻，我们就可以搜索出推送的镜像了")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ docker search feiben\nNAME                DESCRIPTION         STARS               OFFICIAL            AUTOMATED\nfeiben/nginx                            "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h3",{attrs:{id:"自动构建"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自动构建"}},[s._v("#")]),s._v(" 自动构建")]),s._v(" "),n("p",[s._v("我们可以通过 Docker Hub 指定跟踪一个目标网站（支持 GitHub 或 BitBucket）上的项目，项目一旦有新的提交或者创建了新标签，将会触发 Docker Hub 自动构建镜像并推送到 Docker Hub中。")]),s._v(" "),n("p",[s._v("设置自动构建的步骤如下：")]),s._v(" "),n("ol",[n("li",[s._v("登录 Docker Hub")]),s._v(" "),n("li",[s._v("点击头像，选择 Account Setting 再选择 Linked Accounts 管理账号")]),s._v(" "),n("li",[s._v("在 Docker Hub 中新建或选择已有的仓库，在 Builds 选项卡中选择 Configure Automated Builds")]),s._v(" "),n("li",[s._v("选取一个目标网站中的项目（需要含 Dockerfile）和分支")]),s._v(" "),n("li",[s._v("指定 Dockerfile 的位置，并保存")])]),s._v(" "),n("p",[s._v("完成自动构建配置之后，指定的分支一旦提交代码就会触发自动构建，我们可以在仓库页面的 Timeline 选项卡中查看每次构建的状态。")]),s._v(" "),n("p",[s._v("除了 Docker Hub 的自动构建外，我们也可以使用 Travis CI 等持续集成工具来实现自动构建。")]),s._v(" "),n("h2",{attrs:{id:"私有仓库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#私有仓库"}},[s._v("#")]),s._v(" 私有仓库")]),s._v(" "),n("p",[s._v("公司的项目一般不予许我们上传到 Docker Hub 这类的公共仓库中，所有学会创建一个私有仓库也是非常必要的。")]),s._v(" "),n("h3",{attrs:{id:"容器运行"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#容器运行"}},[s._v("#")]),s._v(" 容器运行")]),s._v(" "),n("p",[s._v("我们可以通过获取官方的 "),n("code",[s._v("registry")]),s._v(" 镜像来运行。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ docker run -d -p "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5000")]),s._v(":5000 --restart"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("always --name registry registry\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("这将使用官方提供的 "),n("code",[s._v("registry")]),s._v(" 镜像来启动私有仓库。默认情况下，仓库会被创建在容器的 "),n("code",[s._v("/var/lib/registry")]),s._v(" 目录下。我们可以通过 "),n("code",[s._v("-v")]),s._v(" 参数将镜像文件存放在本地的指定路径。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ docker run -d "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" -p "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5000")]),s._v(":5000 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" -v /opt/data/registry:/var/lib/registry "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" --restart"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("always "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" registry\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("这时我们可以通过浏览器访问 "),n("code",[s._v("http://domain:5000/v2/_catalog")]),s._v(" 查看仓库是否启动成功。")]),s._v(" "),n("ul",[n("li",[s._v("其中 "),n("code",[s._v("domain")]),s._v(" 是你的域名或 ip 地址，下文中的 "),n("code",[s._v("domain")]),s._v(" 同理。")])]),s._v(" "),n("h3",{attrs:{id:"在私有仓库搜索、上传、下载镜像"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#在私有仓库搜索、上传、下载镜像"}},[s._v("#")]),s._v(" 在私有仓库搜索、上传、下载镜像")]),s._v(" "),n("h4",{attrs:{id:"上传镜像"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#上传镜像"}},[s._v("#")]),s._v(" 上传镜像")]),s._v(" "),n("p",[s._v("首先使用 "),n("code",[s._v("docker tag")]),s._v(" 将本地的 "),n("code",[s._v("nginx")]),s._v(" 镜像添加标签")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ docker tag nginx:latest domain/nginx:latest\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("接下来就可以使用 "),n("code",[s._v("docker push")]),s._v(" 命令将镜像推送到我们的私有仓库中")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ docker push domain/nginx:latest\nThe push refers to repository "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("domain/nginx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nGet https://domain/v2/: EOF\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("出现上面的提示时，说明推送失败了。因为 Docker 默认使用 HTTPS 的方式推送镜像。我们可以通过 Docker 的配置来取消这个限制。")]),s._v(" "),n("p",[s._v("对于 Linux 系统，我们可以在 "),n("code",[s._v("/etc/docker/deamon.json")]),s._v(" （"),n("code",[s._v("deamon.josn")]),s._v(" 文件不存在则新建该文件）添加下面的配置")]),s._v(" "),n("div",{staticClass:"language-json line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"insecure-registries"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"domain:5000"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("对于桌面版，我们可以在 Docker 的设置 "),n("code",[s._v("Daemon")]),s._v(" 选项中的 "),n("code",[s._v("Insecure registries")]),s._v(" 中加上 "),n("code",[s._v("domain:5000")]),s._v("。")]),s._v(" "),n("p",[s._v("【注】如果仓库主机是远程服务器的话，需要将服务器与本地的 docker 配置进行修改")]),s._v(" "),n("p",[s._v("设置完成后再使用上面的命令进行推送。除了上面这种方式外，我们也可以将私有仓库的地址配置成支持 "),n("code",[s._v("HTTPS")]),s._v(" 访问的，本文就不作展开了。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ docker push domain:5000/nginx:latest\nThe push refers to repository "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("domain:5000/nginx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n509a5ea4aeeb: Pushed\n3bb51901dfa3: Pushed\n2db44bce66cd: Pushed\nlatest: digest: sha256:066edc156bcada86155fd80ae03667cf3811c499df73815a2b76e43755ebbc76 size: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("948")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("当看到上面的信息时，说明已经推送成功了。我们可以再次访问 "),n("code",[s._v("http://domain:5000/v2/_catalog")]),s._v(" 进行验证")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" http://domain:5000/v2/_catalog\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"repositories"')]),s._v(":"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nginx"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("看到这个说明上传成功了。")]),s._v(" "),n("h4",{attrs:{id:"搜索镜像"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#搜索镜像"}},[s._v("#")]),s._v(" 搜索镜像")]),s._v(" "),n("p",[s._v("搜索私有仓库的镜像并不能用 "),n("code",[s._v("docker search")]),s._v(" 命令, 只能通过 "),n("code",[s._v("http://domain:5000/v2/image_name/tags/list")]),s._v(" 查看指定镜像存在的 "),n("code",[s._v("tag")]),s._v(" 列表")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" domain:5000/v2/nginx/tags/list\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nginx"')]),s._v(","),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tags"')]),s._v(":"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"latest"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h4",{attrs:{id:"下载镜像"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#下载镜像"}},[s._v("#")]),s._v(" 下载镜像")]),s._v(" "),n("p",[s._v("首先我们通过 "),n("code",[s._v("docker rmi")]),s._v(" 将本地的镜像删除（取消标签）。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ docker rmi domain:5000/nginx\nUntagged: domain:5000/nginx:latest\nUntagged: domain:5000/nginx@sha256:066edc156bcada86155fd80ae03667cf3811c499df73815a2b76e43755ebbc76\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("再使用 "),n("code",[s._v("docker images")]),s._v(" 确认 "),n("code",[s._v("domain:5000/nginx")]),s._v(" 这个镜像在本地不存在，接下来我们就可以从私有仓库进行下载。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ docker pull domain:5000/nginx:latest\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("除了使用官方提供的 Registry，我们也可以使用 Nexus3.x 来创建仓库，关于如何使用 Nexus 版本的仓库将放到下一篇文章中。当然你也可以从 https://docker_practice.gitee.io/zh-cn/repository/nexus3_registry.html 学习。")]),s._v(" "),n("hr"),s._v(" "),n("p",[s._v("如果你喜欢我的文章，希望可以关注一下我的公众号【前端develop】")]),s._v(" "),n("p",[n("img",{attrs:{src:"/imgs/qrcode.png",alt:"前端develop"}})])])}),[],!1,null,null,null);a.default=t.exports}}]);