import Layout from "@/components/layout";
import Container from "@/components/ui/container";
import ReactMarkdown from "react-markdown";
import SEO from "@/components/seo";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {
  getMenu,
  getGeneralSettings,
  getBlogList,
  getSinglePage,
} from "@/lib/query";
import ComponentRenderer from "@/lib/componentRenderer";

export default function ProductDetail({
  singlePage,
  menu,
  generalSettings,
  blogList,
  pageBlocks,
}) {
  const { t } = useTranslation("common");
  console.log(
    process.env.NEXT_PUBLIC_DATA_URL + singlePage.Image.data.attributes.url
  );
  return (
    <>
      <SEO generalSettings={generalSettings} seoData={singlePage.SEO} />

      <Layout menuItems={menu} generalSettings={generalSettings}>
        <Container>
          {singlePage?.Image?.singlePage ||
          singlePage?.Title ||
          singlePage?.Description ? (
            <div className="mx-auto space-y-8">
              {singlePage.Image.data && (
                <Image
                  width={1536}
                  height={400}
                  src={
                    process.env.NEXT_PUBLIC_DATA_URL +
                    singlePage.Image.data.attributes.url
                  }
                  className="rounded"
                />
              )}
              {singlePage?.Title && (
                <h1 className="text-h3 text-on-background-color">
                  {singlePage.Title}
                </h1>
              )}
              {singlePage?.Description && (
                <ReactMarkdown>{singlePage.Description}</ReactMarkdown>
              )}
            </div>
          ) : null}
          <ComponentRenderer blogList={blogList} blocks={pageBlocks} t={t} />
        </Container>
      </Layout>
    </>
  );
}

export const getServerSideProps = async ({ params, locale, defaultLocale }) => {
  const { pageSlug } = params;
  const slug = pageSlug;
  const { singlePage, pageBlocks } = await getSinglePage(slug, locale);
  const menu = await getMenu(locale, defaultLocale);
  const generalSettings = await getGeneralSettings();
  const blogList = await getBlogList(locale, defaultLocale);

  return {
    props: {
      menu,
      pageBlocks,
      blogList,
      generalSettings,
      singlePage,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
