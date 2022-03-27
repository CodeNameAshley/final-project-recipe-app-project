// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/auth";
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZwMnL9rPp1bapF5k9-lubPjEXrxEWhWo",
  authDomain: "recipe-app-auth.firebaseapp.com",
  projectId: "recipe-app-auth",
  storageBucket: "recipe-app-auth.appspot.com",
  messagingSenderId: "328803415106",
  appId: "1:328803415106:web:e2777c209635c0e66329db"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export default app;
