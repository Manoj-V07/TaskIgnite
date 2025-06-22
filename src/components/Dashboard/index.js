import Card from './Card';
import Linechart from './Linechart';
import Piechart from './Piechart';
import PaymentStatus from './PaymentStatus';

const Dashboard = () => {
  return (
    <div className="overflow-x-hidden flex flex-col ml-28 mt-2 px-6 space-y-5">
      {/* Cards Section */}
      <div className='mr-20'>
        <Card />
      </div>

      {/* Charts Section */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="ml-36 flex-1 min-w-[300px] bg-white border border-gray-200 rounded-2xl shadow-sm dark:bg-gray-800 p-4">
          <Linechart />
        </div>
        <div className="flex-1 max-w-sm bg-white border border-gray-200 rounded-2xl shadow-sm dark:bg-gray-800 p-6">
          <Piechart />
        </div>
      </div>

      {/* Payment Status Table - moved to its own row */}
      <div className="ml-20 w-full">
        <PaymentStatus />
      </div>
    </div>
  );
};

export default Dashboard;
