import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleForgotPassword = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (!email.trim()) {
      alert("Please enter your email");
      return;
    }

    alert("Password reset link sent to your email");
    navigate("/");
  };

  return (
    <div>
      <div>
        <form
          onSubmit={handleForgotPassword}
          className="space-y-4"
        >
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <Button
            text="Send reset link"
            type="submit"
          />
        </form>

        <div className="my-6 flex items-center gap-4">
          <div className="h-px flex-1 bg-[#dbdbdb]"></div>

          <span className="text-sm font-semibold text-[#737373]">
            OR
          </span>

          <div className="h-px flex-1 bg-[#dbdbdb]"></div>
        </div>

        <p className="text-center text-sm">
          <Link
            to="/"
            className="font-semibold text-[#d72c7a] hover:underline"
          >
            Back to login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;