/* eslint-disable react-hooks/set-state-in-effect */
import axios from "axios";
import React, { useEffect, useState } from "react";
import Container from "../../../components/SharedUi/Container";

const AllUsers = () => {
  //   const dummyUsers = [
  //   { _id: "1", name: "Amina Asha", email: "amina@example.com", role: "admin" },
  //   { _id: "2", name: "Rahim Uddin", email: "rahim@gmail.com", role: "user" },
  //   { _id: "3", name: "Karim Hasan", email: "karim@gmail.com", role: "user" },
  // ];

  // const [users,setUsers] = useState(dummyUsers);

  //   for make it dynamic
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  //   get user from backend

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3000/api/users")
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  // drop down role change

  const handleRoleChange = (id, newRole) => {
    const update = users.map((user) =>
      user._id === id ? { ...user, role: newRole } : user,
    );
    setUsers(update);
  };

  // update role

  const handleUpdateRole = async (id, role) => {
    console.log("updatiing:", id, role);

    try {
      await axios.patch(`http://localhost:3000/api/users/${id}`, {
        role: role,
      });
      alert("role update successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="my-5 md:my-10">
      <Container>
        <h2 className="text-2xl font-bold mb-6 text-emerald-800 border-b-2 border-emerald-100 pb-2">
          All Users
        </h2>
        {loading && (
          <p className="text-emerald-600 font-medium animate-pulse mb-4">
            Loading users...
          </p>
        )}
        <div className="overflow-x-auto shadow-lg rounded-xl border border-emerald-100">
          <table className="table w-full bg-white border-collapse">
            <thead>
              <tr className="bg-emerald-600 text-white text-center uppercase text-sm tracking-wide">
                <th className="py-4 px-4 font-semibold">Name</th>
                <th className="py-4 px-4 font-semibold">Email</th>
                <th className="py-4 px-4 font-semibold">Current Role</th>
                <th className="py-4 px-4 font-semibold">Assign Role</th>
                <th className="py-4 px-4 font-semibold">Action</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr
                  key={user._id}
                  className="text-center border-b border-emerald-100 hover:bg-emerald-50 transition-colors duration-200"
                >
                  <td className="py-3 px-4 text-gray-800 font-medium">
                    {user.name}
                  </td>
                  <td className="py-3 px-4 text-gray-600">{user.email}</td>

                  <td className="py-3 px-4 capitalize font-bold text-emerald-700">
                    {user.role}
                  </td>

                  <td className="py-3 px-4">
                    <select
                      value={user.role}
                      onChange={(e) =>
                        handleRoleChange(user._id, e.target.value)
                      }
                      className="border border-emerald-300 text-emerald-800 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 px-3 py-1.5 rounded-lg bg-white shadow-sm outline-none transition-all cursor-pointer"
                    >
                      <option value="user">User</option>
                      <option value="moderator">Moderator</option>
                      <option value="admin">Admin</option>
                    </select>
                  </td>

                  <td className="py-3 px-4">
                    <button
                      onClick={() => handleUpdateRole(user._id, user.role)}
                      className="bg-emerald-600 text-white px-5 py-2 rounded-lg hover:bg-emerald-700 active:bg-emerald-800 shadow-sm transition-all font-semibold text-sm"
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
};

export default AllUsers;
