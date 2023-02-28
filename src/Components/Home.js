import React from "react";
import "./Home.css";
import logo from "../Images/logo.png";

function Home() {
    return (
        <div className="home">
            <div className="header">
                <div className="logo"><img class="img" src={logo} alt="" width="auto" height="150px" />
                </div>

                <div className="content">
                <p id="name" >NOIR ON CAMPUS</p>

                </div>


            </div>
            <div className="name">
            <h1>PANIMALAR ENGINEERING COLLEGE </h1>
            </div>


        </div>
    )
}

export default Home;
