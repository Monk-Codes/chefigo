import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
 apiKey: "AIzaSyCBHcFwT-T3OuFbgkJjMfrgEsp_FQylevM",
 authDomain: "che-figo.firebaseapp.com",
 projectId: "che-figo",
 storageBucket: "che-figo.appspot.com",
 messagingSenderId: "901853849023",
 appId: "1:901853849023:web:0f6452e244b86f34376d0a",
 measurementId: "G-14VWT1LN6L",
};

const fireBaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(fireBaseApp);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
 prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);
export const db = getFirestore();

export const createUserDoc = async (userAuth, addInfo = {}) => {
 if (!userAuth) return;

 const userDocRef = doc(db, "users", userAuth.uid);
 const userSnap = await getDoc(userDocRef);

 if (!userSnap.exists()) {
  const { displayName, email } = userAuth;
  const creatAt = new Date();

  try {
   await setDoc(userDocRef, { displayName, email, creatAt, ...addInfo });
  } catch (error) {
   console.error(error.message);
  }
 }
 return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
 if (!email || !password) return;
 return await createUserWithEmailAndPassword(auth, email, password);
};
