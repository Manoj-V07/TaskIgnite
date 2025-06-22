const PaymentStatus = () => {
  return (
    <div className="w-full max-w-6xl mx-auto rounded-xl shadow-md overflow-hidden bg-white dark:bg-gray-800 text-gray-900 dark:text-white relative">
      <h1 className="m-4 text-gray-800 dark:text-white">Recent Payments</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left text-gray-700 dark:text-gray-300">
          <tbody>
            {[
              { name: "Manoj", amount: "Rs.3000", time: "30s ago" },
              { name: "Kanwal Kishore", amount: "Rs.2500", time: "58s ago" },
              { name: "Kathirvel", amount: "Rs.1800", time: "1m ago" },
              { name: "Jayasuriya", amount: "Rs.2900", time: "7m ago" },
              { name: "Joshua Rubert", amount: "Rs.1300", time: "10m ago" },
            ].map((entry, i) => (
              <tr
                key={i}
                className={`${
                  i % 2 === 0
                    ? "bg-gray-100 dark:bg-gray-900"
                    : "bg-gray-50 dark:bg-gray-700"
                } border-b border-gray-300 dark:border-gray-600`}
              >
                <th className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                  {entry.name}
                </th>
                <td className="px-6 py-4">{entry.amount}</td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4">{entry.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentStatus;