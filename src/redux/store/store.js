import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slice/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
/// the above code is taken directly from redux tool kit 