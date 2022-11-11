const SETDATA = "SETDATA";

export function listReducer(state = initialState, action) {
  switch (action.type) {
    case SETDATA:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
}
