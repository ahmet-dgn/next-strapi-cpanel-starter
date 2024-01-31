import Layout from "@/components/layout";
import Container from "@/components/ui/container";
import Row from "@/components/ui/row";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import SEO from "@/components/seo";
import { getMenu, getGeneralSettings, getSingleProduct } from "@/lib/query";

export default function ProductDetail({ product, menu, generalSettings }) {
  const imagesArray = product.attributes.MainImage.data
    ? [
        process.env.NEXT_PUBLIC_DATA_URL +
          product.attributes.MainImage.data.attributes.url,
        ...(product.attributes.Image.data?.map(
          (image) => process.env.NEXT_PUBLIC_DATA_URL + image.attributes.url
        ) || []),
      ].filter((url) => url !== undefined && url !== null && url !== "")
    : [];

  const { t } = useTranslation("common");

  const elementRef = useRef(null);
  const [clientWidth, setClientWidth] = useState(0);

  useEffect(() => {
    if (elementRef.current) {
      const width = elementRef.current.clientWidth;
      setClientWidth(width); // State'e atama yapılıyor
    }
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderForward = (event) => {
    event.preventDefault();
    if (currentIndex >= imagesArray.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const sliderBackward = (event) => {
    event.preventDefault();
    if (currentIndex <= 0) {
      setCurrentIndex(imagesArray.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const sliderMoveByIndex = (index) => {
    setCurrentIndex(index);
  };
  const sliderPosition = clientWidth * currentIndex;

  const seo = {
    metaTitle: product.attributes.Title,
    metaDescription: product.attributes.Description,
  };

  return (
    <>
      <SEO generalSettings={generalSettings} seoData={seo} />

      <Layout menuItems={menu} generalSettings={generalSettings} t={t}>
        <Container>
          <Row rowCol="grid-cols-1 md:grid-cols-2">
            <div className="space-y-2">
              <div
                className="relative   group select-none overflow-hidden  bg-white border rounded"
                ref={elementRef}
              >
                <div
                  className=" hidden group-hover:block bg-white/20 hover:bg-black/60  transition duration-300 ease-linear p-1 lg:p-2 absolute bottom-2/4 z-20 left-4 rounded-full cursor-pointer"
                  onClick={sliderBackward}
                >
                  <svg
                    className="fill-white/75 "
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.0019 2.98505C16.5119 2.49505 15.7219 2.49505 15.2319 2.98505L6.92186 11.2951C6.53186 11.6851 6.53186 12.3151 6.92186 12.7051L15.2319 21.0151C15.7219 21.5051 16.5119 21.5051 17.0019 21.0151C17.4919 20.5251 17.4919 19.7351 17.0019 19.2451L9.76186 11.9951L17.0119 4.74505C17.4919 4.26505 17.4919 3.46505 17.0019 2.98505Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div
                  className="hidden group-hover:block bg-white/20 hover:bg-black/60 p-1 lg:p-2 absolute bottom-2/4 z-20 right-4 rotate-180 rounded-full cursor-pointer"
                  onClick={sliderForward}
                >
                  <svg
                    className="fill-white/75"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.0019 2.98505C16.5119 2.49505 15.7219 2.49505 15.2319 2.98505L6.92186 11.2951C6.53186 11.6851 6.53186 12.3151 6.92186 12.7051L15.2319 21.0151C15.7219 21.5051 16.5119 21.5051 17.0019 21.0151C17.4919 20.5251 17.4919 19.7351 17.0019 19.2451L9.76186 11.9951L17.0119 4.74505C17.4919 4.26505 17.4919 3.46505 17.0019 2.98505Z" />
                  </svg>
                </div>
                <div className="w-fit flex">
                  {imagesArray.map((image) => (
                    <div className="relative w-[726px] h-[500px] ">
                      <Image
                        src={image}
                        fill
                        alt="/"
                        className="object-contain rounded border-transparent transition-transform duration-500 touch-pan-x select-none"
                        style={{
                          transform: `translateX(-${sliderPosition}px)`,
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className=" h-16 md:h-24 flex space-x-2 overflow-hidden rounded">
                {imagesArray.map((image, index) => (
                  <div className="aspect-[1/1] relative  rounded cursor-pointer">
                    <Image
                      src={image}
                      fill
                      alt="/"
                      className={`object-cover rounded  aspect-[1/1]  border-2 hover:border-blue-700 ${
                        currentIndex === index
                          ? `border-blue-700 `
                          : `border-transparent`
                      } `}
                      onClick={() => sliderMoveByIndex(index)}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:px-8 space-y-4">
              <h1 className="text-h2 text-on-background-color">
                {" "}
                {product.attributes.Title}
              </h1>
              <div className="space-y-4">
                <ReactMarkdown>{product.attributes.Description}</ReactMarkdown>
              </div>
            </div>
          </Row>
        </Container>
      </Layout>
    </>
  );
}

export const getServerSideProps = async ({ params, locale, defaultLocale }) => {
  try {
    const menu = await getMenu(locale, defaultLocale);
    const generalSettings = await getGeneralSettings();

    const { productSlug } = params;
    const slug = productSlug;
    const product = await getSingleProduct(slug, locale);

    return {
      props: {
        menu,
        generalSettings,
        product,
        ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  } catch (error) {
    console.error("Error in getServerSideProps:", error);

    return {
      props: {
        menu: [],
        generalSettings: {},
        product: [],
      },
    };
  }
};
