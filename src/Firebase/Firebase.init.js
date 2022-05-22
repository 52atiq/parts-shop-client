// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDky2ZoOdof7Wj6EQZmFrfKnukC9igJc_4",
  authDomain: "p-shop-28336.firebaseapp.com",
  projectId: "p-shop-28336",
  storageBucket: "p-shop-28336.appspot.com",
  messagingSenderId: "596553028792",
  appId: "1:596553028792:web:dec6a0cbcba6609079d04d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;