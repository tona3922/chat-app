// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6bwZZVw_Qea2T53-JyJZklKp0_3oYK30",
  authDomain: "chat-app-ee423.firebaseapp.com",
  projectId: "chat-app-ee423",
  storageBucket: "chat-app-ee423.appspot.com",
  messagingSenderId: "239230330029",
  appId: "1:239230330029:web:919989f1433c915c2f1224"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
