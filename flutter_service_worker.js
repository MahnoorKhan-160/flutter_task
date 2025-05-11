'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "683612332098a3cd858990c7fd78055d",
"assets/AssetManifest.bin.json": "9b3bdd60083225f21ab9375d5d520d32",
"assets/AssetManifest.json": "d2848857288701ab6aca0254cfb9a35c",
"assets/assets/fonts/CalSans-Regular.ttf": "bc18334bb6e1ab7f1846653c47fc389b",
"assets/assets/fonts/NotoSans.ttf": "b72e420edb95cdf06e6e0a27bc0d964d",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/fonts/Roboto.ttf": "3aa911d4a1e76c8946952fe744ce7434",
"assets/assets/fonts/SignikaNegative-VariableFont_wght.ttf": "ca185087df279085441ff0d9a2f66026",
"assets/assets/fonts/Tuffy-Regular.ttf": "eb1e3ee733eb5c309810ab3be7b54461",
"assets/assets/images/air_buds.PNG": "304c582dbaff2587151c7798cf82ccae",
"assets/assets/images/banner.PNG": "334b27564857297f37d95ca6315cf51a",
"assets/assets/images/banner_2.PNG": "bebeb349b290ae270bc082a97862fa6f",
"assets/assets/images/brands_logo/apple_logo.PNG": "fe511531b190c18c1b208c7964ccbb2a",
"assets/assets/images/brands_logo/aspor_logo.PNG": "5a136c18cf4f445f2659b5dac2aa03b5",
"assets/assets/images/brands_logo/google_loo.PNG": "6338d9198a43b0078dab2fb33027d0e4",
"assets/assets/images/brands_logo/huawei_logo.PNG": "118d978e214abc3d404c885aada87d4f",
"assets/assets/images/brands_logo/logos.PNG": "6787f417dcc644bb4af63d982d6aa3d6",
"assets/assets/images/brands_logo/one_plus.PNG": "07ae3c5da4be508f08898edb92136d13",
"assets/assets/images/brands_logo/samsung_logo.PNG": "d089ce98a0430763d456637a2c484672",
"assets/assets/images/card.PNG": "20e329f796a690912294817501e5aef0",
"assets/assets/images/car_holders.PNG": "2eb1c0c942a4a30d11252335f688bd74",
"assets/assets/images/charger_cables.PNG": "c1e1c5e1d9d452b247a4d72a8be0fec6",
"assets/assets/images/easy_paisa.PNG": "2d8ede80178ea961c870ab00046736b3",
"assets/assets/images/fm.PNG": "3d26796e91033456adbbb9aea626aba4",
"assets/assets/images/Footer/footer-bank-transfer.png": "6c46923c9ecae58c97846dc794373e73",
"assets/assets/images/Footer/footer-mastercard.png": "5dadd54b94bdea40597ad320cf741cd7",
"assets/assets/images/Footer/footer-paypal.png": "ce56ff4903c64f83e7972bd386432aa7",
"assets/assets/images/Footer/footer-visa.png": "bdfddfafe0320354b3d4293e8eb85dcb",
"assets/assets/images/headset_banner.png": "5ddf17b6d64a01854f9ef09797379e98",
"assets/assets/images/phone.PNG": "b890d1d93fd01bb7ecce2dd76ec4dba6",
"assets/assets/images/phone_cases.PNG": "e08aca07f3a83ae610fa30132cb2cdcf",
"assets/assets/images/policies.PNG": "028234ec27aba9e38484629578b0b626",
"assets/assets/images/products_slider_images/Black_case_1.PNG": "c0decd03890083e19518a8d67dbb6ee0",
"assets/assets/images/products_slider_images/Black_case_2.PNG": "407b75f39fe8cf7f06398eae9909dd61",
"assets/assets/images/products_slider_images/diamond_case_1.PNG": "8ca62c0f2913b545c9ec0f012a7b0ba5",
"assets/assets/images/products_slider_images/diamond_case_2.PNG": "30f65583b0458118552ef926fe8b31fb",
"assets/assets/images/products_slider_images/earphones_1.PNG": "481736352039470adc9804c27bdf9add",
"assets/assets/images/products_slider_images/earphones_2.PNG": "88f3740bdf93454934f242ec8e0a4dff",
"assets/assets/images/products_slider_images/privacyglass_1.PNG": "813b9243ac709112af5aa4313101130f",
"assets/assets/images/products_slider_images/privacyglass_2.PNG": "f52aaa1f1e11cb06f51bb48fc301cb02",
"assets/assets/images/products_slider_images/screen_protector_1.PNG": "6fa7b8f95a9f4479d3e768266adc72bf",
"assets/assets/images/products_slider_images/screen_protectr_2.PNG": "d67df276b6f17e48d610e85bf6b73a4d",
"assets/assets/images/products_slider_images/Tempred_glass_2.png": "87358ab801da529c48594c2ab035ead1",
"assets/assets/images/products_slider_images/Tempred_glas_1.png": "7d0f544df210b8466c360da99dbbbbb3",
"assets/assets/images/product_2_slider_images/adapter.PNG": "1f37f640c113539c7e1dcc6cde96a9fd",
"assets/assets/images/product_2_slider_images/headphone.PNG": "e0d07dc8a156d86bfc554ad4514a0120",
"assets/assets/images/product_2_slider_images/holder.PNG": "f8388528c36cb628b18995d459946e21",
"assets/assets/images/product_2_slider_images/phone_case.PNG": "dce862041f968102766fa2f7242920a0",
"assets/assets/images/product_2_slider_images/samsung.PNG": "529b11b4764bcd755f43cb0a56c3d898",
"assets/assets/images/product_2_slider_images/speaker.PNG": "d7acb7821349ac87269d864467cdc5d5",
"assets/assets/images/sale.PNG": "cc551555976ad11c50f4ec77f17d37f6",
"assets/assets/images/speaker.PNG": "8d7425498ccf8a0497b4032d8735e5ac",
"assets/assets/images/speakers_banner.png": "2cc18d36bf4b76b87f8a73b15997637f",
"assets/FontManifest.json": "21a7627eb3f9ac2dc1f5882592a9710e",
"assets/fonts/MaterialIcons-Regular.otf": "595fad10d6d688228e653f2240a5457a",
"assets/NOTICES": "c19903c61c8b78a632b51589022f5a5f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "e906cd099a8397abbd0e72a508ce1426",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "057e611442aeab28d10d9fd89b7f6575",
"/": "057e611442aeab28d10d9fd89b7f6575",
"main.dart.js": "741987fd36d1b8a85f2cb636a3a74838",
"manifest.json": "7d72e2ba301bbdfd09e79920bd96e1c8",
"version.json": "924f9170f870523ac4157e4b2c547298"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
