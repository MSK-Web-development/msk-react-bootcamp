/*
? Scenario 1
  Let's look at an example where we have multiple children and 
  how we can pass different contextual information to them.
*/

import React, { useContext } from "react";
import ReactDom from "react-dom";

const themes = {
  light: {
    name: "light theme",
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    name: "dark theme",
    foreground: "#ffffff",
    background: "#222222",
  },
};

const ThemeContext = React.createContext(themes.light);

function ParentComponent() {
  return (
    <div>
      <ThemeContext.Provider value={themes.light}>
        <ChildComponent1 />
      </ThemeContext.Provider>
      
      <ThemeContext.Provider value={themes.dark}>
        <ChildComponent2 />
      </ThemeContext.Provider>
    </div>
  );
}

function ChildComponent1() {
  const value = useContext(ThemeContext);

  return (
    <div
      style={{
        display: "inline-block",
        padding: 10,
        width: 100,
        height: 100,
        backgroundColor: value.background,
        color: value.foreground,
      }}
    >
      I have light theme
    </div>
  );
}

function ChildComponent2() {
  const value = useContext(ThemeContext);

  return (
    <div
      style={{
        display: "inline-block",
        padding: 10,
        width: 100,
        height: 100,
        backgroundColor: value.background,
        color: value.foreground,
      }}
    >
      I have dark theme
    </div>
  );
}

ReactDom.render(<ParentComponent />, document.getElementById("root"));
