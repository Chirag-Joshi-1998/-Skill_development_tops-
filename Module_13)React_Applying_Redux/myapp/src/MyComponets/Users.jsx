import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser, fetchUsers, updateUser } from "../store/userSlice";
import { useState } from "react";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.list);
  const [name, setName] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      dispatch(updateUser({ id: editingId, name }));
      setEditingId(null);
    } else {
      dispatch(addUser({ name }));
    }
    setName("");
  };

  return (
    <div>
      <h1>CRUD with React-Redux</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
          required
        />
        <button type="submit">{editingId ? "Update" : "Add"}</button>
      </form>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
            <button onClick={() => setEditingId(user.id)}>Edit</button>
            <button onClick={() => dispatch(deleteUser(user.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
