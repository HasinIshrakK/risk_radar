import React from "react";

// Import logos
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import logo4 from "../../assets/logo4.png";
import logo5 from "../../assets/logo5.png";
import logo6 from "../../assets/logo6.png";
import { Shield, Sparkles } from "lucide-react";

const Partnership = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

  return (
    <section className="bg-white py-12 overflow-hidden relative">
      
      {/* CSS inside component */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .marquee {
            animation: marquee 22s linear infinite;
          }

          .marquee:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      {/* Section Title */}
      <div className="text-center mb-8 px-4">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider mb-8 shadow-xl shadow-green-500/30 hover:shadow-2xl hover:shadow-green-500/40 transition-all duration-300 hover:scale-105 group cursor-pointer">
            <Shield className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            Trusted & Verified
            <Sparkles className="w-4 h-4 group-hover:animate-pulse" />
          </div>
        <h2 className="text-2xl md:text-3xl font-bold text-green-700">
          Trusted Fraud Detection Partners
        </h2>
        <p className="text-gray-500 text-sm md:text-base mt-2">
          Securing digital transactions with intelligent fraud monitoring
        </p>
      </div>

      {/* Marquee Slider */}
      <div className="relative w-full">
        <div className="flex w-max marquee gap-10 px-6">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="group bg-green-50 border border-green-100 rounded-xl p-4 
                         flex items-center justify-center
                         w-28 h-20 md:w-36 md:h-24 lg:w-44 lg:h-28
                         shadow-sm transition-all duration-300
                         hover:shadow-green-200 hover:shadow-lg hover:-translate-y-1"
            >
              <img
                src={logo}
                alt="partner"
                className="max-h-full max-w-full object-contain 
                           transition-transform duration-300 
                           group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partnership;
