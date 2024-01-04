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
    login: (state, action) => {},
    logout: (state, payload) => {},
    checkingCredentials: (state) => {
      state.status = statusOptions[2];
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;
