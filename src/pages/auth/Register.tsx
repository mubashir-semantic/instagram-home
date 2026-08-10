import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../validations/registerSchema";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { registerUserApi } from "../../api/authService";
import { useState } from "react";
import axios from "axios";

interface RegisterFormData {
  name: string;
  username: string;
  birthdate: string;
  email: string;
  password: string;
  confirmPassword: string;
}

function Register() {

  const navigate = useNavigate();
  const [apiError, setApiError] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerSchema),

    defaultValues: {
      name: "",
      username: "",
      birthdate: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleRegister = async (formData: RegisterFormData) => {
    try {
      setApiError("");

      const userData = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        avatar: "https://picsum.photos/800",
      };

      const response = await registerUserApi(userData);

      console.log("Registered user:", response);

      reset();
      navigate("/");
    } catch (error) {
      console.log("Registration failed:", error);

      if (axios.isAxiosError(error)) {
        setApiError(
          error.response?.data?.message ||
          "Registration failed. Please try again."
        );
      } else {
        setApiError("Registration failed. Please try again.");
      }

    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#fdf2f8] via-[#f5e7ff] to-[#e0f2fe] px-4 py-10">
      <div className="w-full max-w-lg rounded-xl border border-[#dbdbdb] bg-white/95 px-10 py-8 shadow-[0_10px_40px_rgba(0,0,0,0.08)] backdrop-blur-sm">
        <img
          src="/instagram-logo.png"
          alt="Instagram"
          className="mx-auto mb-8 w-48"
        />

        <form
          onSubmit={handleSubmit(handleRegister)}
          className="space-y-3"
        >
          <Input
            label="Name"
            type="text"
            placeholder="Full name"
            error={errors.name?.message}
            {...register("name")}
          />

          <Input
            label="Username"
            type="text"
            placeholder="Username"
            error={errors.username?.message}
            {...register("username")}
          />

          <Input
            label="Birthdate"
            type="date"
            error={errors.birthdate?.message}
            {...register("birthdate")}
          />

          <Input
            label="Email"
            type="email"
            placeholder="Email address"
            error={errors.email?.message}
            {...register("email")}
          />

          <Input
            label="Password"
            type="password"
            placeholder="Password"
            error={errors.password?.message}
            {...register("password")}
          />
          <Input
            label="Confirm Password"
            type="password"
            placeholder="Confirm Password"
            error={errors.confirmPassword?.message}
            {...register("confirmPassword")}
          />

          {apiError && (
            <p className="text-sm text-red-500">
              {Array.isArray(apiError)
                ? apiError.join(", ")
                : apiError}
            </p>
          )}

          <Button
            text={isSubmitting ? "Signing Up..." : "Sign Up"}
            type="submit"
            disabled={isSubmitting}
          />
        </form>

        <div className="my-6 flex items-center">
          <div className="h-px flex-1 bg-gray-300"></div>
          <span className="mx-4 font-semibold uppercase text-gray-500">OR</span>
          <div className="h-px flex-1 bg-gray-300"></div>
        </div>
        <p className="mt-6 text-center text-sm">
          Already have an account?{" "}
          <Link to="/" className="font-semibold text-[#d72c7a] hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
