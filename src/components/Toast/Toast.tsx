interface ToastProps {
    show: boolean;
    message: string;
    type?: "success" | "error" | "info";
}

const Toast = ({ show, message, type = "success" }: ToastProps) => {
    if (!show) return null;

    const colors = {
        success: " text-green-600",
        error: " text-red-600",
        info: " text-blue-600",
    };

    const barColors = {
        success: "bg-green-500",
        error: "bg-red-500",
        info: "bg-blue-500",
    };

    return (
        <div className="fixed top-6 right-6 z-50 animate-toast-slide">
            <div
                className={`bg-white   shadow-xl rounded-lg px-4 py-3 min-w-50 ${colors[type]}`}
            >
                <p className="font-semibold text-sm">
                    {type === "success"}
                    {message}
                </p>

                {/* progress bar */}
                <div
                    className={`h-1 mt-2 rounded animate-toast-progress ${barColors[type]}`}
                />
            </div>
        </div>
    );
};

export default Toast;
