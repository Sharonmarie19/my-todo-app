import React from "react";
import Profile from "../images/profile-pic.png";
import Edit from "../images/el_file-edit.png"
import Calendar from "../images/Vector.png"
import Note from "../images/whh_notes.png"
import Logo from "../images/logo.png"

const Header = () => {
  return (
    <header>
        
      <nav style={stylesList.header}>
      <img src={Logo} alt=""style={stylesList.logoImg}/>
      <img src={Profile} alt=""style={stylesList.imgProfile}/>
      <h1>Sharon W.</h1>
      <img src={Edit} alt=""style={stylesList.imgProfile}/>
      <img src={Calendar} alt=""style={stylesList.imgProfile}/>
      <img src={Note} alt=""style={stylesList.imgProfile}/>
      
      </nav>
    </header>
  );
}
const stylesList= {
    header:{
      marginTop:"45px",
      height:"60px",
      display:"flex",
      flexDirection:"row",  
      justifyContent:"space-evenly", 
      border:"#2D294E",
      borderWidth:"5px",
      borderStyle:"solid",
      padding:"40px"
     },
     logoImg:{
        width:"10%",
        height:"55px",
      },
      
       imgProfile:{
        marginTop:"20px",
        
       },
    }
export default Header;
