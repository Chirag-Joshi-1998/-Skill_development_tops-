import React, { useState } from "react"; 
import { gql, useMutation } from "@apollo/client"; 


const ADD_ITEM = gql`
  mutation AddItem($name: String!) {
    addItem(name: $name) {
      id
      name
    }
  }
`;
const ItemForm = () => {
    const [name, setName] = useState("");
    const [addItem] = useMutation(ADD_ITEM, {
      refetchQueries: ["GetItems"],
    });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      addItem({ variables: { name } });
      setName("");
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter item name"
        />
        <button type="submit">Add Item</button>
      </form>
    );
  };
  
  export default ItemForm;