import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

function Input({
  label,
  type,
  placeholder,
  value,
  onChange,
  username,
  birthdate,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const inputType = type === "password" ? showPassword ? "text" : "password" : type;

  return (
    <div className="mb-4">
      <label className="mb-1 block text-sm font-medium text-gray-700">
        {label}
      </label>

      <div className="relative">
        <input
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={username}
          id={birthdate}
          className="w-full rounded border border-gray-300 bg-[#FAFAFA] px-3 py-2 pr-10 text-sm outline-none focus:border-gray-400"
        />

        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#d72c7a]"
          >
            {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
          </button>
        )}
      </div>
    </div>
  );
}

export default Input;