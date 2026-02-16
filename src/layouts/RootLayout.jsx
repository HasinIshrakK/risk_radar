<<<<<<< HEAD
import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const RootLayout = () => {
    return (
        <>
            <div><Navbar></Navbar></div>
            <div className='mx-6 md:mx-20'>
                <Outlet></Outlet>
            </div>
            <div><Footer></Footer></div>
        </>
    );
=======
import React from "react";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <>
      <div>Navbar</div>
      <div className="mx-6 md:mx-20">
        <Outlet></Outlet>
      </div>
      <div>Footer</div>
    </>
  );
>>>>>>> aeda9ff18adf843c51adf0ee947a58a4f94013d4
};

export default RootLayout;
