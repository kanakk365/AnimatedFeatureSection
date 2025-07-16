
import FeatureSection from "@/components/Section/FeatureSection";
import Footer from "@/components/Section/Footer";
import HeroSection from "@/components/Section/Hero";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col gap-20 justify-center items-center mx-auto font-[family-name:var(--font-geist-sans)] bg-[#151517]">
      {/* <HeroSection/>
      // <FeatureSection/> */}
      <HeroSection/>
      <FeatureSection/>
      
      {/* <CardStack/> */}
      {/* <Footer/> */}
      <Footer/>
    </div>
  );
}
