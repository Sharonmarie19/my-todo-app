import React from "react";
import Profile from "../images/profile-pic.png"
import Notes from "../images/whh_notes.png"
import Calendar from "../images/Vector.png"
import Edit from "../images/el_file-edit.png"
import Logo from "../images/logo.png"


const Header =() => {
return (
<header>
<img src={Logo} alt=""style={stylesList.logoImg}/>
    <nav style={stylesList.header}>
      <img src={Profile}/>
      <h1>Sharon W.</h1>
      <i class="fa fa-pencil-square-o"style={stylesList.img}></i>
      <i class="fa fa-calendar"style={stylesList.img}></i>
      <i class="fa fa-edit" style={stylesList.img}></i>
    </nav>
  </header>
  )
    



    
}

const stylesList= {
    header:{
    padding:"10px",
      marginTop:"30px",
      height:"60px",
      display:"flex",
      flexDirection:"row",  
      justifyContent:"space-evenly", 
      border:"#85C1F9",
      borderWidth:"3px",
      borderStyle:"ridge",
     },
     logoImg:{
         paddingTop:"15px",
        width:"55px",
        height:"55px",
      },
     img:{
         margin:"10px",
        fontSize:"36px",
        color:"#052D82",
       },
    }


export default Header
