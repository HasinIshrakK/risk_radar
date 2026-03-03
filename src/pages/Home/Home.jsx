import React from "react";
import HowItWorks from "./HowItWorks";
import PasswordReset from "../../PasswordReset/PasswordReset";
import HighAmountDashboard from "../../AmountDetection/HighAmountDashboard";



const Home = () => {
  return (
    <div>
      <HowItWorks></HowItWorks>
      <PasswordReset></PasswordReset>
      <HighAmountDashboard></HighAmountDashboard>
    </div>
  );
};

export default Home;
