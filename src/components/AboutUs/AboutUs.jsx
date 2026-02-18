import React from 'react'
import { Cpu, Zap, Fingerprint, BarChart3, Globe, ShieldCheck } from 'lucide-react'

const AboutUs = () => {
  const features = [
    {
      title: "Neural Network Analysis",
      desc: "Our AI brain processes millions of data points to spot hidden fraud connections.",
      icon: <Cpu size={24} />,
      gradient: "from-emerald-500 to-green-600"
    },
    {
      title: "Instant Velocity Check",
      desc: "Flags suspicious transaction bursts in milliseconds with automated cool-down periods.",
      icon: <Zap size={24} />,
      gradient: "from-green-400 to-emerald-500"
    },
    {
      title: "Device Fingerprinting",
      desc: "Unique hardware identification to prevent account takeovers and bot-driven attacks.",
      icon: <Fingerprint size={24} />,
      gradient: "from-emerald-600 to-green-700"
    },
    {
      title: "Adaptive Risk Scoring",
      desc: "Dynamic scoring based on user behavior, location, and past transaction history.",
      icon: <BarChart3 size={24} />,
      gradient: "from-green-500 to-emerald-400"
    }
  ];

  return (
    // ব্যাকগ্রাউন্ডে হালকা গ্রিনিশ টোন দেওয়া হয়েছে
    <section className="py-24 px-6 bg-[#f4faf7] relative overflow-hidden">
      
      {/* Decorative Background Element (একটু গাঢ় গ্রিন শেড) */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-green-100/30 -skew-x-12 translate-x-32 hidden lg:block" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Side: Content */}
        <div className="space-y-8 text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-green-200 text-green-700 text-sm font-bold tracking-wide shadow-sm">
            <Globe size={16} className="animate-spin-slow text-green-500" />
            Global Threat Intelligence
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            Stop Fraud Before It <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
              Affects Your Revenue.
            </span>
          </h2>
          
          <p className="text-slate-600 text-lg leading-relaxed max-w-lg font-medium">
            RiskRadar isn't just a filter; it's a proactive security layer. We combine human intuition with machine learning to build a bulletproof financial ecosystem.
          </p>

          <div className="flex flex-wrap gap-6 pt-4">
             <div className="flex flex-col">
                <span className="text-3xl font-bold text-green-700">99.9%</span>
                <span className="text-sm text-slate-500 font-semibold uppercase tracking-tighter">Detection Accuracy</span>
             </div>
             <div className="w-[1px] h-12 bg-green-200 hidden sm:block" />
             <div className="flex flex-col">
                <span className="text-3xl font-bold text-green-700">&lt;200ms</span>
                <span className="text-sm text-slate-500 font-semibold uppercase tracking-tighter">Response Time</span>
             </div>
          </div>
        </div>

        {/* Right Side: Feature Cards Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-[2.5rem] bg-white border border-green-50 shadow-[0_15px_35px_-15px_rgba(22,163,74,0.08)] hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.15)] transition-all duration-500 group ${idx % 2 !== 0 ? 'lg:translate-y-8' : ''}`}
            >
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white mb-6 shadow-lg shadow-green-200/50 transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                {feature.icon}
              </div>
              
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-green-700 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  )
}

export default AboutUs