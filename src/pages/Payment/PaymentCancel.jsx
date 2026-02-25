import React from 'react';
import { X, RefreshCw,  AlertTriangle, Home, } from 'lucide-react';
import { Link } from 'react-router';


const PaymentCancel = () => {
  return (
    <div className="min-h-screen bg-[#f4faf7] flex items-center justify-center p-6">
      
      {/* Main Dark Card */}
      <div className="max-w-md w-full bg-[#0F172A] rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden relative border border-slate-800">
        
        {/* Subtle Background Glow */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-red-500/10 blur-[80px] rounded-full"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-green-500/10 blur-[80px] rounded-full"></div>

        <div className="p-8 md:p-12 relative z-10 text-center">
          
          {/* Header Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 rounded-3xl bg-slate-800/50 flex items-center justify-center border border-slate-700 relative">
               <div className="absolute inset-0 bg-red-500/20 blur-xl rounded-full animate-pulse"></div>
               <X size={40} className="text-red-500 relative z-10" strokeWidth={3} />
            </div>
          </div>

          {/* Text Content */}
          <h1 className="text-2xl md:text-3xl font-black text-white mb-4">
            Transaction <span className="text-red-500">Stopped</span>
          </h1>
          <p className="text-slate-400 font-medium mb-8 leading-relaxed">
            Your payment process was interrupted. No funds were captured from your account.
          </p>

          {/* Glassmorphism Alert Box */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-8 flex items-start gap-3 text-left">
            <AlertTriangle className="text-amber-500 shrink-0 mt-0.5" size={18} />
            <div>
              <p className="text-xs font-bold text-slate-200 uppercase tracking-tight mb-1">Status: Cancelled</p>
              <p className="text-xs text-slate-400 leading-normal">
                If this was a mistake, you can restart the payment or contact our billing desk.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <button 
              onClick={() => window.location.reload()}
              className="group flex items-center justify-center gap-2 w-full bg-green-600 text-white py-4 rounded-2xl font-bold hover:bg-green-500 transition-all active:scale-[0.98] shadow-lg shadow-green-900/20"
            >
              <RefreshCw size={18} className="group-hover:rotate-180 transition-transform duration-500" />
              Try Again
            </button>
            
            <div className="">
              <Link 
                to="/" 
                className="flex items-center justify-center gap-2 bg-slate-800 text-slate-300 py-3.5 rounded-2xl font-bold hover:bg-slate-700 transition-all border border-slate-700 text-sm"
              >
                <Home size={16} /> Home
              </Link>
             
            </div>
          </div>
        </div>

        {/* Footer Branding */}
        <div className="bg-black/40 py-4 px-8 border-t border-slate-800 flex items-center justify-between">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">RiskRadar Security</span>
          <div className="flex gap-1">
            <div className="w-1 h-1 rounded-full bg-red-500"></div>
            <div className="w-1 h-1 rounded-full bg-slate-700"></div>
            <div className="w-1 h-1 rounded-full bg-slate-700"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCancel;