import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUserApi } from "../../api/authService";

export const loginUser = createAsyncThunk(
  "auth/loginUser",

  async (userData, thunkAPI) => {
    try {
      const data = await loginUserApi(userData);

      return {
        email: userData.email,
        accessToken: data.access_token,
        refreshToken: data.refresh_token,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message ||
        error.response?.data?.error ||
        error.message ||
        "Unable to login"
      );
    }
  }
);

const initialState = {
  user: null,
  accessToken: null,
  refreshToken: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    logout(state) {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
    },

    updateTokens(state, action) {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },

    clearAuthError(state) {
      state.error = null;
    },

    // setInvalidAccessToken(state) {
    //   state.accessToken = "invalid-access-token";
    // },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.isAuthenticated = true;

        state.user = {
          email: action.payload.email,
        };

        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
      })

      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.accessToken = null;
        state.refreshToken = null;
        state.error =
          action.payload || "Unable to login";
      });
  },
});

export const {
  logout,
  updateTokens,
  clearAuthError,
  // setInvalidAccessToken,
} = authSlice.actions;

export default authSlice.reducer;