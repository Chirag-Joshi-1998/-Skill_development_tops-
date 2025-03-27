import { useState, useEffect } from "react";


const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error accessing localStorage", error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error("Error saving to localStorage", error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
};

// Component using useLocalStorage
const UseCustomeHook = () => {
  const [name, setName] = useLocalStorage("name", "");

  return (
    <div className="flex flex-col items-center p-4 border rounded-lg shadow-lg w-64">
      <h2 className="text-xl font-bold">Custom Hook Example</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="mt-2 p-2 border rounded-lg"
        placeholder="Enter your name"
      />
      <p className="mt-2">Stored Name: {name}</p>
    </div>
  );
};

export default UseCustomeHook;