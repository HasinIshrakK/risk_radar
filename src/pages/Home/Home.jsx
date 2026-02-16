import React from "react";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import AboutUs from "../../components/AboutUs/AboutUs";
import SecurityTechSection from "../../components/SecurityTechSection/SecurityTechSection";
import SecurityCTA from "../../components/SecurityCta/SecurityCTA";

const Home = () => {
  return (
    <div>
      <HeroBanner></HeroBanner>
      <AboutUs></AboutUs>
      <SecurityTechSection />
      <SecurityCTA />
    </div>
  );
};

export default Home;
