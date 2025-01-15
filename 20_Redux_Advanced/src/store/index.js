import { configureStore, createSlice } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import cartSlice from "./cart-slice";

/*
- Reducer must be pure - no side-effect,  synchronous functions
- takes input and produces output
- side-effects and async are executed in the component via useEffect or inside actions creators

Steps to use redux:

1 - create slice: map of all reducers (actions) (can one or more)

2 - create the store

3 - wrap Provider store around <App /> (index.js)

To implement:
In the component you have an action that should be dispatched you can use the action created and exported in the slice (example CartButton.js)

To use:
useSelector will allow you to access the store data using the reducer key (example App.js)
*/

const store = configureStore({
  reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer },
});

export default store;
