import Card from "./ui/card";
import Container from "./ui/container";
import Row from "./ui/row";
import Title from "./ui/title";
import { motion } from "framer-motion";

export default function NewProdcuts() {
  const products = [
    {
      id: 1,
      title: "World museums incididunt",
      author: "Leila Mottley",
      img: "/prodcuts/new1.jpg",
      category: "tarih",
    },
    {
      id: 2,
      title: "Renaissance history exercitation adipisicing deserunt ullamco ",
      author: "Dan Gordan",
      img: "/prodcuts/new2.jpg",
      category: "psikoloji",
    },
    {
      id: 3,
      title: "Amster hamster trip veniam incididunt eu nostrud",
      author: "Dan Ellen Marie Wiseman",
      img: "/prodcuts/new3.jpg",
      category: "çocuk",
    },
    {
      id: 4,
      title: "Japan travel stories",
      author: "Charlie Jonas",
      img: "/prodcuts/new4.jpg",
      category: "edebiyat",
    },
  ];

  return (
    <Container>
      <Title titleDesc="Pariatur pariatur minim dolor proident fugiat eiusmod minim ea ipsum consectetur ipsum adipisicing nulla aliqua.">
        Yeni Çıkan Kitaplarımız
      </Title>

      <Row rowCol="grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
        {products.map((product) => (
          <Card
            cardInfo={product.author}
            cardTitle={product.title}
            cardImg={product.img}
            cardPadding="p-2 sm:p-4"
            cardBorder="border"
            cardBgColor="bg-surface-color"
            cardImgClass="aspect-[3/4] "
            label="YENİ"
            labelColor="red"
          ></Card>
        ))}
      </Row>
    </Container>
  );
}
