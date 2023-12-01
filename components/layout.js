import { Navbar } from "./navbar";
import Footer from "./footer";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "700"],
});

export default function Layout({ children, activeLocales }) {
  return (
    <div
      className={`${poppins.variable} font-sans bg-background-color text-normal-regular `}
    >
      {" "}
      <Navbar activeLocales={activeLocales} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
