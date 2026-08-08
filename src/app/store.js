import { configureStore } from "@reduxjs/toolkit";
import applicationReducer from "../features/applications/applicationSlice";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    application: applicationReducer,
    auth: authReducer,
  },
});
