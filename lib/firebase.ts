import { initializeApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBt0Bt7dvjFkp_dNB439ht5xAAZ_qOu8SU",
  authDomain: "lookinit-ai.firebaseapp.com",
  projectId: "lookinit-ai",
  messagingSenderId: "399977683522",
  appId: "1:399977683522:web:ff705ac1b58172d73c2bdb",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, googleProvider, db };
