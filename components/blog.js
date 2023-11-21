import Container from "./ui/container";
import Card from "./ui/card";
import Row from "./ui/row";
import Title from "./ui/title";

export default function Blog() {
  const blogs = [
    {
      cardImg:
        "/beautiful-shot-famous-roman-colosseum-amphitheater-breathtaking-sky-sunrise.jpg",
      cardLink: "#",
      cardDesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Aenean condimentum sapien vestibulum purus ultricies ultricies.  ",
      cardTitle: "Donec auctor dictum tellus ut vulputate",
      cardInfo: "06.08.2023",
    },
    {
      cardImg: "/beautiful-scenery-clear-white-snowy-mountains-hills.jpg",
      cardLink: "#",
      cardDesc:
        "Mauris at augue ac turpis sollicitudin molestie. Vivamus imperdiet ornare volutpat. Vivamus eget dui lectus. Maecenas consectetur metus ut condimentum tincidunt. Aenean condimentum sapien vestibulum purus ultricies ultricies. ",
      cardTitle: "Mauris congue sapien blandit sapien elementum",
      cardInfo: "06.08.2023",
    },
    {
      cardImg:
        "/majestic-mountain-peak-tranquil-meadow-panoramic-landscape-generated-by-ai.jpg",
      cardLink: "#",
      cardDesc:
        "Vivamus imperdiet ornare volutpat. Vivamus eget dui lectus. Maecenas consectetur metus ut condimentum tincidunt. Aenean condimentum sapien vestibulum purus ultricies ultricies. ",
      cardTitle:
        " Praesent tempus justo at lectus blandit efficitur. Mauris congue sapien blandit sapien elementum ",
      cardInfo: "06.08.2023",
    },
  ];
  return (
    <Container>
      <Title titleDesc="Mauris eleifend lectus erat. Etiam egestas, dui egestas pharetra dictum, metus nisi semper urna, nec dignissim quam enim quis eros.">
        Sunt elit sint ut sit Lorem.
      </Title>
      <Row rowCol="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
        {blogs.map((blog, index) => (
          <Card
            key={index}
            cardImgHeight="h-56 lg:h-64"
            cardPadding="px-2"
            cardBtn="Devamını Oku"
            cardLink={blog.cardLink}
            cardImg={blog.cardImg}
            cardInfo={blog.cardInfo}
            cardTitle={blog.cardTitle}
            cardDesc={blog.cardDesc}
            cardImgAlt={blog.cardTitle}
            cardBtnType="link"
            cardImgClass=" object-cover rounded"
            cardImgSize='sizes="(max-width: 640px) 100vw, (max-width: 1024px)50vw, 25vw"'
          ></Card>
        ))}
      </Row>
    </Container>
  );
}
