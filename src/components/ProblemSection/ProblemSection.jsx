import React from 'react';
import { AlertTriangle, TrendingUp, Clock, DollarSign, Users, Lock, Wifi, CreditCard } from 'lucide-react';

const ProblemSection = () => {
  const statistics = [
    {
      value: "$32B+",
      label: "Lost to fraud annually",
      subtext: "In the US alone",
      icon: <DollarSign size={28} />,
      color: "from-red-500 to-orange-500"
    },
    {
      value: "47%",
      label: "Rise in digital fraud",
      subtext: "Since 2020",
      icon: <TrendingUp size={28} />,
      color: "from-orange-500 to-yellow-500"
    },
    {
      value: "6.8M",
      label: "Fraud cases reported",
      subtext: "Every year",
      icon: <AlertTriangle size={28} />,
      color: "from-yellow-500 to-red-500"
    }
  ];

  const painPoints = [
    {
      title: "Manual Review Bottleneck",
      desc: "Teams spend hours reviewing flagged transactions, causing delays and customer frustration.",
      icon: <Clock className="text-red-500" />,
    },
    {
      title: "Legacy Systems Gap",
      desc: "Traditional rule-based systems miss sophisticated fraud patterns and generate false positives.",
      icon: <Lock className="text-orange-500" />,
    },
    {
      title: "Real-Time Detection Lag",
      desc: "By the time fraud is detected, damage is done. Speed matters in preventing losses.",
      icon: <Wifi className="text-yellow-500" />,
    },
    {
      title: "Account Takeover Surge",
      desc: "Credential stuffing and phishing attacks compromise user accounts at unprecedented rates.",
      icon: <Users className="text-red-600" />,
    },
    {
      title: "Chargeback Nightmares",
      desc: "Merchants lose revenue, face penalties, and risk payment processor relationships.",
      icon: <CreditCard className="text-orange-600" />,
    },
    {
      title: "Evolving Fraud Tactics",
      desc: "Fraudsters constantly adapt. Static detection methods can't keep up with new attack vectors.",
      icon: <AlertTriangle className="text-red-500" />,
    }
  ];

  return (
    <section className="py-20 px-6 bg-linear-to-br from-slate-50 via-red-50/30 to-orange-50/40 relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-5">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-red-100 border border-red-200 text-red-700 text-sm font-bold tracking-wide shadow-sm animate-pulse">
            <AlertTriangle size={18} className="text-red-600" />
            The Growing Threat
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight">
            Fraud is <span className="text-transparent bg-clip-text bg-linear-to-r from-red-600 via-orange-600 to-red-500">
              Costing You
            </span> More <br className="hidden sm:block" />
            Than You Think
          </h2>
          
          <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Every day, businesses lose millions to increasingly sophisticated fraud attacks. 
            Without intelligent detection systems, you're vulnerable to evolving threats that traditional methods simply can't catch.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {statistics.map((stat, idx) => (
            <div
              key={idx}
              className="relative p-8 rounded-3xl bg-white shadow-xl shadow-red-100/50 border border-red-100/50 hover:shadow-2xl hover:shadow-red-200/60 transition-all duration-500 group overflow-hidden"
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-linear-to-br from-red-50/50 to-orange-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${stat.color} flex items-center justify-center text-white mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                  {stat.icon}
                </div>
                <h3 className="text-5xl font-black text-slate-900 mb-2 tracking-tight">
                  {stat.value}
                </h3>
                <p className="text-lg font-bold text-slate-700 mb-1">{stat.label}</p>
                <p className="text-sm text-slate-500 font-medium">{stat.subtext}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pain Points Section */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Common Pain Points Businesses Face
            </h3>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              If you're dealing with these challenges, you're not alone — but you don't have to accept them.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {painPoints.map((point, idx) => (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-white border border-slate-200 hover:border-red-300 hover:shadow-lg hover:shadow-red-100/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-linear-to-br from-red-50 to-orange-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {point.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-red-600 transition-colors">
                      {point.title}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Highlight */}
        <div className="mt-16 p-8 rounded-3xl bg-linear-to-r from-red-600 via-orange-600 to-red-600 text-white text-center shadow-2xl shadow-red-300/50">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Don't Let Fraud Drain Your Revenue
          </h3>
          <p className="text-red-50 text-lg mb-6 max-w-2xl mx-auto">
            RiskRadar's AI-powered detection stops fraud before it impacts your bottom line.
          </p>
          <button className="px-8 py-4 rounded-xl font-bold bg-white text-red-600 hover:bg-red-50 transition-all shadow-lg hover:shadow-xl active:scale-95">
            See How It Works →
          </button>
        </div>

      </div>
    </section>
  );
};

export default ProblemSection;