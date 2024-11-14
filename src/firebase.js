// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPAMEqC7Dc9IhDJoyew7hBZkEaN8f4q0k",
  authDomain: "stealth-web.firebaseapp.com",
  databaseURL: "https://stealth-web-default-rtdb.firebaseio.com",
  projectId: "stealth-web",
  storageBucket: "stealth-web.appspot.com",
  messagingSenderId: "536544237762",
  appId: "1:536544237762:web:823965effa0f964908435b",
  measurementId: "G-30GM9W7CWF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
