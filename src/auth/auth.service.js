// Import the functions you need from the SDKs you need
//import * as firebase from "firebase/app";
//import { auth } from "firebase/app";
//import 'firebase/auth';
//require('firebase/auth');
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBftmZitWpgU2KkHxOtWmKQJPRFFcU92LU",
  authDomain: "loginsprint-3b62d.firebaseapp.com",
  projectId: "loginsprint-3b62d",
  storageBucket: "loginsprint-3b62d.appspot.com",
  messagingSenderId: "446107486485",
  appId: "1:446107486485:web:ea673caf5c50167a39011c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export {
    auth
};