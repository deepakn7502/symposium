import React, { useEffect } from "react";
import "./App.css";
import Register from "./Components/Register";
import { db } from "./firebase-config";
import { accessData } from "./server";
import { collection } from "firebase/firestore";
import { } from "./server"
import { Button } from "@mui/material";

function App() {



  const getData = async () => {

    const databaseRef = collection(db, "sample");
    const data = await accessData(databaseRef)
    console.log(data)
  }

  return (
    <div>
      {/* <Register /> */}
      <Button onClick={() => { getData() }} variant="contained" >Get Data</Button>
    </div>
  );
}

export default App;
