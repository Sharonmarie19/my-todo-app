import React from "react"
import Profile from "./images/profile-pic.png"
import Calendar from "./images/Vector.png"
import Notes from "./images/whh_notes.png"
import Edit from "./images/el_file-edit.png"
import Logo from "./images/logo.png"

function Header(props){
    return(
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
    )
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
    }
export default Header
