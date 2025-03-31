import React, { useState } from "react";

import { getDatabase,ref,set } from "firebase/database";
import app from "../firebaseConfig";


const db =getDatabase(app);
const Login = () => {
    const  putData=()=>{
        set(ref(db,'users/chirag'),{
            id:1,
            name:"Chirag",
            age:44,
            email:"chiragjoshi.tops@gmail.com"

        })
    }


 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
    <button onClick={putData} >Check</button>

        
      </div>
    </div>
  );
};

export default Login;