import React, { useState } from "react";
import { GrView } from "react-icons/gr";
import { LiaEditSolid } from "react-icons/lia";
import { IoTrashOutline } from "react-icons/io5";
import { MdOutlineAddToDrive } from "react-icons/md";
import ViewModal from "./ViewModal";
import EditModal from "./EditModal";
import AddModal from "./AddModal";



//  Dynamic configuration for fraud detection
const fraudConfig = {
  highAmount: 10000,
  allowedCities: ["Dhaka", "New Delhi", "Beijing"],
  blacklistedEmails: ["fraudster1@gmail.com", "scammer@gmail.com"],
  patternedAmounts: [10000, 20000, 50000],
  otpFailLimit: 2,
  newAccountDays: 30,
  suspiciousPaymentMethods: ["UnknownWallet"],
  riskPerCategory: 12.5, // each category adds 12.5% to risk
};
// Dynamic fraud detection function
function detectFraud(tx, config = fraudConfig) {
  const fraudCategories = [];

  // 1 High Amount
  if (tx.amount > config.highAmount) fraudCategories.push("High Amount");

  // 2 Rapid Transactions (more than 5 recent transactions)
  if (tx.recentTransactions && tx.recentTransactions.length > 5)
    fraudCategories.push("Rapid Transactions");

  // 3 Location Mismatch (not in allowed cities)
  if (!config.allowedCities.includes(tx.location))
    fraudCategories.push("Location Mismatch");

  // 4 New Account (account age < 30 days)
  if (tx.accountAgeDays && tx.accountAgeDays < config.newAccountDays)
    fraudCategories.push("New Account");

  // 5 Blacklisted Recipient
  if (config.blacklistedEmails.includes(tx.email))
    fraudCategories.push("Blacklisted Recipient");

  // 6 Failed Attempts (OTP failed > 2 times)
  if (tx.failedOtpAttempts && tx.failedOtpAttempts > config.otpFailLimit)
    fraudCategories.push("Failed Attempts");

  // 7 Patterned Amount (exact amount matches known patterns)
  if (config.patternedAmounts.includes(tx.amount))
    fraudCategories.push("Patterned Amount");

  if (tx.paymentMethod && config.suspiciousPaymentMethods.includes(tx.paymentMethod))
    fraudCategories.push("Suspicious Payment Method");

  tx.fraudCategories = fraudCategories;
  tx.status = fraudCategories.length > 0 ? "Fraud" : "Normal";
  tx.risk = fraudCategories.length * config.riskPerCategory;

  return tx;
}



const TransactionFraudDashboard = () => {
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [modalType, setModalType] = useState(null);

  

 const transactions = [
    {
      id: 101,
      user: "Amina Asha",
      email: "ashaamina91@gmail.com",
      amount: 9000,
      location: "Dhaka",
      country: "Bangladesh",
      image: "https://avatars.githubusercontent.com/u/218670039?v=4",
      accountAgeDays: 40,
      recentTransactions: [1, 2],
      failedOtpAttempts: 0,
      paymentMethod: "Bank",
    },
    {
      id: 102,
      user: "Abrar Zayad",
      email: "ahmedabrarzayad@gmail.com",
      amount: 2000,
      location: "New Delhi",
      country: "India",
      image: "https://avatars.githubusercontent.com/u/88761193?v=4",
      accountAgeDays: 10,
      recentTransactions: [1, 2, 3, 4, 5, 6],
      failedOtpAttempts: 3,
      paymentMethod: "UnknownWallet",
    },
    {
      id: 103,
      user: "Faisal Hossen",
      email: "itsfaisalhossen@gmail.com",
      amount: 2000,
      location: "Beijing",
      country: "China",
      image: "https://avatars.githubusercontent.com/u/108367521?v=4",
      accountAgeDays: 60,
      recentTransactions: [1],
      failedOtpAttempts: 0,
      paymentMethod: "Bank",
    },
    {
      id: 104,
      user: "Tahmid Ahmed",
      email: "tahmid7282@gmail.com",
      amount: 2000,
      location: "Tokyo",
      country: "Japan",
      image: "https://avatars.githubusercontent.com/u/218386621?v=4",
      accountAgeDays: 15,
      recentTransactions: [1, 2, 3, 4, 5, 6, 7],
      failedOtpAttempts: 1,
      paymentMethod: "Bank",
    },
    {
      id: 105,
      user: "Hasin Ishrak",
      email: "hasinishrakk@gmail.com",
      amount: 11000,
      location: "Washington, D.C.",
      country: "United States",
      image: "https://avatars.githubusercontent.com/u/219306826?v=4",
      accountAgeDays: 15,
      recentTransactions: [1, 2, 3, 4, 5, 6, 7],
      failedOtpAttempts: 1,
      paymentMethod: "Bank",
    },
    {
      id: 106,
      user: "Mahfuzur Rahaman",
      email: "ripon301252@gmail.com",
      amount: 20000,
      location: "London",
      country: "United Kingdom",
      image: "https://i.ibb.co.com/5xhWzvbQ/mahfuz.png",
      accountAgeDays: 15,
      recentTransactions: [1, 2, 3, 4, 5, 6, 7],
      failedOtpAttempts: 1,
      paymentMethod: "UnknownWallet",
    },
  ];

  // Apply fraud detection dynamically
  const updatedTransactions = transactions.map(tx => detectFraud(tx));


  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-2xl my-10 font-semibold">
        Transaction-Fraud Dashboard
      </h2>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead className="bg-green-500 text-white">
            <tr>
              <th>#</th>
              <th>ID</th>
              <th>User</th>
              <th>Email</th>
              <th>Amount</th>
              <th>Risk Score</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {updatedTransactions.map((transaction, idx) => (
              <tr key={transaction.id}>
                <th>{idx + 1}</th>
                <td>{transaction.id}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={transaction.image} alt={transaction.user} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{transaction.user}</div>
                      <div className="text-[12px] opacity-80">
                        {transaction.country}
                      </div>
                      <div className="text-[12px] opacity-80">
                        {transaction.location}
                      </div>
                    </div>
                  </div>
                </td>
                <td>{transaction.email}</td>
                <td>${transaction.amount}</td>
                <td>{transaction.risk}</td>
                <th>
                  <div
                    className="tooltip tooltip-bottom"
                    data-tip={
                      transaction.fraudCategories.length > 0
                        ? transaction.fraudCategories.join(", ")
                        : "No Fraud"
                    }
                  >
                    <button
                      className={`btn btn-ghost btn-xs ${
                        transaction.status === "Fraud"
                          ? "bg-red-400 text-white"
                          : "bg-green-400"
                      }`}
                    >
                      {transaction.status}
                    </button>
                  </div>
                </th>
                <td>
                  <div className="flex justify-start items-center gap-3 whitespace-nowrap">
                    <div
                      className="relative overflow-visible tooltip tooltip-bottom"
                      data-tip="View"
                    >
                      <button
                        onClick={() => {
                          setSelectedTransaction(transaction);
                          setModalType("view");
                        }}
                        className="btn btn-outline btn-square text-blue-400 hover:bg-blue-400 hover:text-black"
                      >
                        <GrView className="text-lg" />
                      </button>
                    </div>

                    <div
                      className="relative overflow-visible tooltip tooltip-bottom"
                      data-tip="Edit"
                    >
                      <button
                        onClick={() => {
                          setSelectedTransaction(transaction);
                          setModalType("edit");
                        }}
                        className="btn btn-outline btn-square text-green-500 hover:bg-green-500 hover:text-black"
                      >
                        <LiaEditSolid className="text-lg" />
                      </button>
                    </div>

                    <div
                      className="relative overflow-visible tooltip tooltip-bottom"
                      data-tip="Add"
                    >
                      <button
                        onClick={() => {
                          setModalType("add");
                        }}
                        className="btn btn-outline btn-square text-yellow-500 hover:bg-yellow-500 hover:text-black"
                      >
                        <MdOutlineAddToDrive className="text-lg" />
                      </button>
                    </div>

                    <div
                      className="relative overflow-visible tooltip tooltip-bottom"
                      data-tip="Delete"
                    >
                      <button className="btn btn-outline btn-square text-[#f87171] hover:bg-[#f87171] hover:text-black">
                        <IoTrashOutline className="text-lg" />
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* View Modal */}
      {modalType === "view" && selectedTransaction && (
        <ViewModal
          transaction={selectedTransaction}
          onClose={() => {
            setSelectedTransaction(null);
            setModalType(null);
          }}
        />
      )}

      {/* Edit Modal */}
      {modalType === "edit" && selectedTransaction && (
        <EditModal
          transaction={selectedTransaction}
          onClose={() => {
            setSelectedTransaction(null);
            setModalType(null);
          }}
        />
      )}

      {/* Add Modal */}
      {modalType === "add" && <AddModal onClose={() => setModalType(null)} />}
    </div>
  );
};

export default TransactionFraudDashboard;
