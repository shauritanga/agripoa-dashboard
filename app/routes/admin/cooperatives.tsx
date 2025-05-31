import type { MetaFunction } from "react-router";
import { useState } from "react";

export function meta({}: Parameters<MetaFunction>[0]) {
  return [
    { title: "Cooperatives Management - Agripoa Admin" },
    {
      name: "description",
      content: "Manage cooperatives in the AgriPoa platform",
    },
  ];
}

// Icons for the page
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

const ExportIcon = () => (
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
      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
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

const EditIcon = () => (
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
      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
    />
  </svg>
);

const SuspendIcon = () => (
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
      d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728"
    />
  </svg>
);

const DeleteIcon = () => (
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
      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
    />
  </svg>
);

const LocationIcon = () => (
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
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
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

const EmailIcon = () => (
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
      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const UsersIcon = () => (
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
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
    />
  </svg>
);

const CalendarIcon = () => (
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
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

export default function CooperativesManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [regionFilter, setRegionFilter] = useState("all");
  const [selectedCooperatives, setSelectedCooperatives] = useState<number[]>(
    []
  );
  const [showFilters, setShowFilters] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newCooperative, setNewCooperative] = useState({
    name: "",
    registrationNumber: "",
    chairman: "",
    location: "",
    region: "",
    phone: "",
    email: "",
    managerName: "",
    managerEmail: "",
    managerPhone: "",
    primaryCrops: [] as string[],
  });

  // Sample cooperative data - Tanzania
  const cooperatives = [
    {
      id: 1,
      name: "Dar es Salaam Farmers Cooperative",
      registrationNumber: "COOP-001-2023",
      chairman: "John Mwalimu",
      location: "Dar es Salaam, Tanzania",
      region: "Dar es Salaam",
      members: 1247,
      activeFarmers: 1180,
      totalLandArea: "2,450 acres",
      primaryCrops: ["Maize", "Beans", "Cassava"],
      status: "Active",
      registrationDate: "2023-01-15",
      lastActivity: "2024-01-14",
      phone: "+255 712 345 678",
      email: "info@darfarmers.co.tz",
      revenue: "TSh 300,000,000",
      compliance: "Compliant",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Kilimanjaro Coffee Cooperative",
      registrationNumber: "COOP-002-2023",
      chairman: "Mary Mwanga",
      location: "Moshi, Tanzania",
      region: "Kilimanjaro",
      members: 892,
      activeFarmers: 845,
      totalLandArea: "1,890 acres",
      primaryCrops: ["Coffee", "Bananas", "Maize"],
      status: "Active",
      registrationDate: "2023-02-20",
      lastActivity: "2024-01-13",
      phone: "+255 722 456 789",
      email: "contact@kilicoffee.co.tz",
      revenue: "TSh 236,400,000",
      compliance: "Compliant",
      rating: 4.6,
    },
    {
      id: 3,
      name: "Arusha Grain Cooperative",
      registrationNumber: "COOP-003-2023",
      chairman: "Peter Mollel",
      location: "Arusha, Tanzania",
      region: "Arusha",
      members: 756,
      activeFarmers: 720,
      totalLandArea: "3,200 acres",
      primaryCrops: ["Wheat", "Barley", "Maize"],
      status: "Pending Review",
      registrationDate: "2023-03-10",
      lastActivity: "2024-01-12",
      phone: "+255 733 567 890",
      email: "admin@arushagrain.co.tz",
      revenue: "TSh 209,280,000",
      compliance: "Under Review",
      rating: 4.2,
    },
    {
      id: 4,
      name: "Mwanza Rice Farmers Union",
      registrationNumber: "COOP-004-2023",
      chairman: "Grace Nyerere",
      location: "Mwanza, Tanzania",
      region: "Mwanza",
      members: 634,
      activeFarmers: 598,
      totalLandArea: "1,650 acres",
      primaryCrops: ["Rice", "Cotton", "Maize"],
      status: "Active",
      registrationDate: "2023-01-30",
      lastActivity: "2024-01-11",
      phone: "+255 744 678 901",
      email: "info@mwanzarice.co.tz",
      revenue: "TSh 184,320,000",
      compliance: "Compliant",
      rating: 4.4,
    },
    {
      id: 5,
      name: "Dodoma Sunflower Cooperative",
      registrationNumber: "COOP-005-2023",
      chairman: "David Mwalimu",
      location: "Dodoma, Tanzania",
      region: "Dodoma",
      members: 523,
      activeFarmers: 445,
      totalLandArea: "1,320 acres",
      primaryCrops: ["Sunflower", "Sorghum", "Beans"],
      status: "Suspended",
      registrationDate: "2022-12-05",
      lastActivity: "2023-12-20",
      phone: "+255 755 789 012",
      email: "contact@dodomasunflower.co.tz",
      revenue: "TSh 109,440,000",
      compliance: "Non-Compliant",
      rating: 3.8,
    },
  ];

  const handleSelectCooperative = (id: number) => {
    setSelectedCooperatives((prev) =>
      prev.includes(id)
        ? prev.filter((cooperativeId) => cooperativeId !== id)
        : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    setSelectedCooperatives(
      selectedCooperatives.length === cooperatives.length
        ? []
        : cooperatives.map((coop) => coop.id)
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
      case "Pending Review":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400";
      case "Suspended":
        return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
    }
  };

  const getComplianceColor = (compliance: string) => {
    switch (compliance) {
      case "Compliant":
        return "text-green-600 dark:text-green-400";
      case "Under Review":
        return "text-yellow-600 dark:text-yellow-400";
      case "Non-Compliant":
        return "text-red-600 dark:text-red-400";
      default:
        return "text-gray-600 dark:text-gray-400";
    }
  };

  const filteredCooperatives = cooperatives.filter((coop) => {
    const matchesSearch =
      coop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coop.chairman.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coop.registrationNumber.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || coop.status === statusFilter;
    const matchesRegion =
      regionFilter === "all" || coop.region === regionFilter;

    return matchesSearch && matchesStatus && matchesRegion;
  });

  const handleAddCooperative = () => {
    // Simulate creating cooperative and manager user
    const cooperativeData = {
      ...newCooperative,
      id: cooperatives.length + 1,
      members: 0,
      activeFarmers: 0,
      totalLandArea: "0 acres",
      status: "Pending Review",
      registrationDate: new Date().toISOString().split("T")[0],
      lastActivity: new Date().toISOString().split("T")[0],
      revenue: "TSh 0",
      compliance: "Under Review",
      rating: 0,
    };

    // Simulate creating manager user account
    const managerUser = {
      cooperativeId: cooperativeData.id,
      name: newCooperative.managerName,
      email: newCooperative.managerEmail,
      phone: newCooperative.managerPhone,
      role: "Manager",
      status: "Active",
      password: generateTemporaryPassword(),
      loginUrl: `/cooperative`,
    };

    // In a real app, this would be API calls
    console.log("Creating cooperative:", cooperativeData);
    console.log("Creating manager user:", managerUser);

    // Show success message with login credentials
    alert(
      `Cooperative registered successfully!\n\nManager Login Details:\nEmail: ${managerUser.email}\nTemporary Password: ${managerUser.password}\nLogin URL: ${window.location.origin}/cooperative\n\nThe manager will be prompted to change their password on first login.`
    );

    // Reset form and close modal
    setNewCooperative({
      name: "",
      registrationNumber: "",
      chairman: "",
      location: "",
      region: "",
      phone: "",
      email: "",
      managerName: "",
      managerEmail: "",
      managerPhone: "",
      primaryCrops: [],
    });
    setShowAddModal(false);
  };

  const generateTemporaryPassword = () => {
    // Generate a secure temporary password
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let password = "";
    for (let i = 0; i < 8; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  };

  const tanzanianRegions = [
    "Dar es Salaam",
    "Kilimanjaro",
    "Arusha",
    "Mwanza",
    "Dodoma",
    "Mbeya",
    "Morogoro",
    "Tanga",
    "Iringa",
    "Pwani",
  ];

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Cooperatives Management
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Manage and monitor agricultural cooperatives across all regions
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <ExportIcon />
            Export
          </button>
          <button
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            <PlusIcon />
            Add Cooperative
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Total Cooperatives
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                {cooperatives.length}
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
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Active Cooperatives
              </p>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400 mt-1">
                {cooperatives.filter((c) => c.status === "Active").length}
              </p>
            </div>
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
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
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Total Members
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                {cooperatives
                  .reduce((sum, c) => sum + c.members, 0)
                  .toLocaleString()}
              </p>
            </div>
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
              <UsersIcon />
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
                {cooperatives
                  .reduce(
                    (sum, c) =>
                      sum + parseInt(c.revenue.replace(/[TSh,\s]/g, "")),
                    0
                  )
                  .toLocaleString()}
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
                placeholder="Search cooperatives, chairmen, or registration numbers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
          {selectedCooperatives.length > 0 && (
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {selectedCooperatives.length} selected
              </span>
              <button className="px-3 py-1.5 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400 rounded-lg text-sm hover:bg-yellow-200 dark:hover:bg-yellow-900/30 transition-colors">
                Suspend
              </button>
              <button className="px-3 py-1.5 bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-400 rounded-lg text-sm hover:bg-red-200 dark:hover:bg-red-900/30 transition-colors">
                Delete
              </button>
            </div>
          )}
        </div>

        {/* Filter Options */}
        {showFilters && (
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Status
                </label>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Statuses</option>
                  <option value="Active">Active</option>
                  <option value="Pending Review">Pending Review</option>
                  <option value="Suspended">Suspended</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Region
                </label>
                <select
                  value={regionFilter}
                  onChange={(e) => setRegionFilter(e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Regions</option>
                  <option value="Dar es Salaam">Dar es Salaam</option>
                  <option value="Kilimanjaro">Kilimanjaro</option>
                  <option value="Arusha">Arusha</option>
                  <option value="Mwanza">Mwanza</option>
                  <option value="Dodoma">Dodoma</option>
                  <option value="Mbeya">Mbeya</option>
                  <option value="Morogoro">Morogoro</option>
                  <option value="Tanga">Tanga</option>
                  <option value="Iringa">Iringa</option>
                  <option value="Pwani">Pwani</option>
                </select>
              </div>

              <div className="flex items-end">
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setStatusFilter("all");
                    setRegionFilter("all");
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

      {/* Cooperatives Table */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-900/50">
              <tr>
                <th className="px-6 py-3 text-left">
                  <input
                    type="checkbox"
                    checked={
                      selectedCooperatives.length === cooperatives.length
                    }
                    onChange={handleSelectAll}
                    className="rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500"
                  />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Cooperative
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Chairman
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Members
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Revenue
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {filteredCooperatives.map((cooperative) => (
                <tr
                  key={cooperative.id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      checked={selectedCooperatives.includes(cooperative.id)}
                      onChange={() => handleSelectCooperative(cooperative.id)}
                      className="rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {cooperative.name}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {cooperative.registrationNumber}
                      </div>
                      <div className="flex items-center gap-4 mt-2">
                        <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                          <PhoneIcon />
                          {cooperative.phone}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                          <EmailIcon />
                          {cooperative.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900 dark:text-white">
                      {cooperative.chairman}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Chairman
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1 text-sm text-gray-900 dark:text-white">
                      <LocationIcon />
                      {cooperative.location}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {cooperative.region} Region
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900 dark:text-white">
                      {cooperative.members.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {cooperative.activeFarmers.toLocaleString()} active
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                        cooperative.status
                      )}`}
                    >
                      {cooperative.status}
                    </span>
                    <div
                      className={`text-xs mt-1 ${getComplianceColor(
                        cooperative.compliance
                      )}`}
                    >
                      {cooperative.compliance}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      {cooperative.revenue}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {cooperative.totalLandArea}
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
                      <button
                        className="p-1.5 text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                        title="Edit"
                      >
                        <EditIcon />
                      </button>
                      <button
                        className="p-1.5 text-gray-400 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors"
                        title="Suspend"
                      >
                        <SuspendIcon />
                      </button>
                      <button
                        className="p-1.5 text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                        title="Delete"
                      >
                        <DeleteIcon />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {filteredCooperatives.length === 0 && (
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
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              No cooperatives found
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              {searchTerm || statusFilter !== "all" || regionFilter !== "all"
                ? "Try adjusting your search or filter criteria."
                : "Get started by adding your first cooperative."}
            </p>
          </div>
        )}
      </div>

      {/* Pagination */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-700 dark:text-gray-300">
            Showing{" "}
            <span className="font-medium">{filteredCooperatives.length}</span>{" "}
            of <span className="font-medium">{cooperatives.length}</span>{" "}
            cooperatives
          </div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 disabled:opacity-50 disabled:cursor-not-allowed">
              Previous
            </button>
            <button className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-lg">
              1
            </button>
            <button className="px-3 py-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
              2
            </button>
            <button className="px-3 py-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
              3
            </button>
            <button className="px-3 py-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Add Cooperative Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
          <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-in slide-in-from-bottom-4 duration-300">
            <div className="p-6 border-b border-gray-200/50 dark:border-gray-700/50 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 dark:from-blue-900/10 dark:to-indigo-900/10">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Register New Cooperative
                </h2>
                <button
                  onClick={() => setShowAddModal(false)}
                  className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <svg
                    className="w-6 h-6"
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
                </button>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Register a new cooperative and automatically create a manager
                account for cooperative dashboard access.
              </p>
            </div>

            <div className="p-6 space-y-6 bg-white/50 dark:bg-gray-800/50">
              {/* Cooperative Information */}
              <div className="bg-gray-50/50 dark:bg-gray-700/20 rounded-lg p-4 border border-gray-200/30 dark:border-gray-600/30">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-blue-600 dark:text-blue-400"
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
                  Cooperative Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Cooperative Name *
                    </label>
                    <input
                      type="text"
                      value={newCooperative.name}
                      onChange={(e) =>
                        setNewCooperative({
                          ...newCooperative,
                          name: e.target.value,
                        })
                      }
                      className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., Dar es Salaam Farmers Cooperative"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Registration Number *
                    </label>
                    <input
                      type="text"
                      value={newCooperative.registrationNumber}
                      onChange={(e) =>
                        setNewCooperative({
                          ...newCooperative,
                          registrationNumber: e.target.value,
                        })
                      }
                      className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., COOP-DSM-2024-001"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Chairman/Chairperson *
                    </label>
                    <input
                      type="text"
                      value={newCooperative.chairman}
                      onChange={(e) =>
                        setNewCooperative({
                          ...newCooperative,
                          chairman: e.target.value,
                        })
                      }
                      className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., John Mwalimu"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Region *
                    </label>
                    <select
                      value={newCooperative.region}
                      onChange={(e) =>
                        setNewCooperative({
                          ...newCooperative,
                          region: e.target.value,
                        })
                      }
                      className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select Region</option>
                      {tanzanianRegions.map((region) => (
                        <option key={region} value={region}>
                          {region}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Location/Address *
                    </label>
                    <input
                      type="text"
                      value={newCooperative.location}
                      onChange={(e) =>
                        setNewCooperative({
                          ...newCooperative,
                          location: e.target.value,
                        })
                      }
                      className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., Kinondoni District, Dar es Salaam"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={newCooperative.phone}
                      onChange={(e) =>
                        setNewCooperative({
                          ...newCooperative,
                          phone: e.target.value,
                        })
                      }
                      className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+255 712 345 678"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={newCooperative.email}
                      onChange={(e) =>
                        setNewCooperative({
                          ...newCooperative,
                          email: e.target.value,
                        })
                      }
                      className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="info@darfarmers.co.tz"
                    />
                  </div>
                </div>
              </div>

              {/* Manager Account Information */}
              <div className="bg-green-50/50 dark:bg-green-900/10 rounded-lg p-4 border border-green-200/30 dark:border-green-600/30">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-green-600 dark:text-green-400"
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
                  Manager Account Information
                </h3>
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800 p-4 mb-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-blue-600 dark:text-blue-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-blue-900 dark:text-blue-300">
                        Automatic Manager Account Creation
                      </h4>
                      <p className="text-sm text-blue-800 dark:text-blue-200 mt-1">
                        A manager account will be automatically created with the
                        information below. The manager will receive login
                        credentials and can access the cooperative dashboard
                        immediately.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Manager Full Name *
                    </label>
                    <input
                      type="text"
                      value={newCooperative.managerName}
                      onChange={(e) =>
                        setNewCooperative({
                          ...newCooperative,
                          managerName: e.target.value,
                        })
                      }
                      className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., Mary Mwanga"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Manager Email *
                    </label>
                    <input
                      type="email"
                      value={newCooperative.managerEmail}
                      onChange={(e) =>
                        setNewCooperative({
                          ...newCooperative,
                          managerEmail: e.target.value,
                        })
                      }
                      className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="manager@darfarmers.co.tz"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Manager Phone *
                    </label>
                    <input
                      type="tel"
                      value={newCooperative.managerPhone}
                      onChange={(e) =>
                        setNewCooperative({
                          ...newCooperative,
                          managerPhone: e.target.value,
                        })
                      }
                      className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+255 722 456 789"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-gray-200/50 dark:border-gray-700/50 bg-gradient-to-r from-gray-50/50 to-blue-50/50 dark:from-gray-800/50 dark:to-blue-900/10 flex justify-end gap-3">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleAddCooperative}
                disabled={
                  !newCooperative.name ||
                  !newCooperative.managerName ||
                  !newCooperative.managerEmail
                }
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-lg transition-colors shadow-lg hover:shadow-xl"
              >
                Register Cooperative & Create Manager Account
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
