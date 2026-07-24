import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

function Register() {
  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const handleRegister = (eve) => {
    eve.preventDefault();

    if (
      !name.trim() ||
      !email.trim() ||
      !password.trim() ||
      !username.trim() ||
      !birthdate.trim()
    ) {
      alert("Please fill in all fields");
      return;
    }

    alert("Registration successful");
    navigate("/");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#fdf2f8] via-[#f5e7ff] to-[#e0f2fe] px-4 py-10">
      <div className="w-full max-w-lg rounded-xl border border-[#dbdbdb] bg-white/95 px-10 py-8 shadow-[0_10px_40px_rgba(0,0,0,0.08)] backdrop-blur-sm">
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
            label="Username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(eve) => setUsername(eve.target.value)}
            username="username"
          />

          <Input
            label="Birthdate"
            type="date"
            placeholder="Birthdate"
            value={birthdate}
            onChange={(eve) => setBirthdate(eve.target.value)}
            birthdate="birthdate"
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
          <Link to="/" className="font-semibold text-[#d72c7a] hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
