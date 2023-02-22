// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getauth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCOAuOkOpSv70SBtAuniYzvaKfP7u14KS0",
  authDomain: "nappy-prose-7608.firebaseapp.com",
  projectId: "nappy-prose-7608",
  storageBucket: "nappy-prose-7608.appspot.com",
  messagingSenderId: "404388182206",
  appId: "1:404388182206:web:349c75bbabff3f755c86ef",
  measurementId: "G-BQGE5TP55X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getauth();

export { app, auth };
