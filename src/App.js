import React from "react";
import logo from "./images/logo.svg";
import "./App.css";
const todoList ={
  task: "Laundry",
  task2:"Feed the children",
  task3:"Bake cookies for class",
  task4:"DRINK"
};
let taskStatus =[
  {
completed: false,
reoccuring: false
}
];
function App() {
  return (
    <>
   
      <h1>Today's Todos</h1>
      <input type="text" placeholder="Add Todo"/>

      <h1>Add a note</h1>
      <input type="text" />
      <button>Save</button>
      <button>Save & View List</button>
      <ol>
       <li><input type="checkbox" checked={todoList.completed}/>{todoList.task}</li>
       
       
        <li><input type="checkbox"/>{todoList.task2}</li>
        <li><input type="checkbox"/>{todoList.task3}</li>
        <li><input type="checkbox"/>{todoList.task4}</li>
      </ol>
      <button>Save</button>
    </>
  );
}

export default App;
