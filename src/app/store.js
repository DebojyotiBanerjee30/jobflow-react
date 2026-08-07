import { configureStore } from "@reduxjs/toolkit";
import applicationReducer from "../features/applications/applicationSlice";

export const store = configureStore({
  reducer: {
    application: applicationReducer,
  },
});
