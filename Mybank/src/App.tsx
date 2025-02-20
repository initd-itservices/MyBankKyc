import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Home from "./Home";
import SignIn from "./SignIn";
import Verification from "./Verification";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/verify" element={<Verification />} />
      </Routes>
    </Router>
  );
};

export default App
