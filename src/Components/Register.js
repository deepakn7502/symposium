import React, { useEffect, useState } from "react";
import "./Register.css";
import { Button } from "@mui/material";

function Register() {
  // const [color, setColor] = useState("warning");
  // const [IDCard, setIDCard] = useState();

  // const [event, setEvent] = useState("Sherlock Code");
  // const [teamName, setTeamName] = useState();
  // const [collegeName, setCollegeName] = useState();
  // const [memberName, setMemberName] = useState();
  // const [phoneNumber, setPhoneNumber] = useState();
  // const [mailID, setMailID] = useState();
  // const [imageURL, setImageURL] = useState();

  // const getData = async () => {
  //   const databaseRef = collection(db, "sample");
  //   const data = await accessData(databaseRef);
  //   console.log(data.data);
  // };

  // const uploadData = async () => {
  //   const databaseRef = collection(db, "details");
  //   const data = {
  //     eventname: event,
  //     teamname: teamName,
  //     collegename: collegeName,
  //     membername: memberName,
  //     phonenumber: phoneNumber,
  //     mailid: mailID,
  //     imageurl: imageURL,
  //   };

  //   const Ref = await Upload(databaseRef, data);
  // };

  // const uploadImage = async () => {
  //   const databaseRef = ref(storage, `images/${IDCard.name}`);
  //   uploadBytes(databaseRef, IDCard).then((snapshot) => {
  //     getDownloadURL(snapshot.ref).then((url) => {
  //       setImageURL(url);
  //       console.log(url);
  //     });
  //   });
  // };

  const [event, setEvent] = useState();

  const [name, setName] = useState();

  const [link, setLink] = useState();

  useEffect(() => {
    setEvent(window.sessionStorage.getItem("event"));
    if (event === "pixel") {
      setName("PIXEL IN THE SHADOWS (MIDJOURNEY)");
      setLink(
        "https://docs.google.com/forms/d/e/1FAIpQLSdh18S0JOCVgv1GNoaS1D5f_wFvS7iH_2XxhjPP8gXUXPWa9g/viewform?usp=sf_link"
      );
    } else if (event === "sherlock") {
      setName("CRACK THE CASE");
      setLink(
        "https://docs.google.com/forms/d/e/1FAIpQLSfzSHHxDaQ-yXB20rkY4AzKC5ihEF6zvpMpQFsP2dbsRMEcPA/viewform?usp=sf_link"
      );
    } else if (event === "crack") {
      setName("CODE TO BUILD");
      setLink(
        "https://docs.google.com/forms/d/e/1FAIpQLScNQlsUfr8XX8A3hXaqxwD-GJkNeI8Z-Vr8FfvokcXHDeuYlA/viewform?usp=sf_link"
      );
    } else if (event === "fortune") {
      setName("FORTUNE 500");
      setLink(
        "https://docs.google.com/forms/d/e/1FAIpQLSeNGSkVytbSBX72nmhinHGUT3kOOxifyM5Z9FqKe7_h3WjIZg/viewform?usp=sf_link"
      );
    } else if (event === "sql") {
      setName("SQL MYSTERY HUNT");
      setLink(
        "https://docs.google.com/forms/d/e/1FAIpQLSdyr-FfUzrrmkXnSfjnZDLWEi8ypaZtRFTHdYN1Tp7zwcf6sA/viewform?usp=sf_link"
      );
    }
  }, [event]);

  const returnInstructions = () => {
    if (event === "pixel") {
      return (
        <ul>
          <li>2 participants per team.</li>
          <li>
            Participants will be provided with a topic based on the theme of the
            event.
          </li>
          <li>
            Participants should use “Midjourney” to generate the image using
            creative prompts accordingly.
          </li>
          <li>The event will consist of three rounds.</li>
          <li>
            First two rounds - participants must generate and submit one image
            and the prompts used to generate the image.
          </li>
          <li>
            The final round - Finalist can provide at most 3 variants of the
            same image and the prompts used to generate the image, best of which
            will be chosen for evaluation.
          </li>
          <li>
            Time duration: 20 minutes for each round. (threshold time will be 30
            minutes only)
          </li>
          <li>
            Images must be at least 1024 x 1024 pixels and in a file format that
            is easily accessible to the judges.
          </li>
          <li>
            Generated images and prompts can be shared via provided Google Forms
            link.
          </li>
          <li>
            The judges will evaluate the images based on the following criteria:
            relativity, creativity and overall aesthetic appeal.
          </li>
          <li>
            Image irrelevant to the topic will not be accepted for evaluation.
          </li>
          <li>
            Team that fails to abide by the regulations, will be disqualified.
          </li>
        </ul>
      );
    } else if (event === "sherlock") {
      return (
        <ul>
<<<<<<< HEAD
         <li>3 participants per team.</li>
         <li>Participants can prepare on topic based on recent computer technology related.</li>
         <li>Participants have to submit their paper on or before 12/03/2023.</li>
         <li>Minimum number of pages should be 7 and should not exceed 15 pages.</li>
         <li>Winner and runners will be announced on 13/03/2023.</li>
         <li> 
          <a href="https://drive.google.com/file/d/1zV8HIHLEsk8_D8fin9JNo_D1eWr47WHu/view?usp=share_link" > Refer the link for format and sample </a>
          </li>
         <li>The judges will evaluate based on communication and clear view of the topic</li>
         <li>Submit your paper via mail: 
           csexerone@gmail.com
=======
          <li>3 participants per team </li>
          <li>
            Participants can prepare on their topic based on computer related
            streams
          </li>
          <li>Preliminary round will be conducted</li>
          <li>Shortlisted participants can participate in the final round</li>
          <li>
            Minimum number of pages should be 7 and should not exceed 15 pages
          </li>
          <li>Time duration : 20 minutes for each team</li>
          <li>
            The judges will evaluate based on presentation , communication and
            clear view of the topic
>>>>>>> 6a1cea55edebe75ab17fcb7276f153d0ac495cbe
          </li>
        </ul>
      );
    } else if (event === "crack") {
      return (
        <ul>
          <li>2 participants per team.</li>
          <li>Participants will be provided with a problem statement.</li>

          <li>
            Participants should develop an application that solves the
            problem statement
          </li>
          <li>The event will consist of two rounds.</li>
          <li>
            First round- Participants must develop an application for the given
            problem statement, this will be conducted online.
          </li>
          <li>
            Final round - 5 teams will be selected and they will compete against each other
            in an application development round at Panimalar Engineering College
            (offline)
          </li>
          <li>
            The judges will evaluate the application based on the following
            criteria: relativity, creativity and efficiency of the application
            to solve the provided problem .
          </li>
          <li>
            Applications irrelevant to the topic will not be accepted for
            evaluation.
          </li>
          <li>
            Teams that fail to abide by the regulations, will be disqualified
          </li>
        </ul>
      );
    } else if (event === "fortune") {
      return (
        <ul>
          <li>3 Members per team.</li>
          <li>One team per college.</li>

          <li>
            Each team will be given a topic ,where the two different company's
            output or products will be given.
          </li>
          <li>
            Your team has to infuse or integrate both the products of different
            company and prepare an advertisement regarding your hybrid product.
          </li>
          <li>
            For example, if the topic is Dairy Milk and Boat Earbuds: U have to
            explain how u combine both the products into an interesting product
            and make an advertisement regarding the product.
          </li>
          <li>After each and every team receives their respective topics.</li>
          <li>
            Only a hour will be provided to prepare your plan to advertise your
            product.
          </li>
          <li>
            At that span of time, each team has to prepare and then record their
            advertisement (Done through speech, U can also make use of props
            like charts, art whatever u need , and everything needs to be
            recorded properly).
          </li>
          <li>Recorded video must be sent within a hour.</li>
          <li>
            The recorded video must be within minimum 2 minutes to maximum 5
            minutes, more than that is not advisable ( Make it crisp and catchy,
            cause no one likes to watch ad for more than a minute..cause we
            obviously know more duration makes ad boring, So try not to be
            boring).
          </li>
          <li>
            Recorded content must have clear audio and (video) and interference
            during the recording is not appreciated.
          </li>
          <li>The about mentioned are some major etiquette to be followed.</li>
          <li>
            Team which doesn't stick to the above mentioned points will be
            strictly disqualified.
          </li>
        </ul>
      );
    } else if (event === "sql") {
      return (
        <ul>
          <li>Two per team</li>
          <li>
            The activity will be based on a storyline and the problem statement
            is common for everyone.
          </li>
          <li>
            The storyline is based on a murder which happened on SQLcity,
            participants must solve the crime using SQL commands.
          </li>
          <li>Time to solve the mystery would be 20 mins.</li>
          <li>
            Participants must submit the identified killer's name and their code
            after completing the mystery.
          </li>
          <li>
            All the Participants will be given some code snippets that are mandatory
            for the game, before 1 hour.
          </li>
          <li>
            The actual problem statement will be sent to your mail at the
            starting time of the competition.
          </li>
          <li>
            All your answers must be attached as a pdf and must be sent back to
            the same mail.
          </li>
          <li>Your performance will be reviewed and the results will be announced.
          </li>
          <li>
            All the code snippets will be sent to your respective mail id from
            which you can access them to create the initial tables.
          </li>
          <li>Prerequisites for SQL Mystery Hunt</li>
          <li>-MySQL  Workbench installed</li>
        </ul>
      );
    }
  };

  return (
    <div className="register">
      <div className="navbar1">
        <div className="navbar">
          <div className="name">{name}</div>
          <div className="cont">
            <div className="container">
              <div className="guide1">
                <p> GUIDELINES</p>
                <div className="gui">{returnInstructions()}</div>
                <div className="button-cont">
                  <a href={link} target="_blank">
                    Register
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <<<<<<< HEAD
        <div className="button-cont">
          <Button onClick={()=>{window.location.href=link}} >Register</Button>
        </div>
=======
        {/* <div className="button-cont">
          <Button
            variant="contained"
            onClick={() => {
              window.location.href = link;
            }}
          >
            Register
          </Button>
        </div> */}
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
