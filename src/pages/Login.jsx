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
    <div className="flex min-h-screen items-center justify-center bg-[#FAFAFA] px-4">
      <div className="w-full max-w-lg border border-gray-300 bg-white px-10 py-12">
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
        <div className="flex items-center justify-between w-full mt-4">
          <p className="text-center text-sm">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-[#0095f6] hover:underline"
            >
              Sign up
            </Link>
          </p>

          <Link
            to="/forgot-password"
            className="cursor-pointer text-sm text-[#0095f6] hover:underline block text-center font-semibold"
          >
            Forgot password?
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
