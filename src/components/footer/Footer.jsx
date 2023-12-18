import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto flex justify-between">
        <div className="w-[33%]">
          <h1 className="text-white uppercase font-bold">upcomming movies</h1>
          <p className="mt-2 text-slate-300">Jawan</p>
          <p className="text-slate-300">Barbie</p>
        </div>
        <div className="w-[33%]">
          <h1 className="text-white uppercase font-bold">additional pages</h1>
          <p className="mt-2 text-slate-300">Terms & Conditions</p>
          <p className="text-slate-300">Privacy Policy</p>
        </div>
        <div className="w-[33%]">
          <h1 className="relative inline-block">
            <span className="text-blue-500 font-bold uppercase">Movie </span>
            <br />
            <span className="absolute right-0 text-[10px] text-white">
              World
            </span>
          </h1>
          <p className="mt-4 text-slate-300">
            @Tajul Islma Refath, All right recived{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
