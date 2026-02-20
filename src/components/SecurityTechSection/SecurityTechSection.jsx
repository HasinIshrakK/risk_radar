/* eslint-disable no-unused-vars */
// import React from "react";
// import {
//   ShieldCheck,
//   Activity,
//   BrainCircuit,
//   LayoutDashboard,
//   Database,
//   Cpu,
//   Globe,
//   Server,
// } from "lucide-react";
// import Container from "../SharedUi/Container";

// const SecurityTechSection = () => {
//   const securityFeatures = [
//     {
//       title: "End-to-End Encryption",
//       desc: "AES-256 bit protocol",
//       icon: <ShieldCheck className="text-emerald-400" />,
//     },
//     {
//       title: "Real-Time Monitoring",
//       desc: "Live threat detection",
//       icon: <Activity className="text-emerald-400" />,
//     },
//     {
//       title: "AI Risk Engine",
//       desc: "Neural behavioral analysis",
//       icon: <BrainCircuit className="text-emerald-400" />,
//     },
//     {
//       title: "Admin Review",
//       desc: "Centralized governance",
//       icon: <LayoutDashboard className="text-emerald-400" />,
//     },
//   ];

//   const techStack = [
//     {
//       name: "React / Tailwind",
//       category: "Frontend",
//       icon: <Globe size={18} />,
//     },
//     {
//       name: "Node.js / Express",
//       category: "Backend",
//       icon: <Server size={18} />,
//     },
//     {
//       name: "MongoDB / Atlas",
//       category: "Database",
//       icon: <Database size={18} />,
//     },
//     { name: "Python / ML", category: "AI Model", icon: <Cpu size={18} /> },
//   ];

//   return (
//     <section className="text-black">
//       <Container>
//         <div className="flex flex-col lg:flex-row gap-12 items-center">
//           {/* Left Side: Security Features */}
//           <div className="w-full lg:w-1/2 space-y-8">
//             <div>
//               <h2 className="text-softGreen text-emerald-400 font-semibold tracking-widest uppercase text-sm mb-2">
//                 Security Infrastructure
//               </h2>
//               <h3 className="text-4xl font-bold">Hardened Protection Layer</h3>
//               <p className="text-gray-400 mt-4">
//                 Enterprise-grade security protocols ensuring your data remains
//                 private and systems stay resilient.
//               </p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {securityFeatures.map((f, i) => (
//                 <div
//                   key={i}
//                   className="p-5 rounded-2xl bg-green-50 text-black border border-white/10 hover:border-emerald-500/50 transition-all group"
//                 >
//                   <div className="bg-emerald-500/10 p-3 rounded-lg w-fit group-hover:scale-110 transition-transform">
//                     {f.icon}
//                   </div>
//                   <h4 className="mt-4 font-semibold">{f.title}</h4>
//                   <p className="text-sm text-gray-500">{f.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Side: Tech Stack Badges */}
//           <div className="w-full lg:w-1/2 bg-emerald-500/5 border border-emerald-500/20 rounded-3xl p-8 relative overflow-hidden">
//             {/* Background Glow */}
//             <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/20 blur-[100px]" />

//             <h3 className="text-2xl font-bold mb-8 text-center">
//               Technology Stack
//             </h3>

//             <div className="flex flex-col gap-4">
//               {techStack.map((tech, i) => (
//                 <div
//                   key={i}
//                   className="flex items-center justify-between p-4 bg-gray-500/10 backdrop-blur-md border border-white/5 rounded-xl hover:translate-x-2 transition-transform"
//                 >
//                   <div className="flex items-center gap-4">
//                     <div className="text-emerald-400">{tech.icon}</div>
//                     <div>
//                       <p className="text-xs text-emerald-500 font-mono uppercase tracking-tighter">
//                         {tech.category}
//                       </p>
//                       <p className="font-medium text-lg">{tech.name}</p>
//                     </div>
//                   </div>
//                   <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
//                 </div>
//               ))}
//             </div>

//             <div className="mt-8 p-4 bg-emerald-500 text-black rounded-xl text-center font-bold text-sm uppercase tracking-widest">
//               System Health: Optimal 100%
//             </div>
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// };

// export default SecurityTechSection;

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
    <section className="bg[#f4fcf8] relative overflow-hidden">
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
                <span className="text-emerald-600">Modern FinTech</span>
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
            <div className="bg-white/40 backdrop-blur-2xl rounded-[3rem] p-1 border border-white shadow-2xl">
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
