
import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"

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
const App=initializeApp(firebaseConfig);
 export const db=getFirestore(App)
//  console.log(db)
 export const Auth =getAuth(App)

