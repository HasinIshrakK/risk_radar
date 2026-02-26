import React from 'react';
import { CheckCircle, ArrowRight, ShieldCheck, Download, Home } from 'lucide-react';
import { Link } from 'react-router';


const PaymentSuccess = () => {
  return (
    <div className="min-h-screen bg-[#f4faf7] flex items-center justify-center p-4">
      
      {/* Success Card */}
      <div className="max-w-md w-full bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(22,163,74,0.12)] border border-green-50 text-center relative overflow-hidden">
        
        {/* Top Decorative Pattern */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600"></div>

        {/* Big Animated Success Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-green-100 rounded-full animate-ping opacity-25"></div>
            <div className="relative bg-green-50 w-24 h-24 rounded-full flex items-center justify-center">
              <CheckCircle size={48} className="text-green-600" strokeWidth={2.5} />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <h1 className="text-3xl font-black text-slate-900 mb-3">
          Payment Success!
        </h1>
        <p className="text-slate-500 font-medium mb-10 leading-relaxed">
          Your transaction has been processed successfully. Your account is now upgraded and protected by <span className="text-green-600 font-bold">RiskRadar</span>.
        </p>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Link 
            to="/dashboard" 
            className="flex items-center justify-center gap-2 w-full bg-green-600 text-white py-4 rounded-2xl font-bold hover:bg-green-700 transition-all shadow-lg shadow-green-200 active:scale-[0.98]"
          >
            Enter Dashboard <ArrowRight size={20} />
          </Link>
          
          <Link 
            to="/" 
            className="flex items-center justify-center gap-2 w-full bg-slate-50 text-slate-600 py-4 rounded-2xl font-bold hover:bg-slate-100 transition-all active:scale-[0.98]"
          >
            <Home size={18} /> Back to Home
          </Link>
        </div>

        {/* Security Footer */}
        <div className="mt-10 pt-8 border-t border-slate-50 flex items-center justify-center gap-2 opacity-60">
          <ShieldCheck size={16} className="text-green-600" />
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
            Bank-Level Encryption Verified
          </span>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;