const rules = [
  { name: "Velocity Burst (1m)", count: 128 },
  { name: "Blacklisted IP", count: 74 },
  { name: "Impossible Travel", count: 39 },
  { name: "Brute Force Login", count: 31 },
  { name: "High Risk Score", count: 22 },
];

export default function TopTriggeredRules() {
  return (
    <div className="rounded-2xl border border-base-200 bg-base-100 mt-10 p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-lg font-semibold">Top Triggered Rules</h3>
        <button className="btn btn-ghost btn-sm">View</button>
      </div>

      <div className="space-y-3">
        {rules.map((r) => (
          <div key={r.name} className="rounded-xl border border-base-200 p-3">
            <div className="mb-2 flex items-center justify-between">
              <p className="font-medium">{r.name}</p>
              <span className="badge badge-neutral">{r.count}</span>
            </div>

            {/* progress */}
            <progress
              className="progress progress-primary w-full"
              value={Math.min(r.count, 150)}
              max="150"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
