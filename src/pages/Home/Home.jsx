import React from "react";
import AboutUs from "../../components/AboutUs/AboutUs";
import Partnership from "../../components/Partnership/Partnership";
import ClientReview from "../../components/ClientReview/ClientReview";
import SecurityTechSection from "../../components/SecurityTechSection/SecurityTechSection";
import SecurityCta from "../../components/SecurityCta/SecurityCta";
import HowItWorks from "./HowItWorks";
import HomeBanner from "../../components/HomeBanner/HomeBanner";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <div className="space-y-24 my-12">
        <AboutUs></AboutUs>
        <ClientReview></ClientReview>
        <SecurityTechSection />
        <HowItWorks></HowItWorks>
        <Partnership></Partnership>
        <SecurityCta />
      </div>
    </div>
  );
};

export default Home;
