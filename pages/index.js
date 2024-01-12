import Slider from "@/components/slider";
import NewProdcuts from "@/components/newProducts";
import HeroSection from "@/components/heroSection";
import Blog from "@/components/blog";
import TextWithOverlayImage from "@/components/textWithOverlayImage";
import FeaturedProducts from "@/components/featuredProducts";
import SEO from "@/components/seo";
import { useTranslation } from "next-i18next";
import Layout from "@/components/layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Container from "@/components/ui/container";
import HorizontalCardBlock from "@/components/horizontalCardBlock";

export default function Home({ menu, generalSettings, homePageData, blogs }) {
  const homePage = homePageData.Blocks;
  const { t } = useTranslation("common");

  return (
    <>
      <SEO generalSettings={generalSettings} seoData={homePageData.SEO} />
      <Layout menuItems={menu} generalSettings={generalSettings}>
        {homePage.map((item, index) => {
          switch (item.__component) {
            case "blocks.slider":
              return <Slider key={index} data={item} />;
            case "blocks.hero":
              return (
                <Container>
                  <HeroSection key={index} data={item} />
                </Container>
              );
            case "blocks.text-with-overlay-image":
              return (
                <TextWithOverlayImage
                  key={index}
                  data={item}
                  backendUrl={process.env.DATA_URL}
                />
              );
            case "blocks.new-products":
              return (
                <Container>
                  <NewProdcuts
                    key={index}
                    data={item}
                    translation={t("new_label")}
                  />
                </Container>
              );
            case "blocks.featured-products":
              return (
                <Container>
                  <FeaturedProducts
                    key={index}
                    data={item}
                    backendUrl={process.env.DATA_URL}
                    translation={t("all_categories")}
                  />
                </Container>
              );
            case "blocks.last-blogs":
              return (
                <Container>
                  <Blog
                    key={index}
                    data={blogs}
                    title={item.Title}
                    description={item.Description}
                    translation={t("read_more")}
                  />
                </Container>
              );
            case "blocks.yatay-vitrin":
              return (
                <div className="bg-sky-50">
                  <Container>
                    <HorizontalCardBlock
                      key={index}
                      data={item}
                      title={item.Title}
                      description={item.Description}
                      translation={t("read_more")}
                    />
                  </Container>
                </div>
              );
            default:
              return null;
          }
        })}
      </Layout>
    </>
  );
}

export async function getServerSideProps({ locale, defaultLocale }) {
  const res = await fetch(
    `${process.env.DATA_URL}/api/navigation/render/main-navigation${
      locale === defaultLocale ? "" : "-" + locale
    }`
  );
  const menu = await res.json();

  const resSettings = await fetch(
    `${process.env.DATA_URL}/api/general-site-setting?populate=* `
  );
  const settings = await resSettings.json();
  const generalSettings = settings.data.attributes;

  const resIndex = await fetch(
    `${
      process.env.DATA_URL
    }/api/home?populate=Blocks.Content.Image&populate=Blocks.Image&populate=Blocks.products.MainImage&populate=Blocks.products.category&populate=SEO&locale=${
      locale === defaultLocale ? defaultLocale : locale
    }`
  );
  const index = await resIndex.json();
  const homePageData = index.data.attributes;

  const resBlogs = await fetch(
    `${
      process.env.DATA_URL
    }/api/blogs?populate=Image&populate=blog_categories&populate=MainImage&locale=${
      locale === defaultLocale ? defaultLocale : locale
    }`
  );
  const blogs = await resBlogs.json();

  return {
    props: {
      menu,
      generalSettings,
      homePageData,
      blogs,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
