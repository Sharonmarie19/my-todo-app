import React from "react"
import Profile from "../images/profile-pic.png"
import Logo from "../images/logo.png"
import Edit from "../images/el_file-edit.png"
import Calendar from "../images/Vector.png"
import Notes from "../images/whh_notes.png"

const Header = () => {
    return (

<header>
    <nav style={styles.nav}>
   
  <img src={Logo} alt=""/>
  
  <img src={Profile} alt=""/>
  <h3>Sharon W.</h3>
  <img src={Notes} alt=""/>
  <img src={Edit} alt=""/>
  <img src={Calendar} alt=""/>
     </nav>
  </header>

    )
}
const styles={
    nav:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-evenly",
    }
}
export default Header

















