import { componentStore, fnStore, init, useStateStore } from "./deact";
import { A, App, B, C } from "./src/components";
import "./style.css";

init(App, A, B, C);
console.log(componentStore.store);
console.log(useStateStore.store);
console.log(fnStore.store);
