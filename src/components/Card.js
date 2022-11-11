import { $ } from "../util/jQuery.js";
import { Container } from "../util/react.js";

export default class Card extends Container {
  constructor({ $target, props }) {
    super({ $target, className: "card", ID: "card-" + props.idx });
    this.props = props;
    this.init();
  }
  render() {
    return `        
    <div class="card_plane card_plane--front">${this.props.nickname}</div>
    <div class="card_plane card_plane--back">${this.props.mbti}</div>`;
  }
  componentDidMount() {
    const card = $(`#card-${this.props.idx}`);
    card.get().removeAttribute("id");
    card.get().setAttribute("idx", this.props.idx);

    card.on("click", () => {
      card.toggleClass("is-flipped");
    });
  }
}
