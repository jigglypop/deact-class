import instance from "../util/redux.js";
import { list } from "./list/index.js";
import { router } from "./router/index.js";

export default function initStore() {
  return {
    instance: instance,
    router: router,
    list: list,
  };
}
