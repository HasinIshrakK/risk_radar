/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaArrowDown } from "react-icons/fa6";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import Container from "../../components/SharedUi/Container";

const steps = [
  {
    title: "User Transaction",
    desc: "A transaction is initiated through the payment gateway, triggering the security layer.",
    icon: "💳",
  },
  {
    title: "Real-Time Risk Engine",
    desc: "The Weighted Scoring Engine evaluates factors like velocity and location jump simultaneously.",
    icon: "⚙️",
  },
  {
    title: "Redis Pulse Check",
    desc: "Sub-millisecond behavioral windowing checks against in-memory data patterns.",
    icon: "⚡",
  },
  {
    title: "Automated Decision",
    desc: "The system issues an instant Go/No-Go signal: Allow, Flag, or Immediate Block.",
    icon: "🚦",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-[#f0f9f4] py-12 relative overflow-hidden">
      <div className="absolute top-0 -left-20 w-[500px] h-[500px] bg-emerald-200/40 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 -right-20 w-[500px] h-[500px] bg-green-200/40 blur-[100px] rounded-full"></div>

      <div className="mx-auto relative z-10">
        <Container>
          {/* Header - Updated colors for light mode */}
          <SectionHeader
            subtitle="Ultra-Low Latency Protocol"
            title={
              <span className="text-slate-900">
                How <span className="text-emerald-600">RiskRadar</span> <br />
                Stops Fraud in{" "}
                <span className="underline decoration-emerald-400/50 italic">
                  Real-Time
                </span>
              </span>
            }
            titlePera="Bridging the gap between detection and prevention with memory-speed analytics."
          />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="h-full relative overflow-hidden p-8 rounded-[2.5rem] border border-white bg-white/40 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(16,185,129,0.05)] transition-all duration-500 group-hover:bg-white/60 group-hover:border-emerald-300 group-hover:shadow-[0_20px_40px_rgba(16,185,129,0.1)]"
                >
                  {/* Internal Light Gradient Glow */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-100 blur-[40px] group-hover:bg-emerald-200 transition-all duration-500"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-10">
                      <div className="text-4xl bg-white w-16 h-16 flex items-center justify-center rounded-2xl border border-emerald-100 text-white shadow-sm group-hover:scale-110 group-hover:border-emerald-400 transition-all duration-500">
                        {step.icon}
                      </div>
                      {/* Subtle Numbering */}
                      <span className="text-5xl font-black text-emerald-900/5 uppercase select-none">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-emerald-700 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* Bottom Decorative Accent */}
                  <div className="absolute bottom-0 left-0 h-1.5 w-0 bg-gradient-to-r from-emerald-400 to-green-300 transition-all duration-700 group-hover:w-full"></div>
                </motion.div>

                {/* Desktop Connector Arrows (Light Styled) */}
                {index !== steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-6 z-20 text-emerald-300 translate-y-[-50%] opacity-50 group-hover:opacity-100 group-hover:translate-x-2 transition-all">
                    <FaArrowRight size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default HowItWorks;
