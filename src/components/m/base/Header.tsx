import styles from "./Header.module.css";

import useScrollPosition from "@/libs/hooks/useScrollPosition";
import { HeaderMenu } from "./HeaderNav";

import { MdClose, MdMenu } from "react-icons/md";
import { RefObject, useEffect, useRef, useState } from "react";


const Header = () => {
  const [scrollPosition] = useScrollPosition(0);
  const [isMenuOpen, setMenuState] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const isClickedOutside = (
    ref1: RefObject<HTMLDivElement>,
    ref2: RefObject<HTMLDivElement>,
    target: any
  ): boolean =>
    [ref1, ref2].every((ref) => ref.current && !ref.current.contains(target));

  const handleClickOutside = (event: Event): void => {
    if (isClickedOutside(menuRef, headerRef, event.target)) {
      setMenuState(false);
    }
  };
  const handleClickButton = (
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
  });

  return (
    <header
      className={`${styles.container} ${
        scrollPosition < 50 && !isMenuOpen
          ? styles["container--transparent"]
          : styles["container--borderd"]
      }`}
      ref={headerRef}
    >
      <div className={`${styles["wrapper"]}`}>
        <h1 className={`${styles["title"]}`}>
          REST
          <br />
          IN MEMORIES
        </h1>
        <button
          className={`${styles["btn"]} ${styles["btn--reset"]}`}
          onClick={handleClickButton}
        >
          <span className={`${styles["btn__icon"]}`}>
            {!isMenuOpen ? <MdMenu /> : <MdClose />}
          </span>
        </button>
      </div>
      <HeaderMenu ref={menuRef} state={isMenuOpen}>
        <HeaderMenu.Item href="" title="asdf" />
        <HeaderMenu.Item href="" title="asdf" />
        <HeaderMenu.Item href="" title="asdf" />
      </HeaderMenu>
    </header>
  );
};
export default Header;
