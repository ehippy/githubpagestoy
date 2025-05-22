---
layout: null
permalink: /sw.js
---

const CACHE_NAME = 'ai-perspectives-v1';
const urlsToCache = [
  '{{ site.baseurl }}/',
  '{{ site.baseurl }}/offline.html',
  '{{ site.baseurl }}/assets/css/main.css',
  '{{ site.baseurl }}/assets/js/site.js',
  '{{ site.baseurl }}/assets/js/compatibility.js',
  '{{ site.baseurl }}/assets/js/image-optimization.js',
  '{{ site.baseurl }}/assets/images/logo.svg',
  '{{ site.baseurl }}/assets/images/logo.png',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
];

// Installing the service worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Cache and return requests
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        
        return fetch(event.request).then(
          response => {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // Clone the response as it's a stream
            const responseToCache = response.clone();
            
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });
            
            return response;
          }
        ).catch(() => {
          // If the network request fails and it's a document request, show offline page
          if (event.request.mode === 'navigate') {
            return caches.match('{{ site.baseurl }}/offline.html');
          }
        });
      })
  );
});

// Update service worker
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
