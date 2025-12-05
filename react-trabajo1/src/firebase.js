// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiewu0z7jbiso8QotbV2Y9dmtFB31Y9FQ",
  authDomain: "primer-ecommerce-e0ec8.firebaseapp.com",
  projectId: "primer-ecommerce-e0ec8",
  storageBucket: "primer-ecommerce-e0ec8.firebasestorage.app",
  messagingSenderId: "1011890853244",
  appId: "1:1011890853244:web:3ba95da7a76ff017e080f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Exportar Firestore
export const db = getFirestore(app);