import { useState } from "react";

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">
          {isSignUp ? "Sign Up" : "Login"}
        </h2>

        <form className="flex flex-col space-y-4">
          {isSignUp && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-2 bg-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          )}

          <input
            type="email"
            placeholder="Email"
            className="p-2 bg-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="p-2 bg-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />

          {isSignUp && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="p-2 bg-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          )}

          <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 rounded">
            {isSignUp ? "Sign Up" : "Login"}
          </button>
        </form>

        <p className="text-center mt-4">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}
          <span
            className="text-yellow-500 cursor-pointer ml-1 hover:underline"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? "Login" : "Sign Up"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
