import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../nav/NavBar";
import Footer from "../footer/Footer";

const MainLayout = () => {
  return (
    <>
      {/* Nav menu  */}
      <NavBar />
      {/* main */}
      <main>
        <Outlet />
      </main>
      {/* Footer  */}
      <Footer />
    </>
  );
};

export default MainLayout;
