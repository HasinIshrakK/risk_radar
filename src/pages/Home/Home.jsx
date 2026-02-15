import React from 'react'
import heroBgImage from "../../assets/hero.jpg"

const Home = () => {
  return (
    <section
      className="min-h-[80vh] flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(3, 55, 61, 0.8), rgba(3, 55, 61, 0.8)), url(${heroBgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full px-6 md:px-12">
        <div className="max-w-xl">
          
          <h1 className="text-5xl font-bold text-white mb-4">
            Smart Fraud Detection System
          </h1>

          <p className="text-xl text-white mb-8 opacity-90">
            Detect suspicious transactions in real-time using AI-powered risk
            analysis, rule-based monitoring, and behavioral tracking.
          </p>

          <div className="flex gap-4">
            <button 
              className="px-6 py-3 rounded-lg font-semibold bg-[#abcf3f] text-white"
              
            >
              Get Started
            </button>

            <button 
              className="px-6 py-3 rounded-lg font-semibold text-white border-2 border-[#abcf3f]"
              
            >
              Learn More
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Home