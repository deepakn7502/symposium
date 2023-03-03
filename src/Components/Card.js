import "./Card.css";
import React, { useState, useRef } from "react";
import { Avatar } from "@mui/material";
export default function Card({ ename, tagline, img }) {
  return (
    <div className="card">
      <h1 className="title">{ename}</h1>
      <img src={img} alt="Adzap" className="sneaaker-img" />
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
      </div>
    </div>
  );
}

// onMouseMove={handleMouseMove}
// onMouseEnter={handleMouseEnter}
// onMouseLeave={handleMouseLeave}
