import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const SharedLayout = () => {
  return (
    <div className="flex flex-row">
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <section>
        <Outlet />
      </section>
    </div>
  );
};

export default SharedLayout;
