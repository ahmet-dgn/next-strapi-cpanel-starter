import Container from "./ui/container";
import Row from "./ui/row";
import Title from "./ui/title";
import { Button } from "./ui/buttons";
import Card from "./ui/card";

export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      title: "Nocturnal Creatures Thief",
      author: "Leila Mottley",
      img: "/prodcuts/1.jpg",
      category: "tarih",
    },
    {
      id: 2,
      title: "Swedish Chairs",
      author: "Dan Gordan",
      img: "/prodcuts/2.jpg",
      category: "psikoloji",
    },
    {
      id: 3,
      title:
        "Fugiat et ipsum ea anim reprehenderit est reprehenderit cillum enim velit minim sit.",
      author: "Dan Ellen Marie Wiseman",
      img: "/prodcuts/3.jpg",
      category: "çocuk",
    },
    {
      id: 4,
      title: "Moster Paulas Kattkafe Hastek and Jakme",
      author: "Charlie Jonas",
      img: "/prodcuts/4.jpg",
      category: "edebiyat",
    },
    {
      id: 5,
      title: "Emotionally Intelligent",
      author: "Maria Gottberg",
      img: "/prodcuts/5.jpg",
      category: "sosyoloji",
    },
    {
      id: 6,
      title: "The Friday Drink est reprehenderit ",
      author: "Kayo Mpoyi",
      img: "/prodcuts/6.jpg",
      category: "roman",
    },
    {
      id: 7,
      title: "Read & Riot",
      author: "Nadya Tolokon",
      img: "/prodcuts/7.jpg",
      category: "",
    },
    {
      id: 8,
      title:
        "I Don’t Forget Anyone Deserunt minim nulla non laboris veniam incididunt eu nostrud elit.",
      author: "Gunvor Hofmo",
      img: "/prodcuts/8.jpg",
      category: "",
    },
    {
      id: 9,
      title: "Truffle Fever Occaecat",
      author: "Steven Ekholm",
      img: "/prodcuts/9.jpg",
      category: "",
    },
    {
      id: 10,
      title:
        "Skuggan Dotter Ad qui exercitation adipisicing deserunt ullamco ad occaecat officia.",
      author: "Elena Frrante",
      img: "/prodcuts/10.jpg",
      category: "",
    },
    {
      id: 11,
      title: "Wedding Trouble",
      author: "Stig Dagerman",
      img: "/prodcuts/11.jpg",
      category: "",
    },
    {
      id: 12,
      title: "Malstrom exercitation adipisicing",
      author: "Charlote Al-Khalli",
      img: "/prodcuts/12.jpg",
      category: "",
    },
  ];

  return (
    <Container>
      <Title titleDesc="Laboris qui sit ullamco nostrud. Officia et aute est et amet consectetur aliqua Lorem.">
        Kitaplarımız
      </Title>
      <div className="flex gap-4 justify-center flex-wrap">
        {products.map(
          (product) =>
            product.category && (
              <Button href="#" type="outline">
                {product.category.charAt(0).toUpperCase() +
                  product.category.slice(1)}
              </Button>
            )
        )}
      </div>
      <Row rowCol="grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6">
        {products.map((product) => (
          <Card
            cardInfo={product.author}
            cardTitle={product.title}
            cardImgHeight="h-64 max-[375px]:h-52 lg:h-72"
            cardImg={product.img}
            cardPadding="p-2 sm:p-4"
            cardBorder="border"
            cardBgColor="bg-surface-color"
            cardImgClass=" object-contain xl:object-cover xl:rounded"
          ></Card>
        ))}
      </Row>
    </Container>
  );
}
