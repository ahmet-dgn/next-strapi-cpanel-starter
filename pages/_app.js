import "@/styles/globals.css";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "700"],
});

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div
        className={`${poppins.variable} font-sans bg-background-color text-normal-regular `}
      >
        <Component {...pageProps} />;
      </div>
    </>
  );
}

export default appWithTranslation(App);
