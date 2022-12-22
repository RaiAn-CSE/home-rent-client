// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDGOlfmVfHAywCTnocRUs_50kRCSACkUBk",
    authDomain: "rentusbd.firebaseapp.com",
    projectId: "rentusbd",
    storageBucket: "rentusbd.appspot.com",
    messagingSenderId: "296453760288",
    appId: "1:296453760288:web:f2063abd31f99840ace345",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;