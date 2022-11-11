import { Container } from "../util/react.js";

export default class CardsContainer extends Container {
  props;
  state = {
    data: null,
  };

  constructor({ $target, props }) {
    super({ $target, ID: "cards_container" });
    this.props = props;
    this.init();
  }

  render() {
    return `
    <div idx="1" class="card">
        <div class="card_plane card_plane--front">Heedo</div>
        <div class="card_plane card_plane--back">ESTJ</div>
    </div>
    <div idx="2" class="card">
        <div class="card_plane card_plane--front">Kevin</div>
        <div class="card_plane card_plane--back">INTJ</div>
    </div>
    <div idx="3" class="card">
        <div class="card_plane card_plane--front">Dalmi</div>
        <div class="card_plane card_plane--back">INFJ</div>
    </div>
    <div idx="4" class="card">
        <div class="card_plane card_plane--front">Buzz</div>
        <div class="card_plane card_plane--back">INFP</div>
    </div>
    <div idx="5" class="card">
        <div class="card_plane card_plane--front">Edwin</div>
        <div class="card_plane card_plane--back">ISTJ</div>
    </div>
    <div idx="6" class="card">
        <div class="card_plane card_plane--front">Whale</div>
        <div class="card_plane card_plane--back">INTP</div>
    </div>
    <div idx="7" class="card">
        <div class="card_plane card_plane--front">Junho</div>
        <div class="card_plane card_plane--back">ENFJ</div>
    </div>
    <div idx="8" class="card">
        <div class="card_plane card_plane--front">Yumi</div>
        <div class="card_plane card_plane--back">ISFP</div>
    </div>
    <div idx="9" class="card">
        <div class="card_plane card_plane--front">Tom</div>
        <div class="card_plane card_plane--back">INTP</div>
    </div>
    <div idx="10" class="card">
        <div class="card_plane card_plane--front">Barbie</div>
        <div class="card_plane card_plane--back">INTJ</div>
    </div>
  `;
  }
}
