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
    "url": "1525347528-1146-4cc2019026f59c4.jpg",
    "revision": "878ecccef215e9152f9f7b827b038037"
  },
  {
    "url": "1525347528-7036-c5c09dadfe0ee3e.jpg",
    "revision": "b886ae93b6dec88021ce16436f366016"
  },
  {
    "url": "404.html",
    "revision": "96bcdbb1e47a07203716308261e4dbe1"
  },
  {
    "url": "assets/css/0.styles.8123aa68.css",
    "revision": "579a47c1c3142edcf663632548b76c89"
  },
  {
    "url": "assets/img/1525347528-1146-4cc2019026f59c4.878eccce.jpg",
    "revision": "878ecccef215e9152f9f7b827b038037"
  },
  {
    "url": "assets/img/1525347528-7036-c5c09dadfe0ee3e.b886ae93.jpg",
    "revision": "b886ae93b6dec88021ce16436f366016"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.28a81ff7.js",
    "revision": "7a8843cb542fbe55dd60a1ccfd7e1e16"
  },
  {
    "url": "assets/js/11.72b8f5e5.js",
    "revision": "cd498cc22780431006669cf2b731714b"
  },
  {
    "url": "assets/js/12.f3a88e84.js",
    "revision": "14ec54ca215485f6ac5ac67504b0b299"
  },
  {
    "url": "assets/js/13.81b8172a.js",
    "revision": "5a05b6efebc63db82c920fc4a7883c4b"
  },
  {
    "url": "assets/js/14.e781ae1d.js",
    "revision": "31bd4201218ff98bb36a9777c16255f9"
  },
  {
    "url": "assets/js/15.020b10df.js",
    "revision": "ef109c6e48d5d25c1fb623389384c097"
  },
  {
    "url": "assets/js/16.90709359.js",
    "revision": "5e7fc53589f87b7ea1ee663bb7f13743"
  },
  {
    "url": "assets/js/17.3df06e95.js",
    "revision": "6e19b53d89048cfb3a517db0da022ed1"
  },
  {
    "url": "assets/js/18.3731559d.js",
    "revision": "9315788db136aa6478657804fb3a3fb8"
  },
  {
    "url": "assets/js/19.4a84e198.js",
    "revision": "52d94ca6f09b3914f8610502deb01530"
  },
  {
    "url": "assets/js/2.4ce87602.js",
    "revision": "2014c261c578f3061f13f24cf3464593"
  },
  {
    "url": "assets/js/20.79b8b31e.js",
    "revision": "c08db200ba6926bd53383042572f4e8b"
  },
  {
    "url": "assets/js/21.5ead28b6.js",
    "revision": "391c9fbf3137aea06fcb8ee361bde3e7"
  },
  {
    "url": "assets/js/22.be8fb46f.js",
    "revision": "5b59029b7e422f74d8e591b91cd673c5"
  },
  {
    "url": "assets/js/23.4bd3b1ba.js",
    "revision": "0f2bcb414632808a002f365524a842fe"
  },
  {
    "url": "assets/js/24.6bb14c7f.js",
    "revision": "78e6b93728c6a7d9df8632e3d7a05372"
  },
  {
    "url": "assets/js/25.5d6686b8.js",
    "revision": "1d467bd291e166e4da163dc7cde3eac7"
  },
  {
    "url": "assets/js/26.2fafad9e.js",
    "revision": "273e7f5ff97df7998836630d1155976c"
  },
  {
    "url": "assets/js/27.42e9c46f.js",
    "revision": "307515dcb88a63c3107339d55e85ec57"
  },
  {
    "url": "assets/js/28.6e7fc3b6.js",
    "revision": "e4cd1c8646c8b3afbc69c08839221d51"
  },
  {
    "url": "assets/js/29.2c08bc76.js",
    "revision": "61a7bf257d63423bc3b110a1bb64477d"
  },
  {
    "url": "assets/js/3.b518ad7b.js",
    "revision": "3e0ed29715d6c6fe3c57f7e552be2c9e"
  },
  {
    "url": "assets/js/30.447cf794.js",
    "revision": "4a356750ccc42f4de0d69bd194e9c43f"
  },
  {
    "url": "assets/js/4.048c795e.js",
    "revision": "27c3eecdd9bcaca8157f565658f270ac"
  },
  {
    "url": "assets/js/5.60a20531.js",
    "revision": "3897133d62db47a061796c002bb8f345"
  },
  {
    "url": "assets/js/6.85e30da8.js",
    "revision": "acfff649bc61682ba49c098c07113a0d"
  },
  {
    "url": "assets/js/7.bf72ac98.js",
    "revision": "acd6f180c87519259446dc8b7ed5665c"
  },
  {
    "url": "assets/js/8.c760dc1f.js",
    "revision": "7b0fc8ee4217dc52c2716d0b8d7b6137"
  },
  {
    "url": "assets/js/9.bc2f6831.js",
    "revision": "b717906a91bdf1e7752e2a145769ab53"
  },
  {
    "url": "assets/js/app.a742bda2.js",
    "revision": "b93549487aab378cd036f4c987dac4a0"
  },
  {
    "url": "guide/css/code.html",
    "revision": "c341ccefd35806a031f1b38a9acf5135"
  },
  {
    "url": "guide/css/jdc_fd_guide_css.html",
    "revision": "fe4faf137b294647d089d257ecff1cee"
  },
  {
    "url": "guide/css/note.html",
    "revision": "886df329994e92d2bee4307848fea424"
  },
  {
    "url": "guide/css/query.html",
    "revision": "55ab52e2e5be9caa1d145cb853f12018"
  },
  {
    "url": "guide/css/reset.html",
    "revision": "d2c551863090de6b26256c3c1f2d74e3"
  },
  {
    "url": "guide/css/sass.html",
    "revision": "af8fc8d2c564198eac889100fca070f0"
  },
  {
    "url": "guide/css/webkit.html",
    "revision": "d30f17aa41427547287b8a080296a1df"
  },
  {
    "url": "guide/html/code.html",
    "revision": "738efdcb47e8070dbf62b2ebbacecde3"
  },
  {
    "url": "guide/html/note.html",
    "revision": "e41e4fb0e78f891e324659ee3f702433"
  },
  {
    "url": "guide/html/template.html",
    "revision": "1a6a91e8f71648dc93c3af855d1bb93e"
  },
  {
    "url": "guide/html/webapp.html",
    "revision": "26dd2f3633294fbece9e521181adb1a7"
  },
  {
    "url": "guide/image/format.html",
    "revision": "ef41cdde69cbafd6b7b987e56f8bbb72"
  },
  {
    "url": "guide/image/import.html",
    "revision": "7448779a5da32cd912f343ee605b77bf"
  },
  {
    "url": "guide/image/jdc_fd_guide_image.html",
    "revision": "bdf4d9ea7cc3eee3cdbeed4b49f26e92"
  },
  {
    "url": "guide/image/quality.html",
    "revision": "441a4f6b6b3e8a6fcd8c28628126955b"
  },
  {
    "url": "guide/image/size.html",
    "revision": "9b8b608222d5c42c28ea4d1fd31e248c"
  },
  {
    "url": "guide/index.html",
    "revision": "a11b36018533f898449b6859c59874a8"
  },
  {
    "url": "guide/javascript/code.html",
    "revision": "789bcb4e91f087168736b72b76c3b1f2"
  },
  {
    "url": "guide/javascript/language.html",
    "revision": "d55a35b4148bd2575656b6c17579e7c6"
  },
  {
    "url": "guide/name/classname.html",
    "revision": "a86d26cba4cc37bf4bf935605842335a"
  },
  {
    "url": "guide/name/dir.html",
    "revision": "63f0e5fa82571b366307c40146f8a416"
  },
  {
    "url": "guide/name/htmlcss.html",
    "revision": "3c28eac2ebdeb03f26edea85b0381d4f"
  },
  {
    "url": "guide/name/image.html",
    "revision": "27ef9764173244d0fba05efd3e04dfa6"
  },
  {
    "url": "guide/name/jdc_fd_guide_name.html",
    "revision": "9c7032228d60a3fdce8397efae629071"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "c7e6a26ddd61769e4105a71035a848cd"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "4b47f76c68b56ac7cc357b7dbb8a74fa"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "44e4b73494b9e182ba35eff7b6df318d"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "9711e7ca9a78df6c1b8059821d8167ce"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "699f43fc682b8b6da867fbd5e0f5e451"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "994b04b99cc36cbe6903d632119f58e3"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "07e7a2046e9dde522736df823e6c7fa7"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "7051f440644bfb899ec6ee4573bd3820"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "872e2cfa521dceb0713addace924f841"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "1f2d88488119e1b185137e11fe0a02d3"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "189f61bc020b642d72c6c8700287728a"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "a61c5b0bc36ccff6f8f4f554e997a415"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "fad73f7d6d8667b5755846f1d1c60e86"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "3987ec5982536d3b0c8387bd34e74af7"
  },
  {
    "url": "markdown/index.html",
    "revision": "df729cb0c2e1bfb3b5f68878359d12f7"
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
