/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import {
  ShieldAlert,
  Search,
  Filter,
  ArrowUpRight,
  Eye,
  TrendingUp,
  Download,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Layers,
} from "lucide-react";
import Container from "../../../components/SharedUi/Container";
import useAxios from "../../../hooks/useAxios";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router";

const TrxnList = () => {
  const { user } = useAuth();
  const axiosInstance = useAxios();
  
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [riskFilter, setRiskFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);

  // Fetching transaction history
  useEffect(() => {
    if (user?.email) {
      setLoading(true);
      axiosInstance
        .get(`/api/transactions?email=${user.email}`)
        .then((res) => {
            console.log(res.data)
          setTransactions(res.data || []);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching transactions:", error);
          setLoading(false);
        });
    }
  }, [user?.email, axiosInstance]);

  // Helper styling for Risk Scores
  const getRiskScoreBadge = (score) => {
    if (score >= 75) return { bg: "bg-rose-50 text-rose-700 border-rose-200", indicator: "bg-rose-500", label: "High Risk" };
    if (score >= 35) return { bg: "bg-amber-50 text-amber-700 border-amber-200", indicator: "bg-amber-500", label: "Medium Risk" };
    return { bg: "bg-emerald-50 text-emerald-700 border-emerald-200", indicator: "bg-emerald-500", label: "Low Risk" };
  };

  // Helper styling for Statuses
  const getStatusBadge = (status) => {
    switch (status?.toLowerCase()) {
      case "approved":
      case "success":
        return { text: "text-emerald-600 bg-emerald-50 border-emerald-100", icon: <CheckCircle2 size={14} /> };
      case "flagged":
      case "review":
        return { text: "text-amber-600 bg-amber-50 border-amber-100", icon: <AlertTriangle size={14} /> };
      case "declined":
      case "blocked":
        return { text: "text-rose-600 bg-rose-50 border-rose-100", icon: <XCircle size={14} /> };
      default:
        return { text: "text-slate-500 bg-slate-50 border-slate-100", icon: <HelpCircle size={14} /> };
    }
  };

  // Filtering Logic
  const filteredTransactions = transactions.filter((trxn) => {
    const matchesSearch = 
      trxn.transactionId?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trxn.customerName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trxn.customerEmail?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === "all" || trxn.status?.toLowerCase() === statusFilter.toLowerCase();
    
    let matchesRisk = true;
    if (riskFilter === "high") matchesRisk = trxn.riskScore >= 75;
    else if (riskFilter === "medium") matchesRisk = trxn.riskScore >= 35 && trxn.riskScore < 75;
    else if (riskFilter === "low") matchesRisk = trxn.riskScore < 35;

    return matchesSearch && matchesStatus && matchesRisk;
  });

  const displayedTransactions = showAll ? filteredTransactions : filteredTransactions.slice(0, 10);

  // Compute stats for top visual insight widgets
  const stats = {
    totalMonitored: transactions.length,
    highRiskCount: transactions.filter(t => t.riskScore >= 75).length,
    flaggedReview: transactions.filter(t => t.status?.toLowerCase() === "flagged" || t.status?.toLowerCase() === "review").length
  };

  if (loading) return <div className="p-20 text-center font-bold text-emerald-600">Loading live transaction logs...</div>;

  return (
    <div className="my-5 md:my-10">
      <Container>
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-black text-slate-800 tracking-tight">
              Transaction Ledger
            </h2>
            <p className="text-slate-500 font-medium">
              Real-time streams monitored and evaluated by your custom RiskRadar engine.
            </p>
          </div>
          <button className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-2xl font-bold transition-all shadow-md active:scale-95 text-sm">
            <Download size={18} /> Export CSV
          </button>
        </div>

        {/* Insight Quick-Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="bg-white border border-slate-200 p-6 rounded-[2rem] shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-400 font-black uppercase tracking-tight">Total Checked</p>
              <h3 className="text-2xl font-black text-slate-800 mt-1">{stats.totalMonitored}</h3>
            </div>
            <div className="size-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-500 border border-slate-100">
              <Layers size={20} />
            </div>
          </div>

          <div className="bg-white border border-slate-200 p-6 rounded-[2rem] shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs text-rose-500 font-black uppercase tracking-tight">High Risk Flags</p>
              <h3 className="text-2xl font-black text-rose-600 mt-1">{stats.highRiskCount}</h3>
            </div>
            <div className="size-12 bg-rose-50 rounded-xl flex items-center justify-center text-rose-500 border border-rose-100">
              <ShieldAlert size={20} />
            </div>
          </div>

          <div className="bg-white border border-slate-200 p-6 rounded-[2rem] shadow-sm flex items-center justify-between sm:col-span-2 lg:col-span-1">
            <div>
              <p className="text-xs text-amber-500 font-black uppercase tracking-tight">Pending Review</p>
              <h3 className="text-2xl font-black text-amber-600 mt-1">{stats.flaggedReview}</h3>
            </div>
            <div className="size-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-500 border border-amber-100">
              <AlertTriangle size={20} />
            </div>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="mt-10 bg-white border border-slate-200 p-4 rounded-[2rem] shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search bar input */}
          <div className="relative w-full md:max-w-md">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
              <Search size={18} />
            </span>
            <input
              type="text"
              placeholder="Search by ID, customer name, email..."
              className="w-full pl-11 pr-4 py-3 bg-slate-50 rounded-2xl border border-slate-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-slate-700 placeholder:text-slate-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Selector filters */}
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-end">
            <div className="flex items-center gap-2 bg-slate-50 px-4 py-2.5 rounded-2xl border border-slate-200">
              <Filter size={14} className="text-slate-400" />
              <select
                className="bg-transparent text-xs font-bold text-slate-600 focus:outline-none cursor-pointer"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">All Statuses</option>
                <option value="approved">Approved</option>
                <option value="flagged">Flagged</option>
                <option value="declined">Declined</option>
              </select>
            </div>

            <div className="flex items-center gap-2 bg-slate-50 px-4 py-2.5 rounded-2xl border border-slate-200">
              <TrendingUp size={14} className="text-slate-400" />
              <select
                className="bg-transparent text-xs font-bold text-slate-600 focus:outline-none cursor-pointer"
                value={riskFilter}
                onChange={(e) => setRiskFilter(e.target.value)}
              >
                <option value="all">All Risk Levels</option>
                <option value="low">Low Risk (&lt;35)</option>
                <option value="medium">Medium Risk (35-74)</option>
                <option value="high">High Risk (&ge;75)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Transactions Main Ledger Table Card */}
        <div className="mt-6 bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden shadow-sm">
          {transactions.length === 0 || filteredTransactions.length === 0 ? (
            <div className="p-20 text-center font-bold text-slate-400 bg-white">
              No matching transactions recorded.
            </div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse whitespace-nowrap">
                  <thead className="bg-slate-50 border-b border-slate-100">
                    <tr>
                      <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        Transaction ID
                      </th>
                      <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        Customer Info
                      </th>
                      <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        Timestamp
                      </th>
                      <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        Amount
                      </th>
                      <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">
                        Risk Score
                      </th>
                      <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        Status
                      </th>
                      <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {displayedTransactions.map((trxn) => {
                      const riskBadge = getRiskScoreBadge(trxn.riskScore);
                      const statusBadge = getStatusBadge(trxn.status);
                      
                      return (
                        <tr key={trxn._id || trxn.transactionId} className="hover:bg-slate-50/40 transition-colors">
                          {/* Transaction ID */}
                          <td className="px-6 py-4 font-mono text-xs font-bold text-slate-700 tracking-tight">
                            {trxn.transactionId || "TRX-UNKNOWN"}
                          </td>
                          
                          {/* Customer Info */}
                          <td className="px-6 py-4">
                            <p className="text-sm font-bold text-slate-800">{trxn.customerName || "Guest User"}</p>
                            <p className="text-xs text-slate-400 font-medium">{trxn.customerEmail || "N/A"}</p>
                          </td>

                          {/* Date/Time */}
                          <td className="px-6 py-4 text-xs font-medium text-slate-500">
                            {trxn.createdAt ? new Date(trxn.createdAt).toLocaleString() : "Just now"}
                          </td>

                          {/* Amount */}
                          <td className="px-6 py-4 text-sm font-black text-slate-900">
                            {trxn.currency || "$"}{trxn.amount?.toFixed(2)}
                          </td>

                          {/* Risk Score */}
                          <td className="px-6 py-4 text-center">
                            <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-black rounded-full border ${riskBadge.bg}`}>
                              <span className={`size-1.5 rounded-full ${riskBadge.indicator}`}></span>
                              {trxn.riskScore}
                            </span>
                          </td>

                          {/* Status */}
                          <td className="px-6 py-4">
                            <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold ${statusBadge.text}`}>
                              {statusBadge.icon}
                              {trxn.status}
                            </span>
                          </td>

                          {/* Action Link to Details */}
                          <td className="px-6 py-4 text-center">
                            <Link to={`/dashboard/transactions/${trxn.transactionId || trxn._id}`}>
                              <button className="p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all active:scale-95">
                                <Eye size={16} />
                              </button>
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Show More Pagination Controls */}
              {filteredTransactions.length > 10 && (
                <div className="p-4 bg-slate-50/50 border-t border-slate-100 text-center">
                  <button
                    onClick={() => setShowAll(!showAll)}
                    className="text-xs font-black text-emerald-600 hover:text-emerald-700 uppercase tracking-widest transition-all active:scale-95"
                  >
                    {showAll ? "↑ Show Fewer Transactions" : `↓ View All Records (${filteredTransactions.length})`}
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default TrxnList;