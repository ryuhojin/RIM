import { DependencyList, useEffect, useRef } from "react";

type EffectCallback = () => void | (() => void | undefined);

const useDebounceEffect = (
  effect: EffectCallback,
  deps: DependencyList,
  delay: number
): void => {
  const effectRef = useRef(effect);

  useEffect(() => {
    effectRef.current = effect;
  }, [effect]);

  useEffect(() => {
    const handler = setTimeout(() => effectRef.current(), delay);

    return () => {
      clearTimeout(handler);
    };
  }, [...deps, delay]); // delay를 의존성 배열에 포함
};

export default useDebounceEffect;
