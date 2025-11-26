// lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCq8KD6Vdm_2TCFGyvFb_DP0AkdvVPx5Mo",
  authDomain: "laoficina-reviews.firebaseapp.com",
  projectId: "laoficina-reviews",
  storageBucket: "laoficina-reviews.firebasestorage.app",
  messagingSenderId: "970262875938",
  appId: "1:970262875938:web:53d25524f57cc6d2ed9f7b",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
