/* eslint-disable no-unused-vars */
import { FaPhoneVolume, FaCheckCircle, FaEdit } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { HiUserGroup } from "react-icons/hi";
import { motion } from "framer-motion";
import useAuth from "../../hooks/useAuth";

const UserProfile = () => {
  const { user, loading } = useAuth();

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="w-10 h-10 border-4 border-emerald-100 border-t-emerald-600 rounded-full"
        />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="text-emerald-900 text-center mt-10 font-medium">
        No user found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-emerald-50/30 p-4 md:p-12 text-slate-800">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto space-y-6"
      >
        {/* Header Profile Card */}
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-4xl p-8 md:p-10 shadow-sm border border-emerald-100 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden"
        >
          <div className="relative group">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={user?.photoURL || "https://i.pravatar.cc"}
              alt="profile"
              className="w-32 h-32 md:w-40 md:h-40 rounded-3xl object-cover border-4 border-emerald-50 shadow-md transition-all"
            />
            <span className="absolute -bottom-2 -right-2 w-6 h-6 bg-emerald-500 border-4 border-white rounded-full shadow-sm"></span>
          </div>

          <div className="text-center md:text-left flex-1">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              {user?.displayName || "Guest User"}
            </h2>
            <p className="text-emerald-600 font-semibold text-lg">
              {user.email}
            </p>

            <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-3">
              <span className="px-4 py-1 text-xs font-bold bg-emerald-100 text-emerald-700 rounded-full border border-emerald-200 uppercase tracking-widest">
                {user.role || "Member"}
              </span>
              <motion.button
                whileHover={{ x: 3 }}
                className="flex items-center gap-2 text-emerald-600 font-bold text-sm hover:underline cursor-pointer"
              >
                <FaEdit /> Edit Account
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Info Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              label: "Phone",
              value: user.phone || "Not Set",
              icon: <FaPhoneVolume />,
              color: "orange",
            },
            {
              label: "Location",
              value: user.location || "Earth",
              icon: <IoLocation />,
              color: "emerald",
            },
            {
              label: "Access Level",
              value: user.role || "Standard",
              icon: <HiUserGroup />,
              color: "blue",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.05)",
              }}
              className="bg-white p-8 rounded-4xl border border-emerald-100 shadow-sm transition-all group"
            >
              <div className="flex items-center gap-4 mb-4">
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    delay: index * 0.5,
                  }}
                  className={`p-3 rounded-2xl bg-emerald-50 text-emerald-600 text-xl`}
                >
                  {item.icon}
                </motion.div>
                <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">
                  {item.label}
                </p>
              </div>
              <p className="font-bold text-slate-900 text-xl truncate">
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Security Summary Footer */}
        <motion.div
          variants={itemVariants}
          className="bg-green-600 rounded-4xl p-8 flex flex-col md:flex-row justify-between items-center gap-6 shadow-xl shadow-emerald-900/10"
        >
          <div className="flex items-center gap-5 text-white">
            <div className="bg-emerald-500/30 p-4 rounded-2xl">
              <FaCheckCircle className="text-3xl text-emerald-200" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Account is Secure</h3>
              <p className="text-emerald-100/80 text-sm">
                Verified member since 2024. Standard security active.
              </p>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full md:w-auto px-8 py-4 bg-white text-emerald-700 font-extrabold rounded-2xl transition shadow-lg shadow-black/5 cursor-pointer"
          >
            Security Settings
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default UserProfile;
