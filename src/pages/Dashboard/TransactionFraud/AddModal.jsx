import React, { useState } from "react";

const AddModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    user: "",
    email: "",
    amount: "",
    location: "",
    country: "",
    status: "Normal",
    risk: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Date.now(),
      ...formData,
    };

    console.log("New Transaction:", newTransaction);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center p-4 z-50">

      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="flex justify-between items-center border-b p-5">
          <h2 className="text-xl font-semibold">
            Add New Transaction
          </h2>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 text-xl"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-5 space-y-4">
               {/* Image Preview */}
          {formData.image && (
            <div className="mt-3">
              <p className="text-sm mb-2">Image Preview:</p>
              <img
                src={formData.image}
                alt="Preview"
                className="w-20 h-20 rounded-full object-cover border"
              />
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

         

            <input
              type="text"
              name="user"
              placeholder="User Name"
              value={formData.user}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />

            <input
              type="number"
              name="amount"
              placeholder="Amount"
              value={formData.amount}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />

            <input
              type="text"
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
              className="input input-bordered w-full"
            />

            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
              className="input input-bordered w-full"
            />

            <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={formData.image}
              onChange={handleChange}
              className="input input-bordered w-full"
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
              placeholder="Risk Score"
              value={formData.risk}
              onChange={handleChange}
              className="input input-bordered w-full"
            />

          </div>

          

          {/* Risk Preview */}
          {formData.risk && (
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
          )}

          {/* Buttons */}
          <div className="flex gap-3 pt-3">
            <button
              type="submit"
              className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition"
            >
              Add Transaction
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

export default AddModal;