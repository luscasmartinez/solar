// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBapr6smkLQqcPqrVkczif9WG8PbUg7wvo",
  authDomain: "solar-76935.firebaseapp.com",
  projectId: "solar-76935",
  storageBucket: "solar-76935.firebasestorage.app",
  messagingSenderId: "103502664037",
  appId: "1:103502664037:web:2ac225d2756345707fd18c",
  measurementId: "G-C3Z0F3QDZZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage, analytics };
export default app;