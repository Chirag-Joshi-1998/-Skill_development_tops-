import { useState } from "react";
export function ToggleDiv() {
    const [visible, setVisible] = useState(true);
    return (
      <div className="p-4 border rounded shadow-md w-64">
        <button
          className="p-2 bg-green-500 text-white rounded"
          onClick={() => setVisible(!visible)}
        >
          {visible ? "Hide" : "Show"} Content
        </button>
        {visible && <div className="mt-4 p-2 bg-gray-200">This is a toggleable div!</div>}
      </div>
    );
  }
  