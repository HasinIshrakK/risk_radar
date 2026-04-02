/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Bell, 
  ShieldAlert, 
  AlertTriangle, 
  CheckCircle2, 
  Filter, 
  Eye, 
  Check, 
  X,
  Clock
} from "lucide-react";
import Container from "../../../components/SharedUi/Container";
import { AuthContext } from "../../../context/authContext/AuthContext";
import useAxios from "../../../hooks/useAxios";

const Notifications = () => {
  const { user } = useContext(AuthContext);
  const axiosInstance = useAxios();

  const [notifications, setNotifications] = useState([]);
  const [filter, setFilter] = useState("all");
  const [selectedNotification, setSelectedNotification] = useState(null);

  useEffect(() => {
    if (!user?.uid) return;

    axiosInstance
      .get(`/api/notifications/${user.uid}`)
      .then((res) => {
        const formatted = res.data.map((item) => ({
          _id: item._id,
          type: item.status === "BLOCKED" ? "fraud" : item.alert ? "warning" : "transaction",
          title: item.status === "BLOCKED" ? "Blocked Transaction" : item.alert ? "Suspicious Activity" : "Transaction Update",
          description: `Amount: $${item.amount}`,
          time: new Date(item.createdAt).toLocaleString(),
          read: item.read ?? false,
          reason: item.reason,
          status: item.status,
        }));
        setNotifications(formatted);
      })
      .catch((err) => console.log("Notification fetch error:", err));
  }, [user, axiosInstance]);

  const markAsRead = async (id) => {
    try {
      await axiosInstance.patch(`/api/notifications/read/${id}`);
      setNotifications((prev) =>
        prev.map((n) => (n._id === id ? { ...n, read: true } : n))
      );
    } catch (err) {
      console.log("Mark as read error:", err);
    }
  };

  const filteredNotifications = notifications.filter((n) => {
    if (filter === "unread") return !n.read;
    if (filter === "read") return n.read;
    return true;
  });

  const unreadCount = notifications.filter((n) => !n.read).length;

  // Helper for Icon and Color
  const getStyle = (type) => {
    switch (type) {
      case "fraud": return { icon: <ShieldAlert size={20} />, color: "text-rose-600", bg: "bg-rose-50", border: "border-rose-100" };
      case "warning": return { icon: <AlertTriangle size={20} />, color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-100" };
      default: return { icon: <CheckCircle2 size={20} />, color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" };
    }
  };

  return (
    <div className="my-10 md:my-16 min-h-screen">
      <Container>
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-slate-100 pb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-red-500 rounded-lg text-white">
                    <Bell size={20} />
                </div>
                <h2 className="text-4xl font-black text-slate-900 tracking-tight">Activity Feed</h2>
            </div>
            <p className="text-slate-500 font-medium ml-12">
                You have <span className="text-rose-500 font-bold">{unreadCount} unread</span> security alerts.
            </p>
          </div>

          <div className="relative inline-block ml-12 md:ml-0">
            <Filter size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="pl-10 pr-8 py-3 rounded-2xl border border-slate-200 bg-white text-sm font-bold text-slate-700 outline-none focus:ring-2 focus:ring-emerald-500 appearance-none shadow-sm"
            >
              <option value="all">All Notifications</option>
              <option value="unread">Unread Only</option>
              <option value="read">Marked Read</option>
            </select>
          </div>
        </div>

        {/* List */}
        <div className="max-w-6xl mx-auto space-y-4">
          <AnimatePresence mode='popLayout'>
            {filteredNotifications.map((n) => {
              const style = getStyle(n.type);
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  key={n._id}
                  className={`group p-6 rounded-4xl border transition-all duration-300 relative overflow-hidden ${
                    n.read ? "bg-white border-slate-100 opacity-75" : `${style.bg} ${style.border} shadow-lg shadow-slate-200/50`
                  }`}
                >
                  <div className="flex items-start gap-5 relative z-10">
                    <div className={`shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center ${style.color} bg-white shadow-sm`}>
                      {style.icon}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <h3 className={`font-black text-lg ${n.read ? 'text-slate-600' : 'text-slate-900'}`}>
                          {n.title}
                        </h3>
                        <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                            <Clock size={12} /> {n.time}
                        </div>
                      </div>
                      <p className="text-slate-500 font-medium mt-1">{n.description}</p>

                      <div className="flex gap-3 mt-5">
                        {!n.read && (
                          <button
                            onClick={() => markAsRead(n._id)}
                            className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black rounded-xl transition-all shadow-md shadow-emerald-100 active:scale-95"
                          >
                            <Check size={14} strokeWidth={3} /> Mark As Read
                          </button>
                        )}
                        <button
                          onClick={() => setSelectedNotification(n)}
                          className="flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-black rounded-xl transition-all shadow-md active:scale-95"
                        >
                          <Eye size={14} strokeWidth={3} /> Details
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Subtle Unread Indicator */}
                  {!n.read && (
                    <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full -mr-12 -mt-12" />
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>

          {filteredNotifications.length === 0 && (
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="text-center py-20 bg-slate-50 rounded-[3rem] border border-dashed border-slate-200"
            >
              <Bell className="mx-auto text-slate-300 mb-4" size={48} />
              <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">
                No activity found in your radar
              </p>
            </motion.div>
          )}
        </div>
      </Container>

      {/* DETAILED MODAL */}
      <AnimatePresence>
        {selectedNotification && (
          <div className="fixed inset-0 flex items-center justify-center z-100 p-6">
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}
                onClick={() => setSelectedNotification(null)}
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" 
            />
            
            <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="bg-white rounded-[3rem] w-full max-w-lg relative z-10 overflow-hidden shadow-2xl border border-slate-100"
            >
              <div className={`h-2 w-full ${getStyle(selectedNotification.type).color.replace('text', 'bg')}`} />
              
              <div className="p-10">
                <div className="flex justify-between items-start mb-8">
                    <div>
                        <h2 className="text-3xl font-black text-slate-900 tracking-tight">Analysis Report</h2>
                        <p className="text-slate-400 font-bold text-xs uppercase mt-1 tracking-widest">{selectedNotification.time}</p>
                    </div>
                    <button 
                        onClick={() => setSelectedNotification(null)}
                        className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                    >
                        <X size={24} className="text-slate-400" />
                    </button>
                </div>

                <div className="space-y-6">
                    <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Detection Status</p>
                        <span className={`px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest ${
                            selectedNotification.status === "HIGH_RISK" || selectedNotification.status === "BLOCKED"
                                ? "bg-rose-100 text-rose-600"
                                : "bg-yellow-100 text-yellow-600"
                        }`}>
                            {selectedNotification.status}
                        </span>
                    </div>

                    <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Incident Reason</p>
                        <div className="p-6 bg-white border border-slate-200 rounded-3xl shadow-sm italic text-slate-700 font-medium">
                            "{selectedNotification.reason || "Automatic system flag based on behavioral anomaly."}"
                        </div>
                    </div>

                    <div className="flex items-center justify-between p-6 bg-red-600 rounded-3xl text-white">
                        <p className="text-sm font-bold text-white">Total Impact</p>
                        <p className="text-2xl font-black">{selectedNotification.description.split(': ')[1]}</p>
                    </div>
                </div>

                <button
                  onClick={() => setSelectedNotification(null)}
                  className="mt-10 w-full py-5 bg-slate-100 hover:bg-slate-200 text-emerald-900 font-black rounded-2xl transition-all active:scale-95 uppercase tracking-widest text-xs"
                >
                  Dismiss Report
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Notifications;