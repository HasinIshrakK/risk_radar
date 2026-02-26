import React, { useState, useEffect } from "react";
import { fetchTransactions } from "../../api";
import { detectHighAmount } from "../../utils";

const HighAmountDashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [highTransactions, setHighTransactions] = useState([]);
  const [showHighOnly, setShowHighOnly] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchTransactions();
        setTransactions(data);

        const highTx = detectHighAmount(data, 50000);
        setHighTransactions(highTx);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    loadData();
  }, []);

  const displayedData = showHighOnly ? highTransactions : transactions;

  return (
    <div className="p-6 bg-white text-black min-h-screen rounded-3xl">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">
        High Amount Detection Dashboard
      </h1>

      {/* Alert Box */}
      {highTransactions.length > 0 && (
        <div className="bg-green-500 text-white p-3 rounded mb-4 text-center shadow-lg animate-pulse">
          ⚠️ {highTransactions.length} High Amount Transaction(s) Detected!
        </div>
      )}

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="bg-green-100 p-4 rounded-xl shadow-lg hover:shadow-2xl transition text-center">
          <h2 className="text-lg font-semibold">Total Transactions</h2>
          <p className="text-2xl sm:text-3xl font-bold">
            {transactions.length}
          </p>
        </div>

        <div className="bg-red-100 p-4 rounded-xl shadow-lg hover:shadow-2xl transition text-center">
          <h2 className="text-lg font-semibold text-red-600">High Amount</h2>
          <p className="text-2xl sm:text-3xl font-bold text-red-600">
            {highTransactions.length}
          </p>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-4 mb-4 justify-center">
        <button
          onClick={() => setShowHighOnly(false)}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition cursor-pointer"
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
        <table className="min-w-full bg-white shadow-lg rounded-lg border-collapse border border-gray-300">
          <thead className="bg-green-400 text-gray-700 sticky top-0 z-10">
            <tr>
              <th className="py-2 px-4 text-center">#</th>
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
                className={`transition hover:bg-gray-100 ${
                  tx.status === "High Amount" ? "bg-red-100" : "bg-green-100"
                }`}
              >
                <th className="border border-gray-300 px-4 py-2 text-center">{idx + 1}</th>
                <td className="border border-gray-300 px-4 py-2 text-center">{tx.userName}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{tx.userEmail}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{tx.amount}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{tx.timestamp}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {tx.status === "High Amount" ? (
                    <span className="text-red-600 font-bold">{tx.status}</span>
                  ) : (
                    <span className="text-green-800 font-semibold">
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
