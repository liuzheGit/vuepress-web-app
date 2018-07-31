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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "63ebda6e1572fda6f72a6a0c327b0e41"
  },
  {
    "url": "assets/css/0.styles.031b6b85.css",
    "revision": "962cbaa4cbe5cdb85fc1f63b0f8d3792"
  },
  {
    "url": "assets/fonts/element-icons.6f0a7632.ttf",
    "revision": "6f0a76321d30f3c8120915e57f7bd77e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.5b071193.js",
    "revision": "d6aab839eba11795e1d12c2ff8e771d7"
  },
  {
    "url": "assets/js/11.544205a9.js",
    "revision": "6a1a567b08bc771c0a07757b6c079328"
  },
  {
    "url": "assets/js/12.c31125e5.js",
    "revision": "13b8857e41a305186ade5978bffd6018"
  },
  {
    "url": "assets/js/13.d832cc42.js",
    "revision": "05510c187defc3ef24770f979048113c"
  },
  {
    "url": "assets/js/14.05d6de49.js",
    "revision": "f1913c1f460e2ef4a87b5764d3255894"
  },
  {
    "url": "assets/js/15.0e9c1876.js",
    "revision": "26670556239be28bb2fecf022639138c"
  },
  {
    "url": "assets/js/16.078765d3.js",
    "revision": "e4509ead61df5adde55fdd913eb04a80"
  },
  {
    "url": "assets/js/17.32f0f25d.js",
    "revision": "23d90bd81397a598386318e1676eaf6a"
  },
  {
    "url": "assets/js/18.46c2ce43.js",
    "revision": "d43b2dcfcfe32183e5fe9e5cd2b4380d"
  },
  {
    "url": "assets/js/19.fa188afc.js",
    "revision": "5d563bd8e3cd6a2e0a465421afc058da"
  },
  {
    "url": "assets/js/2.b10b5f9b.js",
    "revision": "3a2bb808feef00e15055430cb04107c4"
  },
  {
    "url": "assets/js/20.82a19e10.js",
    "revision": "4bbbcc7e844447c605eead51a39ba59c"
  },
  {
    "url": "assets/js/21.b020585c.js",
    "revision": "f46fe3644412eaac61f754df21f72ff8"
  },
  {
    "url": "assets/js/22.0219dd0e.js",
    "revision": "28e042a4ff0cb3265dc8523435d215de"
  },
  {
    "url": "assets/js/23.7ee91638.js",
    "revision": "29bdd5f3849dba97c63157257cfc17b1"
  },
  {
    "url": "assets/js/24.264c71bf.js",
    "revision": "6e06bbe3a7d9aa6fc65a04ab9b8c63d6"
  },
  {
    "url": "assets/js/3.ded60ad4.js",
    "revision": "f00134dffed362f6d478622055130328"
  },
  {
    "url": "assets/js/4.d86a8d0d.js",
    "revision": "e9c828da97a136a56783b8df63d93c5b"
  },
  {
    "url": "assets/js/5.b654302b.js",
    "revision": "d42cab156e1d32fe8a7bf435845486f2"
  },
  {
    "url": "assets/js/6.b86e266d.js",
    "revision": "e38651e691210ed5c35979f19b630e65"
  },
  {
    "url": "assets/js/7.afe64b05.js",
    "revision": "3f9eff8722cebf90fa2ca96bd096f558"
  },
  {
    "url": "assets/js/8.5b62d8b8.js",
    "revision": "da08136f42235e1506994bf39db68bbb"
  },
  {
    "url": "assets/js/9.2bffa9e0.js",
    "revision": "c765bdbb9612b601c35d41e4b995f465"
  },
  {
    "url": "assets/js/app.97ceaf89.js",
    "revision": "2e0e9013d26aff5bc1d8ae045b514a9d"
  },
  {
    "url": "assets/js/vendors~docsearch.9cc249f6.js",
    "revision": "35990c0be5837fc72eac2a0352eb5392"
  },
  {
    "url": "en/application/index.html",
    "revision": "bde351362ad0e557d9b274d01f297cb7"
  },
  {
    "url": "en/index.html",
    "revision": "8f831ede18f6ab30fd774c5e57e450bb"
  },
  {
    "url": "google21c733509a589aaa.html",
    "revision": "dc170db798841bd226dabf5217b26a1f"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "bbe9fcca4132438afbd61d01f5b573b9"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "5de773e7f554dc38c354662e62bbde3c"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "c924d6c1d7abf0827bf05e7f533d41c4"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "5285f5460f1f76972a12d741280b73cb"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "cc40dfd01cf3b235ce6a10ebedec10c0"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "2a0b600f3ad0d71d9a6f789b99d3609a"
  },
  {
    "url": "icons/mstile-144x144.png",
    "revision": "d9e30f1bb3c8825211698eb1de034288"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "8230c53bdf042e4a40d3f61e3d1e6b8b"
  },
  {
    "url": "icons/mstile-310x150.png",
    "revision": "80aeead9a626b8e46289d81c90d0f264"
  },
  {
    "url": "icons/mstile-310x310.png",
    "revision": "1a07aeea0d6762459b94e520bbacec69"
  },
  {
    "url": "icons/mstile-70x70.png",
    "revision": "51884ae4c1403f79bf48adb9ca3427df"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "ee5048b66d53514bd4e6535007eef213"
  },
  {
    "url": "images/MG-1P.png",
    "revision": "b33194b1fcd1a81287fee93e49e43c86"
  },
  {
    "url": "index.html",
    "revision": "170bb02f43ec76d40ccde9ab8e2c42cc"
  },
  {
    "url": "logo.png",
    "revision": "bbe9fcca4132438afbd61d01f5b573b9"
  },
  {
    "url": "love.svg",
    "revision": "dce92620955225095706c1f4a9010533"
  },
  {
    "url": "zh/application/index.html",
    "revision": "0e583f9b8d51ff87960528881fe67a5b"
  },
  {
    "url": "zh/article/beautify-vue-by-eslint-and-prettier.html",
    "revision": "91141cb3d16038204b0cc97c593ef9a4"
  },
  {
    "url": "zh/article/index.html",
    "revision": "f445d044ae3d65242bc89c6de28f4752"
  },
  {
    "url": "zh/article/talk-about-my-blogs.html",
    "revision": "4687f207772c0efb68642498b3c2bb93"
  },
  {
    "url": "zh/article/vue-webpack-boilerplate-template.html",
    "revision": "8cd773d378764f3017349944ef6c6894"
  },
  {
    "url": "zh/blog/csdn-blog.html",
    "revision": "1eda024b4d5e68a2edea000f6942c086"
  },
  {
    "url": "zh/blog/hexo-blog.html",
    "revision": "c792071283c428ca3aa4159f21906290"
  },
  {
    "url": "zh/blog/index.html",
    "revision": "03b48d48f8d5fe70e422c27adfd2a6ee"
  },
  {
    "url": "zh/blog/jekyll-blog.html",
    "revision": "5d489d9c859bba764fa4202e7d15a71f"
  },
  {
    "url": "zh/blog/jianshu-blog.html",
    "revision": "6a1aee4788d522953d5297cf0470d01f"
  },
  {
    "url": "zh/blog/vuepress-blog.html",
    "revision": "e2c18aa37e60cf5e7281a588c934983a"
  },
  {
    "url": "zh/blog/wechat-blog.html",
    "revision": "af3ac718748745ef06ce1298fb9038a1"
  },
  {
    "url": "zh/index.html",
    "revision": "15d6914fbe4d161235a932fc858d8b3e"
  },
  {
    "url": "zh/recruit/index.html",
    "revision": "42c497a10813d3eca59be6a7a612b0ed"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
