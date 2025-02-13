import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      navigate("/verify");
    };
  
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white text-blue-500">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <form className="bg-blue-100 p-6 rounded shadow-md" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="border p-2 mb-2 w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-2 mb-2 w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
            Sign Up
          </button>
        </form>
      </div>
    );
  };

  export default Signup