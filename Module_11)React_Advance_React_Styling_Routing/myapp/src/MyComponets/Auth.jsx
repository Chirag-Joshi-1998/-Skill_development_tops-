import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Auth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "password") {
      setIsAuthenticated(true);
    } else {
      alert("Invalid credentials");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername("");
    setPassword("");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ width: "350px" }}>
        {isAuthenticated ? (
          <div className="text-center">
            <h2 className="mb-4">Welcome, {username}!</h2>
            <button className="btn btn-danger w-100" onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <h2 className="text-center mb-4">Login</h2>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="btn btn-success w-100" onClick={handleLogin}>Login</button>
          </div>
        )}
      </div>
    </div>
  );
}
