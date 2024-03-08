import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'

const firebaseConfig = {
  apiKey:"AIzaSyAoOU7t_JsQIXjNqpuTyLflFxkIocrndvs",
  authDomain: "filmyverse-eaae7.firebaseapp.com",
  projectId: "filmyverse-eaae7",
  storageBucket: "filmyverse-eaae7.appspot.com",
  messagingSenderId: "428666562114",
  appId: "1:428666562114:web:31b333313550f7564defdb"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;