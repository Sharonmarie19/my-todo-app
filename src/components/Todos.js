
import React, { useState } from "react";
import  Todoform from "./Todoform";


function Todos(){
  const [todos, setTodos]= useState([]);

  const addTodo = todo => {
    if(!todo.text || /^\s*$/.test(todo.text)){
    return;
  }
  const newTodos = [todo, ...todos];

  setTodos(newTodos);
  console.log(...todos);
};

return(
  <div>
  <h1>Create Your Todo</h1>
  <Todoform onSubmit={addTodo}/>
  </div>
);
}



export default Todos