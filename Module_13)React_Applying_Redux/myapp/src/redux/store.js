import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice"; 
import userReducer from "../store/userSlice";

const store = configureStore({
  reducer: {
    users: userReducer,

    counter: counterReducer, 
  },
});

export default store; 
