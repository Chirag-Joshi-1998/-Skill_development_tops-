import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, NavLink, useParams,Navigate  } from "react-router-dom";
import NotFound from "./NotFound";

const Home = () => <h2 className="text-center text-2xl">Home Page</h2>;
const About = () => <h2 className="text-center text-2xl">About Page</h2>;
const Contact = () => <h2 className="text-center text-2xl">Contact Page</h2>;

const UserProfile = () => {
  const { username } = useParams();
  return <h2 className="text-center text-2xl">User Profile: {username}</h2>;
};
const ProtectedRoute = ({ component: Component }) => {
  const isAuthenticated = localStorage.getItem("auth") === "true";
  return isAuthenticated ? <Component /> : <Navigate to="/" />;
};
const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 flex justify-center gap-4 text-white">
      <NavLink to="/" className={({ isActive }) => (isActive ? "font-bold" : "")}>Home</NavLink>
      <NavLink to="/about" className={({ isActive }) => (isActive ? "font-bold" : "")} >About</NavLink>
      <NavLink to="/contact" className={({ isActive }) => (isActive ? "font-bold" : "")}>Contact</NavLink>
      <NavLink to="/user/john" className={({ isActive }) => (isActive ? "font-bold" : "")}>John's Profile</NavLink>
    </nav>
  );
};


const UseRouter = () => {
  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<ProtectedRoute component={About} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/:username" element={<UserProfile />} />
          <Route path="*" element={<NotFound/>} />

        </Routes>
      </div>
    </Router>
  );
};

export default  UseRouter;
