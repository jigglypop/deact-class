import { $ } from "../../util/jQurey";
import { Container } from "../../util/react";
import "./style.css";

export default class GlassButton extends Container {
  props;
  constructor($target, ID, props) {
    super($target, "GlassButton", []);
    this.props = props;
    this.ID = ID;
    this.init();
  }
  render() {
    return `<button class="glass-button" id="${this.ID}" >${this.props.text}</button>`;
  }
  componentDidMount() {
    $(`#GlassButtonOuter-${this.ID}`).on("click", this.props.onClick);
  }
}
