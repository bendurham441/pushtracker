import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer>
    <div class="footer-links">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="footer-link">Home</div>
      </Link>
      <Link to="/about" style={{ textDecoration: "none" }}>
        <div className="footer-link">About</div>
      </Link>
    </div>
    <div className="copyright">&copy; Ben Durham 2020</div>
  </footer>
);

export default Footer;
