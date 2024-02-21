importScripts("https://www.gstatic.com/firebasejs/8.7.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.7.1/firebase-messaging.js"
);

firebase.initializeApp({
  apiKey: 'AIzaSyCaOe7nby9KM40oQNyb6YVkpTxnCVObGGI',
  projectId: 'hansei-weekly-menu',
  messagingSenderId: '209065033172',
  appId: '1:209065033172:web:102dc42a7fea8ba2d42a41',
});

const messaging = firebase.messaging();

/* 백그라운드 메시지 수신 시 */
messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});

/* 푸시 알림 수신 시 */
self.addEventListener('push', (event) => {
  const data = event.data?.json();
  console.log('Push received: ', data);

  event.waitUntil(
    self.registration.showNotification(data.title, {
        body: data.body,
        icon: data.image,
        image: data.image,
        data: {
          click_action: data.click_action,
        },
      })
  );
});

/* 알림 클릭 시 리스너 */
self.addEventListener('notificationclick', event => {
  const clickedNotification = event.notification;
  clickedNotification.close();
});