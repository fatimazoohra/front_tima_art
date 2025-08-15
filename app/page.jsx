import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Topbar3 from "@/components/headers/Topbar3";
import MarqueeSection2 from "@/components/common/MarqueeSection2";
import NewsLetter from "@/components/homes/jewelry-02/NewsLetter";
import HomeHero from "@/components/home/homehero";
import HomeProducts from "@/components/home/HomeProducts";
import Collections from "@/components/homes/eleganceNest/Collections";
import HomeTypes from "@/components/home/HomeTypes";
// import { Suspense } from 'react'
// import { categories4 } from "@/data/collections";

export const metadata = {
  title: "Home || Modave - Multipurpose React Nextjs eCommerce Template",
  description: "Modave - Multipurpose React Nextjs eCommerce Template",
};

export default async function Home() {
  const api_url = process.env.NEXT_PUBLIC_API_URL

  // Fetch products
  const productsRes = await fetch(`${api_url}/product/home?offset=0&limit=12`, { cache: "no-store" });
  const products_data = await productsRes.json();
  console.log("testttt")
console.log(products_data.data.products)
  return (
    <>
      <Topbar3 />
      <Header1 />
      <HomeHero />
       
      {/* <HomeTypes parentClass="flat-spacing pt-5"/> */}
      <HomeProducts products={products_data.data.products}/>
      {/* <Collections />       */}

      <NewsLetter />
      {/* <MarqueeSection2 /> */}
      <Footer1 />













      {/* <Collections />
      <Products />
      <BannerCollection />
      <BannerCountdown />
      <Testimonials />
      <Blogs />
      <ShopGram />
      <Features />
      <Footer1 /> */}
    </>
  );
}
