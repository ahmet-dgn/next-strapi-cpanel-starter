import Navbar from "@/components/navbar";
import Slider from "@/components/slider";
import Blog from "@/components/blog";
import FeaturedProducts from "@/components/featuredProducts";
import IconBox from "@/components/iconBox";

export default function Home() {
  return (
    <>
      <Navbar />
      <Slider />
      <IconBox />
      <FeaturedProducts />
      <Blog />
    </>
  );
}
