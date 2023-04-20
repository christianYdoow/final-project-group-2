import { MouseEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import React from "react";

//components
import RegistrationDialog from './RegisterDialog';

//assets
import reading from "../assets/reading.png";

//styles
import "../styles/LoginForm.css";

//Material UI
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const LoginForm = () => {
  const [costumerEmail, setCostumerEmail] = useState("");
  const [costumerPassword, setCostumerPassword] = useState("");
  const navigate = useNavigate();

  const login: MouseEventHandler<HTMLButtonElement> = async (event) => {
    event.preventDefault();
    try {
      await axios
        .post("http://localhost:8080/api/login", {
          email: costumerEmail,
          password: costumerPassword,
        })
        .then(
          (res) => {
            console.log(res.data);
            if (res.data.message == "Email not exits") {
              alert("Email not exits");
            } else if (res.data.message == "Login Success") {
              navigate("/home");
            } else {
              alert("Incorrect Email or Password not match");
            }
          },
          (fail) => {
            console.error(fail); // Error!
          }
        );
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div>
      <React.Fragment>
        <Header />
      </React.Fragment>

      <div className="container login">
        <div className="row align-items-center">
          <div className="col-12 d-none d-md-block col-md-6 ">
            <img
              src={reading}
              alt="girl reading"
              className="reading img-fluid"
            />
          </div>
          <div className="col-12 col-md-6 p-2">
            <p className="fs-3">Sign in or Create an account</p>
            <TextField
              id="costumerEmail"
              label="Email Address"
              variant="outlined"
              className="col-md-8 col-12"
              required
              value={costumerEmail}
              onChange={(event) => {
                setCostumerEmail(event.target.value);
                
              }}
            />{" "}
            <br /> <br />
            <TextField
              label="Password"
              id="costumerPassword"
              variant="outlined"
              className="col-md-8 col-12"
              type="password"
              required
              value={costumerPassword}
              onChange={(event) => {
                setCostumerPassword(event.target.value);
              }}
            />{" "}
            <br /> <br />
            <Button
              variant="contained"
              className="sign-in-button col-md-8 col-12"
              color="warning"
              onClick={login}
            >
              Sign in
            </Button>{" "}
            <br /> <br />
      
            <RegistrationDialog/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;