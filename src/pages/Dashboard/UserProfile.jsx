import { FaPhoneVolume, FaCheckCircle } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { HiUserGroup } from "react-icons/hi";
import { motion } from "framer-motion";
import useAuth from "../../hooks/useAuth";
import Container from "../../components/SharedUi/Container";

const UserProfile = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <p className="text-slate-600 font-semibold">Loading...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex justify-center items-center h-40">
        <p className="text-red-500 font-semibold">No user found</p>
      </div>
    );
  }

  return (
    <div className="my-5 md:my-10">
      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="relative">
            <img
              src={user?.photoURL || "https://i.pravatar.cc/150"}
              alt="profile"
              className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-emerald-500 shadow-md"
            />
            <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
          </div>

          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
              {user?.displayName || "No Name"}
            </h2>
            <p className="text-slate-500 mt-1">{user.email}</p>

            <span className="inline-block mt-3 px-4 py-1 text-sm bg-emerald-100 text-emerald-700 rounded-full font-semibold">
              {user?.role || "User"}
            </span>

            <div className="mt-4">
              <button className="px-5 py-2 bg-emerald-600 text-white rounded-xl hover:bg-emerald-500 transition shadow">
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-emerald-100"></div>

        {/* Info Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Phone */}
          <div className="bg-emerald-50 hover:shadow-lg hover:scale-105 transition transform p-5 rounded-2xl">
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 0.6 }}
                className="bg-white p-3 rounded-full text-emerald-600 shadow"
              >
                <FaPhoneVolume />
              </motion.div>

              <p className="text-slate-700 font-semibold">Phone</p>
            </div>
            <p className="font-bold text-slate-800 text-lg mt-2 ml-12">
              {user?.phone || "Not Provided"}
            </p>
          </div>

          {/* Location */}
          <div className="bg-emerald-50 hover:shadow-lg hover:scale-105 transition transform p-5 rounded-2xl">
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="bg-white p-3 rounded-full text-emerald-600 shadow"
              >
                <IoLocation />
              </motion.div>

              <p className="text-slate-700 font-semibold">Location</p>
            </div>
            <p className="font-bold text-slate-800 text-lg mt-2 ml-12">
              {user?.location || "Not Provided"}
            </p>
          </div>

          {/* Role */}
          <div className="bg-emerald-50 hover:shadow-lg hover:scale-105 transition transform p-5 rounded-2xl">
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
                className="bg-white p-3 rounded-full text-emerald-600 shadow"
              >
                <HiUserGroup />
              </motion.div>

              <p className="text-slate-700 font-semibold">Role</p>
            </div>
            <p className="font-bold text-slate-800 text-lg mt-2 ml-12">
              {user?.role || "User"}
            </p>
          </div>
        </div>

        {/* Account Status */}
        <div className="mt-10">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">
            Account Overview
          </h3>

          <div className="bg-emerald-50 p-5 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-4 hover:shadow-lg transition">
            <p className="text-slate-700 text-sm flex items-center gap-2">
              <FaCheckCircle className="text-emerald-500" />
              Your account is active and secure
            </p>

            <button className="px-4 py-2 text-sm bg-emerald-600 text-white rounded-lg hover:bg-emerald-500 transition">
              Change Password
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default UserProfile;
