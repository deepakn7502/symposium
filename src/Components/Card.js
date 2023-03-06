import "./Card.css";
import React from "react";
export default function Card({ ename, tagline, img, event }) {
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
            window.sessionStorage.setItem("event", event);
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
