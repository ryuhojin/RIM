import { DependencyList, useCallback, useEffect, useRef } from "react";

type EffectCallback = () => void | (() => void | undefined);

const useThrottleEffect = (
  effect: EffectCallback,
  deps: DependencyList,
  delay: number
): void => {
  const lastRun = useRef(Date.now());
  const effectRef = useRef(effect);

  useEffect(() => {
    effectRef.current = effect;
  }, [effect]);

  useEffect(() => {
    const execute = useCallback(() => {
      if (Date.now() - lastRun.current >= delay) {
        effectRef.current();
        lastRun.current = Date.now();
      }
    }, [delay]);

    execute();
    const interval = setInterval(execute, delay);

    return () => {
      clearInterval(interval);
    };
  }, [...deps, delay]); // delay를 의존성 배열에 포함
};

export default useThrottleEffect;
