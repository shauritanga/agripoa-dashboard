import type { MetaFunction } from "react-router";

export function meta({}: Parameters<MetaFunction>[0]) {
  return [
    { title: "System Analytics - Agripoa Admin" },
    {
      name: "description",
      content:
        "View comprehensive analytics and insights for the AgriPoa platform",
    },
  ];
}

export default function SystemAnalytics() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          System Analytics
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Comprehensive insights and performance metrics
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Platform Growth
              </p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
                +24.5%
              </p>
              <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                ↑ vs last month
              </p>
            </div>
            <div className="w-12 h-12 bg-green-50 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-green-600 dark:text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Revenue Growth
              </p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
                +18.2%
              </p>
              <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                ↑ vs last month
              </p>
            </div>
            <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-blue-600 dark:text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                User Engagement
              </p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
                87.3%
              </p>
              <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                ↑ +2.1% vs last month
              </p>
            </div>
            <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-purple-600 dark:text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                System Uptime
              </p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
                99.9%
              </p>
              <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                Excellent performance
              </p>
            </div>
            <div className="w-12 h-12 bg-orange-50 dark:bg-orange-900/20 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-orange-600 dark:text-orange-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* User Growth Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              User Growth Trend
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Monthly active users over time
            </p>
          </div>
          <div className="p-6">
            <div className="h-64 flex items-center justify-center border border-dashed border-gray-300 dark:border-gray-700 rounded-lg">
              <div className="text-center">
                <svg
                  className="w-12 h-12 text-gray-400 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                <p className="text-gray-500 dark:text-gray-400">
                  User growth chart will be displayed here
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Revenue Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Revenue Analytics
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Monthly revenue breakdown
            </p>
          </div>
          <div className="p-6">
            <div className="h-64 flex items-center justify-center border border-dashed border-gray-300 dark:border-gray-700 rounded-lg">
              <div className="text-center">
                <svg
                  className="w-12 h-12 text-gray-400 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                  />
                </svg>
                <p className="text-gray-500 dark:text-gray-400">
                  Revenue chart will be displayed here
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Top Performing Cooperatives */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Top Cooperatives
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              By member count
            </p>
          </div>
          <div className="p-6 space-y-4">
            {[
              {
                name: "Dar es Salaam Farmers Co-op",
                members: 1247,
                growth: "+12%",
              },
              { name: "Kilimanjaro Coffee Co-op", members: 892, growth: "+8%" },
              { name: "Arusha Grain Co-op", members: 756, growth: "+15%" },
              { name: "Mwanza Rice Co-op", members: 634, growth: "+5%" },
              { name: "Dodoma Sunflower Co-op", members: 523, growth: "+18%" },
            ].map((coop, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {coop.name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {coop.members} members
                  </p>
                </div>
                <span className="text-xs font-medium text-green-600 dark:text-green-400">
                  {coop.growth}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Crops */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Popular Crops
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Most cultivated crops
            </p>
          </div>
          <div className="p-6 space-y-4">
            {[
              { name: "Maize", percentage: 34, farmers: 1265 },
              { name: "Coffee", percentage: 22, farmers: 819 },
              { name: "Beans", percentage: 18, farmers: 670 },
              { name: "Wheat", percentage: 12, farmers: 447 },
              { name: "Bananas", percentage: 14, farmers: 521 },
            ].map((crop, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {crop.name}
                  </p>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {crop.farmers} farmers
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${crop.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System Health */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              System Health
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Current system status
            </p>
          </div>
          <div className="p-6 space-y-4">
            {[
              {
                metric: "Server Response Time",
                value: "142ms",
                status: "good",
              },
              {
                metric: "Database Performance",
                value: "98.7%",
                status: "excellent",
              },
              {
                metric: "API Success Rate",
                value: "99.2%",
                status: "excellent",
              },
              { metric: "Storage Usage", value: "67%", status: "good" },
              { metric: "Memory Usage", value: "45%", status: "excellent" },
            ].map((metric, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {metric.metric}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {metric.value}
                  </p>
                </div>
                <span
                  className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    metric.status === "excellent"
                      ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                      : metric.status === "good"
                      ? "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
                      : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
                  }`}
                >
                  {metric.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
