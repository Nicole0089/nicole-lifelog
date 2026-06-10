/* Nicole日誌 — Minimal Service Worker for Notifications */
self.addEventListener('install', function(e) {
  self.skipWaiting();
});
self.addEventListener('activate', function(e) {
  e.waitUntil(self.clients.claim());
});
self.addEventListener('notificationclick', function(e) {
  e.notification.close();
  e.waitUntil(clients.matchAll({ type: 'window' }).then(function(list) {
    for (var i = 0; i < list.length; i++) {
      if (list[i].url && 'focus' in list[i]) return list[i].focus();
    }
    if (clients.openWindow) return clients.openWindow('./');
  }));
});
