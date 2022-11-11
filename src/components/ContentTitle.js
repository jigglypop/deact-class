import { Container } from "../util/react.js";

export default class ContentTitle extends Container {
  constructor({ $target }) {
    super({ $target, className: "content_title" });
    this.init();
  }
  render() {
    return `<h1> CardView </h1>`;
  }
}
