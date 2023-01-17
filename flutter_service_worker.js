'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "3ba381281b66d36f0d93d7b8ab5cd32f",
"assets/assets/fonts/arial.ttf": "5995c725ca5a13be62d3dc75c2fc59fc",
"assets/assets/fonts/cairo_regular.ttf": "81b37df3b28d397659607391993eef22",
"assets/assets/icons/app_icn.png": "9d962e8832d4d74ddfb091202fb0514a",
"assets/assets/icons/Bell.svg": "f9a892e2f89ca5dae066a4a7869eb0c2",
"assets/assets/icons/BlogPost.svg": "939f9fb6cd26d3cbda222efc588109c8",
"assets/assets/icons/Comments.svg": "143a3d52dffc4e48fc5a91d95f0b3dc0",
"assets/assets/icons/Dashboard.svg": "76143897d92103aa1a722a8a935c180f",
"assets/assets/icons/Dribbble.svg": "498fb76de8c7319c101cea72ba949d45",
"assets/assets/icons/Facebook.svg": "540cdcfff64442a60ea6a639827e6f5a",
"assets/assets/icons/Linkedin.svg": "e29b9c1efa3c6d212c4e1862126b0807",
"assets/assets/icons/location_icn.png": "531195cf9b9e92ee7c7647cc7ae8483a",
"assets/assets/icons/Logout.svg": "cc8c02a3992f5c79a727174c41cdf9df",
"assets/assets/icons/Message.svg": "9dc649696d3907e25f5a2f3410fed494",
"assets/assets/icons/Pages.svg": "7afb8a5289f1e1cf9858b70a8a239700",
"assets/assets/icons/Post.svg": "f7de05f5c7937dcf5ac9211460e1549e",
"assets/assets/icons/Setting.svg": "fa19f55ba5bb75150a93264dbb456c87",
"assets/assets/icons/Statistics.svg": "70d980e389901023c21fdbf751c5d5d7",
"assets/assets/icons/Subscribers.svg": "a086f90bff322d22e27a96d166681ccf",
"assets/assets/icons/Twitter.svg": "3c43caf125b9400f0d7bd12e0ace53de",
"assets/assets/images/1.jpg": "a38057c2e92d2dd1e9abb27dfd51fa59",
"assets/assets/images/2.jpg": "396ab31732470cef0dbfb49dafddf969",
"assets/assets/images/3.jpg": "c7ca518602a73b20ad89537c8639cd68",
"assets/assets/images/4.jpg": "1bc707ce9c87deaa83d093099ce43f0d",
"assets/assets/images/5.jpg": "148312d09e690dd090d879f4dab5cc76",
"assets/assets/images/app_logo_ar.png": "ff012d0e6ee9c8c963102af736c03df6",
"assets/assets/images/app_logo_ar_white.png": "769863d4a8ba2a598dcdcb5402c55b9f",
"assets/assets/images/app_logo_en.png": "eeec14392e5eb605708a5b96a3ef4858",
"assets/assets/images/app_logo_en_white.png": "4d0e101a02edb156ab29de084e0e1262",
"assets/assets/images/faqs.png": "7051ac2e5a91965c456e21fc095f7299",
"assets/assets/images/person.jpg": "c19cfef8bfb064cc3dc37e00c667a0e9",
"assets/assets/images/tc.png": "148c4497632c9f1145ac384373d26542",
"assets/assets/images/waiting_background.jpg": "d5f4fc9dbbc3e2705f799705699ccbbc",
"assets/assets/locale/localization_ar.json": "2f777e2ea2096dd161a9356e6ca313e0",
"assets/assets/locale/localization_en.json": "9e768970aab63fc7dcb785bfd0e048f0",
"assets/FontManifest.json": "6475012adf7c371c92fdb800f07ce81a",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "dafcaab0217f5217114f17f9fce7a230",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/shaders/ink_sparkle.frag": "06d2f94d6cd464b7957d709b67221b58",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase-messaging-sw.js": "bdd0495a0ca9592a66e07a3189c36c30",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "2ce7b854fc16947516a1f4e6a0f3f9a2",
"icons/Icon-512.png": "700e332075a7cd04adc4bf2b1c15efe1",
"icons/Icon-maskable-192.png": "700e332075a7cd04adc4bf2b1c15efe1",
"icons/Icon-maskable-512%20-%20Copy.png": "700e332075a7cd04adc4bf2b1c15efe1",
"index.html": "6488aff69abe13079d4092c8de6bb76b",
"/": "6488aff69abe13079d4092c8de6bb76b",
"main.dart.js": "da89c7e79fb38ebd587239bc4f8d336a",
"manifest.json": "ff5e05e0402a96f4a67f7f4eed030986",
"splash/img/dark-1x.png": "0ce44c594b92bd6f16eba619f0209eca",
"splash/img/dark-2x.png": "2768ec29b9d2eab9dfa52deb61fa7014",
"splash/img/dark-3x.png": "bf298906a321dda29bcbed5b3ca3137d",
"splash/img/dark-4x.png": "8b6bba9bdbdec033255e398746117062",
"splash/img/light-1x.png": "fe50d5542a211fa64f48d852eb44c450",
"splash/img/light-2x.png": "288e738ac331534e48e31a887736810d",
"splash/img/light-3x.png": "0141293463399a2f6fcebca4e45b957f",
"splash/img/light-4x.png": "12b72a753b4c237ec768a4368b172a35",
"splash/splash.js": "c6a271349a0cd249bdb6d3c4d12f5dcf",
"splash/style.css": "ff7a1ddd585610705517a5e089ab3a32",
"version.json": "91782145946cd3d5d22ec882f8b6d45b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
