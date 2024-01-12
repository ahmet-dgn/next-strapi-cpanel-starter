import Slider from "@/components/slider";
import NewProdcuts from "@/components/newProducts";
import HeroSection from "@/components/heroSection";
import Blog from "@/components/blog";
import TextWithOverlayImage from "@/components/textWithOverlayImage";
import ImageBanner from "@/components/imageBanner";
import FeaturedProducts from "@/components/featuredProducts";
import Layout from "@/components/layout";
import Container from "@/components/ui/container";
import ReactMarkdown from "react-markdown";
import SEO from "@/components/seo";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function ProductDetail({ page, menu, generalSettings, blogs }) {
  const data = page.data[0];
  const blocks = page.data[0].attributes.Blocks;
  const { t } = useTranslation("common");

  return (
    <>
      <SEO generalSettings={generalSettings} seoData={data.attributes.SEO[0]} />

      <Layout menuItems={menu} generalSettings={generalSettings}>
        <Container>
          {data?.attributes?.Image?.data ||
          data?.attributes?.Title ||
          data?.attributes?.Description ? (
            <div className="mx-auto space-y-8">
              {data?.attributes?.Image?.data && (
                <Image
                  width={1536}
                  height={400}
                  src={data.attributes.Image.data.attributes?.DATA_URL}
                  className="rounded"
                />
              )}
              {data?.attributes?.Title && (
                <h1 className="text-h3 text-on-background-color">
                  {data.attributes.Title}
                </h1>
              )}
              {data?.attributes?.Description && (
                <ReactMarkdown>{data.attributes.Description}</ReactMarkdown>
              )}
            </div>
          ) : null}

          {blocks.map((item, index) => {
            switch (item.__component) {
              case "blocks.slider":
                return (
                  <Slider
                    key={index}
                    data={item}
                    backendUrl={process.env.DATA_URL}
                  />
                );
              case "blocks.hero":
                return (
                  <HeroSection
                    key={index}
                    data={item}
                    backendUrl={process.env.NEXT_PUBLIC_DATA_URL}
                  />
                );
              case "blocks.text-with-overlay-image":
                return (
                  <TextWithOverlayImage
                    key={index}
                    data={item}
                    backendUrl={process.env.NEXT_PUBLIC_DATA_URL}
                  />
                );
              case "blocks.new-products":
                return (
                  <NewProdcuts
                    key={index}
                    data={item}
                    backendUrl={process.env.NEXT_PUBLIC_DATA_URL}
                    translation={t("new_label")}
                  />
                );
              case "blocks.featured-products":
                return (
                  <FeaturedProducts
                    key={index}
                    data={item}
                    backendUrl={process.env.NEXT_PUBLIC_DATA_URL}
                    translation={t("all_categories")}
                  />
                );
              case "blocks.resim-banner":
                return <ImageBanner key={index} data={item} />;
              case "blocks.last-blogs":
                return (
                  <Blog
                    key={index}
                    data={blogs}
                    title={item.Title}
                    description={item.Description}
                    backendUrl={process.env.DATA_URL}
                    translation={t("read_more")}
                  />
                );
              default:
                return null;
            }
          })}
        </Container>
      </Layout>
    </>
  );
}

// export const getStaticPaths = async ({ locales }) => {
//   const localeAll = locales;
//   const paths = [];

//   for (const locale of localeAll) {
//     try {
//       const res = await fetch(`${process.env.DATA_URL}/api/pages?locale=${locale}`);
//       if (!res.ok) {
//         throw new Error(`HTTP error! status: ${res.status}`);
//       }
//       const pages = await res.json();

//       const localePaths = pages.data.map((page) => ({
//         params: { pageSlug: page.attributes.Slug.toString() },
//         locale: locale,
//       }));

//       paths.push(...localePaths);
//     } catch (error) {
//       console.error(`Fetch failed for ${locale}:`, error);
//     }
//   }

//   return {
//     paths,
//     fallback: "blocking",
//   };
// };

export const getServerSideProps = async ({ params, locale, defaultLocale }) => {
  const resNav = await fetch(
    `${process.env.DATA_URL}/api/navigation/render/main-navigation${
      locale === defaultLocale ? "" : "-" + locale
    }`
  );
  const menu = await resNav.json();

  const resSettings = await fetch(
    `${process.env.DATA_URL}/api/general-site-setting?populate=* `
  );
  const settings = await resSettings.json();
  const generalSettings = settings.data.attributes;

  let translation = undefined;
  const { pageSlug } = params;
  const initialRes = await fetch(
    `${process.env.DATA_URL}/api/pages?populate=Blocks.Content.Image&populate=Image&populate=Blocks.Image&populate=Blocks.Resim&populate=localizations&populate=Blocks.products.MainImage&populate=Blocks.products.category&populate=SEO&locale=all&filters[Slug][$eq]=${pageSlug}`
  );
  const initial = await initialRes.json();

  if (
    initial.data[0].attributes.localizations.data[0].attributes.locale ===
    locale
  ) {
    const translatedSlug =
      initial.data[0].attributes.localizations.data[0].attributes.Slug;

    const translationRes = await fetch(
      `${process.env.DATA_URL}/api/pages?populate=Blocks.Content.Image&populate=Image&populate=Blocks.Image&&populate=Blocks.Resim&populate=localizations&populate=Blocks.products.MainImage&populate=Blocks.products.category&populate=SEO&locale=all&filters[Slug][$eq]=${translatedSlug}`
    );
    translation = await translationRes.json();
  }

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
      page: translation ? translation : initial,
      blogs,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
