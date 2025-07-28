import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";

interface LogoutButtonProps {
  className?: string;
  children?: React.ReactNode;
  variant?: "button" | "link";
  showSpinner?: boolean;
}

export function LogoutButton({
  className = "",
  children = "Logout",
  variant = "button",
  showSpinner = true,
}: LogoutButtonProps) {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const navigate = useNavigate();
  const { signOut } = useAuth();

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);
      await signOut();
      navigate("/login", { replace: true });
    } catch (error) {
      console.error("Logout error:", error);
      // Even if there's an error, redirect to login
      navigate("/login", { replace: true });
    } finally {
      setIsLoggingOut(false);
    }
  };

  const baseClasses =
    "transition-colors disabled:opacity-50 disabled:cursor-not-allowed";
  const buttonClasses =
    variant === "button"
      ? `${baseClasses} px-4 py-2 rounded-lg font-medium`
      : `${baseClasses} underline`;

  return (
    <button
      onClick={handleLogout}
      disabled={isLoggingOut}
      className={`${buttonClasses} ${className}`}
    >
      {isLoggingOut && showSpinner ? (
        <div className="flex items-center space-x-2">
          <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <span>Signing out...</span>
        </div>
      ) : (
        children
      )}
    </button>
  );
}
