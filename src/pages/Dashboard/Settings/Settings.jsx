import React, { useState } from "react";
import Container from "../../../components/SharedUi/Container";
import {
  User,
  Bell,
  Shield,
  Key,
  Globe,
  History,
  AlertTriangle,
  LogOut,
} from "lucide-react";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const menuItems = [
    { id: "profile", icon: User, label: "Profile Information" },
    { id: "security", icon: Shield, label: "Security & Login" },
    { id: "notifications", icon: Bell, label: "Notifications" },
  ];

  return (
    <div className="my-5 md:my-10">
      <Container>
        <h2 className="text-3xl font-black text-slate-800 mb-8">
          Account Settings
        </h2>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Tabs */}
          <div className="lg:w-1/4 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 p-4 rounded-2xl font-bold transition-all ${
                  activeTab === item.id
                    ? "bg-emerald-50 text-emerald-700"
                    : "text-slate-500 hover:bg-slate-100"
                }`}
              >
                <item.icon size={20} />
                {item.label}
              </button>
            ))}
          </div>

          {/* Main Settings Content */}
          <div className="flex-1 bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
            {/* Tab Content */}
            {activeTab === "profile" && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-slate-800 mb-6">
                  Profile Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-bold text-slate-400 uppercase">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full mt-2 p-4 bg-slate-50 rounded-xl border border-slate-200"
                      defaultValue="Alex Morgan"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-400 uppercase">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full mt-2 p-4 bg-slate-50 rounded-xl border border-slate-200"
                      defaultValue="alex@riskradar.com"
                    />
                  </div>
                </div>
                <button className="bg-emerald-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-emerald-700 transition-all">
                  Save Changes
                </button>
              </div>
            )}

            {activeTab === "security" && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-slate-800 mb-6">
                  Security & Login
                </h3>
                <div className="bg-slate-50 p-6 rounded-2xl flex justify-between items-center border border-slate-100">
                  <div className="flex items-center gap-4">
                    <Key className="text-emerald-500" />
                    <div>
                      <p className="font-bold text-slate-800">
                        Two-Factor Authentication
                      </p>
                      <p className="text-xs text-slate-500">
                        Secure your account with 2FA.
                      </p>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    className="toggle toggle-success"
                    defaultChecked
                  />
                </div>
              </div>
            )}

            {activeTab === "notifications" && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-slate-800 mb-6">
                  Email Preferences
                </h3>
                <div className="space-y-4">
                  {[
                    "Security Alerts",
                    "Monthly Usage Reports",
                    "Marketing Updates",
                  ].map((opt) => (
                    <label
                      key={opt}
                      className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        className="checkbox checkbox-success"
                        defaultChecked
                      />
                      <span className="font-medium text-slate-700">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Static Bottom Sections (Visible in all tabs) */}
            <div className="mt-12 pt-8 border-t border-slate-100 space-y-8">
              {/* 1. Account Activity Section */}
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <Globe size={20} className="text-slate-400" /> Recent Login
                  Activity
                </h3>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <p className="font-bold text-slate-700">
                        Chrome on Windows 11
                      </p>
                      <p className="text-xs text-slate-500">
                        Rajshahi, BD • March 12, 2026
                      </p>
                    </div>
                    <span className="text-[10px] bg-green-100 text-green-700 font-bold px-3 py-1 rounded-full uppercase">
                      Current Session
                    </span>
                  </div>
                </div>
              </div>

              {/* 2. Danger Zone Section */}
              <div className="bg-red-50 border border-red-100 p-6 rounded-2xl">
                <h3 className="text-lg font-bold text-red-600 mb-2 flex items-center gap-2">
                  <AlertTriangle size={20} /> Danger Zone
                </h3>
                <p className="text-sm text-red-800/70 mb-6">
                  Once you delete your account, there is no going back. Please
                  be certain.
                </p>
                <div className="flex gap-4">
                  <button className="bg-white border border-red-200 text-red-600 px-6 py-3 rounded-xl font-bold hover:bg-red-100 transition-all">
                    Deactivate
                  </button>
                  <button className="bg-red-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-red-700 transition-all">
                    Delete Permanently
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Settings;
