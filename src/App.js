import React, { Component } from "react";

import "./App.css";


const user = {
  name: "Sharon",
  id: 1,
  avatar: "",
};
let taskList = [
  {
    taskName: "Laundry",
    id:2,
    completed: true,
    reoccuring: false,
  },
  {
    taskName: "Feed the kids",
    id:3,
    completed: false,
    reoccuring: false,
  },
  {
    taskName: "Make cookies for the bakesale",
    id:4,
    completed: false,
    reoccuring: false,
  },
  {
    taskName: "DRINK",
    id:5,
    completed: false,
    reoccuring: false,
  },
  {
    taskName: "Science project",
    id:6,
    completed: true,
    reoccuring: false,
  },
]

function App() {
  return (
   
    <body style={styles.body}>
       <header>
           <h1 style={styles.logo}>TT</h1>
       </header>
    <h1 style={styles.text}>Today's Todos</h1>
    <h5>Keep your tasks in one place.</h5>
    <h2 style={styles.text}>Create a New Task</h2>
    <input type="text" placeholder="Add Task"/>
    <h2 style={styles.text}>Create a Note</h2>
    <input type="text" placeholder="Add Note"/>
<ul style={styles.list}>
  {taskList.map((task)=>(
    <li style={styles.list} key={task.id}>
      
              <p style={
                task.completed 
                ?styles.taskDone 
                : styles.taskNew}>
                <input type="checkbox" checked={task.completed}/>
              
                {task.taskName}
              </p>

    </li>
  ))}
</ul>
    </body>
              );
}





const styles= {
body:{
  backgroundColor:"yellow",
},

}

export default App;