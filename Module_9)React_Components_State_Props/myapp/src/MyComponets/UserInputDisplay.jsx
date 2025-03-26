import { useState } from "react";

// Component 1: User Input Display
export function UserInputDisplay() {
  const [text, setText] = useState("");
  return (
    <div className="p-4 border rounded shadow-md w-64">
      <input
        type="text"
        className="border p-2 w-full"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
      />
      <h1 className="mt-4 text-xl font-bold">{text}</h1>
    </div>
  );
}


