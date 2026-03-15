// import React, { useState } from "react";
// import { useContext } from "react";

// import { useNavigate } from "react-router";
// import {
//   Menu,
//   X,
//   Bell,
//   User,
//   LayoutDashboard,
//   ShieldAlert,
//   Settings,
//   LogOut,
//   ChevronDown,
// } from "lucide-react";
// import logo from "../../../assets/sheld.png";
// import { Link } from "react-router";
// import { AuthContext } from "../../../context/authContext/AuthContext";

// // const Topbar = ({ isDrawerOpen, setIsDrawerOpen }) => {
// //   const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

//   const { user, logOut } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleSignOut = async () => {
//     try {
//       await logOut();
//       setIsUserMenuOpen(false);
//       navigate("/login");
//     } catch (error) {
//       console.error("Logout error:", error);
//     }
//   };

//   const navLinks = [
//     {
//       title: "Overview",
//       href: "/dashboard",
//       icon: <LayoutDashboard size={18} />,
//     },
//     { title: "Fraud Alerts", href: "/alerts", icon: <ShieldAlert size={18} /> },
//     { title: "Settings", href: "/settings", icon: <Settings size={18} /> },
//   ];

//   return (
//     <nav className="h-16 bg-white border-b border-slate-100 px-4 flex items-center justify-between sticky top-0 z-50 shadow-sm">
//       <div className="flex items-center gap-3">
//         <button
//           onClick={() => setIsDrawerOpen(!isDrawerOpen)}
//           className="rounded-lg text-slate-600 hover:bg-green-50 hover:text-green-600 transition-colors"
//         >
//           <label
//             htmlFor="my-drawer-4"
//             aria-label="open sidebar"
//             className="btn btn-square p-2 rounded-lg text-slate-600 hover:bg-green-50 hover:text-green-600 transition-colors border-0"
//           >
//             {isDrawerOpen ? <X size={22} /> : <Menu size={22} />}
//           </label>
//         </button>

//         <Link to="/" className="flex items-center gap-1 ml-1 group">
//           <img
//             src={logo}
//             alt="logo"
//             className="w-9 h-9 object-contain transition-transform group-hover:scale-105"
//           />
//           <h1 className="text-xl font-bold text-green-700 tracking-tight">
//             RiskRadar
//           </h1>
//         </Link>
//       </div>

//       <div className="hidden md:flex items-center gap-6">
//         {navLinks.map((link, idx) => (
//           <Link
//             key={idx}
//             to={link.href}
//             className="text-sm font-semibold text-slate-500 hover:text-green-600 transition-all flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-green-50/50"
//           >
//             {link.title}
//           </Link>
//         ))}
//       </div>

//       <div className="flex items-center gap-2 relative">
//         <button className="p-2 rounded-full text-slate-400 hover:bg-green-50 hover:text-green-600 transition-colors relative group">
//           <Bell size={20} />
//           <span className="absolute top-2 right-2.5 w-2 h-2 bg-emerald-500 rounded-full border-2 border-white group-hover:animate-pulse"></span>
//         </button>

//         <div className="h-6 w-px bg-slate-200 mx-2 hidden sm:block"></div>

//         <div className="relative">
//           <button
//             onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
//             className={`flex items-center gap-2 p-1 pr-3 rounded-full border transition-all ${
//               isUserMenuOpen
//                 ? "border-green-200 bg-green-50"
//                 : "border-slate-100 hover:bg-slate-50"
//             }`}
//           >
//             <img
//               src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
//               alt="User"
//               className="w-8 h-8 rounded-full border border-green-100 object-cover shadow-sm"
//             />
//             <ChevronDown
//               size={14}
//               className={`text-slate-400 transition-transform duration-300 ${isUserMenuOpen ? "rotate-180 text-green-600" : ""}`}
//             />
//           </button>

//           {isUserMenuOpen && (
//             <div className="absolute right-0 mt-3 w-60 bg-white border border-green-50 rounded-2xl shadow-xl py-2 z-60 animate-in fade-in zoom-in duration-200">
//               <div className="md:hidden border-b border-slate-100 pb-2 mb-2 px-4 py-1">
//                 <p className="text-[10px] uppercase font-bold text-slate-400 mb-2 tracking-widest px-2">
//                   Menu Navigation
//                 </p>
//                 {navLinks.map((link, idx) => (
//                   <Link
//                     key={idx}
//                     to={link.href}
//                     className="flex items-center gap-3 w-full p-2.5 text-sm text-slate-600 hover:bg-green-50 hover:text-green-700 rounded-xl transition-colors"
//                   >
//                     <span className="text-slate-400 group-hover:text-green-500">
//                       {link.icon}
//                     </span>
//                     {link.title}
//                   </Link>
//                 ))}
//               </div>

//               <div className="px-5 py-3 border-b border-slate-50">
//                 <p className="text-sm font-bold text-slate-900 leading-none">
//                   Alex Morgan
//                 </p>
//                 <p className="text-[11px] text-green-600 font-medium mt-1.5">
//                   Admin • Security Lead
//                 </p>
//               </div>

//               <div className="p-1">
//                 <Link
//                   to={"/dashboard/profile"}
//                   className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 rounded-xl transition-colors"
//                 >
//                   <User size={16} className="text-slate-400" /> User profile
//                 </Link>
//                 <div className="h-px bg-slate-50 my-1 mx-2"></div>
//                 {user ? (
//                   <button
//                     onClick={handleSignOut}
//                     className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 rounded-xl transition-colors font-semibold"
//                   >
//                     <LogOut size={16} /> Sign Out
//                   </button>
//                 ) : (
//                   <Link
//                     to={"/auth/login"}
//                     className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-green-500 hover:bg-red-50 rounded-xl transition-colors font-semibold"
//                   >
//                     <LogOut size={16} /> Login{" "}
//                   </Link>
//                 )}
//               </div>
//             </div>
//             <span className="text-xl font-bold text-slate-800 tracking-tight">
//               RiskRadar
//             </span>
//           </div>

//           <ul className="menu px-4 py-0 w-full grow gap-1">
//             <p className="text-[10px] uppercase font-bold text-slate-400 mb-2 tracking-widest px-4">
//               Overview
//             </p>
//             {/* Homepage */}
//             <li>
//               <Link
//                 to="/dashboard"
//                 className={`flex items-center p-3 rounded-xl transition-all ${activeClass("/dashboard")}`}
//                 onClick={() => setIsDrawerOpen(false)} // মোবাইলে ক্লিক করলে সাইডবার বন্ধ হবে
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   strokeWidth="2"
//                   fill="none"
//                   stroke="currentColor"
//                   className="size-5"
//                 >
//                   <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
//                   <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
//                 </svg>
//                 <span className="ml-3">Dashboard</span>
//               </Link>
//             </li>

//             {/* Notifications */}
//             <li>
//               <Link
//                 to="notifications"
//                 className={`flex items-center p-3 rounded-xl transition-all ${activeClass("/dashboard/notifications")}`}
//                 onClick={() => setIsDrawerOpen(false)}
//               >
//                 <IoIosNotifications className="size-5" />
//                 <span className="ml-3">Notifications</span>
//               </Link>
//             </li>

//             {/* Profile */}
//             <li>
//               <Link
//                 to="profile"
//                 className={`flex items-center p-3 rounded-xl transition-all ${activeClass("/dashboard/profile")}`}
//                 onClick={() => setIsDrawerOpen(false)}
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   strokeWidth="2"
//                   fill="none"
//                   stroke="currentColor"
//                   className="size-5"
//                 >
//                   <circle cx="12" cy="8" r="4" />
//                   <path d="M6 20c0-4 12-4 12 0" />
//                 </svg>
//                 <span className="ml-3">Profile</span>
//               </Link>
//             </li>

//             {/* My Plan */}
//             <li>
//               <Link
//                 to="plan"
//                 className={`flex items-center p-3 rounded-xl transition-all ${activeClass("/dashboard/plan")}`}
//                 onClick={() => setIsDrawerOpen(false)}
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   strokeWidth="2"
//                   fill="none"
//                   stroke="currentColor"
//                   className="size-5"
//                 >
//                   <rect width="18" height="18" x="3" y="3" rx="2" />
//                   <path d="M3 9h18M9 21V9" />
//                 </svg>
//                 <span className="ml-3">My Plan</span>
//               </Link>
//             </li>
//           </ul>

//           {/* Sidebar Footer */}
//           <div className="p-4 border-t border-emerald-50">
//             <div className="bg-emerald-50 rounded-2xl p-4">
//               <p className="text-xs font-medium text-emerald-800">
//                 Account Status
//               </p>
//               <p className="text-[10px] text-emerald-600/80 mt-1 uppercase font-bold">
//                 Premium Member
//               </p>
//             </div>
//           </div>
//         </aside>
//       </div>

//       {isUserMenuOpen && (
//         <div
//           className="fixed inset-0 z-40 bg-black/5 md:bg-transparent"
//           onClick={() => setIsUserMenuOpen(false)}
//         ></div>
//       )}
//     </nav>
//   );
// };

// export default Topbar;
