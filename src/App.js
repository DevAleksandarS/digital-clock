import React, { useState } from "react";
import "./style.css";

function App() {
  const time = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let [date, setDate] = useState(time);

  setInterval(() => {
    setDate(new Date());
  }, 1000);

  return (
    <div className="container">
      <p className="day-date">
        {days[date.getDay()]} {("0" + date.getDay()).slice(-2)}/
        {("0" + (date.getMonth() + 1)).slice(-2)}/{date.getFullYear()}
      </p>
      <p className="clock">
        {("0" + date.getHours()).slice(-2)}:
        {("0" + date.getMinutes()).slice(-2)}
        <span className="seconds">:{("0" + date.getSeconds()).slice(-2)}</span>
      </p>
    </div>
  );
}

export default App;
