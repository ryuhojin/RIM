import Header from "@/components/base/Header";
import styles from "./BaseLayout.module.css";

interface BaseLayoutProps {
  children: React.ReactNode;
}
const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <>
      <Header />
      <main className={`${styles["container"]}`}>{children}</main>
    </>
  );
};
export default BaseLayout;
