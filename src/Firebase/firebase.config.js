// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDJmI4wfGzD6Y7NFO0fE63le58ieua5q1A",
    authDomain: "freepiccopy.firebaseapp.com",
    projectId: "freepiccopy",
    storageBucket: "freepiccopy.appspot.com",
    messagingSenderId: "193864418174",
    appId: "1:193864418174:web:23b6e51942c1315fe1a92f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;