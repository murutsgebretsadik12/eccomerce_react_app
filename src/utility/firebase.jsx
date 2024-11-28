// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Firebase database
import { getFirestore } from "firebase/firestore";

// Firebase authetication
import { getAuth } from "firebase/auth";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

export default firebaseConfig;

console.log("Firebase API Key:", import.meta.env.VITE_FIREBASE_API_KEY);






// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);




// const db = getFirestore(app);
// const auth = getAuth(app);

// export { db, auth };