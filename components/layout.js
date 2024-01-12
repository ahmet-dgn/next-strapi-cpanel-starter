import { Navbar } from "./navbar";
import Footer from "./footer";

import TopHeader from "./topHeader";

export default function Layout({ children, menuItems, generalSettings }) {
  return (
    <>
      <header>
        <TopHeader />
        <Navbar menuData={menuItems} generalSettings={generalSettings} />
      </header>
      <main>{children}</main>
      <Footer menuData={menuItems} />
    </>
  );
}
