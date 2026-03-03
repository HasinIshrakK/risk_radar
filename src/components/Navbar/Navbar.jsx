import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/sheld.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `transition-all duration-300 hover:text-green-600 text-[13px] font-medium uppercase trackingwider ${
      isActive ? "text-green-600" : "text-slate-600"
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `flex items-center px-4 py-3 rounded-xl transition-all duration-300 ${
      isActive
        ? "bg-green-600 text-white font-semibold shadow-md shadow-green-200"
        : "text-slate-700 hover:bg-slate-50 active:bg-slate-100"
    }`;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Transactions", path: "/transaction" },
    { name: "Alerts", path: "/alerts" },
    { name: "Reports", path: "/reports" },
    { name: "Services", path: "/services" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  return (
    <div className="fixed top-2 md:top-4 w-full px-5 z-50">
      <nav
        className={`max-w-7xl lg:rounded-full rounded-2xl mx-auto border border-green-200
           bg-white/60 backdrop-blur-md shadow-[0_12px_40px_rgba(31,38,135,0.1)] transition-all duration-500 ease-in-out 
        `}
      >
        <div className="flex justify-between items-center px-4 py-3 md:py-3.5">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2 group shrink-0">
            <img
              src={logo}
              alt="logo"
              className="w-7 md:w-8 transition-transform group-hover:scale-110"
            />
            <h1 className="text-lg md:text-xl font-bold tracking-tighter">
              <span className="text-slate-900">RISK</span>
              <span className="text-green-500">RADAR</span>
            </h1>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink key={link.path} to={link.path} className={linkClass}>
                {link.name}
              </NavLink>
            ))}
          </ul>

          {/* Action Area (Desktop) */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <NavLink
              to="/auth/login"
              className="text-slate-600 uppercase hover:text-green-600 transition-colors text-sm font-medium"
            >
              Login
            </NavLink>

            <div className="flex items-center gap-2 bg-slate-100/50 pl-1.5 pr-3 py-1 rounded-full border border-slate-200/50">
              <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white text-[14px] font-bold shadow-sm shadow-green-300">
                A
              </div>
              <span className="text-xs uppercase font-bold text-slate-800 tracking-tight">
                Admin
              </span>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center text-slate-800 bg-slate-100/50 rounded-xl active:scale-95 transition-all"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>

        {/* Mobile Menu - Transitioning from the Nav background */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 pb-8 pt-2 flex flex-col gap-1.5">
            <div className="w-full h-[1px] bg-slate-200/50 mb-4" />

            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={mobileLinkClass}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}

            <div className="mt-6 flex flex-col gap-3">
              <NavLink
                to="/auth/register"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-4 bg-slate-900 text-white rounded-2xl font-semibold shadow-xl shadow-slate-200 transition-transform active:scale-95"
              >
                Register Account
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
