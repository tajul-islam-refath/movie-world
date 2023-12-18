import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../nav/NavBar";

const MainLayout = () => {
  return (
    <>
      {/* global loading */}
      {/* Nav menu  */}
      <NavBar />
      {/* main */}
      <main>
        <Outlet />
      </main>
      {/* Footer  */}
    </>
  );
};

export default MainLayout;
