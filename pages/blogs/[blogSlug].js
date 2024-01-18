import Layout from "@/components/layout";
import Container from "@/components/ui/container";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import SEO from "@/components/seo";
import { getMenu, getGeneralSettings, getSingleBlog } from "@/lib/query";

export default function ProductDetail({ singleBlog, menu, generalSettings }) {
  const data = singleBlog;

  const seo = {
    metaTitle: data.attributes.Title,
    metaDescription: data.attributes.Description,
  };

  return (
    <>
      <SEO generalSettings={generalSettings} seoData={seo} />

      <Layout menuItems={menu} generalSettings={generalSettings}>
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            <Image
              width={896}
              height={400}
              src={
                data.attributes.Image.data
                  ? process.env.NEXT_PUBLIC_DATA_URL +
                    data.attributes.Image.data.attributes.url
                  : ""
              }
              className="rounded"
            />
            <h1 className="text-h3 text-on-background-color">
              {data.attributes.Title}
            </h1>
            <ReactMarkdown>{data.attributes.Description}</ReactMarkdown>
          </div>
        </Container>
      </Layout>
    </>
  );
}

export const getServerSideProps = async ({ params, locale, defaultLocale }) => {
  try {
    const { blogSlug } = params;
    const slug = blogSlug;
    const menu = await getMenu(locale, defaultLocale);
    const generalSettings = await getGeneralSettings();
    const singleBlog = await getSingleBlog(slug, locale);

    return {
      props: {
        menu,
        generalSettings,
        singleBlog,
      },
    };
  } catch (error) {
    console.error("Error in getServerSideProps:", error);

    return {
      props: {
        menu: [],
        generalSettings: {},
        singleBlog: [],
      },
    };
  }
};
