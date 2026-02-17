import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const RootLayout = () => {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <div className="max-w-6xl mx-auto">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default RootLayout;
