import { RefObject, useEffect, useState } from "react";

function useOutsideClick(refs: RefObject<HTMLDivElement>[]) {
  const [isMenuOpen, setMenuState] = useState(false);

  const isClickedOutside = (target: any): boolean =>
    refs.every((ref) => ref.current && !ref.current.contains(target));

  const handleClickOutside = (event: Event): void => {
    if (isClickedOutside(event.target)) {
      setMenuState(false);
    }
  };

  const onToggleMenu = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    event.stopPropagation();
    setMenuState(!isMenuOpen);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return [isMenuOpen, onToggleMenu] as [boolean, typeof onToggleMenu];
}

export default useOutsideClick;
