import { PieChart, Pie, Cell } from "recharts";

const Piechart = () => {
  const data = [
    { name: "Payments Done", value: 63 },
    { name: "Remaining", value: 37 }
  ];

  const COLORS = ["#3B28FF", "#7ED6FD"];

  return (
    <div className="dark:bg-gray-800 text-gray-900 dark:text-white relative">
      <div className="text-left w-full mt-2 ml-8">
      <h2 className="text-xl font-bold mb-4">Payment Analysis</h2>
      </div>
      <PieChart width={200} height={160} className="ml-16 mt-10">
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
      </PieChart>

      {/* Label and Percentage */}
      <div className="text-center mt-12">
        <div className="flex justify-center items-center gap-2 mb-1">
          <span className="w-2 h-2 rounded-full bg-[#3B28FF]"></span>
          <span className="text-sm">Payments Done</span>
        </div>
        <div className="text-2xl font-bold ">63%</div>
      </div>

    </div>
  );
};

export default Piechart;
