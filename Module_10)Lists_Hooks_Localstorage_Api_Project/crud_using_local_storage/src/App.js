import React, { useState, useEffect } from 'react';

function App() {
  // Get items from localStorage or initialize as empty array if none
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem('items');
    return savedItems ? JSON.parse(savedItems) : [];
  });
  
  const [input, setInput] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState('');

  // Save items to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  // Create Item
  const addItem = () => {
    if (input) {
      const newItems = [...items, input];
      setItems(newItems);
      setInput('');
    }
  };

  // Update Item
  const updateItem = () => {
    const updatedItems = [...items];
    updatedItems[editIndex] = editValue;
    setItems(updatedItems);
    setEditValue('');
    setEditIndex(null);
  };

  // Delete Item
  const deleteItem = (index) => {
    const updatedItems = items.filter((item, i) => i !== index);
    setItems(updatedItems);
  };

  // Set the value for editing
  const startEdit = (index) => {
    setEditIndex(index);
    setEditValue(items[index]);
  };

  return (
    <div className="App">
      <h1>CRUD Application with Local Storage</h1>
      
      {/* Input Field for adding or editing */}
      <input
        type="text"
        value={editIndex !== null ? editValue : input}
        onChange={(e) => {
          if (editIndex !== null) {
            setEditValue(e.target.value);
          } else {
            setInput(e.target.value);
          }
        }}
      />
      {/* Add or Update Button */}
      <button onClick={editIndex !== null ? updateItem : addItem}>
        {editIndex !== null ? 'Update' : 'Add'}
      </button>

      {/* List of Items */}
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => startEdit(index)}>Edit</button>
            <button onClick={() => deleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
