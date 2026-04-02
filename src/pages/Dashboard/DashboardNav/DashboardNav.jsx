import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { Bell, ChevronDown, User, LogOut, Menu, X } from "lucide-react";
import useAuth from "../../../hooks/useAuth"; // Ensure path is correct
import { AuthContext } from "../../../context/authContext/AuthContext";
import useAxios from "../../../hooks/useAxios";

const DashboardNav = ({ isDrawerOpen, setIsDrawerOpen }) => {
  const { user, logOut } = useAuth();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [unreadCount, setUnreadCount] = useState(0);
  const { user: authUser } = useContext(AuthContext);
  const axiosInstance = useAxios();

  const handleLogout = async () => {
    await logOut();
    navigate("/auth/login");
  };

  useEffect(() => {
    if (!authUser?.uid) return;

    axiosInstance
      .get(`/api/notifications/${authUser.uid}`)
      .then((res) => {
        const unread = res.data.filter((n) => !n.read).length;
        setUnreadCount(unread);
      })
      .catch((err) => console.log(err));
  }, [authUser]);

  return (
    <nav className="h-16 bg-white border-b border-slate-100 px-4 flex items-center justify-between sticky top-0 z-30 shadow-sm shrink-0">
      <div className="flex items-center gap-3">
        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-green-50 hover:text-green-600 transition-colors"
        >
          {isDrawerOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div>
          <h3 className="md:text-xl font-bold uppercase tracking-tight text-slate-800">
            Dashboard
          </h3>
          <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">
            Overview
          </p>
        </div>
      </div>

      {/* Desktop Nav Items - Corrected Paths */}
      <div className="hidden md:flex items-center gap-6">
        <Link
          to="/dashboard"
          className="text-sm font-bold text-slate-500 hover:text-emerald-600 transition-colors"
        >
          Overview
        </Link>
        <Link
          to="/dashboard/my-plan"
          className="text-sm font-bold text-slate-500 hover:text-emerald-600 transition-colors"
        >
          My Plan
        </Link>
        <Link
          to="/dashboard/settings"
          className="text-sm font-bold text-slate-500 hover:text-emerald-600 transition-colors"
        >
          Settings
        </Link>
      </div>

      {/* Right Side Icons */}
      <div className="flex items-center gap-2">
        {/* Notifications */}
        <Link to="/dashboard/notifications">
          <button className="p-2 rounded-full text-slate-400 hover:bg-emerald-50 hover:text-emerald-600 relative group transition-all">
            <Bell size={20} />

            {unreadCount > 0 ? (
              <span className="absolute -top-1 -right-1 min-w-4.5 h-4.5 px-1 flex items-center justify-center text-[10px] font-bold bg-red-500 text-white rounded-full">
                {unreadCount}
              </span>
            ) : (
              <span className="absolute top-2 right-2.5 bg-emerald-500 rounded-full border-2 border-white group-hover:animate-pulse"></span>
            )}
          </button>
        </Link>

        <div className="h-6 w-px bg-slate-200 mx-2 hidden sm:block"></div>

        {/* Dynamic User Menu */}
        <div className="relative">
          <button
            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
            className={`flex items-center gap-2 p-1 pr-3 rounded-full border transition-all ${
              isUserMenuOpen
                ? "border-emerald-200 bg-emerald-50"
                : "border-slate-100 hover:bg-slate-50"
            }`}
          >
            {/* Dynamic Avatar Fix */}
            <div className="w-8 h-8 rounded-full overflow-hidden border border-emerald-100 bg-emerald-600 flex items-center justify-center text-white text-[10px] font-bold">
              {user?.photoURL ? (
                <img
                  referrerPolicy="no-referrer"
                  src={user?.photoURL}
                  alt="User"
                  className="w-full h-full object-cover"
                />
              ) : (
                user?.displayName?.charAt(0) || "U"
              )}
            </div>
            <ChevronDown
              size={14}
              className={`text-slate-400 transition-transform duration-300 ${isUserMenuOpen ? "rotate-180 text-emerald-600" : ""}`}
            />
          </button>

          {isUserMenuOpen && (
            <>
              <div className="fixed inset-0 z-40 bg-transparent" onClick={() => setIsUserMenuOpen(false)}></div>
              <div className="absolute right-0 mt-3 w-60 bg-white border border-emerald-50 rounded-3xl shadow-xl py-2 z-50 animate-in fade-in zoom-in duration-200">
                <div className="px-5 py-3 border-b border-slate-50">
                  <p className="text-sm font-black text-slate-900 truncate">
                    {user?.displayName || "Member"}
                  </p>
                  <p className="text-[10px] text-emerald-600 font-black uppercase tracking-wider">
                    {user?.role || "user"}
                  </p>
                </div>

                <Link
                  to="/dashboard/settings"
                  onClick={() => setIsUserMenuOpen(false)}
                  className="flex items-center gap-3 px-5 py-3 text-sm text-slate-600 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                >
                  <User size={16} /> User Profile
                </Link>

                <button
                  onClick={handleLogout}
                  className="flex items-center gap-3 w-full px-5 py-3 text-sm text-red-500 hover:bg-red-50 font-bold transition-colors"
                >
                  <LogOut size={16} /> Sign Out
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default DashboardNav;
