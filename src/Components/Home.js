import React from "react";
import "./Home.css";
import logo from "../Images/logo.PNG";

function Home() {

    var words = ["Noir'23"],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 70;

    var word=document.getElementById("name")

let wordflick = () =>  {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    word.text(part);
  },speed);
};




    return (
        <div className="home">
            <div className="header">
                <div className="logo"><img class="img" src={logo} alt="" width="auto" height="150px" />
                </div>

                <div className="content">
                    <h1 >PANIMALAR ENGINEERING COLLEGE </h1>


                    <p>An Autonomous Institution</p>

                    <p>Affliated to Anna University,Chennai</p>

                    <p>JAISAKTHI EDUCATIONAL TRUST</p>

                </div>


            </div>
            <div className="symname">
                <p id="name" onLoad={wordflick()}></p>
            </div>


        </div>
    )
}

export default Home;