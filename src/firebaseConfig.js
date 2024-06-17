// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyACs9GNayXLKOJPdU0ZDglD3lrYI8UnguQ",
    authDomain: "roadmap-front-end.firebaseapp.com",
    projectId: "roadmap-front-end",
    storageBucket: "roadmap-front-end.appspot.com",
    messagingSenderId: "861202941689",
    appId: "1:861202941689:web:5f707d85b10dcd1df28428",
    measurementId: "G-C6CMTXL3H6"
  };
  

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
