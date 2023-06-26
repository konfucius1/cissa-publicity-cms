import CreateNewEvent from '../components/CreateNewEvent';
import FilterByDaysButton from '../components/FilterByDaysButton';
import MockData from '../mock-data/MockDataDashboard';

const Dashboard = () => {
  return (
    <>
      <div className="px-8 my-16">
        <h1 className="font-semibold text-4xl py-2">Dashboard</h1>
        <div className="join py-2">
          <FilterByDaysButton value={7} />
          <FilterByDaysButton value={14} />
          <FilterByDaysButton value={30} />
        </div>
        <h2 className="font-semibold text-xl pt-2">Start creating content</h2>
        <div className="divider"></div>
        <CreateNewEvent />
        <h2 className="font-semibold text-xl pt-4">
          Recently published events
        </h2>
        <MockData />
      </div>
    </>
  );
};

export default Dashboard;
