import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Contact", path: "/contact" },
    { name: "Login", path: "/login" }
  ];

  return (
    <header className="bg-gray-900 text-white shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link to="/" className="text-3xl font-extrabold tracking-wide bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          ELITE EDGE FITNESS
        </Link>
        <nav>
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`relative text-lg font-medium transition duration-300 ${
                    location.pathname === item.path 
                      ? "text-blue-400" 
                      : "text-white hover:text-gray-300"
                  }`}
                >
                  {item.name}
                  <span className={`absolute left-0 bottom-0 h-0.5 bg-blue-400 transition-all duration-300 ${
                    location.pathname === item.path ? "w-full" : "w-0 hover:w-full"
                  }`}></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <style jsx>{`
        header {
          transition: box-shadow 0.3s ease-in-out;
        }
        header:hover {
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </header>
  );
};

export default Navbar;
