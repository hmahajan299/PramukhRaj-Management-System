// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
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

const firebaseConfig = {
    apiKey: "AIzaSyBVmAxvf4Y5pXPJ63HN4MSw5rpsCw3JCZk",
    authDomain: "pr-app-d3d27.firebaseapp.com",
    databaseURL: "https://pr-app-d3d27-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "pr-app-d3d27",
    storageBucket: "pr-app-d3d27.appspot.com", // Fixed typo by removing extra ".app"
    messagingSenderId: "542335213600",
    appId: "1:542335213600:web:b60ed1c7215e53d7ef1c45",
    measurementId: "G-F4821Q4VB6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

// Custom Google Sign-In function
export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        const user = result.user;
        const userRef = doc(db, "users", user.email);

        await setDoc(userRef, {
            email: user.email,
            name: user.displayName || '',
            lastLogin: new Date().toISOString()
        }, { merge: true });

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
    sendEmailVerification
};