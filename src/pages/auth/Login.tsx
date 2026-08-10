import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { Link, useNavigate } from "react-router-dom";
import type { RootState, AppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";
import { loginUser } from "../../redux/slices/authSlice";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../validations/loginSchema";
import { useDispatch } from "react-redux";

interface LoginFormData {
  email: string;
  password: string;
}

function Login() {
  const { loading, error } = useSelector(
    (state: RootState) => state.auth
  );

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = async (formData: LoginFormData) => {
    try {
      await dispatch(loginUser(formData)).unwrap();
      navigate("/home");
    } catch (error) {
      console.log("Login failed:", error);
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

        <form onSubmit={handleSubmit(handleLogin)}>
          <Input
            label="Email"
            type="email"
            placeholder="Phone number, username or email"
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

          {error && (
            <p className="mt-2 text-sm text-red-500">
              {error}
            </p>
          )}

          <div className="mt-5">
            <Button
              text={loading ? "Logging In..." : "Log In"}
              type="submit"
              disabled={loading}
              loading={loading}
            />
          </div>
        </form>

        <div className="my-6 flex items-center">
          <div className="h-px flex-1 bg-gray-300"></div>

          <span className="mx-4 font-semibold uppercase text-gray-500">
            OR
          </span>

          <div className="h-px flex-1 bg-gray-300"></div>
        </div>

        <div className="mt-4 flex flex-col gap-2 text-center text-sm md:flex-row md:items-center md:justify-between md:gap-0">
          <p className="text-sm">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-[#d72c7a] hover:underline"
            >
              Sign up
            </Link>
          </p>

          <Link
            to="/forgot-password"
            className="block text-center font-semibold text-[#d72c7a] hover:underline"
          >
            Forgot password?
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;