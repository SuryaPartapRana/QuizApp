// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCPy0kBIBlgllfvSigZ_d106jyZbukG9tU",
    authDomain: "quiz-cc83e.firebaseapp.com",
    projectId: "quiz-cc83e",
    storageBucket: "quiz-cc83e.appspot.com",
    messagingSenderId: "873710202102",
    appId: "1:873710202102:web:8bad065990114f13e710d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import {
    getFirestore, doc, getDoc, setDoc, collection, addDoc, updateDoc, deleteDoc, deleteField
}
    from "https://www.gstatic.com/firebasejs/9.8.3/firebase-firestore.js"

const db = getFirestore();

console.log(db)