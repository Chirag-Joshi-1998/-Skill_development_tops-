import React, { useContext } from 'react'
import {data,data1} from './ForuseContext'

export default function ChildB() {
     const name=useContext(data);
     const gender=useContext(data1);
  return (
    <div>
      <h1>ChildB</h1>
      <h1>Your name is{name} youe gender is {gender}</h1>
      
    </div>
  )
}
