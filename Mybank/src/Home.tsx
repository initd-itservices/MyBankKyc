import React from "react";
import { Link } from "react-router-dom";
import "./Style/Home.css";
import Header from "./Header";
// import postbank from "./assets/postbank.png"

const Home: React.FC = () => {
  return (
    
    <div className="home-container">
      <div className="line"/>
      <Header />
      <div className="home-content">
        <h1> <font color="#267E4A">Welcome to</font> <font color="#DF2041">MyBank</font></h1>
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
