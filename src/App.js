import React, { useEffect } from "react";
import "./App.css";
import Register from "./Components/Register";
import { db } from "./firebase-config";
import { accessData } from "./server";
import { collection } from "firebase/firestore";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Guidelines from "./Components/Guidelines";
import Card from "./Components/Card";
import Audio from "./Components/Audio";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/guidelines" element={<Guidelines />} />
        <Route path="/card" element={<Card />} />
        <Route path="/audio" element={<Audio />} />
      </Routes>
    </Router>
  );
}

export default App;
