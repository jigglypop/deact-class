import { createStore } from "../../util/redux";

const initialState = {
  path: "",
  id: "",
};
const CHANGE = "CHANGE";

function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE:
      return {
        ...state,
        path: action.path,
        id: action.id,
      };
    default:
      return state;
  }
}

export const change = (path, id) => ({
  type: "CHANGE",
  path,
  id,
});

export const router = createStore(initialState, reducer);
