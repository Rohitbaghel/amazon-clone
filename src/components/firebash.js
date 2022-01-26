// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYC8Bvle0a04NiONLKwUXgGE-g0TQHuQA",
  authDomain: "clone-77d77.firebaseapp.com",
  projectId: "clone-77d77",
  storageBucket: "clone-77d77.appspot.com",
  messagingSenderId: "654855943455",
  appId: "1:654855943455:web:5667157b185376303dac2a",
  measurementId: "G-QG9WZ7SN7D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics=getAnalytics(app);
