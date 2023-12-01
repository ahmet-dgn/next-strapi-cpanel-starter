import Container from "./ui/container";
import Image from "next/image";
import Row from "./ui/row";

import TextContent from "./ui/textContent";

export function HeroSection() {
  return (
    <div className="bg-gray-100">
      <Container>
        <Row rowCol="grid-cols-1 md:grid-cols-2">
          <div className="lg:pr-8">
            <Image
              src="/home-1-single-image-4.png"
              width={700}
              height={475}
              sizes="(max-width: 1024px) 100vw, 50vw"
              style={{
                width: "100%",
                height: "auto",
              }}
              className="object-contain rounded max-h-[500px]"
            />
          </div>
          <TextContent
            link="#"
            ctaText="Devamını Oku"
            description="Duis est adipisicing non est et amet. Amet sint do nisi pariatur
          commodo velit culpa dolor do velit ut elit magna. Amet magna magna
          veniam nulla ad laborum id culpa non proident veniam anim. Sint
          eiusmod aute proident laboris."
            title="Do nulla tempor ex aliquip officia culpa sint do nisi pariatur."
            overLineText="Magna consectetur consequat ullamco"
            subTitle="Amet magna magna veniam nulla ad laborum id culpa non proident veniam
          anim. Sint eiusmod aute proident laboris."
            label="Ayın Kitabı"
            labelColor="yellow"
          />
        </Row>
      </Container>
    </div>
  );
}

export function HeroSection2() {
  return (
    <div className="relative w-full h-[40rem]">
      <Image
        src="/large historical library with a lot of book.jpg"
        fill
        className="object-cover brightness-[0.35]"
      />
      <Container>
        <div className="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  sm:text-center  flex justify-center w-full p-4 sm:max-w-lg xl:max-w-4xl ">
          <TextContent
            link="#"
            ctaText="Devamını Oku"
            description=" Duis est adipisicing non est et amet. Amet sint do nisi pariatur
          commodo velit culpa dolor do velit ut elit magna. Amet magna magna
          veniam nulla ad laborum id culpa non proident veniam anim. Sint
          eiusmod aute proident laboris."
            title=" Do nulla tempor ex aliquip officia culpa sint do nisi pariatur."
            align="center"
            btnColor="red"
            textColor="white"
          />
        </div>
      </Container>
    </div>
  );
}
