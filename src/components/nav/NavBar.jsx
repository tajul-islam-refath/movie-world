import React from "react";

const NavBar = () => {
  return (
    <nav className=" py-6 bg-black text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="relative">
          <span className="text-blue-500 font-bold uppercase">Movie </span>
          <br />
          <span className="absolute right-0 text-[10px]">World</span>
        </div>
        <div className="flex gap-8 text-[14px] font-semibold">
          <p>Get Pro</p>
          <p>Movies</p>
          <p>Watch List</p>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
