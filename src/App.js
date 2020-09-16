import React from "react";
import "./App.css"
import Todos from "./components/Todos";
import Header from "./components/Header";
import Todoform from "./components/Todoform";
import Todoedit from "./components/Todoedit"
// import Todos from "./components/Todos.js"
// import Profile from "./images/profile-pic.png"
// import Calendar from "./images/Vector.png"
// import Notes from "./images/whh_notes.png"
// import Edit from "./images/el_file-edit.png"
// import Logo from "./images/logo.png"
// import Header from "./components/Header.js";



// class App extends Component {
//   state = {
//     taskList:[
//       {
//       taskName: "Laundry",
//       completed:false
//       },
//       {
//       taskName: "Feed the kids",
//       completed:false
//       },
//       {
//       taskName: "Bake cookies for the school",
//       completed:false
//       },
//       {
//       taskName: "DRINK",
//       completed:false
//       },
//             ],
//           };
// };
function App() {
  


return(
  <div>
<Header/> <br/>
<Todos/>
<Todoedit/>
  </div>

  );
}

export default App;