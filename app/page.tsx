import ChooseUs from "@/components/shared/home/ChooseUs";
import Footer from "@/components/shared/home/Footer";
import Hero from "@/components/shared/home/Hero";
import { Navbar } from "@/components/shared/home/Navbar";
import Pricing from "@/components/shared/home/Pricing";



export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <ChooseUs />
      <Pricing />
      <Footer />
    </div>
  )
}
