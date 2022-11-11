import { cache } from "../util/util.js";
import { SERVER_URL } from "./constant.js";
import { HTTP_METHOD } from "./method.js";

const requestGet = async (url, token) => {
  const res = await fetch(SERVER_URL + url, HTTP_METHOD.GET(token));
  const data = await res.json();
  const _token = res.headers.get("token");
  if (_token) {
    cache.set("token", _token);
  }
  return data;
};

const requestPost = async (url, data, token) => {
  const res = await fetch(SERVER_URL + url, HTTP_METHOD.POST(data, token));
  const _data = await res.json();
  const _token = res.headers.get("token");
  if (_token) {
    cache.set("token", _token);
  }
  return _data;
};

const requestPut = async (url, data, token) => {
  const res = await fetch(SERVER_URL + url, HTTP_METHOD.PUT(data, token));
  const _data = await res.json();
  const _token = res.headers.get("token");
  if (_token) {
    cache.set("token", _token);
  }
  return _data;
};

const requestDelete = async (url, token) => {
  const res = await fetch(SERVER_URL + url, HTTP_METHOD.DELETE(token));
  const _data = await res.json();
  return _data;
};

const request = {
  get: requestGet,
  post: requestPost,
  put: requestPut,
  delete: requestDelete,
};

export default request;
