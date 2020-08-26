import React from "react";
import logo from "./images/logo.svg";
import "./App.css";

function App() {
  return (
    <>
   
      <h1>Today's Todos</h1>
      <input type="text" placeholder="Add Todo"/>

      <h1>Add a note</h1>
      <input type="text" />
      <button>Save</button>
      <button>Save & View List</button>

    </>
  );
}

export default App;
