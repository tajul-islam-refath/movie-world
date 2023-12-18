import React from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <section className="w-full h-[100vh] relative">
      <div className="login-blur"></div>
      <div className="w-[30%] h-auto  text-white border rounded-lg border-slate-400 py-8 px-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-2">
        <form action="" className="w-full flex flex-col gap-2">
          <input
            type="text"
            placeholder="username"
            className="w-full p-2 px-3 rounded-full border-[1.5px] border-red-700 text-slate-400 text-[18px] focus:outline-blue-500"
          />
          <input
            type="email"
            placeholder="email@gmail.com"
            className="w-full p-2 px-3 rounded-full border-[1.5px] border-red-700 text-slate-400 text-[18px] focus:outline-blue-500"
          />
          <input
            type="password"
            placeholder="********"
            className="w-full p-2 px-3 rounded-full border-[1.5px] border-red-700 text-slate-400 text-[18px] focus:outline-blue-500"
          />
          <button className="block w-full bg-blue-500 text-white py-1 rounded-full font-semibold">
            Registration
          </button>
        </form>
        <Link to="/login" className="block my-4 text-red-400">
          Already have an account?
        </Link>
      </div>
    </section>
  );
};

export default Registration;
