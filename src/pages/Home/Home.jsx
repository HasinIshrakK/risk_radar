import React from 'react';
import HowItWorks from './HowItWorks';
import PasswordReset from '../../PasswordReset/PasswordReset';


import DetectionHighAmount from '../../AmountDetection/DetectionAmount';


const Home = () => {
    return (
        <div>
           <HowItWorks></HowItWorks>
           <PasswordReset></PasswordReset>
           <DetectionHighAmount></DetectionHighAmount>
        </div>
    );
};

export default Home;