import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/sheld.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-400 border-b-2 border-blue-400 pb-1"
      : "hover:text-blue-400 cursor-pointer";

  return (
    <nav className="bg-green-900 text-white px-6 py-4 shadow-lg">
      <div className="flex justify-between items-center">
        <Link to={`/`} className="flex items-center gap-1">
          {/* Logo */}
          <img src={logo} className="w-10" alt="" />
          <h1 className="text-xl font-bold text-blue-400">RiskRadar</h1>
        </Link>

        {/* Hamburger button for mobile */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <FaTimes className="w-6 h-6" /> // Close icon
          ) : (
            <FaBars className="w-6 h-6" /> // Hamburger icon
          )}
        </button>

        {/* Menu - desktop */}
        <ul className="hidden md:flex gap-6 font-medium">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/dashboard" className={linkClass}>
            Dashboard
          </NavLink>
          <NavLink to="/transaction" className={linkClass}>
            Transactions
          </NavLink>
          <NavLink to="/alerts" className={linkClass}>
            Alerts
          </NavLink>
          <NavLink to="/reports" className={linkClass}>
            Reports
          </NavLink>
        </ul>

        {/* Profile */}
        <div className="hidden md:flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/40"
            alt="user"
            className="w-10 h-10 rounded-full border-2 border-blue-400"
          />
          <span>Admin</span>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col gap-4 mt-4 md:hidden">
          <NavLink
            to="/"
            className={linkClass}
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/dashboard"
            className={linkClass}
            onClick={() => setIsOpen(false)}
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/transaction"
            className={linkClass}
            onClick={() => setIsOpen(false)}
          >
            Transactions
          </NavLink>
          <NavLink
            to="/alerts"
            className={linkClass}
            onClick={() => setIsOpen(false)}
          >
            Alerts
          </NavLink>
          <NavLink
            to="/reports"
            className={linkClass}
            onClick={() => setIsOpen(false)}
          >
            Reports
          </NavLink>

          {/* Mobile Profile */}
          <div className="flex items-center gap-3 mt-2">
            <img
              src="https://i.pravatar.cc/40"
              alt="user"
              className="w-10 h-10 rounded-full border-2 border-blue-400"
            />
            <span>Admin</span>
          </div>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
