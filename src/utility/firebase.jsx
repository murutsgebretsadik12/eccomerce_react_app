// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Firebase database
import { getFirestore } from "firebase/firestore";

// Firebase authetication
import { getAuth } from "firebase/auth";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnbuLiwMNPA2L8-VIiJGKZ0lZgiPQMITI",
  authDomain: "clone-49a07.firebaseapp.com",
  projectId: "clone-49a07",
  storageBucket: "clone-49a07.firebasestorage.app",
  messagingSenderId: "778634096356",
  appId: "1:778634096356:web:1f4a7cccf75da8108cc6f1",
  measurementId: "G-CJVBNB8W8B"
};





// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);




// const db = getFirestore(app);
// const auth = getAuth(app);

// export { db, auth };