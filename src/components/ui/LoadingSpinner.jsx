function LoadingSpinner({ text = "Loading..." }) {
    return (
        <h2 className="text-center text-lg font-semibold text-gray-700">
            {text}
        </h2>
    );
}

export default LoadingSpinner;