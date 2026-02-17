import React from "react";
import {
  ShieldCheck,
  Activity,
  BrainCircuit,
  LayoutDashboard,
  Database,
  Cpu,
  Globe,
  Server,
} from "lucide-react";

const SecurityTechSection = () => {
  const securityFeatures = [
    {
      title: "End-to-End Encryption",
      desc: "AES-256 bit protocol",
      icon: <ShieldCheck className="text-emerald-400" />,
    },
    {
      title: "Real-Time Monitoring",
      desc: "Live threat detection",
      icon: <Activity className="text-emerald-400" />,
    },
    {
      title: "AI Risk Engine",
      desc: "Neural behavioral analysis",
      icon: <BrainCircuit className="text-emerald-400" />,
    },
    {
      title: "Admin Review",
      desc: "Centralized governance",
      icon: <LayoutDashboard className="text-emerald-400" />,
    },
  ];

  const techStack = [
    {
      name: "React / Tailwind",
      category: "Frontend",
      icon: <Globe size={18} />,
    },
    {
      name: "Node.js / Express",
      category: "Backend",
      icon: <Server size={18} />,
    },
    {
      name: "MongoDB / Atlas",
      category: "Database",
      icon: <Database size={18} />,
    },
    { name: "Python / ML", category: "AI Model", icon: <Cpu size={18} /> },
  ];

  return (
    <section className="text-black py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Side: Security Features */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <h2 className="text-softGreen text-emerald-400 font-semibold tracking-widest uppercase text-sm mb-2">
                Security Infrastructure
              </h2>
              <h3 className="text-4xl font-bold">Hardened Protection Layer</h3>
              <p className="text-gray-400 mt-4">
                Enterprise-grade security protocols ensuring your data remains
                private and systems stay resilient.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {securityFeatures.map((f, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-green-50 text-black border border-white/10 hover:border-emerald-500/50 transition-all group"
                >
                  <div className="bg-emerald-500/10 p-3 rounded-lg w-fit group-hover:scale-110 transition-transform">
                    {f.icon}
                  </div>
                  <h4 className="mt-4 font-semibold">{f.title}</h4>
                  <p className="text-sm text-gray-500">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Tech Stack Badges */}
          <div className="w-full lg:w-1/2 bg-emerald-500/5 border border-emerald-500/20 rounded-3xl p-8 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/20 blur-[100px]" />

            <h3 className="text-2xl font-bold mb-8 text-center">
              Technology Stack
            </h3>

            <div className="flex flex-col gap-4">
              {techStack.map((tech, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 bg-gray-500/10 backdrop-blur-md border border-white/5 rounded-xl hover:translate-x-2 transition-transform"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-emerald-400">{tech.icon}</div>
                    <div>
                      <p className="text-xs text-emerald-500 font-mono uppercase tracking-tighter">
                        {tech.category}
                      </p>
                      <p className="font-medium text-lg">{tech.name}</p>
                    </div>
                  </div>
                  <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-emerald-500 text-black rounded-xl text-center font-bold text-sm uppercase tracking-widest">
              System Health: Optimal 100%
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityTechSection;
