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
    <div className="bg-green-900 border border-green-800 sticky top-0 z-50">
      <nav className="text-white max-w-6xl mx-auto">
        <div className="flex justify-between items-center lg:px-0 px-6 py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1">
            <img src={logo} alt="logo" className="w-10" />
            <h1 className="text-xl font-bold text-blue-400">RiskRadar</h1>
          </Link>

          {/* Desktop Menu */}
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
            <NavLink to="/auth/register" className={linkClass}>
              Register
            </NavLink>
          </ul>

          {/* Profile */}
          <div className="hidden md:flex items-center gap-3">
            <img
              src="https://i.ibb.co.com/hxy9n78v/a.jpg"
              alt="user"
              className="w-10 h-10 rounded-full border-2 border-blue-400"
            />
            <span>Admin</span>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden px-6 pb-4 bg-green-900">
            <ul className="flex flex-col gap-4">
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
              <NavLink
                to="/auth/register"
                className={linkClass}
                onClick={() => setIsOpen(false)}
              >
                Register
              </NavLink>

              <div className="flex items-center gap-3 mt-2">
                <img
                  src="https://i.ibb.co.com/hxy9n78v/a.jpg"
                  alt="user"
                  className="w-10 h-10 rounded-full border-2 border-blue-400"
                />
                <span>Admin</span>
              </div>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
