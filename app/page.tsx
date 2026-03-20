import Navbar from "../components/Navbar";
import HomeSection from "../components/HomeSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HomeSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}