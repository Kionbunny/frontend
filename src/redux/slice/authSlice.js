import { createSlice } from "@reduxjs/toolkit";
/// createSlice automatically generates reducers and actions 
/// reducers are functions that going to take initial state in our store and payload from actions to make changes to our application 
//!Initial State
const authSlice = createSlice({
  name: "auth",/// here the action name is authentication
  initialState: {
    user: JSON.parse(localStorage.getItem("userInfo")) || null,
  },
  //1 Reducers
  reducers: {
    loginAction: (state, action) => {
      state.user = action.payload;
    },
    //Logout
    logoutAction: (state, action) => {
      state.user = null;
    },
  },
});
//! Generate actions
export const { loginAction, logoutAction } = authSlice.actions;
//! Generate the reducers
const authReducer = authSlice.reducer;
export default authReducer;