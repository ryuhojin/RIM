import useScrollPosition from "@/libs/hooks/useScrollPosition";
import styles from "./Header.module.css";

const Header = () => {
  const [scrollPosition] = useScrollPosition(0);
  return (
    <header
      className={`${styles.container} ${
        scrollPosition < 50
          ? styles["container_transparent"]
          : styles["container_border"]
      }`}
    >
      <h1 className={`${styles.title}`}>
        REST
        <br />
        IN MEMORIES
      </h1>
    </header>
  );
};
export default Header;
