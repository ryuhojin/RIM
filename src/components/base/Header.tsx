import useScrollPosition from "@/libs/hooks/useScrollPosition";
import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  const [scrollPosition] = useScrollPosition(0);
  return (
    <header
      className={`${styles["container"]} ${
        scrollPosition < 50
          ? styles["container_transparent"]
          : styles["container_border"]
      }`}
    >
      <h1 className={`${styles["title"]}`}>
        REST
        <br />
        IN MEMORIES
      </h1>
      <div className={`${styles["menu"]}`}>
        <Link href="" className={`${styles["menu__item"]}`}>
          About Service
        </Link>
        <Link href="" className={`${styles["menu__item"]}`}>
          Memories
        </Link>
        <Link href="" className={`${styles["menu__item"]}`}>
          Price
        </Link>
      </div>
    </header>
  );
};
export default Header;
