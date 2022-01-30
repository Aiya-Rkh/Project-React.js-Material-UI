// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDksOmCizh61h_k9lTMLWRSGYk1H2LMBRY",
  authDomain: "genatoliy-store.firebaseapp.com",
  projectId: "genatoliy-store",
  storageBucket: "genatoliy-store.appspot.com",
  messagingSenderId: "910234540766",
  appId: "1:910234540766:web:904d89aa2053832bc5404f",
  measurementId: "G-4EXDEYNRFE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
