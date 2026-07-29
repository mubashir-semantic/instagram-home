function Button({ text, type = "button", disabled = false, loading = false }) {
  return (
    <button
      type={type}
      disabled={disabled}
      className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#d72c7a] py-2.5 text-sm font-semibold text-white transition hover:bg-[#d72c7a]/90 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {loading && (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
      )}

      {text}
    </button>
  );
}

export default Button;