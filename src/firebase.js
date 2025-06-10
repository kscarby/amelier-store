// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCjPW_jW5dp6oaH3Ymfey4GtMTUYEruRpc",
    authDomain: "amelier-crochet.firebaseapp.com",
    projectId: "amelier-crochet",
    storageBucket: "amelier-crochet.firebasestorage.app",
    messagingSenderId: "321958770821",
    appId: "1:321958770821:web:0ca2832490808eb3fc51ec"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, db, auth };
