import { useState } from "react";
export function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const calculate = (operator) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    if (isNaN(n1) || isNaN(n2)) return;

    let res;
    switch (operator) {
      case "+":
        res = n1 + n2;
        break;
      case "-":
        res = n1 - n2;
        break;
      case "*":
        res = n1 * n2;
        break;
      case "/":
        res = n2 !== 0 ? n1 / n2 : "Error";
        break;
      default:
        res = "Invalid operation";
    }
    setResult(res);
  };

  return (
    <div className="p-4 border rounded shadow-md w-64">
      <input
        type="number"
        className="border p-2 w-full"
        placeholder="Enter first number"
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="number"
        className="border p-2 w-full mt-2"
        placeholder="Enter second number"
        onChange={(e) => setNum2(e.target.value)}
      />
      <div className="mt-2 flex gap-2">
        {["+", "-", "*", "/"].map((op) => (
          <button
            key={op}
            className="p-2 bg-blue-500 text-white rounded"
            onClick={() => calculate(op)}
          >
            {op}
          </button>
        ))}
      </div>
      <h2 className="mt-4 text-xl font-bold">Result: {result}</h2>
    </div>
  );
}
