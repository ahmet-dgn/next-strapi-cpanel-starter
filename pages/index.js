import Slider from "@/components/slider";
import Blog from "@/components/blog";
import FeaturedProducts from "@/components/featuredProducts";
import { ImageBox, ImageBox2 } from "@/components/imageBox";
import { HeroSection, HeroSection2 } from "@/components/heroSection";
import NewProdcuts from "@/components/newProducts";
import Head from "next/head";
import { useRouter } from "next/router";
import { getMenusByLang, getAllSliders, companyInfo } from "@/lib/posts";
import Layout from "@/components/layout";
import { domain } from "@/config";

export default function Home({ menu, sliders, contactInfo }) {
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

  const description = companyInfoDetail.siteAciklamaSeo
    ? companyInfoDetail.siteAciklamaSeo
    : companyInfoDetailDefault.siteAciklamaSeo;

  const logo = companyInfoDetail.logo.node.mediaItemUrl
    ? companyInfoDetail.logo.node.mediaItemUrl
    : companyInfoDetailDefault.logo.node.mediaItemUrl;
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href={favicon} sizes="any" />
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={logo} />
        <meta property="og:url" content={domain} />
      </Head>

      <Layout menuItems={menu} info={contactInfo}>
        <Slider sliders={sliders} />
        <NewProdcuts />
        <HeroSection />
        <FeaturedProducts />
        <HeroSection2 />
        <ImageBox />
        <Blog />
      </Layout>
    </>
  );
}

export async function getStaticProps({ locale }) {
  const sliders = await getAllSliders();
  const menu = await getMenusByLang(locale);
  const contactInfo = await companyInfo();

  return {
    props: {
      menu,
      sliders,
      contactInfo,
    },
    revalidate: 10,
  };
}
