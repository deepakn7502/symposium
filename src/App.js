import React from "react";
import "./App.css";
import Register from "./Components/Register";
import {} from "./firebase-config";
import {} from "./server";
import {} from "firebase/firestore";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/register"element={<Register />} />
      </Routes>
    </Router>
   
  );
}

export default App;
