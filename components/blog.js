import Container from "./ui/container";
import Card from "./ui/card";
import Row from "./ui/row";
import Title from "./ui/title";
import Link from "next/link";

export default function Blog({ data, title, description, translation }) {
  return (
    <>
      <Title titleDesc={description}>{title}</Title>
      <Row rowCol="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {data.slice(0, 3).map((blog) => (
          <Link href={`/blogs/${blog?.attributes?.Slug}`}>
            <Card
              key={blog?.id}
              cardPadding="px-2"
              cardImg={
                process.env.NEXT_PUBLIC_DATA_URL +
                (blog?.attributes?.Image?.data?.attributes?.url ||
                  (blog?.attributes?.Banner?.data &&
                    blog?.attributes?.Banner?.data[0]?.attributes?.url) ||
                  " ")
              }
              cardInfo={blog?.attributes?.Date}
              cardTitle={blog?.attributes?.Title}
              cardDesc={
                blog?.attributes?.KisaAciklama || blog?.attributes?.Description
              }
              cardImgAlt={blog?.attributes?.Title}
              titleCustom="text-normal-bold"
              cardImgClass=" aspect-[5/3]"
            ></Card>
          </Link>
        ))}
      </Row>
    </>
  );
}
