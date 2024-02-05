import {
  loginWithEmailPassword,
  logoutFirebase,
  registerUserWithEmailPassword,
  singInWithGoogle,
} from "../../firebase/providers";
import { checkingCredentials, logout, login } from "./authSlice";

export const checkingAuthentication = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await singInWithGoogle();
    if (!result.displayName) return dispatch(logout(result.errorMessage));

    dispatch(login(result));
  };
};

export const startCreatingUserWithEmailPassword = ({
  email,
  password,
  displayName,
}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const resp = await registerUserWithEmailPassword({
      email,
      password,
      displayName,
    });

    const { ok, uid, photoURL, errorMessage } = resp;
    if (!ok) return dispatch(logout({ errorMessage }));

    dispatch(login({ uid, displayName, email, photoURL }));

    console.log(resp);
  };
};

export const startLoginWithEmailPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const resp = await loginWithEmailPassword({ email, password });
    console.log(resp.of);

    if (!resp.of) return dispatch(logout({ errorMessage: resp.errorMessage }));
    dispatch(login(resp));
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    try {
      await logoutFirebase();
      dispatch(logout());
    } catch (error) {
      console.log(error);
    }
  };
};
