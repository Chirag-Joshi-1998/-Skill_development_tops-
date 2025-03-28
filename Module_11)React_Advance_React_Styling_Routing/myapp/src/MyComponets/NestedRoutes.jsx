import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, useNavigate, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h2 className="text-center text-2xl">Dashboard</h2>
      <nav className="flex justify-center gap-4 mt-4">
        <NavLink to="stats" className={({ isActive }) => (isActive ? "font-bold" : "")}>Stats</NavLink>
        <NavLink to="settings" className={({ isActive }) => (isActive ? "font-bold" : "")}>Settings</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

const Stats = () => <h3 className="text-center mt-4">Dashboard Stats</h3>;
const Settings = () => <h3 className="text-center mt-4">Dashboard Settings</h3>;

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="text-center">
      <h2 className="text-2xl">Home Page</h2>
      <button onClick={() => navigate("/dashboard")} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
        Go to Dashboard
      </button>
    </div>
  );
};

const NestedRoutes = () => {
  return (
    <Router>
      <nav className="bg-blue-500 p-4 flex justify-center gap-4 text-white">
        <NavLink to="/" className={({ isActive }) => (isActive ? "font-bold" : "")}>Home</NavLink>
        <NavLink to="/dashboard" className={({ isActive }) => (isActive ? "font-bold" : "")}>Dashboard</NavLink>
      </nav>
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="stats" element={<Stats />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default NestedRoutes;
