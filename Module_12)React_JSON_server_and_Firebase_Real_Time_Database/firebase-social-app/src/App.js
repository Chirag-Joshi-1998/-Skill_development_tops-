import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./MyComponets/Register";
import Home from "./MyComponets/Home";
import Login from "./MyComponets/Login";
import Profile from "./MyComponets/Profile";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
