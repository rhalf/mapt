// Initialize Cloud Firestore through Firebase
import { initializeApp } from "firebase/app"

const firebaseApp = initializeApp({
  apiKey: "AIzaSyB2IjzCZQl65mSVFgWpV55JhXOZMh_VIdg",
  authDomain: "mapt-1b9b0.firebaseapp.com",
  projectId: "mapt-1b9b0",
  storageBucket: "mapt-1b9b0.appspot.com",
  messagingSenderId: "698628545643",
  appId: "1:698628545643:web:ac5bff6c267c5fe14ca52e",
  measurementId: "G-SYCEC4X8XM"
});

export default firebaseApp;