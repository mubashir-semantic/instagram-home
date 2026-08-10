import * as yup from "yup";

export const registerSchema = yup.object({
    name: yup
        .string()
        .trim()
        .required("Name is required")
        .min(3, "Name must be at least 3 characters"),

    username: yup
        .string()
        .trim()
        .required("Username is required")
        .min(3, "Username must be at least 3 characters"),

    birthdate: yup
        .string()
        .required("Birthdate is required"),

    email: yup
        .string()
        .trim()
        .required("Email is required")
        .email("Please enter a valid email"),

    password: yup
        .string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters"),

    confirmPassword: yup
        .string()
        .required("Confirm Password is required")
        .oneOf(
            [yup.ref("password")],
            "Passwords must match"
        ),
});