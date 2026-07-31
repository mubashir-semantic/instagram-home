import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const savedUser = JSON.parse(localStorage.getItem("user"));

export const loginUser = createAsyncThunk(
  "auth/loginUser",

  async (userData, thunkAPI) => {
    try {
      const response = await fetch("https://reqres.in/api/login", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          "x-api-key": "free_user_3HAsnAtljG6Fj4KjMEz79G8SPrd",
        },

        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (!response.ok) {
        return thunkAPI.rejectWithValue(
          data.error || "Login failed"
        );
      }

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.message || "Something went wrong"
      );
    }
  }
);

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    login(state, action) {
      state.user = action.payload;
      state.isAuthenticated = true;
    },

    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;

      // localStorage.removeItem("user");
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(loginUser.fulfilled, (state, action) => {
        const loggedInUser = {
          email: action.meta.arg.email,
          token: action.payload.token,
        };

        state.loading = false;
        state.error = null;
        state.isAuthenticated = true;
        state.user = loggedInUser;

        // localStorage.setItem(
        //   "user",
        //   JSON.stringify(loggedInUser)
        // );
      })

      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error =
          action.payload || "Unable to login";
      });
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;