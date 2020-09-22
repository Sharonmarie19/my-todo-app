import React from "react";
import Profile from "../images/profile-pic.png";

import Logo from "../images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <img src={Logo} alt="" style={stylesList.logoImg} />
      <nav style={stylesList.header}>
        <img src={Profile} />
        <h1>Sharon W.</h1>

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
    border: "#85C1F9",
    borderWidth: "3px",
    borderStyle: "ridge",
  },
  logoImg: {
    paddingTop: "15px",
    width: "55px",
    height: "55px",
  },
  img: {
    margin: "10px",
    fontSize: "36px",
    color: "#052D82",
  },
  links :{
    marginTop: "25px",
    color: "#052D82",
  }
};

export default Header;
