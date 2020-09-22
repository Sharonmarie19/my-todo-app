import React, { Component } from "react";
import "./App.css";
import List from "./components/List.js";
import Header from "./components/Header.js";
import Clock from "./components/Clock";
import { Switch, Route } from "react-router-dom";

const TODO_LIST_KEY = "todoapp_list";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: "Sharon",
        id: 1,
      },

      tasks: [
        {
          title: "Laundry",
          completed: false,
          id: 2,
        },
        {
          title: "Cook",
          completed: false,
          id: 3,
        },
        {
          title: "Help with Science project",
          completed: false,
          id: 4,
        },
        {
          title: "DRINK!!!!",
          completed: false,
          id: 5,
        },
      ],
      newTaskTitle: "",
    };
  }
  componentDidMount() {
    let todoListStr = localStorage.getItem(TODO_LIST_KEY);
    if (todoListStr) {
      this.setState({
        todoList: JSON.parse(todoListStr),
      });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.todoList !== prevState.todoList) {
      let todoListStr = JSON.stringify(this.state.todoList);
      localStorage.setItem(TODO_LIST_KEY, todoListStr);
    }
  }
  handleTaskDelete = (id) => {
    this.setState((state) => {
      const filteredArray = state.tasks.filter((tasks) => {
        if (tasks.id === id) {
          return false;
        } else {
          return true;
        }
      });
      return {
        tasks: filteredArray,
      };
    });
  };
  handleChecked = (id) => {
    this.setState((state) => {
      const newTasks = state.tasks.map((task) => {
        if (task.id === id) {
          return Object.assign({}, task, {
            completed: task.completed ? false : true,
          });
        } else {
          return task;
        }
      });

      return {
        tasks: newTasks,
      };
    });
  };
  handleNewTaskChange = (event) => {
    this.setState({ newTaskTitle: event.target.value });
  };

  handleNewAddTask = () => {
    let newTask = { title: this.state.newTaskTitle, complete: false, id: 5 };
    this.setState((state) => {
      return {
        tasks: [...state.tasks, newTask],
        newTaskTitle: "",
      };
    });
  };

  render() {
    return (
      <body style={stylesList.body}>
        <div className="user-container">
          <Header />

          <Switch>
            <Route exact path="/">
              <Clock />
              <h1 style={stylesList.h1}>Today's Todos</h1>
              <h5 style={stylesList.h5}>
                Keep your tasks where you'll see 'em
              </h5>
              <div className="icons" style={stylesList.icons}>
                <button style={stylesList.todoIcons}>
                  <i class="fas fa-book"></i>
                </button>{" "}
                Todo List
                <button style={stylesList.todoIcons}>
                  <i class="fas fa-marker"></i>
                </button>{" "}
                Edit Note
                <button style={stylesList.todoIcons}>
                  <i class="far fa-calendar-alt"></i>
                </button>{" "}
                Calendar
              </div>
            </Route>
            <Route path="/tasks">
              <h2 style={stylesList.h2}>Create A Task</h2>
              <input
                type="text"
                placeholder="Add Task"
                onChange={this.handleNewTaskChange}
                value={this.state.newTaskTitle}
              />
              <button style={stylesList.button} onClick={this.handleNewAddTask}>
                +
              </button>
              <List
                todoTask={this.state.tasks}
                handleTaskDelete={this.handleTaskDelete}
                handleChecked={this.handleChecked}
              />
            </Route>
          </Switch>
        </div>
      </body>
    );
  }
}

const stylesList = {
  body: {
    backgroundColor: "#E0EEFB",
  },
  h1: {
    textAlign: "center",
    color: "#05215B",
  },
  h2: {
    textAlign: "left",
    color: "#05215B",
  },
  h5: {
    textAlign: "center",
    color: "#05215B",
  },
  button: {
    backgroundColor: "#05215B",
    color: "white",
  },
  todoIcons: {
    fontSize: "48px",
    color: "#05215B",
    paddingTop: "10px",
  },
  icons: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
};
export default App;
