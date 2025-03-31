import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const FakeJsonAPI = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container mt-4">
      <button onClick={fetchUsers} className="btn btn-primary mb-3">Refresh Data</button>
      <div className="row">
        {users.map((user) => (
          <div key={user.id} className="col-md-4 mb-3">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">📧 {user.email}</p>
                <p className="card-text">📍 {user.address.city}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FakeJsonAPI;