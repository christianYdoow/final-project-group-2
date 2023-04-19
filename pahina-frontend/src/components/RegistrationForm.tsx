import axios from "axios";
import React, { useState } from "react";
import { MouseEventHandler } from "react";
import { Link } from 'react-router-dom';
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const RegistrationForm = () => {
  const [costumerEmail, setCostumerEmail] = useState("");
  const [costumerFirstName, setCostumerFirstName] = useState("");
  const [costumerLastName, setCostumerLastName] = useState("");
  const [costumerPassword, setcostumerPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const costumerRoleId = 1;

  const save: MouseEventHandler<HTMLButtonElement> = async (event) => {
    event.preventDefault();
    if (costumerPassword !== confirmedPassword) {
      alert("Password do not match. Try again");
      return;
    }
    try {
      await axios.post(
        "http://localhost:8080/api/add-user",
        {
          email: costumerEmail,
          firstName: costumerFirstName,
          lastName: costumerLastName,
          password: costumerPassword,
          roleId: costumerRoleId,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:5173",
          },
        }
      );
      alert("Costumer Registration Successfully");
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div>
      <Typography id="transition-modal-title" variant="h6" component="h2">
        Create an account
      </Typography>
      <Typography id="transition-modal-description" sx={{ mt: 2 }}>
        Fill in the fields below to create an account in Pahina Bookstore. If
        you already have an account, please Sign in.
      </Typography>

      <br />
      <TextField
        id="costumerFirstName"
        label="First Name"
        type="text"
        variant="outlined"
        className=" text-field col-12 pb-2"
        value={costumerFirstName}
        onChange={(event) => {
          setCostumerFirstName(event.target.value);
        }}
      />
      <TextField
        id="costumerLastName"
        label="Last Name"
        variant="outlined"
        className=" text-field col-12 pb-2"
        value={costumerLastName}
        onChange={(event) => {
          setCostumerLastName(event.target.value);
        }}
      />
      <TextField
        id="costumerEmail"
        type="email"
        label="Email Address"
        variant="outlined"
        className=" text-field col-12 pb-2"
        value={costumerEmail}
        onChange={(event) => {
          setCostumerEmail(event.target.value);
        }}
      />
      <TextField
        id="costumerPassword"
        type="password"
        label="Password"
        variant="outlined"
        className=" text-field col-12 pb-2"
        value={costumerPassword}
        onChange={(event) => {
          setcostumerPassword(event.target.value);
        }}
      />
      <TextField
        id="confirmedPassword"
        type="password"
        label="Confirm Password"
        variant="outlined"
        className="text-field col-12 pb-2"
        value={confirmedPassword}
        onChange={(event) => {
          setConfirmedPassword(event.target.value);
        }}
      />
      <Button
        variant="contained"
        className="sign-in-button col-12"
        color="warning"
        onClick={save}
      >
        Create account
      </Button>
    </div>
  );
};

export default RegistrationForm;