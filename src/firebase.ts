// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAH_yEKO8VtI5nERjrVzHERnOarRvsC26Q",
  authDomain: "ernesto-chon-webshop-auth.firebaseapp.com",
  projectId: "ernesto-chon-webshop-auth",
  storageBucket: "ernesto-chon-webshop-auth.appspot.com",
  messagingSenderId: "937692702072",
  appId: "1:937692702072:web:07694e2aa8a1e18965948d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

