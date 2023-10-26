import React, { useContext, useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut();
    navigate("/");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="absolute bg-opacity-0 z-20 bg-gradient-to-tr  text-white p-4  max-w-screen-2xl mx-auto w-full">
      <div className="mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold btn-outline">Trade Snap</h1>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Link className="btn-outline" to="/">
            Home
          </Link>
          <Link className="btn-outline" to="/about">
            About Us
          </Link>
          <Link className="btn-outline" to="/contact">
            Contact
          </Link>
        </div>
        <div className="hidden md:block">
          {user ? (
            <div className="flex items-center gap-2">
              <img
                className="w-10 h-10 rounded-full"
                src={user.photoURL}
                alt={user.name}
                loading="lazy"
              />
              <button onClick={handleLogOut} className="btn-outline">
                LogOut
              </button>
            </div>
          ) : (
            <Link to="/login" className="btn-outline">
              Login
            </Link>
          )}
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-2xl">
            <FaBars />
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden text-center">
          <ul className="bg-gray-800 mt-2 p-4">
            <li className="py-2">
              <Link className="btn-outline" to="/">
                Home
              </Link>
            </li>
            <li className="py-2">
              <Link className="btn-outline" to="/about">
                About Us
              </Link>
            </li>

            <li className="py-2">
              <Link className="btn-outline" to="/contact">
                Contact
              </Link>
            </li>
            <div>
              {user ? (
                <div className="text-white">
                  <img
                    className="w-12 mx-auto rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                    src={user.photoURL}
                    alt=""
                  />
                  <button onClick={handleLogOut} className="btn-outline">
                    Logout
                  </button>
                </div>
              ) : (
                <Link to="/login">
                  <button className="btn-primary transition duration-300 ease-in-out transform hover:scale-105">
                    Login
                  </button>
                </Link>
              )}
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;