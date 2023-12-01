import Container from "./ui/container";
import Row from "./ui/row";
import Title from "./ui/title";
import Card from "./ui/card";

export function ImageBox() {
  return (
    <Container>
      <Title titleDesc="Cillum nostrud dolore pariatur officia officia reprehenderit proident amet.">
        Yazarlarımız
      </Title>
      <Row rowCol="grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6">
        <Card
          cardImg="/employee/Image-1.jpg"
          cardTitle="Michael Foster"
          textAlign="text-center"
          titleCustom="justify-center"
          cardImgClass="aspect-[1/1] "
        />

        <Card
          cardImg="/employee/Image-2.jpg"
          cardTitle="Lindsay Walton"
          cardImgClass="aspect-[1/1] "
          textAlign="text-center"
          titleCustom="justify-center"
        />

        <Card
          cardImg="/employee/Image-3.jpg"
          cardTitle="Dries Vincent"
          cardImgClass="aspect-[1/1] "
          textAlign="text-center"
          titleCustom="justify-center"
        />
        <Card
          cardImg="/employee/Image-4.jpg"
          cardTitle="Floyd Miles"
          cardImgClass="aspect-[1/1] "
          textAlign="text-center"
          titleCustom="justify-center"
        />
        <Card
          cardImg="/employee/Image-5.jpg"
          cardImgClass="aspect-[1/1] "
          cardTitle="Leonard Krasner"
          textAlign="text-center"
          titleCustom="justify-center"
        />
        <Card
          cardImg="/employee/Image-6.jpg"
          cardImgClass="aspect-[1/1] "
          cardTitle="Leslie Alexander"
          textAlign="text-center"
          titleCustom="justify-center"
        />
      </Row>
    </Container>
  );
}

export function ImageBox2() {
  return (
    <Container>
      <Title titleDesc="Nisi do aute culpa exercitation officia.">
        Kategoriler
      </Title>
      <Row rowCol="grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
        <Card
          cardImg="/beautiful-shot-famous-roman-colosseum-amphitheater-breathtaking-sky-sunrise.jpg"
          cardImgClass="aspect-[1/1] brightness-50 "
          textAlign="text-center"
          overleyText="Tarih Kitapları"
        />

        <Card
          cardImg="/children-playing-grass.jpg"
          textAlign="text-center"
          overleyText="Çocuk Kitapları"
          cardImgClass="aspect-[1/1] brightness-50 "
        />

        <Card
          cardImg="/alone-girl-sitting-chair.jpg"
          textAlign="text-center"
          overleyText="Edebiyat Kitapları"
          cardImgClass=" object-cover rounded brightness-50"
        />
        <Card
          cardImg="/family-with-their-little-daughter-autumn-field.jpg"
          overleyText="Aile Kitapları"
          cardImgClass="aspect-[1/1] brightness-50 "
        />
      </Row>
    </Container>
  );
}
