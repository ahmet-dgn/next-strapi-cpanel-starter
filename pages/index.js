import Navbar from "@/components/navbar";
import Slider from "@/components/slider";
import Blog from "@/components/blog";
import FeaturedProducts from "@/components/featuredProducts";

export default function Home() {
  return (
    <>
      <Navbar />
      <Slider />
      <FeaturedProducts />
      <Blog />
    </>
  );
}
