import React from 'react'
import { Zap, TrendingUp, Shield, Bot } from 'lucide-react'

const AboutUs = () => {
  return (
    <section className="py-16 px-6" style={{ backgroundColor: '#f9fafb' }}>
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title & Subtitle */}
        <div className="text-center mb-12">
          <h2 
            className="text-4xl font-bold mb-4"
            style={{ color: '#03373D' }}
          >
            About Our System
          </h2>
          <p 
            className="text-lg max-w-2xl mx-auto"
            style={{ color: '#6b7280' }}
          >
            Cutting-edge fraud detection technology designed to protect your business 
            and customers from financial threats with precision and speed.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1 */}
          <div
            className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            style={{ backgroundColor: '#ffffff' }}
          >
            <div 
              className="w-16 h-16 flex items-center justify-center rounded-full mb-4 bg-green-200"
              
            >
              <Bot size={32} className='text-green-600' />
            </div>
            
            <h3 
              className="text-xl font-bold mb-3"
              style={{ color: '#03373D' }}
            >
              AI-Powered Detection
            </h3>
            
            <p style={{ color: '#6b7280' }}>
              Advanced machine learning algorithms analyze patterns and detect anomalies in real-time to identify potential fraud.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            style={{ backgroundColor: '#ffffff' }}
          >
            <div 
              className="w-16 h-16 flex items-center justify-center rounded-full mb-4 bg-green-200"
              
            >
              <Zap size={32} className='text-green-600' />
            </div>
            
            <h3 
              className="text-xl font-bold mb-3"
              style={{ color: '#03373D' }}
            >
              Real-Time Monitoring
            </h3>
            
            <p style={{ color: '#6b7280' }}>
              Continuous surveillance of transactions with instant alerts for suspicious activities across all channels.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            style={{ backgroundColor: '#ffffff' }}
          >
            <div 
              className="w-16 h-16 flex items-center justify-center rounded-full mb-4 bg-green-200"
              
            >
              <TrendingUp size={32} className='text-green-600' />
            </div>
            
            <h3 
              className="text-xl font-bold mb-3"
              style={{ color: '#03373D' }}
            >
              Risk Analysis
            </h3>
            
            <p style={{ color: '#6b7280' }}>
              Comprehensive risk scoring system that evaluates every transaction based on multiple behavioral factors.
            </p>
          </div>

          {/* Card 4 */}
          <div
            className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            style={{ backgroundColor: '#ffffff' }}
          >
            <div 
              className="w-16 h-16 flex items-center justify-center rounded mb-4 bg-green-200"
              
            >
              <Shield size={32} className='text-green-600' />
            </div>
            
            <h3 
              className="text-xl font-bold mb-3"
              style={{ color: '#03373D' }}
            >
              Secure & Compliant
            </h3>
            
            <p style={{ color: '#6b7280' }}>
              Built with enterprise-grade security and fully compliant with international data protection regulations.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default AboutUs