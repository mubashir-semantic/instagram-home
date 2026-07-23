function Input({ label, type, placeholder, value, onChange, }) {
  return (
    <div className="mb-4">
      <label className="mb-1 block text-sm font-medium text-gray-700">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full rounded border border-gray-300 bg-[#FAFAFA] px-3 py-2 text-sm outline-none focus:border-gray-400"
      />
    </div>
  );
}

export default Input;