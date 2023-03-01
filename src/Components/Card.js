import "./Card.css";
import React, { useState, useRef } from "react";
export default function Card({ ename, tagline,img }) {
  return (
<<<<<<< HEAD
    <div className="card">
      <h1 className="title">{ename}</h1>
      <img
        src={img}
        alt="Adzap"
        className="sneaaker-img"
      />
      <p className="tag">{tagline}</p>
      <div className="button-box">
        <button
          className="purchase"
          onClick={() => {
            window.location.pathname = "/register";
          }}
        >
          COMPETE HERE
        </button>
=======
    
      <div
        className="card"
        
        // onMouseMove={handleMouseMove}
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
      >
        <h1 className="title" >
          {ename}
        </h1>
        <img
          src={require("../Images/CmqvNiOUEAEPSW1.jpg")}
          alt="Adzap"
          className="sneaaker-img"
        />
        
        <p className="tag"  >
        {tagline}
        </p>
        
        
        <div className="button-box" >
          <button className="purchase"  onClick={()=>{
            window.location.pathname="/register"
          }}>
            COMPETE HERE
          </button>
        </div>
>>>>>>> b36a9f66ceb670f836d9ba989bc12b5bedd053f9
      </div>
    </div>
  );
}
