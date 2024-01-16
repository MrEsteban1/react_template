import { singInWithGoogle } from "../../firebase/providers";
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
    console.log("ALEEEEEERTA: ", !result.displayName, result);
    if (!result.displayName) return dispatch(logout(result.errorMessage));

    dispatch(login(result));
  };
};
