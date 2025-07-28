import React from "react";
import { Navigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import { UserRole } from "../lib/auth";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: UserRole;
  redirectTo?: string;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  requiredRole,
  redirectTo = "/login",
}) => {
  const { user, userProfile, loading } = useAuth();

  console.log("ProtectedRoute check:", {
    loading,
    hasUser: !!user,
    hasProfile: !!userProfile,
    userRole: userProfile?.role,
    requiredRole,
  });

  // Show loading spinner while checking authentication
  if (loading) {
    console.log("ProtectedRoute: Still loading, showing spinner");
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-600"></div>
      </div>
    );
  }

  // Redirect to login if not authenticated
  if (!user || !userProfile) {
    console.log(
      "ProtectedRoute: No user or profile, redirecting to",
      redirectTo
    );
    return <Navigate to={redirectTo} replace />;
  }

  // Check role-based access
  if (requiredRole && userProfile.role !== requiredRole) {
    console.log(
      "ProtectedRoute: Role mismatch, redirecting based on user role"
    );
    // Redirect based on user role
    const roleRedirect =
      userProfile.role === "admin" ? "/admin" : "/cooperative";
    return <Navigate to={roleRedirect} replace />;
  }

  console.log("ProtectedRoute: Access granted, rendering children");
  return <>{children}</>;
};
