import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Mon", allowed: 420, flagged: 55, blocked: 12 },
  { name: "Tue", allowed: 380, flagged: 62, blocked: 18 },
  { name: "Wed", allowed: 510, flagged: 48, blocked: 9 },
  { name: "Thu", allowed: 460, flagged: 70, blocked: 22 },
  { name: "Fri", allowed: 610, flagged: 66, blocked: 15 },
  { name: "Sat", allowed: 530, flagged: 51, blocked: 11 },
  { name: "Sun", allowed: 490, flagged: 58, blocked: 17 },
];

export default function TransactionVolumeBarChart() {
  return (
    <div className="w-full rounded-2xl border border-base-200 bg-base-100 p-4 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold">Transaction Volume</h3>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />

            <Bar dataKey="allowed" stackId="a" fill="#22c55e" />
            <Bar dataKey="flagged" stackId="a" fill="#f59e0b" />
            <Bar dataKey="blocked" stackId="a" fill="#ef4444" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
