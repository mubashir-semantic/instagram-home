function Button({ text, type = "button" }) {
  return (
    <button
      type={type}
      className="w-full rounded-lg bg-[#0095F6] py-2.5 text-sm font-semibold text-white transition hover:bg-[#1877F2]"
    >
      {text}
    </button>
  );
}

export default Button;