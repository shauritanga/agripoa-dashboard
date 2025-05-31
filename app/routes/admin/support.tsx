import type { MetaFunction } from "react-router";

export function meta({}: Parameters<MetaFunction>[0]) {
  return [
    { title: "Support - Agripoa Admin" },
    {
      name: "description",
      content: "Support and help desk management",
    },
  ];
}

export default function Support() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Support
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Manage support tickets and help requests
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8">
        <div className="text-center">
          <svg
            className="w-16 h-16 text-gray-400 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            Support Module
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            This page is under development. Support management features will be
            available soon.
          </p>
        </div>
      </div>
    </div>
  );
}
