import React from "react";
import pahinaLogo from '../assets/pahina-logo.png';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#">
           <img src={pahinaLogo} alt="Pahina Logo" className="pahina-logo img-fluid" />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
