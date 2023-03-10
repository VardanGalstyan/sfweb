import { type ReactElement } from "react";
import Footer from "./TestFooter";
import Header from "./Header";

interface LayoutProps {
  children: ReactElement;
  hasNoFixedHeader?: boolean;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
