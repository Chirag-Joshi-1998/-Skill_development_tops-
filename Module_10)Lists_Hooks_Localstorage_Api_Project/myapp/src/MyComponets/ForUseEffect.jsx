import React,{useState,useEffect} from 'react'

export default function ForUseEffect() {
     const [count,setCount]=useState(0)
     useEffect(()=>{console.log("Componets Mounted");
     },[count])
     function Updatecount()
     {
        setCount(count+1)
     }
  return (
    <div>
      <h1>Button click {count} times</h1>
      <button onClick={Updatecount}>Click</button>
    </div>
  )
}
