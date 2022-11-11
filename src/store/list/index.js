import { createStore } from "../../util/redux.js";
import { listReducer } from "./reducer.js";

export const initialState = {
  data: null,
};

export const list = createStore(initialState, listReducer);
