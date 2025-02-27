import { db, auth } from "./firebase.js";
import { doc, setDoc, getDoc } from "firebase/firestore";

// Create user document on first login
export async function handleNewUser(user) {
  const userRef = doc(db, "users", user.uid);
  const docSnap = await getDoc(userRef);

  if (!docSnap.exists()) {
    await setDoc(userRef, {
      email: user.email,
      roles: {
        staff: true,
        admin: false
      },
      createdAt: new Date()
    });
  }
}