import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./firebaseApp";

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    //const credentials = GoogleAuthProvider.credential(result);
    const { displayName, email, uid, photoURL } = result.user;
    return { displayName, email, uid, photoURL };
  } catch (error) {
    console.log(error);
    return error;
  }
};
