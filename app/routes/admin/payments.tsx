import type { MetaFunction } from "react-router";

export function meta({}: Parameters<MetaFunction>[0]) {
  return [
    { title: "Payments - Agripoa Admin" },
    {
      name: "description",
      content: "Manage payments and transactions",
    },
  ];
}

export default function Payments() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Payments
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Manage payments and financial transactions
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
              d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
            />
          </svg>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            Payments Module
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            This page is under development. Payment management features will be
            available soon.
          </p>
        </div>
      </div>
    </div>
  );
}
