import React, { useReducer } from "react";
import ReactDom from "react-dom";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

const initialState = {
  count: 0,
};

/* 
React doesn’t use the state = initialState argument convention 
popularized by Redux. The initial value sometimes needs to depend 
on props and so is specified from the Hook call instead.
*/
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case ACTIONS.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <button
        onClick={() => {
          dispatch({
            type: ACTIONS.DECREMENT,
          });
        }}
      >
        -
      </button>
      <div>Count: {state.count}</div>
      <button
        onClick={() => {
          dispatch({
            type: ACTIONS.INCREMENT,
          });
        }}
      >
        +
      </button>
    </div>
  );
}

ReactDom.render(<Counter />, document.getElementById("root"));
