import React from 'react';
import HowItWorks from './HowItWorks';
import PasswordReset from '../../PasswordReset/PasswordReset';
import DetectionHighAmount from '../../AmountDetection/DetectionAmount';
import HighAmountDashboard from '../../AmountDetection/HighAmountDashboard';


const Home = () => {
    return (
        <div>
           <HowItWorks></HowItWorks>
           <PasswordReset></PasswordReset>
           <DetectionHighAmount></DetectionHighAmount>
           <HighAmountDashboard></HighAmountDashboard>
        </div>
    );
};

export default Home;