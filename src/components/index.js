import { useEffect } from "../../deact/useEffect";
import { useState } from "../../deact/useState";

export function A() {
  const [stateA, setStateA] = useState(2);

  useEffect(() => {
    document.getElementById("button").addEventListener("click", () => {
      setStateA(stateA + 1);
    });
  }, [stateA]);

  return `
  <div>
    <h1>A실행 stateA : ${stateA}</h1>
    <button id="button">버튼</button>
    <C/>
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
