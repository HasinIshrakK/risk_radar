import React from 'react';
import {
  AlertTriangle,
  TrendingUp,
  Clock,
  DollarSign,
  Users,
  Lock,
  Wifi,
  CreditCard,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';

const ProblemSection = () => {
  const statistics = [
    {
      value: "$32B+",
      label: "Annual Fraud Loss",
      subtext: "Reported in US Markets",
      icon: <DollarSign size={28} />,
      color: "from-slate-800 to-slate-900"
    },
    {
      value: "47%",
      label: "Digital Fraud Surge",
      subtext: "Increase since 2022",
      icon: <TrendingUp size={28} />,
      color: "from-emerald-600 to-teal-700"
    },
    {
      value: "6.8M",
      label: "Reported Cases",
      subtext: "Global incidents yearly",
      icon: <AlertTriangle size={28} />,
      color: "from-rose-500 to-red-600"
    }
  ];

  const painPoints = [
    {
      title: "Manual Review Bottleneck",
      desc: "Teams spend hours reviewing flagged transactions, causing delays and customer friction.",
      icon: <Clock className="text-emerald-600" />,
    },
    {
      title: "Legacy Systems Gap",
      desc: "Traditional rule-based systems miss sophisticated patterns and generate false positives.",
      icon: <Lock className="text-slate-600" />,
    },
    {
      title: "Real-Time Detection Lag",
      desc: "By the time fraud is detected, the capital is gone. Speed is the only defense.",
      icon: <Wifi className="text-rose-500" />,
    },
    {
      title: "Account Takeover (ATO)",
      desc: "Credential stuffing and phishing attacks compromise user accounts at scale.",
      icon: <Users className="text-emerald-600" />,
    },
    {
      title: "Chargeback Penalties",
      desc: "Merchants lose revenue and risk vital payment processor relationships.",
      icon: <CreditCard className="text-slate-600" />,
    },
    {
      title: "Adaptive Tactics",
      desc: "Fraudsters evolve daily. Static detection methods are inherently obsolete.",
      icon: <AlertTriangle className="text-rose-500" />,
    }
  ];

  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">

      {/* Subtle Background Orbs - No more "Red Panic" */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-100 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-100 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header Section */}
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white text-xs font-black uppercase tracking-widest shadow-lg">
            <AlertTriangle size={14} className="text-rose-400" />
            Market Vulnerability Report
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
            The Invisible Cost of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-slate-900">
              Outdated Security.
            </span>
          </h2>

          <p className="text-slate-500 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-medium">
            Sophisticated fraud syndicates capitalize on legacy detection gaps.
            Without AI-driven intelligence, your bottom line remains a moving target.
          </p>
        </div>

        {/* Statistics Grid - High Contrast & Clean */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {statistics.map((stat, idx) => (
            <div
              key={idx}
              className="group relative p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:border-emerald-100 transition-all duration-500"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                {stat.icon}
              </div>
              <h3 className="text-5xl font-black text-slate-900 mb-2 tracking-tighter">
                {stat.value}
              </h3>
              <p className="text-sm font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
              <p className="text-xs text-slate-400 mt-1">{stat.subtext}</p>
            </div>
          ))}
        </div>

        {/* Pain Points - Clean Grid */}
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h3 className="text-3xl font-black text-slate-900">Critical Pain Points</h3>
              <p className="text-slate-500 font-medium">Why traditional rule-sets are failing your business.</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {painPoints.map((point, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-slate-50/50 border border-transparent hover:border-emerald-200 hover:bg-white hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  {point.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-3 underline decoration-emerald-200 decoration-2 underline-offset-4">
                  {point.title}
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA - The "Fix" Section */}
        <div className="mt-20 p-1 bg-gradient-to-r from-emerald-500 via-teal-600 to-slate-900 rounded-[3rem] shadow-2xl shadow-emerald-200/50">
          <div className="bg-slate-900 rounded-[2.8rem] p-10 md:p-16 text-center">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
              Stop Reacting. Start Preventing.
            </h3>
            <p className="text-emerald-100/60 text-lg mb-10 max-w-2xl mx-auto font-medium">
              Join 500+ enterprises using RiskRadar to automate fraud detection
              and reclaim lost revenue in under 60 minutes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-10 py-4 rounded-2xl font-black bg-emerald-500 text-white hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20 flex items-center gap-2 active:scale-95">
                Deploy AI Radar <ArrowRight size={20} />
              </button>
              <button className="px-10 py-4 rounded-2xl font-black bg-white/10 text-white border border-white/10 hover:bg-white/20 transition-all">
                View Documentation
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProblemSection;