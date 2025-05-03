// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIRBASE_APIKEY,
    authDomain: "auth-c9439.firebaseapp.com",
    projectId: "auth-c9439",
    storageBucket: "auth-c9439.firebasestorage.app",
    messagingSenderId: "791143495316",
    appId: "1:791143495316:web:ee66e747006abfffc22681",
    measurementId: "G-QS3W3ZRNDS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };