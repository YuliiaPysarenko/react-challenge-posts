import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyAOiT7yJNJwwFyI629zt2yyGwsW-R9xBgQ",
  authDomain: "react-challenge-posts.firebaseapp.com",
  databaseURL:
    "https://react-challenge-posts-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-challenge-posts",
  storageBucket: "react-challenge-posts.appspot.com",
  messagingSenderId: "389738645746",
  appId: "1:389738645746:web:be6e26a75183e90fff686b",
  measurementId: "G-J5E52EBW60",
};

initializeApp(firebaseConfig);

//init services
const auth = getAuth();

export {
  auth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
};