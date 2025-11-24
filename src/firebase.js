import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCFT9cJcfgh9kYvHwW1lmW-BgRiCVuicfs",
  authDomain: "tierra-media-6a3bf.firebaseapp.com",
  projectId: "tierra-media-6a3bf",
  storageBucket: "tierra-media-6a3bf.firebasestorage.app",
  messagingSenderId: "42751872838",
  appId: "1:42751872838:web:e64ed72394797b0daedf47"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
 