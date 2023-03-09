import React, { useEffect, useState, useRef } from "react";
import "./Home.css";
import logo from "../Images/lg.png";
import Card from "./Card";
import backgroundVideo from "../Images/bg.mp4";
// import bgm from "../Images/bgm.mp3";

import img1 from "../Images/pixel.png";
import img2 from "../Images/scode.png";
import img3 from "../Images/codetobuild.png";
import img4 from "../Images/fortune500.png";
import img5 from "../Images/mystery-hunt.png";

function Home() {
  const [cards, setcards] = useState(false);

  const videoRef = useRef(null);
  // const audioRef = useRef(null);

  useEffect(() => {
    // play video and audio together
    videoRef.current.play();
    // audioRef.current.play();
  }, []);

  useEffect(() => {
    //   setTimeout(() => {
    //     setheader(true);
    //   }, 100);

    setTimeout(() => {
      setcards(true);
    }, 110);
  }, []);

  // const [backgroundVideo, setbackgroundVideo] = useState();

  // useEffect(() => {
  //   console.log(backgroundVideo);
  //   getDownloadURL(ref(storage, "videos/bg.mp4")).then((url) => {
  //     setbackgroundVideo(url);
  //   });
  // }, [backgroundVideo]);

  return (
    <div className="main">
      <div className="background-container"></div>
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

      {/* <div className="header">
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <div className="content">
          <h1>DEPARMENT OF COMPUTER SCIENCE AND ENGINEERING presents</h1>
            <p id="name">XERONE'23</p>
            <p id="tagname">AN INTERCOLLEGIATE VIRTUAL SYMPOSIUM </p>
        </div>
      </div> */}
      <div className="header">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="content">
          <h2>DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING presents</h2>
          <p id="name">XERONE'23</p>
          <p id="tagname">AN INTERCOLLEGIATE SYMPOSIUM</p>
        </div>
      </div>
      {/* <div className="header-container">
        <div className="header-logo">
          <img src={logo} alt="" />
        </div>
        <div className="header-content">
          <p>DEPARMENT OF COMPUTER SCIENCE AND ENGINEERING presents</p>
          <p>XERONE'23</p>
          <p>AN INTERCOLLEGIATE VIRTUAL SYMPOSIUM </p>
        </div>
      </div> */}
      {cards && (
        <div>
          <div className="cardc1">
            <Card
              ename="CRACK THE CASE"
              tagline="UNRAVEL COMPLEX PROGRAMMING"
              img={img2}
              event="sherlock"
            />
            <Card
              ename="SQL MYSTERY HUNT"
              tagline="SOLVE THE PUZZLE OF RELATIONAL DATABASES"
              img={img5}
              event="sql"
            />
            <Card
              ename="CODE TO BUILD"
              tagline="UNLEASH YOUR INNER DETECTIVE"
              img={img3}
              event="crack"
            />
          </div>

          <div className="cardc2">
            <Card
              ename="FORTUNE 500"
              tagline="Pitch it quick, make it stick"
              img={img4}
              event="fortune"
            />
            <Card
              ename="PIXEL IN THE SHADOWS"
              tagline="EXPERIENCE THE FUTURE OF INTELLIGENCE"
              img={img1}
              event="pixel"
            />
          </div>
        </div>
      )}

      <div className="credits">
        <h3>DESIGNED AND DEVELOPED BY</h3>
        <a href="https://www.linkedin.com/in/deepak-n-71087b24a" target="_blank">DEEPAK N </a>
        <a href="https://www.linkedin.com/in/bharath-waj-660957178" target="_blank">BHARATHWAJ M </a>
        <a href="https://www.linkedin.com/in/arunkumar-j-b6a0b2241" target="_blank">ARUNKUMAR J </a>
        <a href="https://www.linkedin.com/in/daniel-george-51223a218" target="_blank">DANIEL GEORGE S </a>
        <a href="https://www.linkedin.com/in/" target="_blank">ASHWIN SANJAY J</a>
        <a href="https://www.linkedin.com/in/sanjeev-vijayanand" target="_blank" >SANJEEV V </a>
      
      </div>
    </div>
  );
}

export default Home;
