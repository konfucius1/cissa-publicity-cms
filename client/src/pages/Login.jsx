import { Link } from 'react-router-dom';
import Logo from '../assets/cissa-logo.svg';

const Login = () => {
  return (
    <div className="flex h-screen">
      <div className="flex justify-center items-center w-1/2 bg-neutral-900">
        <img src={Logo} alt="Logo" className="w-80 h-28" />
      </div>
      <div className="flex justify-center items-center w-1/2">
        <div className="flex flex-col justify-center space-y-3">
          <h2 className="text-4xl font-semibold">Welcome back!</h2>
          <p className="text-base">Manage content with the Publicity team</p>
          <input
            type="text"
            placeholder="Email"
            className="input input-bordered w-96 bg-neutral-100/50"
          />
          <input
            type="text"
            placeholder="Password"
            className="input input-bordered w-96 bg-neutral-100/50"
          />
          <button className="btn w-96 inline-block bg-neutral-900 text-white">
            Login
          </button>
          <div>
            <Link to="dashboard">
              <button className="btn w-96 inline-block">Demo</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
