import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDphEcOxq4to3Ezf6wRfk9iy23lHlTRJd8",
  authDomain: "vynedam-talent-hunt.firebaseapp.com",
  projectId: "vynedam-talent-hunt",
  storageBucket: "vynedam-talent-hunt.firebasestorage.app",
  messagingSenderId: "179920515545",
  appId: "1:179920515545:web:9f268d079c32c018cc29c8",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);