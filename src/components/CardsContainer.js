import request from "../api/request.js";
import { Container } from "../util/react.js";
import jsonData from "../api/new_data.json";

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

  async componentWillMount() {
    return new Promise((resolve) => resolve(jsonData)).then((data) =>
      this.setState({ data })
    );
  }

  render() {
    return `
    ${
      this.state.data &&
      this.state.data
        .map((item, i) => {
          return `<Card :nickname="${item.nickname}" :mbti="${item.mbti}" :idx="${i}"/>`;
        })
        .join("\n")
    }
  `;
  }
}
