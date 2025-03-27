import React, { createContext, useContext } from 'react'
import ChildA from './ChildA'
//What is useContext hook?
// Create, Provider useContext

const data = createContext()
const data1 = createContext()

 function ForuseContext() {
    const name = "Chirag"
    const gender = "Male"


    return (
        <>
            <data.Provider value={name}>
                <data1.Provider value={gender}>
                    <ChildA/>
                </data1.Provider>
            </data.Provider>

        </>
    )
}
export default ForuseContext;
export {data,data1}