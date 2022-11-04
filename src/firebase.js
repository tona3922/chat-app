// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyArdzVqvqJCqQrQGPo93wZVCekqxTgDgAk",
  authDomain: "chat-47028.firebaseapp.com",
  projectId: "chat-47028",
  storageBucket: "chat-47028.appspot.com",
  messagingSenderId: "740041054895",
  appId: "1:740041054895:web:f545c9296d1c68210f125a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);
