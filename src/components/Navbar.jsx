import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="w-full bg-white shadow-sm px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          HackBuddy
        </Link>


        {/* Menu */}
        <div className="flex items-center gap-6">

        <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">
          Home
        </Link>

          <Link
            to="/allteams"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Teams
          </Link>

          {token ? (
            <>
              <Link
                to="/my-profile"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Profile
              </Link>

              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-md font-medium hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
