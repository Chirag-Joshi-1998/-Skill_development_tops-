import React,{useRef,useState} from 'react'

export default function ForUseRef() {
    const refElement= useRef("")
    const [name,setName]=useState("Chirag")
    console.log(refElement);
    function Reset(){
        setName("")
        refElement.current.focus()
    }
    
  return (
    <div>
      <h1>We learn UseRef</h1>
      <input ref={refElement} type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
      <button onClick={Reset}>Reset</button>
    </div>
  )
}
