import React from "react";
import "./Home.css";
import logo from "../Images/logo.PNG";
import Card from "./Card";

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
            <div className="cardc1">
            <Card ename="PIXEL IN THE SHADOWS"  tagline="Empowering innovation through intelligent technology."/>
            <Card ename="SHERLOCK CODES"  tagline="Unleash your coding skills to become a champion."/>
            <Card ename="CRACK THE CASE"  tagline="DEII EPUDRAA KAILA VANDHUTU"/>
            </div>
            <div className="cardc2">
            <Card ename="FORTUNE 500"  tagline="Pitch it quick, make it stick - Adzap!"/>
            <Card ename="FORTUNE 500"  tagline="VAI ILLANA NAI THUKITU POIDUM"/>
            </div>


        </div>
    )
}

export default Home;
