import { Link } from 'react-router-dom';
import Logo from '../assets/cissa-logo.svg';

const Sidebar = () => {
  const Links = [
    { name: 'Dashboard', link: '/dashboard' },
    { name: 'Live Page', link: '/live' },
    { name: 'Posts', link: '/posts' },
    { name: 'Jobs', link: '/jobs' },
    { name: 'Manage Events', link: '/events' },
  ];

  return (
    <div className="drawer lg:drawer-open max-w-fit h-full">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side bg-neutral-900 p-8">
        <Link to="/">
          <img src={Logo} alt="CISSA-Logo" className="h-10 w-21 mt-4" />
        </Link>
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu mt-8 bg-neutral-900 w-72">
          {Links.map(({ name, link }) => (
            <li key={name}>
              <Link
                to={link}
                className="text-lg font-normal menu-title text-white "
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
