import Footer from "@/components/layout/Footer";
import BecomeOwner from "@/components/home/BecomeOwner";
import FAQ from "@/components/home/FAQ";
import HowItWorks from "@/components/home/HowItWorks";
import WhyTrust from "@/components/home/WhyTrust";
import BrowseVehicles from "@/components/home/BrowseVehicles";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <main id="top">
      <Navbar />
      <Hero />
      <BrowseVehicles />
      <WhyTrust />
      <HowItWorks />
      <FAQ />
      <BecomeOwner />
      <Footer />
    </main>
  );
}