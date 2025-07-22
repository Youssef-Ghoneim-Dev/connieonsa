import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCibiuwrxo7Dvhs81oywQFxz9hQxp0ErFY",
  authDomain: "connieonsa-54d97.firebaseapp.com",
  projectId: "connieonsa-54d97",
  storageBucket: "connieonsa-54d97.firebasestorage.app",
  messagingSenderId: "142359040474",
  appId: "1:142359040474:web:c9f49e2f6658cf7325f0e3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;