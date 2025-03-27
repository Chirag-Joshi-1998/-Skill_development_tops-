

import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        case "reset":
            return initialState;
        default:
            throw new Error("Unknown action type");
    }
}

const ForUseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="flex flex-col items-center p-4 border rounded-lg shadow-lg w-64">
            <h2 className="text-xl font-bold">Counter: {state.count}</h2>
            <div className="flex gap-2 mt-4">
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                    onClick={() => dispatch({ type: "increment" })}
                >
                    Increment
                </button>
                <button
                    className="px-4 py-2 bg-red-500 text-white rounded-lg"
                    onClick={() => dispatch({ type: "decrement" })}
                >
                    Decrement
                </button>
                <button
                    className="px-4 py-2 bg-gray-500 text-white rounded-lg"
                    onClick={() => dispatch({ type: "reset" })}
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default ForUseReducer;
