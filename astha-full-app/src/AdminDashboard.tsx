
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AdminDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = localStorage.getItem("astha-admin");
    if (!isAdmin) {
      navigate("/admin");
    }
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Welcome to Admin Panel</h1>
      {/* Add employee management, video uploads, etc. */}
    </div>
  );
};
