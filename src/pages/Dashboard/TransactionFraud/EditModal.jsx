import React, { useState, useEffect } from "react";

const EditModal = ({ transaction, onClose }) => {
  const [formData, setFormData] = useState({
    user: transaction.user,
    email: transaction.email,
    amount: transaction.amount,
    location: transaction.location,
    status: transaction.status,
    risk: transaction.risk,
    fraudCategories: transaction.fraudCategories || [],
  });

  // Update risk and status automatically based on fraud categories
  useEffect(() => {
    const calculateFraud = () => {
      const fraudCategories = [];

      if (formData.amount > 10000) fraudCategories.push("High Amount");
      if (formData.recentTransactions && formData.recentTransactions.length > 5)
        fraudCategories.push("Rapid Transactions");
      if (!["Dhaka", "New Delhi", "Beijing"].includes(formData.location))
        fraudCategories.push("Location Mismatch");
      if (formData.accountAgeDays && formData.accountAgeDays < 30)
        fraudCategories.push("New Account");
      const blacklisted = ["fraudster1@gmail.com", "scammer@gmail.com"];
      if (blacklisted.includes(formData.email)) fraudCategories.push("Blacklisted Recipient");
      if (formData.failedOtpAttempts && formData.failedOtpAttempts > 2)
        fraudCategories.push("Failed Attempts");
      if ([10000, 20000, 50000].includes(formData.amount))
        fraudCategories.push("Patterned Amount");
      if (formData.paymentMethod && formData.paymentMethod === "UnknownWallet")
        fraudCategories.push("Suspicious Payment Method");

      setFormData((prev) => ({
        ...prev,
        fraudCategories,
        status: fraudCategories.length > 0 ? "Fraud" : "Normal",
        risk: fraudCategories.length * 12.5,
      }));
    };

    calculateFraud();
  }, [formData.amount, formData.location, formData.email]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Data:", formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center p-4 z-50">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="flex justify-between items-center border-b p-5">
          <h2 className="text-xl font-semibold">Edit Transaction</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 text-xl"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <input
              type="text"
              name="user"
              value={formData.user}
              onChange={handleChange}
              className="input input-bordered w-full"
              placeholder="User Name"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input input-bordered w-full"
              placeholder="Email"
            />

            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="input input-bordered w-full"
              placeholder="Amount"
            />

            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="input input-bordered w-full"
              placeholder="Location"
            />

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="select select-bordered w-full"
            >
              <option value="Normal">Normal</option>
              <option value="Fraud">Fraud</option>
            </select>

            <input
              type="number"
              name="risk"
              value={formData.risk}
              onChange={handleChange}
              className="input input-bordered w-full"
              placeholder="Risk Score"
            />
          </div>

          {/* Fraud Categories */}
          <div>
            <h4 className="font-semibold text-sm mb-1">Fraud Categories:</h4>
            {formData.fraudCategories && formData.fraudCategories.length > 0 ? (
              <ul className="list-disc list-inside text-xs text-red-500">
                {formData.fraudCategories.map((cat, idx) => (
                  <li key={idx}>{cat}</li>
                ))}
              </ul>
            ) : (
              <p className="text-xs text-gray-500">No Fraud Detected</p>
            )}
          </div>

          {/* Risk Preview */}
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span>Risk Preview</span>
              <span>{formData.risk}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full transition-all duration-300 ${
                  formData.risk > 70
                    ? "bg-red-500"
                    : formData.risk > 40
                    ? "bg-yellow-500"
                    : "bg-green-500"
                }`}
                style={{ width: `${formData.risk}%` }}
              ></div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-3">
            <button
              type="submit"
              className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;