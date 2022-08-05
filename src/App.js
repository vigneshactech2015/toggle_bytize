import "./App.css";
import { useState } from "react";
import React from "react";
export default function App() {
  const [changecolor, setChangecolor] = useState(false);
  const toggle = () => {
    setChangecolor(!changecolor);

    console.log("button clicked");
  };
  return (
    <div className="App">
      <div className="split">
        <div className={changecolor ? "box blue" : "box"}></div>
        <div className="circle" onClick={toggle}></div>
      </div>
    </div>
  );
}
