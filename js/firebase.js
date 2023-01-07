// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKpjPcN1IyIwckAfosHocTYK-c-6g4B6E",
  authDomain: "hci2023group705.firebaseapp.com",
  projectId: "hci2023group705",
  storageBucket: "hci2023group705.appspot.com",
  messagingSenderId: "627355739733",
  appId: "1:627355739733:web:a0907075fdf1400ef916dc",
  measurementId: "G-C8HT0C9PES"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);