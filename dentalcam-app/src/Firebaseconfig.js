import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBgvZZbsgRjTaGcDxTr668acNEKxPZjdU",
  authDomain: "dentalcam-67932.firebaseapp.com",
  projectId: "dentalcam-67932",
  storageBucket: "dentalcam-67932.appspot.com",
  messagingSenderId: "1040567246728",
  appId: "1:1040567246728:web:4b67c74725513079e4643d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)