import Card from "./ui/card";

import Row from "./ui/row";
import Title from "./ui/title";
import Link from "next/link";
export default function NewProdcuts({ data, translation }) {
  const products = data.products.data;

  return (
    <>
      <Title titleDesc={data.Description}>{data.Title}</Title>

      <Row rowCol="grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
        {products.map((product) => (
          <Link href={`/products/${product.attributes.Slug}`} key={product.id}>
            <Card
              cardInfo={product.attributes.Writer}
              cardTitle={product.attributes.Title}
              cardImg={
                process.env.NEXT_PUBLIC_DATA_URL +
                product.attributes.MainImage.data.attributes.url
              }
              cardPadding="p-2 sm:p-4"
              cardBorder="border hover:shadow-xl transition-shadow duration-300 hover:border-gray-400"
              cardBgColor="bg-surface-color"
              cardImgClass={`aspect-[2/3]`}
              label={translation}
              labelColor="red"
            ></Card>
          </Link>
        ))}
      </Row>
    </>
  );
}
