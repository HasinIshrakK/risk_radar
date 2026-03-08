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
  { name: "Sat", allowed: 530, flagged: 51, blocked: 11 },
  { name: "Sun", allowed: 490, flagged: 58, blocked: 17 },
  { name: "Mon", allowed: 420, flagged: 55, blocked: 12 },
  { name: "Tue", allowed: 380, flagged: 62, blocked: 18 },
  { name: "Wed", allowed: 510, flagged: 48, blocked: 9 },
  { name: "Thu", allowed: 460, flagged: 70, blocked: 22 },
  { name: "Fri", allowed: 610, flagged: 66, blocked: 15 },
];

export default function TransactionVolumeBarChart() {
  return (
    <div>
      <div className="w-full rounded-2xl border border-base-200 bg-base-100 p-4 shadow-sm">
        <h3 className="mb-4 text-lg font-semibold">Transaction Volume</h3>

        <div className="w-full" style={{ minHeight: 288 }}>
          <ResponsiveContainer width="100%" height={288}>
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

      <div className="w-full bg-white rounded-2xl shadow-md p-4 md:p-6 mt-10">
        <h2 className="text-lg md:text-xl font-semibold mb-4">
          Weekly Transaction Overview
        </h2>

        <ResponsiveContainer width="100%" height={350}>
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 10, right: 20, left: 10, bottom: 10 }}
            barCategoryGap={20}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />

            <XAxis type="number" tick={{ fontSize: 12 }} />

            <YAxis type="category" dataKey="name" tick={{ fontSize: 12 }} />

            <Tooltip
              contentStyle={{
                borderRadius: "10px",
                border: "none",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            />

            <Legend wrapperStyle={{ fontSize: "14px" }} />

            <Bar
              dataKey="allowed"
              fill="#22c55e"
              radius={[0, 6, 6, 0]}
              barSize={18}
            />

            <Bar
              dataKey="flagged"
              fill="#f59e0b"
              radius={[0, 6, 6, 0]}
              barSize={18}
            />

            <Bar
              dataKey="blocked"
              fill="#ef4444"
              radius={[0, 6, 6, 0]}
              barSize={18}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
