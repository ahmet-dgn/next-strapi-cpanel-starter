import Slider from "@/components/slider";
import NewProdcuts from "@/components/newProducts";
import HeroSection from "@/components/heroSection";
import Blog from "@/components/blog";
import TextWithOverlayImage from "@/components/textWithOverlayImage";
import FeaturedProducts from "@/components/featuredProducts";
import Container from "@/components/ui/container";
import HorizontalCardBlock from "@/components/horizontalCardBlock";

export default function ComponentRenderer({ blocks, blogList, t }) {
  return blocks.map((item, index) => {
    switch (item.__component) {
      case "blocks.slider":
        return <Slider key={index} data={item} />;
      case "blocks.hero":
        return (
          <Container>
            <HeroSection key={index} data={item} />
          </Container>
        );
      case "blocks.text-with-overlay-image":
        return (
          <TextWithOverlayImage
            key={index}
            data={item}
            backendUrl={process.env.DATA_URL}
          />
        );
      case "blocks.new-products":
        return (
          <Container>
            <NewProdcuts key={index} data={item} translation={t("new_label")} />
          </Container>
        );
      case "blocks.featured-products":
        return (
          <Container>
            <FeaturedProducts
              key={index}
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
              key={index}
              data={blogList}
              title={item.Title}
              description={item.Description}
              translation={t("read_more")}
            />
          </Container>
        );
      case "blocks.yatay-vitrin":
        return (
          <div className="bg-sky-50">
            <Container>
              <HorizontalCardBlock
                key={index}
                data={item}
                title={item.Title}
                description={item.Description}
                translation={t("read_more")}
              />
            </Container>
          </div>
        );
      default:
        return null;
    }
  });
}
