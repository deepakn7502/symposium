import React, { useEffect } from "react";
import "./App.css";
import Register from "./Components/Register";
import { db } from "./firebase-config";
import { accessData } from "./server";
import { collection } from "firebase/firestore";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Guidelines from "./Components/Guidelines";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/guidelines" element={<Guidelines />} />
      </Routes>
    </Router>
  );
}

export default App;
