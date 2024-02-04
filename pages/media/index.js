import Layout from "@/components/layout";
import Container from "@/components/ui/container";
import { useState, useEffect } from "react";
import Row from "@/components/ui/row";
import HorizontalCard from "@/components/ui/horizontalCard";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import SEO from "@/components/seo";
import { getMenu, getGeneralSettings, getPressList } from "@/lib/query";

export default function Blogs({ menu, pressList, generalSettings }) {
  const { t, i18n } = useTranslation("common");
  console.log(pressList);
  const seo = {
    metaTitle: t("press_title"),
    metaDescription: t("press_description"),
  };
  return (
    <>
      <SEO generalSettings={generalSettings} seoData={seo} />
      <Layout menuItems={menu} generalSettings={generalSettings} t={t}>
        <Container>
          <Row rowCol="grid-cols-1 md:grid-cols-2">
            {pressList.map((pressListItem) => (
              <HorizontalCard
                titleCustom="!text-h6"
                key={pressListItem?.id}
                cardTitle={pressListItem?.attributes?.Baslik}
                cardImg={
                  process.env.NEXT_PUBLIC_DATA_URL +
                  (pressListItem?.attributes?.Resim?.data?.attributes?.url ||
                    " ")
                }
                cardPadding="p-2 xl:p-4"
                cardBorder="border"
                cardBgColor="bg-surface-color"
                cardImgClass="aspect-[5/3]"
                cardDesc={pressListItem?.attributes?.Yazi}
                cardBtn={t("read_more")}
                cardLink={`/media/${pressListItem?.attributes?.Slug}`}
                cardBtnType="link"
              />
            ))}
          </Row>
        </Container>
      </Layout>
    </>
  );
}

export const getServerSideProps = async ({ locale, defaultLocale }) => {
  try {
    const menu = await getMenu(locale, defaultLocale);
    const generalSettings = await getGeneralSettings();
    const pressList = await getPressList(locale, defaultLocale);

    return {
      props: {
        menu,
        generalSettings,
        pressList,
        ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  } catch (error) {
    console.error("Error in getServerSideProps:", error);

    return {
      props: {
        menu: [],
        generalSettings: {},
        pressList: [],
      },
    };
  }
};
