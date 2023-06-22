import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const SharedLayout = () => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <section>
        <Outlet />
      </section>
    </div>
  );
};

export default SharedLayout;
