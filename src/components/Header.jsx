import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex flex-row justify-between p-5 bg-red-700">
      <Link to="/">React Events</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Header;
