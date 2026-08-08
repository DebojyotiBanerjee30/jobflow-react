import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser as loginUserService } from "../../services/authService";
import { saveAuth, getStoredAuth, clearAuth } from "./authStorage";

const storedAuth = getStoredAuth();

const initialState = {
  user: storedAuth?.user || null,
  token: storedAuth?.token || null,
  isAuthenticated: Boolean(storedAuth),
  isLoading: false,
  error: null,
};

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials) => {
    const data = await loginUserService(credentials);

    saveAuth(data);

    return data;
  },
);

export const logout = createAsyncThunk("auth/logout", async () => {
  clearAuth();
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
        state.isLoading = false;
        state.error = null;
      });
  },
});

export default authSlice.reducer;
