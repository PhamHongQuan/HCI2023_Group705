// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5k-w1qr4__dJBVqBObMbYWJNYJ27JXGA",
  authDomain: "hci2023group705-42364.firebaseapp.com",
  projectId: "hci2023group705-42364",
  storageBucket: "hci2023group705-42364.appspot.com",
  messagingSenderId: "682185931127",
  appId: "1:682185931127:web:256c3646b15627a10b0972",
  measurementId: "G-9H2D9ZSE88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);