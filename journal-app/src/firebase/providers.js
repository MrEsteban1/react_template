import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
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

export const registerUserWithEmailPassword = async ({
  email,
  password,
  displayName,
}) => {
  try {
    const resp = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    await updateProfile(FirebaseAuth.currentUser, { displayName });

    const { uid, photoURL } = resp.user;

    return { ok: true, uid, photoURL };
  } catch (error) {
    return { ok: false, errorMessage: error.message };
  }
};

export const loginWithEmailPassword = async ({ email, password }) => {
  //! signInWithEmailAndPassword

  try {
    const resp = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );

    const { uid, photoURL, displayName } = resp.user;

    return {
      of: true,
      uid,
      photoURL,
      displayName,
    };
  } catch (error) {
    console.log(error);
    return { ok: false, errorMessage: error.message };
  }
};

export const logoutFirebase = async () => {
  return await FirebaseAuth.signOut();
};
