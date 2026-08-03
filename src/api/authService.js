import axiosInstance from "./axiosInstance";

export const loginUserApi = async (credentials) => {
    const response = await axiosInstance.post(
        "/auth/login", credentials
    );

    return response.data;
};

export const registerUserApi = async (userData) => {
    const response = await axiosInstance.post(
        "/users",
        userData
    );

    return response.data;
};

export const refreshTokenApi = async (refreshToken) => {
    const response = await axiosInstance.post(
        "/auth/refresh-token",
        {
            refreshToken,
        }
    );

    return response.data;
};