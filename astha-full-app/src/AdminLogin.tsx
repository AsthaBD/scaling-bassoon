
import { useState } from "react";

export const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (
      email === import.meta.env.VITE_ADMIN_USER &&
      pass === import.meta.env.VITE_ADMIN_PASS
    ) {
      localStorage.setItem("astha-admin", "true");
      window.location.href = "/admin/dashboard";
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-xl font-bold mb-4 text-center">Admin Login</h2>
        <input
          type="email"
          placeholder="Admin Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 border p-2 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          className="w-full mb-4 border p-2 rounded"
        />
        {error && <p className="text-red-500 mb-2 text-sm">{error}</p>}
        <button
          onClick={handleLogin}
          className="bg-orange-500 text-white w-full py-2 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
};
