import React, { useState, useMemo } from "react";

const slowFunction = (num) => {
  console.log("Computing slow function...");
  for (let i = 0; i < 1000000000; i++) {} // Simulating heavy computation
  return num * 2;
};

const ForUseMemo = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(1);

  const computedValue = useMemo(() => slowFunction(input), [input]);

  return (
    <div className="flex flex-col items-center p-4 border rounded-lg shadow-lg w-64">
      <h2 className="text-xl font-bold">Count: {count}</h2>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-lg mt-2"
        onClick={() => setCount(count + 1)}
      >
        Increment Count
      </button>
      <h2 className="text-xl font-bold mt-4">Computed: {computedValue}</h2>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(parseInt(e.target.value) || 1)}
        className="mt-2 p-2 border rounded-lg"
      />
    </div>
  );
};

export default ForUseMemo;

