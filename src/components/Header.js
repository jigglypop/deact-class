import { Container } from "../util/react.js";

export default class Header extends Container {
  constructor({ $target }) {
    super({ $target, sementic: "header" });
    this.init();
  }

  render() {
    return `      
    
    <div class="header header_left">
        <span class="menu_name" id="menu_home">HOME</span>
      </div>
      <div class="header header_right">
        <div class="menu_name" id="menu_signup">SIGNUP</div>
      </div>`;
  }

  componentDidMount() {}
}
