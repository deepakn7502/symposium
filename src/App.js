import React, { useEffect } from "react";
import "./App.css";
import Register from "./Components/Register";
import { db } from "./firebase-config";
import { accessData } from "./server";
import { collection } from "firebase/firestore";
import { } from "./server"
import { Button } from "@mui/material";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";

function App() {
  const getData = async () => {

    const databaseRef = collection(db, "sample");
    const data = await accessData(databaseRef)
    console.log(data)
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
