// Import necessary functions from Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Firebase Authentication
import { getFirestore } from "firebase/firestore"; // Firestore Database
import { getStorage } from "firebase/storage"; // Firebase Storage

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMjYs1iJhj6cKHsyhBnfkQzBn4W7W8x_g",
  authDomain: "rome-829b9.firebaseapp.com",
  projectId: "rome-829b9",
  storageBucket: "rome-829b9.appspot.com",
  messagingSenderId: "506275513301",
  appId: "1:506275513301:web:e88bffc0ef613cdf7b735c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);          // Firebase Authentication
const db = getFirestore(app);       // Firestore Database
const storage = getStorage(app);    // Firebase Storage

// Export the Firebase services for use in your application
export { auth, db, storage };
