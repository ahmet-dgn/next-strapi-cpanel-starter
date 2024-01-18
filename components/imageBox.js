import Container from "./ui/container";
import Row from "./ui/row";
import Title from "./ui/title";
import Card from "./ui/card";
import Link from "next/link";

export function ImageBox() {
  return (
    <Row rowCol="grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6">
      <Card
        cardImg="/employee/Image-1.jpg"
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
  );
}

export function ImageBox2({ data }) {
  return (
    <>
      <Title titleDesc={data.Aciklama}>{data.Baslik}</Title>

      <Row rowCol="grid-cols-1  lg:grid-cols-2  ">
        <Link href={data.Icerik[0].Link}>
          <Card
            cardImg={
              process.env.NEXT_PUBLIC_DATA_URL +
              data.Icerik[0].Resim.data.attributes.url
            }
            cardImgClass="w-full h-[250px]  md:h-[350px] brightness-50 hover:brightness-[.75] cursor-pointer transition duration-500"
            textAlign="text-center"
            cardImgAlt={data.Icerik[0].Baslik}
            overleyText={data.Icerik[0].Baslik}
          />
        </Link>
        <Row rowCol="grid-cols-1 md:grid-cols-2  ">
          <Link href={data.Icerik[1].Link}>
            <Card
              cardImg={
                process.env.NEXT_PUBLIC_DATA_URL +
                data.Icerik[1].Resim.data.attributes.url
              }
              cardImgClass="w-full h-[250px]  md:h-[350px] brightness-50 hover:brightness-[.75] cursor-pointer transition duration-500"
              textAlign="text-center"
              cardImgAlt={data.Icerik[1].Baslik}
              overleyText={data.Icerik[1].Baslik}
            />
          </Link>
          <Link href={data.Icerik[2].Link}>
            <Card
              cardImg={
                process.env.NEXT_PUBLIC_DATA_URL +
                data.Icerik[2].Resim.data.attributes.url
              }
              cardImgClass="w-full h-[250px]  md:h-[350px] brightness-50 hover:brightness-[.75] cursor-pointer transition duration-500"
              textAlign="text-center"
              cardImgAlt={data.Icerik[2].Baslik}
              overleyText={data.Icerik[2].Baslik}
            />
          </Link>
        </Row>
        <Row rowCol="grid-cols-1 md:grid-cols-2 ">
          <Link href={data.Icerik[3].Link}>
            <Card
              cardImg={
                process.env.NEXT_PUBLIC_DATA_URL +
                data.Icerik[3].Resim.data.attributes.url
              }
              cardImgClass="w-full h-[250px]  md:h-[350px] brightness-50 hover:brightness-[.75] cursor-pointer transition duration-500"
              textAlign="text-center"
              cardImgAlt={data.Icerik[3].Baslik}
              overleyText={data.Icerik[3].Baslik}
            />
          </Link>
          <Link href={data.Icerik[4].Link}>
            <Card
              cardImg={
                process.env.NEXT_PUBLIC_DATA_URL +
                data.Icerik[4].Resim.data.attributes.url
              }
              cardImgClass="w-full h-[250px]  md:h-[350px] brightness-50 hover:brightness-[.75] cursor-pointer transition duration-500"
              textAlign="text-center"
              cardImgAlt={data.Icerik[4].Baslik}
              overleyText={data.Icerik[4].Baslik}
            />
          </Link>
        </Row>
        <Link href={data.Icerik[5].Link}>
          <Card
            cardImg={
              process.env.NEXT_PUBLIC_DATA_URL +
              data.Icerik[5].Resim.data.attributes.url
            }
            cardImgClass="w-full h-[250px]  md:h-[350px] brightness-50 hover:brightness-[.75] cursor-pointer transition duration-500"
            textAlign="text-center"
            cardImgAlt={data.Icerik[5].Baslik}
            overleyText={data.Icerik[5].Baslik}
          />
        </Link>
      </Row>
    </>
  );
}
