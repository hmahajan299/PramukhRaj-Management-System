import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";
import { 
    getAuth, 
    GoogleAuthProvider, 
    signInWithPopup, 
    signInWithEmailAndPassword,
    browserLocalPersistence, 
    browserSessionPersistence,
    signInWithPhoneNumber,
    RecaptchaVerifier,
    sendEmailVerification,
    createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { 
    getFirestore, 
    collection, 
    addDoc, 
    getDocs, 
    doc, 
    updateDoc, 
    deleteDoc, 
    getDoc, 
    setDoc, 
    query,
    where 
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";
import { 
    getStorage,  // ✅ Corrected Import
    getDownloadURL, 
    ref, 
    uploadBytes 
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyB6Vu3YMDq5Loi3C2CM0v26MuZ1ltcKKMY",
    authDomain: "pramukhraj-app.firebaseapp.com",
    projectId: "pramukhraj-app",
    storageBucket: "pramukhraj-app.firebasestorage.app",
    messagingSenderId: "126431978069",
    appId: "1:126431978069:web:93b7988b5855beba86aadc",
    measurementId: "G-W3EYK0XPGK"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app); // ✅ Added Storage
const analytics = getAnalytics(app);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        return result;
    } catch (error) {
        console.error("Google Sign-In Error:", error);
        throw error;
    }
};

// Get user role
export const getUserRole = async (userEmail) => {
    const userRef = doc(db, "users", userEmail);
    const userDoc = await getDoc(userRef);
    return userDoc.exists() ? userDoc.data().role : null;
};

// Export all necessary Firebase functions and objects
export { 
    auth, 
    db,
    storage,  // ✅ Export Storage
    collection,
    addDoc,
    getDocs,
    updateDoc,
    deleteDoc,
    doc,
    getDoc,
    setDoc,
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword,
    browserLocalPersistence, 
    browserSessionPersistence,
    query,
    where,
    signInWithPhoneNumber,
    RecaptchaVerifier,
    sendEmailVerification,
    getDownloadURL, 
    ref, 
    uploadBytes
};
