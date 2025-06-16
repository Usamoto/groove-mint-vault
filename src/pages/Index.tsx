
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedMixes from "@/components/FeaturedMixes";
import HowItWorks from "@/components/HowItWorks";
import DJSpotlight from "@/components/DJSpotlight";
import CollectorBenefits from "@/components/CollectorBenefits";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedMixes />
      <HowItWorks />
      <DJSpotlight />
      <CollectorBenefits />
      <Footer />
    </div>
  );
};

export default Index;
