import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
  useNavigate,
} from "react-router";
import { useEffect } from "react";

import type { Route } from "./+types/root";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Agripoa - Agricultural Platform for Tanzania. Empowering farmers and cooperatives across Tanzania."
        />
        <meta
          name="keywords"
          content="agriculture, Tanzania, farmers, cooperatives, Agripoa, farming, agricultural platform"
        />
        <meta name="author" content="Agripoa Tanzania" />
        <meta
          property="og:title"
          content="Agripoa - Agricultural Platform for Tanzania"
        />
        <meta
          property="og:description"
          content="Empowering Tanzanian farmers and cooperatives through technology"
        />
        <meta property="og:type" content="website" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

function AppContent() {
  const { user, userProfile, loading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  // Handle authentication redirects at the root level
  useEffect(() => {
    if (!loading && user && userProfile) {
      // Only redirect if we're on the home page or login page
      if (location.pathname === "/" || location.pathname === "/login") {
        console.log(
          "Root: Redirecting authenticated user to",
          userProfile.role,
          "dashboard"
        );
        const redirectPath =
          userProfile.role === "admin" ? "/admin" : "/cooperative";
        navigate(redirectPath, { replace: true });
      }
    }
  }, [user, userProfile, loading, location.pathname, navigate]);

  // Only show loading screen for initial auth check, not for authenticated users on protected routes
  if (
    loading &&
    (location.pathname === "/" ||
      location.pathname === "/login" ||
      location.pathname === "/forgot-password")
  ) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-green-900 dark:to-blue-900">
        <div className="text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-green-600 animate-pulse"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Agripoa Tanzania
          </h1>
          <div className="flex items-center justify-center space-x-2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-green-600"></div>
            <p className="text-gray-600 dark:text-gray-400">Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  return <Outlet />;
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
