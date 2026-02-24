import React, { useState, useEffect } from "react";
import { detectHighAmount } from "../../utils";
import { sendAlert } from "../../otp";

const HighAmountDashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [highTransactions, setHighTransactions] = useState([]);
  const [showHighOnly, setShowHighOnly] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Dummy transactions with dynamic status
    const testTransactions = [
      { userId: 1, amount: 60000, timestamp: "2026-02-23 10:00" },
      { userId: 2, amount: 20000, timestamp: "2026-02-23 11:00" },
      { userId: 3, amount: 70000, timestamp: "2026-02-23 12:00" },
      { userId: 4, amount: 30000, timestamp: "2026-02-23 13:00" },
      { userId: 5, amount: 80000, timestamp: "2026-02-23 14:00" },
      { userId: 6, amount: 95000, timestamp: "2026-02-23 14:00" },
      { userId: 7, amount: 10000, timestamp: "2026-02-23 14:00" },
    ].map((tx) => ({
      ...tx,
      status: tx.amount > 50000 ? "High Amount" : "Normal",
    }));

    setTransactions(testTransactions);

    const highTx = detectHighAmount(testTransactions, 50000);
    setHighTransactions(highTx);

    highTx.forEach((tx) => sendAlert(tx.userId, tx.amount));
  }, []);

  const displayedData = showHighOnly ? highTransactions : transactions;

  return (
    <div
      className={`${darkMode ? "bg-green-900 text-white" : "bg-white text-black"} p-4 sm:p-6 min-h-screen rounded-3xl`}
    >
      {/* Dark Mode Toggle */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition cursor-pointer"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">
        High Amount Detection Dashboard
      </h1>

      {/* Alert Box */}
      {highTransactions.length > 0 && (
        <div className="bg-red-500 text-white p-3 rounded mb-4 text-center shadow-lg animate-pulse">
          ⚠️ {highTransactions.length} High Amount Transaction(s) Detected!
        </div>
      )}

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-2xl transition text-center">
          <h2 className="text-lg font-semibold">Total Transactions</h2>
          <p className="text-2xl sm:text-3xl font-bold">
            {transactions.length}
          </p>
        </div>

        <div className="bg-red-100 dark:bg-red-900 p-4 rounded-xl shadow-lg hover:shadow-2xl transition text-center">
          <h2 className="text-lg font-semibold text-red-600 dark:text-red-400">
            High Amount
          </h2>
          <p className="text-2xl sm:text-3xl font-bold text-red-600 dark:text-red-400">
            {highTransactions.length}
          </p>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-4 mb-4 justify-center">
        <button
          onClick={() => setShowHighOnly(false)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition cursor-pointer"
        >
          Show All
        </button>
        <button
          onClick={() => setShowHighOnly(true)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition cursor-pointer"
        >
          Show High Only
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-md">
        <table className="min-w-full bg-white dark:bg-green-700 shadow-lg rounded-lg border-collapse">
          <thead className="bg-gray-200 dark:bg-green-600 sticky top-0 z-10">
            <tr>
              <th className="py-2 px-4 text-center">#</th>
              <th className="py-2 px-4 text-center">User ID</th>
              <th className="py-2 px-4 text-center">Amount</th>
              <th className="py-2 px-4 text-center">Timestamp</th>
              <th className="py-2 px-4 text-center">Status</th>
            </tr>
          </thead>

          <tbody>
            {displayedData.map((tx, idx) => (
              <tr
                key={idx}
                className={`transition hover:bg-gray-100 dark:hover:bg-gray-700 ${tx.status === "High Amount" ? "bg-red-100 dark:bg-red-900" : ""}`}
              >
                <th className="border px-4 py-2 text-center">{idx + 1}</th>
                <td className="border px-4 py-2 text-center">{tx.userId}</td>
                <td className="border px-4 py-2 text-center">{tx.amount}</td>
                <td className="border px-4 py-2 text-center">{tx.timestamp}</td>
                <td className="border px-4 py-2 text-center">
                  {tx.status === "High Amount" ? (
                    <span className="text-red-600 font-bold dark:text-red-400">
                      {tx.status}
                    </span>
                  ) : (
                    <span className="text-green-800 font-semibold dark:text-green-400">
                      {tx.status}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HighAmountDashboard;
