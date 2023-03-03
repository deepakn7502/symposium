import React, { useEffect, useState, useRef } from "react";
import "./Home.css";
import { Button, TextField } from "@mui/material";
import logo from "../Images/lg.png";
import Card from "./Card";
import FlipPage from "react-flip-page";
// import backgroundVideo from "../Images/bg.mp4";
import bgm from "../Images/bgm.mp3";
import { storage } from "../firebase-config";

import img1 from "../Images/dalleai.jpg";
import img2 from "../Images/crack.jpg";
import img3 from "../Images/coder.jpg";
import img4 from "../Images/fortune500.jpg";
import img5 from "../Images/card1.jpg";
import { getDownloadURL, ref } from "firebase/storage";

function Home() {
  const [header, setheader] = useState(false);

  const [cards, setcards] = useState(false);

  const videoRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    // play video and audio together
    videoRef.current.play();
    // audioRef.current.play();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setheader(true);
    }, 9500);

    setTimeout(() => {
      setcards(true);
    }, 11000);
  }, []);

  const [backgroundVideo, setbackgroundVideo] = useState();

  useEffect(() => {
    console.log(backgroundVideo);
    getDownloadURL(ref(storage, "videos/bg.mp4")).then((url) => {
      setbackgroundVideo(url);
    });
  }, [backgroundVideo]);

  if (backgroundVideo) {
    console.log(true);
  } else {
    console.log(false);
  }
  return (
    <div className="main">
      <div className="video-container">
        <video
          ref={videoRef}
          src={backgroundVideo}
          autoPlay
          muted
          type="video/mp4"
        />
        {/* <audio ref={audioRef} src={bgm} autostart="true" id="audio" /> */}
      </div>

      <div className="header">
        <div className="logo">
          <img src={logo} alt="" width="auto" height="100px" />
        </div>

        {header && (
          <div className="content">
            <h1>DEPARMENT OF COMPUTER SCIENCE AND ENGINEERING presents</h1>
            <div className="content">
              
              <p id="name">NOIR ON CAMPUS</p>
              <p id="tagname">
                AN INTERCOLLEGIATE VIRTUAL SYMPOSIUM {" "}
              </p>
            </div>
          </div>
        )}
      </div>
      {cards && (
        <div>
          <div className="cardc1">
            <Card
              ename="PIXEL IN THE SHADOWS (DALL-E AI)"
              tagline="EXPERIENCE THE FUTURE OF INTELLIGENCE"
              img={img1}
            />
            <Card
              ename="SHERLOCK CODES"
              tagline="UNRAVEL COMPLEX PROGRAMMING PROBLEMS."
              img={img2}
            />
            <Card
              ename="CRACK THE CASE"
              tagline="UNLEASH YOUR INNER DETECTIVE"
              img={img3}
            />
          </div>

          <div className="cardc2">
            <Card
              ename="FORTUNE 500"
              tagline="Pitch it quick, make it stick"
              img={img4}
            />
            <Card
              ename="SQL MYSTERY HUNT"
              tagline="SOLVE THE PUZZLE OF RELATIONAL DATABASES"
              img={img5}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
