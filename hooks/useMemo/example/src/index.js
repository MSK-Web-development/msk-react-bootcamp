import React, { useState, useMemo } from "react";
import ReactDom from "react-dom";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [calculate, setCalculate] = useState(false);

  let value = useMemo(
    function expensiveCalculation() {
      for (let i = 0; i < 100; i++) {
        console.log("Just for delay");
      }
      return Math.random();
    },
    [calculate]
  );

  function toggleTheme() {
    setDarkTheme(!darkTheme);
  }

  return (
    <div>
      <button onClick={toggleTheme}>Toggle theme</button>
      <div
        style={{
          marginTop: 5,
          height: 100,
          width: 100,
          color: darkTheme ? "white" : "black",
          backgroundColor: darkTheme ? "black" : "white",
          border: "1px solid gray",
        }}
      >
        Theme
      </div>
      <hr />
      <button
        onClick={() => {
          setCalculate(!calculate);
        }}
      >
        Change value
      </button>
      <div>Calculated Value: {value}</div>
    </div>
  );
}

ReactDom.render(<App />, document.getElementById("root"));
