import { FaPhoneVolume, FaCheckCircle } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { HiUserGroup } from "react-icons/hi";
import { motion } from "framer-motion";
import useAuth from "../../hooks/useAuth";

const UserProfile = () => {
  const { user, loading } = useAuth();
  if (loading) {
    return <div className="text-white text-center mt-10">Loading...</div>;
  }

  if (!user) {
    return <div className="text-white text-center mt-10">No user found</div>;
  }

  return (
    <div className="min-h-screen bg-green-900 p-4 md:p-8">
      <div className="max-w-5xl mx-auto bg-green-800 shadow-xl rounded-3xl p-6 md:p-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="relative">
            <img
              src={user?.photoURL || "https://i.pravatar.cc/150"}
              alt="profile"
              className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-blue-500 shadow-md"
            />
            <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
          </div>

          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              {user?.displayName || "No Name"}
            </h2>
            <p className="text-white mt-1">{user.email}</p>

            <span className="inline-block mt-3 px-4 py-1 text-sm bg-green-900 text-white rounded-full">
              {user.role}
            </span>

            <div className="mt-4">
              <button className="px-5 py-2 bg-green-700 text-white rounded-xl hover:bg-green-600 transition shadow cursor-pointer">
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-green-700"></div>

        {/* Info Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Phone */}
          <div className="bg-green-700 hover:shadow-lg hover:scale-105 transition transform p-5 rounded-2xl">
            <div className="flex items-center gap-3">
              <motion.div className="relative">
                {/* Outer Ripple */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-white opacity-30 "
                  animate={{ scale: [1, 1.9], opacity: [0.5, 0] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                />

                {/* Icon */}
                <motion.div
                  animate={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 0.6,
                    ease: "easeInOut",
                  }}
                  className="bg-white/20 p-3 rounded-full text-orange-900 shadow-lg relative z-10 flex items-center justify-center"
                >
                  <FaPhoneVolume className="text-lg" />
                </motion.div>
              </motion.div>

              <p className="text-white font-semibold">Phone</p>
            </div>
            <p className="font-semibold text-white text-xl mt-2 ml-14">
              {user.phone}
            </p>
          </div>

          {/* Location */}
          <div className="bg-green-700 hover:shadow-lg hover:scale-105 transition transform p-5 rounded-2xl">
            <div className="flex items-center gap-3">
              <motion.div className="relative flex items-center justify-center w-12 h-12">
                <motion.div
                  className="absolute inset-0 rounded-full bg-white opacity-30"
                  animate={{ scale: [1, 1.8], opacity: [0.5, 0] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                />

                <motion.div
                  animate={{ scale: [1, 1.6, 1] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1,
                    ease: "easeInOut",
                  }}
                  className="bg-white/20 p-2 rounded-full text-green-950 shadow relative z-10 flex items-center justify-center"
                >
                  <IoLocation className="text-sm" />
                </motion.div>
              </motion.div>

              <p className="text-white font-semibold">Location</p>
            </div>
            <p className="font-semibold text-white text-xl mt-2 ml-14">
              {user.location}
            </p>
          </div>

          {/* Role */}
          <div className="bg-green-700 hover:shadow-lg hover:scale-105 transition transform p-5 rounded-2xl">
            <div className="flex items-center gap-3">
              <motion.div className="relative flex items-center justify-center w-12 h-12">
                <motion.div
                  className="absolute inset-0 rounded-full bg-white opacity-30"
                  animate={{ scale: [1, 1.8], opacity: [0.5, 0] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                />

                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    boxShadow: [
                      "0px 0px 0px #fff",
                      "0px 0px 12px #fff",
                      "0px 0px 0px #fff",
                    ],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                  className="bg-white/20 p-2 rounded-full flex items-center justify-center"
                >
                  <HiUserGroup className="text-sm text-blue-900" />
                </motion.div>
              </motion.div>

              <p className="text-white font-semibold">Role</p>
            </div>
            <p className="font-semibold text-white text-xl mt-2 ml-14">
              {user.role}
            </p>
          </div>
        </div>

        {/* Account Status */}
        <div className="mt-10">
          <h3 className="text-lg font-semibold text-white mb-4">
            Account Overview
          </h3>

          <div className="bg-green-900 p-5 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-4 hover:shadow-lg transition">
            <p className="text-white text-sm flex lg:items-center gap-1">
              <FaCheckCircle className="text-green-400 lg:mt-0 mt-1" /> Your
              account is active and secure
            </p>

            <button className="px-4 py-2 text-sm bg-green-700 text-white rounded-lg hover:bg-green-600 transition cursor-pointer">
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
