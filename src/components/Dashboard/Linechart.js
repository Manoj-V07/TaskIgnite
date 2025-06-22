import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useEffect } from "react";

const data = [
  { month: "SEP", value1: 150000, value2: 120000 },
  { month: "OCT", value1: 180000, value2: 130000 },
  { month: "NOV", value1: 200000, value2: 150000 },
  { month: "DEC", value1: 170000, value2: 110000 },
  { month: "JAN", value1: 190000, value2: 140000 },
  { month: "FEB", value1: 210000, value2: 160000 },
];

const Linechart = () => {
  useEffect(() => {
    console.log("✅ Linechart mounted");
    return () => {
      console.log("❌ Linechart unmounted");
    };
  }, []);

  return (
    <div className="w-full h-full rounded-xl p-4 bg-white dark:bg-[#1E2633] text-gray-900 dark:text-white">
      {/* TOP SECTION: All text and icon */}
      <div className="flex justify-between items-start">
        {/* LEFT TEXT SECTION */}
        <div>
          <div className="flex items-center gap-1 text-sm text-gray-700 dark:text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="currentColor"
              className="text-gray-400 dark:text-gray-300"
              viewBox="0 0 16 16"
            >
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
            </svg>
            <span>This month</span>
          </div>

          <div className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white leading-tight mt-1">
            Rs. 200,000
          </div>
          <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">Total Payments</div>
          <div className="flex items-center gap-1 text-sm text-green-600 dark:text-green-400 mt-5">
            <div className="w-4 h-4 rounded-full bg-green-600 dark:bg-green-400 flex items-center justify-center text-white text-xs">
              ✓
            </div>
            On track of this area
          </div>
        </div>

        {/* RIGHT ICON */}
        <div className="text-right">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#A78BFA"
            className="bi bi-bar-chart-fill"
            viewBox="0 0 16 16"
          >
            <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z" />
          </svg>
        </div>
      </div>

      {/* BOTTOM SECTION: Line chart */}
      <div className="h-48 mt-2">
        <ResponsiveContainer className="ml-48" width="70%" height="100%">
          <LineChart data={data}>
            <XAxis
              dataKey="month"
              tick={{ fill: "#A0AEC0", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              interval="preserveStartEnd"
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#2D3748",
                border: "none",
                color: "white",
              }}
              formatter={(value) => `Rs. ${value}`}
            />
            <Line
              type="monotone"
              dataKey="value1"
              stroke="#A78BFA"
              strokeWidth={3}
              dot={false}
              activeDot={{
                r: 5,
                stroke: "#A78BFA",
                strokeWidth: 2,
                fill: "#1A202C",
              }}
            />
            <Line
              type="monotone"
              dataKey="value2"
              stroke="#38BDF8"
              strokeWidth={3}
              dot={false}
              activeDot={{
                r: 5,
                stroke: "#38BDF8",
                strokeWidth: 2,
                fill: "#1A202C",
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default Linechart;