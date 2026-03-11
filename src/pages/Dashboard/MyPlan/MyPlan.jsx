/* eslint-disable no-unused-vars */
// import Container from "../../../components/SharedUi/Container";

// const MyPlan = () => {
//   return (
//     <div className="my-5 md:my-10">
//       <Container>
//         <p>MyPlan</p>
//       </Container>
//     </div>
//   );
// };
// export default MyPlan;

import React, { useState } from "react";
import {
  ShieldCheck,
  CalendarDays,
  CheckCircle2,
  ArrowUpRight,
  Clock,
  CreditCard,
  Download,
  Zap,
  History,
} from "lucide-react";
import Container from "../../../components/SharedUi/Container";

const MyPlan = () => {
  const [subscription, setSubscription] = useState({
    currentPlan: {
      name: "Pro",
      price: 199,
      status: "Active",
      billingCycle: "Monthly",
      startDate: "Feb 12, 2026",
      renewsOn: "Mar 12, 2026",
      usage: {
        used: 38500,
        total: 50000,
        percentage: 77,
      },
      features: [
        "Impossible Travel Logic",
        "Redis Analytics",
        "24/7 Priority Support",
        "API Integration",
      ],
    },
    paymentHistory: [
      { id: "INV-8821", date: "Feb 12, 2026", amount: 199, status: "Paid" },
      { id: "INV-7540", date: "Jan 12, 2026", amount: 199, stroke: "Paid" },
      { id: "INV-6211", date: "Dec 12, 2025", amount: 49, status: "Paid" }, // আগের মাসে স্টার্টার ছিল হয়তো
    ],
  });

  return (
    <div className="my-5 md:my-10">
      <Container>
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-black text-slate-800 tracking-tight">
              Billing & Plan
            </h2>
            <p className="text-slate-500 font-medium">
              Manage your subscription and view invoices.
            </p>
          </div>
          <button className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-2xl font-bold transition-all shadow-lg shadow-emerald-200 active:scale-95 text-sm">
            <Zap size={18} fill="currentColor" /> Upgrade Plan
          </button>
        </div>

        <div className="grid grid-cols-1 mt-12 lg:grid-cols-3 gap-8 md:gap-18">
          {/* Left Side: Plan Details & Usage */}
          <div className="lg:col-span-2 space-y-6">
            {/* Active Plan Card */}
            <div className="bg-white rounded-[2.5rem] border border-slate-200 p-8 shadow-sm">
              <div className="flex flex-wrap justify-between items-start gap-4 mb-8">
                <div className="flex gap-4">
                  <div className="size-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600">
                    <ShieldCheck size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-800">
                      {subscription.currentPlan.name} Plan
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="size-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">
                        {subscription.currentPlan.status}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-50 px-6 py-3 rounded-2xl border border-slate-100">
                  <p className="text-slate-400 text-[10px] uppercase font-bold tracking-tighter">
                    Current Cost
                  </p>
                  <p className="text-xl font-black text-slate-900">
                    ${subscription.currentPlan.price}
                    <span className="text-sm text-slate-400 font-medium">
                      /mo
                    </span>
                  </p>
                </div>
              </div>

              {/* Usage Progress */}
              <div className="mb-8">
                <div className="flex justify-between items-end mb-3">
                  <div>
                    <p className="text-sm font-bold text-slate-800">
                      Monthly Usage
                    </p>
                    <p className="text-xs text-slate-500">
                      Transactions processed this month
                    </p>
                  </div>
                  <p className="text-sm font-black text-slate-900">
                    {subscription.currentPlan.usage.used.toLocaleString()} /{" "}
                    {subscription.currentPlan.usage.total.toLocaleString()}
                  </p>
                </div>
                <div className="w-full bg-slate-100 h-4 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ${subscription.currentPlan.usage.percentage > 80 ? "bg-amber-500" : "bg-emerald-500"}`}
                    style={{
                      width: `${subscription.currentPlan.usage.percentage}%`,
                    }}
                  ></div>
                </div>
                {subscription.currentPlan.usage.percentage > 70 && (
                  <p className="text-[11px] text-amber-600 font-bold mt-2 flex items-center gap-1">
                    <Clock size={12} /> You've reached{" "}
                    {subscription.currentPlan.usage.percentage}% of your limit.
                  </p>
                )}
              </div>

              {/* Plan Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {subscription.currentPlan.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100/50"
                  >
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    <span className="text-sm text-slate-600 font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment History Table */}
            <div className="bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden shadow-sm">
              <div className="p-6 border-b border-slate-100 flex items-center gap-2">
                <History size={20} className="text-slate-400" />
                <h4 className="font-bold text-slate-800">Billing History</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        Invoice ID
                      </th>
                      <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        Date
                      </th>
                      <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        Amount
                      </th>
                      <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {subscription.paymentHistory.map((history) => (
                      <tr
                        key={history.id}
                        className="hover:bg-slate-50/50 transition-colors"
                      >
                        <td className="px-6 py-4 text-sm font-bold text-slate-700">
                          {history.id}
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-500">
                          {history.date}
                        </td>
                        <td className="px-6 py-4 text-sm font-bold text-slate-900">
                          ${history.amount}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="p-2 hover:bg-emerald-50 text-emerald-600 rounded-lg transition-colors">
                            <Download size={18} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Side: Billing Summary & Payment Method */}
          <div className="space-y-6">
            <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white shadow-xl">
              <h4 className="text-slate-400 font-bold text-xs uppercase tracking-widest mb-6 flex items-center gap-2">
                <CalendarDays size={16} /> Billing Summary
              </h4>

              <div className="space-y-6 mb-8">
                <div className="flex justify-between">
                  <div>
                    <p className="text-slate-400 text-[10px] uppercase font-bold">
                      Renewal Date
                    </p>
                    <p className="text-lg font-bold">
                      {subscription.currentPlan.renewsOn}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-slate-400 text-[10px] uppercase font-bold">
                      Billing Cycle
                    </p>
                    <p className="text-lg font-bold">
                      {subscription.currentPlan.billingCycle}
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                  <p className="text-white/60 text-xs mb-3 flex items-center gap-2">
                    <CreditCard size={14} /> Default Payment Method
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-6 bg-slate-700 rounded flex items-center justify-center font-bold text-[8px]">
                        VISA
                      </div>
                      <p className="text-sm font-medium">•••• 4242</p>
                    </div>
                    <button className="text-[10px] font-bold text-emerald-400 hover:underline">
                      Edit
                    </button>
                  </div>
                </div>
              </div>

              <button className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold rounded-2xl transition-all active:scale-95 shadow-lg shadow-emerald-500/20">
                Download Last Receipt
              </button>
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-[2rem] p-6">
              <h5 className="text-emerald-900 font-bold text-sm mb-2 flex items-center gap-2">
                <ArrowUpRight size={18} /> Need more capacity?
              </h5>
              <p className="text-emerald-700 text-xs leading-relaxed mb-4">
                Upgrade to the Enterprise plan for custom algorithms and
                unlimited transaction monitoring.
              </p>
              <button className="text-emerald-600 font-bold text-xs hover:underline">
                Contact Sales →
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MyPlan;
