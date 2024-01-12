import Layout from "@/components/layout";
import Container from "@/components/ui/container";
import Row from "@/components/ui/row";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import SEO from "@/components/seo";

export default function ProductDetail({ product, menu, generalSettings }) {
  const data = product.data[0];

  const imagesArray = data.attributes.MainImage.data
    ? [
        process.env.NEXT_PUBLIC_DATA_URL +
          data.attributes.MainImage.data.attributes.url,
        ...(data.attributes.Image.data?.map(
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
    metaTitle: data.attributes.Title,
    metaDescription: data.attributes.Description,
  };

  return (
    <>
      <SEO generalSettings={generalSettings} seoData={seo} />

      <Layout menuItems={menu} generalSettings={generalSettings}>
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
                        className="object-cover rounded border-transparent transition-transform duration-500 touch-pan-x select-none"
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
                {data.attributes.Title}
              </h1>
              <div className="space-y-4">
                <ReactMarkdown>{data.attributes.Description}</ReactMarkdown>
              </div>
            </div>
          </Row>
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
//       const res = await fetch(`${process.env.NEXT_PUBLIC_DATA_URL}/api/products?locale=${locale}`);
//       if (!res.ok) {
//         throw new Error(`HTTP error! status: ${res.status}`);
//       }
//       const products = await res.json();

//       const localePaths = products.data.map((product) => ({
//         params: { productSlug: product.attributes.Slug.toString() },
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
    `${process.env.NEXT_PUBLIC_DATA_URL}/api/navigation/render/main-navigation${
      locale === defaultLocale ? "" : "-" + locale
    }`
  );
  const menu = await resNav.json();

  const resSettings = await fetch(
    `${process.env.NEXT_PUBLIC_DATA_URL}/api/general-site-setting?populate=*`
  );
  const settings = await resSettings.json();
  const generalSettings = settings.data.attributes;

  let translation = undefined;
  const { productSlug } = params;
  const initialRes = await fetch(
    `${process.env.NEXT_PUBLIC_DATA_URL}/api/products?populate=*&locale=all&filters[Slug][$eq]=${productSlug}`
  );
  const initial = await initialRes.json();

  if (
    locale ===
    initial.data[0].attributes.localizations.data[0].attributes.locale
  ) {
    // Assuming you have a field for storing translated slugs in your products
    const translatedSlug =
      initial.data[0].attributes.localizations.data[0].attributes.Slug;

    const translationRes = await fetch(
      `${process.env.NEXT_PUBLIC_DATA_URL}/api/products?populate=*&locale=${locale}&filters[Slug][$eq]=${translatedSlug}`
    );
    translation = await translationRes.json();
  }

  return {
    props: {
      menu,
      generalSettings,
      product: translation ? translation : initial,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
