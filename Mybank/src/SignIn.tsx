import React from "react";
import { Link } from "react-router-dom";
import "./Style/SignIn.css";
import Header from "./Header"
import Button from "./Components/Button";

const SignIn: React.FC = () => {
  return (
    <div>
      <h1><font color="#267E4A">Sign</font><font color="#DF2041"> In</font></h1>
        <div className="signin-container">
          <div className="signin-content">
            <div className="sign-in-form">
            <form>
              <input className="input" type="password" placeholder="Password" required />
              <input className="input" type="email" placeholder="Email" required />
              <Button text={'Sign In'} onClick={function (): void {
          throw new Error("Function not implemented.");
        } }/>
            </form>
            </div>
            <Link to="/verify">Don't have an account? Sign Up</Link>
          </div>
        </div>
    </div>
  );
};

export default SignIn;
