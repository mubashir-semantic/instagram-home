import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = (eve) => {
    eve.preventDefault();

    if (!name.trim() || !email.trim() || !password.trim()) {
      alert("Please fill in all fields");
      return;
    }

    alert("Registration successful");
    navigate("/");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#fafafa] px-4">
      <div className="w-full max-w-lg border border-[#dbdbdb] bg-white px-10 py-8">
        <img
          src="/instagram-logo.png"
          alt="Instagram"
          className="mx-auto mb-8 w-48"
        />

        <form onSubmit={handleRegister} className="space-y-3">
          <Input
            label="Name"
            type="text"
            placeholder="Full name"
            value={name}
            onChange={(eve) => setName(eve.target.value)}
          />

          <Input
            label="Email"
            type="email"
            placeholder="Email address"
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

          <Button text="Sign Up" type="submit" />
        </form>
        <div className="my-6 flex items-center">
          <div className="h-px flex-1 bg-gray-300"></div>
          <span className="mx-4 font-semibold uppercase text-gray-500">OR</span>
          <div className="h-px flex-1 bg-gray-300"></div>
        </div>
        <p className="mt-6 text-center text-sm">
          Already have an account?{" "}
          <Link to="/" className="font-semibold text-[#0095f6] hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
