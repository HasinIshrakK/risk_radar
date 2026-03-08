import React from "react";

const BlockedUsersModal = ({ transaction, onClose }) => {
  if (!transaction) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl w-[700px] relative">

        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-red-500">
            Blocked User
          </h2>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 text-xl"
          >
            ✕
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>User</th>
                <th>Email</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th>1</th>

                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={transaction.image} alt={transaction.user} />
                      </div>
                    </div>

                    <div>
                      <div className="font-bold">{transaction.user}</div>
                      <div className="text-sm opacity-50">
                        {transaction.country}
                      </div>
                    </div>
                  </div>
                </td>

                <td>{transaction.email}</td>
                <td>${transaction.amount}</td>

                <td>
                  <span className="badge badge-error">Blocked</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default BlockedUsersModal;