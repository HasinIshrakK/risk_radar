import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router";
import { IoIosNotifications } from "react-icons/io";
import {
  Menu,
  X,
  Bell,
  User,
  LayoutDashboard,
  ShieldAlert,
  Settings,
  LogOut,
  ChevronDown,
  Home,
  HomeIcon,
  Settings2,
  BadgeDollarSign,
} from "lucide-react";
import logo from "../../src/assets/shield.png";
import DashboardNav from "../pages/Dashboard/DashboardNav/DashboardNav";

const DashboardLayout = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const location = useLocation();

  const activeClass = (path) =>
    location.pathname === path
      ? "bg-emerald-100 text-emerald-700 font-semibold"
      : "text-slate-600 hover:bg-emerald-50 hover:text-emerald-600";

  const handleLinkClick = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="poppins-regular drawer lg:drawer-open bg-slate-50 min-h-screen">
      {/* back to home button */}
      <input
        id="dashboard-drawer-input"
        type="checkbox"
        className="drawer-toggle"
        checked={isDrawerOpen}
        onChange={(e) => setIsDrawerOpen(e.target.checked)}
      />

      {/* 2. Main Page Content */}
      <div className="drawer-content flex flex-col h-screen overflow-hidden">
        {/* Topbar */}
        <DashboardNav></DashboardNav>
        {/* Content View */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>

      {/* 3. Sidebar Drawer Side */}
      <div className="drawer-side z-50">
        <label
          htmlFor="dashboard-drawer-input"
          aria-label="close sidebar"
          className="drawer-overlay"
          onClick={() => setIsDrawerOpen(false)}
        ></label>
        <aside className="flex min-h-full flex-col w-72 bg-white border-r border-emerald-100">
          {/* Sidebar Header */}
          <div className="px-6 py-5 flex items-center justify-between border-b border-slate-50 shrink-0">
            <Link to="/" className="flex items-center gap-1 ml-1 group">
              <img
                src={logo}
                alt="logo"
                className="w-9 h-9 object-contain transition-transform group-hover:scale-105"
              />
              <h1 className="text-xl font-bold text-green-700 tracking-tight">
                RiskRadar
              </h1>
            </Link>

            {/* Mobile Close Button */}
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="lg:hidden p-1 text-slate-400 hover:text-red-500 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Sidebar Navigation */}
          <nav className="flex-1 px-4 py-6 overflow-y-auto">
            <p className="text-[10px] uppercase font-bold text-slate-400 mb-4 tracking-widest px-4">
              Menu
            </p>
            <ul className="menu w-full p-0 gap-1.5">
              <li>
                <Link
                  to="/"
                  onClick={handleLinkClick}
                  className={`flex items-center p-3 rounded-xl transition-all ${activeClass("/home")}`}
                >
                  <HomeIcon size={20} /> <span className="ml-3">Home</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  onClick={handleLinkClick}
                  className={`flex items-center p-3 rounded-xl transition-all ${activeClass("/dashboard")}`}
                >
                  <LayoutDashboard size={20} />{" "}
                  <span className="ml-3">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/transaction-fraud"
                  onClick={handleLinkClick}
                  className={`flex items-center p-3 rounded-xl transition-all ${activeClass("/dashboard/transaction-fraud")}`}
                >
                  <BadgeDollarSign size={20} />{" "}
                  <span className="ml-3">Transaction Fraud</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/notifications"
                  onClick={handleLinkClick}
                  className={`flex items-center p-3 rounded-xl transition-all ${activeClass("/dashboard/notifications")}`}
                >
                  <IoIosNotifications size={22} />{" "}
                  <span className="ml-3">Notifications</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/all-users"
                  onClick={handleLinkClick}
                  className={`flex items-center p-3 rounded-xl transition-all ${activeClass("/dashboard/all-users")}`}
                >
                  <User size={20} /> <span className="ml-3">Manage Users</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/my-plan"
                  onClick={handleLinkClick}
                  className={`flex items-center p-3 rounded-xl transition-all ${activeClass("/dashboard/my-plan")}`}
                >
                  <ShieldAlert size={20} />{" "}
                  <span className="ml-3">My plan</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/settings"
                  onClick={handleLinkClick}
                  className={`flex items-center p-3 rounded-xl transition-all ${activeClass("/dashboard/settings")}`}
                >
                  <Settings2 size={20} /> <span className="ml-3">Settings</span>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Sidebar Footer */}
          <div className="p-4 border-t border-emerald-50">
            <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-100/50">
              <p className="text-xs font-bold text-emerald-800">Pro Tip</p>
              <p className="text-[10px] text-emerald-600 mt-1">
                Update security protocols regularly.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default DashboardLayout;
