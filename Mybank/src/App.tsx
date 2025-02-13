import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Home from "./Home";
import Signup from "./Signup";
import Verification from "./Verification";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify" element={<Verification />} />
      </Routes>
    </Router>
  );
};

export default App
