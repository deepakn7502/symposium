import React, { useEffect, useState, useRef } from "react";
import "./Home.css";
import { Button, TextField } from "@mui/material";
import logo from "../Images/lg.png";
import Card from "./Card";
import FlipPage from "react-flip-page";
import backgroundVideo from "../Images/bg.mp4";
import bgm from "../Images/bgm.mp3";

import img1 from "../Images/dalleai.jpg";
import img2 from "../Images/crack.jpg";
import img3 from "../Images/coder.jpg";
import img4 from "../Images/fortune500.jpg";
import img5 from "../Images/card1.jpg";

function Home() {
  const [header, setheader] = useState(false);

  const [cards, setcards] = useState(false);
  
  const videoRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
      // play video and audio together
      videoRef.current.play();
      audioRef.current.play();
    }, []);


  useEffect(() => {
    setTimeout(() => {
      setheader(true);
    }, 10000);

    setTimeout(() => {
      setcards(true);
    }, 12000);
  }, []);

  return (
    <div className="home">
      <div className="main">
        <video ref={videoRef} src={backgroundVideo} autoPlay muted  type="video/mp4" id="video" />     
        <audio ref={audioRef} src={bgm} autostart="true" id="audio"/>    
        
        <div className="header">
              <div className="logo">
                <img src={logo} alt="" width="auto" height="100px" />
              </div>

        {header && (
          <div>
          
              <div className="content">
                <p id="name">NOIR ON CAMPUS</p>
                <p id="tagname">
                  AN INTERCOLLEGIATE SYMPOSIUM ON CRIME AND CULTURE
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
    </div>
  );
}

export default Home;
