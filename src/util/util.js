import { store } from "../../main.js";
import { change } from "../store/router/index.js";

export const router = (path, name, id) => {
  const { pathname } = window.location;
  if (pathname === path + id) return;
  window.history.pushState(`${path}${id}`, name, `${path}${id}`);
  store.router.dispatch(change(path, id));
};
// regex 보일러플레이트
export const getRegex = (tag, text) => {
  return text.match(new RegExp(tag, "g")) || [];
};
// 인자 찾기
export const getParams = (text) => {
  return getRegex(':.*?=".*?"', text).reduce((result, cur) => {
    const [name, value] = cur.replace(/(\"|:)/g, "").split("=");
    result[name] = value;
    return result;
  }, {});
};
// 함수 찾기
export const getFunctions = (text) => {
  return getRegex('@.*?=".*?"', text).reduce((result, cur) => {
    const [name, value] = cur.replace(/(\"|@)/g, "").split("=");
    result[name] = value;
    return result;
  }, {});
};
// 컴포넌트 찾기
export const getComponent = (text) => {
  return getRegex("(<[A-Z].*/>)", text);
};
// 태그 찾기
export const getTag = (text) => {
  return (text.match(new RegExp("[A-Z]([a-zA-Z])*", "g")) || [""])[0];
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
