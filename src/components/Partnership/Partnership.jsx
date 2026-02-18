import React from "react";
import { Shield, Sparkles, CheckCircle2 } from "lucide-react";

// Import logos
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import logo4 from "../../assets/logo4.png";
import logo5 from "../../assets/logo5.png";
import logo6 from "../../assets/logo6.png";

const Partnership = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

  return (
    <section className="bg-[#f4faf7] py-6 md:py-8 lg:py-16 overflow-hidden relative border-y border-green-50/50">
      
      {/* Smooth Marquee Animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-container {
            animation: marquee 25s linear infinite;
          }
          .marquee-container:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          
          {/* Reference Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider mb-6 shadow-xl shadow-green-500/20 group cursor-default">
            <Shield className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            Trusted & Verified
            <Sparkles className="w-4 h-4 animate-pulse" />
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Trusted by Industry <span className="text-green-600">Leaders</span>
          </h2>
          
          <p className="text-slate-600 text-lg max-w-2xl font-medium">
            RiskRadar powers the security systems of leading financial institutions globally.
          </p>
        </div>

        {/* Marquee Slider */}
        <div className="relative w-full">
          <div className="flex w-max marquee-container gap-8 py-4">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="group bg-white border border-green-100 rounded-[2rem] p-6 
                           flex items-center justify-center
                           w-36 h-24 md:w-52 md:h-32
                           shadow-[0_8px_20px_-10px_rgba(22,163,74,0.1)] transition-all duration-300
                           hover:shadow-green-500/15 hover:border-green-300 hover:-translate-y-1"
              >
                {/* Clear & Colorful Logo Image */}
                <img
                  src={logo}
                  alt="partner"
                  className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Simple Trust Footer */}
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4 mt-16 opacity-70">
           <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
             <CheckCircle2 className="w-5 h-5 text-green-500" /> Enterprise-ready API
           </div>
           <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
             <CheckCircle2 className="w-5 h-5 text-green-500" /> 24/7 Threat Intelligence
           </div>
           <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
             <CheckCircle2 className="w-5 h-5 text-green-500" /> PCI-DSS Certified
           </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;