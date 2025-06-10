import React from "react";
import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import PropertyInfoCard from "./components/PropertyInfoCard";
import Services from "./components/services";
import FeaturedProperty from "./components/FeaturedPropeerty";
import FeedbackSection from "./components/FeedbackSection";
import PropertyFeatures from "./components/PropertyFeatures";
import ContactPage from "./components/ContacUs";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <HeroSlider />
      <PropertyInfoCard />
      <Services />
      <FeaturedProperty />
      <FeedbackSection />
      <PropertyFeatures />
      <ContactPage />
      <Footer />
    </>
  );
}

export default App;
