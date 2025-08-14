import React, { useState } from "react";

function App() {
  let temp = new Date().toLocaleTimeString();
  let [time, currentTime] = useState(temp);
  function setTime() {
    currentTime(temp);
  }
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={setTime}>Get Time</button>
    </div>
  );
}

export default App;
