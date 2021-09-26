(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{561:function(s,n,a){"use strict";a.r(n);var t=a(6),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("5月13号 Deno 发布了 1.0 版本，Deno 的发布引起了很多人关注。")]),s._v(" "),a("p",[s._v("官网描述 Deno 是一个安全的 JavaScript 和 TypeScript 的运行时。")]),s._v(" "),a("blockquote",[a("p",[s._v("A secure runtime for JavaScript and TypeScript.  ---https://deno.land/")])]),s._v(" "),a("p",[s._v("Deno 的作者 Ryan Dahl (ry) 就是 Node.js 的作者，因为 Node.js 存在设计上存在缺陷，而且 Node.js 拥有大量的用户使得 Node.js 的发展变得困难、缓慢，所以 Ryan Dahl 选择离开 Node.js 开发 Deno。")]),s._v(" "),a("h2",{attrs:{id:"deno-与-node-js-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deno-与-node-js-的区别"}},[s._v("#")]),s._v(" Deno 与 Node.js 的区别")]),s._v(" "),a("h3",{attrs:{id:"异步操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异步操作"}},[s._v("#")]),s._v(" 异步操作")]),s._v(" "),a("p",[s._v("在 Node.js 设计之初，JavaScript 还没有 Promise、async/await 的概念。Node.js 通过回调函数的方式实现异步操作。这就导致了在 Node.js 中存在回调函数和 Promise 两种写法。")]),s._v(" "),a("p",[s._v("而 Deno 所有的异步操作将会返回一个 Promise。")]),s._v(" "),a("h3",{attrs:{id:"模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块"}},[s._v("#")]),s._v(" 模块")]),s._v(" "),a("p",[s._v("Node.js 使用与 ES 模块不兼容的 CommonJS，Deno 使用的则是浏览器一致的 ES 模块。")]),s._v(" "),a("h3",{attrs:{id:"外部模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#外部模块"}},[s._v("#")]),s._v(" 外部模块")]),s._v(" "),a("p",[s._v("Node.js 使用 NPM 管理外部模块，node_modules 极其复杂。")]),s._v(" "),a("p",[s._v("Deno 通过 url 链接外部模块，可以使用绝对路径或相对路径导入模块，因此外部模块可以存放在任意系统，不需要集中存放在类似 NPM 的模块管理中心。")]),s._v(" "),a("p",[s._v("例如：")]),s._v(" "),a("div",{staticClass:"language-Deno line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('import { foo } from "https://foo.com/foo.ts";\nimport { foo } from "./foo.ts";\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("em",[s._v("需要注意的是在 Deno 中使用外部模块不能省略后缀。")])]),s._v(" "),a("p",[s._v("Deno 在首次运行时会将外部模块下载到本地缓存。")]),s._v(" "),a("h3",{attrs:{id:"安全"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安全"}},[s._v("#")]),s._v(" 安全")]),s._v(" "),a("p",[s._v("Node.js 没有任何安全性可言，因此是不是会传出某个 NPM 包中存在恶意代码的消息。")]),s._v(" "),a("p",[s._v("而 Deno 在执行时需要开发者进行对应操作的授权。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 允许所有授权")]),s._v("\n-A, --allow-all                    Allow all permissions\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 允许读取环境变量")]),s._v("\n    --allow-env                    Allow environment access\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 允许高精度时间测量")]),s._v("\n    --allow-hrtime                 Allow high resolution "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),s._v(" measurement\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 允许网络通信，支持指定域名")]),s._v("\n    --allow-net"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("allow-net"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        Allow network access\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 允许加载插件")]),s._v("\n    --allow-plugin                 Allow loading plugins\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 允许文件读操作，可以指定文件")]),s._v("\n    --allow-read"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("allow-read"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("      Allow "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" system "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v(" access\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 允许运行子进程")]),s._v("\n    --allow-run                    Allow running subprocesses\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 允许文件写操作，可以指定文件")]),s._v("\n    --allow-write"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("allow-write"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("    Allow "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" system "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("write")]),s._v(" access\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("h3",{attrs:{id:"支持-typescript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#支持-typescript"}},[s._v("#")]),s._v(" 支持 TypeScript")]),s._v(" "),a("p",[s._v("Deno 不需要额外配置，默认就支持 TypeScript。Deno 会通过文件后缀名进行判断，"),a("code",[s._v(".ts")]),s._v(" 文件会先通过 TS 编译器转成 JS，"),a("code",[s._v(".js")]),s._v(" 文件则会传入 "),a("code",[s._v("V8")]),s._v(" 引擎运行。")]),s._v(" "),a("h2",{attrs:{id:"安装-deno"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-deno"}},[s._v("#")]),s._v(" 安装 Deno")]),s._v(" "),a("p",[s._v("在 Deno 的官网中提供了各个系统的安装方法，这里简单搬运一下。")]),s._v(" "),a("p",[a("strong",[s._v("Using Shell (macOS, Linux):")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -fsSL https://deno.land/x/install/install.sh "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("Using PowerShell (Windows):")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("iwr https://deno.land/x/install/install.ps1 -useb "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" iex\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("Using Cargo (Windows, macOS, Linux):")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("cargo "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" deno\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("Using Homebrew (macOS):")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("brew "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" deno\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("Using Chocolatey (Windows):")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("choco "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" deno\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("Using Scoop (Windows):")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("scoop "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" deno\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("关于 Deno 更多安装选项，例如指定 Deno 版本安装等可以到 https://github.com/denoland/deno_install 查看。")]),s._v(" "),a("h2",{attrs:{id:"deno-的运行参数及子命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deno-的运行参数及子命令"}},[s._v("#")]),s._v(" Deno 的运行参数及子命令")]),s._v(" "),a("p",[s._v("通过执行 "),a("code",[s._v("deno -h")]),s._v(" 可以查看 Deno 的帮助信息。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# deno 版本")]),s._v("\ndeno "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.42")]),s._v(".0\nA secure JavaScript and TypeScript runtime\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 文档地址")]),s._v("\nDocs: https://deno.land/std/manual.md\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 标准库及第三方模块的地址")]),s._v("\nModules: https://deno.land/std/ https://deno.land/x/\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# bug 反馈地址")]),s._v("\nBugs: https://github.com/denoland/deno/issues\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 无需参数就可启动 REPL 环境")]),s._v("\nTo start the REPL, supply no arguments:\n  deno\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行脚本")]),s._v("\nTo execute a script:\n  deno run https://deno.land/std/examples/welcome.ts\n  deno https://deno.land/std/examples/welcome.ts\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在 shell 中执行代码")]),s._v("\nTo evaluate code "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" the shell:\n  deno "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("eval")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"console.log(30933 + 404)"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 运行 deno help run 查看 run 命令的特殊标记")]),s._v("\nRun "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'deno help run'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'run'")]),s._v("-specific flags.\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 用法 deno [参数] [子命令]")]),s._v("\nUSAGE:\n    deno "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OPTIONS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("SUBCOMMAND"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\nOPTIONS:\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看帮助信息")]),s._v("\n    -h, --help                     Prints "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" information\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置日志级别，可选值 [debug, info]")]),s._v("\n    -L, --log-level "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("log-level"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("    Set log level "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("possible values: debug, info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 禁止输出")]),s._v("\n    -q, --quiet                    Suppress diagnostic output\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看版本信息")]),s._v("\n    -V, --version                  Prints version information\n\nSUBCOMMANDS:\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将模块和依赖打包成单文件")]),s._v("\n    bundle         Bundle module and dependencies into single "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 缓存依赖")]),s._v("\n    cache          Cache the dependencies\n    completions    Generate shell completions\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示文档")]),s._v("\n    doc            Show documentation "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" a module\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行脚本")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("eval")]),s._v("           Eval script\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 格式化源码")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("fmt")]),s._v("            Format "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" files\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打印子命令帮助信息")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v("           Prints this message or the "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" of the given subcommand"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示源码的依赖信息或缓存信息")]),s._v("\n    info           Show info about cache or info related to "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将脚本安装为可执行文件")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("        Install script as an executable\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入 REPL 环境")]),s._v("\n    repl           Read Eval Print Loop\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 运行脚本")]),s._v("\n    run            Run a program given a filename or url to the module\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 运行测试")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("           Run tests\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打印运行时 TS 类型声明")]),s._v("\n    types          Print runtime TypeScript declarations\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 升级 Deno 到最新版本")]),s._v("\n    upgrade        Upgrade deno executable to newest version\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 环境变量")]),s._v("\nENVIRONMENT VARIABLES:\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置 deno 的基础目录，默认在 $HOME/.deno")]),s._v("\n    DENO_DIR             Set deno"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s base directory (defaults to $HOME/.deno)\n    # deno install 输出的目录，默认在 $HOME/.deno/bin\n    DENO_INSTALL_ROOT    Set deno install'")]),s._v("s output directory\n                         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("defaults to "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.deno/bin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭颜色")]),s._v("\n    NO_COLOR             Set to disable color\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# http 代理")]),s._v("\n    HTTP_PROXY           Proxy address "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" HTTP requests\n                         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("module downloads, fetch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# https 代理")]),s._v("\n    HTTPS_PROXY          Same but "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" HTTPS\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br")])]),a("h2",{attrs:{id:"案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#案例"}},[s._v("#")]),s._v(" 案例")]),s._v(" "),a("p",[s._v("开启 http 服务")]),s._v(" "),a("div",{staticClass:"language-ts line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// demo1.ts")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" serve "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://deno.land/std@0.50.0/http/server.ts'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("await")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" req "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("of")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("serve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" hostname"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'0.0.0.0'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8000")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("respond")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" body"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Hello Deno. \\n'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("运行")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("deno run demo1.ts\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("Compile file:///Users/test/demo1.ts\nDownload https://deno.land/std@0.50.0/http/server.ts\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nerror: Uncaught PermissionDenied: network access to "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"127.0.0.1:8000"')]),s._v(", run again with the --allow-net flag\n    at unwrapResponse "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$deno")]),s._v("$/ops/dispatch_json.ts:43:11"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    at Object.sendSync "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$deno")]),s._v("$/ops/dispatch_json.ts:72:10"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    at Object.listen "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$deno")]),s._v("$/ops/net.ts:51:10"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    at listen "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$deno")]),s._v("$/net.ts:164:18"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    at serve "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("server.ts:261:20"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    at demo1.ts:3:25\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("首先会编译代码，编译完成后下载外部模块到本地，下载完成就可以执行代码。执行时会检查所需权限，如果没有授权则会报 "),a("code",[s._v("error: Uncaught PermissionDenied")]),s._v("。")]),s._v(" "),a("p",[s._v("加上 "),a("code",[s._v("--allow-net")]),s._v(" 再执行即可。")]),s._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),a("p",[s._v("相比于 Node.js，Deno 在使用上更加简单，大部分 api 与浏览器一致，作为前端码农应该会更加容易接受 Deno。在将来我们可以根据项目来选择 Node.js 或者 Deno，这对于我们来说应该是一件好事。")]),s._v(" "),a("p",[s._v("短期内 Deno 还不能用于生产环境，通过各大框架对 TypeScript 的支持可以知道 TypeScript 对于前端来说已经越来越重要了，所以还是抓紧学习 TypeScript 吧。")]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("以上内容均是个人理解，如果有讲的不对的地方，还请各位大佬指点。")]),s._v(" "),a("p",[s._v("如果觉得内容还不错的话，希望小伙伴可以帮忙点赞转发，给更多的同学看到，感谢感谢！")]),s._v(" "),a("p",[a("img",{attrs:{src:"/imgs/qrcode.png",alt:"前端develop"}})])])}),[],!1,null,null,null);n.default=e.exports}}]);