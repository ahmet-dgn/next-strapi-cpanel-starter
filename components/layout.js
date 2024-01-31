import { Navbar } from "./navbar";
import { Navbar2 } from "./navbar2";
import Footer from "./footer";
import TopHeader from "./topHeader";

export default function Layout({ children, menuItems, generalSettings, t }) {
  let navbarComponent;

  switch (generalSettings.Navbar) {
    case "Navbar-1":
      navbarComponent = <Navbar menuData={menuItems} generalSettings={generalSettings} t={t}/>;
      break;
    case "Navbar-2":
      navbarComponent = <Navbar2 menuData={menuItems} generalSettings={generalSettings} t={t}/>;
      break;
    default:
      navbarComponent = <Navbar menuData={menuItems} generalSettings={generalSettings} t={t}/>;
      break;
  }
  return (
    <>
      <header>
        <TopHeader generalSettings={generalSettings} />
    
        {navbarComponent}
      </header>
      <main>{children}</main>
      <Footer menuData={menuItems} />
    </>
  );
}
