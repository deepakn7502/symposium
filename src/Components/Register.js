import React from "react";
import "./Register.css";
import { TextField } from "@mui/material";
import Navbar from "./Navbar";

function Register() {
  return (
    <div className="register">
      <Navbar />
      <div className="inputs-container">
        <div className="input-field">
          <TextField placeholder="Name" type="text" color="secondary" />
        </div>
        <div className="input-field">
          <TextField placeholder="Year" type="text" />
        </div>
        <div className="input-field">
          <TextField placeholder="College Name" type="text" />
        </div>
        <div className="input-field">
          <TextField placeholder="Phone Number" type="tel" />
        </div>
        <div className="input-field">
          <TextField placeholder="Mail ID" type="email" />
        </div>
        <div className="input-field">
          <TextField placeholder="Address" type="text" />
        </div>
      </div>
    </div>
  );
}

export default Register;

//blur only background image in html?
