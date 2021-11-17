import { initializeApp } from 'firebase/app';
import {getAnalytics} from 'firebase/analytics'

const firebaseConfig = {
    apiKey: "AIzaSyA2hdXN11sR0xoJZppAiwM2jQaK6VOaKX0",
    authDomain: "auth-app-e36e6.firebaseapp.com",
    projectId: "auth-app-e36e6",
    storageBucket: "auth-app-e36e6.appspot.com",
    messagingSenderId: "156163160209",
    appId: "1:156163160209:web:8adb2f95a5f120e27d6730",
    measurementId: "G-6TP6EGLEG3"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

