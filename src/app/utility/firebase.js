// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhC3aRUdp8aaKbTkaVIf3KM_ro6jLYVTU",
  authDomain: "bitsense-2b00c.firebaseapp.com",
  projectId: "bitsense-2b00c",
  storageBucket: "bitsense-2b00c.firebasestorage.app",
  messagingSenderId: "366671618423",
  appId: "1:366671618423:web:8079aeed87be91c66fc172",
  measurementId: "G-5Y90BJV4DS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();