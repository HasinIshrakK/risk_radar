import { Activity, Database, Gauge, ShieldCheck } from "lucide-react";

function StatCard({ title, value, sub, icon: Icon }) {
  return (
    <div className="rounded-2xl border border-base-200 bg-base-100 p-4 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm opacity-70">{title}</p>
          <h3 className="mt-1 text-2xl font-bold">{value}</h3>
          {sub && <p className="mt-1 text-xs opacity-60">{sub}</p>}
        </div>

        <div className="rounded-xl bg-base-200 p-2">
          <Icon size={18} />
        </div>
      </div>
    </div>
  );
}

export default function SystemHealthSection() {
  return (
    <div className="rounded-2xl border border-base-200 bg-base-100 mt-10 p-4 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold">
          System Health & Risk Intelligence
        </h3>
        <span className="badge badge-success">Healthy</span>
      </div>

      {/* 4 Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Redis Latency"
          value="4.2 ms"
          sub="Avg response time"
          icon={Gauge}
        />
        <StatCard
          title="Cache Hit Rate"
          value="92%"
          sub="Last 10 minutes"
          icon={Database}
        />
        <StatCard
          title="Risk Engine"
          value="Running"
          sub="No incidents detected"
          icon={ShieldCheck}
        />
        <StatCard
          title="Tx Processed"
          value="1,240"
          sub="Last 5 minutes"
          icon={Activity}
        />
      </div>

      {/* Mini Decision Breakdown */}
      <div className="mt-5 rounded-xl border border-base-200 p-4">
        <div className="mb-2 flex items-center justify-between">
          <p className="font-semibold">Decision Breakdown (Last 5 min)</p>
          <p className="text-sm opacity-60">Allow / Flag / Block</p>
        </div>

        <div className="space-y-3">
          <div>
            <div className="mb-1 flex justify-between text-sm">
              <span className="opacity-70">Allowed</span>
              <span className="font-medium">78%</span>
            </div>
            <progress
              className="progress progress-success w-full"
              value="78"
              max="100"
            />
          </div>

          <div>
            <div className="mb-1 flex justify-between text-sm">
              <span className="opacity-70">Flagged</span>
              <span className="font-medium">18%</span>
            </div>
            <progress
              className="progress progress-warning w-full"
              value="18"
              max="100"
            />
          </div>

          <div>
            <div className="mb-1 flex justify-between text-sm">
              <span className="opacity-70">Blocked</span>
              <span className="font-medium">4%</span>
            </div>
            <progress
              className="progress progress-error w-full"
              value="4"
              max="100"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
