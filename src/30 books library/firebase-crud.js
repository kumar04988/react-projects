import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDlE2MWrTZyfheGs4VwyXD2bNMh-JTG4QY",
  authDomain: "react-crud-6dac1.firebaseapp.com",
  projectId: "react-crud-6dac1",
  storageBucket: "react-crud-6dac1.appspot.com",
  messagingSenderId: "271612572233",
  appId: "1:271612572233:web:f361c4b83c56a670f08598"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);
export const auth =getAuth(app)
