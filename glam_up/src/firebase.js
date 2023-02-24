// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyC53jvlXNb8_d7dnuLcGV5Ycb6Iywk3H4s",
  authDomain: "glamup-69551.firebaseapp.com",
  projectId: "glamup-69551",
  storageBucket: "glamup-69551.appspot.com",
  messagingSenderId: "401957976697",
  appId: "1:401957976697:web:4e24fc3f8d9c34ad33b2a8",
  measurementId: "G-YCRVN1SG0M"
};

const app = initializeApp(firebaseConfig);
const Auth = getAuth();

export {app,Auth};