import React, { useState } from "react";

const notificationsData = [
  {
    id: 1,
    type: "fraud",
    title: "Suspicious Transaction",
    description: "User: Rahim | Amount: $5000",
    time: "10:30 AM",
    read: false,
  },
  {
    id: 2,
    type: "transaction",
    title: "Payment Received",
    description: "User: Karim | Amount: $200",
    time: "09:15 AM",
    read: true,
  },
  {
    id: 3,
    type: "user",
    title: "New User Registered",
    description: "User: Hasan joined",
    time: "Yesterday",
    read: false,
  },
];

const Notifications = () => {
  const [notifications, setNotifications] = useState(notificationsData);
  const [filter, setFilter] = useState("all");

  const markAsRead = (id) => {
    const updated = notifications.map((n) =>
      n.id === id ? { ...n, read: true } : n
    );
    setNotifications(updated);
  };

  const filteredNotifications = notifications.filter((n) => {
    if (filter === "unread") return !n.read;
    if (filter === "read") return n.read;
    return true;
  });

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-green-600">
              Notifications
            </h2>
            <p className="text-sm text-gray-500">
              You have {unreadCount} unread notifications
            </p>
          </div>

          <select
            className="border border-green-500 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 cursor-pointer"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option className="text-black" value="all">All</option>
            <option className="text-black" value="unread">Unread</option>
            <option className="text-black" value="read">Read</option>
          </select>
        </div>

        {/* Notification List */}
        <div className="space-y-4">
          {filteredNotifications.map((n) => (
            <div
              key={n.id}
              className={`bg-white border rounded-xl p-5 shadow-sm transition hover:shadow-md ${
                !n.read ? "border-l-4 border-green-500 bg-green-50" : "border-gray-200"
              }`}
            >
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">

                {/* Left Content */}
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {n.title}
                    </h3>

                    {!n.read && (
                      <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">
                        NEW
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-gray-600 mt-1">
                    {n.description}
                  </p>

                  <p className="text-xs text-gray-400 mt-2">
                    {n.time}
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <button className="px-4 py-1.5 text-sm rounded-lg bg-green-500 text-white hover:bg-green-600 transition cursor-pointer">
                    View
                  </button>

                  {!n.read && (
                    <button
                      onClick={() => markAsRead(n.id)}
                      className="px-4 py-1.5 text-sm rounded-lg border border-green-500 text-green-600 hover:bg-green-100 transition cursor-pointer"
                    >
                      Mark Read
                    </button>
                  )}
                </div>

              </div>
            </div>
          ))}

          {filteredNotifications.length === 0 && (
            <div className="text-center text-gray-400 py-10">
              No notifications found
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notifications;