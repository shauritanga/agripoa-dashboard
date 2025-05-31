import { Link, Outlet, useLocation } from "react-router";
import { useState } from "react";

// Icons for the cooperative dashboard
const DashboardIcon = () => (
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
      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z"
    />
  </svg>
);

const FarmersIcon = () => (
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
      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
);

const SalesIcon = () => (
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
      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
    />
  </svg>
);

const ProductsIcon = () => (
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
      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
    />
  </svg>
);

const UsersIcon = () => (
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
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
    />
  </svg>
);

const AnalyticsIcon = () => (
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
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    />
  </svg>
);

const SettingsIcon = () => (
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
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const ReportsIcon = () => (
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
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
);

const LogoutIcon = () => (
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
      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
    />
  </svg>
);

const BellIcon = () => (
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
      d="M15 17h5l-5 5v-5zM4.868 19.718c.64-.02 1.27-.188 1.843-.495a6.978 6.978 0 003.708-3.707 6.978 6.978 0 00.495-1.843m-6.046 6.045L8 21l8-8-8-8-8 8 8 8z"
    />
  </svg>
);

export function CoopLayout() {
  const location = useLocation();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const navigation = [
    {
      name: "Dashboard",
      href: "/cooperative",
      icon: DashboardIcon,
      current: location.pathname === "/cooperative",
      section: "main",
    },
    {
      name: "Farmer Management",
      href: "/cooperative/farmers",
      icon: FarmersIcon,
      current: location.pathname === "/cooperative/farmers",
      section: "main",
    },
    {
      name: "Sales Management",
      href: "/cooperative/sales",
      icon: SalesIcon,
      current: location.pathname === "/cooperative/sales",
      section: "main",
    },
    {
      name: "Product Pricing",
      href: "/cooperative/products",
      icon: ProductsIcon,
      current: location.pathname === "/cooperative/products",
      section: "main",
    },
    {
      name: "User Management",
      href: "/cooperative/users",
      icon: UsersIcon,
      current: location.pathname === "/cooperative/users",
      section: "management",
    },
    {
      name: "Analytics & Reports",
      href: "/cooperative/analytics",
      icon: AnalyticsIcon,
      current: location.pathname === "/cooperative/analytics",
      section: "management",
    },
    {
      name: "Reports",
      href: "/cooperative/reports",
      icon: ReportsIcon,
      current: location.pathname === "/cooperative/reports",
      section: "management",
    },
    {
      name: "Settings",
      href: "/cooperative/settings",
      icon: SettingsIcon,
      current: location.pathname === "/cooperative/settings",
      section: "system",
    },
  ];

  const mainNavigation = navigation.filter((item) => item.section === "main");
  const managementNavigation = navigation.filter(
    (item) => item.section === "management"
  );
  const systemNavigation = navigation.filter(
    (item) => item.section === "system"
  );

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarCollapsed ? "w-16" : "w-64"
        } bg-green-800 dark:bg-green-900 text-white transition-all duration-300 ease-in-out flex flex-col h-screen`}
      >
        {/* Header */}
        <div className="p-4 border-b border-green-700 dark:border-green-800">
          <div className="flex items-center justify-between">
            {!sidebarCollapsed && (
              <div>
                <h2 className="text-xl font-bold text-white">Agripoa</h2>
                <p className="text-xs text-green-300">Uwamambo Farmers Co-op</p>
              </div>
            )}
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="p-1.5 rounded-lg hover:bg-green-700 dark:hover:bg-green-800 transition-colors"
            >
              {sidebarCollapsed ? (
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
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
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
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 flex flex-col flex-1">
          <div className="flex-1 space-y-6">
            {/* Main Section */}
            <div>
              {!sidebarCollapsed && (
                <h3 className="text-xs font-semibold text-green-300 uppercase tracking-wider mb-3">
                  Main
                </h3>
              )}
              <ul className="space-y-1">
                {mainNavigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className={`flex items-center ${
                          sidebarCollapsed
                            ? "justify-center px-2 py-3"
                            : "space-x-3 px-3 py-2.5"
                        } rounded-lg text-sm font-medium transition-colors ${
                          item.current
                            ? "bg-green-700 text-white"
                            : "text-green-100 hover:text-white hover:bg-green-700"
                        }`}
                        title={sidebarCollapsed ? item.name : undefined}
                      >
                        <div
                          className={sidebarCollapsed ? "w-6 h-6" : "w-5 h-5"}
                        >
                          <Icon />
                        </div>
                        {!sidebarCollapsed && <span>{item.name}</span>}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Management Section */}
            <div>
              {!sidebarCollapsed && (
                <h3 className="text-xs font-semibold text-green-300 uppercase tracking-wider mb-3">
                  Management
                </h3>
              )}
              <ul className="space-y-1">
                {managementNavigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className={`flex items-center ${
                          sidebarCollapsed
                            ? "justify-center px-2 py-3"
                            : "space-x-3 px-3 py-2.5"
                        } rounded-lg text-sm font-medium transition-colors ${
                          item.current
                            ? "bg-green-700 text-white"
                            : "text-green-100 hover:text-white hover:bg-green-700"
                        }`}
                        title={sidebarCollapsed ? item.name : undefined}
                      >
                        <div
                          className={sidebarCollapsed ? "w-6 h-6" : "w-5 h-5"}
                        >
                          <Icon />
                        </div>
                        {!sidebarCollapsed && <span>{item.name}</span>}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* System Section */}
            <div>
              {!sidebarCollapsed && (
                <h3 className="text-xs font-semibold text-green-300 uppercase tracking-wider mb-3">
                  System
                </h3>
              )}
              <ul className="space-y-1">
                {systemNavigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className={`flex items-center ${
                          sidebarCollapsed
                            ? "justify-center px-2 py-3"
                            : "space-x-3 px-3 py-2.5"
                        } rounded-lg text-sm font-medium transition-colors ${
                          item.current
                            ? "bg-green-700 text-white"
                            : "text-green-100 hover:text-white hover:bg-green-700"
                        }`}
                        title={sidebarCollapsed ? item.name : undefined}
                      >
                        <div
                          className={sidebarCollapsed ? "w-6 h-6" : "w-5 h-5"}
                        >
                          <Icon />
                        </div>
                        {!sidebarCollapsed && <span>{item.name}</span>}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Logout - Pinned to Bottom */}
          <div className="mt-auto pt-4 border-t border-green-700">
            <Link
              to="/"
              className={`flex items-center ${
                sidebarCollapsed
                  ? "justify-center px-2 py-3"
                  : "space-x-3 px-3 py-2.5"
              } rounded-lg text-sm font-medium text-green-100 hover:text-white hover:bg-green-700 transition-colors`}
              title={sidebarCollapsed ? "Logout" : undefined}
            >
              <div className={sidebarCollapsed ? "w-6 h-6" : "w-5 h-5"}>
                <LogoutIcon />
              </div>
              {!sidebarCollapsed && <span>Logout</span>}
            </Link>
          </div>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center px-6 py-4">
            <div>
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                Cooperative Portal
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Uwamambo Farmers Cooperative
              </p>
            </div>
            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                <BellIcon />
              </button>

              {/* User Profile */}
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    John Mwalimu
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Cooperative Manager
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white font-medium">
                  JM
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
