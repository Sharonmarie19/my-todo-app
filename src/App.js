import React, { useState } from "react";
import Todos from "./components/Todos.js";
import Header from "./components/Header";
import Form from "./components/Form";
import "./App.css";

// const user = {
//   name: "Sharon",
//   id: 1,
// };
// let taskList = [
//   {
//     taskName: "Laundry",
//     id: 2,
//     completed: true,
//     reoccuring: false,
//   },
//   {
//     taskName: "Feed the kids",
//     id: 3,
//     completed: false,
//     reoccuring: false,
//   },
//   {
//     taskName: "Make cookies for the bakesale",
//     id: 4,
//     completed: false,
//     reoccuring: false,
//   },
//   {
//     taskName: "DRINK",
//     id: 5,
//     completed: false,
//     reoccuring: false,
//   },
//   {
//     taskName: "Science project",
//     id: 6,
//     completed: true,
//     reoccuring: false,
//   },
// ];

function App() {
  const [inputText, setInputText] = useState("");
  const [tasks, setTasks] = useState([]);
  return (
    <div className="App">
      <Header />

      <body style={stylesList.body}>
        <h1 style={stylesList.text}>Today's Todos</h1>
        <h5>Keep your tasks in one place.</h5>

        <h2 style={stylesList.text}>Create Todo List</h2>
        <Form tasks={tasks} setTasks={setTasks} setInputText={setInputText} />

        <Todos tasks={tasks} />
      </body>
    </div>
  );
}

const stylesList = {
  body: {
    marginTop: "60px",
    backgroundColor: "#F9F9FA",
    textAlign: "center",
  },
  text: {
    color: "blue",
  },

  button: {
    borderRadius: "150px",
  },
};
export default App;
