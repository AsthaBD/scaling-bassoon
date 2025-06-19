
import { Hero } from "./components/Hero";
import { LanguageSwitcher } from "./components/LanguageSwitcher";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminLogin } from "./pages/AdminLogin";
import { AdminDashboard } from "./pages/AdminDashboard";

function App() {
  return (
    <BrowserRouter>
      <header className="bg-white shadow-sm p-4 flex justify-between px-6">
        <h1 className="text-2xl font-bold text-gray-900">Astha Microfinance</h1>
        <LanguageSwitcher />
      </header>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
