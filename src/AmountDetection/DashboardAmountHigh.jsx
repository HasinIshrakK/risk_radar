import React, { useState, useEffect } from "react";
import { sendAlert } from "../../otp";
import { fetchTransactions, detectHighAmountDynamic } from "../../api";

const DashboardAmountHigh = () => {
  const [transactions, setTransactions] = useState([]);
  const [highTransactions, setHighTransactions] = useState([]);
  const [showHighOnly, setShowHighOnly] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchTransactions();

        // Detect high transactions using dynamic threshold
        const highTx = detectHighAmountDynamic(data);

        // Assign status
        const finalData = data.map((tx) => ({
          ...tx,
          status: highTx.includes(tx) ? "High Amount" : "Normal",
        }));

        setTransactions(finalData);
        setHighTransactions(highTx);

        // Send alerts for high transactions
        highTx.forEach((tx) =>
          sendAlert(`⚠️ ${tx.userName} (${tx.userEmail}) high transaction: ${tx.amount}`)
        );
      } catch (error) {
        console.error("Error fetching transactions:", error.message);
      }
    };

    loadData();
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
          className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition"
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
          <p className="text-2xl sm:text-3xl font-bold">{transactions.length}</p>
        </div>

        <div className="bg-red-100 dark:bg-red-900 p-4 rounded-xl shadow-lg hover:shadow-2xl transition text-center">
          <h2 className="text-lg font-semibold text-red-600 dark:text-red-400">High Amount</h2>
          <p className="text-2xl sm:text-3xl font-bold text-red-600 dark:text-red-400">
            {highTransactions.length}
          </p>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-4 mb-4 justify-center">
        <button
          onClick={() => setShowHighOnly(false)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Show All
        </button>
        <button
          onClick={() => setShowHighOnly(true)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
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
              <th className="py-2 px-4 text-center">User Name</th>
              <th className="py-2 px-4 text-center">User Email</th>
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
                <td className="border px-4 py-2 text-center">{idx + 1}</td>
                <td className="border px-4 py-2 text-center">{tx.userId}</td>
                <td className="border px-4 py-2 text-center">{tx.userName}</td>
                <td className="border px-4 py-2 text-center">{tx.userEmail}</td>
                <td className="border px-4 py-2 text-center">{tx.amount}</td>
                <td className="border px-4 py-2 text-center">{tx.timestamp}</td>
                <td className="border px-4 py-2 text-center">
                  {tx.status === "High Amount" ? (
                    <span className="text-red-600 font-bold dark:text-red-400">{tx.status}</span>
                  ) : (
                    <span className="text-green-800 font-semibold dark:text-green-400">{tx.status}</span>
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

export default DashboardAmountHigh;