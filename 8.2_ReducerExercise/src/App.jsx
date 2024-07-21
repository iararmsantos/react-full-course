import React from "react";
export function counterReducer() {}

function numberReducer(state, action) {
  if (action.type === "INCREMENT") {
    return { count: state.count + 1 };
  }
  if (action.type === "DECREMENT") {
    return { count: state.count - 1 };
  }
  if (action.type === "RESET") {
    return { count: 0 };
  }
}
function App() {
  const [numberState, numberDispatch] = React.useReducer(numberReducer, {
    count: 0,
  });

  function handleIncrement() {
    numberDispatch({
      type: "INCREMENT",
    });
  }

  function handleDecrement() {
    numberDispatch({
      type: "DECREMENT",
    });
  }

  function handleReset() {
    numberDispatch({
      type: "RESET",
    });
  }
  return (
    <div id="app">
      <h1>The (Final?) Counter</h1>
      <p id="actions">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </p>
      <p id="counter">{numberState.count}</p>
    </div>
  );
}

export default App;
