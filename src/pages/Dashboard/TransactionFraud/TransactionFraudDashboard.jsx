/* eslint-disable react-hooks/set-state-in-effect */
import React, { useEffect, useState } from "react";
import { GrView } from "react-icons/gr";
import { LiaEditSolid } from "react-icons/lia";
import { IoTrashOutline } from "react-icons/io5";
import { MdOutlineAddToDrive } from "react-icons/md";
import ViewModal from "./ViewModal";
import EditModal from "./EditModal";
import AddModal from "./AddModal";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import useAxios from "../../../hooks/useAxios";


//  Dynamic configuration for fraud detection
const fraudConfig = {
  highAmount: 10000,
  allowedCities: ["Dhaka", "New Delhi", "Beijing"],
  blacklistedEmails: ["fraudster1@gmail.com", "scammer@gmail.com"],
  patternedAmounts: [10000, 20000, 50000],
  otpFailLimit: 2,
  newAccountDays: 30,
  suspiciousPaymentMethods: ["UnknownWallet"],
  riskPerCategory: 12.5,
};

// Dynamic fraud detection function
function detectFraud(tx, config = fraudConfig) {
  const fraudCategories = [];

  if (tx.amount > config.highAmount) fraudCategories.push("High Amount");

  if (tx.recentTransactions && tx.recentTransactions.length > 5)
    fraudCategories.push("Rapid Transactions");

  if (!config.allowedCities.includes(tx.location))
    fraudCategories.push("Location Mismatch");

  if (tx.accountAgeDays && tx.accountAgeDays < config.newAccountDays)
    fraudCategories.push("New Account");

  if (config.blacklistedEmails.includes(tx.email))
    fraudCategories.push("Blacklisted Recipient");

  if (tx.failedOtpAttempts && tx.failedOtpAttempts > config.otpFailLimit)
    fraudCategories.push("Failed Attempts");

  if (config.patternedAmounts.includes(tx.amount))
    fraudCategories.push("Patterned Amount");

  if (
    tx.paymentMethod &&
    config.suspiciousPaymentMethods.includes(tx.paymentMethod)
  )
    fraudCategories.push("Suspicious Payment Method");

  tx.fraudCategories = fraudCategories;
  tx.risk = fraudCategories.length * config.riskPerCategory;

  if (tx.risk >= 50) tx.status = "Blocked";
  else if (tx.risk >= 25) tx.status = "Fraud";
  else tx.status = "Normal";

  return tx;
}



const TransactionFraudDashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [modalType, setModalType] = useState(null);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const limit = 10;

  const axiosInstance = useAxios();

 useEffect(() => {
  axiosInstance.get("/api/users-transaction").then((res) => {
    console.log(res.data); // debug
    setTransactions(res.data?.data || res.data || []);
    setLoading(false);
  });
}, []);

  useEffect(() => {
    setPage(1);
  }, [filter, searchTerm]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-40">
        <span className="loading loading-spinner loading-lg text-green-500"></span>
      </div>
    );
  // Apply fraud detection dynamically
  // const updatedTransactions = transactions.map((tx) => detectFraud(tx));
  // const updatedTransactions = transactions.map((tx) => detectFraud({ ...tx }));

  const updatedTransactions = Array.isArray(transactions)
  ? transactions.map((tx) => detectFraud({ ...tx }))
  : [];

  // Filter + Search
  let filteredUsers = updatedTransactions
    .filter((tx) => {
      if (filter === "blocked") return tx.status === "Blocked";
      if (filter === "fraud") return tx.status === "Fraud";
      if (filter === "normal") return tx.status === "Normal";
      return true;
    })
    .filter(
      (tx) =>
        tx.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tx.email.toLowerCase().includes(searchTerm.toLowerCase()),
    );

  const totalPages = Math.ceil(filteredUsers.length / limit);

  const paginatedUsers = filteredUsers.slice((page - 1) * limit, page * limit);

  // PDF export
  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text("Transaction Fraud Report", 14, 15);

    const tableColumn = ["#", "User", "Email", "Amount", "Status", "Risk"];
    const tableRows = filteredUsers.map((tx, index) => [
      index + 1,
      tx.user,
      tx.email,
      `$${tx.amount}`,
      tx.status,
      `${tx.risk}%`,
    ]);

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 20,
    });

    doc.save("TransactionReport.pdf");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <h2 className="text-2xl md:text-3xl font-bold text-center my-8 text-gray-800">
        Transaction-Fraud Dashboard
      </h2>

      {/* Search + PDF */}
      <div className="bg-white shadow-md rounded-xl p-4 mb-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <input
          type="text"
          placeholder="Search by user or email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input input-bordered w-full md:w-72 focus:outline-none focus:ring-2 focus:ring-[#00bf83]"
        />
        <button
          onClick={exportPDF}
          className="btn border-[#00bf83] text-[#00bf83] hover:bg-[#00bf83] hover:text-white transition"
        >
          Export PDF
        </button>
      </div>

      {/* Filter Buttons */}
      <div className="flex md:flex-row flex-col justify-between gap-3 mb-6">
        <button
          className={`btn btn-outline ${
            filter === "all"
              ? "bg-gray-500 text-white"
              : "text-gray-500 hover:bg-gray-500 hover:text-white"
          }`}
          onClick={() => {
            setFilter("all");
            // setPage(1);
          }}
        >
          Show All Users
        </button>
        <button
          className={`btn btn-outline ${
            filter === "normal"
              ? "bg-green-500 text-white"
              : "text-green-500 hover:bg-green-500 hover:text-white"
          }`}
          onClick={() => {
            setFilter("normal");
            // setPage(1);
          }}
        >
          Show Normal Users
        </button>
        <button
          className={`btn btn-outline ${
            filter === "fraud"
              ? "bg-yellow-500 text-white"
              : "text-yellow-500 hover:bg-yellow-500 hover:text-white"
          }`}
          onClick={() => {
            setFilter("fraud");
            // setPage(1);
          }}
        >
          Show Fraud Users
        </button>
        <button
          className={`btn btn-outline ${
            filter === "blocked" ? "bg-red-500 text-white" : "text-red-500 hover:bg-red-500 hover:text-white"
          }`}
          onClick={() => {
            setFilter("blocked");
            // setPage(1);
          }}
        >
          Show Blocked Users
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
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
            {paginatedUsers.length === 0 ? (
              <tr>
                <td colSpan="8" className="text-center py-6 text-gray-400">
                  No users found
                </td>
              </tr>
            ) : (
              paginatedUsers.map((transaction, idx) => (
                <tr
                  key={transaction._id}
                  className="hover:bg-gray-50 transition"
                >
                  <th>{idx + 1}</th>
                  <td>{transaction.id}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-10 w-10 md:h-12 md:w-12">
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
                  <td>{transaction.risk} %</td>
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
                        className={`btn btn-ghost btn-xs ${transaction.status === "Blocked"
                          ? "bg-red-100 text-red-600"
                          : transaction.status === "Fraud"
                            ? "bg-yellow-100 text-yellow-600"
                            : transaction.status === "Normal"
                              ? "bg-green-100 text-green-600"
                              : "Data Not Match"
                          }`}
                      >
                        {transaction.status}
                      </button>
                    </div>
                  </th>
                  <td>
                    <div className="flex justify-start items-center gap-3 whitespace-nowrap">
                      <button
                        onClick={() => {
                          setSelectedTransaction(transaction);
                          setModalType("view");
                        }}
                        className="btn btn-outline btn-square text-blue-400 hover:bg-blue-400 hover:text-white "
                      >
                        <GrView className="text-lg" />
                      </button>
                      <button
                        onClick={() => {
                          setSelectedTransaction(transaction);
                          setModalType("edit");
                        }}
                        className="btn btn-outline btn-square text-green-500 hover:bg-green-500 hover:text-white"
                      >
                        <LiaEditSolid className="text-lg" />
                      </button>
                      <button
                        onClick={() => setModalType("add")}
                        className="btn btn-outline btn-square text-yellow-500 hover:bg-yellow-500 hover:text-white"
                      >
                        <MdOutlineAddToDrive className="text-lg" />
                      </button>
                      <button className="btn btn-outline btn-square text-[#f87171] hover:bg-[#f87171] hover:text-white">
                        <IoTrashOutline className="text-lg" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          className="btn btn-outline hover:bg-[#00bf83] hover:text-white"
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
        >
          Previous
        </button>
        <span className="flex items-center px-2">
          {totalPages === 0 ? 0 : page} / {totalPages}
        </span>
        <button
          className="btn btn-outline hover:bg-[#00bf83] hover:text-white"
          disabled={page === totalPages || totalPages === 0}
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </button>
      </div>

      {/* Modals */}
      {modalType === "view" && selectedTransaction && (
        <ViewModal
          transaction={selectedTransaction}
          onClose={() => {
            setSelectedTransaction(null);
            setModalType(null);
          }}
        />
      )}
      {modalType === "edit" && selectedTransaction && (
        <EditModal
          transaction={selectedTransaction}
          onClose={() => {
            setSelectedTransaction(null);
            setModalType(null);
          }}
        />
      )}
      {modalType === "add" && <AddModal onClose={() => setModalType(null)} />}
    </div>
  );
};

export default TransactionFraudDashboard;
