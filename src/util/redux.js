export const createStore = (initState, reducer) => {
  let state = initState;
  const events = [];
  const subscribe = (f) => {
    events.push(f);
  };
  const publish = () => {
    events.map((f) => f());
  };
  const dispatch = (action) => {
    state = reducer(state, action);
    publish();
  };
  const getState = () => state;
  return {
    getState,
    subscribe,
    dispatch,
  };
};

export const createSlice = (initState, reducer) => {
  let state = initState;
  const events = [];
  const subscribe = (f) => {
    events.push(f);
  };
  const publish = () => {
    events.map((f) => f());
  };
  const dispatch = (action) => {
    state = reducer(state, action);
    publish();
  };
  const getState = () => state;
  return {
    getState,
    subscribe,
    dispatch,
  };
};

export class Instance {
  instance = {};
  constructor() {}
  setInstance(key, value) {
    this.instance[key] = value;
  }
  getInstance() {
    return this.instance;
  }
  getInstanceByKey(key) {
    return this.instance[key];
  }
}
const instance = new Instance();
export default instance;
