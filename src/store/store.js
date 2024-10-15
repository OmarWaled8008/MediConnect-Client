import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./tokenslice";

const store = configureStore({
  reducer: {
    auth: tokenReducer, 
  },
});

export default store;
