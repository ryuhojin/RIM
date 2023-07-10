import Header from "@/components/m/base/Header";

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
