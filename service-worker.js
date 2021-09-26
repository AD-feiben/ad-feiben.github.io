/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6a544f3f86d37203e6fd98febd9e03e0"
  },
  {
    "url": "assets/css/0.styles.b20cb76a.css",
    "revision": "723f6609af59ba61df117764d856ffca"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/search.237d6f6a.svg",
    "revision": "237d6f6a3fe211d00a61e871a263e9fe"
  },
  {
    "url": "assets/js/1.326f0c13.js",
    "revision": "1be83384f6c85716d77cad83332af214"
  },
  {
    "url": "assets/js/10.a9f4d64d.js",
    "revision": "44c53e6ab44d3107f99891a8954db777"
  },
  {
    "url": "assets/js/11.2e7fadd3.js",
    "revision": "cdb86b694f81b4a7b105a7df82479859"
  },
  {
    "url": "assets/js/12.b5984b6f.js",
    "revision": "c5c7903ed8e4fbb316fe1591070e6806"
  },
  {
    "url": "assets/js/13.981a999b.js",
    "revision": "a33db491e8ca51ae6ef080b37224ed49"
  },
  {
    "url": "assets/js/14.663a32ce.js",
    "revision": "73621bb636ea72d6c5d37f16cc0721f8"
  },
  {
    "url": "assets/js/15.fdcdaeb0.js",
    "revision": "8aaa645e2234e0f7797b1bcbdd6804b4"
  },
  {
    "url": "assets/js/16.02590bda.js",
    "revision": "d3ab40373729bf6fe8dc30baf0937cd0"
  },
  {
    "url": "assets/js/17.291ef55a.js",
    "revision": "5b737e8e2b96e1e26f2d50666ba17588"
  },
  {
    "url": "assets/js/18.495ecfb3.js",
    "revision": "e417c57ebd255fe70bbddbd1d1209d1d"
  },
  {
    "url": "assets/js/19.10e921d5.js",
    "revision": "beea550a992fd4a5c8f4446b2be328c7"
  },
  {
    "url": "assets/js/20.2a31e856.js",
    "revision": "61c30df7d30804ea05b453814a61a73a"
  },
  {
    "url": "assets/js/21.5df4722f.js",
    "revision": "6892d3f28362ec5cd9620f81574a3c67"
  },
  {
    "url": "assets/js/22.17bbb1ec.js",
    "revision": "6be53214f4c6c195e4595736b08d25da"
  },
  {
    "url": "assets/js/23.cc7dc45a.js",
    "revision": "d9f59a44e9d2ae1c1f162898e55a8349"
  },
  {
    "url": "assets/js/24.f4236d8c.js",
    "revision": "39392e0c62c4ffd280ca2718451799f7"
  },
  {
    "url": "assets/js/25.f37ccebe.js",
    "revision": "7713c65ac64c0dbaa31e09c98ca8486b"
  },
  {
    "url": "assets/js/26.3e903901.js",
    "revision": "6f732fcc0494b129213c458cb5763267"
  },
  {
    "url": "assets/js/27.18073c39.js",
    "revision": "2fd31c9d9894a819a50e403a08369241"
  },
  {
    "url": "assets/js/28.e11224a5.js",
    "revision": "29b31d67527ad7bd3401c3a471d8113c"
  },
  {
    "url": "assets/js/29.67ffffd1.js",
    "revision": "19574bfe49fa594ec97067bab00fdd71"
  },
  {
    "url": "assets/js/3.590e791e.js",
    "revision": "c1e79c1b1efcbef1eaf84778da4e7183"
  },
  {
    "url": "assets/js/30.2950a665.js",
    "revision": "ab4aacc81979345acb517d10150c8181"
  },
  {
    "url": "assets/js/31.baa8f8c0.js",
    "revision": "4706df0aa3bb517294eeeeb21d4fe86e"
  },
  {
    "url": "assets/js/32.e0dc49b1.js",
    "revision": "bbfeb80cc50de847d7b1642792868ec0"
  },
  {
    "url": "assets/js/33.b1206928.js",
    "revision": "7f557b621d7bc2c957b5a398ddf247b9"
  },
  {
    "url": "assets/js/34.80896a4e.js",
    "revision": "6e5acfbea57269f512e6348904289fa9"
  },
  {
    "url": "assets/js/35.e1003365.js",
    "revision": "5ea84de3133fb4ba29409d7fcd418452"
  },
  {
    "url": "assets/js/36.d4e76783.js",
    "revision": "8b1f12fa7268c3a0a5d8bd71ae35731b"
  },
  {
    "url": "assets/js/37.f4bd175a.js",
    "revision": "e853dd57f934821c71673287949e1f15"
  },
  {
    "url": "assets/js/38.c5fe09a3.js",
    "revision": "54e769de8cd438da195026fc6d7899ce"
  },
  {
    "url": "assets/js/39.672cc9ca.js",
    "revision": "2712ccb70a96f69d2e563d76ae9f2b7b"
  },
  {
    "url": "assets/js/4.19f24900.js",
    "revision": "ac58061b526790e31ca1d954c5057b84"
  },
  {
    "url": "assets/js/40.f460e10e.js",
    "revision": "9e39ff012bb9cb448e8b8a36fb0a1c15"
  },
  {
    "url": "assets/js/41.686e5048.js",
    "revision": "9b808c8fe94db919423871cd90896e62"
  },
  {
    "url": "assets/js/42.38184866.js",
    "revision": "9638fc306df91416e6763ab1eaabc3e3"
  },
  {
    "url": "assets/js/43.58cfc8db.js",
    "revision": "1422026a72682fa78197a653ce20c47f"
  },
  {
    "url": "assets/js/44.7cb344e5.js",
    "revision": "a0b79e8ff8ff97c048dc331216c8828e"
  },
  {
    "url": "assets/js/45.d519ffb1.js",
    "revision": "1627d9187e90551568551853779aa3bd"
  },
  {
    "url": "assets/js/46.aa02b0d2.js",
    "revision": "f3abbc26ab6f6348a2b55422e3443d64"
  },
  {
    "url": "assets/js/5.e9bee2e5.js",
    "revision": "fd7bce86f92c9d34521763ee79dd6a5d"
  },
  {
    "url": "assets/js/6.c0e8c7a8.js",
    "revision": "3fcc0872194bab46acb4009af19fa072"
  },
  {
    "url": "assets/js/7.78658652.js",
    "revision": "db28ad6939ada3e4c04eb0dc37bb8f27"
  },
  {
    "url": "assets/js/8.1fdf085e.js",
    "revision": "a035a9159d993bec73ca018089524af8"
  },
  {
    "url": "assets/js/9.2501c995.js",
    "revision": "ec0865db6a8ba7f5eef71cb71ef5ed72"
  },
  {
    "url": "assets/js/app.cc9ea677.js",
    "revision": "a68ddbf9769c508e1eb73d104fc94582"
  },
  {
    "url": "baidu_verify_code-KCDk8hXfbC.html",
    "revision": "e41c2cd49ca573208b18252a9fa07a50"
  },
  {
    "url": "banner.jpg",
    "revision": "9ead67d16ac77651c6d6777f86a53d95"
  },
  {
    "url": "categories/CI/index.html",
    "revision": "afb98fe8bc52402fdf607a36c0db3ef6"
  },
  {
    "url": "categories/Deno/index.html",
    "revision": "b8cbb5c562c99d4bdf741b341bdc881e"
  },
  {
    "url": "categories/Docker/index.html",
    "revision": "d1b587274836949aa7f06efb1eb698bc"
  },
  {
    "url": "categories/index.html",
    "revision": "3d872360413b39168b1301b69313822e"
  },
  {
    "url": "categories/Nginx/index.html",
    "revision": "ac2146c3f73afe2ce966de5eb5b49d9a"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "6af1d914166a65c07483f3ab99bdd5ea"
  },
  {
    "url": "categories/VuePress/index.html",
    "revision": "38d31da710938d5dd84f28c97c89791e"
  },
  {
    "url": "categories/关于我/index.html",
    "revision": "e4d87800505e12107f4746b185c9a77d"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "3f4c35c5dec0fefa47088462755d4465"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "24046d3f24e4b7d3b624a58d157354f9"
  },
  {
    "url": "categories/插件/index.html",
    "revision": "c4995171b1bd69ee0402485400759aeb"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "ae82df4289e3928058a9d4b428952538"
  },
  {
    "url": "google45349a4c10d0687c.html",
    "revision": "9293295bc173774d5b08ff35a995d5b2"
  },
  {
    "url": "head.png",
    "revision": "df1134f593050b4bd061f90fe2f77283"
  },
  {
    "url": "imgs/docker/0.png",
    "revision": "afca5caf4fe17a319a5ce5d5c8747e47"
  },
  {
    "url": "imgs/docker/1.png",
    "revision": "4d0228a7bffc87291431d2ba89642ff1"
  },
  {
    "url": "imgs/docker/2.png",
    "revision": "390adbebf53ff6654251957b4320e8b8"
  },
  {
    "url": "imgs/docker/3.png",
    "revision": "d027d4033c821c5be3c487d021e22d3c"
  },
  {
    "url": "imgs/docker/4.png",
    "revision": "7f67413739811525bfb8471e143d74b9"
  },
  {
    "url": "imgs/docker/5.png",
    "revision": "3288cc01815e3ef7d1e6dea4426ffa4e"
  },
  {
    "url": "imgs/logo.png",
    "revision": "df1134f593050b4bd061f90fe2f77283"
  },
  {
    "url": "imgs/nginx/0.png",
    "revision": "51343adf3af1a6934d803158cb5186c8"
  },
  {
    "url": "imgs/python/0.png",
    "revision": "4a9bbc45824e3546239f22518be0d9d7"
  },
  {
    "url": "imgs/python/1.png",
    "revision": "6216570128981d66bd6452043d8057bb"
  },
  {
    "url": "imgs/python/2.png",
    "revision": "e757198d1cfab2308235e577846f632e"
  },
  {
    "url": "imgs/qrcode.png",
    "revision": "0d6bac58c5d7d07dabbeb0edd8832a38"
  },
  {
    "url": "imgs/search.svg",
    "revision": "237d6f6a3fe211d00a61e871a263e9fe"
  },
  {
    "url": "imgs/前端/0.png",
    "revision": "8ac1b69fb7c68aa28f1c60f2c3db937d"
  },
  {
    "url": "imgs/前端/1.png",
    "revision": "1174c12fb6aa5000ea7fcb3668322700"
  },
  {
    "url": "imgs/前端/2.png",
    "revision": "c1179b2a9ef617d85f20a0330abf9f36"
  },
  {
    "url": "imgs/前端/3.png",
    "revision": "76f9f5af8565d77dc94c34871292ebec"
  },
  {
    "url": "imgs/前端/4.png",
    "revision": "c83e49fdd53d5b1c53d76ff48e0dd93c"
  },
  {
    "url": "imgs/前端/5.png",
    "revision": "9ccea9019071560b90e1c704f94293c6"
  },
  {
    "url": "imgs/前端/6.png",
    "revision": "d3451eb971cd55d728eb5564aced6d42"
  },
  {
    "url": "imgs/前端/7.png",
    "revision": "4cd310e60e3e3b6c827ec72222150171"
  },
  {
    "url": "imgs/前端/8.png",
    "revision": "d690a09e392acffce238d41eda7e244f"
  },
  {
    "url": "imgs/工具/0.jpeg",
    "revision": "42c092796ff1551657fe0cac5c73995b"
  },
  {
    "url": "imgs/工具/1.jpeg",
    "revision": "8a3b920bf57481b9eca951e89293d0f5"
  },
  {
    "url": "index.html",
    "revision": "e69a790685b1317d2ed98598de0d7f92"
  },
  {
    "url": "js/push.js",
    "revision": "7ede88c964da73dd6de0cf1df988fd94"
  },
  {
    "url": "tag/index.html",
    "revision": "ef34e78808cf9fdaef2dba7bc39b6a55"
  },
  {
    "url": "tags/canvas/index.html",
    "revision": "b8531a3ce9bf2b2ba5ccae2d46854608"
  },
  {
    "url": "tags/Charles/index.html",
    "revision": "3dc5d5f05c44b38bc18f6cf39e7bc17f"
  },
  {
    "url": "tags/CI/index.html",
    "revision": "01e814b7258b8f905f0755859d042ecd"
  },
  {
    "url": "tags/Deno/index.html",
    "revision": "204dec9a684d245daad4ecd7e730f672"
  },
  {
    "url": "tags/Diff/index.html",
    "revision": "0b7076dce75861cbebc55c76e52fc744"
  },
  {
    "url": "tags/Docker/index.html",
    "revision": "428c801c32a127ded88b8f779ca4cb86"
  },
  {
    "url": "tags/Dockerfile/index.html",
    "revision": "d9ded9bf01737242944fa2639c6d5abc"
  },
  {
    "url": "tags/JSENS/index.html",
    "revision": "0644208b45867a2867de373afc2b193a"
  },
  {
    "url": "tags/lw-chart/index.html",
    "revision": "ad17585bfa4de83fdd75b4985def02ed"
  },
  {
    "url": "tags/Nexus/index.html",
    "revision": "21536f9b6a8aa5d97ed3693f2cac5549"
  },
  {
    "url": "tags/Nginx/index.html",
    "revision": "c904628ee2e7feb2ed685e8509738220"
  },
  {
    "url": "tags/NPM/index.html",
    "revision": "590768b6d23bc6a8ace590ef13450733"
  },
  {
    "url": "tags/Nuxt/index.html",
    "revision": "ed45d37c445e85a7d0ec271c16f940e7"
  },
  {
    "url": "tags/OpenWrite/index.html",
    "revision": "a2559e1cf16fb57df54a00b888477481"
  },
  {
    "url": "tags/Postman/index.html",
    "revision": "2ef9c58458bd9f00fa4069ad66387716"
  },
  {
    "url": "tags/Promise/index.html",
    "revision": "677bf1f2e5cce28491c59f2bf4128c6f"
  },
  {
    "url": "tags/selenium/index.html",
    "revision": "114cd396e5e0ac76a36d43019a2a3180"
  },
  {
    "url": "tags/Serverless/index.html",
    "revision": "7351870be31324505ab9703c3078447f"
  },
  {
    "url": "tags/Travis/index.html",
    "revision": "5c64674ba4d288523449e53dc93160d7"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "2e149af54346a3e64d27ac05f027463b"
  },
  {
    "url": "tags/Vue3/index.html",
    "revision": "60dce9a6a34fd24a8046fd9c007d746d"
  },
  {
    "url": "tags/VuePress/index.html",
    "revision": "771a6d1ef1d727016b880d16c28b2c97"
  },
  {
    "url": "tags/云开发/index.html",
    "revision": "c7596ca7fc93c5c36efd889bcfbed066"
  },
  {
    "url": "tags/今日头条/index.html",
    "revision": "15707cfe665a5313fa0a171eef8715fe"
  },
  {
    "url": "tags/公众号/index.html",
    "revision": "d55921404c560f7aee259e30dc8d62e1"
  },
  {
    "url": "tags/关于我/index.html",
    "revision": "c02b770c985b846231ce13d11a41f480"
  },
  {
    "url": "tags/地图/index.html",
    "revision": "3e010f318ab60a21092b681b8c41454b"
  },
  {
    "url": "tags/培训/index.html",
    "revision": "9cc5ca1bf6641c58d92fd0bcabd9b580"
  },
  {
    "url": "tags/小程序/index.html",
    "revision": "7c494c108b79de5ddc53d9007c8d54de"
  },
  {
    "url": "tags/小霸王游戏机/index.html",
    "revision": "de3e8b010a080fa293c86150a455742c"
  },
  {
    "url": "tags/引流/index.html",
    "revision": "b5e2e274218eea1ff2d68d61e4447a44"
  },
  {
    "url": "tags/微信/index.html",
    "revision": "71ad798348a460fd493883d9991f4549"
  },
  {
    "url": "tags/抓包/index.html",
    "revision": "17ef57e1293ec14c3411092d853fc682"
  },
  {
    "url": "tags/插件开发/index.html",
    "revision": "c49066a58cecd1164b100d0152f751c0"
  },
  {
    "url": "tags/未来/index.html",
    "revision": "03892ee48ec63098def75ae4f411e5b4"
  },
  {
    "url": "tags/源码/index.html",
    "revision": "693635956e8c3752d74c92b569b7697d"
  },
  {
    "url": "tags/滑块验证码/index.html",
    "revision": "e4cfc51de95c751d5ce793e70063ee47"
  },
  {
    "url": "tags/程序员/index.html",
    "revision": "3a991ebcd3c273c6eb0f7b13b70e3aed"
  },
  {
    "url": "tags/第二技能/index.html",
    "revision": "79394b759e0baf298edae09a2ce03558"
  },
  {
    "url": "tags/网站安全/index.html",
    "revision": "313bbdef3a74d90100abda9c68c9a649"
  },
  {
    "url": "tags/自媒体/index.html",
    "revision": "f7689b881e18600a5a75d09d4d8f7a9e"
  },
  {
    "url": "tags/装饰器/index.html",
    "revision": "6d10b0f56de43cdbe4f77001ceeab848"
  },
  {
    "url": "tags/面试/index.html",
    "revision": "2128dbad290b99c7b9a30496b7704cd7"
  },
  {
    "url": "tags/面试题/index.html",
    "revision": "287c4abb786066b6418f1d54d791fa07"
  },
  {
    "url": "timeline/index.html",
    "revision": "dd54466a31104d53922bd6602441b850"
  },
  {
    "url": "views/about.html",
    "revision": "db804ade36ee38e39aea15e9ef7e5100"
  },
  {
    "url": "views/Deno/2020/【Deno】初识Deno.html",
    "revision": "a14a2e7fc9dc2fffc39f93a9cc84f0b9"
  },
  {
    "url": "views/Docker/2019/Docker 仓库.html",
    "revision": "40e75eab6aab751aca3ceb6ebe92a7d5"
  },
  {
    "url": "views/Docker/2019/使用 Dockerfile 制作镜像.html",
    "revision": "6d6366441f7dc67a9842809e457ae1d2"
  },
  {
    "url": "views/Docker/2019/使用 Nexus 创建 Docker 仓库.html",
    "revision": "6458c35f6411ca93c609bb1ea5d8124a"
  },
  {
    "url": "views/Docker/2019/初识 Docker.html",
    "revision": "2dae553e51b1c7c7c6dce7995bfa3819"
  },
  {
    "url": "views/Nginx/2018/Nginx 配置.html",
    "revision": "348d7b78e00506f5165a271920003125"
  },
  {
    "url": "views/Python/2019/Python实现头条自动发文章，赚点广告费.html",
    "revision": "97fdcf736aecd05b5769b22b7cf5bd2f"
  },
  {
    "url": "views/Python/2019/装饰器详解.html",
    "revision": "5ba42aece388fe0e9e4c081072cb5ac5"
  },
  {
    "url": "views/前端/2017/腾讯地图实现地图找房功能.html",
    "revision": "031e1e1f3701b3dc49c633d316f0c937"
  },
  {
    "url": "views/前端/2018/Nuxt 实践.html",
    "revision": "23ec8da684a0031f3ecc556f746ea4b4"
  },
  {
    "url": "views/前端/2018/Vue 微信自定义分享总结.html",
    "revision": "3f608e2612da4caac210e83054a4c070"
  },
  {
    "url": "views/前端/2018/记 Nuxt 开发遇到 OOM.html",
    "revision": "13fdd7657103f980acd47681aa33dcb9"
  },
  {
    "url": "views/前端/2019/10 分钟搭建私服 NPM.html",
    "revision": "4af3babc52b65c2df346d1e03012272c"
  },
  {
    "url": "views/前端/2020/【源码解读】通过分析 Vue computed 的实现，居然发现隐藏的小彩蛋.html",
    "revision": "4139a911e8c179a3de467410bad6e9a7"
  },
  {
    "url": "views/前端/2020/【面试题解析】从 Vue 源码分析 key 的作用.html",
    "revision": "09c90cc8b66717453ada22ce4230e739"
  },
  {
    "url": "views/前端/2020/【面试题解析】手动实现 Promise.html",
    "revision": "03c4326111e799e06e76e550447af96c"
  },
  {
    "url": "views/前端/2020/【面试题解析✨】Vue 的数据是如何渲染到页面的？.html",
    "revision": "66c73283f93e662901ee408ef48d8d13"
  },
  {
    "url": "views/前端/2020/开源了一个图表库lw-chart.html",
    "revision": "9995b5eb453d10a7fb65eb1eecfae8e9"
  },
  {
    "url": "views/前端/2020/通宵写了个 Chrome 插件.html",
    "revision": "abca3622e5d0953148aeaf3e273f01d5"
  },
  {
    "url": "views/前端/2020/通过小程序云开发了解Serverless.html",
    "revision": "a0847d21ac0a52088b93f8550b4f9d5a"
  },
  {
    "url": "views/前端/2021/技术人玩小游戏，如何“不战而胜”.html",
    "revision": "259520334e2410e93e2f7b560f6e6744"
  },
  {
    "url": "views/前端/2021/深入 Vue3 源码，学习初始化流程.html",
    "revision": "7fb8b137f4910128d5a13b699330175d"
  },
  {
    "url": "views/前端/2021/深入 Vue3 源码，学习响应式原理.html",
    "revision": "6fba0f56ce9b3827f09c369911638d83"
  },
  {
    "url": "views/工具/2019/持续集成工具.html",
    "revision": "f377fa89ccd47072a88c8516e37bbc5b"
  },
  {
    "url": "views/随笔/2019/关于 IT 培训.html",
    "revision": "86d14a84dce81cd1324825dcf50f7cac"
  },
  {
    "url": "views/随笔/2019/对未来的一些思考.html",
    "revision": "e9ea99ad456c801c5f0f565879cb350d"
  },
  {
    "url": "views/随笔/2019/我是如何面试别人的.html",
    "revision": "42543e633622d98046e13c03f2c07ca0"
  },
  {
    "url": "views/随笔/2019/程序员为什么要培养第二技能.html",
    "revision": "22270fb11060263bb4dfaed4c93489a3"
  },
  {
    "url": "views/随笔/2020/如何增加收入？.html",
    "revision": "6111dcd5ba42fa6bdbe78fcce2aa7a82"
  },
  {
    "url": "views/随笔/2021/VuePress 配置公众号获取验证码阅读全文 - 公众号引流插件.html",
    "revision": "a61e5d37ec4b362d45f7fe2d8005188b"
  },
  {
    "url": "views/随笔/2021/我的年终总结以及新年计划.html",
    "revision": "7b0b5800f1566257157949f76d97a373"
  },
  {
    "url": "views/随笔/2021/朋友圈小霸王游戏机，快来领取链接和源码找回青春记忆.html",
    "revision": "0be6953f5fff314979cf3bde6bc417ff"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
