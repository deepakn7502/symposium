import React, { useEffect, useState, useRef } from "react";
import "./Home.css";
import { Button, TextField } from "@mui/material";
import logo from "../Images/lg.png";
import Card from "./Card";
import FlipPage from "react-flip-page";
import backgroundVideo from "../Images/bg.mp4";

import img1 from "../Images/card1.jpg";
import img2 from "../Images/card1.jpg";
import img3 from "../Images/card1.jpg";
import img4 from "../Images/card1.jpg";
import img5 from "../Images/card1.jpg";

function Home() {

  const [loaded, setLoaded] = useState(false);


  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 10000);
  }, []);


  return (
    <div className="home">
      <div className="main">
        <video autoPlay muted id="video">
          <source src={backgroundVideo} type="video/mp4" />
        </video>

        { loaded && 
        <div>
          <div className="header">
          <div className="logo">
            <img src={logo} alt="" width="auto" height="100px" />
          </div>

          <div className="content">
            <p id="name">NOIR ON CAMPUS</p>
            <p id="tagname">
              AN INTERCOLLEGIATE SYMPOSIUM ON CRIME AND CULTURE{" "}
            </p>
          </div>
        </div>
        
        <div className="cardc1">
        <Card
          ename="PIXEL IN THE SHADOWS (DALL-E AI)"
          tagline="DEII EPUDRAA KAILA VANDHUTU"
          img={img1}
        />
        <Card
          ename="SHERLOCK CODES"
          tagline="DEII EPUDRAA KAILA VANDHUTU"
          img={img2}
        />
        <Card
          ename="CRACK THE CASE"
          tagline="DEII EPUDRAA KAILA VANDHUTU"
          img={img3}
        />
      </div>

      <div className="cardc2">
        <Card
          ename="FORTUNE 500"
          tagline="Pitch it quick, make it stick - Adzap!"
          img={img4}
        />
        <Card
          ename="Yet to be decided"
          tagline="VAI ILLANA NAI THUKITU POIDUM"
          img={img5}
        />
      </div>
      </div>
        }
        


      </div>
    </div>
  );
}

export default Home;
