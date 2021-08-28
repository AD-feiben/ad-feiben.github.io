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
    "revision": "36729703172272a4a8b9db18baabcc7c"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/css/0.styles.b20cb76a.css",
    "revision": "723f6609af59ba61df117764d856ffca"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/img/search.237d6f6a.svg",
    "revision": "237d6f6a3fe211d00a61e871a263e9fe"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/1.326f0c13.js",
    "revision": "1be83384f6c85716d77cad83332af214"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/10.a9f4d64d.js",
    "revision": "44c53e6ab44d3107f99891a8954db777"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/11.2e7fadd3.js",
    "revision": "cdb86b694f81b4a7b105a7df82479859"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/12.2d3a515f.js",
    "revision": "35275bfd344c81698495c00306e50ee4"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/13.2401f800.js",
    "revision": "bd4aa2520b95166d966ab2a224d4f4ed"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/14.e93620cd.js",
    "revision": "5c8e7c482775266f06329aec1e18392b"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/15.fdcdaeb0.js",
    "revision": "8aaa645e2234e0f7797b1bcbdd6804b4"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/16.02590bda.js",
    "revision": "d3ab40373729bf6fe8dc30baf0937cd0"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/17.291ef55a.js",
    "revision": "5b737e8e2b96e1e26f2d50666ba17588"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/18.495ecfb3.js",
    "revision": "e417c57ebd255fe70bbddbd1d1209d1d"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/19.10e921d5.js",
    "revision": "beea550a992fd4a5c8f4446b2be328c7"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/20.2a31e856.js",
    "revision": "61c30df7d30804ea05b453814a61a73a"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/21.5df4722f.js",
    "revision": "6892d3f28362ec5cd9620f81574a3c67"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/22.17bbb1ec.js",
    "revision": "6be53214f4c6c195e4595736b08d25da"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/23.cc7dc45a.js",
    "revision": "d9f59a44e9d2ae1c1f162898e55a8349"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/24.f4236d8c.js",
    "revision": "39392e0c62c4ffd280ca2718451799f7"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/25.f37ccebe.js",
    "revision": "7713c65ac64c0dbaa31e09c98ca8486b"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/26.3e903901.js",
    "revision": "6f732fcc0494b129213c458cb5763267"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/27.18073c39.js",
    "revision": "2fd31c9d9894a819a50e403a08369241"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/28.e11224a5.js",
    "revision": "29b31d67527ad7bd3401c3a471d8113c"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/29.67ffffd1.js",
    "revision": "19574bfe49fa594ec97067bab00fdd71"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/3.590e791e.js",
    "revision": "c1e79c1b1efcbef1eaf84778da4e7183"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/30.2950a665.js",
    "revision": "ab4aacc81979345acb517d10150c8181"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/31.baa8f8c0.js",
    "revision": "4706df0aa3bb517294eeeeb21d4fe86e"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/32.e0dc49b1.js",
    "revision": "bbfeb80cc50de847d7b1642792868ec0"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/33.b1206928.js",
    "revision": "7f557b621d7bc2c957b5a398ddf247b9"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/34.80896a4e.js",
    "revision": "6e5acfbea57269f512e6348904289fa9"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/35.92915759.js",
    "revision": "2899050cdcb6a99dd892fc9c9539a1f6"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/36.b0c10b8d.js",
    "revision": "e9db6fd24a3b168e7f23eddc9dc7b09e"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/37.4c1e5f84.js",
    "revision": "3e3382aea7bceec32a7ffefc47dbf651"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/38.7a4c6c09.js",
    "revision": "4bf501b0a7580593b26f458f67dae3aa"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/39.a220a7b0.js",
    "revision": "8c2eae5248a3735a1e38032b83c29bc5"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/4.19f24900.js",
    "revision": "ac58061b526790e31ca1d954c5057b84"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/40.e647b60b.js",
    "revision": "e03b4589d81eb18cee4fe93dbf95c5f2"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/41.5bdd2ea2.js",
    "revision": "49b1ceeec621532ad0ccd1cd9f0f5f0f"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/42.be7ced68.js",
    "revision": "ea9787edbafe274ece6b068d61ab51a6"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/43.591d34f8.js",
    "revision": "d15b0d0b6374e20be8166dbbdf615672"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/44.0ed034dd.js",
    "revision": "713d4f32fe135f3fb2a8adcf0b2021b7"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/45.d519ffb1.js",
    "revision": "1627d9187e90551568551853779aa3bd"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/46.aa02b0d2.js",
    "revision": "f3abbc26ab6f6348a2b55422e3443d64"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/5.e9bee2e5.js",
    "revision": "fd7bce86f92c9d34521763ee79dd6a5d"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/6.c0e8c7a8.js",
    "revision": "3fcc0872194bab46acb4009af19fa072"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/7.78658652.js",
    "revision": "db28ad6939ada3e4c04eb0dc37bb8f27"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/8.1fdf085e.js",
    "revision": "a035a9159d993bec73ca018089524af8"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/9.2501c995.js",
    "revision": "ec0865db6a8ba7f5eef71cb71ef5ed72"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/app.f3a5054b.js",
    "revision": "cafe06669fe367bcccddaba2b36d73a0"
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
    "revision": "80e7bbb39ca16c96b4b22c8a8e99cf62"
  },
  {
    "url": "categories/Deno/index.html",
    "revision": "83b4bdebddfa9950d152a50265def92a"
  },
  {
    "url": "categories/Docker/index.html",
    "revision": "13b5de09b2ff553ebf4f667bbc446e32"
  },
  {
    "url": "categories/index.html",
    "revision": "543b51c178d0e96636e8e4a33125c2d5"
  },
  {
    "url": "categories/Nginx/index.html",
    "revision": "1f735032e93f39c5317e3bab20c10fe0"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "ce11f6c6fe2dbb57905543511d773adc"
  },
  {
    "url": "categories/VuePress/index.html",
    "revision": "21e8b71773e27ed4159f533b9018cc84"
  },
  {
    "url": "categories/关于我/index.html",
    "revision": "325f0f5e195f596d2ec63c83f1f02395"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "6be42223474bd8562307799dbffcfdcf"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "9499563c96ed0a970f7b3713af65603f"
  },
  {
    "url": "categories/插件/index.html",
    "revision": "1affb5ad0f4a0ff059f13e52f256eca7"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "05a726cd34afe0fcf60fa3c8f745f499"
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
    "revision": "4a2ed0423d65e0be87f0eab40684ff5c"
  },
  {
    "url": "js/push.js",
    "revision": "7ede88c964da73dd6de0cf1df988fd94"
  },
  {
    "url": "tag/index.html",
    "revision": "292271aae2f7bce931de767fcf4120b2"
  },
  {
    "url": "tags/canvas/index.html",
    "revision": "325d8a4cb36a5404001fde9005a578db"
  },
  {
    "url": "tags/Charles/index.html",
    "revision": "b91aeca99b1949f4a575752a6ab5e7bb"
  },
  {
    "url": "tags/CI/index.html",
    "revision": "bc7732d641e77a9f5c8a51d79c8d186c"
  },
  {
    "url": "tags/Deno/index.html",
    "revision": "727b018c8ef3bce6795d4c76dba7e386"
  },
  {
    "url": "tags/Diff/index.html",
    "revision": "4822b94ef8d8d2fcc33b349ec4ce890d"
  },
  {
    "url": "tags/Docker/index.html",
    "revision": "e1bba4ef46739c5fd0db0d20053af198"
  },
  {
    "url": "tags/Dockerfile/index.html",
    "revision": "734f68860f303d0cc39ff29bc26d18ad"
  },
  {
    "url": "tags/JSENS/index.html",
    "revision": "8d02ef8ed5ba12fd18a635fb124b2430"
  },
  {
    "url": "tags/lw-chart/index.html",
    "revision": "088ecb57cc6a1f448df0a02d8f154574"
  },
  {
    "url": "tags/Nexus/index.html",
    "revision": "d18d6e488d51e71f6265edf605024765"
  },
  {
    "url": "tags/Nginx/index.html",
    "revision": "cfbfc2647c18d4ef06c9d742eaabbf37"
  },
  {
    "url": "tags/NPM/index.html",
    "revision": "7d5bc7675e8f2f5370956d3af7670e03"
  },
  {
    "url": "tags/Nuxt/index.html",
    "revision": "a377398911ac4733e11cb03f52cef1a8"
  },
  {
    "url": "tags/OpenWrite/index.html",
    "revision": "99d982bb6262a441fe7d9679c275ab66"
  },
  {
    "url": "tags/Postman/index.html",
    "revision": "577891dd0acda0ace52ee38805b0faaa"
  },
  {
    "url": "tags/Promise/index.html",
    "revision": "2e8b5c2cf463ee840a4fe1087d5788d1"
  },
  {
    "url": "tags/selenium/index.html",
    "revision": "4a31a42d2ba8099e2573632372d5cdbc"
  },
  {
    "url": "tags/Serverless/index.html",
    "revision": "bb846d40c49514b1f88e40f3439ffc0e"
  },
  {
    "url": "tags/Travis/index.html",
    "revision": "1371c9280ed0c2331387c68059965b02"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "94fd78819531ea8bee0a1adb8daeb6e2"
  },
  {
    "url": "tags/Vue3/index.html",
    "revision": "518a2171952bac34ebd28474c2be8c6d"
  },
  {
    "url": "tags/VuePress/index.html",
    "revision": "9283f3da4baa45d2c07cdc0e54896e62"
  },
  {
    "url": "tags/云开发/index.html",
    "revision": "2e0e706c2d8544a35e3702b9ad9e8410"
  },
  {
    "url": "tags/今日头条/index.html",
    "revision": "ffb5768485f7d69ffb20474ebacd10c6"
  },
  {
    "url": "tags/公众号/index.html",
    "revision": "da8c54a9a6e87dbd393feba84e3016f4"
  },
  {
    "url": "tags/关于我/index.html",
    "revision": "ecca31ef19729924c5378b2fb0edd1ef"
  },
  {
    "url": "tags/地图/index.html",
    "revision": "a2ad46a773f663116fd518097e1df050"
  },
  {
    "url": "tags/培训/index.html",
    "revision": "41d6c2c5c2ad609f2b705282215ba9d1"
  },
  {
    "url": "tags/小程序/index.html",
    "revision": "abb6f4057270b11890b2ce513884ed0a"
  },
  {
    "url": "tags/小霸王游戏机/index.html",
    "revision": "408971a31f529e760cbf22f40d9f4f5c"
  },
  {
    "url": "tags/引流/index.html",
    "revision": "dde78e7c7c90c9f2302b2e25fc739e89"
  },
  {
    "url": "tags/微信/index.html",
    "revision": "2bb73b390d56801ac3e59ebdeeebe7fd"
  },
  {
    "url": "tags/抓包/index.html",
    "revision": "6f48d2b31a3ea7c238701580f02e4d70"
  },
  {
    "url": "tags/插件开发/index.html",
    "revision": "3cc059959ddfdb44e6a497f38d69b556"
  },
  {
    "url": "tags/未来/index.html",
    "revision": "44157b98718db7ed3f0ee851a5cad3cd"
  },
  {
    "url": "tags/源码/index.html",
    "revision": "d225c1909bd418ceeae7319c66fea4f2"
  },
  {
    "url": "tags/滑块验证码/index.html",
    "revision": "f9b6cb31dba6de7e016f1fa57d52fdc0"
  },
  {
    "url": "tags/程序员/index.html",
    "revision": "5da7a59a5d0d4c99c6c8c3d990fee14b"
  },
  {
    "url": "tags/第二技能/index.html",
    "revision": "67b1c851334886d73f81be98f9155b84"
  },
  {
    "url": "tags/网站安全/index.html",
    "revision": "78436d20b9f66c63674fc16b91714f5d"
  },
  {
    "url": "tags/自媒体/index.html",
    "revision": "ad81f161fe11acda03f0bb6ddcfe02ac"
  },
  {
    "url": "tags/装饰器/index.html",
    "revision": "587ea611b1cecc765eba7acc051ac8a6"
  },
  {
    "url": "tags/面试/index.html",
    "revision": "07b146e9caf0b8b6ef54dd65759cf579"
  },
  {
    "url": "tags/面试题/index.html",
    "revision": "d11be5089a395aacca9121959ea37ac8"
  },
  {
    "url": "timeline/index.html",
    "revision": "a73bb6667ebb08604713513e1239469f"
  },
  {
    "url": "views/about.html",
    "revision": "94220387d78895ce348fa60a98d82290"
  },
  {
    "url": "views/Deno/2020/【Deno】初识Deno.html",
    "revision": "0f3fd61d1443aa2b180eb9ae673b9f95"
  },
  {
    "url": "views/Docker/2019/Docker 仓库.html",
    "revision": "ef00b50ffbe0fe5adac6f3bf95ab34fe"
  },
  {
    "url": "views/Docker/2019/使用 Dockerfile 制作镜像.html",
    "revision": "b6b06d9ec721b746b1be95c119be88c3"
  },
  {
    "url": "views/Docker/2019/使用 Nexus 创建 Docker 仓库.html",
    "revision": "aa0a3774d3026109f2723da241960308"
  },
  {
    "url": "views/Docker/2019/初识 Docker.html",
    "revision": "971d2a69214e337af7b5a080ca838782"
  },
  {
    "url": "views/Nginx/2018/Nginx 配置.html",
    "revision": "8a217ac8fae3f3b00bc6b2d0d05ebe9a"
  },
  {
    "url": "views/Python/2019/Python实现头条自动发文章，赚点广告费.html",
    "revision": "38bb4fb75b333144584ddfa64544c5cc"
  },
  {
    "url": "views/Python/2019/装饰器详解.html",
    "revision": "f48cad4b0d11c15b39815da7261ca116"
  },
  {
    "url": "views/前端/2017/腾讯地图实现地图找房功能.html",
    "revision": "f2cedb47c5fccfc9bdbbd0e146e1c72f"
  },
  {
    "url": "views/前端/2018/Nuxt 实践.html",
    "revision": "85d446cfc094fa026597322f960e2d87"
  },
  {
    "url": "views/前端/2018/Vue 微信自定义分享总结.html",
    "revision": "21de3ba8b989990653b5f5d10aa4c771"
  },
  {
    "url": "views/前端/2018/记 Nuxt 开发遇到 OOM.html",
    "revision": "90938d6eb452163912ff7dcfa21209b1"
  },
  {
    "url": "views/前端/2019/10 分钟搭建私服 NPM.html",
    "revision": "9fe623391d1db03ba274584ae7341f54"
  },
  {
    "url": "views/前端/2020/【源码解读】通过分析 Vue computed 的实现，居然发现隐藏的小彩蛋.html",
    "revision": "e4e5a3a60dd3f1863d0b0b649e937733"
  },
  {
    "url": "views/前端/2020/【面试题解析】从 Vue 源码分析 key 的作用.html",
    "revision": "d5477966e34597ef549e8465b7ff0a31"
  },
  {
    "url": "views/前端/2020/【面试题解析】手动实现 Promise.html",
    "revision": "a9757e7ed94d95bfafbab2db79f0ed78"
  },
  {
    "url": "views/前端/2020/【面试题解析✨】Vue 的数据是如何渲染到页面的？.html",
    "revision": "80b7bb0e5c26a6c62e29e6e52e8a0519"
  },
  {
    "url": "views/前端/2020/开源了一个图表库lw-chart.html",
    "revision": "a7266f30721aa0e70064e576d84477ac"
  },
  {
    "url": "views/前端/2020/通宵写了个 Chrome 插件.html",
    "revision": "ce7d5d4259cdb47afce98c66e636f563"
  },
  {
    "url": "views/前端/2020/通过小程序云开发了解Serverless.html",
    "revision": "f8924519749925a258d4a175145c47b7"
  },
  {
    "url": "views/前端/2021/技术人玩小游戏，如何“不战而胜”.html",
    "revision": "6a7de75cdb9a3a06947a5d71a85f5206"
  },
  {
    "url": "views/前端/2021/深入 Vue3 源码，学习初始化流程.html",
    "revision": "a939b265c8c7686e0db50e323f4043fb"
  },
  {
    "url": "views/前端/2021/深入 Vue3 源码，学习响应式原理.html",
    "revision": "4704262eb2fe8f595fe57619b2926a6e"
  },
  {
    "url": "views/工具/2019/持续集成工具.html",
    "revision": "237ab9b280afde16f964de53660d7df8"
  },
  {
    "url": "views/随笔/2019/关于 IT 培训.html",
    "revision": "95c8a25592797e4b4dd5614491b79cc1"
  },
  {
    "url": "views/随笔/2019/对未来的一些思考.html",
    "revision": "12bb2125578948af13dda65c80d79417"
  },
  {
    "url": "views/随笔/2019/我是如何面试别人的.html",
    "revision": "1b2e333a0cd164fd1f8d5be395e35000"
  },
  {
    "url": "views/随笔/2019/程序员为什么要培养第二技能.html",
    "revision": "16a841d5a8c4d99eb9bfacb021727494"
  },
  {
    "url": "views/随笔/2020/如何增加收入？.html",
    "revision": "2e711172a36c73f8841af0d91fb65ab6"
  },
  {
    "url": "views/随笔/2021/VuePress 配置公众号获取验证码阅读全文 - 公众号引流插件.html",
    "revision": "6d8c813ab8d44911c47e27371439e8d7"
  },
  {
    "url": "views/随笔/2021/我的年终总结以及新年计划.html",
    "revision": "92204e3862e37afb0b4a00cb6bb2b007"
  },
  {
    "url": "views/随笔/2021/朋友圈小霸王游戏机，快来领取链接和源码找回青春记忆.html",
    "revision": "d7318a58bed6ca40d061844336841501"
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
