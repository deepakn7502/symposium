import React, { useState } from "react";
import "./Register.css";
import { Button, TextField } from "@mui/material";
import Navbar from "./Navbar";
import { accessData, Upload, uploadImages} from "../server";
import { collection, doc } from "firebase/firestore";
import { db, storage } from "../firebase-config";
import image from "../Images/template.jpg"
import { ref } from "firebase/storage";

function Register() {
  // const [color, setColor] = useState("warning");

  const getData = async () => {

    const databaseRef = collection(db, "sample");
    const data = await accessData(databaseRef)
    console.log(data.data)
  }

  const uploadData = async () => {
    const name = "Arun"
    const age = 20
    const year = "III"
    const databaseRef = collection(db, "smaple")
    const data = { name: name, age: age, year: year }

    const Ref = await Upload(databaseRef, data)
  }

  const uploadImage = async () => {
    const uploadimage = image;
    const databaseRef = ref(storage, "Images")
    const data = await uploadImages(databaseRef,image)
  }
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

      {/* <Button variant="contained" onClick={getData}>Get data</Button>
      <Button variant="contained" onClick={uploadData}>Upload</Button> */}
      <Button onClick={uploadImage}>Upload Image</Button>
    </div>
  );
}

export default Register;

//blur only background image in html?
