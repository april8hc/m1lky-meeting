import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBVW5n9BesLlopivJvV7In_s3fQzOMzv9w",
  authDomain: "meeting-sys.firebaseapp.com",
  projectId: "meeting-sys",
  storageBucket: "meeting-sys.appspot.com",
  messagingSenderId: "898505505318",
  appId: "1:898505505318:web:5333cec5b6b5a6e23784e7",
  measurementId: "G-53X08MCHLJ"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");
