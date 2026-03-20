// =============================================
// FIREBASE CONFIGURATION
// Replace these values with YOUR Firebase project config
// Go to: console.firebase.google.com → Project Settings → Your Apps → Config
// =============================================
const firebaseConfig = {
  apiKey: "AIzaSyA3gNrelv_btgR4LOCMRFWl1T0CHGlJdSg",
  authDomain: "roommate-sync-7406b.firebaseapp.com",
  projectId: "roommate-sync-7406b",
  storageBucket: "roommate-sync-7406b.firebasestorage.app",
  messagingSenderId: "358803768388",
  appId: "1:358803768388:web:d294c051859291cee12811"
};


// =============================================
// FIREBASE INITIALIZATION (shared across all pages)
// =============================================
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const app = initializeApp(FIREBASE_CONFIG);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db, onAuthStateChanged, signOut };
