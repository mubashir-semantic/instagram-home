import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (eve) => {
    eve.preventDefault();

    if (!email.trim() || !password.trim()) {
      alert("Please enter email and password");
      return;
    }

    localStorage.setItem("isLoggedIn", "true");
    navigate("/home");

    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#fdf2f8] via-[#f5e7ff] to-[#e0f2fe] px-4 py-10">
      <div className="w-full max-w-lg rounded-xl border border-[#dbdbdb] bg-white/95 px-10 py-8 shadow-[0_10px_40px_rgba(0,0,0,0.08)] backdrop-blur-sm">
        <img
          src="/instagram-logo.png"
          alt="Instagram"
          className="mx-auto mb-8 w-48"
        />

        <form onSubmit={handleLogin}>
          <Input
            label="Email"
            type="email"
            placeholder="Phone number, username or email"
            value={email}
            onChange={(eve) => setEmail(eve.target.value)}
          />

          <Input
            label="Password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(eve) => setPassword(eve.target.value)}
          />

          <div className="mt-5">
            <Button text="Log In" type="submit" />
          </div>
        </form>

        <div className="my-6 flex items-center">
          <div className="h-px flex-1 bg-gray-300"></div>
          <span className="mx-4 font-semibold uppercase text-gray-500">OR</span>
          <div className="h-px flex-1 bg-gray-300"></div>
        </div>
        <div className="mt-4 flex flex-col gap-2 text-sm md:flex-row md:items-center md:justify-between md:gap-0 text-center">
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
