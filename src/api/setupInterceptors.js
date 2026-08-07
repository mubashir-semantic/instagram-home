import axios from "axios";
import axiosInstance from "./axiosInstance";
import {
  updateTokens,
  logout,
} from "../redux/slices/authSlice";

const BASE_URL = "https://api.escuelajs.co/api/v1";

export const setupInterceptors = (store) => {
  // REQUEST INTERCEPTOR
  axiosInstance.interceptors.request.use(
    (config) => {
      const accessToken =
        store.getState().auth.accessToken;

      if (accessToken) {
        config.headers.Authorization =
          `Bearer ${accessToken}`;
      }

      return config;
    },
    (error) => Promise.reject(error)
  );

  // RESPONSE INTERCEPTOR
  axiosInstance.interceptors.response.use(
    // API successful ho to response normal return karo
    (response) => response,

    // API fail ho to ye function chalega
    async (error) => {
      const originalRequest = error.config;

      if (
        error.response?.status === 401 &&
        !originalRequest._retry
      ) {
        originalRequest._retry = true;

        const refreshToken =
          store.getState().auth.refreshToken;

        // Refresh token hi nahi hai to logout
        if (!refreshToken) {
          store.dispatch(logout());

          return Promise.reject(error);
        }

        try {
          // Plain axios use kiya hai taake interceptor loop na bane
          const response = await axios.post(
            `${BASE_URL}/auth/refresh-token`,
            {
              refreshToken,
            }
          );

          const newAccessToken =
            response.data.access_token;

          const newRefreshToken =
            response.data.refresh_token;

          // Redux + Redux Persist mein new tokens save
          store.dispatch(
            updateTokens({
              accessToken: newAccessToken,
              refreshToken: newRefreshToken,
            })
          );

          // Failed request mein new token lagao
          originalRequest.headers.Authorization =
            `Bearer ${newAccessToken}`;

          // Original request dobara run karo
          return axiosInstance(originalRequest);
        } catch (refreshError) {
          // Refresh token bhi invalid ho to logout
          store.dispatch(logout());

          return Promise.reject(refreshError);
        }
      }

      return Promise.reject(error);
    }
  );
};