/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
        console.log("Fetched Notifications:", res.data);

        const formatted = res.data.map((item) => ({
          _id: item._id,
          type:
            item.status === "BLOCKED"
              ? "fraud"
              : item.alert
              ? "warning"
              : "transaction",

          title:
            item.status === "BLOCKED"
              ? "Blocked Transaction"
              : item.alert
              ? "Suspicious Activity"
              : "Transaction Update",

          description: `Amount: $${item.amount}`,
          time: new Date(item.createdAt).toLocaleString(),
          read: item.read ?? false,

          // 🔥 extra fields
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

  return (
    <div className="my-5 md:my-10">
      <Container>

        {/* Header */}
        <div className="flex justify-between items-end mb-10 border-b pb-6">
          <div>
            <h2 className="text-3xl font-bold">Notifications</h2>
            <p>You have {unreadCount} unread alerts</p>
          </div>

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 rounded border"
          >
            <option value="all">All</option>
            <option value="unread">Unread</option>
            <option value="read">Read</option>
          </select>
        </div>

        {/* List */}
        <div className="space-y-4">
          {filteredNotifications.map((n) => (
            <div
              key={n._id}
              className={`p-5 rounded-xl border ${
                n.type === "fraud"
                  ? "bg-red-50"
                  : n.type === "warning"
                  ? "bg-yellow-50"
                  : "bg-white"
              }`}
            >
              <h3 className="font-semibold">{n.title}</h3>
              <p className="text-sm">{n.description}</p>
              <p className="text-xs text-gray-400">{n.time}</p>

              <div className="flex gap-3 mt-3">
                {!n.read && (
                  <button
                    onClick={() => markAsRead(n._id)}
                    className="px-3 py-1 bg-green-600 text-white rounded"
                  >
                    Mark Read
                  </button>
                )}

                {/* 🔥 View Details */}
                <button
                  onClick={() => setSelectedNotification(n)}
                  className="px-3 py-1 bg-blue-600 text-white rounded"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}

          {filteredNotifications.length === 0 && (
            <p className="text-center text-gray-400 py-10">
              No notifications
            </p>
          )}
        </div>
      </Container>

      {/* 🔥 MODAL */}
      {selectedNotification && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-[90%] max-w-md">

            <h2 className="text-xl font-bold mb-4">
              Transaction Details
            </h2>

            <p>
              <strong>Status:</strong>{" "}
              <span
                className={`${
                  selectedNotification.status === "HIGH_RISK"
                    ? "text-red-500"
                    : "text-green-600"
                }`}
              >
                {selectedNotification.status}
              </span>
            </p>

            <p className="mt-2">
              <strong>Reason:</strong>{" "}
              {selectedNotification.reason || "N/A"}
            </p>

            <p className="mt-2">
              <strong>{selectedNotification.description}</strong>
            </p>

            <button
              onClick={() => setSelectedNotification(null)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notifications;