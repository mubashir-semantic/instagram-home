import { forwardRef } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import useToggle from "../../hooks/useToggle";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    label,
    type = "text",
    placeholder,
    error,
    ...inputProps
  },
  ref
) {
  const {
    value: showPassword,
    toggle: togglePassword,
  } = useToggle(false);

  const inputType =
    type === "password" && showPassword
      ? "text"
      : type;

  return (
    <div className="mb-4">
      <label
        htmlFor={inputProps.name}
        className="mb-1 block text-sm font-medium text-gray-700"
      >
        {label}
      </label>

      <div className="relative">
        <input
          ref={ref}
          id={inputProps.name}
          type={inputType}
          placeholder={placeholder}
          {...inputProps}
          className={`w-full rounded border bg-[#FAFAFA] px-3 py-2 pr-10 text-sm outline-none ${error
            ? "border-red-500 focus:border-red-500"
            : "border-gray-300 focus:border-gray-400"
            }`}
        />

        {type === "password" && (
          <button
            type="button"
            onClick={togglePassword}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#d72c7a]"
            aria-label={
              showPassword ? "Hide password" : "Show password"
            }
          >
            {showPassword ? (
              <FiEyeOff size={18} />
            ) : (
              <FiEye size={18} />
            )}
          </button>
        )}
      </div>

      {error && (
        <p className="mt-1 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
});

export default Input;