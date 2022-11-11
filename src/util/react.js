import { Modules } from "../../main.js";
import App from "../App.js";
import {
  getID,
  getComponent,
  getFunctions,
  getParams,
  getTag,
} from "./util.js";
import { $ } from "./jQuery.js";
import { store } from "../../main.js";

export class Container {
  ID = getID();
  sementic = "<div></div>";
  // 렌더링
  render() {}
  // api 가져올 때
  componentDidMount() {}
  // dom 선택 시
  componentWillMount() {}
  // 컨스트럭터
  constructor({ $target, className, storeNames, sementic, ID }) {
    this.$target = $target;
    this.className = className ?? null;
    this.ID = ID ? ID : this.ID;
    this.originID = ID;
    this.sementic = sementic ? `<${sementic}></${sementic}>` : this.sementic;
    this.storeNames = (storeNames || []).forEach((name) =>
      store[name].subscribe(this.init.bind(this))
    );
    this.$outer = $(this.sementic).get();
  }
  // this.$outer 세팅
  append() {
    this.$outer.className = `${this.className}`;
    this.$outer.id = `${this.ID}`;
    this.$target.appendChild(this.$outer);
  }
  // beforeRender : 렌더링 전처리
  beforeRender() {
    // this.$outer 세팅
    this.append();
    this.html = this.render();
    // 자식 컴포넌트 있을 때 props들 세팅
    this.propsAll = getComponent(this.html).reduce((result, props) => {
      const id = getID();
      this.html = this.html.replace(props, `<div id="temp-${id}" ></div>`);
      result.push({
        id: id,
        tag: getTag(props),
        params: getParams(props),
        callbacks: getFunctions(props),
      });
      return result;
    }, []);
  }
  // afterRender : 렌더링 후처리
  afterRender() {
    // 파라미터들 주입하기
    this.propsAll.map(({ tag, id, callbacks, params }) => {
      const $temp = $(`#temp-${id}`).get();
      const Component = Modules[tag];
      // 콜백함수 세팅
      Object.keys(callbacks).forEach(
        (key) => (params[key] = this.methods[callbacks[key]])
      );
      // 스토어 인스턴스에 등록
      const instance = new Component({
        $target: $temp.parentNode,
        ID: id,
        props: params,
      });
      // temp 제거하기
      $(`#temp-${id}`).get().remove();
      store.instance.setInstance(`${tag}-${id}`, instance);
    });

    // 어트리뷰트 올바르게 세팅
    // 클래스네임 없으면 삭제
    const $target = document.getElementById(this.ID);
    if (!this.className) $target.removeAttribute("class");
    // 아이디 바꿔주기
    if (this.originID) $target.id = this.originID;
    else $target.removeAttribute("id");
  }
  // Render : 렌더링 전 과정
  Render() {
    // 렌더링 전처리
    this.beforeRender();
    // 렌더링( dom화 작업 )
    this.$outer.innerHTML = this.html;
    // 렌더링 후처리
    this.afterRender();
  }
  // ComponentWillMount 세팅
  setComponentWillMount() {
    // 메서드
    const methods = this.componentWillMount();
    this.methods = methods;
  }
  // 시작 함수
  init() {
    // 메서드 세팅
    this.setComponentWillMount();
    // 렌더링
    this.Render();
    this.componentDidMount();
  }

  // setState
  setState(data) {
    Object.keys(data).forEach((key) => {
      this.state[key] = data[key];
    });
    this.$target.innerHTML = ``;
    this.Render();
    this.componentDidMount();
  }
}

export const init = () => {
  const app = new App({ $target: $("body").get() });
  store.instance.setInstance(`${app.ID}`, app);
};
