import type { MetaFunction } from "react-router";

export function meta({}: Parameters<MetaFunction>[0]) {
  return [
    { title: "Audit Logs - Agripoa Admin" },
    {
      name: "description",
      content: "View system audit logs and activity",
    },
  ];
}

export default function AuditLogs() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Audit Logs
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Monitor system activity and security events
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
              d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
            />
          </svg>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            Audit Logs Module
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            This page is under development. Audit logging features will be
            available soon.
          </p>
        </div>
      </div>
    </div>
  );
}
