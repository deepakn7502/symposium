import React, { useState } from "react";
import "./Register.css";
import { Button, TextField } from "@mui/material";
import Navbar from "./Navbar";
import { accessData, Upload, uploadImages } from "../server";
import { collection, doc } from "firebase/firestore";
import { db, storage } from "../firebase-config";
// import image from "../Images/template.jpg";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

function Register() {
  // const [color, setColor] = useState("warning");
  const [IDCard, setIDCard] = useState();

  const [event, setEvent] = useState("Sherlock Code");
  const [teamName, setTeamName] = useState();
  const [collegeName, setCollegeName] = useState();
  const [memberName, setMemberName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [mailID, setMailID] = useState();
  const [imageURL, setImageURL] = useState();

  const getData = async () => {
    const databaseRef = collection(db, "sample");
    const data = await accessData(databaseRef);
    console.log(data.data);
  };

  const uploadData = async () => {
    const databaseRef = collection(db, "details");
    const data = {
      eventname: event,
      teamname: teamName,
      collegename: collegeName,
      membername: memberName,
      phonenumber: phoneNumber,
      mailid: mailID,
      imageurl: imageURL,
    };

    const Ref = await Upload(databaseRef, data);
  };

  const uploadImage = async () => {
    const databaseRef = ref(storage, `images/${IDCard.name}`);
    uploadBytes(databaseRef, IDCard).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageURL(url);
        console.log(url);
      });
    });
  };

  return (
    <div className="register">
      <Navbar />
      <div className="inputs-container">
        <div className="input-field">
          <TextField
            onChange={(e) => {
              setTeamName(e.target.value);
            }}
            placeholder="Team Name"
            type="text"
            color="secondary"
          />
        </div>
        <div className="input-field">
          <TextField
            onChange={(e) => {
              setCollegeName(e.target.value);
            }}
            placeholder="College Name"
            type="text"
          />
        </div>
        <div>
          <div className="input-field">
            <TextField
              onChange={(e) => {
                setMemberName(e.target.value);
              }}
              placeholder="Member Name"
              type="text"
            />
          </div>
          <div className="input-field">
            <TextField
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
              placeholder="Phone Number"
              type="tel"
            />
          </div>
          <div className="input-field">
            <TextField
              onChange={(e) => {
                setMailID(e.target.value);
              }}
              placeholder="Mail ID"
              type="email"
            />
          </div>
          <Button variant="contained" component="label">
            Upload
            <input
              onChange={(e) => {
                setIDCard(e.target.files[0]);
              }}
              hidden
              accept="image/*"
              multiple
              type="file"
            />
          </Button>
        </div>
      </div>

      {/* <Button variant="contained" onClick={getData}>Get data</Button>
      <Button variant="contained" onClick={uploadData}>Upload</Button> */}
      {/* <Button onClick={uploadImage}>Upload Image</Button> */}

      <Button variant="contained" onClick={uploadImage}>
        Upload Image
      </Button>
      <Button variant="contained" onClick={uploadData}>
        Submit
      </Button>
    </div>
  );
}

export default Register;

//blur only background image in html?
