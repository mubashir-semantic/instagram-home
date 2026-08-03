import axiosInstance from "./axiosInstance";

export const getUserProfileApi = async () => {
    const response = await axiosInstance.get("/auth/profile");

    return response.data;
};