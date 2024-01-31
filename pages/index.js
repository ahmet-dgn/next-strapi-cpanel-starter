import SEO from "@/components/seo";
import { useTranslation } from "next-i18next";
import Layout from "@/components/layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {
  getMenu,
  getGeneralSettings,
  getBlocks,
  getBlogList,
} from "@/lib/query";
import ComponentRenderer from "@/lib/componentRenderer";

export default function Home({ menu, generalSettings, blocks, blogList }) {
  const { t } = useTranslation("common");

  return (
    <>
      <SEO generalSettings={generalSettings} seoData={blocks.SEO} />
      <Layout menuItems={menu} generalSettings={generalSettings} t={t}>
        <ComponentRenderer blogList={blogList} blocks={blocks} t={t} />
      </Layout>
    </>
  );
}

export async function getServerSideProps({ locale, defaultLocale }) {
  try {
    const menu = await getMenu(locale, defaultLocale);
    const generalSettings = await getGeneralSettings();
    const blocks = await getBlocks(locale, defaultLocale);
    const blogList = await getBlogList(locale, defaultLocale);

    return {
      props: {
        menu,
        generalSettings,
        blocks,
        blogList,
        ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  } catch (error) {
    console.error("Error in getServerSideProps:", error);
    return {
      props: {
        menu: [],
        generalSettings: {},
        blocks: {},
        blogList: [],
      },
    };
  }
}
