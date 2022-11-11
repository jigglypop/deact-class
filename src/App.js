import { store } from "../main.js";
import { change } from "./store/router/index.js";
import { $ } from "./util/jQuery.js";
import { Container } from "./util/react.js";
import { router } from "./util/util.js";

export default class App extends Container {
  props;
  constructor({ $target, ID, props }) {
    super({
      $target,
      storeNames: ["router"],
      ID: "page_content",
      sementic: "main",
    });
    this.ID = ID;
    this.props = props;
    // 패스 세팅
    this.setPath();
    window.addEventListener("popstate", this.setPath);
    this.init();
  }

  setPath() {
    const { pathname } = window.location;
    const [_, path, id] = pathname.split("/");
    store.router.dispatch(change(path, id ?? ""));
  }

  render() {
    const { pathname } = window.location;
    switch (pathname) {
      case "/signup":
        return `
          <ContentTitle :title="CardView" />
          <FormContainer/>
        `;
      default:
        return `
          <ContentTitle :title="Hello, GreatPeoPle!" />
          <CardsContainer/>
        `;
    }
  }
  componentDidMount() {
    $(".header_left").on("click", () => {
      router("/", "홈", "");
    });
    $(".header_right").on("click", () => {
      router("/signup", "로그인", "");
    });
  }
}
