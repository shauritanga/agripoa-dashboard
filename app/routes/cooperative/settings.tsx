import type { MetaFunction } from "react-router";
import { useState } from "react";

export function meta({}: Parameters<MetaFunction>[0]) {
  return [
    { title: "Settings - Agripoa Cooperative" },
    {
      name: "description",
      content:
        "Configure cooperative settings and farmer registration structure",
    },
  ];
}

// Icons
const SaveIcon = () => (
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
      d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3-3m0 0l-3 3m3-3v12"
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

const TrashIcon = () => (
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
      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1-1H8a1 1 0 00-1 1v3M4 7h16"
    />
  </svg>
);

const MoveIcon = () => (
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
      d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
    />
  </svg>
);

export default function Settings() {
  const [activeTab, setActiveTab] = useState("general");
  const [cooperativeInfo, setCooperativeInfo] = useState({
    name: "Dar es Salaam Farmers Cooperative",
    email: "info@darfarmers.co.tz",
    phone: "+255 712 345 678",
    address: "Kinondoni District, Dar es Salaam, Tanzania",
    registrationNumber: "COOP-DSM-2024-001",
    chairperson: "John Mwalimu",
    secretary: "Mary Mwanga",
  });

  const [farmerFields, setFarmerFields] = useState([
    { id: 1, name: "Full Name", type: "text", required: true, order: 1 },
    { id: 2, name: "Phone Number", type: "phone", required: true, order: 2 },
    { id: 3, name: "National ID", type: "text", required: true, order: 3 },
    { id: 4, name: "Farm Location", type: "text", required: true, order: 4 },
    {
      id: 5,
      name: "Farm Size (acres)",
      type: "number",
      required: true,
      order: 5,
    },
    {
      id: 6,
      name: "Primary Crops",
      type: "multiselect",
      required: true,
      order: 6,
    },
    {
      id: 7,
      name: "Years of Experience",
      type: "number",
      required: false,
      order: 7,
    },
    {
      id: 8,
      name: "Education Level",
      type: "select",
      required: false,
      order: 8,
    },
    {
      id: 9,
      name: "Bank Account Number",
      type: "text",
      required: false,
      order: 9,
    },
    {
      id: 10,
      name: "Emergency Contact",
      type: "phone",
      required: false,
      order: 10,
    },
  ]);

  const [newField, setNewField] = useState({
    name: "",
    type: "text",
    required: false,
  });

  const fieldTypes = [
    { value: "text", label: "Text" },
    { value: "number", label: "Number" },
    { value: "phone", label: "Phone Number" },
    { value: "email", label: "Email" },
    { value: "date", label: "Date" },
    { value: "select", label: "Dropdown" },
    { value: "multiselect", label: "Multiple Choice" },
    { value: "textarea", label: "Long Text" },
  ];

  const handleAddField = () => {
    if (newField.name.trim()) {
      const newId = Math.max(...farmerFields.map((f) => f.id)) + 1;
      setFarmerFields([
        ...farmerFields,
        {
          id: newId,
          name: newField.name,
          type: newField.type,
          required: newField.required,
          order: farmerFields.length + 1,
        },
      ]);
      setNewField({ name: "", type: "text", required: false });
    }
  };

  const handleRemoveField = (id: number) => {
    setFarmerFields(farmerFields.filter((field) => field.id !== id));
  };

  const handleFieldChange = (id: number, key: string, value: any) => {
    setFarmerFields(
      farmerFields.map((field) =>
        field.id === id ? { ...field, [key]: value } : field
      )
    );
  };

  const tabs = [
    { id: "general", name: "General Settings", icon: "⚙️" },
    { id: "farmer-fields", name: "Farmer Registration Fields", icon: "👨‍🌾" },
    { id: "mobile-app", name: "Mobile App Settings", icon: "📱" },
    { id: "notifications", name: "Notifications", icon: "🔔" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Cooperative Settings
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Configure cooperative settings and farmer registration structure
          </p>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
          <SaveIcon />
          Save Changes
        </button>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                activeTab === tab.id
                  ? "border-green-500 text-green-600 dark:text-green-400"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        {activeTab === "general" && (
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Cooperative Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Cooperative Name
                </label>
                <input
                  type="text"
                  value={cooperativeInfo.name}
                  onChange={(e) =>
                    setCooperativeInfo({
                      ...cooperativeInfo,
                      name: e.target.value,
                    })
                  }
                  className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Registration Number
                </label>
                <input
                  type="text"
                  value={cooperativeInfo.registrationNumber}
                  onChange={(e) =>
                    setCooperativeInfo({
                      ...cooperativeInfo,
                      registrationNumber: e.target.value,
                    })
                  }
                  className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={cooperativeInfo.email}
                  onChange={(e) =>
                    setCooperativeInfo({
                      ...cooperativeInfo,
                      email: e.target.value,
                    })
                  }
                  className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={cooperativeInfo.phone}
                  onChange={(e) =>
                    setCooperativeInfo({
                      ...cooperativeInfo,
                      phone: e.target.value,
                    })
                  }
                  className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Address
                </label>
                <textarea
                  value={cooperativeInfo.address}
                  onChange={(e) =>
                    setCooperativeInfo({
                      ...cooperativeInfo,
                      address: e.target.value,
                    })
                  }
                  rows={3}
                  className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Chairperson
                </label>
                <input
                  type="text"
                  value={cooperativeInfo.chairperson}
                  onChange={(e) =>
                    setCooperativeInfo({
                      ...cooperativeInfo,
                      chairperson: e.target.value,
                    })
                  }
                  className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Secretary
                </label>
                <input
                  type="text"
                  value={cooperativeInfo.secretary}
                  onChange={(e) =>
                    setCooperativeInfo({
                      ...cooperativeInfo,
                      secretary: e.target.value,
                    })
                  }
                  className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === "farmer-fields" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Farmer Registration Fields
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Configure the fields that farmers need to fill when
                  registering through the mobile app
                </p>
              </div>
            </div>

            {/* Add New Field */}
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
              <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                Add New Field
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                  <input
                    type="text"
                    placeholder="Field name"
                    value={newField.name}
                    onChange={(e) =>
                      setNewField({ ...newField, name: e.target.value })
                    }
                    className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <select
                    value={newField.type}
                    onChange={(e) =>
                      setNewField({ ...newField, type: e.target.value })
                    }
                    className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    {fieldTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex items-center gap-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={newField.required}
                      onChange={(e) =>
                        setNewField({ ...newField, required: e.target.checked })
                      }
                      className="rounded border-gray-300 dark:border-gray-600 text-green-600 focus:ring-green-500"
                    />
                    <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                      Required
                    </span>
                  </label>
                  <button
                    onClick={handleAddField}
                    className="inline-flex items-center gap-1 px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors text-sm"
                  >
                    <PlusIcon />
                    Add
                  </button>
                </div>
              </div>
            </div>

            {/* Existing Fields */}
            <div className="space-y-3">
              {farmerFields
                .sort((a, b) => a.order - b.order)
                .map((field) => (
                  <div
                    key={field.id}
                    className="flex items-center gap-4 p-4 border border-gray-200 dark:border-gray-600 rounded-lg"
                  >
                    <div className="cursor-move text-gray-400">
                      <MoveIcon />
                    </div>

                    <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="md:col-span-2">
                        <input
                          type="text"
                          value={field.name}
                          onChange={(e) =>
                            handleFieldChange(field.id, "name", e.target.value)
                          }
                          className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <select
                          value={field.type}
                          onChange={(e) =>
                            handleFieldChange(field.id, "type", e.target.value)
                          }
                          className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        >
                          {fieldTypes.map((type) => (
                            <option key={type.value} value={type.value}>
                              {type.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="flex items-center justify-between">
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            checked={field.required}
                            onChange={(e) =>
                              handleFieldChange(
                                field.id,
                                "required",
                                e.target.checked
                              )
                            }
                            className="rounded border-gray-300 dark:border-gray-600 text-green-600 focus:ring-green-500"
                          />
                          <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                            Required
                          </span>
                        </label>

                        <button
                          onClick={() => handleRemoveField(field.id)}
                          className="p-1.5 text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                        >
                          <TrashIcon />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {activeTab === "mobile-app" && (
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Mobile App Configuration
            </h2>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800 p-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
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
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-blue-900 dark:text-blue-300">
                    Mobile App Integration
                  </h3>
                  <div className="mt-2 text-sm text-blue-800 dark:text-blue-200">
                    <p>
                      The mobile app will automatically sync with these
                      settings. Changes made here will be reflected in the
                      farmer registration process and sales recording
                      functionality.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  App Name
                </label>
                <input
                  type="text"
                  value="AgriPoa Farmer App"
                  className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Default Language
                </label>
                <select className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option value="sw">Kiswahili</option>
                  <option value="en">English</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Currency
                </label>
                <input
                  type="text"
                  value="TSh (Tanzanian Shilling)"
                  disabled
                  className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Time Zone
                </label>
                <select className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option value="Africa/Dar_es_Salaam">
                    East Africa Time (EAT)
                  </option>
                </select>
              </div>
            </div>
          </div>
        )}

        {activeTab === "notifications" && (
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Notification Settings
            </h2>

            <div className="space-y-4">
              {[
                {
                  id: "new-farmer",
                  label: "New farmer registrations",
                  description:
                    "Get notified when farmers register through the mobile app",
                },
                {
                  id: "new-sale",
                  label: "New sales records",
                  description:
                    "Get notified when farmers record sales through the mobile app",
                },
                {
                  id: "price-updates",
                  label: "Price update confirmations",
                  description: "Get notified when product prices are updated",
                },
                {
                  id: "payment-status",
                  label: "Payment status changes",
                  description: "Get notified when payment statuses change",
                },
                {
                  id: "system-alerts",
                  label: "System alerts",
                  description:
                    "Get notified about system maintenance and updates",
                },
              ].map((notification) => (
                <div
                  key={notification.id}
                  className="flex items-start space-x-3 p-4 border border-gray-200 dark:border-gray-600 rounded-lg"
                >
                  <input
                    type="checkbox"
                    defaultChecked
                    className="mt-1 rounded border-gray-300 dark:border-gray-600 text-green-600 focus:ring-green-500"
                  />
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      {notification.label}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {notification.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
