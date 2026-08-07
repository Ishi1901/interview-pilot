import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0B1020] text-white">
      <Navbar />

      <Hero />

      <FeatureCard />

      <Footer />
    </div>
  );
}