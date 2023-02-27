import React, { useEffect } from "react";
import "./App.css";
import Register from "./Components/Register";
<<<<<<< HEAD
=======


>>>>>>> 265e69774c9b3648abef3a3261d292a7bfc8fb89
import { db } from "./firebase-config";
import { accessData } from "./server";
import { collection } from "firebase/firestore";
import { } from "./server"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";

function App() {

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
