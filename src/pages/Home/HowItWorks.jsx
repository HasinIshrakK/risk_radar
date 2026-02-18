import React from "react";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowDownLong } from "react-icons/fa6";

const steps = [
  {
    title: "User Transaction",
    desc: "User initiates a transaction from the system",
    icon: "💳",
  },
  {
    title: "Risk Engine",
    desc: "System analyzes the transaction data",
    icon: "⚙️",
  },
  {
    title: "Redis Real-Time Check",
    desc: "Check transaction instantly using Redis",
    icon: "⚡",
  },
  {
    title: "Allow / Flag / Block",
    desc: "System decides to allow, flag, or block the transaction",
    icon: "🚦",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-green-900 text-white py-16 px-4 md:px-10 mt-2">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
        How It Works
      </h2>

      {/* Steps Container */}
      <div className="flex flex-col lg:flex-row lg:justify-between gap-12 relative">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center lg:items-start lg:flex-1"
          >
            {/* Step Box */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-green-950/70 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-green-800 hover:border-green-700 transition w-full h-full flex flex-col"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 bg-green-700 text-white w-10 h-10 flex items-center justify-center rounded-full font-bold shadow-lg">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="text-4xl mb-4">{step.icon}</div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed flex-1">
                {step.desc}
              </p>
            </motion.div>

            {/* Arrow */}
            {index !== steps.length - 1 && (
              <>
                {/* Horizontal arrow for lg screens */}
                <div className="hidden lg:block absolute -right-6.25 top-1/2 transform -translate-y-1/2 text-2xl text-white bg-green-700 p-1  px-3 rounded-br-full rounded-tl-full">
                  <FaArrowRightLong className=""/>
                </div>

                {/* Vertical arrow for mobile */}
                <div className="block lg:hidden absolute -bottom-6.25 left-1/2 transform -translate-x-1/2 text-2xl text-white bg-green-700 p-1 px-3 rounded-bl-selector  rounded-tr-selector ">
                  <FaArrowDownLong />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
