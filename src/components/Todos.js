import React from "react";
import Newtodo from "./Newtodo";

const Todos = (tasks) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {/* {tasks.map((tasks) => (
          <Newtodo text={tasks.text} />
        ))} */}
      </ul>
    </div>
  );
};

const styles = {
  list: {
    listStyle: "none",
    textAlign: "center",
  },

  taskDone: {
    color: "gray",
    textDecoration: "line-through",
  },
  taskNew: {
    color: "black",
  },
};
export default Todos;
