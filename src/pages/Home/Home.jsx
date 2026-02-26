import React from "react";
import AboutUs from "../../components/AboutUs/AboutUs";
import Partnership from "../../components/Partnership/Partnership";
import ClientReview from "../../components/ClientReview/ClientReview";
import SecurityTechSection from "../../components/SecurityTechSection/SecurityTechSection";
import SecurityCta from "../../components/SecurityCta/SecurityCta";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import HowItWorks from './HowItWorks';
import ProblemSection from "../../components/ProblemSection/ProblemSection";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <div className="space-y-16 my-12">
        <AboutUs></AboutUs>
        <ClientReview></ClientReview>
        <SecurityTechSection />
        <ProblemSection />
        <HowItWorks></HowItWorks>
        <Partnership></Partnership>
        <SecurityCta />
      </div>
    </div>
  );
};

export default Home;
