import React from "react";
import pahinaLogo from "../../assets/pahina-logo.png";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import AdminSetting from "./AdminSetting";
import { NavLink } from "react-router-dom";

const AdminHeader = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg shadow-sm p-3 mb-5 bg-body">
        <div className="container">
          
          <NavLink className="navbar-brand" to="/admin/home">
            <img
              src={pahinaLogo}
              alt="Pahina Logo"
              className="pahina-logo img-fluid"
            />
          </NavLink>
          
          <AdminSetting/>



        </div>
      </nav>
    </>
  );
};

export default AdminHeader;
