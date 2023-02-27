import React, { useEffect } from "react";
import "./App.css";
import Register from "./Components/Register";
<<<<<<< HEAD
=======

import { db } from "./firebase-config";
import { accessData } from "./server";
import { collection } from "firebase/firestore";
>>>>>>> 3e26855f3616abfd954bb8e55ef8312817cdfbf9
import { } from "./server"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";

function App() {
<<<<<<< HEAD
=======
  const getData = async () => {

    const databaseRef = collection(db, "sample");
    const data = await accessData(databaseRef)
    console.log(data)
  }

>>>>>>> 3e26855f3616abfd954bb8e55ef8312817cdfbf9
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
