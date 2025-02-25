import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthProvider";

const Navbar = () => {
  const { user, loading, logoutUser } = useContext(AuthContext);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container flex items-center justify-between px-28 mx-auto">
        {/* Logo */}
        {/* <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="logo" className="w-[120px] h-auto" />
        </Link> */}

        {/* Desktop Navigation */}
        <div className="hidden lg:flex">
          <ul className="flex items-center space-x-8">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/queries">Queries</NavItem>

            {user && (
              <>
                <NavItem to="/recommendations-for-me">Recommendations</NavItem>
                <NavItem to="/my-queries">My Queries</NavItem>
                <NavItem to="/my-recommendations">My Recommendations</NavItem>
              </>
            )}
          </ul>
        </div>

        {/* User Auth Section */}
        <div className="hidden lg:flex items-center space-x-4">
          {loading ? (
            <div className="w-8 h-8 border-t-2 border-b-2 border-primary rounded-full animate-spin"></div>
          ) : user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                className="flex items-center gap-2 cursor-pointer group"
              >
                <div className="relative">
                  <img
                    src={user?.photoURL}
                    alt="user"
                    className="object-cover w-10 h-10 transition-all duration-300 border-2 rounded-full border-primary group-hover:border-secondary"
                  />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full dark:border-gray-800"></div>
                </div>
                <div className="hidden md:block">
                  <p className="text-sm font-semibold">
                    {user?.displayName || "User"}
                  </p>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="p-3 mt-2 shadow-lg dropdown-content menu bg-base-100 rounded-box w-52 border border-gray-200 dark:border-gray-700"
              >
                <li className="rounded-md hover:bg-base-200">
                  <Link
                    to="/profile"
                    className="flex items-center gap-3 px-4 py-2"
                  >
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
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <span>Profile</span>
                  </Link>
                </li>
                <li className="rounded-md hover:bg-base-200">
                  <button
                    onClick={logoutUser}
                    className="flex items-center gap-3 px-4 py-2 text-red-500"
                  >
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
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                    <span>Logout</span>
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex items-center space-x-3">
              <Link
                to="/login"
                className="px-4 py-2 font-medium text-gray-700 transition-colors duration-300 border-2 rounded-full border-primary hover:bg-primary hover:text-white dark:text-white dark:hover:text-white"
              >
                Login
              </Link>
              <Link
                to="/sign-up"
                className="px-4 py-2 font-medium text-white transition-colors duration-300 rounded-full bg-primary hover:bg-primary-focus"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${mobileMenuOpen ? "block" : "hidden"}`}>
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <ul className="flex flex-col space-y-3">
            <MobileNavItem to="/" onClick={() => setMobileMenuOpen(false)}>
              Home
            </MobileNavItem>
            <MobileNavItem
              to="/queries"
              onClick={() => setMobileMenuOpen(false)}
            >
              Queries
            </MobileNavItem>

            {user && (
              <>
                <MobileNavItem
                  to="/recommendations-for-me"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Recommendations For Me
                </MobileNavItem>
                <MobileNavItem
                  to="/my-queries"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  My Queries
                </MobileNavItem>
                <MobileNavItem
                  to="/my-recommendations"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  My Recommendations
                </MobileNavItem>
              </>
            )}

            {/* Mobile Auth Buttons */}
            {loading ? (
              <div className="flex justify-center">
                <div className="w-8 h-8 border-t-2 border-b-2 border-primary rounded-full animate-spin"></div>
              </div>
            ) : user ? (
              <>
                <div className="flex items-center gap-3 p-2">
                  <img
                    src={user?.photoURL}
                    alt="user"
                    className="object-cover w-10 h-10 border-2 rounded-full border-primary"
                  />
                  <p className="font-medium">{user?.displayName || "User"}</p>
                </div>
                <li className="pt-2 mt-2 border-t border-gray-200 dark:border-gray-700">
                  <Link
                    to="/profile"
                    className="flex items-center gap-3 p-2 rounded-md hover:bg-base-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
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
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <span>Profile</span>
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => {
                      logoutUser();
                      setMobileMenuOpen(false);
                    }}
                    className="flex items-center w-full gap-3 p-2 text-red-500 rounded-md hover:bg-base-200"
                  >
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
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                    <span>Logout</span>
                  </button>
                </li>
              </>
            ) : (
              <div className="flex flex-col gap-3 pt-2 mt-2 border-t border-gray-200 dark:border-gray-700">
                <Link
                  to="/login"
                  className="w-full py-2 font-medium text-center text-gray-700 transition-colors duration-300 border-2 rounded-full border-primary hover:bg-primary hover:text-white dark:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/sign-up"
                  className="w-full py-2 font-medium text-center text-white transition-colors duration-300 rounded-full bg-primary hover:bg-primary-focus"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            )}

            {/* Mobile Theme Toggle */}
            <div className="flex justify-center pt-2 mt-2 border-t border-gray-200 dark:border-gray-700">
              <label className="swap swap-rotate">
                <input
                  type="checkbox"
                  className="theme-controller"
                  value="dark"
                />
                <svg
                  className="w-6 h-6 fill-current swap-on"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>
                <svg
                  className="w-6 h-6 fill-current swap-off"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

// Desktop NavItem Component
const NavItem = ({ to, children }) => (
  <li>
    <NavLink
      to={to}
      className={({ isActive }) =>
        `relative px-3 py-2 text-base font-medium transition-colors duration-300 hover:text-primary ${
          isActive ? "text-primary" : "text-gray-700 dark:text-gray-200"
        }`
      }
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
    </NavLink>
  </li>
);

// Mobile NavItem Component
const MobileNavItem = ({ to, children, onClick }) => (
  <li>
    <NavLink
      to={to}
      className={({ isActive }) =>
        `block px-3 py-2 text-base font-medium transition-colors duration-300 rounded-md ${
          isActive
            ? "bg-primary/10 text-primary"
            : "text-gray-700 hover:bg-base-200 dark:text-gray-200"
        }`
      }
      onClick={onClick}
    >
      {children}
    </NavLink>
  </li>
);

export default Navbar;
