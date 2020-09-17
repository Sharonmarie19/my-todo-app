import React, {Component} from "react";
import "./App.css";
import List from "./components/List.js"
import Header from "./components/Header.js"


 

class App extends Component {
  constructor (props) {
    super(props)
    this.state={
     user:{
      username: "Sharon",
      id:1,
    },
    
      tasks:[
        {
          title:"Laundry",
          completed:false,
          id:2
        },
        {
          title:"Cook",
          completed:true,
          id:3
        },
        {
          title:"Help with Science project",
          completed:false,
          id:3
        },
        {
          title:"DRINK!!!!",
          completed:false,
          id:4
        },
      ]
    }
  }
  // const ParagraphText = styled.element.h2`
  // color: ${(props)=> props.color || "blue"};`;

  render () {
    return(
      <body style={stylesList.body}>
      <div className="user-container">
        <Header/>
        
        <h1 style={stylesList.h1}>Today's Todos</h1>
        <h5 style={stylesList.h5}>Keep your tasks where you'll see 'em</h5>
        <h2 style={stylesList.h2}>Create A Task</h2>
        <input type="text"placeholder="Add Task"/><button style={stylesList.button}>+</button>
        <List todoTask={this.state.tasks}/>
        <h2 style={stylesList.h2}>Add Note</h2>
        <input type="text"placeholder="Add Task"/><button style={stylesList.button}>+</button>


</div>
      </body>
       );
  }
  
}
const stylesList ={
  body:{
    backgroundColor:"#E0EEFB",
  },
  h1:{
    textAlign:"center",
    color:"#05215B",
},
h2:{
  textAlign:"left",
  color:"#05215B",
},
h5:{
  textAlign:"center",
  color:"#05215B",
},
button:{
  backgroundColor:"#05215B",
  color:"white",
  
},
}
export default App;