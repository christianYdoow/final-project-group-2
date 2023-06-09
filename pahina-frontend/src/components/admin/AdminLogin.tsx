
import { MouseEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React from "react";

//components
import Header from ".././Header";

//styles
import "../../styles/LoginForm.css";

//assets
import reading from "../../assets/admin.png";

//Material UI
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const AdminLogin = () => {
   
  const [costumerEmail, setAdminEmail] = useState("");
  const [costumerPassword, setAdminPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const adminLogin: MouseEventHandler<HTMLButtonElement> = async (event) => {
    event.preventDefault();
    if (costumerEmail === "" || costumerPassword === "") {
      setEmailError("Email cannot be empty");
      setPasswordError("Password cannot be empty");
    } else {
      try {
        await axios
          .post("http://localhost:8080/web/api/admin-login", {
            email: costumerEmail,
            password: costumerPassword,
          })
          .then(
            (res) => {
              console.log(res.data);
              if (res.data.message == "Email not exits") {
                alert("Email not exits");
              } else if (res.data.message == "Login Success") {
                navigate("/admin/home");
              } else {
                alert("Incorrect Email and Password not match");
              }
            },
            (fail) => {
              console.error(fail); // Error!
            }
          );
      } catch (err) {
        alert(err);
      }
    }

  };

  return (
    <div>
      <React.Fragment>
        <Header />
      </React.Fragment>

      <div className="container login">
        <div className="row align-items-center">
        <div className="col-md-6 ml-sm-auto col-lg-6 px-4 text-end order-2 order-md-1">
            <p className="fs-3">Welcome, Admin!</p>
            <TextField
              id="costumerEmail"
              label="Email Address"
              variant="outlined"
              className="col-md-8 col-12"
              value={costumerEmail}
              onChange={(event) => {
                setAdminEmail(event.target.value);
                setEmailError("");
              }}
              error={Boolean(emailError)}
              helperText={emailError}
            />{" "}
            <br /> <br />
            <TextField
              label="Password"
              id="costumerPassword"
              variant="outlined"
              className="col-md-8 col-12"
              type="password"
              value={costumerPassword}
              onChange={(event) => {
                setAdminPassword(event.target.value);
                setPasswordError("");
              }}
              error={Boolean(passwordError)}
              helperText={passwordError}
            />{" "}
            <br /> <br />
            <Button
              variant="contained"
              className="sign-in-button col-md-8 col-12"
              color="warning"
              onClick={adminLogin}
            >
              Sign in
            </Button>{" "}
            <br /> <br />
          </div>
          <div className="col-md-6 order-1 order-md-2">
            <img
              src={reading}
              alt="girl reading"
              className="reading img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;