// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCLRZ3I6mPiI-Mwz_YXQRHsjIrKc3qc274",
    authDomain: "social-events-e4686.firebaseapp.com",
    projectId: "social-events-e4686",
    storageBucket: "social-events-e4686.firebasestorage.app",
    messagingSenderId: "185782336247",
    appId: "1:185782336247:web:ec520e0de478ff6eda71f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);