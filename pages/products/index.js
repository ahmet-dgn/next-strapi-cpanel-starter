import Layout from "@/components/layout";
import Container from "@/components/ui/container";
import { useState, useEffect } from "react";
import Row from "@/components/ui/row";
import Card from "@/components/ui/card";
import HorizontalCard from "@/components/ui/horizontalCard";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import SEO from "@/components/seo";
import { getMenu, getGeneralSettings, getProductList } from "@/lib/query";

export default function Products({ menu, products, generalSettings }) {
  const { t, i18n } = useTranslation("common");

  const [filteredProducts, setFilteredProducts] = useState(products);

  // Dil değiştiğinde filtrelenmiş ürünleri güncelle
  useEffect(() => {
    filterProductsByLanguageAndCategory();
  }, [i18n.language]);

  // Function to filter products by category and language
  const filterProductsByLanguageAndCategory = (
    categoryTitle = t("all_filter")
  ) => {
    if (categoryTitle === t("all_filter")) {
      setFilteredProducts(products); // Tüm ürünleri göster
    } else {
      const filtered = products.filter((product) => {
        const productLanguage = product.attributes.locale;
        const productCategoryTitle =
          product.attributes.category.data.attributes.Title;
        const currentLanguage = i18n.language;

        return (
          productLanguage === currentLanguage &&
          productCategoryTitle === categoryTitle
        );
      });
      setFilteredProducts(filtered);
    }
  };

  const [currentMenuStatus, setMenuStatus] = useState(false);

  //It reverses the mobile menu status.If It is false, change it to true.If It is true, change it to false.
  const menuStatusHandler = () => {
    setMenuStatus(!currentMenuStatus);
  };

  const categories = products.map((product) => {
    if (product.attributes.category && product.attributes.category.data) {
      return product.attributes.category.data.attributes.Title;
    }
    return null;
  });

  // Kategorilerden yinelenenleri kaldırın
  const uniqueCategories = Array.from(new Set(categories));

  const excludedCategories = [];
  const filteredCategories = uniqueCategories.filter(
    (category) => !excludedCategories.includes(category)
  );

  const seo = {
    metaTitle: t("product_category"),
    metaDescription: t("product_category_desc"),
  };

  return (
    <>
      <SEO generalSettings={generalSettings} seoData={seo} />

      <Layout menuItems={menu} generalSettings={generalSettings} t={t}>
        <Container>
          <Row
            rowCol={`grid-cols-2   ${
              generalSettings.KategoriYanBar && "lg:grid-cols-3"
            }`}
          >
            {generalSettings.KategoriYanBar && (
              <div
                className={` w-full h-full fixed top-0 z-20 bg-nav-color lg:bg-transparent p-8 ${
                  !currentMenuStatus
                    ? "-left-full origin-left duration-500 "
                    : "left-0 origin-left duration-500 "
                } lg:static lg:block lg:h-fit lg:mr-12 lg:w-4/5 lg:p-0`}
              >
                <svg
                  onClick={menuStatusHandler}
                  className="absolute right-4 top-4 hover:scale-125 fill-on-nav-color lg:hidden "
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.3 5.71C17.91 5.32 17.28 5.32 16.89 5.71L12 10.59L7.10997 5.7C6.71997 5.31 6.08997 5.31 5.69997 5.7C5.30997 6.09 5.30997 6.72 5.69997 7.11L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.11C18.68 6.73 18.68 6.09 18.3 5.71Z" />
                </svg>
                <h6 className="text-h5 text-on-background-color mb-4">
                  {t("categories")}
                </h6>
                <div className="space-y-2">
                  <p
                    className="py-2 border-b border-gray-300 cursor-pointer text-on-background-color hover:text-primary-color/60"
                    onClick={() => {
                      filterProductsByLanguageAndCategory(t("all_filter"));
                      menuStatusHandler();
                    }} // Show all option
                  >
                    {t("all_filter")}
                  </p>
                  {filteredCategories.map((category) => (
                    <p
                      className="py-2 border-b border-gray-300 cursor-pointer text-on-background-color hover:text-primary-color/60"
                      key={category}
                      onClick={() => {
                        filterProductsByLanguageAndCategory(category);
                        menuStatusHandler();
                      }}
                    >
                      {category}
                    </p>
                  ))}
                </div>
              </div>
            )}

            <div className="col-span-2 w-full">
              {generalSettings.KategoriYanBar && (
                <div
                  className="w-full flex justify-end mb-4 lg:hidden"
                  onClick={menuStatusHandler}
                >
                  <p className="  min-h-[2rem] px-3 text-link-small flex items-center justify-center w-fit rounded text-on-background-color border-2 border-on-background-color hover:bg-on-background-color/20">
                    Filtreyi Göster
                  </p>
                </div>
              )}
              {!generalSettings.UrunListesiYatay && (
                <Row rowCol="grid-cols-2 min-[475px]:grid-cols-3 md:grid-cols-4">
                  {filteredProducts.map((product) => (
                    <Link
                      href={`/products/${product.attributes.Slug}`}
                      key={product.id}
                    >
                      <Card
                        cardInfo={product.attributes.Writer}
                        cardTitle={product.attributes.Title}
                        cardImg={
                          product.attributes.MainImage.data
                            ? process.env.NEXT_PUBLIC_DATA_URL +
                              product.attributes.MainImage.data.attributes.url
                            : ""
                        }
                        cardPadding="p-2 xl:p-4"
                        cardBorder="border hover:shadow-xl transition-shadow duration-300 hover:border-gray-400"
                        cardBgColor="bg-surface-color"
                        cardImgClass="aspect-[3/5]"
                      />
                    </Link>
                  ))}
                </Row>
              )}
              {generalSettings.UrunListesiYatay && (
                <Row rowCol="grid-cols-1 lg:grid-cols-2">
                  {filteredProducts.map((product) => (
                    <HorizontalCard
                      titleCustom="!text-h6"
                      key={product.id}
                      cardTitle={product.attributes.Title}
                      cardImg={
                        product.attributes.MainImage.data
                          ? process.env.NEXT_PUBLIC_DATA_URL +
                            product.attributes.MainImage.data.attributes.url
                          : ""
                      }
                      cardBorder="border hover:shadow-xl transition-shadow duration-300 hover:border-gray-400"
                      cardPadding="p-2 xl:p-4"
                      cardBgColor="bg-surface-color"
                      cardImgClass="aspect-[5/3]"
                      cardDesc={product.attributes.Description}
                      cardBtn={t("discover_more")}
                      cardLink={`/products/${product.attributes.Slug}`}
                      cardBtnType="link"
                    />
                  ))}
                </Row>
              )}
            </div>
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
    const products = await getProductList(locale, defaultLocale);

    return {
      props: {
        menu,
        generalSettings,
        products,
        ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  } catch (error) {
    console.error("Error in getServerSideProps:", error);

    return {
      props: {
        menu: [],
        pageBlocks: {},
        products: [],
      },
    };
  }
};
