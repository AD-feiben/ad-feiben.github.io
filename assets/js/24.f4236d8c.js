(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{573:function(s,t,n){"use strict";n.r(t);var a=n(6),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("因为之前一直使用的是 hash 模式，所以配置微信分享比较简单，不管是 Android 还是 iOS，只需要获取一次签名即可，然后在需要配置分享的页面在 wx.ready 的回调中编写分享的逻辑即可。")]),s._v(" "),n("p",[s._v("原来一直用 hash 模式都没什么问题，可能是最近微信升级之后，在 Android 端微信授权后重定向回来页面并不会刷新，导致我无法获取用户的授权信息。尝试了很久之后将路由改成 history 模式就解决了。但是 history 模式也有很多棘手的问题，分享就是其中一个。")]),s._v(" "),n("p",[s._v("在网上查阅了大量文章，但大多都是点到为止。说明了 Android 和 iOS 获取签名失败的问题。简单的说就是，在 iOS 的机器中，获取签名只需要去第一次进入的地址，在 Android 的机器中，每次路由跳转都需要拿当前地址去授权。 具体可以参考"),n("a",{attrs:{href:"https://github.com/yongheng2016/blog/issues/78",target:"_blank",rel:"noopener noreferrer"}},[s._v("微信分享 总结（SPA/history模式）"),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v("我的做法是在打开页面的时候就去获取签名，然后进入需要分享的页面时，再判断是或否在 Android 设备中，再决定是否需要获取新的签名。签名的问题解决之后，我以为就OK了，后面才发现在 iOS 分享还是有问题。最后定位到的问题是在 iOS 中不会在进入分享页之后重复触发 wx.ready 的方法，只需要编写分享的逻辑即可。")]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getSignature")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取微信签名")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wxShare")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("data")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token regex"}},[n("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),n("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("(Android)")]),n("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),n("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("i")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("navigator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("userAgent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在 Android 设备，需要获取新的签名")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getSignature")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n  wx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ready")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("shareConfig")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// iOS 设备不会多次触发 wx.ready")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("shareConfig")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("shareConfig")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("data")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 分享逻辑")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br")])]),n("hr"),s._v(" "),n("p",[s._v("如果你喜欢我的文章，希望可以关注一下我的公众号【前端develop】")]),s._v(" "),n("p",[n("img",{attrs:{src:"/imgs/qrcode.png",alt:"前端develop"}})])])}),[],!1,null,null,null);t.default=e.exports}}]);