/*
? Scenario 2
  Let's look at an example where we have a GrandChildComponent and 
  how we can pass different contextual information to it.
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
    <ThemeContext.Provider value={themes.light}>
      <ChildComponent />
    </ThemeContext.Provider>
  );
}

function ChildComponent() {
  const value = useContext(ThemeContext);

  return (
    <div
      style={{
        display: "inline-block",
        padding: 10,
        width: 200,
        height: 200,
        backgroundColor: value.background,
        color: value.foreground,
      }}
    >
      Component1 (light theme)
      
      <ThemeContext.Provider value={themes.dark}>
        <GrandChildComponent />
      </ThemeContext.Provider>
    </div>
  );
}

function GrandChildComponent() {
  const value = useContext(ThemeContext);

  return (
    <div
      style={{
        display: "inline-block",
        margin: 10,
        padding: 10,
        width: 100,
        height: 100,
        backgroundColor: value.background,
        color: value.foreground,
      }}
    >
      Component2 (dark theme)
    </div>
  );
}

ReactDom.render(<ParentComponent />, document.getElementById("root"));
