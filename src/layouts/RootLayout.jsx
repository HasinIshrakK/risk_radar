import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const RootLayout = () => {
  return (
    <>
      <div className="poppins-regular">
        <Navbar></Navbar>
        <div className="max-w-7xl mx-auto">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default RootLayout;
