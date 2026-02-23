import React, { useState, useEffect } from "react";
import { fetchTransactions } from "../../api";
import { detectHighAmount } from "../../utils";
import { sendAlert } from "../../otp";

const HighAmountDashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [highTransactions, setHighTransactions] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchTransactions();
      setTransactions(data);

      const highTx = detectHighAmount(data);
      console.log("High Transactions:", highTx);
      setHighTransactions(highTx);

      // 🔥 👉 এখানে add করো
      highTx.forEach((tx) => {
        sendAlert(tx.userId, tx.amount);
      });
    };

    loadData();
  }, []);

  //  for testing
  useEffect(() => {
    const testTransactions = [
      { userId: 1, amount: 60000 },
      { userId: 2, amount: 20000 },
      { userId: 3, amount: 70000 },
      { userId: 4, amount: 30000 },
      { userId: 5, amount: 90000 },
    ];

    const result = detectHighAmount(testTransactions, 50000);
    console.log("Test Result:", result);
  }, []);

  return (
    <div className="p-6 bg-green-500 min-h-screen my-20 rounded-3xl">
      <h1 className="text-2xl font-bold mb-4">High Amount Transactions</h1>
      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead className="bg-gray-200 text-gray-700">
          <tr>
            <th className="py-2 px-4">User ID</th>
            <th className="py-2 px-4">Amount</th>
            <th className="py-2 px-4">Timestamp</th>
            <th className="py-2 px-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(transactions) &&
            transactions.map((tx, idx) => (
              <tr
                key={idx}
                className={highTransactions.includes(tx) ? "bg-red-100" : ""}
              >
                <td className="border px-4 py-2">{tx.userId}</td>
                <td className="border px-4 py-2">{tx.amount}</td>
                <td className="border px-4 py-2">{tx.timestamp}</td>
                <td className="border px-4 py-2">
                  {highTransactions.includes(tx) ? (
                    <span className="text-red-600 font-bold">High Amount</span>
                  ) : (
                    "Normal"
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default HighAmountDashboard;
