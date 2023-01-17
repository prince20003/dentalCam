import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDcJ8atD9Ibu1xidGTgPXlqAMkrstAr8rs",
    authDomain: "react-todo-98a14.firebaseapp.com",
    projectId: "react-todo-98a14",
    storageBucket: "react-todo-98a14.appspot.com",
    messagingSenderId: "635095733001",
    appId: "1:635095733001:web:45471d738dce51d7bd79d8"
  };
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app)