import React from "react";
import heroBgImage from "../../assets/hero.jpg";

const HeroBanner = () => {
  return (
    <section
      className="relative flex items-center overflow-hidden w-full
                 min-h-[50vh]   
                 sm:min-h-[60vh] 
                 md:min-h-[70vh] 
                 lg:min-h-[85vh]"
      style={{
        backgroundImage: `linear-gradient(rgba(3, 55, 61, 0.8), rgba(3, 55, 61, 0.8)), url(${heroBgImage})`,
        backgroundSize: "cover",
        /* Changed to left center to keep your important content visible */
        backgroundPosition: " center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll",
      }}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="max-w-2xl lg:max-w-3xl">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1]">
            Smart Fraud <br className="hidden sm:block" /> Detection System
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-8 md:mb-10 opacity-90 leading-relaxed max-w-xl">
            Detect suspicious transactions in real-time using AI-powered risk
            analysis, rule-based monitoring, and behavioral tracking.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button className="px-8 py-3.5 md:py-4 rounded-lg font-bold bg-green-600 hover:bg-green-700 text-white transition-all shadow-lg active:scale-95">
              Get Started
            </button>

            <button className="px-8 py-3.5 md:py-4 rounded-lg font-bold text-white border-2 border-white/40 hover:border-white hover:bg-white/10 transition-all active:scale-95">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
