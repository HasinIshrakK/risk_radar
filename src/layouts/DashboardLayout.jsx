import React, { useState, useEffect } from "react";
import logo from "../../src/assets/sheld.png";
import {
  LayoutDashboard,
  Activity,
  ShieldAlert,
  Users,
  Settings,
  Menu,
  X,
  Bell,
  Search,
  House,
  User,
} from "lucide-react";
import { Link, useLocation } from "react-router";
import Container from "../components/SharedUi/Container";
import AOS from "aos";
import "aos/dist/aos.css";

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
    });
  }, []);

  const menuItems = [
    {
      name: "Overview",
      icon: <LayoutDashboard size={20} />,
      path: "/dashboard",
    },
    {
      name: "Live Risk Feed",
      icon: <Activity size={20} />,
      path: "/dashboard/live",
    },
    {
      name: "Risk Rules",
      icon: <ShieldAlert size={20} />,
      path: "/dashboard/rules",
    },
    {
      name: "Watchlist",
      icon: <Users size={20} />,
      path: "/dashboard/watchlist",
    },
    { name: "Profile", icon: <User size={20} />, path: "/dashboard/profile" },
    {
      name: "Settings",
      icon: <Settings size={20} />,
      path: "/dashboard/settings",
    },
  ];

  return (
    <div className="flex min-h-screen poppins-regular bg-emerald-50/30 text-slate-700 overflow-x-hidden">
      {/* Mobile Overlay  */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 opacity-100"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* STICKY ASIDE  */}
      <aside
        className={`
    fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-emerald-100 
    /* AOS এর বদলে নিচের এই ২ লাইন ট্রানজিশন যোগ করুন */
    transition-transform duration-300 ease-in-out transform 
    lg:translate-x-0 lg:sticky lg:top-0 lg:h-screen
    
    /* লজিক অনুযায়ী স্লাইডিং */
    ${isSidebarOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full lg:translate-x-0"}
  `}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="p-6 flex items-center justify-between shrink-0">
            <Link to="/" className="flex items-center gap-2 group">
              <img
                src={logo}
                alt="logo"
                className="w-7 md:w-8 transition-transform group-hover:scale-110"
              />
              <h1 className="text-lg md:text-xl font-bold tracking-tighter">
                <span className="text-slate-900 font-black">RISK</span>
                <span className="text-emerald-600 font-black">RADAR</span>
              </h1>
            </Link>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-1.5 text-slate-400 hover:bg-emerald-50 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Sidebar Scrollable Nav */}
          <nav className="flex-1 px-4 py-2 space-y-1 overflow-y-auto custom-scrollbar">
            {menuItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  to={item.path}
                  key={index}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                    isActive
                      ? "bg-emerald-600 text-white shadow-lg shadow-emerald-200"
                      : "text-slate-500 hover:bg-emerald-50 hover:text-emerald-600"
                  }`}
                >
                  <span
                    className={isActive ? "text-white" : "text-emerald-500"}
                  >
                    {item.icon}
                  </span>
                  <span className="font-semibold text-[14px]">{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Sidebar Footer */}
          <div className="p-4 border-t border-emerald-50 shrink-0">
            <div className="bg-emerald-50/50 p-3 rounded-2xl flex items-center gap-3 border border-emerald-100">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-bold shadow-inner uppercase">
                ad
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="text-xs font-bold text-slate-800 truncate">
                  Admin Space
                </p>
                <p className="text-[10px] text-emerald-600 font-medium truncate tracking-tight uppercase">
                  Node-01 Active
                </p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto">
        {/* Navbar - AOS fade-down */}
        <header
          data-aos="fade-down"
          className="h-16 shrink-0 bg-white/70 backdrop-blur-md border-b border-emerald-100 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-30"
        >
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden p-2 text-slate-600 hover:bg-emerald-50 rounded-xl transition-colors"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={24} />
            </button>

            <Link
              className="hidden sm:flex items-center justify-center gap-1.5 text-[12px] font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 hover:bg-emerald-100/80 px-4 py-2 rounded-full border border-emerald-100 transition-all"
              to={"/"}
            >
              <House size={18} strokeWidth={2.5} />
              <span className="mt-0.5">Home</span>
            </Link>
          </div>

          {/* Right side icons */}
          <div className="flex items-center gap-3 md:gap-5">
            <div className="hidden md:flex items-center bg-slate-100/50 px-4 py-2 rounded-2xl border border-transparent focus-within:border-emerald-200 focus-within:bg-white w-64 transition-all">
              <Search size={16} className="text-slate-400" />
              <input
                type="text"
                placeholder="Search analytics..."
                className="bg-transparent border-none focus:ring-0 text-sm ml-2 w-full outline-none font-medium text-slate-600"
              />
            </div>

            <div className="flex items-center gap-2">
              <button className="p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-full relative transition-colors">
                <Bell size={20} />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
              </button>
              <div className="h-8 w-px bg-emerald-100 mx-1 hidden sm:block"></div>
              <button className="w-9 h-9 bg-slate-100 rounded-full flex items-center justify-center hover:bg-emerald-100 transition-colors">
                <Settings size={18} className="text-slate-500" />
              </button>
            </div>
          </div>
        </header>

        {/* Main Content - AOS fade-up   */}
        <main data-aos="fade-up" className="flex-1">
          <Container>
            <div className="my-4 md:my-8">
              <h1 className="md:text-3xl text-2xl font-black text-slate-800 tracking-tight leading-none">
                System Overview
              </h1>
              <p className="text-slate-500 text-sm font-medium mt-2">
                Real-time security analytics and fraud monitoring active.
              </p>
            </div>

            {/* Stat Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              <StatCard
                title="Total Scanned"
                value="1,284"
                trend="+12.5%"
                isUp={true}
              />
              <StatCard title="High Risk" value="14" trend="+2" isUp={false} />
              <StatCard
                title="Avg Latency"
                value="42ms"
                trend="-3ms"
                isUp={true}
              />
              <StatCard title="Saved" value="$42.4k" trend="+$5k" isUp={true} />
            </div>

            <div className="my-4 md:my-8">
              {children ? (
                children
              ) : (
                <div className="bg-white p-8 rounded-[2.5rem] border border-emerald-100 shadow-sm min-h-100 flex flex-col justify-center items-center">
                  <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-4">
                    <Activity
                      className="text-emerald-500 animate-pulse"
                      size={32}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800">
                    Live Pulse Feed
                  </h3>
                  <p className="text-slate-400 text-sm mt-2 italic">
                    Listening for incoming Redis streams...
                  </p>
                </div>
              )}
            </div>
          </Container>
        </main>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, trend, isUp }) => (
  <div className="bg-white p-6 rounded-4xl border border-emerald-100 shadow-sm hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300">
    <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.15em]">
      {title}
    </p>
    <div className="flex items-end justify-between mt-4">
      <h2 className="text-3xl font-black text-slate-800">{value}</h2>
      <div
        className={`flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-full ${isUp ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-500"}`}
      >
        {trend}
      </div>
    </div>
  </div>
);

export default DashboardLayout;
