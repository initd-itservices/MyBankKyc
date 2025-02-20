import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Header from "./Header";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <Header />
      <div className="home-content">
        <h1>Welcome to MyBank</h1>
        <Link to="/verify" className="button">
          Sign Up
        </Link>
        <Link to="/signin" className="button">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Home;
