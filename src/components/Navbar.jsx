import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const Navbar = () => {
  const { user, loading, logoutUser } = useContext(AuthContext);

  return (
    <div className="navbar bg-base-100">
      <div className="z-50 navbar-start">
        <div className="dropdown">
          <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="0"
            className="menu menu-sm gap-1 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/queries">Queries</NavLink>
            </li>
            {loading ? (
              <span className="loading loading-ring loading-lg"></span>
            ) : (
              <>
                {user ? (
                  <>
                    <li>
                      <NavLink to="/recommendations-for-me">
                        Recommendations For Me
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/my-queries">My Queries</NavLink>
                    </li>
                    <li>
                      <NavLink to="/my-recommendations">
                        My recommendations{" "}
                      </NavLink>
                    </li>
                    <button
                      onClick={() => logoutUser()}
                      className="btn btn-primary"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <li>
                      <NavLink to="/login">Login</NavLink>
                    </li>
                    <li>
                      <NavLink to="/sign-up">Sign Up</NavLink>
                    </li>
                  </>
                )}
              </>
            )}
          </ul>
        </div>
        <Link to="/">
          <img src={logo} alt="logo" className="w-[120px]" />
        </Link>
      </div>
      <div className="z-50 hidden navbar-center lg:flex">
        <ul className="gap-5 px-1 menu menu-horizontal">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/queries">Queries</NavLink>
          </li>
          {user && (
            <>
              <li>
                <NavLink to="/recommendations-for-me">
                  Recommendations For Me
                </NavLink>
              </li>
              <li>
                <NavLink to="/my-queries">My Queries</NavLink>
              </li>
              <li>
                <NavLink to="/my-recommendations">My recommendations </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        <ul className="gap-5 px-1 menu menu-horizontal">
          {loading ? (
            <span className="loading loading-ring loading-lg"></span>
          ) : (
            <>
              {user ? (
                <div>
                  <details className="z-50 dropdown dropdown-end">
                    <summary className="bg-white border-none rounded-full shadow-none outline-none hover:bg-white btn">
                      <img
                        src={user?.photoURL}
                        alt="user"
                        className="w-10 h-10 border-2 rounded-full border-zinc-700"
                      />
                    </summary>

                    <ul
                      tabIndex={0}
                      className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52"
                    >
                      <li className="my-2 btn">Profile</li>
                      <li>
                        <button
                          onClick={() => logoutUser()}
                          className="btn btn-primary"
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </details>
                </div>
              ) : (
                <div className="hidden gap-5 md:flex">
                  <li>
                    <NavLink className="btn btn-primary" to="/login">
                      Login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="btn btn-warning" to="/sign-up">
                      Sign Up
                    </NavLink>
                  </li>
                </div>
              )}
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
