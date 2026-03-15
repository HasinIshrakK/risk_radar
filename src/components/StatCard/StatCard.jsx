const StatCard = ({ title, value, trend, isUp }) => {
  return (
    <div className="bg-white p-6 rounded-[2rem] border border-emerald-100 shadow-sm hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300">
      <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.15em]">
        {title}
      </p>
      <div className="flex items-end justify-between mt-4">
        <h2 className="text-3xl font-black text-slate-800">{value}</h2>
        <div
          className={`flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-full ${isUp ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-500"}`}
        >
          {trend}
        </div>
      </div>
    </div>
  );
};
export default StatCard;
