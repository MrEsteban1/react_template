import { createSlice } from "@reduxjs/toolkit";

const statusOptions = ["checking", "not-authenticated", "authenticated"];
const initialState = {
  status: statusOptions[1], // status: 'not-authenticated, 'authenticated
  uid: null,
  email: null,
  displayName: null,
  errorMessage: null,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.status = statusOptions[2];
      state.ui = payload.ui;
      state.email = payload.email;
      state.photoURL = payload.photoURL;
      state.displayName = payload.displayName;
      state.errorMessage = payload.errorMessage;
    },
    logout: (state, { payload }) => {
      state.status = statusOptions[1];
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.errorMessage = payload.errorMessage || null;
    },
    checkingCredentials: (state) => {
      state.status = statusOptions[0];
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;
