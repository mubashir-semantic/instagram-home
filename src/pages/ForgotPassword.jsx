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
    <div className="flex min-h-screen items-center justify-center bg-[#fafafa] px-4">
      <div className="w-full max-w-lg border border-[#dbdbdb] bg-white px-10 py-10">
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
          <Link to="/" className="font-semibold text-[#0095f6] hover:underline">
            Back to login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;
