interface LoadingSpinnerProps {
    text?: string;
}

function LoadingSpinner({
    text = "Loading...",
}: LoadingSpinnerProps) {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            <p className="mt-4 text-lg font-semibold text-gray-700">{text}</p>
        </div>
    );
}

export default LoadingSpinner;