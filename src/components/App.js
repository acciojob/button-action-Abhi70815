import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {
const [classn, setClass]=useState("hide");
  return (
    <div className="App" id="main">
      <p id="para" className={classn}>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
      <button id="click" onClick={()=>setClass("show")}>Show</button>
      
    </div>
  );
}

export default App
