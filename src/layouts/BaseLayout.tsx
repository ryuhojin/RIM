import Header from "@/components/base/Header";
interface BaseLayoutProps {
  children: React.ReactNode;
}
const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
export default BaseLayout;
