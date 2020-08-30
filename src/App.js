import React from "react";
import logo from "./images/logo.svg";
import "./App.css";
const profile = {
  name: "Sharon",
  id: 1,
  avatar: "",
};
let taskList = [
  {
    taskName: "Laundry",
    completed: true,
    reoccuring: false,
  },
  {
    taskName: "Feed the kids",
    completed: false,
    reoccuring: false,
  },
  {
    taskName: "Make cookies for the bakesale",
    completed: false,
    reoccuring: false,
  },
  {
    taskName: "DRINK",
    completed: false,
    reoccuring: false,
  },
  {
    taskName: "Science project",
    completed: false,
    reoccuring: false,
  },
];
function App() {
  return (
    <body style={styles.app}>
      <header style={styles.appHeader}>Today'S Todo</header>
      <h1 style={styles.appLogo}>TT</h1>

      <h1 style={styles.h1}>Today's Todos</h1>
      <h5>Keep all of your tasks in one place.</h5>

      <h2 style={styles.allText}>Create New Todo</h2>
      <input type="text" placeholder="Add new task" /><button style={styles.button}>Save</button>
      <h2 style={styles.allText}>Add Details</h2> 
      <input type="text" placeholder="Write a note" /><button style={styles.button}>Save</button>

      <ul style={styles.ulDeco}>
        {taskList.map((task) => {
          return (
            <li>
              <p>
                <input type="checkbox" checked={task.completed} />
                {task.taskName}
              </p>
              <p>{task.completed}</p>
            </li>
            
          );
        })}
      </ul>
      <button style={styles.button}>Save</button>
    </body>
  );
}
const styles = {
 app:{
  backgroundColor: "pink",
  textAlign:"center",
},
appHeader:{
  backgroundColor: "#282c34",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "calc(10px + 2vmin)",
  color: "white",
},
ulDeco:{
  listStyle:"none",
},

appLogo: {
  height: "40vmin",
  pointerEvents: "none",
  animation: "App-logo-spin infinite 20s linear",
},

h1: {
  color:"blue",
  textAlign:"center",
},
allText: {
  color:"blue",
},
button:{
  borderRadius:"200px",
  backgroundColor:"blue",
},
};
export default App;
