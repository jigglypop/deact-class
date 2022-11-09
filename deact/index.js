import { A, App } from "../src/components/index.js";
import getID from "./getID.js";
import { StackStore, Store } from "./store.js";

// 인자 찾기
export const getParams = (text) => {
  // on="" 형태로 된 파라미터 찾기, reduce로 꺼내기
  return (text.match(new RegExp('\\s.*?=".*?"', "g")) || []).reduce(
    (acc, cur) => {
      const [name, value] = cur.replace(/(\s|\")/g, "").split("=");
      return { ...acc, [name]: value };
    },
    {}
  );
};
// 컴포넌트 인지
export const getComponent = (text) => {
  // <.*/> 형태로 된 컴포넌트 찾고 params와 함께 세팅
  return (text.match(new RegExp("(<.*/>)", "g")) || []).reduce((acc, jsx) => {
    return [
      ...acc,
      {
        jsx: jsx,
        params: getParams(jsx),
      },
    ];
  }, []);
};

// 렌더링
export function render(fn, id) {
  // 아이디 세팅
  const _id = getID();
  callStackStore.set([_id, fn, []]);
  // 함수 실행
  let jsx = fn();
  jsx = jsx.replace("<div", "<div" + " id=" + _id + " ");
  componentStore.set(_id, {
    jsx: jsx,
    id: _id,
    fn: fn,
    children: [],
  });
  const components = getComponent(jsx);
  const children = [];
  // 컴포넌트 요소가 있는지 찾은 다음 트리 순회
  for (let component of components) {
    const j = component.jsx;
    const fnObj = fnStore.get(j.match(/[A-Z]([a-z])*/)[0]);
    const jsxObj = render(fnObj.fn, null);
    jsx = jsx.replace(j, jsxObj.jsx);
    children.push(jsxObj.id);
  }
  // 자식요소 세팅
  componentStore.set(_id, { ...componentStore.get(_id), children });
  return { jsx, id: _id };
}

// 리렌더링
export function rerender(fn, _id, isTop) {
  callStackStore.set([_id, fn, []]);
  // 함수 실행
  let jsx = fn();
  jsx = jsx.replace("<div", "<div" + " id=" + _id + " ");
  const component = componentStore.get(_id);
  const children = component.children;
  // 아이디로 순회
  for (const id of children) {
    const component = componentStore.get(id);
    const j = component.jsx;
    console.log(j);
    const jsxObj = rerender(component.fn, component.id, false);
    jsx = jsx.replace(j, jsxObj.jsx);
  }
  if (isTop) document.getElementById(_id).innerHTML = jsx;
  return { jsx, id: _id };
}

// fn 함수에 이름 등록
export function register(arg) {
  arg.forEach((fn) =>
    fnStore.set(fn.name, {
      fn: fn,
    })
  );
}

// 렌더링 후 effect 런
export function runEffect() {
  useEffectStore.store.forEach((item) => item[1]());
}
// 스토어 인스턴스 두 개 생성
export const useStateStore = new Store();
export const useEffectStore = new StackStore();

export const fnStore = new Store();
export const callStackStore = new StackStore();
export const componentStore = new Store();
// 함수 시작
export function init(...argument) {
  // 등록
  register(argument);
  // 렌더링
  document.getElementById("app").innerHTML = render(App, null).jsx;
  // 리렌더링 실험
  console.log("리렌더링");
  // rerender(A, callStackStore.store[1]);
  console.log(useEffectStore.store);
  // useEffect 실행
  runEffect();
}
