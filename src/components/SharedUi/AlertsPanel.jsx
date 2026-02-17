import { AlertTriangle, ShieldAlert, Zap, Activity } from "lucide-react";

const alerts = [
  {
    id: 1,
    title: "High velocity detected",
    desc: "User #231 attempted 9 txns in 1 min",
    icon: Zap,
    badge: "High",
    badgeClass: "badge-error",
    time: "2m ago",
  },
  {
    id: 2,
    title: "Blacklisted IP hit",
    desc: "IP 103.44.xx.xx matched blacklist",
    icon: ShieldAlert,
    badge: "Critical",
    badgeClass: "badge-error",
    time: "7m ago",
  },
  {
    id: 3,
    title: "Suspicious device pattern",
    desc: "Device fingerprint changed suddenly",
    icon: AlertTriangle,
    badge: "Medium",
    badgeClass: "badge-warning",
    time: "12m ago",
  },
  {
    id: 4,
    title: "Activity spike",
    desc: "Flagged transactions increased 18%",
    icon: Activity,
    badge: "Low",
    badgeClass: "badge-info",
    time: "25m ago",
  },
];

export default function AlertsPanel() {
  return (
    <div className="rounded-2xl border border-base-200 bg-base-100 mt-10 p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-lg font-semibold">Real-time Alerts</h3>
        <button className="btn btn-ghost btn-sm">View all</button>
      </div>

      <div className="space-y-3">
        {alerts.map((a) => {
          const Icon = a.icon;
          return (
            <div
              key={a.id}
              className="flex gap-3 rounded-xl border border-base-200 p-3 hover:bg-base-200/40 transition"
            >
              <div className="mt-0.5 rounded-xl bg-base-200 p-2">
                <Icon size={18} />
              </div>

              <div className="flex-1">
                <div className="flex items-start justify-between gap-2">
                  <p className="font-semibold leading-tight">{a.title}</p>
                  <span className={`badge ${a.badgeClass}`}>{a.badge}</span>
                </div>
                <p className="text-sm opacity-70">{a.desc}</p>
                <p className="mt-1 text-xs opacity-50">{a.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
