import graphqlRequest from "./graphqlRequest"; //Data fetching function

export async function getAllPosts(activeLocales) {
  const query = {
    query: `
    query NewQuery($language: LanguageCodeFilterEnum!) {
      posts(where: {language: $language}) {
        nodes {
          date
          slug
          title
          excerpt(format: RENDERED)
          featuredImage {
            node {
              mediaDetails {
                file
                sizes {
                  sourceUrl
                  width
                  height
                }
              }
            }
          }
          language {
            code
            locale
          }
        }
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
      }
    }
    `,
    variables: {
      language: activeLocales, // $language değişkenine bir değer atandı
    },
  };
  const resJson = await graphqlRequest(query); //Sending request to api with "query" parameter and getting response
  const allPosts = resJson.data.posts;
  return allPosts;
}

export async function getMenusByLang(langSlug) {
  const query = {
    query: `
    query menuItems($slug: String) {
      menus(where: {slug: $slug}) {
        nodes {
          name
          menuItems {
            nodes {
              label
              url
              id
              parentId
            }
          }
        }
      }
    }
    `,
    variables: {
      slug: langSlug,
    },
  };

  try {
    const resJson = await graphqlRequest(query);
    const menuItems = resJson.data.menus.nodes.flatMap(
      (node) => node.menuItems.nodes
    );
    return menuItems;
  } catch (error) {
    console.error("Failed to fetch menu items:", error);
    return null;
  }
}

export async function getAllSliders() {
  const query = {
    query: `
    query menuItems {
     
      sliderlar {
        nodes {
          title
          sliderFields {
            ustBaslik
            aciklama
            sira
            link
            dil
            linkAdi
            resim {
              node {
                mediaItemUrl
              }
            }
          }
        }
      }
    }
    `,
  };
  const resJson = await graphqlRequest(query); //Sending request to api with "query" parameter and getting response
  const allSliders = resJson.data.sliderlar.nodes;
  return allSliders;
}

export async function companyInfo() {
  const query = {
    query: `
    query companyInfo {
      firmaBilgileri {
        nodes {
          companyInfoField {
            firmaAdi
            adres
            ePosta
            telefon
            whatsapp
            siteBaslikSeo
            siteAciklamaSeo
            calismaSaatleri
            dil
            facebook
            instagram
            youtube
            x
            favicon {
              node {
                mediaItemUrl
              }
            }
            logo {
              node {
                mediaItemUrl
              }
            }
          }
        }
      }
    }
    `,
  };
  const resJson = await graphqlRequest(query); //Sending request to api with "query" parameter and getting response
  const allCompanyInfo = resJson.data.firmaBilgileri.nodes;
  return allCompanyInfo;
}
