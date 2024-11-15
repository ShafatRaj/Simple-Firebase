// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCuxruJS1-b0UQeYIr8vSexD4vMaOw2rl8",
    authDomain: "simple-firebase2-95941.firebaseapp.com",
    projectId: "simple-firebase2-95941",
    storageBucket: "simple-firebase2-95941.firebasestorage.app",
    messagingSenderId: "723608533170",
    appId: "1:723608533170:web:08916cd15c02540570b1ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);