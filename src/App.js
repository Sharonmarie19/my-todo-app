import React, { Component } from "react";
import "./App.css";
import List from "./components/List.js";
import Header from "./components/Header.js";
import Clock from "./components/Clock"

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
          id: 3,
        },
        {
          title: "DRINK!!!!",
          completed: false,
          id: 4,
        },
      ],
      newTaskTitle: "",
    };
  }
  componentDidMount() {
    let todoListStr = localStorage.getItem(TODO_LIST_KEY);
    if (todoListStr) {
      this.setState({
        todoList: JSON.parse(todoListStr)
      })
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
      const filteredArray = state.tasks.filter((products) => {
        if (products.id === id) {
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

  handleNewTaskChange = (event) => {
    this.setState({ newTaskTitle: event.target.value });
  };

  handleNewAddTask = (event) => {
    this.setState((state) => {
      return {
        tasks: [...state.tasks, { name: state.newTaskTitle }],
        newTaskTitle: "",
      };
    });
  };

  render() {
    return (
      <body style={stylesList.body}>
        <div className="user-container">
        <Clock/>
          <Header />
         
          <h1 style={stylesList.h1}>Today's Todos</h1>
          <h5 style={stylesList.h5}>Keep your tasks where you'll see 'em</h5>
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
          <List todoTask={this.state.tasks} />

          
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
};
export default App;
