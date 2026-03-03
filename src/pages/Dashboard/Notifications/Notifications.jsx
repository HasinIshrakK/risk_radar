import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const notificationsData = [
  { id: 1, type: "fraud", title: "Suspicious Transaction", description: "User: Rahim | Amount: $5000", time: "10:30 AM", read: false },
  { id: 2, type: "transaction", title: "Payment Received", description: "User: Karim | Amount: $200", time: "09:15 AM", read: true },
  { id: 3, type: "user", title: "New User Registered", description: "User: Hasan joined", time: "Yesterday", read: false },
];

const Notifications = () => {
  const [notifications, setNotifications] = useState(notificationsData);
  const [filter, setFilter] = useState("all");

  const markAsRead = (id) => {
    setNotifications(prev => prev.map((n) => n.id === id ? { ...n, read: true } : n));
  };

  const filteredNotifications = notifications.filter((n) => {
    if (filter === "unread") return !n.read;
    if (filter === "read") return n.read;
    return true;
  });

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="min-h-screen bg-white p-6 md:p-12 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4 border-b border-emerald-50 pb-8"
        >
          <div>
            <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">
              Notifications
            </h2>
            <p className="text-emerald-600 font-medium mt-1">
              You have <span className="bg-green-100 px-2 py-0.5 rounded text-emerald-800">{unreadCount}</span> unread alerts
            </p>
          </div>

          <div className="relative">
            <select
              className="appearance-none bg-green-50 border-none px-6 py-3 rounded-2xl focus:ring-2 focus:ring-green-500 font-bold text-green-700 cursor-pointer pr-10"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">View All</option>
              <option value="unread">Unread Only</option>
              <option value="read">Archived</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-green-600">
              ▼
            </div>
          </div>
        </motion.div>

        {/* Notification List */}
        <motion.div layout className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredNotifications.map((n) => (
              <motion.div
                key={n.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, x: -20 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className={`group relative bg-white border rounded-3xl p-6 transition-all hover:shadow-xl hover:shadow-green-900/5 ${
                  !n.read ? "border-green-200 bg-green-50/30" : "border-slate-100"
                }`}
              >
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-bold text-slate-800">
                        {n.title}
                      </h3>
                      {!n.read && (
                        <motion.span 
                          initial={{ scale: 0 }} 
                          animate={{ scale: 1 }}
                          className="text-[10px] bg-green-600 text-white font-black px-2 py-1 rounded-md tracking-tighter"
                        >
                          NEW
                        </motion.span>
                      )}
                    </div>
                    <p className="text-slate-500 mt-1 font-medium">{n.description}</p>
                    <p className="text-xs text-slate-400 mt-3 font-bold uppercase tracking-widest">{n.time}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2.5 text-sm font-bold rounded-xl bg-green-600 text-white shadow-lg shadow-green-600/20 cursor-pointer"
                    >
                      View Details
                    </motion.button>

                    {!n.read && (
                      <motion.button
                        whileHover={{ backgroundColor: "rgba(16, 185, 129, 0.1)" }}
                        onClick={() => markAsRead(n.id)}
                        className="px-4 py-2.5 text-sm font-bold rounded-xl border-2 border-green-100 text-green-600 cursor-pointer transition-colors"
                      >
                        Mark Read
                      </motion.button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredNotifications.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              className="text-center py-20 bg-slate-50 rounded-4xl border-2 border-dashed border-slate-200"
            >
              <p className="text-slate-400 font-bold">Inbox Zero. No notifications found.</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Notifications;
