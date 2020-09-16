import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav style={{display: "flex", justifyContent: "space-between"}}>
      <Link to="/" style={{textDecoration: "none"}}>
        <div className="nav-item">Home</div>
      </Link>
      <Link to="/log" style={{textDecoration: "none"}}>
        <div className="nav-item">Log</div>
      </Link>
      <Link to="/stats" style={{textDecoration: "none"}}>
        <div className="nav-item">Stats</div>
      </Link>
    </nav>
  );
};

export default Nav;