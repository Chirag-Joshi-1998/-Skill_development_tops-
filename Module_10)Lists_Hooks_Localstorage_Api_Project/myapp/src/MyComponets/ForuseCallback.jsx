import React, { useState, useCallback } from "react";

const Button = React.memo(({ handleClick }) => {
  console.log("Button component re-rendered");
  return (
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded-lg"
      onClick={handleClick}
    >
      Click Me
    </button>
  );
});

const ForuseCallback = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div className="flex flex-col items-center p-4 border rounded-lg shadow-lg w-64">
      <h2 className="text-xl font-bold">Count: {count}</h2>
      <Button handleClick={increment} />
    </div>
  );
};

export default ForuseCallback;
