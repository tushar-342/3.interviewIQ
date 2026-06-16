
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interview-372cd.firebaseapp.com",
  projectId: "interview-372cd",
  storageBucket: "interview-372cd.firebasestorage.app",
  messagingSenderId: "1018350023874",
  appId: "1:1018350023874:web:f629e820058a9d6657775b"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}