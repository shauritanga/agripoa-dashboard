import type { MetaFunction } from "react-router";
import { Welcome } from "../welcome/welcome";
import { useAuth } from "../contexts/AuthContext";

export function meta({}: Parameters<MetaFunction>[0]) {
  return [
    { title: "Agripoa - Agricultural Platform for Tanzania" },
    {
      name: "description",
      content:
        "Welcome to Agripoa - Empowering Tanzanian farmers and cooperatives!",
    },
  ];
}

export default function Home() {
  const { user, userProfile, loading } = useAuth();

  // Don't render anything while loading or if user is authenticated
  // This prevents the welcome screen flash completely
  if (loading || (user && userProfile)) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-green-900 dark:to-blue-900">
        {/* Empty div to prevent flash */}
      </div>
    );
  }

  // Only render welcome for confirmed non-authenticated users
  return <Welcome />;
}
