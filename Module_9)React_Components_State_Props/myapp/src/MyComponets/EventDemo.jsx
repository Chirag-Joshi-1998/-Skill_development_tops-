import { useState } from "react";

export default function EventDemo() {
  const [inputValue, setInputValue] = useState("");
  const [keyEvent, setKeyEvent] = useState("");
  const [hoverText, setHoverText] = useState("Hover over me");

  const handleClick = () => {
    alert("Button clicked!");
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted with input: ${inputValue}`);
  };

  const handleKeyDown = (e) => {
    setKeyEvent(`Key Down: ${e.key}`);
  };

  const handleKeyUp = (e) => {
    setKeyEvent(`Key Up: ${e.key}`);
  };

  const handleMouseEnter = () => {
    setHoverText("Mouse Entered!");
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-primary shadow-lg rounded-xl">
      <h2 className="text-xl font-bold mb-4">React Event Demo</h2>
      
      <button 
        className="px-4 py-2 bg-blue-500 text-primary rounded hover:bg-blue-600"
        onClick={handleClick}
      >
        Click Me
      </button>
      
      <form onSubmit={handleSubmit} className="mt-4">
        <input 
          type="text" 
          value={inputValue} 
          onChange={handleChange} 
          onKeyDown={handleKeyDown} 
          onKeyUp={handleKeyUp}
          className="border p-2 w-full rounded"
          placeholder="Type something..."
        />
        <button 
          type="submit" 
          className="mt-2 px-4 py-2 bg-green-500 text-primary rounded hover:bg-green-600"
        >
          Submit
        </button>
      </form>
      
      {keyEvent && <p className="mt-2 text-gray-600">{keyEvent}</p>}
      
      <div 
        className="mt-4 p-4 bg-gray-100 text-center rounded"
        onMouseEnter={handleMouseEnter}
      >
        {hoverText}
      </div>
    </div>
  );
}
