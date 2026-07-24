function Button({ text, type = "button" }) {
  return (
    <button
      type={type}
      className="w-full rounded-lg bg-[#d72c7a] py-2.5 text-sm font-semibold text-white transition hover:bg-[#d72c7a]/90"
    >
      {text}
    </button>
  );
}

export default Button;