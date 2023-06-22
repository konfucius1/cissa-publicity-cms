import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Link to="dashboard">
        <button className="btn">Login</button>
      </Link>
    </div>
  );
};

export default Login;
