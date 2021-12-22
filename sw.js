console.log("sw.js")
var cacheName="hello-pwa"
var filesToCache = [
    "/", "/index.html", "/css/style.css", "/js/main.js"
]

self.addEventListener("install", function(e) {
    console.log("installing")
    e.waitUntil(caches.open(cacheName).then(function(cache) {
        return cache.addAll(filesToCache)
    }))
})

self.addEventListener("fetch", function(e) {
    console.log("fetch event")
    e.respondWith(
        caches.match(e.request).then(function(response) {
            return response || fetch(e.request)
        })
    )
})
