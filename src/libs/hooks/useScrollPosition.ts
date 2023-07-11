import { useEffect, useState } from "react";
import useDebounceEffect from "./useDebouncHook";

const useScrollPosition = (inititalState: number = 0) => {
  const [scrollPosition, setScrollPosition] = useState<number>(inititalState);

  const updatePosition = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useDebounceEffect(
    () => {
      window.addEventListener("scroll", updatePosition);
      return () => {
        window.removeEventListener("scroll", updatePosition); //unmount시 해제되도록
      };
    },
    [scrollPosition],
    300
  );

  return [scrollPosition, setScrollPosition];
};

export default useScrollPosition;
