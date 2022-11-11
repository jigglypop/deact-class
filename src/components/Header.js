import { $ } from "../util/jQuery.js";
import { Container } from "../util/react.js";
import { router } from "../util/util.js";

export default class Header extends Container {
  constructor({ $target, ID }) {
    super({ $target, sementic: "header" });
    this.ID = ID;
    this.init();
  }

  render() {
    return `   
      <div class="header header_left">
        <span class="menu_name" id="menu_home">HOME</span>
      </div>
      <div class="header header_right">
        <div class="menu_name" id="menu_signup">SIGNUP</div>
      </div>   
`;
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
