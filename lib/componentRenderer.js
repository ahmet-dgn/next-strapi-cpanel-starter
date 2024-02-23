import Slider from "@/components/slider";
import NewProdcuts from "@/components/newProducts";
import HeroSection from "@/components/heroSection";
import Blog from "@/components/blog";
import TextWithOverlayImage from "@/components/textWithOverlayImage";
import FeaturedProducts from "@/components/featuredProducts";
import Container from "@/components/ui/container";
import HorizontalCardBlock from "@/components/horizontalCardBlock";
import VideoPlayer from "@/components/videoPayer";
import { ImageBox2 } from "@/components/imageBox";
import Certificates from "@/components/certificates";
import YaziveSlider from "@/components/yazi-ve-slider";

export default function ComponentRenderer({ blocks, blogList, t, width }) {
  return blocks.map((item) => {
    switch (item.__component) {
      case "blocks.slider":
        return <Slider data={item} />;
      case "blocks.hero":
        return (
          <Container>
            <HeroSection data={item} />
          </Container>
        );
      case "blocks.dosya":
        return (
          <Container>
            <Certificates data={item} />
          </Container>
        );
      case "blocks.kutu-banner-alani":
        return (
          <Container>
            <ImageBox2 data={item} />
          </Container>
        );
      case "blocks.video":
        return <VideoPlayer data={item} />;
      case "blocks.text-with-overlay-image":
        return (
          <TextWithOverlayImage data={item} backendUrl={process.env.DATA_URL} />
        );
      case "blocks.new-products":
        return (
          <Container>
            <NewProdcuts data={item} translation={t("new_label")} />
          </Container>
        );
      case "blocks.featured-products":
        return (
          <Container>
            <FeaturedProducts
              data={item}
              backendUrl={process.env.DATA_URL}
              translation={t("all_categories")}
            />
          </Container>
        );
      case "blocks.last-blogs":
        return (
          <Container>
            <Blog
              data={blogList}
              title={item.Title}
              description={item.Description}
              translation={t("read_more")}
            />
          </Container>
        );
      case "blocks.yazi-ve-slider":
        return (
          <Container>
            <YaziveSlider data={item} width={width} />
          </Container>
        );
      case "blocks.yatay-vitrin":
        return (
          <Container>
            <HorizontalCardBlock
              data={item.Icerik}
              title={item.Baslik}
              description={item.Aciklama}
              translation={t("read_more")}
            />
          </Container>
        );
      default:
        return null;
    }
  });
}
