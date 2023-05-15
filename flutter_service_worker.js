'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "0bdb276b5380b4681f3d408d4cba8828",
"assets/assets/fonts/arial.ttf": "5995c725ca5a13be62d3dc75c2fc59fc",
"assets/assets/fonts/cairo_black.ttf": "2374c281704270d2e3008b421ed80885",
"assets/assets/fonts/cairo_bold.ttf": "19a30f18e32cf8dbb9d0cfcee9e2c01e",
"assets/assets/fonts/cairo_extra_bold.ttf": "461a6eeaed7944175bd3b03209b6015a",
"assets/assets/fonts/cairo_extra_light.ttf": "c78a99987273c45c6f7c6d7bcd2f7f76",
"assets/assets/fonts/cairo_light.ttf": "a6793d94c6568946c4755901ef0f04ed",
"assets/assets/fonts/cairo_medium.ttf": "76f957349a6defbef1b6980bc4c8892a",
"assets/assets/fonts/cairo_regular.ttf": "94c4feb516a9bd22a5ee417f6e099c93",
"assets/assets/fonts/cairo_semi_bold.ttf": "a29aa6689e17cc4920f865b1e2f206fd",
"assets/assets/icons/app_icn.png": "9d962e8832d4d74ddfb091202fb0514a",
"assets/assets/icons/book_truck.riv": "c37d39ae762a5236fc84ca17fe3ccbad",
"assets/assets/icons/Dashboard.svg": "76143897d92103aa1a722a8a935c180f",
"assets/assets/icons/Facebook.svg": "540cdcfff64442a60ea6a639827e6f5a",
"assets/assets/icons/invoice_icn.png": "841c54ea6a0d65a73dc6fbdac10e3358",
"assets/assets/icons/Linkedin.svg": "e29b9c1efa3c6d212c4e1862126b0807",
"assets/assets/icons/location_icn.png": "552b7db0c2801e33da6898e06dda3f0d",
"assets/assets/icons/Logout.svg": "cc8c02a3992f5c79a727174c41cdf9df",
"assets/assets/icons/Message.svg": "9dc649696d3907e25f5a2f3410fed494",
"assets/assets/icons/Pages.svg": "7afb8a5289f1e1cf9858b70a8a239700",
"assets/assets/icons/play.png": "33907d629151525d09862ec72a1a489e",
"assets/assets/icons/Post.svg": "f7de05f5c7937dcf5ac9211460e1549e",
"assets/assets/icons/qrcode_icn.gif": "ba56ec1117cb5099609633080f544388",
"assets/assets/icons/Setting.svg": "fa19f55ba5bb75150a93264dbb456c87",
"assets/assets/icons/Statistics.svg": "70d980e389901023c21fdbf751c5d5d7",
"assets/assets/icons/Subscribers.svg": "a086f90bff322d22e27a96d166681ccf",
"assets/assets/icons/Twitter.svg": "3c43caf125b9400f0d7bd12e0ace53de",
"assets/assets/images/1.jpg": "debd11f82c8ebb5df9191566d511c27c",
"assets/assets/images/2.jpg": "9fa4a990b692624107384ef003d8305b",
"assets/assets/images/3.jpg": "bcb0851b88525ab698f448a58d764848",
"assets/assets/images/4.jpg": "ce1093216eb9a3f746869b3050793be4",
"assets/assets/images/5.jpg": "32e5c2af27c707b71e513192d605b1fd",
"assets/assets/images/app_logo_ar.png": "ff012d0e6ee9c8c963102af736c03df6",
"assets/assets/images/app_logo_ar_white.png": "769863d4a8ba2a598dcdcb5402c55b9f",
"assets/assets/images/app_logo_en.png": "eeec14392e5eb605708a5b96a3ef4858",
"assets/assets/images/app_logo_en_white.png": "4d0e101a02edb156ab29de084e0e1262",
"assets/assets/images/faqs.png": "7051ac2e5a91965c456e21fc095f7299",
"assets/assets/images/person.jpg": "c19cfef8bfb064cc3dc37e00c667a0e9",
"assets/assets/images/tc.png": "148c4497632c9f1145ac384373d26542",
"assets/assets/images/waiting_background.jpg": "789c54a9e8887dc977ab6f4fb45deb69",
"assets/assets/locale/localization_ar.json": "c22f70ab3b293ff1bad364ad8bcbce1d",
"assets/assets/locale/localization_en.json": "9aff252da0acd9e022b85c1ce6d6d371",
"assets/FontManifest.json": "d510b5929ee47b8862fdabde16fe1504",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "06463f98d1690a3cdb834805a07c7eb7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase-messaging-sw.js": "bdd0495a0ca9592a66e07a3189c36c30",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "2ce7b854fc16947516a1f4e6a0f3f9a2",
"icons/Icon-512.png": "700e332075a7cd04adc4bf2b1c15efe1",
"icons/Icon-maskable-192.png": "700e332075a7cd04adc4bf2b1c15efe1",
"icons/Icon-maskable-512%20-%20Copy.png": "700e332075a7cd04adc4bf2b1c15efe1",
"index.html": "019f85a0705e1aa40270af33c5702500",
"/": "019f85a0705e1aa40270af33c5702500",
"main.dart.js": "5ac051a6b13ff8fe900047f87fcc2ff2",
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
"splash/style.css": "225fc5f8330fcc37bd95f1d948ddb8a8",
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
