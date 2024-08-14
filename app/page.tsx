import Banner from "@/components/banner/Banner";
import Contacto from "@/components/contacto/Contacto";
import Footer from "@/components/footer/Footer";
import Galeria from "@/components/galeria/Galeria";
import HomeSection from "@/components/home/HomeSection";
import Nosotros from "@/components/nosotros/Nosotros";
import Rige from "@/components/rige/Rige";
import Servicios from "@/components/servicios/Servicios";

export default function Home() {
  return (
    <div>
      <HomeSection />
      <Nosotros />
      <Banner />
      <Rige />
      <Servicios />
      <Galeria />
      <Contacto />
      <Footer />
    </div>
  );
}
