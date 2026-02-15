import React from 'react';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <>
            <div>Navbar</div>
            <div className='mx-6 md:mx-20'>
                <Outlet></Outlet>
            </div>
            <div>Footer</div>
        </>
    );
};

export default RootLayout;