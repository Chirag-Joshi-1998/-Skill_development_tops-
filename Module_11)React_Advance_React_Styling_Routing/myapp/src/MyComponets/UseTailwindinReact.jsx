import React from "react";

const UseTailwindinReact = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Welcome to Tailwind</h2>
        <p className="text-gray-600 mt-2">This is a simple Tailwind-styled component.</p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Click Me
        </button>
      </div>
    </div>
  );
};

export default UseTailwindinReact;
