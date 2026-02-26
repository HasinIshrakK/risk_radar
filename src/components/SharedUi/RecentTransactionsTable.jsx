const rows = [
  {
    id: "TXN-10021",
    time: "10:12 AM",
    user: "User #231",
    amount: "৳ 2,450",
    risk: 82,
    status: "Flagged",
  },
  {
    id: "TXN-10020",
    time: "10:10 AM",
    user: "User #118",
    amount: "৳ 900",
    risk: 18,
    status: "Allowed",
  },
  {
    id: "TXN-10019",
    time: "10:06 AM",
    user: "User #501",
    amount: "৳ 7,200",
    risk: 95,
    status: "Blocked",
  },
  {
    id: "TXN-10018",
    time: "10:02 AM",
    user: "User #044",
    amount: "৳ 1,150",
    risk: 42,
    status: "Allowed",
  },
  {
    id: "TXN-10017",
    time: "09:58 AM",
    user: "User #774",
    amount: "৳ 3,300",
    risk: 67,
    status: "Flagged",
  },
];

function StatusPill({ status }) {
  const map = {
    Allowed: "badge-success",
    Flagged: "badge-warning",
    Blocked: "badge-error",
  };
  return (
    <span className={`badge ${map[status] || "badge-ghost"}`}>{status}</span>
  );
}

export default function RecentTransactionsTable() {
  return (
    <div className="rounded-2xl border border-base-200 bg-base-100 mt-10 p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-lg font-semibold">Recent Transactions</h3>
        <button className="btn btn-ghost btn-sm">See more</button>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Txn ID</th>
              <th>Time</th>
              <th>User</th>
              <th>Amount</th>
              <th>Risk</th>
              <th>Status</th>
              <th className="text-right">Action</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="hover">
                <td className="font-medium">{r.id}</td>
                <td>{r.time}</td>
                <td>{r.user}</td>
                <td>{r.amount}</td>
                <td>
                  <div className="flex items-center gap-2">
                    <progress
                      className="progress progress-primary w-24"
                      value={r.risk}
                      max="100"
                    />
                    <span className="text-sm opacity-70">{r.risk}</span>
                  </div>
                </td>
                <td>
                  <StatusPill status={r.status} />
                </td>
                <td className="text-right">
                  <button className="btn btn-outline btn-xs">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
