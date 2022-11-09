// 스토어
export const Store = function () {
  const store = {};
  return {
    get(name) {
      return store[name] ?? null;
    },
    set(name, value) {
      store[name] = value;
      return store[name];
    },
    store,
  };
};
// 스택 스토어
export const StackStore = function () {
  const store = [];
  return {
    get() {
      return store;
    },
    set(name) {
      store.push(name);
      return store;
    },
    store,
  };
};
