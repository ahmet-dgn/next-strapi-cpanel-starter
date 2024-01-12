import dynamic from "next/dynamic";
const DynamicReactPlayer = dynamic(() => import("react-player"), {
  ssr: false, // This disables server-side rendering
});
import Image from "next/image";
import Row from "./ui/row";
import TextContent from "./ui/textContent";

export default function HeroSection({ data }) {
  const HeroSectionData = data;

  return (
    <div>
      <Row rowCol="grid-cols-1 md:grid-cols-2 ">
        <div className="lg:pr-8  overflow-hidden w-full  relative">
          {HeroSectionData.Image.data &&
            HeroSectionData.Image.data.attributes.mime.includes("image") && (
              <Image
                src={
                  process.env.NEXT_PUBLIC_DATA_URL +
                  HeroSectionData.Image.data.attributes.url
                }
                width={700}
                height={475}
                className="object-contain rounded aspect-[4/3]"
                alt={HeroSectionData.Title || "About Us"}
              />
            )}
          {HeroSectionData.Image.data &&
            HeroSectionData.Image.data.attributes.mime.includes("video") && (
              <DynamicReactPlayer
                className="react-player brightness-[0.40] "
                url={
                  process.env.NEXT_PUBLIC_DATA_URL +
                  HeroSectionData.Image.data.attributes.url
                }
                width="100%"
                height="100%"
                controls={true}
                muted={true}
                playing={true}
                loop={true}
                playsinline={true}
              />
            )}
        </div>
        <div
          className={`flex flex-col justify-center ${
            HeroSectionData.ImagePosition === "Right" ? "order-first" : ""
          }`}
        >
          <TextContent
            description={HeroSectionData.Description || ""}
            title={HeroSectionData.Title || ""}
            subTitle={HeroSectionData.SubTitle || ""}
            link={HeroSectionData.Link || ""}
            ctaText={HeroSectionData.ButtonName || ""}
            overLineText={HeroSectionData.OverLineText || ""}
          />
        </div>
      </Row>
    </div>
  );
}
