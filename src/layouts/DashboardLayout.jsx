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
} from "lucide-react";
import logo from "../../src/assets/sheld.png";
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
        <nav className="h-16 bg-white border-b border-slate-100 px-4 flex items-center justify-between sticky top-0 z-30 shadow-sm shrink-0">
          <div className="flex items-center gap-3">
            {/* Mobile Menu Button - htmlFor makes it toggle the input */}
            <label
              htmlFor="dashboard-drawer-input"
              className="lg:hidden btn btn-ghost btn-square p-2 rounded-lg text-slate-600 hover:bg-green-50 hover:text-green-600 border-0 bg-transparent transition-colors"
            >
              {isDrawerOpen ? <X size={24} /> : <Menu size={24} />}
            </label>

            <div>
              <h3 className="text-xl font-medium uppercase">Dahsboard</h3>
              <p className="text-xs">Overview</p>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/dashboard"
              className="text-sm font-semibold text-slate-500 hover:text-green-600"
            >
              Overview
            </Link>
            <Link
              to="/alerts"
              className="text-sm font-semibold text-slate-500 hover:text-green-600"
            >
              Fraud Alerts
            </Link>
            <Link
              to="/settings"
              className="text-sm font-semibold text-slate-500 hover:text-green-600"
            >
              Settings
            </Link>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full text-slate-400 hover:bg-green-50 hover:text-green-600 relative group">
              <Bell size={20} />
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-emerald-500 rounded-full border-2 border-white group-hover:animate-pulse"></span>
            </button>

            <div className="h-6 w-px bg-slate-200 mx-2 hidden sm:block"></div>

            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className={`flex items-center gap-2 p-1 pr-3 rounded-full border transition-all ${isUserMenuOpen ? "border-green-200 bg-green-50" : "border-slate-100 hover:bg-slate-50"}`}
              >
                <img
                  src="https://i.pravatar.cc/150?u=risk"
                  alt="User"
                  className="w-8 h-8 rounded-full border border-green-100 shadow-sm"
                />
                <ChevronDown
                  size={14}
                  className={`text-slate-400 transition-transform duration-300 ${isUserMenuOpen ? "rotate-180 text-green-600" : ""}`}
                />
              </button>

              {isUserMenuOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40 bg-transparent"
                    onClick={() => setIsUserMenuOpen(false)}
                  ></div>
                  <div className="absolute right-0 mt-3 w-56 bg-white border border-green-50 rounded-2xl shadow-xl py-2 z-50 animate-in fade-in zoom-in duration-200">
                    <div className="px-5 py-3 border-b border-slate-50">
                      <p className="text-sm font-bold text-slate-900">
                        Alex Morgan
                      </p>
                      <p className="text-[11px] text-green-600 font-medium">
                        Admin • Security Lead
                      </p>
                    </div>
                    <Link
                      to="/dashboard/profile"
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50"
                    >
                      <User size={16} /> User profile
                    </Link>
                    <button className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 font-semibold">
                      <LogOut size={16} /> Sign Out
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </nav>

        {/* Content View */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-10">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>

      {/* 3. Sidebar Drawer Side */}
      <div className="drawer-side z-50">
        {/* Overlay - ক্লিক করলে ড্রয়ার বন্ধ হবে */}
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
                  to="/dashboard/profile"
                  onClick={handleLinkClick}
                  className={`flex items-center p-3 rounded-xl transition-all ${activeClass("/dashboard/profile")}`}
                >
                  <User size={20} /> <span className="ml-3">User Profile</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/plan"
                  onClick={handleLinkClick}
                  className={`flex items-center p-3 rounded-xl transition-all ${activeClass("/dashboard/plan")}`}
                >
                  <ShieldAlert size={20} />{" "}
                  <span className="ml-3">Security Plan</span>
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
