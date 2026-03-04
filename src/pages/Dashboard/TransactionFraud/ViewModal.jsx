const ViewModal = ({ transaction, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center p-4 z-50">
      
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl relative animate-fadeIn">

        {/* Header */}
        <div className="flex justify-between items-center border-b p-5">
          <h2 className="text-xl font-semibold">
            Transaction Details
          </h2>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 text-xl"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="p-5 space-y-4">

          {/* User Info */}
          <div className="flex items-center gap-4">
            <img
              src={transaction.image}
              alt={transaction.user}
              className="w-20 h-20 rounded-full border"
            />
            <div>
              <h3 className="text-lg font-bold">
                {transaction.user}
              </h3>
              <p className="text-sm text-gray-500">
                {transaction.location}
              </p>
            </div>
          </div>

          {/* Details */}
          <div className="grid grid-cols-2 gap-3 text-sm">

            <p><span className="font-semibold">ID:</span> {transaction.id}</p>
            <p><span className="font-semibold">Amount:</span> ${transaction.amount}</p>

            <p>
              <span className="font-semibold">Status:</span>{" "}
              <span
                className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  transaction.status === "Fraud"
                    ? "bg-red-100 text-red-600"
                    : "bg-green-100 text-green-600"
                }`}
              >
                {transaction.status}
              </span>
            </p>

            <p>
              <span className="font-semibold">Risk:</span> {transaction.risk}%
            </p>
          </div>

          {/* Risk Progress */}
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span>Risk Level</span>
              <span>{transaction.risk}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${
                  transaction.risk > 70
                    ? "bg-red-500"
                    : transaction.risk > 40
                    ? "bg-yellow-500"
                    : "bg-green-500"
                }`}
                style={{ width: `${transaction.risk}%` }}
              ></div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="border-t p-4">
          <button
            onClick={onClose}
            className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};

export default ViewModal;