import React from "react";
import { Link } from "react-router-dom";

// Home Page Component
const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-500 text-white">
      <h1 className="text-4xl font-bold">Welcome to MyBank</h1>
      <Link to="/signup" className="mt-4 bg-white text-blue-500 px-6 py-2 rounded">
        Sign Up
      </Link>
    </div>
  );
};

export default Home