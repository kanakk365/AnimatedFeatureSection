import Realtime from "@/components/Cards/Realtime";
import Slide from "@/components/Cards/Slide";
import FeatureSection from "@/components/Section/FeatureSection";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex gap-20 justify-center items-center mx-auto font-[family-name:var(--font-geist-sans)] bg-[#151517]">
      {/* <FeatureSection/> */}
      <Realtime />
      <Slide/>
    </div>
  );
}
