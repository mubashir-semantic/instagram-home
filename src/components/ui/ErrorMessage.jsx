function ErrorMessage({ message }) {
    return (
        <h2 className="text-center text-lg font-semibold text-red-500">
            {message}
        </h2>
    );
}

export default ErrorMessage;