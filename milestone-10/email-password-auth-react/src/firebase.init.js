// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfMUR1L0pb9DkvQK0hz8ufAhjQyaq03sA",
  authDomain: "email-password-auth-5fc7e.firebaseapp.com",
  projectId: "email-password-auth-5fc7e",
  storageBucket: "email-password-auth-5fc7e.appspot.com",
  messagingSenderId: "266051945769",
  appId: "1:266051945769:web:d841ff151c3804f6e52338"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;