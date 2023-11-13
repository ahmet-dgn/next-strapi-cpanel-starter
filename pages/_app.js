import "@/styles/globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "700"],
});

export default function App({ Component, pageProps }) {
  return (
    <main
      className={`${poppins.variable} font-sans bg-background-color text-normal-regular`}
    >
      <Component {...pageProps} />
    </main>
  );
}
