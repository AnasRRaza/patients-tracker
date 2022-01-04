import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDO_sAikARSo9NQnnsayLqZP9h0UgxfS8k",
  authDomain: "patients-tracker01.firebaseapp.com",
  projectId: "patients-tracker01",
  storageBucket: "patients-tracker01.appspot.com",
  messagingSenderId: "1097462507793",
  appId: "1:1097462507793:web:17a44727d977ca979604b0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const colRef = collection(db, "patients");

export { colRef, db };