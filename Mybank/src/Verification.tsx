import React, { useState } from "react";
import axios from "axios";

const MOBILE_VALIDATION_API = "https://your-api-endpoint.com/validate-mobile";
const ID_VALIDATION_API = "https://testapi.smileidentity.com/v2/verify";

interface ValidationResponse {
  valid: boolean;
  message: string;
  network?: string;
}

const Verification: React.FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [mobile, setMobile] = useState<string>("");
  const [idNumber, setIdNumber] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const validateMobileFormat = (mobile: string): boolean => {
    return /^((27)|0)[6-8][0-9]{8}$/.test(mobile);
  };

  const validateIdFormat = (id: string): boolean => {
    return /^[0-9]{13}$/.test(id);
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!validateMobileFormat(mobile)) {
      setError("Invalid South African mobile number format.");
      return;
    }
    if (!validateIdFormat(idNumber)) {
      setError("ID number must be exactly 13 digits.");
      return;
    }

    try {
      const mobileResponse = await axios.post<ValidationResponse>(MOBILE_VALIDATION_API, { mobileNumber: mobile });
      if (!mobileResponse.data.valid) {
        setError(mobileResponse.data.message);
        return;
      }

      const idResponse = await axios.post<ValidationResponse>(ID_VALIDATION_API, { idNumber });
      if (!idResponse.data.valid) {
        setError(idResponse.data.message);
        return;
      }

      setSuccess("Verification Successful!");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setError("Error verifying details. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="w-full bg-red-600 text-white text-center py-4 text-2xl font-bold">
        User Verification
      </header>
      <form className="bg-white p-6 rounded-lg shadow-md w-96 mt-6" onSubmit={handleVerify}>
        <input
          type="text"
          placeholder="First Name"
          className="border p-2 mb-2 w-full rounded"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          className="border p-2 mb-2 w-full rounded"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="South African ID Number"
          className="border p-2 mb-2 w-full rounded"
          value={idNumber}
          onChange={(e) => setIdNumber(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Mobile Number (e.g., 0821234567)"
          className="border p-2 mb-2 w-full rounded"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
        />
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        {success && <p className="text-green-500 text-sm mt-2">{success}</p>}
        <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded w-full mt-2 hover:bg-red-700">
          Verify
        </button>
      </form>
    </div>
  );
};

export default Verification;
