import { useState } from "react";

const DetectionHighAmount = () => {
  const [otp, setOtp] = useState(Array(5).fill(""));

  const handleOtpChange = (i, val) => {
  // only allow numbers
  if (val !== "" && isNaN(val)) return;

  const newOtp = [...otp];
  newOtp[i] = val;
  setOtp(newOtp);

  // auto-focus next input
  if (val && i < otp.length - 1) document.getElementById(`otp-${i + 1}`).focus();
};

  const handleSendOtp = () => alert("OTP sent!");
  const handleProceed = () =>
    alert(`Proceeding with transaction. OTP: ${otp.join("")}`);

  const transaction = {
    amount: "150,000 BDT",
    receiver: "Rahim Ahmed",
    date: "23 Feb 2026",
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center rounded-3xl">
      <div className="max-w-md mx-auto mt-10 p-6 bg-green-900 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">High Amount Detection</h2>

        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          <strong>High Amount Detected!</strong>
          <p className="mt-1 text-sm">
            You are attempting to send{" "}
            <span className="font-semibold">{transaction.amount}</span>, which
            exceeds the safe transaction limit.
          </p>
        </div>

        <div className="mb-6 border rounded-lg p-4 bg-green-800">
          {Object.entries(transaction).map(([key, value]) => (
            <div key={key} className="mb-2">
              <span className="font-medium">
                {key.charAt(0).toUpperCase() + key.slice(1)}:
              </span>{" "}
              {value}
            </div>
          ))}
        </div>

        <div className="mb-6">
          <label className="block font-medium mb-2">Enter OTP Code:</label>
          <div className="flex gap-2">
            {otp.map((val, i) => (
              <input
                key={i}
                id={`otp-${i}`}
                type="text"
                maxLength="1"
                value={val}
                onChange={(e) => handleOtpChange(i, e.target.value)}
                className="w-12 h-12 text-center border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            ))}
            <button
              onClick={handleSendOtp}
              className="ml-2 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 cursor-pointer"
            >
              Send OTP
            </button>
          </div>
        </div>

        <div className="flex justify-between gap-4">
          <button className="flex-1 py-2 border border-gray-300 rounded hover:bg-green-700 cursor-pointer">
            Cancel Transaction
          </button>
          <button
            onClick={handleProceed}
            className="flex-1 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 cursor-pointer"
          >
            Proceed Anyway
          </button>
        </div>
      </div>
    </div>
  );
}


export default DetectionHighAmount;