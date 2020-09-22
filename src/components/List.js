import React from "react";
import ReactDOM from "react-dom";

function List(props) {
  return (
    <div>
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
    color: "#ADC8FF",
    textDecoration: "line-through",
  },
  taskNew: {
    color: "#05215B",
  },
  button: {
    margin: "5px",
    backgroundColor: "#05215B",
    color: "white",
  },
  listFormat: {},
};
export default List;
