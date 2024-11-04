import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAZD9N2BT3WL4H5MRwmpriUsmLs2koNqus",
  authDomain: "tomo-pesticide.firebaseapp.com",
  projectId: "tomo-pesticide",
  storageBucket: "tomo-pesticide.appspot.com",
  messagingSenderId: "87303920373",
  appId: "1:87303920373:web:c5825ecc71efc1573003bc"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, provider, db, storage }