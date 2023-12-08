import Container from "@/components/ui/container";
import Head from "next/head";
import Layout from "@/components/layout";
import { getMenusByLang, companyInfo } from "@/lib/posts";
import graphqlRequest from "@/lib/graphqlRequest";

export async function getStaticProps({ params, locale }) {
  const { postSlug } = params;
  const language = locale.toUpperCase();
  const menu = await getMenusByLang(locale);
  const contactInfo = await companyInfo();
  const data = await graphqlRequest({
    query: `
      query PostBySlug($slug: String!, $language: LanguageCodeEnum!) {
        generalSettings {
          title
        }
        postBy(slug: $slug) {
          id
          content
          title
          slug
          translation(language: $language) {
            id
            slug
            content
            title
            language {
              locale
              slug
            }
          }
        }
      }
    `,
    variables: {
      slug: params.postSlug,
      language,
    },
  });

  let post = data?.data.postBy;

  const site = {
    ...data?.data.generalSettings,
  };

  return {
    props: {
      post,
      language,
      path: `/posts/${post.slug}`,
      site,
      menu,
      contactInfo,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths({ locales }) {
  const data = await graphqlRequest({
    query: `
      {
        posts(first: 10000) {
          edges {
            node {
              id
              title
              slug
            }
          }
        }
      }
    `,
  });

  const posts = data?.data.posts.edges.map(({ node }) => node);

  const paths = posts.map(({ slug }) => {
    return {
      params: {
        postSlug: slug,
      },
    };
  });

  return {
    paths: [
      ...paths,
      ...paths.flatMap((path) => {
        return locales.map((locale) => {
          return {
            ...path,
            locale,
          };
        });
      }),
    ],
    paths: [],
    fallback: "blocking",
  };
}

export default function Post({ post, site, menu, contactInfo }) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta
          name="description"
          content={`Read more about ${post.title} on ${site.title}`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout menuItems={menu} info={contactInfo}>
        <Container>
          {" "}
          <h1>
            {post && post.translation && post.translation.title
              ? post.translation.title
              : post?.title}
          </h1>
        </Container>
      </Layout>
    </>
  );
}
