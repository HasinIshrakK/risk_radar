import TransactionVolumeBarChart from "../../components/SharedUi/TransactionVolumeBarChart";

export default function Dashboard() {
  return (
    <div className="p-6 bg-base-200 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      {/* KPI Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="card bg-base-100 shadow p-4">
          <p>Total Transactions</p>
          <h2 className="text-2xl font-bold">12,450</h2>
        </div>

        <div className="card bg-base-100 shadow p-4">
          <p>Allowed</p>
          <h2 className="text-2xl font-bold text-green-500">10,980</h2>
        </div>

        <div className="card bg-base-100 shadow p-4">
          <p>Flagged</p>
          <h2 className="text-2xl font-bold text-yellow-500">1,220</h2>
        </div>

        <div className="card bg-base-100 shadow p-4">
          <p>Blocked</p>
          <h2 className="text-2xl font-bold text-red-500">250</h2>
        </div>
      </div>

      {/* Bar Chart Section */}
      <TransactionVolumeBarChart />
    </div>
  );
}
