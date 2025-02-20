import React from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";
import Header from "./Header"

const SignIn: React.FC = () => {
  return (
    <div className="signin-container">
      <Header />
      <div className="signin-content">
        <h1>Sign In</h1>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign In</button>
        </form>
        <Link to="/verify">Don't have an account? Sign Up</Link>
      </div>
    </div>
  );
};

export default SignIn;
