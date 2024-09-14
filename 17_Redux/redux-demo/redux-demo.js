const redux = require("redux");

//Reducer - produce new state snapshot
//param 1 = old state
//param 2 = action
//return new state
//shouldn't have side effects (pure function)
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

//Central Store
//param1 = reducer that will manipulate the data
const store = redux.createStore(counterReducer);

//set subscription to store
const counterSubscriber = () => {
  //latest store after update
  const latestStore = store.getState();
  console.log(latestStore);
};

//call counterSubscriber
store.subscribe(counterSubscriber);

//Action
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
