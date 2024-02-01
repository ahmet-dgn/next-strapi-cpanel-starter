async function fetchData(apiUrl) {
  try {
    const query = await fetch(`${process.env.NEXT_PUBLIC_DATA_URL}${apiUrl}`);
    if (!query.ok) {
      throw new Error(`HTTP error! Status: ${query.status}`);
    }
    const data = await query.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

async function fetchDataDynamicPage(apiUrl, slug, locale) {
  try {
    const query = await fetch(
      `${process.env.NEXT_PUBLIC_DATA_URL}${apiUrl}${slug}`
    );

    if (!query.ok) {
      throw new Error(`HTTP error! Status: ${query.status}`);
    }

    let data = await query.json();

    if (
      data &&
      data.data &&
      data.data[0] &&
      data.data[0].attributes &&
      data.data[0].attributes.localizations &&
      data.data[0].attributes.localizations.data &&
      data.data[0].attributes.localizations.data[0] &&
      data.data[0].attributes.localizations.data[0].attributes
    ) {
      if (
        locale ===
        data.data[0].attributes.localizations.data[0].attributes.locale
      ) {
        const translatedSlug =
          data.data[0].attributes.localizations.data[0].attributes.Slug;
        const translationRes = await fetch(
          `${process.env.NEXT_PUBLIC_DATA_URL}${apiUrl}${translatedSlug}`
        );

        if (!translationRes.ok) {
          throw new Error(`HTTP error! Status: ${translationRes.status}`);
        }

        data = await translationRes.json();
      }
    }

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function getMenu(locale, defaultLocale) {
  return fetchData(
    `/api/navigation/render/main-navigation${
      locale === defaultLocale ? "" : "-" + locale
    }`
  );
}

export async function getGeneralSettings() {
  const query = await fetchData("/api/general-site-setting?populate=*");
  const data = query.data.attributes;
  return data;
}

export async function getBlocks(locale, defaultLocale) {
  const query = await fetchData(
    `/api/home?populate=Blocks.Content.Image&populate=Blocks.Image&populate=Blocks.Video&populate=Blocks.Icerik.VitrinResim&populate=Blocks.Icerik.Dosya&populate=Blocks.products.MainImage&populate=Blocks.Icerik.Resim&populate=Blocks.Icerik&populate=Blocks.products.category&populate=SEO&locale=${
      locale === defaultLocale ? defaultLocale : locale
    }`
  );
  const data = query.data.attributes.Blocks;
  return data;
}

export async function getBlogList(locale, defaultLocale) {
  const query = await fetchData(
    `/api/blogs?populate=Image&populate=blog_category&populate=MainImage&populate=Banner&locale=${
      locale === defaultLocale ? defaultLocale : locale
    }`
  );
  const data = query.data;
  return data;
}

export async function getSingleBlog(slug, locale) {
  const query = await fetchDataDynamicPage(
    "/api/blogs?populate=*&locale=all&filters[Slug][$eq]=",
    slug,
    locale
  );
  const data = query.data[0];
  return data;
}

export async function getPressList(locale, defaultLocale) {
  const query = await fetchData(
    `/api/basins?populate=*&locale=${
      locale === defaultLocale ? defaultLocale : locale
    }`
  );
  const data = query.data;
  return data;
}

export async function getSinglePress(slug, locale) {
  const query = await fetchDataDynamicPage(
    "/api/basins?populate=*&locale=all&filters[Slug][$eq]=",
    slug,
    locale
  );
  const data = query.data[0];
  return data;
}

export async function getSinglePage(slug, locale) {
  const query = await fetchDataDynamicPage(
    "/api/pages?populate=Blocks.Content.Image&populate=Image&populate=Blocks.Video&populate=Blocks.Icerik.VitrinResim&populate=Blocks.Icerik.Dosya&populate=Blocks.Icerik&populate=Blocks.Image&populate=Blocks.Resim&populate=Blocks.Icerik.Resim&populate=localizations&populate=Blocks.products.MainImage&populate=Blocks.products.category&populate=SEO&locale=all&filters[Slug][$eq]=",
    slug,
    locale
  );

  const singlePage = query.data[0].attributes;
  const pageBlocks = query.data[0].attributes.Blocks;

  return { singlePage, pageBlocks };
}

export async function getProductList(locale, defaultLocale) {
  const query = await fetchData(
    `/api/products?populate=Image&populate=category&populate=MainImage&locale=${
      locale === defaultLocale ? defaultLocale : locale
    }`
  );
  const data = query.data;
  return data;
}

export async function getSingleProduct(slug, locale) {
  const query = await fetchDataDynamicPage(
    "/api/products?populate=*&locale=all&filters[Slug][$eq]=",
    slug,
    locale
  );
  const data = query.data[0];
  return data;
}
