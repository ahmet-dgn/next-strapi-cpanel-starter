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

  return (
    <>
      <SEO generalSettings={generalSettings} seoData={singlePage.SEO} />

      <Layout menuItems={menu} generalSettings={generalSettings} t={t}>
        <Container>
          {singlePage?.Image?.singlePage ||
          singlePage?.Title ||
          singlePage?.Description ? (
            <div className="mx-auto space-y-8">
              {singlePage.Image.data && (
                <div className="w-full relative h-[500px]">
                  <Image
                    fill
                    src={
                      process.env.NEXT_PUBLIC_DATA_URL +
                      singlePage?.Image?.data?.attributes?.url
                    }
                    className="rounded object-cover"
                  />
                </div>
              )}
              {singlePage?.Title && (
                <h1 className="text-h3 text-on-background-color">
                  {singlePage.Title}
                </h1>
              )}
              {singlePage?.Description && (
                <ReactMarkdown>{singlePage?.Description}</ReactMarkdown>
              )}
            </div>
          ) : null}
          <ComponentRenderer
            blogList={blogList}
            blocks={pageBlocks}
            t={t}
            width={"w-[694px]"}
          />
        </Container>
      </Layout>
    </>
  );
}

export const getServerSideProps = async ({ params, locale, defaultLocale }) => {
  try {
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
  } catch (error) {
    console.error("Error in getServerSideProps:", error);

    return {
      props: {
        menu: [],
        pageBlocks: {},
        blogList: [],
        generalSettings: {},
        singlePage: {},
      },
    };
  }
};
