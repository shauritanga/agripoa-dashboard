import type { MetaFunction } from "react-router";
import { useState } from "react";

export function meta({}: Parameters<MetaFunction>[0]) {
  return [
    { title: "Sales Management - Agripoa Cooperative" },
    {
      name: "description",
      content: "Track and manage sales from mobile app and direct transactions",
    },
  ];
}

// Icons
const SearchIcon = () => (
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
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

const FilterIcon = () => (
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
      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.414A1 1 0 013 6.707V4z"
    />
  </svg>
);

const PlusIcon = () => (
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
      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
    />
  </svg>
);

const EyeIcon = () => (
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
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    />
  </svg>
);

const CheckIcon = () => (
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
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const XIcon = () => (
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
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const PhoneIcon = () => (
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
);

export default function SalesManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedSales, setSelectedSales] = useState<number[]>([]);

  // Sample sales data
  const sales = [
    {
      id: 1,
      saleId: "SALE-2024-001",
      farmer: {
        name: "John Mwalimu",
        phone: "+255 712 345 678",
        membershipId: "DSM-001-2024",
      },
      product: "Maize",
      quantity: 500,
      unit: "kg",
      pricePerUnit: 3400,
      totalAmount: 1700000,
      status: "Completed",
      paymentStatus: "Paid",
      saleDate: "2024-01-14",
      recordedBy: "Mobile App",
      location: "Kinondoni, Dar es Salaam",
      notes: "High quality yellow maize",
    },
    {
      id: 2,
      saleId: "SALE-2024-002",
      farmer: {
        name: "Mary Mwanga",
        phone: "+255 722 456 789",
        membershipId: "DSM-002-2024",
      },
      product: "Coffee Beans",
      quantity: 120,
      unit: "kg",
      pricePerUnit: 6000,
      totalAmount: 720000,
      status: "Pending",
      paymentStatus: "Pending",
      saleDate: "2024-01-14",
      recordedBy: "Mobile App",
      location: "Ilala, Dar es Salaam",
      notes: "Premium arabica beans",
    },
    {
      id: 3,
      saleId: "SALE-2024-003",
      farmer: {
        name: "Peter Mollel",
        phone: "+255 733 567 890",
        membershipId: "DSM-003-2024",
      },
      product: "Beans",
      quantity: 200,
      unit: "kg",
      pricePerUnit: 2800,
      totalAmount: 560000,
      status: "Completed",
      paymentStatus: "Paid",
      saleDate: "2024-01-13",
      recordedBy: "Manual Entry",
      location: "Temeke, Dar es Salaam",
      notes: "Red kidney beans, organic",
    },
    {
      id: 4,
      saleId: "SALE-2024-004",
      farmer: {
        name: "Grace Nyerere",
        phone: "+255 744 678 901",
        membershipId: "DSM-004-2024",
      },
      product: "Cassava",
      quantity: 300,
      unit: "kg",
      pricePerUnit: 1200,
      totalAmount: 360000,
      status: "Rejected",
      paymentStatus: "N/A",
      saleDate: "2024-01-13",
      recordedBy: "Mobile App",
      location: "Ubungo, Dar es Salaam",
      notes: "Quality issues identified",
    },
    {
      id: 5,
      saleId: "SALE-2024-005",
      farmer: {
        name: "David Mwalimu",
        phone: "+255 755 789 012",
        membershipId: "DSM-005-2023",
      },
      product: "Sunflower Seeds",
      quantity: 150,
      unit: "kg",
      pricePerUnit: 2200,
      totalAmount: 330000,
      status: "Processing",
      paymentStatus: "Pending",
      saleDate: "2024-01-12",
      recordedBy: "Mobile App",
      location: "Kigamboni, Dar es Salaam",
      notes: "High oil content seeds",
    },
  ];

  const handleSelectSale = (id: number) => {
    setSelectedSales((prev) =>
      prev.includes(id) ? prev.filter((saleId) => saleId !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    setSelectedSales(
      selectedSales.length === sales.length ? [] : sales.map((sale) => sale.id)
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
      case "Pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400";
      case "Processing":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400";
      case "Rejected":
        return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
    }
  };

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case "Paid":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
      case "Pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400";
      case "N/A":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
    }
  };

  const filteredSales = sales.filter((sale) => {
    const matchesSearch =
      sale.saleId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sale.farmer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sale.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sale.farmer.membershipId.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || sale.status === statusFilter;

    let matchesDate = true;
    if (dateFilter !== "all") {
      const saleDate = new Date(sale.saleDate);
      const today = new Date();
      const daysDiff = Math.floor(
        (today.getTime() - saleDate.getTime()) / (1000 * 60 * 60 * 24)
      );

      switch (dateFilter) {
        case "today":
          matchesDate = daysDiff === 0;
          break;
        case "week":
          matchesDate = daysDiff <= 7;
          break;
        case "month":
          matchesDate = daysDiff <= 30;
          break;
      }
    }

    return matchesSearch && matchesStatus && matchesDate;
  });

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Sales Management
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Track and manage sales from mobile app and direct transactions
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
            <PlusIcon />
            Record Sale
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Total Sales
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                {sales.length}
              </p>
            </div>
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
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
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Completed Sales
              </p>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400 mt-1">
                {sales.filter((s) => s.status === "Completed").length}
              </p>
            </div>
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
              <CheckIcon />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Pending Sales
              </p>
              <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400 mt-1">
                {
                  sales.filter(
                    (s) => s.status === "Pending" || s.status === "Processing"
                  ).length
                }
              </p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-yellow-600 dark:text-yellow-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Total Revenue
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                TSh{" "}
                {sales
                  .filter((s) => s.status === "Completed")
                  .reduce((sum, s) => sum + s.totalAmount, 0)
                  .toLocaleString()}
              </p>
            </div>
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
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
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex flex-col sm:flex-row gap-4 flex-1">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon />
              </div>
              <input
                type="text"
                placeholder="Search sales, farmers, or products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex gap-3">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                <FilterIcon />
                Filters
              </button>
            </div>
          </div>

          {/* Bulk Actions */}
          {selectedSales.length > 0 && (
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {selectedSales.length} selected
              </span>
              <button className="px-3 py-1.5 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 rounded-lg text-sm hover:bg-green-200 dark:hover:bg-green-900/30 transition-colors">
                Approve
              </button>
              <button className="px-3 py-1.5 bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-400 rounded-lg text-sm hover:bg-red-200 dark:hover:bg-red-900/30 transition-colors">
                Reject
              </button>
            </div>
          )}
        </div>

        {/* Filter Options */}
        {showFilters && (
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Status
                </label>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="all">All Statuses</option>
                  <option value="Completed">Completed</option>
                  <option value="Pending">Pending</option>
                  <option value="Processing">Processing</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Date Range
                </label>
                <select
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="all">All Time</option>
                  <option value="today">Today</option>
                  <option value="week">This Week</option>
                  <option value="month">This Month</option>
                </select>
              </div>

              <div className="flex items-end">
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setStatusFilter("all");
                    setDateFilter("all");
                  }}
                  className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Sales Table */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-900/50">
              <tr>
                <th className="px-6 py-3 text-left">
                  <input
                    type="checkbox"
                    checked={selectedSales.length === sales.length}
                    onChange={handleSelectAll}
                    className="rounded border-gray-300 dark:border-gray-600 text-green-600 focus:ring-green-500"
                  />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Sale Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Farmer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Product & Quantity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {filteredSales.map((sale) => (
                <tr
                  key={sale.id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      checked={selectedSales.includes(sale.id)}
                      onChange={() => handleSelectSale(sale.id)}
                      className="rounded border-gray-300 dark:border-gray-600 text-green-600 focus:ring-green-500"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {sale.saleId}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {sale.saleDate}
                      </div>
                      <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                        {sale.recordedBy}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {sale.farmer.name}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                        <PhoneIcon />
                        {sale.farmer.phone}
                      </div>
                      <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                        ID: {sale.farmer.membershipId}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      {sale.product}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {sale.quantity.toLocaleString()} {sale.unit}
                    </div>
                    <div className="text-xs text-gray-400 dark:text-gray-500">
                      @ TSh {sale.pricePerUnit.toLocaleString()}/{sale.unit}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-lg font-bold text-gray-900 dark:text-white">
                      TSh {sale.totalAmount.toLocaleString()}
                    </div>
                    <div
                      className={`text-xs px-2 py-1 rounded-full inline-block ${getPaymentStatusColor(
                        sale.paymentStatus
                      )}`}
                    >
                      {sale.paymentStatus}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                        sale.status
                      )}`}
                    >
                      {sale.status}
                    </span>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {sale.location}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        className="p-1.5 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        title="View Details"
                      >
                        <EyeIcon />
                      </button>
                      {sale.status === "Pending" && (
                        <>
                          <button
                            className="p-1.5 text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                            title="Approve"
                          >
                            <CheckIcon />
                          </button>
                          <button
                            className="p-1.5 text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                            title="Reject"
                          >
                            <XIcon />
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {filteredSales.length === 0 && (
          <div className="text-center py-12">
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
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              No sales found
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              {searchTerm || statusFilter !== "all" || dateFilter !== "all"
                ? "Try adjusting your search or filter criteria."
                : "Sales from the mobile app will appear here."}
            </p>
          </div>
        )}
      </div>

      {/* Mobile App Integration Info */}
      <div className="bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800 p-6">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
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
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-sm font-medium text-green-900 dark:text-green-300">
              Mobile App Sales Integration
            </h3>
            <div className="mt-2 text-sm text-green-800 dark:text-green-200">
              <p>
                Sales recorded through the AgriPoa mobile app by farmers are
                automatically synced here. You can review, approve, or reject
                sales before processing payments.
              </p>
              <ul className="mt-2 list-disc list-inside space-y-1">
                <li>
                  Farmers record sales using current product prices from the
                  mobile app
                </li>
                <li>
                  GPS location and timestamp are automatically captured for
                  verification
                </li>
                <li>
                  Photos and quality notes can be attached to sales records
                </li>
                <li>Approved sales trigger payment processing workflows</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
