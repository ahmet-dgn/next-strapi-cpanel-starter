import graphqlRequest from "./graphqlRequest"; //Data fetching function
import { activeLocales } from "../components/navbar"; //Function for getting active locales

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
