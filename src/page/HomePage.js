// import request from "../../api/request.js";
import { Container } from "../util/react.js";

export default class HomePage extends Container {
  props;
  state = {
    data: null,
  };
  constructor({ $target, ID, props }) {
    super({ $target, name: "HomePage" });
    this.ID = ID;
    this.props = props;
    this.init();
  }

  render() {
    return `
    <ContentTitle/>
    <CardsContainer/>
  `;
  }
}
