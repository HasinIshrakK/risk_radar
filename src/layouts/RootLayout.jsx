import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const RootLayout = () => {
  return (
    <>
      <div className="poppins-regular">
        <div>
          <Navbar></Navbar>
        </div>
        <div className="mx-6 md:mx-20">
          <Outlet></Outlet>
        </div>
        <div>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
};

export default RootLayout;
