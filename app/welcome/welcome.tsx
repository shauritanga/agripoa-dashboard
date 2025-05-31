import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";

export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 min-h-screen">
      <div className="w-[80%] max-w-none flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9 w-full">
          <div className="w-full max-w-4xl p-4">
            <div className="text-center">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-green-600 dark:text-green-400 mb-6">
                Agripoa
              </h1>
              <p className="text-2xl md:text-3xl lg:text-4xl text-gray-700 dark:text-gray-300 mb-4">
                Agricultural Platform for Tanzania
              </p>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400">
                Empowering farmers and cooperatives across Tanzania
              </p>
            </div>
          </div>
        </header>
        <div className="w-full max-w-6xl space-y-8 px-4">
          {/* Main CTA */}
          <div className="text-center space-y-4">
            <a
              href="/login"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
              Access Your Dashboard
            </a>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Secure login for cooperatives and administrators
            </p>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(({ title, description, icon, color }) => (
              <div
                key={title}
                className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-200"
              >
                <div
                  className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center mb-4`}
                >
                  {icon}
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {description}
                </p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50">
            <h3 className="text-center font-semibold text-gray-900 dark:text-white mb-8 text-xl">
              Empowering Tanzania's Agriculture
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400">
                  50+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Cooperatives
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
                  5,000+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Farmers
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400">
                  20+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Regions
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center space-y-4">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Need help? Contact our support team
            </p>
            <div className="flex justify-center space-x-8 text-sm">
              <a
                href="tel:+255123456789"
                className="flex items-center space-x-2 text-green-600 dark:text-green-400 hover:underline"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+255 629 593 331</span>
              </a>
              <a
                href="mailto:support@agripoa.co.tz"
                className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>support@agripoa.co.tz</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

const features = [
  {
    title: "Cooperative Management",
    description:
      "Streamline operations, track member activities, and manage agricultural resources efficiently.",
    color: "bg-green-100 dark:bg-green-900/20",
    icon: (
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
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  },
  {
    title: "Farmer Registration",
    description:
      "Register farmers, track their crops, and monitor agricultural productivity across regions.",
    color: "bg-blue-100 dark:bg-blue-900/20",
    icon: (
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
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
  },
  {
    title: "Sales & Analytics",
    description:
      "Track sales performance, analyze market trends, and generate comprehensive reports.",
    color: "bg-indigo-100 dark:bg-indigo-900/20",
    icon: (
      <svg
        className="w-6 h-6 text-indigo-600 dark:text-indigo-400"
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
    ),
  },
  {
    title: "System Administration",
    description:
      "Comprehensive platform management with user controls, security, and system monitoring.",
    color: "bg-purple-100 dark:bg-purple-900/20",
    icon: (
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
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
];
