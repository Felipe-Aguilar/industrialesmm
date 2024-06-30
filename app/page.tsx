import Banner from "@/components/banner/Banner";
import HomeSection from "@/components/home/HomeSection";
import Nosotros from "@/components/nosotros/Nosotros";
import Rige from "@/components/rige/Rige";

export default function Home() {
  return (
    <div>
      <HomeSection />
      <Nosotros />
      <Banner />
      <Rige />
    </div>
  );
}
