import { store } from "../main.js";
import { change } from "./store/router/index.js";
import { Container } from "./util/react.js";

export default class App extends Container {
  props;
  constructor({ $target, ID, props }) {
    super({
      $target,
      storeNames: ["router"],
      sementic: "main",
      ID: "page_content",
    });
    this.ID = ID;
    this.props = props;
    this.init();
    // 패스 세팅
    this.setPath();
    window.addEventListener("popstate", this.setPath);
  }

  setPath() {
    const { pathname } = window.location;
    const [_, path, id] = pathname.split("/");
    store.router.dispatch(change(path, id ?? ""));
  }

  render() {
    const { pathname } = window.location;
    switch (pathname) {
      default:
        return `
          <Header/>
          <ContentTitle/>
          <CardsContainer/>
        `;
    }
  }
}
