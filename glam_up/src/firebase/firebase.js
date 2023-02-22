// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getauth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyCOAuOkOpSv70SBtAuniYzvaKfP7u14KS0",
//   authDomain: "nappy-prose-7608.firebaseapp.com",
//   projectId: "nappy-prose-7608",
//   storageBucket: "nappy-prose-7608.appspot.com",
//   messagingSenderId: "404388182206",
//   appId: "1:404388182206:web:349c75bbabff3f755c86ef",
//   measurementId: "G-BQGE5TP55X",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const auth = getauth();

// export { app, auth };


import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBh7LGy-h-4kCZ03sfDKbFnWNLMty0Hs8o",
  authDomain: "nykaa-app-47041.firebaseapp.com",
  projectId: "nykaa-app-47041",
  storageBucket: "nykaa-app-47041.appspot.com",
  messagingSenderId: "242594448023",
  appId: "1:242594448023:web:7b996333a33cfa01009fd2",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { auth, googleAuthProvider };
