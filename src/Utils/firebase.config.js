// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJhF2m8lQy00KXbGrPOksj37KTocWWgyA",
  authDomain: "fir-prcts.firebaseapp.com",
  projectId: "fir-prcts",
  storageBucket: "fir-prcts.appspot.com",
  messagingSenderId: "1087974929874",
  appId: "1:1087974929874:web:76ff314d44abd1a42a440b",
  measurementId: "G-FMMRLQT0G2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);