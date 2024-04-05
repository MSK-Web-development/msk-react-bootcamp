import React, { useRef } from "react";
import ReactDom from "react-dom";

function App() {
  const firstNameInputRef = useRef(null);
  const lastNameInputRef = useRef(null);

  function focusOnFirstName() {
    firstNameInputRef.current.focus();
  }

  function focusOnLastName() {
    lastNameInputRef.current.focus();
  }

  return (
    <div>
      <label>First name</label>
      <br />
      <input ref={firstNameInputRef} type="text" />
      <button onClick={focusOnFirstName}>Focus</button>
      <br />
      <br />
      <label>Last name</label>
      <br />
      <input ref={lastNameInputRef} type="text" />
      <button onClick={focusOnLastName}>Focus</button>
    </div>
  );
}

ReactDom.render(<App />, document.getElementById("root"));
