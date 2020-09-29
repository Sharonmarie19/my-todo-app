import React from "react";
import Profile from "../images/profile-pic.png";

import Logo from "../images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <img src={Logo} alt="" style={stylesList.logoImg} />
      <nav style={stylesList.header}>
        <img src={Profile}  />
        <h1 style={stylesList.userName}>Sharon W.</h1>

        <Link to="/tasks" style={stylesList.links}>Home</Link>
        <Link to="/tasks" style={stylesList.links}>Profile</Link>
        <Link to="/tasks" style={stylesList.links}>Calendar</Link>
      </nav>
    </header>
  );
};

const stylesList = {
  header: {
    padding: "10px",
    marginTop: "30px",
    height: "60px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    border: "#00334e",
    borderWidth: "10px",
    borderStyle: "ridge",
    backgroundColor:"#d6e0f0",
  },
  logoImg: {
    paddingTop: "15px",
    width: "55px",
    height: "55px",
  },
  
    
  links :{
    marginTop: "25px",
    color: "#052D82",
  },
  userName:{
    color: "#052D82",
    
  },
};

export default Header;
