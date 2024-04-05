import React, { useCallback, useState } from "react";
import ReactDom from "react-dom";

function App() {
  const [outerCount, setOuterCount] = useState(0);
  const [innerCount, setInnerCount] = useState(0);
  const [renderInnerCounter, setrenderInnerCounter] = useState(false);

  // This is the use of useCallback hook.
  // The inner counter will not re-render when outer counter is re-rendering
  const incrementCallback = useCallback(() => {
    setInnerCount(innerCount + 1);
    return innerCount;
  }, [renderInnerCounter]);

  return (
    <div>
      <div>Outer counter</div>
      <br />
      <button
        onClick={() => {
          setOuterCount(outerCount + 1);
        }}
      >
        Increment
      </button>
      <br />
      Outer count: {outerCount}
      <hr />
      <div>Inner counter</div>
      <br />
      <button
        onClick={() => {
          setrenderInnerCounter(!renderInnerCounter);
        }}
      >
        Increment
      </button>
      <InnerCounter increment={incrementCallback} />
    </div>
  );
}

function InnerCounter({ increment }) {
  return <div>Inner count: {increment()}</div>;
}

ReactDom.render(<App />, document.getElementById("root"));
