/* eslint-disable no-unused-vars */
import React from "react";
import {
  ShieldCheck,
  Activity,
  Zap,
  LayoutDashboard,
  Database,
  Cpu,
  Globe,
  SearchCheck,
  Fingerprint,
} from "lucide-react";
import Container from "../SharedUi/Container";
import { motion } from "framer-motion";

const SecurityTechSection = () => {
  const securityFeatures = [
    {
      title: "Weighted Risk Engine",
      desc: "Scores transactions based on complex behavioral triggers [SRS 6.1].",
      icon: <Fingerprint className="text-emerald-600" />,
    },
    {
      title: "Velocity Tracking",
      desc: "Detects rapid bursts and transaction anomalies via Redis [SRS 6.2].",
      icon: <Activity className="text-emerald-600" />,
    },
    {
      title: "Impossible Travel",
      desc: "Geographic consistency check for location jump detection [SRS 6.3].",
      icon: <Globe className="text-emerald-600" />,
    },
    {
      title: "Admin Governance",
      desc: "Real-time WebSocket feed for instant risk overrides [SRS 6.4].",
      icon: <LayoutDashboard className="text-emerald-600" />,
    },
  ];

  const techStack = [
    {
      name: "React / Tailwind",
      category: "Frontend Layer",
      icon: <Globe size={18} />,
    },
    {
      name: "Redis In-Memory",
      category: "Latency Optimization",
      icon: <Zap size={18} />,
    },
    {
      name: "Node.js / Express",
      category: "Decision Logic",
      icon: <Cpu size={18} />,
    },
    {
      name: "MongoDB / Atlas",
      category: "Data Persistence",
      icon: <Database size={18} />,
    },
  ];

  return (
    <section className="relative py-12 overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Side: Logic & Features */}
          <div className="w-full lg:w1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <span className="text-emerald-600 font-bold tracking-[0.2em] uppercase text-xs mb-3 block">
                Enterprise Infrastructure
              </span>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1]">
                Smart Security for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-500">
                  Modern FinTech
                </span>
              </h3>
              <p className="text-slate-500 mt-6 text-lg leading-relaxed">
                RiskRadar utilizes{" "}
                <span className="text-slate-900 font-semibold">
                  Real-Time Behavioral Windowing
                </span>{" "}
                to make decisions in under 150ms—faster than a human can blink.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {securityFeatures.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-[2rem] bg-white/60 backdrop-blur-md border border-white shadow-sm hover:shadow-xl hover:bg-white transition-all group"
                >
                  <div className="bg-emerald-100 p-3 rounded-xl w-fit group-hover:bg-emerald-600 group-hover:text-white transition-all">
                    {React.cloneElement(f.icon, {
                      className: "group-hover:text-white transition-colors",
                    })}
                  </div>
                  <h4 className="mt-4 font-bold text-slate-800">{f.title}</h4>
                  <p className="text-sm text-slate-500 mt-1">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Tech Glass Card */}
          <div className="w-full lg:w5/12 relative">
            <div className="bg-white/40 backdrop-blur-2xl rounded-[3rem] p-1 border border-white shadow-xl">
              <div className="bg-white/80 rounded-[2.8rem] p-8 md:p-10">
                <div className="flex items-center justify-between mb-10">
                  <h4 className="text-xl font-black text-slate-900 uppercase tracking-tighter">
                    Technology Stack
                  </h4>
                  <div className="flex items-center gap-2 bg-emerald-100 px-3 py-1 rounded-full">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-bold text-emerald-700 uppercase">
                      Live Engine
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  {techStack.map((tech, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 10 }}
                      className="flex items-center justify-between p-4 rounded-2xl bg-white border border-emerald-50 hover:border-emerald-200 shadow-sm transition-all group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="text-emerald-600 p-2 bg-emerald-50 rounded-lg group-hover:scale-110 transition-transform">
                          {tech.icon}
                        </div>
                        <div>
                          <p className="text-[9px] font-bold text-emerald-500 uppercase tracking-widest leading-none mb-1">
                            {tech.category}
                          </p>
                          <p className="font-bold text-slate-800">
                            {tech.name}
                          </p>
                        </div>
                      </div>
                      <ShieldCheck
                        size={16}
                        className="text-emerald-200 group-hover:text-emerald-500 transition-colors"
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Speed Metric */}
                <div className="mt-8 bg-emerald-600 rounded-3xl p-6 text-white relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:scale-125 transition-transform">
                    <Zap size={60} />
                  </div>
                  <p className="text-emerald-100 text-xs font-bold uppercase tracking-[0.2em] mb-1">
                    Processing Speed
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black">150</span>
                    <span className="text-xl font-bold opacity-80">ms</span>
                  </div>
                  <p className="text-[10px] mt-3 text-emerald-100/80 font-medium italic">
                    * Ultra-low latency decision making loop
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SecurityTechSection;
