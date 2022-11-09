import { useEffect } from "../../deact/useEffect";
import { useState } from "../../deact/useState";

export function A() {
  console.log("A 실행");
  const [stateA, setStateA] = useState(2);
  console.log("리렌더: ", stateA);
  useEffect(() => {
    setStateA(stateA + 1);
  }, []);
  return `
  <div>
    <h1>A실행 stateA : ${stateA}</h1>
    <button id="button">버튼</button>
  </div>`;
}
export function B() {
  console.log("B 실행");
  return `
  <div>
    B실행
  </div>`;
}

export function C() {
  console.log("C 실행");
  // const { useState } = this;
  // const [nums, setNums] = useState(1);
  // setNums(nums + 1);
  // console.log(nums);
  return `<div>C실행</div>`;
}

export function App() {
  console.log("App 실행");
  const [stateA, setStateA] = useState(1);
  return `<div>
    <h1>App실행</h1>
    <A/>
  </div>`;
}
