import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBrVHAxBOK7rLjK7uApzGRUrA0SbZM2e0o",
  authDomain: "symposium-388ad.firebaseapp.com",
  projectId: "symposium-388ad",
  storageBucket: "symposium-388ad.appspot.com",
  messagingSenderId: "354576874021",
  appId: "1:354576874021:web:bcc2790cec687004f01dcc",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage(app);
