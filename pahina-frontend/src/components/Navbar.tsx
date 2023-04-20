import React from "react";
import { NavLink } from "react-router-dom";
//components
// import {logout} from './Logout';

//assests
import pahinaLogo from "../assets/pahina-logo.png";

//styles
import "../styles/Navbar.css";

//Material UI
import ProfileIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { purple } from '@mui/material/colors';


const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg shadow-sm p-3 mb-5 bg-body">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src={pahinaLogo}
              alt="Pahina Logo"
              className="pahina-logo img-fluid"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{ width: "380px" }}
              />
              <button className="btn btn-outline-warning" type="submit">
                <SearchIcon />
              </button>
            </form>

            <div className="d-flex ms-auto">
              <NavLink to="/" className="d-flex navbar-link">
                <ProfileIcon color="warning"/>
                <p className="m-0 ps-1">Mariah Gift</p>
              </NavLink>

              <NavLink to="/cart" className="d-flex navbar-link">
                <ShoppingCartIcon color="warning" />
                <p className="m-0 ps-1"> Cart</p>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
