import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-400 border-b-2 border-blue-400 pb-1"
      : "hover:text-blue-400 cursor-pointer";

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-lg">
      {/* Logo */}
      <h1 className="text-xl font-bold text-blue-400">
        RiskRadar
      </h1>

      {/* Menu */}
      <ul className="flex gap-6 font-medium">
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

         <NavLink to="/auth/register" className={linkClass}>
          Register
        </NavLink>
      </ul>

      {/* Profile */}
      <div className="flex items-center gap-3">
        <img
          src="https://i.pravatar.cc/40"
          alt="user"
          className="w-10 h-10 rounded-full border-2 border-blue-400"
        />
        <span className="hidden md:block">Admin</span>
      </div>
    </nav>
  );
};

export default Navbar;
