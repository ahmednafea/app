importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-messaging.js');

   /*Update with yours config*/
  const firebaseConfig = {
    apiKey: "AIzaSyBbKueXTm9DYz6lJiBXz_ad2uQIU6Qh5-g",
    authDomain: "flutter-firebase-session.firebaseapp.com",
    databaseURL: "https://flutter-firebase-session-default-rtdb.firebaseio.com",
    projectId: "flutter-firebase-session",
    storageBucket: "flutter-firebase-session.appspot.com",
    messagingSenderId: "922206172491",
    appId: "1:922206172491:web:d2c75739b51628836ea4ce",
    measurementId: "G-Z9QT1EDMPD"
 };
  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();

  /*messaging.onMessage((payload) => {
  console.log('Message received. ', payload);*/
  messaging.onBackgroundMessage(function(payload) {
    console.log('Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle,
      notificationOptions);
  });