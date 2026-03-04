import React from "react";
import { useState } from "react";
import { GrView } from "react-icons/gr";
import { LiaEditSolid } from "react-icons/lia";
import { IoTrashOutline } from "react-icons/io5";
import { MdOutlineAddToDrive } from "react-icons/md";
import ViewModal from "./ViewModal";
import EditModal from "./EditModal";
import AddModal from "./AddModal";

const TransactionFraudDashboard = () => {
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [modalType, setModalType] = useState(null);

  const transactions = [
    {
      id: 101,
      image: "https://avatars.githubusercontent.com/u/218670039?v=4",
      user: "Amina Asha",
      email: "ashaamina91@gmail.com",
      amount: 500,
      location: "Dhaka",
      status: "Normal",
      risk: 20,
      country: "Bangladesh",
    },
    {
      id: 102,
      user: "Abrar Zayad",
      image: "https://avatars.githubusercontent.com/u/88761193?v=4",
      email: "ahmedabrarzayad@gmail.com",
      amount: 2000,
      location: "New Delhi",
      status: "Fraud",
      risk: 50,
      country: "India",
    },
    {
      id: 103,
      user: "Faisal Hossen",
      image: "https://avatars.githubusercontent.com/u/108367521?v=4",
      email: "itsfaisalhossen@gmail.com",
      amount: 2000,
      location: "Beijing",
      status: "Normal",
      risk: 35,
      country: "China",
    },
    {
      id: 104,
      user: "Tahmid Ahmed",
      image: "https://avatars.githubusercontent.com/u/218386621?v=4",
      email: "tahmid7282@gmail.com",
      amount: 2000,
      location: "Tokyo",
      status: "Fraud",
      risk: 85,
      country: "Japan",
    },
    {
      id: 105,
      user: "Hasin Ishrak",
      image: "https://avatars.githubusercontent.com/u/219306826?v=4",
      email: "hasinishrakk@gmail.com",
      amount: 2000,
      location: "Washington, D.C.",
      status: "Fraud",
      risk: 45,
      country: "United States",
    },
    {
      id: 106,
      user: "Mahfuzur Rahaman",
      image: "https://i.ibb.co.com/5xhWzvbQ/mahfuz.png",
      email: "ripon301252@gmail.com",
      amount: 2000,
      location: "London",
      status: "Fraud",
      risk: 85,
      country: "United Kingdom",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-2xl my-10">Transaction-Fraud-Dashboard</h2>

      <div className="overflow-x-auto ">
        <table className="table">
          {/* head */}
          <thead className="bg-green-500">
            <tr>
              <th>#</th>
              <th>ID</th>
              <th>User</th>
              <th>User Email</th>
              <th>Amount</th>
              <th>Risk Score</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {transactions.map((transaction, idx) => (
              <tr key={transaction.id}>
                <th>{idx + 1}</th>
                <th>{transaction.id}</th>

                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={transaction.image}
                          alt="Avatar Tailwind CSS Component"
                        />
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
                <td> ${transaction.amount}</td>
                <td> {transaction.risk}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">
                    {transaction.status}
                  </button>
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
