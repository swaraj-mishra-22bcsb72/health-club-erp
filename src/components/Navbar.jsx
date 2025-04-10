import React from "react";

const Navbar = () => {
  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-3xl font-extrabold tracking-wide bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          ELITE EDGE FITNESS
        </h1>
        <nav>
          <ul className="flex space-x-8">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="relative text-lg font-medium hover:text-gray-300 transition duration-300"
                >
                  {item}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-300 transition-all duration-300 hover:w-full"></span>
                </a>
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
