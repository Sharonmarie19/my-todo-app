import React from "react"
import { useState } from "react";

function Todoform (){
    const [input, setInput] = useState("");

    const handleChange = e =>{
        setInput(e.target.value);
    };

    const handleSubmit = e =>{
        e.preventsDefault();
        PaymentResponse.onSubmit({
            id:Math.floor(Math.random()* 1000),
            text: input
        });
       setInput(""); 
    };
return(
<form className="input-form" onSubmit={handleSubmit}>
  <input 
  type="text" 
  placeholder="Add task" 
  value={input}
  name="text" 
  className="todo-input"
  onChange={handleChange}
  />
  <button className="todo-button">+</button>
  </form>
)
 
}


export default Todoform;

