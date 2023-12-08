import { companyInfo, getMenusByLang } from "../lib/posts";
import Container from "@/components/ui/container";
import Title from "@/components/ui/title";
import Row from "@/components/ui/row";
import Layout from "@/components/layout";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import { domain } from "@/config";

export default function Contact({ contactInfo, menu }) {
  const { locale: activeLocale, defaultLocale, asPath } = useRouter();

  //Filtering the contact detail data according to the active locale
  const companyInfo = contactInfo.filter(
    (contactItem) =>
      contactItem.companyInfoField.dil == activeLocale.toUpperCase()
  );

  //Filtering the contact detail data according to the default locale
  const companyInfoDefault = contactInfo.filter(
    (contactItem) =>
      contactItem.companyInfoField.dil == defaultLocale.toUpperCase()
  );

  //If there is no data for the default locale, the default data is used
  const companyInfoDefaulCheck =
    companyInfo.length > 0 ? companyInfo : companyInfoDefault;

  //Data fortmating
  const companyInfoDetail = companyInfoDefaulCheck[0].companyInfoField;
  const companyInfoDetailDefault = companyInfoDefault[0].companyInfoField;

  const title = companyInfoDetail.siteBaslikSeo
    ? companyInfoDetail.siteBaslikSeo
    : companyInfoDetailDefault.siteBaslikSeo;

  const favicon = companyInfoDetail.favicon.node.mediaItemUrl
    ? companyInfoDetail.favicon.node.mediaItemUrl
    : companyInfoDetailDefault.favicon.node.mediaItemUrl;

  const logo = companyInfoDetail.logo.node.mediaItemUrl
    ? companyInfoDetail.logo.node.mediaItemUrl
    : companyInfoDetailDefault.logo.node.mediaItemUrl;

  const telefon = companyInfoDetail.telefon
    ? companyInfoDetail.telefon
    : companyInfoDetailDefault.telefon;

  const ePosta = companyInfoDetail.ePosta
    ? companyInfoDetail.ePosta
    : companyInfoDetailDefault.ePosta;

  const adres = companyInfoDetail.adres
    ? companyInfoDetail.adres
    : companyInfoDetailDefault.adres;

  let currentUrl = "";

  // Dil bilgisine göre domain belirle
  if (activeLocale === defaultLocale) {
    currentUrl = `${domain}contact`;
  } else if (activeLocale === "en") {
    currentUrl = `${domain}en/contact`;
  } else if (activeLocale === "de") {
    currentUrl = `${domain}de/contact`;
  }

  return (
    <>
      <Head>
        <title>{`İletişim - ${title}`}</title>
        <link rel="icon" href={favicon} sizes="any" />
        <meta
          name="description"
          content="Eğer herhangi bir konuda destek veya bilgi talebiniz varsa, lütfen aşağıdaki iletişim bilgilerimiz aracılığıyla bize ulaşın. Uzman ekibimiz, en kısa sürede size dönüş yaparak ihtiyaçlarınıza cevap verecektir."
        />
        <meta property="og:title" content={`İletişim - ${title}`} />
        <meta
          property="og:description"
          content="Eğer herhangi bir konuda destek veya bilgi talebiniz varsa, lütfen aşağıdaki iletişim bilgilerimiz aracılığıyla bize ulaşın. Uzman ekibimiz, en kısa sürede size dönüş yaparak ihtiyaçlarınıza cevap verecektir."
        />
        <meta property="og:image" content={logo} />
        <meta property="og:url" content={currentUrl} />
      </Head>
      <Layout menuItems={menu} info={contactInfo}>
        <Container>
          <Row rowCol="grid-cols-1 md:grid-cols-2">
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d136225.81656405804!2d28.90046692827863!3d41.02101782526836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1701959153918!5m2!1str!2str"
                width="600"
                height="450"
                className="rounded w-full"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="mt-4 md:mt-0 lg:ml-8 space-y-8 flex flex-col justify-center ">
              <Title
                align="left"
                titleDesc="Eğer herhangi bir konuda destek veya bilgi talebiniz varsa, lütfen aşağıdaki iletişim bilgilerimiz aracılığıyla bize ulaşın. Uzman ekibimiz, en kısa sürede size dönüş yaparak ihtiyaçlarınıza cevap verecektir."
              >
                İletişim
              </Title>
              <div className="space-y-2">
                <div className="flex space-x-2 items-center">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    className="fill-on-surface-color"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1.25 13.75V26.25H8.75V20H11.25V26.25H18.75V13.75L10 7.5L1.25 13.75ZM16.25 23.75H13.75V17.5H6.25V23.75H3.75V15.0375L10 10.575L16.25 15.0375V23.75Z" />
                    <path d="M23.75 8.75H21.25V11.25H23.75V8.75Z" />
                    <path d="M23.75 13.75H21.25V16.25H23.75V13.75Z" />
                    <path d="M23.75 18.75H21.25V21.25H23.75V18.75Z" />
                    <path d="M12.5 3.75V6.2125L15 8V6.25H26.25V23.75H21.25V26.25H28.75V3.75H12.5Z" />
                  </svg>
                  <p className="text-on-surface-color text-h5">Adres</p>
                </div>
                <p className="text-on-surface-color text-small-regular lg:text-normal-regular max-w-md">
                  {adres}
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex space-x-2 items-center">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 50 50"
                    className="fill-on-surface-color"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.95459 31.8087L15.2463 31.2045C16.5171 31.0587 17.7671 31.4962 18.6629 32.392L22.4963 36.2253C28.3921 33.2253 33.2254 28.4128 36.2254 22.4962L32.3713 18.642C31.4754 17.7462 31.0379 16.4962 31.1838 15.2253L31.7879 9.97534C32.0379 7.87118 33.8088 6.28784 35.9338 6.28784H39.5379C41.8921 6.28784 43.8504 8.24618 43.7046 10.6003C42.6004 28.392 28.3713 42.6003 10.6004 43.7045C8.24626 43.8503 6.28792 41.892 6.28792 39.5378V35.9337C6.26709 33.8295 7.85042 32.0587 9.95459 31.8087Z" />
                  </svg>

                  <p className="text-on-surface-color text-h5">Telefon</p>
                </div>
                <Link
                  href={`tel:${telefon}`}
                  className="text-on-surface-color text-small-regular lg:text-normal-regular"
                >
                  {telefon}
                </Link>
              </div>
              <div className="space-y-2">
                <div className="flex space-x-2 items-center">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25 5H5C3.625 5 2.5125 6.125 2.5125 7.5L2.5 22.5C2.5 23.875 3.625 25 5 25H25C26.375 25 27.5 23.875 27.5 22.5V7.5C27.5 6.125 26.375 5 25 5ZM23.75 22.5H6.25C5.5625 22.5 5 21.9375 5 21.25V10L13.675 15.425C14.4875 15.9375 15.5125 15.9375 16.325 15.425L25 10V21.25C25 21.9375 24.4375 22.5 23.75 22.5ZM15 13.75L5 7.5H25L15 13.75Z"
                      fill="#012F59"
                    />
                  </svg>

                  <p className="text-on-surface-color text-h5">E-Posta</p>
                </div>
                <Link
                  href={`mailto:${ePosta}`}
                  className="text-on-surface-color text-small-regular lg:text-normal-regular"
                >
                  {ePosta}
                </Link>
              </div>
            </div>
          </Row>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ locale }) {
  const menu = await getMenusByLang(locale);
  const contactInfo = await companyInfo();

  return {
    props: {
      menu,
      contactInfo,
    },
    revalidate: 10,
  };
}
