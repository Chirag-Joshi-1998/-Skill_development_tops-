import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./redux/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center space-y-4 p-4 border rounded shadow-lg w-64 mx-auto mt-10">
      <h1 className="text-2xl font-bold">Counter: {count}</h1>
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={() => dispatch(increment())}>+</button>
        <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={() => dispatch(decrement())}>-</button>
        <button className="px-4 py-2 bg-gray-500 text-white rounded" onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
