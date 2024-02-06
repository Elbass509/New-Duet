// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { GoogleAuthProvider } from "firebase/auth";

//By the above stated they mean for every firebase servivce you want to use u hae to import it first and thnen 
//Initialize it by passing into it the fire base config object that contains you api access key

const firebaseConfig = {
  apiKey: "AIzaSyAi2IOAV31CbgOp9P99EE9lElaWHQUkV5k",
  authDomain: "my-quiz-app-3be14.firebaseapp.com",
  projectId: "my-quiz-app-3be14",
  storageBucket: "my-quiz-app-3be14.appspot.com",
  messagingSenderId: "31153745842",
  appId: "1:31153745842:web:f5e2d01bf21fbb727c3eab",
  measurementId: "G-RY9BH31J3F"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

 //initializing google auth with firebase api key object
export const provider = new GoogleAuthProvider(app);

//initializing firestore database with firebase api key object
export const db = getFirestore(app)


//initializing normall auth with password, email with firebase api key object
 export const auth = getAuth(app)


 export default app