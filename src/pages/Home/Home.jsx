import React from "react";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import AboutUs from "../../components/AboutUs/AboutUs";
import Partnership from "../../components/Partnership/Partnership";
import ClientReview from "../../components/ClientReview/ClientReview";
import SecurityTechSection from "../../components/SecurityTechSection/SecurityTechSection";

const Home = () => {
  return (
    <div>
      <HeroBanner></HeroBanner>
      <AboutUs></AboutUs>
      <Partnership></Partnership>
      <ClientReview></ClientReview>
      <SecurityTechSection />
    </div>
  );
};

export default Home;
