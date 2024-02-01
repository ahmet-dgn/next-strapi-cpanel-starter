import Layout from "@/components/layout";
import Container from "@/components/ui/container";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import SEO from "@/components/seo";
import { getMenu, getGeneralSettings, getSinglePress } from "@/lib/query";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function BlogDetail({ singlePress, menu, generalSettings }) {
  const data = singlePress;
  const { t } = useTranslation("common");
  const seo = {
    metaTitle: data.attributes.Baslik,
    metaDescription: data.attributes.Yazi,
  };

  return (
    <>
      <SEO generalSettings={generalSettings} seoData={seo} />

      <Layout menuItems={menu} generalSettings={generalSettings} t={t}>
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            <Image
              width={896}
              height={400}
              src={
                data.attributes.Resim.data
                  ? process.env.NEXT_PUBLIC_DATA_URL +
                    data.attributes.Resim.data.attributes.url
                  : ""
              }
              className="rounded"
            />
            <h1 className="text-h3 text-on-background-color">
              {data.attributes.Baslik}
            </h1>

            <Markdown
              children={data.attributes.Yazi}
              remarkPlugins={[remarkGfm]}
            />
          </div>
        </Container>
      </Layout>
    </>
  );
}

export const getServerSideProps = async ({ params, locale, defaultLocale }) => {
  try {
    const { mediaSlug } = params;
    const slug = mediaSlug;
    const menu = await getMenu(locale, defaultLocale);
    const generalSettings = await getGeneralSettings();
    const singlePress = await getSinglePress(slug, locale);

    return {
      props: {
        menu,
        generalSettings,
        singlePress,
        ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  } catch (error) {
    console.error("Error in getServerSideProps:", error);

    return {
      props: {
        menu: [],
        generalSettings: {},
        singlePress: [],
      },
    };
  }
};
