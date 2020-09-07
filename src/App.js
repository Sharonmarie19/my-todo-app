import React from "react";
import Todos from "./components/Todos.js"
import Profile from "./images/profile-pic.png"
import Calendar from "./images/Vector.png"
import Notes from "./images/whh_notes.png"
import Edit from "./images/el_file-edit.png"
import Logo from "./images/logo.png"
import "./App.css";


const user = {
  name: "Sharon",
  id: 1,
  avatar: Profile,
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
    <>
    <header >
    <nav style={stylesList.header}>
    <img src={Logo} alt="calendar"style={stylesList.logoImg}/>
    
    
     <img src={Profile} alt=""style={stylesList.imgProfile}/> 
     <h3>Sharon W.</h3>
     <img src={Edit} alt="pen and paper"style={stylesList.img}/>
     <img src={Notes}alt="notebook"style={stylesList.img}/>
     <img src={Calendar} alt="calendar"style={stylesList.img}/>
     
      </nav>
  </header>
    <body style={stylesList.body}>
       
    <h1 style={stylesList.text}>Today's Todos</h1>
    <h5>Keep your tasks in one place.</h5>
    <h2 style={stylesList.text}>Create Todo List</h2>
    
    <input type="text" placeholder="Add Task"/><button style={stylesList.botton}>Add</button>
    
    <Todos todoTask={taskList}>

    </Todos>


    </body>
    </>
              );
}





const stylesList= {
  header:{
    marginTop:"30px",
    height:"60px",
    display:"flex",
    flexDirection:"row",  
    justifyContent:"space-evenly", 
    // border:"#2D294E",
    // borderWidth:".5px",
    // borderStyle:"solid",
   },
  img:{
    marginTop:"20px",
    width:"5%",
    height:"30%",
   },
   imgProfile:{
    marginTop:"12px",
    width:"12%",
    height:"55%",
   },
   logoImg:{
     width:"15%",
     height:"35px",
   },
body:{
  marginTop:"60px",
  backgroundColor:"#F9F9FA",
  textAlign:"center",
},
text:{
  color:"blue",
},

button:{
  borderRadius:"150px",
},
}

export default App;