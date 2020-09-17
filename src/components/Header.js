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
      <img src={Notes} alt=""style={stylesList.img}/>
      <img src={Calendar} alt=""style={stylesList.img}/>
      <img src={Edit} alt=""style={stylesList.img}/>
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
        marginTop:"20px",
        width:"25px",
        height:"30%",
        
       },
    }


export default Header
