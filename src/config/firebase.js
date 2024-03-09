import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCPECeEiEv-4IeNdV_eQ136NJkyw3zlff4",
  authDomain: "grocify-28d31.firebaseapp.com",
  projectId: "grocify-28d31",
  storageBucket: "grocify-28d31.appspot.com",
  messagingSenderId: "175412488373",
  appId: "1:175412488373:web:8362a16fbfbd33d903b6fc",
  measurementId: "G-M8EK6QGDDQ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
