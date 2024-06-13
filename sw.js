const CACHE_STATIC_NAME = 'static-v1';
const CACHE_DYNAMIC_NAME = 'dynamic-v1';

self.addEventListener('install',function(event){
    console.log('Service worker installing',event);
    event.waitUntil(
        caches.open(CACHE_STATIC_NAME)
            .then(cache => {
                console.log('[Service Worker] Precaching Static Data');
                cache.addAll([
                    '/',
                    '/index.html',
                    '/manifest.json',
                    '/assets/logo.png',
                    '/main.bundle.js',
                    '/assets/144.png',
                ]);
            })
    );
});

self.addEventListener('activate',function(event){
    console.log('Service worker activating',event);
    event.waitUntil(
        caches.keys()
            .then(keyList => {
                return Promise.all(keyList.map(key =>{
                    if(key !== CACHE_STATIC_NAME && key!= CACHE_STATIC_NAME){
                        console.log('[Service Worker] Removin old cache',key);
                        return caches.delete(key);
                    }
                }));
            })
    )
    return self.clients.claim();
});

self.addEventListener('fetch',function(event){
    console.log('Service worker fetching',event.request.url);
    event.respondWith(
        caches.match(event.request)
            .then(response =>{
               if(response){
                return response;
               } else{
                return fetch(event.request)
                    .then(response =>{
                        caches.open(CACHE_DYNAMIC_NAME)
                            .then(cache =>{
                                cache.put(event.request.url, response.clone());
                                return response;
                            } )
                            .catch(err =>{
                                console.log(err)
                            })
                           
                    })
               }
            })
    );
});