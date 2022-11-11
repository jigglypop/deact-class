import { Container } from "../util/react.js";

export default class ContentTitle extends Container {
  constructor({ $target, props }) {
    super({ $target, className: "content_title" });
    this.props = props;
    this.init();
  }
  render() {
    return `<h1>${this.props.title}</h1>`;
  }
}
