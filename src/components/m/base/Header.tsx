import styles from "./Header.module.css";

import { useScrollPosition, useOutsideClick } from "@/libs/hooks";

import { HeaderMenu } from "./HeaderMenu";
import { useRef } from "react";

const Header = () => {
  const [scrollPosition] = useScrollPosition(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, onToggleMenu] = useOutsideClick([menuRef, headerRef]);

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
        <HeaderMenu.Btn isMenuOpen={isMenuOpen} toggleMenu={onToggleMenu} />
      </div>
      <HeaderMenu ref={menuRef} state={isMenuOpen}>
        <HeaderMenu.Item href="" title="About Service" />
        <HeaderMenu.Item href="" title="Memories" />
        <HeaderMenu.Item href="" title="Price" />
      </HeaderMenu>
    </header>
  );
};
export default Header;
