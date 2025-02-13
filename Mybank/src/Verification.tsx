import React, { useState } from "react";

const Verification: React.FC = () => {
    const [mobile, setMobile] = useState<string>("");
    const [idNumber, setIdNumber] = useState<string>("");
    const [error, setError] = useState<string>("");
  
    const handleVerify = (e: React.FormEvent) => {
      e.preventDefault();
      if (!/^[0-9]{10}$/.test(mobile)) {
        setError("Mobile number must be exactly 10 digits.");
        return;
      }
      if (!/^[0-9]{13}$/.test(idNumber)) {
        setError("ID number must be exactly 13 digits.");
        return;
      }
      setError("Verification Successful!");
    };
  
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white text-blue-500">
        <h2 className="text-2xl font-bold mb-4">User Verification</h2>
        <form className="bg-blue-100 p-6 rounded shadow-md" onSubmit={handleVerify}>
          <input
            type="text"
            placeholder="Mobile Number (10 digits)"
            className="border p-2 mb-2 w-full"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="ID Number (13 digits)"
            className="border p-2 mb-2 w-full"
            value={idNumber}
            onChange={(e) => setIdNumber(e.target.value)}
            required
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full mt-2">
            Verify
          </button>
        </form>
      </div>
    );
  };

  export default Verification