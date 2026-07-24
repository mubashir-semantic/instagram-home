import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

const ForgotPassword = () => {
  const [email, setEmail] = useState(" ");

  const navigate = useNavigate();
  const handleForgotPassword = (eve) => {
    eve.preventDefault();

    if (!email.trim()) {
      alert("Please enter your email");
      return;
    }

    alert("Password reset link sent to your email");
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

        <form onSubmit={handleForgotPassword} className="space-y-4">
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Button text="Send reset link" type="submit" />
        </form>

        <div className="my-6 flex items-center gap-4">
          <div className="h-px flex-1 bg-[#dbdbdb]"></div>
          <span className="text-sm font-semibold text-[#737373]">OR</span>
          <div className="h-px flex-1 bg-[#dbdbdb]"></div>
        </div>

        <p className="text-center text-sm">
          <Link to="/" className="font-semibold text-[#d72c7a] hover:underline">
            Back to login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;
