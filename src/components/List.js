import React from "react";
import ReactDOM from "react-dom";

function List(props) {
  return (
    <div style={styles.listFormat}>
      <ul>
        {props.todoTask.map((task) => (
          <li key={task.id} style={styles.list}>
           

            
            <p style={task.completed ? styles.taskDone : styles.taskNew}>
              <input
                type="checkbox"
                defaultChecked={task.completed}
                onChange={() => props.handleChecked(task.id)}
              />
              {task.title}
              <button style={styles.button}>
                <i class="fa fa-edit"></i>
              </button>
              <button
                style={styles.button}
                onClick={() => props.handleTaskDelete(task.id)}
              >
                <i class="fa fa-trash-o"></i>
              </button>
            </p>
          </li>
          
        ))}
      </ul>
      
    </div>
  );
}

const styles = {
  list: {
    margin: "5px",
    borderStyle: "solid",
    borderRadius: "5px",
    borderWidth: "1px",
    listStyle: "none",
    textAlign: "left",
  },

  taskDone: {
    color: "#8d93ab",
    textDecoration: "line-through",
  },
  taskNew: {
    color: "#16213e",
  },
  button: {
    margin: "5px",
    backgroundColor: "#07689f",
    color: "white",
  },
  listFormat: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
};
export default List;
