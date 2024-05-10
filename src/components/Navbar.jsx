import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="container mx-auto bg-transparent">
      <div className="navbar">
        <div className="flex-1 z-50">
          <img src={logo} alt="logo" className="w-[120px] " />
        </div>
        <div className="flex-none z-50">
          <ul className="menu menu-horizontal gap-5 px-1">
            <li>
              <NavLink to="/" className={`text-white`}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/queries" className={`text-white`}>
                Queries
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className={`text-white`}>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/sign-up" className={`text-white`}>
                Sign Up
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
