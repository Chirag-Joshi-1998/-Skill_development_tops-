import React, { useState } from "react";

const StateUpdater = () => {
  // State for array
  const [items, setItems] = useState(["Item 1", "Item 2"]);
  // State for object
  const [user, setUser] = useState({ name: "John Doe", age: 25 });

  // Function to update array
  const addItem = () => {
    setItems([...items, `Item ${items.length + 1}`]);
  };

  // Function to update object
  const updateUser = () => {
    setUser((prevUser) => ({ ...prevUser, age: prevUser.age + 1 }));
  };

  return (
    <div>
      <h2>Updating Array in State</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={addItem}>Add Item</button>

      <h2>Updating Object in State</h2>
      <p>
        Name: {user.name} | Age: {user.age}
      </p>
      <button onClick={updateUser}>Increase Age</button>
    </div>
  );
};

export default StateUpdater;
