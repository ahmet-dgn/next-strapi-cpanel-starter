import Navbar from "@/components/navbar";
import Slider from "@/components/slider";
import Blog from "@/components/blog";
import FeaturedProducts from "@/components/featuredProducts";
import { IconBox } from "@/components/iconBox";
import { ImageBox, ImageBox2 } from "@/components/imageBox";
import { HeroSection, HeroSection2 } from "@/components/heroSection";
export default function Home() {
  return (
    <>
      <Navbar />
      <Slider />
      <HeroSection />
      <HeroSection2 />
      <ImageBox2 />
      <FeaturedProducts />
      <ImageBox />

      <Blog />
      <IconBox />
    </>
  );
}
