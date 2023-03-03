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
      <div className="navbar1">
        <div className="navbar">
          <div className="name">PIXEL IN THE SHADOWS (DALL-E AI)</div>
          <div className="cont">
            <div className="container">
              <div className="guide1">
                <p className="gt"> GUIDELINES</p>• One team per college.
                <br></br> • Each team will be given a topic ,where the two
                different company's output or products will be given.
                <br></br>• Your team has to infuse or integrate both the
                products of different company and prepare an advertisement
                regarding your hybrid product. <br></br>• For example, if the
                topic is Dairy Milk and Boat Earbuds: U have to explain how u
                combine both the products into an interesting product and make
                an advertisement regarding the product.
                <br></br> • After each and every team receives their respective
                topics.<br></br> • Only a hour will be provided to prepare your
                plan to advertise your product. <br></br>• At that span of time,
                each team has to prepare and then record their advertisement
                (Done through speech, U can also make use of props like charts,
                art whatever u need , and everything needs to be recorded
                properly).
                <br></br> • Recorded video must be sent within a hour.<br></br>•
                The recorded video must be within minimum 2 minutes to maximum 5
                minutes, more than that is not advisable ( Make it crisp and
                catchy, cause no one likes to watch ad for more than a
                minute..cause we obviously know more duration makes ad boring,
                So try not to be boring).<br></br> • Recorded content must have
                clear audio and (video) and interference during the recording is
                not appreciated.
                <br></br> • The about mentioned are some major etiquette to be
                followed. <br></br>• Team which doesn't stick to the above
                mentioned points will be strictly disqualified.
              </div>
            </div>
          </div>
        </div>

        <div className="button-cont">
          <Button
            variant="contained"
            
            href="https://docs.google.com/forms/d/e/1FAIpQLSfzSHHxDaQ-yXB20rkY4AzKC5ihEF6zvpMpQFsP2dbsRMEcPA/viewform"
          >
            Register
          </Button>
        </div>
      </div>
      {/* <div className="inputs-container">
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
      </div> */}

      {/* <Button variant="contained" onClick={getData}>Get data</Button>
      <Button variant="contained" onClick={uploadData}>Upload</Button> */}

      {/* <Button onClick={uploadImage}>Upload Image</Button> */}

      {/* <Button variant="contained" onClick={uploadImage}>
        Upload Image
      </Button>*/}
    </div>
  );
}

export default Register;

//blur only background image in html?
