const weeklyData = [
  { day: 17, segments: [30, 20, 50] }, // total 100%
  { day: 18, segments: [20, 30, 50] },
  { day: 19, segments: [10, 40, 50] },
  { day: 20, segments: [25, 25, 50] },
  { day: 21, segments: [35, 20, 45] },
  { day: 22, segments: [20, 30, 50] },
  { day: 23, segments: [30, 35, 35] },
  { day: 24, segments: [15, 25, 60] },
  { day: 25, segments: [40, 30, 30] },
];

const segmentColors = [
  "bg-[#7A5FFF]",
  "bg-[#60D1FB]", 
  "bg-[#E7ECF9]", 
];

const WeeklyPayments = () => {
  return (
    <div>
      <div className="mt-4 flex items-center justify-between mb-12">
        <h2 className="ml-4 text-xl font-semibold">Weekly Payments</h2>
        <div className="mr-10 text-right">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#A78BFA" className="bi bi-bar-chart-fill" viewBox="0 0 16 16">
              <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z" />
            </svg>
          </div>
      </div>
      <div className="ml-10 flex items-end space-x-20 h-40">
        {weeklyData.map((entry) => (
          <div key={entry.day} className="flex flex-col items-center space-y-1">
            <div className="w-8 h-32 flex flex-col justify-end">
              {[...entry.segments].reverse().map((height, idx) => {
                const isTopSegment = idx === 0;
                return (
                  <div
                    key={idx}
                    className={`${
                      segmentColors[segmentColors.length - 1 - idx]
                    } w-full ${isTopSegment ? "rounded-t-full" : ""}`}
                    style={{ height: `${height}%` }}
                  ></div>
                );
              })}
            </div>
            <span className="text-sm text-gray-400">{entry.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyPayments;
