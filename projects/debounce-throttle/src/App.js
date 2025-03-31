import { useState, useEffect } from "react";

const styles = {
  root: {
    display: "flex",
    flexDirection: "row",
  },
  listHeading: {
    fontWeight: "bold",
  },
  debouncedListRoot: {
    width: "50vw",
  },
  throttledListRoot: {
    width: "50vw",
  },
  listItem: {
    fontSize: 10,
  },
};

const TODOS_URL = "https://dummyjson.com/todos";
const MECHANISMS = {
  DEBOUNCE: "DEBOUNCE",
  THROTTLE: "THROTTLE",
};

function App() {
  const [todos, setTodos] = useState([]);
  const [debouncedResults, setDebouncedResults] = useState([]);
  const [throttledResults, setThrottledResults] = useState([]);

  useEffect(() => {
    fetch(TODOS_URL)
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setTodos(result.todos);
      });
  }, []);

  // Debounce - Make this function run only when i stop typing for 3 seconds
  const [debounceTimer, setDebounceTimer] = useState(null);
  function debouncedInputOnChangeHandler(e) {
    clearTimeout(debounceTimer);
    setDebounceTimer(
      setTimeout(() => {
        console.log("Debounced function ran");
        inputOnChangeHandler(e, MECHANISMS.DEBOUNCE);
      }, 3000)
    );
  }
  // Throttle - Make this function run only once every 3 seconds
  const [lastTime, setLastTime] = useState(0);
  function throttledInputOnChangeHandler(e) {
    let now = Date.now();
    if (now - lastTime > 3000) {
      console.log("Throttled function ran");
      inputOnChangeHandler(e, MECHANISMS.THROTTLE);
      setLastTime(now);
    }
  }

  function inputOnChangeHandler(e, mechanism) {
    const word = e.target.value;
    let filteredTodos = [];
    filteredTodos = todos.filter((todo) => {
      if (todo.todo.includes(word)) return todo;
    });

    if (mechanism === MECHANISMS.DEBOUNCE) setDebouncedResults(filteredTodos);
    if (mechanism === MECHANISMS.THROTTLE) setThrottledResults(filteredTodos);
  }

  return (
    <div style={styles.root}>
      <div style={styles.debouncedListRoot}>
        <div style={styles.listHeading}>Debounced todo list</div>
        <input type="text" onChange={debouncedInputOnChangeHandler} />
        {debouncedResults.map((item, index) => {
          return (
            <div key={index} style={styles.listItem}>
              {item.todo}
            </div>
          );
        })}
      </div>
      <div style={styles.throttledListRootListRoot}>
        <div style={styles.listHeading}>Throttled todo list</div>
        <input type="test" onChange={throttledInputOnChangeHandler} />
        {throttledResults.map((item, index) => {
          return (
            <div key={index} style={styles.listItem}>
              {item.todo}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
