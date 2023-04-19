import React from "react";
import pahinaLogo from "../../assets/pahina-logo.png";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";

const AdminHeader = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src={pahinaLogo}
              alt="Pahina Logo"
              className="pahina-logo img-fluid"
            />
          </a>

          <div className="d-flex align-items-center">
            <p className="m-2">Mariah Gift</p>
            <div className="me-3">
              <Avatar sx={{ bgcolor: deepOrange[900] }}>MG</Avatar>
            </div>
          </div>



        </div>
      </nav>
    </>
  );
};

export default AdminHeader;
