import { callStackStore, useEffectStore, useStateStore } from ".";

export function useEffect(f, value) {
  // 함수 아이디 가져오기
  const callStack = callStackStore.get();
  const stack = callStack[callStack.length - 1];
  const id = stack[0];
  // 바뀌었으면 콜백 함수 글로벌에 push (렌더링 이후에 실행하기 위함)
  useEffectStore.set([id, goUseEffect.bind({ id, f, value })]);
}

export function goUseEffect() {
  const { id, value, f } = this;
  const hooks = useStateStore.get(id);
  let _value = hooks[id];
  let changed = true;
  // value에서 변한 것이 있는지 찾음
  if (_value) changed = value.some((d, i) => d !== _value[i]);
  if (changed) {
    f();
  }
}
