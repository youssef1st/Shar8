self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      return cachedResponse || fetch(e.request).catch(() => {
        // لو النت فصل أو الطلب فشل، يرجع رد بديل بدل ما يضرب خطأ أحمر
        return caches.match('./index.html');
      });
    })
  );
});
