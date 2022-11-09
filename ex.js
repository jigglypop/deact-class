const func = `
function App() {
  console.log("App 실행");
  const [stateA, setStateA] = useState(1);
  const [stateB, setStateB] = useState(1);
  const nums = 1;
  return <div>
    <h1>App실행</h1>
    <A/>
  </div>
}`;
// useState 찾기
export const getUseState = (text) => {
  // const [state, setState] = useState(2); 형태로 된 파라미터 찾기, reduce로 꺼내기
  return (
    text.match(new RegExp("const(.)*\\[(.)*\\](.)*=(.)*use(.)*", "g")) || []
  ).reduce((acc, cur) => {
    const [name, value] = cur
      .match(new RegExp("\\[(.)*\\]"))[0]
      .replace(/(\[|\]|\/s)/g, "")
      .split(",");
    acc.push([name, value]);
    return acc;
  }, []);
};

console.log(getUseState(func));
