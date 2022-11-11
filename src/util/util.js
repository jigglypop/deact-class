import { store } from "../../main.js";
import { change } from "../store/router/index.js";

export const router = (path, name, id) => {
  window.history.pushState(`${path}${id}`, name, `${path}${id}`);
  store.router.dispatch(change(path, id));
};
const getRegex = (tag, text) => {
  return text.match(new RegExp(tag, "g")) || [];
};

// 인자 찾기
export const getParams = (text) => {
  const datas = getRegex(':.*?=".*?"', text);
  let _datas = {};
  datas.map((item) => {
    const [name, value] = item.replace(/(\"|:)/g, "").split("=");
    _datas[name] = value;
  });
  return _datas;
};
// 함수 찾기
export const getFunctions = (text) => {
  const datas = getRegex('@.*?=".*?"', text);
  let _datas = {};
  datas.map((item) => {
    const [name, value] = item.replace(/(\"|@)/g, "").split("=");
    _datas[name] = value;
  });
  return _datas;
};

// 컴포넌트 인지
export const isComponent = (text) => {
  const openTag = "(<.*>)";
  const jsxs = getRegex(`${openTag}`, text);
  const jsxDatas = jsxs
    ? jsxs.map((jsx) => {
        return {
          jsx: jsx,
          params: getParams(jsx),
        };
      })
    : null;
  return jsxDatas;
};
// 컴포넌트 거르기
export const getComponent = (text) => {
  const openTag = "(<.*/>)";
  return getRegex(`${openTag}`, text);
};

export const isTag = (text) => {
  const Tag = "[a-zA-Z-0-9:s]";
  const openTag = `<(${Tag})+>`;
  return getRegex(`${openTag}`, text);
};

export const isOuter = (text) => {
  const Tag = "[a-zA-Z-0-9:s]";
  return getRegex(`<(${Tag})+>.*?</(${Tag})+>`, text);
};
// 태그 찾기
export const getTag = (text) => {
  const componentTag = "[A-Z]([a-zA-Z])*";
  const regex = new RegExp(componentTag, "g");
  const result = text.match(regex) || [""];
  return result[0];
};
// 캐시
export const cache = {
  get(key) {
    const result = localStorage.getItem(key);
    if (result) {
      const data = JSON.parse(result);
      return data;
    } else {
      return null;
    }
  },
  set(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  },
  remove(key) {
    localStorage.removeItem(key);
  },
};

// uuid 생성함수
export const getID = () => {
  return "xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    let r = (Math.random() * 16) | 0;
    let v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};
