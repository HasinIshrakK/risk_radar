import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
/* --- Corrected Imports --- */
import { 
  FaEdit, 
  FaPhoneVolume, 
  FaCheckCircle, 
  FaSignOutAlt 
} from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { HiUserGroup } from "react-icons/hi";
import { 
  User, 
  Shield, 
  Bell, 
  AlertTriangle, 
  Key, 
  Globe, 
  LogOut 
} from "lucide-react"; // Using Lucide for the sidebar icons as per your previous code
import useAuth from "../../../hooks/useAuth";
import Container from "../../../components/SharedUi/Container";

const Settings = () => {
  const { user, loading, logOut } = useAuth();
  const [activeTab, setActiveTab] = useState("overview");

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin" />
    </div>
  );

  const tabs = [
    { id: "overview", label: "Overview", icon: User },
    { id: "security", label: "Security & Login", icon: Shield },
    { id: "notifications", label: "Notifications", icon: Bell },
  ];

  return (
    <div className="min-h-screen bg-emerald-50/20 py-10">
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto space-y-8"
        >
          {/* --- SHARED HEADER (From UserProfile) --- */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-emerald-100 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
            <div className="relative group">
              <img
                src={user?.photoURL || "https://i.pravatar.cc/150"}
                alt="profile"
                className="w-32 h-32 md:w-40 md:h-40 rounded-3xl object-cover border-4 border-emerald-50 shadow-md"
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 border-4 border-white rounded-full" />
            </div>

            <div className="text-center md:text-left flex-1">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
                {user?.displayName || "Member"}
              </h2>
              <p className="text-emerald-600 font-bold text-lg">{user?.email}</p>
              <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-3">
                <span className="px-4 py-1 text-[10px] font-black bg-emerald-100 text-emerald-700 rounded-full border border-emerald-200 uppercase tracking-widest">
                  {user?.role || "Verified Member"}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* --- SIDEBAR NAV (From Settings) --- */}
            <div className="lg:w-1/4 space-y-3">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-4 p-5 rounded-[1.5rem] font-bold transition-all ${
                    activeTab === tab.id
                      ? "bg-emerald-600 text-white shadow-lg shadow-emerald-200"
                      : "bg-white text-slate-500 hover:bg-emerald-50 border border-transparent hover:border-emerald-100"
                  }`}
                >
                  <tab.icon size={20} />
                  {tab.label}
                </button>
              ))}
              
              <button 
                onClick={logOut}
                className="w-full flex items-center gap-4 p-5 rounded-[1.5rem] font-bold text-red-500 hover:bg-red-50 transition-all mt-10"
              >
                <LogOut size={20} /> Sign Out
              </button>
            </div>

            {/* --- DYNAMIC CONTENT AREA --- */}
            <div className="flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="bg-white p-8 md:p-12 rounded-[3rem] border border-emerald-100 shadow-sm"
                >
                  {activeTab === "overview" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <InfoCard label="Phone" value={user?.phone || "Not Linked"} icon={<FaPhoneVolume />} />
                      <InfoCard label="Location" value={user?.location || "Global"} icon={<IoLocation />} />
                      <div className="md:col-span-2 mt-4 p-6 bg-emerald-600 rounded-3xl text-white flex justify-between items-center">
                        <div>
                          <p className="font-bold text-lg">Account Verified</p>
                          <p className="text-emerald-100 text-xs">Standard Protection Active</p>
                        </div>
                        <FaCheckCircle className="text-3xl text-emerald-200" />
                      </div>
                    </div>
                  )}

                  {activeTab === "security" && (
                    <div className="space-y-6">
                       <h3 className="text-xl font-bold text-slate-800">Security Layers</h3>
                       <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 flex justify-between items-center">
                          <div className="flex items-center gap-4">
                            <Key className="text-emerald-500" />
                            <div>
                                <p className="font-bold text-slate-800">Two-Factor Auth</p>
                                <p className="text-xs text-slate-500">Add an extra layer of safety</p>
                            </div>
                          </div>
                          <input type="checkbox" className="toggle toggle-success" defaultChecked />
                       </div>
                       <div className="p-6 bg-red-50 rounded-3xl border border-red-100">
                          <h4 className="text-red-600 font-bold flex items-center gap-2"><AlertTriangle size={18}/> Danger Zone</h4>
                          <button className="mt-4 text-xs font-black text-red-600 underline">Delete Account Permanently</button>
                       </div>
                    </div>
                  )}

                  {activeTab === "notifications" && (
                    <div className="space-y-4">
                       <h3 className="text-xl font-bold text-slate-800 mb-4">Email Preferences</h3>
                       {["Security Alerts", "Daily Reports", "Weekly Insights"].map(item => (
                         <label key={item} className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl cursor-pointer">
                            <input type="checkbox" className="checkbox checkbox-success" defaultChecked />
                            <span className="font-bold text-slate-700">{item}</span>
                         </label>
                       ))}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

// Sub-component for the Info Grid
const InfoCard = ({ label, value, icon }) => (
  <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
    <div className="flex items-center gap-3 mb-2 text-emerald-600">
      {icon}
      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{label}</span>
    </div>
    <p className="text-lg font-bold text-slate-800">{value}</p>
  </div>
);

export default Settings;