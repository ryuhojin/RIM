import Link from "next/link";
import React, { forwardRef, ReactNode } from "react";
import styles from "./Header.module.css";
import { MdMenu, MdClose } from "react-icons/md";

interface HeaderMenuListProps {
  children: ReactNode;
  state: boolean;
}
const HeaderMenuList = forwardRef<HTMLDivElement, HeaderMenuListProps>(
  ({ children, state, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`${styles["menu"]} ${state ? styles["menu--open"] : ""}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

interface HeaderMenuItemProps {
  href: string;
  title: string;
}
const HeaderMenuItem = ({ href, title }: HeaderMenuItemProps) => {
  return (
    <Link href={href} className={`${styles["menu__item"]}`}>
      {title}
    </Link>
  );
};

interface HeaderMenuBtnProps {
  isMenuOpen: boolean;
  toggleMenu: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const HeaderMenuBtn = ({ isMenuOpen, toggleMenu }: HeaderMenuBtnProps) => (
  <button
    className={`${styles["btn"]} ${styles["btn--reset"]}`}
    onClick={toggleMenu}
  >
    <span className={styles["btn__icon"]}>
      {!isMenuOpen ? <MdMenu /> : <MdClose />}
    </span>
  </button>
);

export const HeaderMenu = Object.assign(HeaderMenuList, {
  Item: HeaderMenuItem,
  Btn: HeaderMenuBtn,
});
