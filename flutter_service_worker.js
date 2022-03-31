'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "f70f9d2662a80cfd386f0df87bd3866d",
"assets/assets/fonts/cairo_regular.ttf": "81b37df3b28d397659607391993eef22",
"assets/assets/fonts/raleway_regular.ttf": "75b4247fdd3b97d0e3b8e07b115673c2",
"assets/assets/icons/app_icn.png": "9d962e8832d4d74ddfb091202fb0514a",
"assets/assets/icons/Bell.svg": "9bc59ab4b881ce8834756d6efb9727e4",
"assets/assets/icons/BlogPost.svg": "1591f545f50891d42ea10d582104ed1e",
"assets/assets/icons/Comments.svg": "fe5526f5e201592904e18e0222463199",
"assets/assets/icons/Dashboard.svg": "9fe5ff508d43a7ab5e9e04cb95460e82",
"assets/assets/icons/Dribbble.svg": "ada20573b623c94cc622b680ba937148",
"assets/assets/icons/Facebook.svg": "e299329132035bb7434be11c853249e2",
"assets/assets/icons/Linkedin.svg": "4f2cc8c28af3049b543d44ac3d47628e",
"assets/assets/icons/Logout.svg": "72e70359d58453211e79bb6997fe8b16",
"assets/assets/icons/Message.svg": "37140f65978e0b67dc31bd815c72af9f",
"assets/assets/icons/Pages.svg": "b6036bea7a2a60a8cd0807d1edc0abd0",
"assets/assets/icons/Post.svg": "e6d121c4a6ec5cd00e9c56e647f5fe9b",
"assets/assets/icons/Setting.svg": "93dc419a0a2ee4ff7be14c7fabe39c0d",
"assets/assets/icons/Statistics.svg": "0853d0fbb5dce77eee9d45129b8c11c4",
"assets/assets/icons/Subscribers.svg": "b41a302e79395e32514c221029b7f035",
"assets/assets/icons/Twitter.svg": "0776622b3e786189d271a58d6eaed86e",
"assets/assets/images/1.jpg": "c4685a941acaf3a8be24b47f45432b44",
"assets/assets/images/10.jpg": "988b41963b91c5c147af5b11a2af8f61",
"assets/assets/images/11.jpg": "1c71f1fb6691018fe8a69f9d587ff359",
"assets/assets/images/2.jpg": "519183c9d76d188ecc95e4dfeac78fe5",
"assets/assets/images/3.jpeg": "64ef2c06ad8b3b0da1fcb34b8fb8e58b",
"assets/assets/images/4.jpg": "37feed823cf6ff90a58f47f2fa56c02b",
"assets/assets/images/5.jpg": "f3b1216156d59f94734700e8c0707b29",
"assets/assets/images/6.jpg": "921d4f5c3c51e90fc752d3e089cadb58",
"assets/assets/images/7.jpg": "37feed823cf6ff90a58f47f2fa56c02b",
"assets/assets/images/8.jpg": "902c898d2a60fbbf0174d3566e0b29c3",
"assets/assets/images/9.png": "77ebf66f82e9bbddb4ca3899259e68a2",
"assets/assets/images/aboutus.jpg": "37feed823cf6ff90a58f47f2fa56c02b",
"assets/assets/images/app_logo_ar.png": "ff012d0e6ee9c8c963102af736c03df6",
"assets/assets/images/app_logo_ar_white.png": "769863d4a8ba2a598dcdcb5402c55b9f",
"assets/assets/images/app_logo_en.png": "eeec14392e5eb605708a5b96a3ef4858",
"assets/assets/images/app_logo_en_white.png": "4d0e101a02edb156ab29de084e0e1262",
"assets/assets/images/handshake.riv": "9cec58249ba4028d3f54257f3dd708a6",
"assets/assets/images/photo1.jpg": "8919c83cfb6ca5a6106c2841ae065056",
"assets/assets/images/photo2.jpg": "8b69cc14acbdd21b279403cbcfa37ac2",
"assets/assets/images/photo3.jpg": "e15fc31e4ed05eb4370c40f1e765131e",
"assets/assets/images/photo4.jpg": "28b8b952e3faf30125d56b8c5f47c532",
"assets/assets/images/photo5.jpg": "4415164461b5175e14d55b6f40470faa",
"assets/assets/images/photo6.jpg": "fcc4a2d57e985be46673cc5107ed39ef",
"assets/assets/images/slider1.jpg": "bf2a2e6219d093f09c8fb1854656bec1",
"assets/assets/images/slider2.jpg": "921d4f5c3c51e90fc752d3e089cadb58",
"assets/assets/images/waiting_background.jpg": "d5f4fc9dbbc3e2705f799705699ccbbc",
"assets/FontManifest.json": "23d45d56582b29a8d9d8771aa0b1bb28",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "1ed2d671c0208319aa72b01a45cd0ef7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/flutter_google_places/assets/google_black.png": "97f2acfb6e993a0c4134d9d04dff21e2",
"assets/packages/flutter_google_places/assets/google_white.png": "40bc3ae5444eae0b9228d83bfd865158",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "2ce7b854fc16947516a1f4e6a0f3f9a2",
"icons/Icon-512.png": "700e332075a7cd04adc4bf2b1c15efe1",
"icons/Icon-maskable-192.png": "700e332075a7cd04adc4bf2b1c15efe1",
"icons/Icon-maskable-512%20-%20Copy.png": "700e332075a7cd04adc4bf2b1c15efe1",
"index.html": "1818bba301d31104df3986d896b1898e",
"/": "1818bba301d31104df3986d896b1898e",
"main.dart.js": "a832a88a7599c155c4e82bcf5a3ecba9",
"manifest.json": "75ecaf4c2cf11f04a87156f32c9e9256",
"version.json": "91782145946cd3d5d22ec882f8b6d45b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
