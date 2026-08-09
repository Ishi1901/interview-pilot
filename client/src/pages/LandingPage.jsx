import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0B0B2F] text-white">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}