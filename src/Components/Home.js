import React from "react";
import "./Home.css";
import logo from "../Images/logo.PNG";

function Home() {
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
                <p id="name" >NOIR'23</p>
            </div>


        </div>
    )
}

export default Home;