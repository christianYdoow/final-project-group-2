import React from "react";
import { NavLink } from "react-router-dom";

//assests
import pahinaLogo from "../assets/pahina-logo.png";

//styles
import "../styles/Navbar.css";

//Material UI
import UserSetting from "./UserSetting";
import Cart from "./GoToCart";

//components

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg shadow-sm p-3 mb-5 bg-body">
        <div className="container">
          <NavLink className="navbar-brand" to="/customer/home">
            <img
              src={pahinaLogo}
              alt="Pahina Logo"
              className="pahina-logo img-fluid"
            />
          </NavLink>
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
            </form>

            <div className="d-flex ms-auto">
              <UserSetting />
              <Cart />
            </div>

          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
