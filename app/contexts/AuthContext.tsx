import React, { createContext, useContext, useEffect, useState } from "react";
import { type User, onAuthStateChanged } from "firebase/auth";
import { auth } from "../lib/firebase";
import { getUserProfile, logout, type UserProfile } from "../lib/auth";

interface AuthContextType {
  user: User | null;
  userProfile: UserProfile | null;
  loading: boolean;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

// Cache user profile in localStorage for instant loading
const getCachedProfile = (): UserProfile | null => {
  try {
    const cached = localStorage.getItem("agripoa_user_profile");
    return cached ? JSON.parse(cached) : null;
  } catch {
    return null;
  }
};

const setCachedProfile = (profile: UserProfile | null) => {
  try {
    if (profile) {
      localStorage.setItem("agripoa_user_profile", JSON.stringify(profile));
    } else {
      localStorage.removeItem("agripoa_user_profile");
    }
  } catch {
    // Ignore localStorage errors
  }
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const currentUser = auth.currentUser;
  const cachedProfile = currentUser ? getCachedProfile() : null;

  // Initialize with current user and cached profile if available
  const [user, setUser] = useState<User | null>(currentUser);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(
    cachedProfile
  );
  const [loading, setLoading] = useState(!currentUser || !cachedProfile); // Skip loading if both user and profile are available

  useEffect(() => {
    console.log("Setting up Firebase auth listener...");

    // Check if user is already authenticated (faster for returning users)
    const currentUser = auth.currentUser;
    if (currentUser) {
      console.log("Current user found immediately:", currentUser.uid);
      setUser(currentUser);

      // Load profile for current user
      getUserProfile(currentUser.uid)
        .then((profile) => {
          setUserProfile(profile);
          console.log("Profile loaded immediately:", profile?.role);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Failed to load user profile:", error);
          setUserProfile(null);
          setLoading(false);
        });
    }

    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      console.log(
        "Auth state changed:",
        firebaseUser ? "logged in" : "logged out"
      );

      // Skip if we already handled this user
      if (currentUser && firebaseUser && currentUser.uid === firebaseUser.uid) {
        console.log("Same user, skipping auth state change");
        return;
      }

      if (firebaseUser) {
        setUser(firebaseUser);

        try {
          console.log("Fetching user profile...");
          const profile = await getUserProfile(firebaseUser.uid);
          setUserProfile(profile);
          setCachedProfile(profile); // Cache the profile
          console.log("Profile loaded:", profile?.role);
        } catch (error) {
          console.error("Failed to load user profile:", error);
          setUserProfile(null);
          setCachedProfile(null); // Clear cache on error
        }
      } else {
        setUser(null);
        setUserProfile(null);
      }

      setLoading(false);
    });

    return () => {
      console.log("Cleaning up auth listener");
      unsubscribe();
    };
  }, []);

  const handleSignOut = async () => {
    try {
      setCachedProfile(null); // Clear cache on logout
      await logout();
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  const value: AuthContextType = {
    user,
    userProfile,
    loading,
    signOut: handleSignOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
