import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCpzz2HaeAsmbO1v3v8gdLIL1QYGZkQ_ZA",
  authDomain: "personal-beat-marketplace.firebaseapp.com",
  projectId: "personal-beat-marketplace",
  storageBucket: "personal-beat-marketplace.appspot.com",
  messagingSenderId: "847846496079",
  appId: "1:847846496079:web:a4776598632f7d25e4973a",
  measurementId: "G-VXHD5E316W",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
